"use strict";
class Robot {
    constructor(initialPosition, direction) {
        this.listOfActions = [];
        this.handleRobotChangeDirection = (robot, pointDirection) => {
            if (robot.getDirection === pointDirection) {
                return;
            }
            if (robot.getDirection === 'L' && pointDirection === 'O' ||
                robot.getDirection === 'O' && pointDirection === 'L') {
                robot.addInAcionList('E');
                robot.addInAcionList('E');
                robot.setDirection = pointDirection;
                return;
            }
            if (robot.getDirection === 'N' && pointDirection === 'S' ||
                robot.getDirection === 'S' && pointDirection === 'N') {
                robot.addInAcionList('E');
                robot.addInAcionList('E');
                robot.setDirection = pointDirection;
                return;
            }
            if (this.direction === 'N') {
                if (pointDirection === 'O')
                    robot.addInAcionList('E');
                if (pointDirection === 'L')
                    robot.addInAcionList('D');
                robot.setDirection = pointDirection;
                return;
            }
            if (this.direction === 'S') {
                if (pointDirection === 'L')
                    robot.addInAcionList('E');
                if (pointDirection === 'O')
                    robot.addInAcionList('D');
                robot.setDirection = pointDirection;
                return;
            }
            if (this.direction === 'L') {
                if (pointDirection === 'N')
                    robot.addInAcionList('E');
                if (pointDirection === 'S')
                    robot.addInAcionList('D');
                robot.setDirection = pointDirection;
                return;
            }
            if (this.direction === 'O') {
                if (pointDirection === 'S')
                    robot.addInAcionList('E');
                if (pointDirection === 'N')
                    robot.addInAcionList('D');
                robot.setDirection = pointDirection;
                return;
            }
        };
        this.handleRobotMovimentY = (irrigationPoint) => {
            const pointVerticalDirection = getIrrigationPointVerticalDirection(irrigationPoint.y, this);
            if (this.direction !== pointVerticalDirection) {
                this.handleRobotChangeDirection(this, pointVerticalDirection);
            }
            if (this.actualPosition.y < irrigationPoint.y) {
                while (this.actualPosition.y < irrigationPoint.y) {
                    this.addInAcionList('M');
                    this.actualPosition.y += 1;
                }
            }
            else {
                while (this.actualPosition.y > irrigationPoint.y) {
                    this.addInAcionList('M');
                    this.actualPosition.y -= 1;
                }
            }
            if (this.actualPosition.x === irrigationPoint.x && this.actualPosition.y === irrigationPoint.y && this.listOfActions[this.listOfActions.length - 1] !== 'I') {
                this.addInAcionList('I');
            }
            return;
        };
        this.handleRobotMovimentX = (irrigationPoint) => {
            const pointHorizontalDirection = getIrrigationPointHorizontalDirection(irrigationPoint.x, this);
            if (this.direction !== pointHorizontalDirection) {
                this.handleRobotChangeDirection(this, pointHorizontalDirection);
            }
            if (this.actualPosition.x < irrigationPoint.x) {
                while (this.actualPosition.x < irrigationPoint.x) {
                    this.addInAcionList('M');
                    this.actualPosition.x += 1;
                }
            }
            else {
                while (this.actualPosition.x > irrigationPoint.x) {
                    this.addInAcionList('M');
                    this.actualPosition.x -= 1;
                }
            }
            if (this.actualPosition.x === irrigationPoint.x && this.actualPosition.y === irrigationPoint.y && this.listOfActions[this.listOfActions.length - 1] !== 'I') {
                this.addInAcionList('I');
            }
            return;
        };
        this.actualPosition = initialPosition;
        this.direction = direction;
    }
    get getListOfActions() {
        return this.listOfActions;
    }
    addInAcionList(action) {
        this.listOfActions.push(action);
    }
    get getActuallPosition() {
        return this.actualPosition;
    }
    set setActuaVerticalPosition(position) {
        this.actualPosition.y = position;
    }
    set setActualHorizontalPosition(position) {
        this.actualPosition.x = position;
    }
    get getDirection() {
        return this.direction;
    }
    set setDirection(direction) {
        this.direction = direction;
    }
}
