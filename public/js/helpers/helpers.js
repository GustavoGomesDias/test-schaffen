"use strict";
const numberRegex = /^[0-9]+$/;
const splitPoints = (pointsContent) => {
    if (numberRegex.test(pointsContent)) {
        handleRenderErrorOverlay('Pontos de irrigações inválidos. Não há números.');
        return undefined;
    }
    const pointsSpliteds = pointsContent.split(/[(^\D, ^\D)\s]/).filter((number) => number);
    return pointsSpliteds;
};
const returnRobotPosition = (positionContent) => {
    const positionSplited = splitPoints(positionContent);
    if (positionSplited === undefined) {
        return undefined;
    }
    return {
        x: Number(positionSplited[0]),
        y: Number(positionSplited[1]),
    };
};
const calculateDifference = (irrigation, robot) => {
    const result = irrigation - robot;
    if (result < 0) {
        result * (-1);
    }
    return result;
};
const getLongestWwaySize = (irrigationPoints, robot) => {
    let count = 0;
    let pointPos = 0;
    let waySize = 0;
    for (const point of irrigationPoints) {
        const calcDifferenceInX = calculateDifference(point.x, robot.getActuallPosition.x);
        const calcDifferenceInY = calculateDifference(point.y, robot.getActuallPosition.y);
        const difference = calcDifferenceInX + calcDifferenceInY;
        if (difference > waySize) {
            pointPos = count;
            waySize = difference;
        }
        count++;
    }
    return pointPos;
};
const getShortestWwaySize = (irrigationPoints, robot) => {
    const calcInitialDifferenceInX = calculateDifference(irrigationPoints[0].x, robot.getActuallPosition.x);
    const calcInitialDifferenceInY = calculateDifference(irrigationPoints[0].y, robot.getActuallPosition.y);
    let count = 0;
    let pointPos = 0;
    let waySize = calcInitialDifferenceInX + calcInitialDifferenceInY;
    for (const point of irrigationPoints) {
        const calcDifferenceInX = calculateDifference(point.x, robot.getActuallPosition.x);
        const calcDifferenceInY = calculateDifference(point.y, robot.getActuallPosition.y);
        const difference = calcDifferenceInX + calcDifferenceInY;
        if (difference < waySize) {
            pointPos = count;
            waySize = difference;
        }
        count++;
    }
    return pointPos;
};
