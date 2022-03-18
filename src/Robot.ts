type Direction = 'N' | 'S' | 'L' | 'O';
type Action = 'D' | 'E' | 'M' | 'I';

class Robot {
  private readonly actualPosition: CartesianPoint;
  private direction: Direction;
  private listOfActions: Action[] = [];

  constructor(initialPosition: CartesianPoint, direction: Direction) {
    this.actualPosition = initialPosition;
    this.direction = direction;
  }

  get getListOfActions(): Action[] {
    return this.listOfActions;
  }

  addInAcionList(action: Action): void {
    this.listOfActions.push(action);
  }

  get getActuallPosition(): CartesianPoint {
    return this.actualPosition;
  }

  set setActuaVerticalPosition(position: number) {
    this.actualPosition.y = position;
  }

  set setActualHorizontalPosition(position: number) {
    this.actualPosition.x = position;
  }

  get getDirection(): Direction {
    return this.direction;
  }

  set setDirection(direction: Direction) {
    this.direction = direction;
  }

  handleRobotMovimentY = (irrigationPoint: CartesianPoint) => {
    const verticalPoint = getIrrigationPointVerticalDirection(irrigationPoint.y, this);
    if (this.direction === verticalPoint) {
      while (this.actualPosition.y < irrigationPoint.y) {
        this.addInAcionList('M');
        this.setActuaVerticalPosition = this.actualPosition.y + 1;
      }

      if (this.listOfActions[this.listOfActions.length - 1] !== 'I') this.addInAcionList('I');
      return;
    }

    handleRobotChangeDirection(this, verticalPoint);

    if (this.actualPosition.y < irrigationPoint.y) {
      while (this.actualPosition.y < irrigationPoint.y) {
        this.addInAcionList('M');
        this.setActuaVerticalPosition = this.actualPosition.y + 1;
      }
    } else {
      while (this.actualPosition.y > irrigationPoint.y) {
        this.addInAcionList('M');
        this.setActuaVerticalPosition = this.actualPosition.y - 1;
      }
    }

    if (this.listOfActions[this.listOfActions.length - 1] !== 'I') this.addInAcionList('I');
    return;
  }

  handleRobotMovimentX = (irrigationPoint: CartesianPoint) => {
    const horizontalPoint = getIrrigationPointHorizontalDirection(irrigationPoint.x, this);
    if (this.direction === horizontalPoint) {
      while (this.actualPosition.x < irrigationPoint.x) {
        this.addInAcionList('M');
        this.setActualHorizontalPosition = this.actualPosition.x + 1;
      }

      if (this.listOfActions[this.listOfActions.length - 1] !== 'I') this.addInAcionList('I');
      return;
    }

    handleRobotChangeDirection(this, horizontalPoint);

    if (this.actualPosition.x < irrigationPoint.x) {
      while (this.actualPosition.x < irrigationPoint.x) {
        this.addInAcionList('M');
        this.setActuaVerticalPosition = this.getActuallPosition.x + 1;
        console.log(4);
      }
    } else {
      while (this.actualPosition.x > irrigationPoint.x) {
        this.addInAcionList('M');
        this.setActuaVerticalPosition = this.getActuallPosition.x - 1;
        console.log(4);
      }
    }

    if (this.listOfActions[this.listOfActions.length - 1] !== 'I') this.addInAcionList('I');
    return;
  }
}