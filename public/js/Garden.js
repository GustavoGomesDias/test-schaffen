"use strict";
class Garden {
    constructor(horizontalSize, verticalSize) {
        this.irrigationPoints = [];
        this.horizontalSize = horizontalSize;
        this.verticalSize = verticalSize;
    }
    get getHorizontalSize() {
        return this.horizontalSize;
    }
    get getVerticalSize() {
        return this.verticalSize;
    }
    get getIrrigationPoints() {
        return this.irrigationPoints;
    }
    set setIrrigationPoints(irrigationPoints) {
        this.irrigationPoints = irrigationPoints;
    }
    irrigate(robot) {
        // const longestWayPos = getLongestWwaySize(this.irrigationPoints, robot);
        // robot.handleRobotMovimentY(this.irrigationPoints[longestWayPos]);
        // robot.handleRobotMovimentX(this.irrigationPoints[longestWayPos]);
        // this.irrigationPoints.splice(longestWayPos, 1);
        // this.setIrrigationPoints = this.irrigationPoints;
        while (this.irrigationPoints.length > 0) {
            const shortestWayPos = getShortestWwaySize(this.irrigationPoints, robot);
            robot.handleRobotMovimentY(this.irrigationPoints[shortestWayPos]);
            robot.handleRobotMovimentX(this.irrigationPoints[shortestWayPos]);
            this.irrigationPoints.splice(shortestWayPos, 1);
            this.setIrrigationPoints = this.irrigationPoints;
        }
    }
}
