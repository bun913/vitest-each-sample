import { Distance } from "../distance/distance"
import { Money } from "../money/money"

export class HouseAllowance {
  constructor(private distance: Distance) {}

  getAllowance(): Money {
    const meters = this.distance.toMeters()
    // 会社からの距離が2000m以下なら10,000円
    if (meters <= 20000) {
      return new Money(10000)
    }
    // 会社からの距離が5000m以下なら5,000円
    if (meters <= 50000) {
      return new Money(5000)
    }
    // それ以外は0円
    return new Money(0)
  }
}
