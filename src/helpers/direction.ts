const getIrrigationPointVerticalDirection = (irrigationPointY: number, robot: Robot): Direction => {
  if (irrigationPointY === robot.getActuallPosition.y) {
    return robot.getDirection;
  }

  if (irrigationPointY > robot.getActuallPosition.y) {
    return 'N';
  }

  return 'S';
}

const getIrrigationPointHorizontalDirection = (irrigationPointX: number, robot: Robot): Direction => {
  if (irrigationPointX === robot.getActuallPosition.x) {
    return robot.getDirection;
  }

  if (irrigationPointX > robot.getActuallPosition.x) {
    return 'L';
  }

  return 'O';
}

const handleRobotChangeDirection = (robot: Robot, pointDirection: Direction) => {
  if (robot.getDirection === pointDirection) {
    return;
  }


  if (robot.getDirection === 'L' && pointDirection === 'O') {
    robot.addInAcionList('E');
    robot.addInAcionList('E');
  }

  if (robot.getDirection === 'N' && pointDirection === 'S') {
    robot.addInAcionList('E');
    robot.addInAcionList('E');
  }

  if ((robot.getDirection === 'N' || robot.getDirection === 'S') && pointDirection === 'L') {
    robot.addInAcionList('D');
  }

  if ((robot.getDirection === 'N' || robot.getDirection === 'S') && pointDirection === 'O') {
    robot.addInAcionList('E');
  }

  robot.setDirection = pointDirection;
}
