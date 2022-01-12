import { FaAndroid, FaApple, FaLink, FaCode } from "react-icons/fa";
import { KindOfLink } from "./types";

export const getLinkIcon = (
  kind: KindOfLink,
  size?: string | number | undefined
) => {
  switch (kind) {
    case KindOfLink.Android:
      return <FaAndroid size={size} />;
    case KindOfLink.Apple:
      return <FaApple size={size} />;
    case KindOfLink.Code:
      return <FaCode size={size} />;
    default:
      return <FaLink size={size} />;
  }
};
