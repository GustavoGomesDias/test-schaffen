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
