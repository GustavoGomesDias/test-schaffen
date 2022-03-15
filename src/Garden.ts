type IrrigationPoint = {
  x: number
  y: number
}

class Garden {
  private readonly horizontalSize: number;
  private readonly verticalSize: number;

  private irrigationPoints: IrrigationPoint[] = [];

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

  get getIrrigationPoints(): IrrigationPoint[] {
    return this.irrigationPoints;
  }

  set setIrrigationPoints(irrigationPoints: IrrigationPoint[]) {
    this.irrigationPoints = irrigationPoints;
  }

}