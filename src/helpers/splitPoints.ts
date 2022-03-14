const numberRegex = /^[0-9]+$/;

function splitPoints(pointsContent: string): undefined | IrrigationPoint[] {
  if (numberRegex.test(pointsContent)) {
    alert('Pontos de irrigações inválidos. Não há números.');
    return undefined;
  }

  const pointsSpliteds: string[] = pointsContent.split(/[(^\D, ^\D)\s]/).filter((number) => number);

  let irrigationPointsCoordinetes: IrrigationPoint[] = [];

  for (let i = 0; i < pointsSpliteds.length; i += 2) {
    const pointer: IrrigationPoint = {
      x: Number(pointsSpliteds[i]),
      y: Number(pointsSpliteds[i + 1]),
    }

    irrigationPointsCoordinetes.push(pointer);
  }

  console.log(irrigationPointsCoordinetes);


  return irrigationPointsCoordinetes;

}