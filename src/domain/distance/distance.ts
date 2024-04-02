export interface Distance {
  toMeters(): number
}

class Meters implements Distance {
  constructor(private value: number) {}

  toMeters(): number {
    return this.value
  }
}

class Killometers implements Distance {
  constructor(private value: number) {}

  toMeters(): number {
    return this.value * 1000
  }
}
