type Direction = 'N' | 'S' | 'L' | 'O';
type Action = 'D' | 'E' | 'M' | 'I';

class Robot {
  private readonly initialPosition: CartesianPoint;
  private direction: Direction;
  private listOfActions: Action[] = [];

  constructor(initialPosition: CartesianPoint, direction: Direction) {
    this.initialPosition = initialPosition;
    this.direction = direction;
  }

  get getListOfActions(): Action[] {
    return this.listOfActions;
  }

  addInAcionList(action: Action): void {
    this.listOfActions.push(action);
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