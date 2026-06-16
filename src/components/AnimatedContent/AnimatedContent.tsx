import { animated, useTrail } from "react-spring";

interface AnimatedContentProps {
  children: React.ReactNode;
}

/**
 * Animates multiple elements onto the screen in a staggered pattern
 * @param children an array of elements to animate
 */
export const AnimatedContent = ({ children }: AnimatedContentProps) => {
  const content = Array.isArray(children) ? children : [children];

  const contentTrail = useTrail(content.length, {
    from: { y: "-15vh", x: "100vw"  },
    to: { y: "0", x: "0" },
    onRest: () => {
      const id = window.location.hash.substring(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (el) el.scrollIntoView();
    },
  });

  return (
    <>
      {contentTrail.map((style, i) => (
        <animated.div key={i} style={{ ...style, willChange: "transform" }}>
          {content[i]}
        </animated.div>
      ))}
    </>
  );
};
