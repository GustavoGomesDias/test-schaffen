const form = document.querySelector('.form') as HTMLFormElement;

function handleSubmit(e: Event): void {
  e.preventDefault();
  const horizontalSize = document.querySelector('#x-size') as HTMLInputElement;
  const verticalSize = document.querySelector('#y-size') as HTMLInputElement;
  const coordinates = document.querySelector("#positions") as HTMLInputElement;

  const irrigationPointsCoordinates = splitPoints(coordinates.value);

  console.log(irrigationPointsCoordinates);
  if (irrigationPointsCoordinates === undefined || irrigationPointsCoordinates === []) {
    alert('Pontos de Irrigação inválidos. [2]');
    return;
  }

  const garden = new Garden(Number(horizontalSize.value), Number(verticalSize.value), irrigationPointsCoordinates as IrrigationPoint[]);

  console.log(garden.getIrrigationPoints);
  // alert(`${garden.getHorizontalSize}, ${garden.getVerticalSize}`);
}

form.addEventListener('submit', handleSubmit)
