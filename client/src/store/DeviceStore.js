import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Холлодильники" },
      { id: 2, name: "Смартфони" },
      { id: 3, name: "Ноутбуки" },
      { id: 4, name: "Телеізори" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
      { id: 3, name: "Lenovo" },
      { id: 4, name: "Asus" },
    ];
    this._devices = [
      {
        id: 1,
        name: "Iphon 12 pro",
        price: 25000,
        rating: 5,
        img: `https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_2-up_geo_10132020_inline.jpg.large.jpg`,
      },
      {
        id: 2,
        name: "Iphon 12 pro",
        price: 25000,
        rating: 5,
        img: `https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_2-up_geo_10132020_inline.jpg.large.jpg`,
      },
      {
        id: 3,
        name: "Iphon 12 pro",
        price: 25000,
        rating: 5,
        img: `https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_2-up_geo_10132020_inline.jpg.large.jpg`,
      },
      {
        id: 4,
        name: "Iphon 12 pro",
        price: 25000,
        rating: 5,
        img: `https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_2-up_geo_10132020_inline.jpg.large.jpg`,
      },
      {
        id: 5,
        name: "Iphon 12 pro",
        price: 25000,
        rating: 5,
        img: `https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_2-up_geo_10132020_inline.jpg.large.jpg`,
      },
      {
        id: 6,
        name: "Iphon 12 pro",
        price: 25000,
        rating: 5,
        img: `https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_2-up_geo_10132020_inline.jpg.large.jpg`,
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }
  setType(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
