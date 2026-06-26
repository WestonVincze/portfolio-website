import { ProjectDetails } from "./types";

export const Games: ProjectDetails[] = [
  {
    projectName: "Necro Vs Crown",
    category: "game",
    order: 20,
    id: "necro-vs-crown",
    screenshots: [
      {
        url: "necro-vs-crown-screenshot-1.webp",
        alt: "Necro Vs Crown lobby screenshot",
        description: "Multiplayer lobby screen with two players connected",
      },
      {
        url: "necro-vs-crown-screenshot-2.webp",
        alt: "Necro gameplay screenshot 1",
        description:
          "Necro gameplay - camera fixed to Necro with skeletons nearby",
      },
      {
        url: "necro-vs-crown-screenshot-3.webp",
        alt: "Necro gameplay screenshot 2",
        description: "Necro gameplay - skeletons fighting a peasant",
      },
      {
        url: "necro-vs-crown-screenshot-4.webp",
        alt: "Necro gameplay screenshot 3",
        description: "Crown gameplay - showing Crown UI with a selected card",
      },
      {
        url: "necro-vs-crown-screenshot-5.webp",
        alt: "Necro gameplay screenshot 4",
        description:
          "Crown gameplay - after playing the previously selected card",
      },
      {
        url: "necro-vs-crown-screenshot-6.webp",
        alt: "Game customization screenshot",
        description:
          "Pre-game customization settings - modify starting deck allows players to choose starting cards for the Crown",
      },
      {
        url: "necro-vs-crown-screenshot-7.webp",
        alt: "Playground scene screenshot 1",
        description:
          "Custom development tools in the playground scene - showcases pause, frameAdvance, unit spawning, and state management for selected unit",
      },
      {
        url: "necro-vs-crown-screenshot-8.webp",
        alt: "Playground scene screenshot 2",
        description:
          "Custom development tools in the playground scene - showcases systems toggle and step tool, allowing developers to customize and iterate through the systems pipeline",
      },
    ],
    flowCharts: [
      {
        title: "Multiplayer Networking Flow",
        chart: `
        sequenceDiagram
          participant CC as Crown client
          participant SRV as Colyseus server
          participant NC as Necro client

          note over CC,NC: ① Room lifecycle

          CC->>SRV: joinOrCreate()
          NC->>SRV: joinOrCreate()
          SRV-->>SRV: create room on demand
          SRV-->>CC: assign role: Crown
          SRV-->>NC: assign role: Necro

          note over CC,NC: ② Input messages (client → server)

          loop Player Actions
              CC->>SRV: play card
              NC->>SRV: move / cast spell
              SRV-->>SRV: validate & apply to ECS
          end

          note over CC,NC: ③ Authoritative server tick

          loop Server tick - 60fps
              SRV-->>SRV: run shared ECS systems
              SRV-->>SRV: run server-only systems
              SRV-->>SRV: serialize component state changes

              note over CC,NC: ④ World state changes broadcast (server → clients)

              SRV-->>CC: broadcast state patch
              SRV-->>NC: broadcast state patch
              CC-->>CC: update local state
              NC-->>NC: update local state
          end
        `,
        fallbackUrl:
          "https://github.com/WestonVincze/necro-vs-crown/blob/master/docs/networking_flow.md",
      },
      {
        title: "Monorepo Architecture Overview",
        chart: `
        graph TD
          subgraph client["Client"]
              C1[Phaser scenes]
              C2[Client-only ECS systems]
              C3[Input handlers]
              C4[UI - Svelte components]
          end

          subgraph server["Server"]
              V1[Colyseus room definitions]
              V2[Server only ECS systems]
              V3[Upgrade Manager]
              V4[Dockerfile deployment]
          end

          subgraph ECS["ECS resources (BitECS)"]
            E1[Entity creation factories]
            E2[Component definitions]
            E3[Shared systems]
          end

          subgraph shared["Shared"]
              ECS
              S1[Stores & Game Events]
              S2[Game data]
              S3[TypeScript types]
              S4[Helpers]
          end


          client -->|imports| shared
          server -->|imports| shared
        `,
        fallbackUrl:
          "https://github.com/WestonVincze/necro-vs-crown/blob/master/docs/monorepo_architecture.md",
      },
    ],
    year: "2026",
    status: "in progress",
    skills: [
      "Phaser",
      "Svelte",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Docker",
      "Colyseus",
      "BitECS",
      "RxJS",
      "Vitest",
      "Figma",
    ],
    subheading: "Real Time Multiplayer Game",
    description:
      "Necro Vs Crown is an ambitious server-authoritative multiplayer browser game currently in development. It a continuation of a single player PoC I built called Necro Cursor. Necro Vs Crown features two unique factions with opposing goals and distinct mechanics. The Necro's gameplay is akin to a survivor rogue-like, while the Crown's gameplay is akin to a deck building rogue-like. As the game progresses, players select upgrades that empower their units and alter gameplay. The Necro player has direct control over a lowly necromancer and amasses an army of skeletons from the bones of slain enemies. The Crown player collects gold over time that can be spent to spawn units who will chase and attack Necro units.",
    highlights: [
      "Highly performant data-oriented architecture built with bitECS (ECS framework)",
      "Sandbox mode and other development tools to improve productivity",
      "Rigorous unit tests on gameplay systems to catch bugs early",
      "Lightweight and reactive UI built with Svelte",
      "Two unique game modes with distinct mechanics, goals, and controls",
      "Modular components and systems built in a shared package",
      "Asymmetrical multiplayer gameplay",
      "Structured monorepo with shared, client, and server packages",
      "Autodeploy pipeline and docker containerization for server",
    ],
    links: [
      {
        icon: "GitHub",
        text: "Source Code",
        url: "https://github.com/WestonVincze/necro-vs-crown",
      },
      {
        icon: "Eye",
        text: "Live Demo",
        url: "https://necro-vs-crown.vercel.app",
      },
    ],
  },
  {
    projectName: "Ant Simulator",
    category: "game",
    order: 30,
    id: "ant-simulator",
    year: "2025",
    skills: [
      "React",
      "ThreeJS",
      "Koota",
      "TypeScript",
      "JavaScript",
      "Tailwind",
      "HTML",
      "CSS",
    ],
    subheading: "3D Web Simulation",
    description:
      "Ant Simulator is a browser simulation game for visualizing realistic ant behavior. Ants leave pheromones that evaporate over time to guide other ants toward food (red/orange) or back to their colony (blue). Using sensors, ants will follow the strongest pheromone trails, reinforcing high value paths while low value paths degrade - simulating realistic pathfinding behavior.",
    highlights: [
      "Highly performant ECS state management using Koota",
      "Custom shader to draw pheromone trails, scaling opacity and size with the strength of the pheromone",
      "Demonstrates realistic ant behavior and pathfinding",
      "Mobile friendly - responsive with small download size",
      "Handles hundreds of ants, thousands of pheromone nodes, and hefty calculations",
    ],
    screenshots: [
      {
        url: "ant-simulator-screenshot-1.webp",
        alt: "Ant simulator main menu screenshot showing start simulation, how it works, and options buttons",
        description: "Ant Simulator main menu - basic landing page with buttons to start, learn about, and modify the simulation."
      },
      {
        url: "ant-simulator-screenshot-2.webp",
        alt: "Ant simulator gameplay screenshot showing many ants walking away from their ant hill colony",
        description: "Ant Simulator gameplay 1 - ants leaving the colony and leaving pheromone trails to guide other ants back to their colony."
      },
      {
        url: "ant-simulator-screenshot-3.webp",
        alt: "Ant simulator gameplay screenshot 2 - close up of anthill with one ant carrying food",
        description: "Ant Simulator gameplay 2 - close up shot of the first ant to bring food back to the colony, leaving a pheromone trail to lead to the food source."
      },
      {
        url: "ant-simulator-screenshot-4.webp",
        alt: "Ant simulator gameplay screenshot showing a zoomed out overview of the ants and their pheromone pathways",
        description: "Ant Simulator gameplay 3 - food source pathways beginning to naturally develop."
      },
      {
        url: "ant-simulator-screenshot-5.webp",
        alt: "Ant simulator gameplay screenshot showing a top-down zoomed out overview of the ants and their pheromone pathways",
        description: "Ant Simulator gameplay 4 - top-down view of ants and their pheromone trails."
      },
      {
        url: "ant-simulator-screenshot-6.webp",
        alt: "Ant simulator gameplay screenshot showing a close up of the ants walking to and from their colony with a sunset in the background",
        description: "Ant Simulator gameplay 5 - close up view of ants crawling in and out of their colony."
      },
      {
        url: "ant-simulator-screenshot-7.webp",
        alt: "Ant simulator debug gizmo screenshot showing two ants and the three large spherical sensors they use to detect pheromones",
        description: "Ant Simulator debug tools - custom gizmos to visually represent the sensors ants use to detect pheromones and steer."
      },
      {
        url: "ant-simulator-screenshot-8.webp",
        alt: "Ant simulator settings page screenshot showing the available customization options",
        description: "Ant Simulator settings - settings screen with customization options for the simulation.",
      },
    ],
    links: [
      {
        icon: "GitHub",
        text: "Source Code",
        url: "https://github.com/WestonVincze/ant-simulator",
      },
      {
        icon: "Eye",
        text: "Live Demo",
        url: "https://ant-simulator-koota.vercel.app",
      },
    ],
  },
  {
    projectName: "Baby Simulator",
    category: "game",
    order: 40,
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
    screenshots: [
      {
        url: "baby-simulator-screenshot-1.webp",
        alt: "Baby Simulator main menu with buttons screenshot",
        description:
          "Baby Simulator main menu - detailed mode, simulation mode, and how to play buttons.",
      },
      {
        url: "baby-simulator-screenshot-2.webp",
        alt: "Baby Simulator gameplay screenshot - baby sitting on play mat with toys in toy box below and boredom meter above",
        description:
          "Simulation gameplay - baby sitting on empty play mat with toys in toy box below.",
      },
      {
        url: "baby-simulator-screenshot-3.webp",
        alt: "Baby Simulator gameplay screenshot 2 - baby playing with rubber ducky on play mat with remaining toys in toy box below and boredom meter above",
        description:
          "Simulation gameplay - baby playing with rubber ducky on play mat.",
      },
      {
        url: "baby-simulator-screenshot-4.webp",
        alt: "Baby Simulator gameplay screenshot 3 - baby playing with toy with two other toys on play mat and detailed information displayed on the right",
        description:
          "Detailed mode gameplay - baby playing with toy on play mat, preference and aversion values displayed on the right.",
      },
      {
        url: "baby-simulator-screenshot-5.webp",
        alt: "Baby Simulator debug tools screenshot - baby sitting on play mat with grid overlay showing each tile value",
        description:
          "Debug tools - grid overlay showing the final calculated value of each tile as an overlay.",
      },
    ],
    flowCharts: [
      {
        title: "Decision Making Flow Chart",
        chart: `
          flowchart TD
          BS[(Baby Store)]
          TS[(Toy Store)]
          GS[(Grid Store)]
          CS[(Context Store)]

          C[Context]

          SA["Static Appraisals
            - idle (default)
            - moveToTile"]

          DA["Dynamic Appraisals
            - pickup toy
            - drop toy
            - play with toy"]

          R[Reasoner]

          Action@{ shape: diam, label: Best Action }
          AS[Action System]
          EA@{ shape: rounded, label: Execute Action }

          %% Final Flow
          BS & TS & GS -.-> CS -->|build context| C
          DA --> R
          C --> DA
          C --> R
          SA --> R
          R -->|evaluate appraisals| Action --> AS --> EA
        `,
        fallbackUrl:
          "https://github.com/WestonVincze/baby-simulator/blob/master/src/docs/decisionMakingSystem.md",
      },
      {
        title: "State Diagram",
        chart: `
          stateDiagram-v2

          [*] --> Idle
          Idle --> Move : moveToTile
          Move --> Play : pickupToy
          Play --> Idle : dropToy
        `,
        fallbackUrl:
          "https://github.com/WestonVincze/baby-simulator/blob/master/src/docs/babyState.md",
      },
    ],
    links: [
      {
        icon: "GitHub",
        text: "Source Code",
        url: "https://github.com/WestonVincze/baby-simulator",
      },
      {
        icon: "Eye",
        text: "Live Demo",
        url: "https://baby-simulator.vercel.app",
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
        icon: "GitHub",
        text: "Source Code",
        url: "https://github.com/WestonVincze/necro-cursor",
      },
      {
        icon: "Eye",
        text: "Play Game",
        url: "https://necro-cursor.vercel.app",
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
