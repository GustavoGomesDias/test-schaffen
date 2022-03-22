"use strict";
const returnIrrigationPoints = (pointContent) => {
    const pointsSpliteds = splitPoints(pointContent);
    if (pointsSpliteds === undefined) {
        return undefined;
    }
    let irrigationPointsCoordinetes = [];
    for (let i = 0; i < pointsSpliteds.length; i += 2) {
        const pointer = {
            x: Number(pointsSpliteds[i]),
            y: Number(pointsSpliteds[i + 1]),
        };
        irrigationPointsCoordinetes.push(pointer);
    }
    return irrigationPointsCoordinetes;
};
const getHighestValueInX = (irrigationPoints) => {
    const xValues = irrigationPoints.map((point) => point.x);
    const highestValueInX = Math.max.apply(null, xValues);
    return highestValueInX;
};
const getHighestValueInY = (irrigationPoints) => {
    const yValues = irrigationPoints.map((point) => point.y);
    const highestValueInY = Math.max.apply(null, yValues);
    return highestValueInY;
};
const checkIfItIsGreaterThanXorY = (irrigationPoints, garden) => {
    const highestValueInX = getHighestValueInX(irrigationPoints);
    const highestValueInY = getHighestValueInY(irrigationPoints);
    if (highestValueInX > garden.getHorizontalSize || highestValueInY > garden.getVerticalSize) {
        return false;
    }
    return true;
};
