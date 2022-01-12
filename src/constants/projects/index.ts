import { ProjectData, TechStack, Roles, KindOfLink } from "../../utils/types";

export const projects: ProjectData[] = [
  {
    projectName: "Isla Towi",
    img: "https://play-lh.googleusercontent.com/AEA0wEiWeuIel_FCQyf0SzsxGGyujBwY7cQ1wJens3kmYUanKH3WTmX1mz8SVawxRg=s180-rw",
    roles: [Roles.Programmer],
    techStack: [TechStack.Csharp, TechStack.Unity],
    links: [
      {
        label: "Play Store",
        kind: KindOfLink.Android,
        uri: "https://play.google.com/store/apps/details?id=com.Pixframestudios.towiisland",
      },
      {
        label: "App Store",
        kind: KindOfLink.Apple,
        uri: "https://apps.apple.com/us/app/isla-towi/id885096042",
      },
      {
        label: "Towi.com",
        kind: KindOfLink.Page,
        uri: "http://towi.com.mx/",
      },
    ],
    description:
      "Serious game made to help children to develop their cognitive skills in age between six and twelve years.",
  },
  {
    projectName: "Matematia",
    img: "https://matematia.com/static/media/DrAyax-01.fd457cf8.svg",
    roles: [Roles.Programmer],
    techStack: [TechStack.Ts, TechStack.React, TechStack.Node],
    links: [
      {
        label: "Page",
        kind: KindOfLink.Page,
        uri: "https://matematia.com/",
      },
    ],
    description:
      "Matematia.com is a gamified platform to help teenagers with their math skills, the project was made with React and Typescript",
  },
  {
    projectName: "The Organization",
    img: "https://img.itch.zone/aW1nLzMzMzg2MjEuZ2lm/315x250%23cm/EiB4Sv.gif",
    roles: [Roles.Programmer, Roles.Director],
    techStack: [TechStack.Csharp, TechStack.Unity],
    links: [
      {
        label: "Itch.io",
        kind: KindOfLink.Itch,
        uri: "https://barricagames.itch.io/the-organization",
      },
      {
        label: "Repository",
        kind: KindOfLink.Code,
        uri: "https://github.com/dragaus/The_Organization",
      },
    ],
    description:
      "This is a RTS game made for the Holistic3D Lockdown Game Jam was made with Unity, use Unity's Navmesh, the game is available for Windows, Mac and WebGl",
  },
  {
    projectName: "SNAKE",
    img: "https://img.itch.zone/aW1nLzMxODA2ODAucG5n/315x250%23c/XorwJs.png",
    roles: [Roles.Programmer, Roles.Director, Roles.Artist],
    techStack: [TechStack.Js, TechStack.Phaser],
    links: [
      {
        label: "Itch.io",
        kind: KindOfLink.Itch,
        uri: "https://barricagames.itch.io/snake",
      },
      {
        label: "Repository",
        kind: KindOfLink.Code,
        uri: "https://github.com/dragaus/Phaser_Snake",
      },
    ],
    description:
      "This is classic snake game made with Phaser3 and well documented in github to be used by anyone, to learn the basics of phaser.",
  },
  {
    projectName: "Alien motion",
    img: "https://img.itch.zone/aW1nLzIzODcwODkucG5n/315x250%23c/uoGf8m.png",
    roles: [Roles.Programmer, Roles.Director, Roles.Artist],
    techStack: [TechStack.Csharp, TechStack.Unity],
    links: [
      {
        label: "Itch.io",
        kind: KindOfLink.Itch,
        uri: "https://barricagames.itch.io/alien-motion",
      },
      {
        label: "Repository",
        kind: KindOfLink.Code,
        uri: "https://github.com/dragaus/Alien-Motion",
      },
    ],
    description:
      "This is a couch game, made for the Couch Games in Stop Motion Jam, where up to four players can play, the project was made with stop motion techinques.",
  },
  {
    projectName: "No te infectes",
    img: "https://img.itch.zone/aW1nLzMxNzI0OTEucG5n/original/4kwARW.png",
    roles: [Roles.Programmer, Roles.Director],
    techStack: [TechStack.Csharp, TechStack.Unity],
    links: [
      {
        label: "Itch.io",
        kind: KindOfLink.Itch,
        uri: "https://pixframe-studios.itch.io/no-te-infectes",
      },
    ],
    description:
      "WebGl game with Unity to help children understand the basic WHO information about COVID-19 pandemic, the game was made in three weeks.",
  },
  {
    projectName: "Nano Battles",
    img: "https://play-lh.googleusercontent.com/B0_vIHyM5XmMIEdewWI6eGflBUnxiYAZXwTD8zQMUnbYZqOF9y3vFSBmGiPbLXh0Ado=w720-h310-rw",
    roles: [Roles.Programmer, Roles.Director, Roles.Artist],
    techStack: [TechStack.Csharp, TechStack.Csharp],
    links: [
      {
        label: "Play Store",
        kind: KindOfLink.Android,
        uri: "https://play.google.com/store/apps/details?id=com.BarricaGames.NanoBattles",
      },
    ],
    description:
      "Mobile local multiplayer made with unity and pixel art, the idea of the game is to simple made multiple games with one button interaction.",
  },
  {
    projectName: "Food Marathon",
    img: "https://play-lh.googleusercontent.com/7FXGmS9mXkdPekZ59KICgxKZLDuvf78lOormWE9O0-9j-UQyL21UaXJB3GE0HZm5GyM=w720-h310-rw",
    roles: [Roles.Programmer, Roles.Director],
    techStack: [TechStack.Csharp, TechStack.Csharp],
    links: [
      {
        label: "Play Store",
        kind: KindOfLink.Android,
        uri: "https://play.google.com/store/apps/details?id=com.andoid.FoodRun",
      },
    ],
    description:
      "Mobile game made with Unity, includes Unity IAP and Unity Ads.",
  },
];
