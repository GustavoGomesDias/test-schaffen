"use strict";
const form = document.querySelector('.form');
function handleCreateGarden() {
    const horizontalSize = document.querySelector('#x-size');
    const verticalSize = document.querySelector('#y-size');
    if (horizontalSize.value === undefined || verticalSize.value === undefined) {
        return undefined;
    }
    const garden = new Garden(Number(horizontalSize.value), Number(verticalSize.value));
    return garden;
}
function handleCreateIrrigationPoints() {
    const coordinates = document.querySelector("#positions");
    if (coordinates.value === undefined) {
        return undefined;
    }
    const irrigationPointsCoordinates = returnIrrigationPoints(coordinates.value);
    if (irrigationPointsCoordinates === undefined || irrigationPointsCoordinates === []) {
        handleRenderErrorOverlay('Pontos de Irrigação inválidos.');
        return undefined;
    }
    return irrigationPointsCoordinates;
}
function handleCreateRobot(garden) {
    const robotPosition = document.querySelector('#robotPosition');
    if (robotPosition.value === undefined) {
        handleRenderErrorOverlay('Posição inicial do robô deve ser informada.');
        return undefined;
    }
    const select = document.querySelector('#select');
    const initialPosition = returnRobotPosition(robotPosition.value);
    if (initialPosition === undefined) {
        handleRenderErrorOverlay('Pontos iniciais do robô inválidos');
        return undefined;
    }
    if (initialPosition.x > garden.getHorizontalSize || initialPosition.y > garden.getVerticalSize) {
        handleRenderErrorOverlay('O ponto incial do robô deve estar dentro do espaço dado para a Horta.');
        return undefined;
    }
    if (initialPosition.x < 0 || initialPosition.y < 0) {
        handleRenderErrorOverlay('O ponto incial do robô deve ser maior que 0.');
        return undefined;
    }
    const robot = new Robot(initialPosition, select.value);
    return robot;
}
function handleSubmit(e) {
    e.preventDefault();
    const garden = handleCreateGarden();
    if (garden === undefined) {
        handleRenderErrorOverlay('X e Y devem estar preenchidos.');
        return;
    }
    const irrigationPointsCoordinates = handleCreateIrrigationPoints();
    if (irrigationPointsCoordinates === undefined) {
        return;
    }
    if (irrigationPointsCoordinates.length > (garden.getHorizontalSize * garden.getVerticalSize)) {
        handleRenderErrorOverlay('Existe mais pontos de irrigação do que campos de horta!');
        return;
    }
    if (!checkIfItIsGreaterThanXorY(irrigationPointsCoordinates, garden)) {
        handleRenderErrorOverlay('Pontos de irrigação devem ser menores ou iguais que os valores de X e Y');
        return;
    }
    garden.setIrrigationPoints = irrigationPointsCoordinates;
    const robot = handleCreateRobot(garden);
    if (robot === undefined) {
        return;
    }
    garden.irrigate(robot);
    let message = '';
    for (let i = 0; i < robot.getListOfActions.length; i++) {
        if (i === 0)
            message += robot.getListOfActions[i];
        else
            message += ` > ${robot.getListOfActions[i]}`;
    }
    handleRenderSuccessOverlay(message);
}
form.addEventListener('submit', handleSubmit);
