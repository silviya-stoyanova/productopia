import {
  Category,
  IFashionFeatures,
  IMobileDevicesFeatures,
  ISoftwareFeatures,
} from "../App";

export const camelCaseToReadable = (str: string): string => {
  return str
    .replace(/([A-Z])/g, " $1")
    .toLowerCase()
    .replace(/^./, (char) => char.toUpperCase());
};

export const softwareIcons: Record<keyof ISoftwareFeatures, string> = {
  operatingSystem: "fas fa-desktop",
  license: "fas fa-key",
  support: "fas fa-life-ring",
};

export const mobileDevicesIcons: Record<keyof IMobileDevicesFeatures, string> =
  {
    battery: "fas fa-battery-full",
    processor: "fas fa-microchip",
    camera: "fas fa-camera",
    storage: "fas fa-hdd",
    display: "fas fa-mobile-alt",
  };

export const fashionIcons: Record<keyof IFashionFeatures, string> = {
  size: "fas fa-ruler",
  color: "fas fa-palette",
  material: "fas fa-tshirt",
};

const defaultIcon = "fas fa-info-circle";

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
