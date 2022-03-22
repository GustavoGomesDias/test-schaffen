"use strict";
const getIrrigationPointVerticalDirection = (irrigationPointY, robot) => {
    if (irrigationPointY === robot.getActuallPosition.y) {
        return robot.getDirection;
    }
    if (irrigationPointY > robot.getActuallPosition.y) {
        return 'N';
    }
    return 'S';
};
const getIrrigationPointHorizontalDirection = (irrigationPointX, robot) => {
    if (irrigationPointX === robot.getActuallPosition.x) {
        return robot.getDirection;
    }
    if (irrigationPointX > robot.getActuallPosition.x) {
        return 'L';
    }
    return 'O';
};
