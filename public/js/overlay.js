"use strict";
const handleRenderSuccessOverlay = (message) => {
    const overlay = document.querySelector('.overlay');
    const overlayContainer = document.querySelector('.container');
    const overlayMessage = document.querySelector('.message');
    const title = document.querySelector('.title');
    const img = document.querySelector('.img-container');
    img.src = './public/images/confetti.gif';
    overlay.style.display = 'flex';
    overlayContainer.classList.remove('error');
    overlayContainer.classList.add('success');
    title.style.color = '#085238';
    const textTitle = document.createTextNode('Ações do robô:');
    title.innerText = '';
    title.innerHTML = '';
    title.appendChild(textTitle);
    const textMessage = document.createTextNode(message);
    overlayMessage.innerHTML = '';
    overlayMessage.innerText = '';
    overlayMessage.appendChild(textMessage);
};
const handleRenderErrorOverlay = (message) => {
    const overlay = document.querySelector('.overlay');
    const overlayContainer = document.querySelector('.container');
    const overlayMessage = document.querySelector('.message');
    const title = document.querySelector('.title');
    const img = document.querySelector('.img-container');
    img.src = './public/images/error.gif';
    overlay.style.display = 'flex';
    overlayContainer.classList.remove('success');
    overlayContainer.classList.add('error');
    title.style.color = '#ca1a11';
    const textTitle = document.createTextNode('Error:');
    title.innerText = '';
    title.innerHTML = '';
    title.appendChild(textTitle);
    const textMessage = document.createTextNode(message);
    overlayMessage.innerHTML = '';
    overlayMessage.innerText = '';
    overlayMessage.appendChild(textMessage);
};
// #FF6961
const closeOverlayButton = document.querySelector('.overlay-close-button');
const handleCloseOverLay = () => {
    const overlay = document.querySelector('.overlay');
    overlay.style.display = 'none';
};
closeOverlayButton.addEventListener('click', handleCloseOverLay);
