type CartesianPoint = {
  x: number
  y: number
}

class Garden {
  private readonly horizontalSize: number;
  private readonly verticalSize: number;

  private irrigationPoints: CartesianPoint[] = [];

  constructor(horizontalSize: number, verticalSize: number) {
    this.horizontalSize = horizontalSize;
    this.verticalSize = verticalSize;
  }


  get getHorizontalSize(): number {
    return this.horizontalSize;
  }

  get getVerticalSize(): number {
    return this.verticalSize;
  }

  get getIrrigationPoints(): CartesianPoint[] {
    return this.irrigationPoints;
  }

  set setIrrigationPoints(irrigationPoints: CartesianPoint[]) {
    this.irrigationPoints = irrigationPoints;
  }

}