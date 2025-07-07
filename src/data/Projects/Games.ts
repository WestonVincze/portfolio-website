import { ProjectDetails } from "./types";

export const Games: ProjectDetails[] = [
  {
    projectName: "Ant Simulator",
    category: "game",
    id: "ant-simulator",
    year: "2025",
    status: "in progress",
    skills: [
      "React",
      "ThreeJS",
      "Koota",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    subheading: "3D Web Simulation",
    description:
      "Ant Simulator is a browser game for visualizing realistic ant behavior. Ants leave pheromones that evaporate over time to guide other ants toward food or back to their nest. Using sensors, ants will follow the strongest pheromone trails, reinforcing high value paths while low value paths degrade.",
    highlights: [
      "Highly performant ECS state management using Koota",
      "Realistic ant behavior and visualization",
      "Mobile friendly - highly responsive and small download size",
      "Handles hundreds of ants and thousands of pheromone nodes with little performance loss",
    ],
    links: [
      {
        icon: "Eye",
        text: "Live Demo",
        url: "https://ant-simulator-koota.vercel.app",
      },
      {
        icon: "GitHub",
        text: "Source Code",
        url: "https://github.com/WestonVincze/ant-simulator",
      },
    ],
  },
  {
    projectName: "Baby Simulator",
    category: "game",
    id: "baby-simulator",
    year: "2025",
    status: "in progress",
    skills: [
      "Svelte",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Vitest",
      "Figma",
    ],
    subheading: "Drag & Drop Browser Game",
    description:
      "Baby Simulator is a simple browser game in which the player offers toys to a baby to stave off boredom. The simulation ends when the boredom meter fills up. Each toy is categorized by its unique properties which build up 'aversion' and make the toy less appealing. Offer new and different toys to keep baby entertained for as long as possible. This project was built as a testing grounds for my AI decision making JavaScript library based on utility theory called utility-ai. In utility-ai, each possible action is 'appraised' and represented numerically by a value of 0-1. A final decision is made based on the highest score.",
    highlights: [
      "Reactive Svelte driven UI using stores for state management",
      "Complex decision making system that compares multiple actions based on utility theory",
      "Customized formulas designed to assign numeric value to arbitrary data",
      "Detailed data visualization and development tools",
    ],
    links: [
      {
        icon: "Eye",
        text: "Live Demo",
        url: "https://baby-simulator.vercel.app",
      },
      {
        icon: "GitHub",
        text: "Source Code",
        url: "https://github.com/WestonVincze/baby-simulator",
      },
    ],
  },
  {
    projectName: "Necro Vs Crown",
    category: "game",
    id: "necro-vs-crown",
    screenshots: ["necro-vs-crown-1.jpg"],
    year: "2024",
    status: "in progress",
    skills: [
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Vitest",
      "Figma",
      "Colyseus",
      "BitECS",
      "Phaser",
      "RxJS",
      "Svelte",
    ],
    subheading: "Personal Project",
    description:
      "Necro VS Crown is an ambitious multiplayer browser game currently in development. It was originally a single player POC known as Necro Cursor. Necro VS Crown has two factions with opposing goals and distinct mechanics. While playing as the Necro, you control a lowly necromancer and amass an army of skeletons that you have direct control over. While playing as the Crown, you collect gold over time that can be spent to spawn units that will automatically chase and attack Necro units. The former is akin to the 'survivor' rogue-like genre, while the latter is akin to the deck building rogue-like genre.",
    highlights: [
      "Highly performant data-oriented architecture built with bitECS (ECS framework)",
      "Rigorous unit tests for most systems (over 85 tests)",
      "Lightweight and reactive UI built with Svelte",
      "Two unique game modes with distinct mechanics, goals, and controls",
      "Modular components and systems built in a shared package",
      "Asymmetrical multiplayer gameplay (under development)",
    ],
    links: [
      {
        icon: "GitHub",
        text: "Source Code",
        url: "https://github.com/WestonVincze/necro-vs-crown",
      },
    ],
  },
  {
    projectName: "Necro Cursor",
    category: "game",
    id: "necro-cursor",
    year: "2024",
    status: "complete",
    skills: [
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "PixiJS",
      "RxJS",
      "Vercel",
    ],
    subheading: "POC Demo",
    description:
      "Necro Cursor is an experimental POC browser game in which you play as a lowly necromancer who must defend himself from a horde of angry townsfolk. Summon skeletons from the bones of your enemies to defend you and survive as long as you can!",
    highlights: [
      "Detailed run stats and local highscores",
      "Highly reactive and event-driven solutions",
      "Lightweight project with minimal third party libraries",
      "Custom debug tools and testing environment",
      "Detailed documentation and post-mortem in the README",
    ],
    links: [
      {
        icon: "Eye",
        text: "Play Game",
        url: "https://necro-cursor.vercel.app",
      },
      {
        icon: "GitHub",
        text: "Source Code",
        url: "https://github.com/WestonVincze/necro-cursor",
      },
    ],
  },
  {
    projectName: "Dwarf Forges",
    category: "game",
    id: "dwarf-forges",
    year: "2023",
    status: "complete",
    skills: ["Unity", "Csharp", "Blender", "Figma"],
    subheading: "Game Jam (Summer Slow Jam 2023)",
    description:
      "Dwarf Forges is a 3D RTS style game built with Unity. The team consisted of 3 developers, 1 artist, and 1 sound engineer. Dwarf Forges is a game where you play as an enchanted forge and must save yourself from a horde of Dwarves who intend to drag you back to their fortress. Smelt down your enemies into metal bars and use them to forge a variety of unique weapons. Use those weapons to fend off the dwarves until there are none left!",
    contributions:
      "I was the team lead and a developer for this project. As the team lead I created tickets, assembled meetings, lead collaborative brainstorming sessions, documented game mechanics and code standards, and guided team decisions. As a developer I implemented various features (camera movement, animation, game state), managed the repository, and conducted code reviews.",
    highlights: [
      "Physics based movement and object interactions",
      "Third person RTS Camera controls with locked and free roam camera states",
      "Modular, event driven components for managing game states",
      "Custom 3D models created in Blender and concept art sketches",
      "UI mockup and feature planning using Figma and FigJam",
    ],
    links: [
      {
        icon: "GitHub",
        text: "Source Code",
        url: "https://github.com/WestonVincze/dwarf-forges",
      },
    ],
  },
  {
    projectName: "Tossed Away",
    category: "game",
    id: "tossed-away",
    year: "2022",
    status: "complete",
    skills: ["Unity", "Csharp", "Aseprite", "Trello"],
    subheading: "Game Jam (7DRL Challenge 2022)",
    description:
      "Tossed away was a submission for the 7DRL Challenge (a one week game jam) in 2022. The team consisted of 2 developers, 2 artists, 1 sound designer, and 1 musician. In Tossed Away, you play as a skeleton who was summoned to fetch a cook book. You use your bones to destroy runic pillars and fend off enemies as you venture through your master's lair. Be careful! Throwing your last bone results in death. Don't make your master send in a replacement...",
    contributions:
      "I was a developer and technical artist for this project. My primary tasks involved implementing animation logic, item interactions, scene management, environment integration, and contributing to the character controller.",
    highlights: [
      "Successfully submitted our MVP with 3 levels within 7 day time limit",
      "Unique gameplay mechanic in which the player uses health (bones) as fuel for attacks",
      "Top-down, 2d environment with a cohesive character style that extends to the UI and cursor",
    ],
    links: [
      {
        icon: "GitHub",
        text: "Source Code",
        url: "https://github.com/Roasted-Goblin-Studio/7DRL-Jam",
      },
      {
        icon: "Itch",
        text: "Play Game",
        url: "https://roasted-goblin-studios.itch.io/tossed-away",
      },
    ],
  },
  {
    projectName: "Blood & Gold",
    category: "game",
    id: "blood-and-gold",
    year: "2021",
    status: "complete",
    skills: ["Unity", "Csharp", "Aseprite", "Trello"],
    subheading: "Game Jam (Metroidvania Month 13)",
    description:
      "Blood & Gold is a submission for the 'Metroidvania Month 13' Game Jam. The team consisted of 2 developers, 3 artists, 1 sound designer, and 1 musician. Blood & Gold is a game in which you play as a brave cowboy who delves into a forgotten mine that he should have left forgotten. Venture through the mines with a revolver to fend off corrupted enemies and a lantern to light your way. Fend off zombies and mutant insects in order to find the key and unlock the golden gate. Discover hidden paths, special challenges, bonus items, and easter eggs. Find and defeat the foreman to earn a special weapon, if you dare! Defeat the mutant canary to end the mine's corruption and become a hero.",
    contributions:
      "I played a pivotal role in assembling the team and organizing collaborative game design and planning meetings. As a developer I implemented all animation logic, lantern and lighting logic, modular item interaction, health and death mechanics, game state, scene transitions, and I contributed to the character controller and state management. As a technical artist I converted sprite sheets into animations and tile sets, implemented UI and Game Menu, and painted environment using tile sets based on level layout mockup. I also continued development of the project post-submission and squished bugs, added features, implemented player feedback, improved the player's weapon animations, and created animations for some enemies.",
    highlights: [
      "3100+ page views, 1600+ browser plays, and 180+ downloads on Itch.io",
      "Voted #2 for audio due to its environment-driven soundtrack/SFX and adrenaline fueling boss battle tracks",
      "Live WebGL version and downloads for all operating systems available on Itch.io",
      "All sprite sheets, tile sets, music, SFX, and code were created and owned by team members",
      "Creative UI elements used to convey player states like health, ammo, and light",
      "Challenging gameplay that teaches the player how to play one death at a time",
      "Lantern light mechanics create a time incentive for the player due to limited lantern oil",
    ],
    links: [
      {
        icon: "GitHub",
        text: "Source Code",
        url: "https://github.com/WestonVincze/blood-and-gold",
      },
      {
        icon: "Itch",
        text: "Play Game",
        url: "https://roasted-goblin-studios.itch.io/blood-and-gold",
      },
    ],
  },
];
