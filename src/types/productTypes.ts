export enum Category {
  Software = "Software",
  MobileDevices = "Mobile Devices",
  Fashion = "Fashion",
}

export interface ISoftwareFeatures {
  operatingSystem: string;
  license: string;
  support: string;
}

export interface IMobileDevicesFeatures {
  battery: string;
  processor: string;
  camera: string;
  storage: string;
  display: string;
}

export interface IFashionFeatures {
  size: string;
  color: string;
  material: string;
}

// export type ProductFeatures =
//   | ISoftwareFeatures
//   | IMobileDevicesFeatures
//   | IFashionFeatures;

export interface IBaseProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

export interface ISoftwareProduct extends IBaseProduct {
  category: Category.Software;
  features: ISoftwareFeatures;
}

export interface IMobileDevicesProduct extends IBaseProduct {
  category: Category.MobileDevices;
  features: IMobileDevicesFeatures;
}

export interface IFashionProduct extends IBaseProduct {
  category: Category.Fashion;
  features: IFashionFeatures;
}

export type IProduct =
  | ISoftwareProduct
  | IMobileDevicesProduct
  | IFashionProduct;

export interface IProductData {
  products: IProduct[];
  loadingProducts: boolean;
  error: string;
}
