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
      "Serious game made to help children to develop their cognitive skills in age between six and twelve years",
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
      "Mobile game made with Unity, includes Unity IAP and Unity Ads",
  },
];
