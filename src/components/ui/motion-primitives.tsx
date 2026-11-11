import {
  createContext,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import {
  MotionConfig,
  motion,
  useAnimationControls,
  useInView,
  useReducedMotion,
} from "framer-motion";

/** Every timing and distance for the site's scroll and hover motion. */
const REVEAL_DISTANCE = 16;
const REVEAL_DURATION = 0.5;
const REVEAL_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const STAGGER_STEP = 0.07;
const STAGGER_MAX_STEPS = 5;
const STAGGER_BATCH_WINDOW_MS = 120;
const HOVER_LIFT = -3;

const HIDDEN = { opacity: 0, y: REVEAL_DISTANCE };
const SHOWN = { opacity: 1, y: 0 };
const REVEAL_TRANSITION = { duration: REVEAL_DURATION, ease: REVEAL_EASE };
const HOVER_TRANSITION = { type: "spring", stiffness: 320, damping: 30 } as const;

// A pixel margin rather than `amount`: a fractional threshold can never be met
// by a block much taller than the viewport, which would leave it invisible.
const VIEWPORT = { once: true, margin: "0px 0px -48px 0px" } as const;

type WrapperProps = { children: ReactNode; className?: string };

/** Mount once at the app root so all motion components honour the OS setting. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

/** Fades a block up the first time it scrolls into view. */
export function FadeUp({
  children,
  className,
  delay = 0,
}: WrapperProps & { delay?: number }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={HIDDEN}
      whileInView={SHOWN}
      viewport={VIEWPORT}
      transition={{ ...REVEAL_TRANSITION, delay }}
    >
      {children}
    </motion.div>
  );
}

type StaggerBatch = { size: number; lastEnteredAt: number };

const StaggerBatchContext = createContext<StaggerBatch>({
  size: 0,
  lastEnteredAt: -Infinity,
});

function nextStaggerDelay(batch: StaggerBatch) {
  const now = performance.now();
  const joinsBatch = now - batch.lastEnteredAt < STAGGER_BATCH_WINDOW_MS;

  batch.size = joinsBatch ? batch.size + 1 : 0;
  batch.lastEnteredAt = now;

  return Math.min(batch.size, STAGGER_MAX_STEPS) * STAGGER_STEP;
}

/** Layout wrapper for a list or grid whose direct children are `StaggerItem`s. */
export function Stagger({ children, className }: WrapperProps) {
  const batch = useRef<StaggerBatch>({ size: 0, lastEnteredAt: -Infinity });

  return (
    <StaggerBatchContext.Provider value={batch.current}>
      <div className={className}>{children}</div>
    </StaggerBatchContext.Provider>
  );
}

/**
 * Each item watches its own visibility and staggers against whichever siblings
 * entered with it, so every row of a tall grid reveals as it is reached and
 * the delay never depends on the item's position in the list.
 */
export function StaggerItem({ children, className }: WrapperProps) {
  const reduceMotion = useReducedMotion();
  const batch = useContext(StaggerBatchContext);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, VIEWPORT);
  const controls = useAnimationControls();

  useEffect(() => {
    if (!inView || reduceMotion) return;

    controls.start({
      ...SHOWN,
      transition: { ...REVEAL_TRANSITION, delay: nextStaggerDelay(batch) },
    });
  }, [inView, reduceMotion, controls, batch]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduceMotion ? false : HIDDEN}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}

/** Raises a card or link slightly under a mouse pointer. Ignored on touch. */
export function HoverLift({ children, className }: WrapperProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      whileHover={{ y: HOVER_LIFT }}
      transition={HOVER_TRANSITION}
    >
      {children}
    </motion.div>
  );
}
