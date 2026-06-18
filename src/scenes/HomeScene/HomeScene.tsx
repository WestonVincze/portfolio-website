import { Container } from "@components/Container";
import { FeaturedProjectCard } from "@components/FeaturedProjectCard";
import { HighlightedHeading } from "@components/HighlightedHeading";
import { WebDevWeston } from "@components/WebDevWeston";
import styles from "./HomeScene.module.css";
import { useInViewAnimation } from "@hooks/useInViewAnimation";

export const HomeScene = () => {
  const [ref, animatedStyles, AnimatedDiv] = useInViewAnimation(
    "div",
    "slideUp",
  );
  return (
    <Container centered={true}>
      <WebDevWeston />

      <section>
        <HighlightedHeading id={"featured"} text={"Featured Solo Projects"} />
        <AnimatedDiv
          ref={ref}
          style={animatedStyles}
          className={styles.featuredProjects}
        >
          <FeaturedProjectCard
            id="credit-cruisers"
            title="Credit Cruisers"
            description="Vehicle inventory management website designed, developed, and delivered for a client."
            skills={["NextJS", "TypeScript", "Tailwind"]}
            screenshot={{
              url: "credit-cruisers-screenshot-1.webp",
              alt: "Credit cruisers landing page screenshot",
            }}
          />
          <FeaturedProjectCard
            id="necro-vs-crown"
            title="Necro Vs Crown"
            description="Real-time multiplayer browser game I am actively developing (playable demo available)."
            skills={["Svelte", "TypeScript", "Phaser"]}
            screenshot={{
              url: "necro-vs-crown-screenshot-1.webp",
              alt: "Necro Vs Crown multiplayer lobby screenshot",
            }}
          />
        </AnimatedDiv>
      </section>
    </Container>
  );
};
