const form = document.querySelector('.form') as HTMLFormElement;

function handleSubmit(e: Event): void {
  e.preventDefault();
  const horizontalSize = document.querySelector('#x-size') as HTMLInputElement;
  const verticalSize = document.querySelector('#y-size') as HTMLInputElement;
  const coordinates = document.querySelector("#positions") as HTMLInputElement;
  const robotPosition = document.querySelector('#robotPosition') as HTMLInputElement;

  const irrigationPointsCoordinates = returnIrrigationPoints(coordinates.value);
  const garden = new Garden(Number(horizontalSize.value), Number(verticalSize.value));

  if (irrigationPointsCoordinates === undefined || irrigationPointsCoordinates === []) {
    alert('Pontos de Irrigação inválidos.');
    return;
  }

  if (!checkIfItIsGreaterThanXorY(irrigationPointsCoordinates, garden)) {
    alert('Pontos de irrigação devem ser menores que os valores de X e Y');
    return;
  }

  garden.setIrrigationPoints = irrigationPointsCoordinates;
}

form.addEventListener('submit', handleSubmit)
