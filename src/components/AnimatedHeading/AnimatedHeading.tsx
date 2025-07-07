import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Typewriter } from "../Typewriter";
import { useAppState } from "@providers/AppStateProvider";

type Path = "/" | "/resume" | "/projects";

const subHeadingText = {
  "/": "Freelance Web Developer",
  "/resume": "My Resume",
  "/projects": "My Projects",
};

enum AnimationStates {
  name,
  subHeading,
  done,
}

export const AnimatedHeading = () => {
  const currentPage = usePathname() as Path;
  const [animationState, setAnimationState] = useState(AnimationStates.name);
  const { appState } = useAppState();

  // skip animation if url contains a hash
  useEffect(() => {
    if (window.location.hash) {
      setAnimationState(AnimationStates.done);
      return;
    }
  }, []);

  // listen for done state and update App state accordingly
  useEffect(() => {
    if (animationState !== AnimationStates.done) return;

    appState.send("INTRO_ANIMATION_COMPLETE");
  }, [animationState, appState]);

  const nextAnimationState = (): void => {
    if (animationState === AnimationStates.done) return;
    setAnimationState(animationState + 1);
  };

  return (
    <header>
      {animationState >= AnimationStates.name && (
        <Typewriter
          text="Hi, I'm Weston Vincze."
          tagType="h1"
          centered={true}
          onDoneTyping={() => nextAnimationState()}
        />
      )}
      {animationState >= AnimationStates.subHeading && (
        <Typewriter
          text={subHeadingText[currentPage]}
          inlineTag={true}
          centered={true}
          onDoneTyping={() => nextAnimationState()}
        />
      )}
    </header>
  );
};
