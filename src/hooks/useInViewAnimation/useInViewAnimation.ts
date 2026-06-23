import { AppStates, useAppState } from "@providers/AppStateProvider";
import { useSelector } from "@xstate/react";
import { ElementType, RefObject } from "react";
import {
  SpringValues,
  useInView,
  useSpring,
  animated,
  AnimatedComponent,
} from "@react-spring/web";

type AnimationType = "slideUp" | "slideLeft" | "shrink" | "grow";

const Animations: Record<
  AnimationType,
  { from: object; to: object; tension: number }
> = {
  slideUp: {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 },
    tension: 100,
  },
  slideLeft: {
    from: { opacity: 0, x: -25 },
    to: { opacity: 1, x: 0 },
    tension: 100,
  },
  shrink: {
    from: { opacity: 0, scale: 1.2 },
    to: { opacity: 1, scale: 1 },
    tension: 500,
  },
  grow: {
    from: { opacity: 0, scale: 0.75 },
    to: { opacity: 1, scale: 1 },
    tension: 500,
  },
};

/**
 * Implements scroll-driven animations using `react-spring`.
 *
 * @param component element that will be animated (div, h2, etc)
 * @param animation the type of animation that will be triggered
 * @returns
 *
 * `ref`: place on the element that should trigger the animation once in view
 *
 * `animatedStyles`: place on the `AnimatedComponent`
 *
 * `AnimatedComponent`: a variation of the passed `component` that is compatible with `react-spring`
 *
 * `isInView`: a boolean value that is `true` while the `ref` element is in view and AppState is `ready` (allows you to add additional custom animations)
 */
export const useInViewAnimation = <T extends ElementType>(
  component: T,
  animation: AnimationType = "slideUp",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): [RefObject<any>, SpringValues, AnimatedComponent<T>, boolean] => {
  const [ref, isInView] = useInView({ amount: 0.15 });
  const { appState } = useAppState();
  const ready = useSelector(appState, (state) =>
    state.matches(AppStates.ready),
  );

  const animatedStyles = useSpring({
    from: Animations[animation].from,
    to: ready && isInView ? Animations[animation].to : {},
    config: { tension: Animations[animation].tension },
  });

  const AnimatedComponent = animated(component);

  return [ref, animatedStyles, AnimatedComponent, isInView && ready];
};
