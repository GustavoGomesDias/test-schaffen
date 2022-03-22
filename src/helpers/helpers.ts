const numberRegex = /^[0-9]+$/;

const splitPoints = (pointsContent: string): undefined | string[] => {
  if (numberRegex.test(pointsContent)) {
    handleRenderErrorOverlay('Pontos de irrigações inválidos. Não há números.')
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

const calculateDifference = (irrigation: number, robot: number) => {
  const result = irrigation - robot;

  if (result < 0) {
    result * (-1);
  }

  return result;
}

const getLongestWwaySize = (irrigationPoints: CartesianPoint[], robot: Robot): number => {

  let count: number = 0;
  let pointPos: number = 0;
  let waySize: number = 0;
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

}
const getShortestWwaySize = (irrigationPoints: CartesianPoint[], robot: Robot): number => {

  const calcInitialDifferenceInX = calculateDifference(irrigationPoints[0].x, robot.getActuallPosition.x);
  const calcInitialDifferenceInY = calculateDifference(irrigationPoints[0].y, robot.getActuallPosition.y);
 
  let count: number = 0;
  let pointPos: number = 0;
  let waySize: number = calcInitialDifferenceInX + calcInitialDifferenceInY;
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
}
