import { Killometers, Meters } from "../distance/distance"
import { Money } from "../money/money"
import { HouseAllowance } from "./housingAllowance"

describe("HouseAllowance", () => {
  // 2km以下で10000円を返す同値クラス
  it.each([
    {
      distance: new Killometers(2),
      expected: new Money(10000),
      distanceStr: "2km",
    },
    {
      distance: new Killometers(1.5),
      expected: new Money(10000),
      distanceStr: "1.5km",
    },
  ])(
    `returns 10000 when the distance is less than 20000m(distance: $distanceStr)`,
    ({ distance, expected }) => {
      const sutHouseAllowance = new HouseAllowance(distance)
      expect(sutHouseAllowance.getAllowance()).toEqual(expected)
    },
  )

  // 5km以下で5000円を返す同値クラス
  it.each([
    {
      distance: new Killometers(5),
      expected: new Money(5000),
      distanceStr: "5km",
    },
    {
      distance: new Killometers(4.5),
      expected: new Money(5000),
      distanceStr: "4.5km",
    },
  ])(
    `returns 5000 when the distance is less than 50000m(distance: $distanceStr)`,
    ({ distance, expected }) => {
      const sutHouseAllowance = new HouseAllowance(distance)
      expect(sutHouseAllowance.getAllowance()).toEqual(expected)
    },
  )

  // 5km以上で0円を返す同値クラス
  it.each([
    {
      distance: new Killometers(5.1),
      expected: new Money(0),
      distanceStr: "5.1km",
    },
    {
      distance: new Killometers(10),
      expected: new Money(0),
      distanceStr: "10km",
    },
  ])(
    `returns 0 when the distance is more than 50000m(distance: $distanceStr)`,
    ({ distance, expected }) => {
      const sutHouseAllowance = new HouseAllowance(distance)
      expect(sutHouseAllowance.getAllowance()).toEqual(expected)
    },
  )
})

// 上と同じテストをeachを使わずに書いた場合
describe("HouseAllowance", () => {
  // 2km以下で10000円を返す同値クラスの境界値
  it("returns 10000 when the distance is less than 20000m", () => {
    const sutHouseAllowance = new HouseAllowance(new Killometers(2))
    expect(sutHouseAllowance.getAllowance()).toEqual(new Money(10000))
  })
  // 2km以下で10000円を返す同値クラスの代表値
  it("returns 10000 when the distance is less than 20000m", () => {
    const sutHouseAllowance = new HouseAllowance(new Killometers(1.5))
    expect(sutHouseAllowance.getAllowance()).toEqual(new Money(10000))
  })
})
