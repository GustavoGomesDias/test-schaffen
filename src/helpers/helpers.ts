const numberRegex = /^[0-9]+$/;

const splitPoints = (pointsContent: string): undefined | string[] => {
  if (numberRegex.test(pointsContent)) {
    alert('Pontos de irrigações inválidos. Não há números.');
    return undefined;
  }

  const pointsSpliteds: string[] = pointsContent.split(/[(^\D, ^\D)\s]/).filter((number) => number);
  return pointsSpliteds;
}

const returnRobotPosition = (positionContent: string): undefined | CartesianPoint => {
  const positionSplited = splitPoints(positionContent);

  if (positionSplited === undefined) {
    return undefined;
  }

  return {
    x: Number(positionSplited[0]),
    y: Number(positionSplited[1]),
  };
}

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