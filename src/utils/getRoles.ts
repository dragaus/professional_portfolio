import { Roles } from "./types";

export const getRoleString = (role: Roles) => {
  switch (role) {
    case Roles.Programmer:
      return "Programmer";
    case Roles.Director:
      return "Director";
    case Roles.Artist:
      return "Artist";
    default:
      return "Programmer";
  }
};
