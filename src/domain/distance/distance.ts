export interface Distance {
  toMeters(): number
}

export class Meters implements Distance {
  constructor(private value: number) {}

  toMeters(): number {
    return this.value
  }
}

export class Killometers implements Distance {
  constructor(private value: number) {}

  toMeters(): number {
    return this.value * 1000
  }
}
