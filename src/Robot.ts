type Direction = 'N' | 'S' | 'L' | 'O';
type Action = 'D' | 'E' | 'M' | 'I';

class Robot {
  private actualPosition: CartesianPoint;
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

  handleRobotChangeDirection = (robot: Robot, pointDirection: Direction): void => {
    if (robot.getDirection === pointDirection) {
      return;
    }

    if (
      robot.getDirection === 'L' && pointDirection === 'O' ||
      robot.getDirection === 'O' && pointDirection === 'L'
    ) {
      robot.addInAcionList('E');
      robot.addInAcionList('E');
      robot.setDirection = pointDirection;
      return;
    }

    if (
      robot.getDirection === 'N' && pointDirection === 'S' ||
      robot.getDirection === 'S' && pointDirection === 'N'
    ) {
      robot.addInAcionList('E');
      robot.addInAcionList('E');
      robot.setDirection = pointDirection;
      return;
    }

    if (this.direction === 'N') {
      if (pointDirection === 'O') robot.addInAcionList('E');
      if (pointDirection === 'L') robot.addInAcionList('D');
      robot.setDirection = pointDirection;
      return;
    }

    if (this.direction === 'S') {
      if (pointDirection === 'L') robot.addInAcionList('E');
      if (pointDirection === 'O') robot.addInAcionList('D');
      robot.setDirection = pointDirection;
      return;
    }

    if (this.direction === 'L') {
      if (pointDirection === 'N') robot.addInAcionList('E');
      if (pointDirection === 'S') robot.addInAcionList('D');
      robot.setDirection = pointDirection;
      return;
    }

    if (this.direction === 'O') {
      if (pointDirection === 'S') robot.addInAcionList('E');
      if (pointDirection === 'N') robot.addInAcionList('D');
      robot.setDirection = pointDirection;
      return;
    }
  }

  handleRobotMovimentY = (irrigationPoint: CartesianPoint) => {
    const pointVerticalDirection = getIrrigationPointVerticalDirection(irrigationPoint.y, this);

    if (this.direction !== pointVerticalDirection) {
      this.handleRobotChangeDirection(this, pointVerticalDirection);
    }

    if (this.actualPosition.y < irrigationPoint.y) {
      while (this.actualPosition.y < irrigationPoint.y) {
        this.addInAcionList('M');
        this.actualPosition.y += 1;
      }
    } else {
      while (this.actualPosition.y > irrigationPoint.y) {
        this.addInAcionList('M');
        this.actualPosition.y -= 1;
      }
    }

    if (this.actualPosition.x === irrigationPoint.x && this.actualPosition.y === irrigationPoint.y && this.listOfActions[this.listOfActions.length - 1] !== 'I') {
      this.addInAcionList('I');
    }
    return;
  }

  handleRobotMovimentX = (irrigationPoint: CartesianPoint) => {
    const pointHorizontalDirection = getIrrigationPointHorizontalDirection(irrigationPoint.x, this);
    if (this.direction !== pointHorizontalDirection) {
      this.handleRobotChangeDirection(this, pointHorizontalDirection);
    }

    if (this.actualPosition.x < irrigationPoint.x) {
      while (this.actualPosition.x < irrigationPoint.x) {
        this.addInAcionList('M');
        this.actualPosition.x += 1;
      }
    } else {
      while (this.actualPosition.x > irrigationPoint.x) {
        this.addInAcionList('M');
        this.actualPosition.x -= 1;
      }
    }

    if (this.actualPosition.x === irrigationPoint.x && this.actualPosition.y === irrigationPoint.y && this.listOfActions[this.listOfActions.length - 1] !== 'I') {
      this.addInAcionList('I');
    }
    return;
  }
}