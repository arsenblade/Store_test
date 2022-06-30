import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
  constructor() {
    this._types = []
    this._brands = []
    this._devices = []
    this._selectedType = {}
    this._selectedBrand = {}
    this._page = 1
    this._totalCount = 0
    this._limit = 2
    makeAutoObservable(this)
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand
  }

  setSelectedType(type) {
    this._selectedType = type
  }

  setTypes(types) {
    this._types = types
  }

  setPage(page) {
    this._page = page
  }

  setTotalCount(count) {
    this._totalCount = count
  }

  setBrand(brands) {
    this._brands = brands
  }

  setDevice(devices) {
    this._devices = devices
  }

  get selectedBrand() {
    return this._selectedBrand
  }

  get selectedType() {
    return this._selectedType
  }

  get types() {
    return this._types
  }

  get brands() {
    return this._brands
  }

  
  get devices() {
    return this._devices
  }

  get page() {
    return this._page
  }

  
  get limit() {
    return this._limit
  }

  
  get totalCount() {
    return this._totalCount
  }
}