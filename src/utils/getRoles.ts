import { Roles } from "./types";

export const getRoleString = (role: Roles) => {
  switch (role) {
    case Roles.Programmer:
      return "Programmer";
    case Roles.Director:
      return "Director";
    default:
      return "POrogrammer";
  }
};
