import {
  IFashionFeatures,
  IMobileDevicesFeatures,
  ISoftwareFeatures,
} from "../types/productTypes";

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

export const defaultIcon = "fas fa-info-circle";
