import { CertificateData } from "../../utils/types";
import QYDTFWXRTHDR from "../../assets/images/certificates/QYDTFWXRTHDR.png";
import RLRZGTM9AA4Z from "../../assets/images/certificates/RLRZGTM9AA4Z.png";
import EEY7GFJQXQEA from "../../assets/images/certificates/EEY7GFJQXQEA.png";
import LXEL4VCMAPQS from "../../assets/images/certificates/LXEL4VCMAPQS.png";
import SZM2HKBER2C7 from "../../assets/images/certificates/SZM2HKBER2C7.png";

const udemyLink = (id: string) => `https://www.udemy.com/certificate/${id}`;
const udemyImage = (id: string) =>
  `https://udemy-certificate.s3.amazonaws.com/image/${id}.jpg`;

const courseraLink = (id: string) =>
  `https://www.coursera.org/account/accomplishments/certificate/${id}`;

export const certificates: CertificateData[] = [
  {
    certificateLink: udemyLink("UC-6YTMPDH9"),
    imageLink: udemyImage("UC-6YTMPDH9"),
    courseName: "The Beginner's Guide to Artificial Intelligence in Unity",
    finishDate: "01/2018",
  },
  {
    certificateLink: udemyLink("UC-E8LAV3ZC"),
    imageLink: udemyImage("UC-E8LAV3ZC"),
    courseName: "Create original vector game art with Inkscape for free!",
    finishDate: "12/2017",
  },
  {
    certificateLink: udemyLink("UC-40VIEWM9"),
    imageLink: udemyImage("UC-40VIEWM9"),
    courseName: "Complete C# Unity Game Developer 2D",
    finishDate: "01/2018",
  },
  {
    certificateLink: udemyLink("UC-YC58BHDS"),
    imageLink: udemyImage("UC-YC58BHDS"),
    courseName: "Unity Networking From Scratch for (Unity 5 to Unity 2020)",
    finishDate: "02/2018",
  },
  {
    certificateLink: udemyLink("UC-GXP9J55K"),
    imageLink: udemyImage("UC-GXP9J55K"),
    courseName: "Shader Development from Scratch for Unity with Cg",
    finishDate: "02/2019",
  },
  {
    certificateLink: udemyLink("UC-2HM5YMG6"),
    imageLink: udemyImage("UC-2HM5YMG6"),
    courseName: "Git Smart: Enjoy Git in Unity, SourceTree & GitHub",
    finishDate: "08/2019",
  },
  {
    certificateLink: udemyLink("UC-af0335d3-194b-44be-9b1e-2acf61234ca3"),
    imageLink: udemyImage("UC-af0335d3-194b-44be-9b1e-2acf61234ca3"),
    courseName: "Learn Unity's Entity Component System to Optimise Your Games",
    finishDate: "05/2020",
  },
  {
    certificateLink: courseraLink("SZM2HKBER2C7"),
    imageLink: SZM2HKBER2C7,
    courseName: "Ruby on Rails: An Introduction",
    finishDate: "06/2020",
  },
  {
    certificateLink: courseraLink("EEY7GFJQXQEA"),
    imageLink: EEY7GFJQXQEA,
    courseName: "Introduction to XR: VR, AR, and MR Foundations",
    finishDate: "06/2020",
  },
  {
    certificateLink: courseraLink("LXEL4VCMAPQS"),
    imageLink: LXEL4VCMAPQS,
    courseName: "Introduction to Game Development",
    finishDate: "06/2020",
  },
  {
    certificateLink: courseraLink("QYDTFWXRTHDR"),
    imageLink: QYDTFWXRTHDR,
    courseName: "Rapid Gameplay Prototyping",
    finishDate: "07/2020",
  },
  {
    certificateLink: courseraLink("RLRZGTM9AA4Z"),
    imageLink: RLRZGTM9AA4Z,
    courseName: "Introduction to Game Design",
    finishDate: "06/2020",
  },
];
