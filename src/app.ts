const form = document.querySelector('.form') as HTMLFormElement;

function handleCreateGarden(): Garden {
  const horizontalSize = document.querySelector('#x-size') as HTMLInputElement;
  const verticalSize = document.querySelector('#y-size') as HTMLInputElement;
  const garden = new Garden(Number(horizontalSize.value), Number(verticalSize.value));
  return garden;
}

function handleCreateIrrigationPoints(): undefined | CartesianPoint[] {
  const coordinates = document.querySelector("#positions") as HTMLInputElement;
  const irrigationPointsCoordinates = returnIrrigationPoints(coordinates.value)

  if (irrigationPointsCoordinates === undefined || irrigationPointsCoordinates === []) {
    alert('Pontos de Irrigação inválidos.');
    return undefined;
  }

  return irrigationPointsCoordinates;
}

function handleCreateRobot(): undefined | Robot {
  const robotPosition = document.querySelector('#robotPosition') as HTMLInputElement;
  const select = document.querySelector('#select') as HTMLSelectElement;
  const initialPosition = returnRobotPosition(robotPosition.value);

  if (initialPosition === undefined) {
    alert('Pontos iniciais do robô inválidos');
    return undefined;
  }

  const robot = new Robot(initialPosition, select.value as Direction);
  return robot;
}

function handleSubmit(e: Event): void {
  e.preventDefault();
  const garden = handleCreateGarden();
  const irrigationPointsCoordinates = handleCreateIrrigationPoints();
  if (irrigationPointsCoordinates === undefined) {
    return;
  }

  if (irrigationPointsCoordinates.length > (garden.getHorizontalSize * garden.getVerticalSize)) {
    alert('Existe mais pontos de irrigação do que campos de horta!');
    return;
  }

  if (!checkIfItIsGreaterThanXorY(irrigationPointsCoordinates, garden)) {
    alert('Pontos de irrigação devem ser menores que os valores de X e Y');
    return;
  }

  garden.setIrrigationPoints = irrigationPointsCoordinates;

  const robot = handleCreateRobot();

  if (robot === undefined) {
    return;
  }

}

form.addEventListener('submit', handleSubmit)
