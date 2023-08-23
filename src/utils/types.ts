export enum TechStack {
  Unity,
  Csharp,
  Js,
  Ts,
  Flutter,
  Phaser,
  React,
  Vue,
  Node,
  Godot,
  Unreal,
}

export enum Roles {
  Programmer,
  Artist,
  Director,
  Modeler,
}

export enum KindOfLink {
  Code,
  Page,
  Android,
  Apple,
  Itch
}

export interface ProjectData {
  projectName: string;
  img: string;
  description: string;
  roles: Roles[];
  techStack: TechStack[];
  links: LinkData[];
  video?: string | undefined;
}

export interface LinkData {
  label: string;
  kind: KindOfLink;
  uri: string;
}

export interface CertificateData {
  courseName: string;
  finishDate: string;
  certificateLink: string;
  imageLink?: string;
}

export interface Position {
  positionName: string;
  projectName: string;
  description: string;
}

export interface Experience {
  companyName: string;
  workPeriod: string;
  positions: Position[];
  website: string;
}
