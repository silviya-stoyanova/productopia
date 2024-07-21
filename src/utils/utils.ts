import { Category, IFashionFeatures, IMobileDevicesFeatures, ISoftwareFeatures } from "../types/productTypes";
import { defaultIcon, fashionIcons, mobileDevicesIcons, softwareIcons } from "./iconMapping";

export const camelCaseToReadable = (str: string): string => {
  return str
    .replace(/([A-Z])/g, " $1")
    .toLowerCase()
    .replace(/^./, (char) => char.toUpperCase());
};

export const getFeatureIcon = (category: Category, key: string): string => {
  switch (category) {
    case Category.Software:
      return softwareIcons[key as keyof ISoftwareFeatures] || defaultIcon;
    case Category.MobileDevices:
      return (
        mobileDevicesIcons[key as keyof IMobileDevicesFeatures] || defaultIcon
      );
    case Category.Fashion:
      return fashionIcons[key as keyof IFashionFeatures] || defaultIcon;
    default:
      return defaultIcon;
  }
};
