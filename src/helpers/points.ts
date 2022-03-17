const returnIrrigationPoints = (pointContent: string): undefined | CartesianPoint[] => {

  const pointsSpliteds = splitPoints(pointContent);
  
  if (pointsSpliteds === undefined) {
    return undefined;
  }

  let irrigationPointsCoordinetes: CartesianPoint[] = [];

  for (let i = 0; i < pointsSpliteds.length; i += 2) {
    const pointer: CartesianPoint = {
      x: Number(pointsSpliteds[i]),
      y: Number(pointsSpliteds[i + 1]),
    }

    irrigationPointsCoordinetes.push(pointer);
  }

  return irrigationPointsCoordinetes;

}

const getHighestValueInX= (irrigationPoints: CartesianPoint[]): number => {
  const xValues: number[] = irrigationPoints.map((point) => point.x);
  const highestValueInX = Math.max.apply(null, xValues);
  return highestValueInX;
}

const getHighestValueInY= (irrigationPoints: CartesianPoint[]): number => {
  const yValues: number[] = irrigationPoints.map((point) => point.y);
  const highestValueInY = Math.max.apply(null, yValues);
  return highestValueInY;
}

const checkIfItIsGreaterThanXorY = (irrigationPoints: CartesianPoint[], garden: Garden): boolean => {
  const highestValueInX = getHighestValueInX(irrigationPoints);
  const highestValueInY = getHighestValueInY(irrigationPoints);

  if (highestValueInX > garden.getHorizontalSize || highestValueInY > garden.getVerticalSize) {
    return false;
  }

  return true;
}
