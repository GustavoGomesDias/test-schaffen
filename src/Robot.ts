type Direction = 'N' | 'S' | 'L' | 'O';

class Robot {
  private readonly initialPosition: CartesianPoint;
  private direction: Direction;

  constructor(initialPosition: CartesianPoint, direction: Direction) {
    this.initialPosition = initialPosition;
    this.direction = direction;
  }


  get getInitialPosition(): CartesianPoint {
    return this.initialPosition;
  }

  get getDirection(): Direction {
    return this.direction;
  }

  set setDirection(direction: Direction) {
    this.direction = direction;
  }
}