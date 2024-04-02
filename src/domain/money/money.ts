export class Money {
  constructor(private value: number) {
    if (value < 0) {
      throw new Error("金額は0以上でなければなりません")
    }
  }
}
