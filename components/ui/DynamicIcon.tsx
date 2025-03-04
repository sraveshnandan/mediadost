import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";

// Add all FontAwesome solid icons to the library (optional for performance)
const iconList = Object.keys(solidIcons)
  .filter((key) => key.startsWith("fa"))
  .map((key) => solidIcons[key as keyof typeof solidIcons]);

library.add(...(iconList as any));

// Utility function to dynamically get an icon
const getFontAwesomeIcon = (iconClass: string) => {
  const match = iconClass.match(/fa-([\w-]+)/); // Extract "bullhorn" from "fas fa-bullhorn"
  if (!match) return null;

  const iconName = `fa${match[1].charAt(0).toUpperCase()}${match[1].slice(1)}`;
  return solidIcons[iconName as keyof typeof solidIcons] || null;
};

// Component to render the FontAwesome icon dynamically
interface CategoryIconProps {
  iconClass: string;
}

const CategoryIcon: React.FC<CategoryIconProps> = ({ iconClass }) => {
  const icon = getFontAwesomeIcon(iconClass);
  return icon ? (
    <FontAwesomeIcon
      className="drop-shadow-xl"
      icon={icon as any}
      size="3x"
      color="#535de0"
    />
  ) : (
    <FontAwesomeIcon size="3x" icon={`info-circle`} color="#535de0" />
  ); // Renders only if the icon exists
};

export default CategoryIcon;
