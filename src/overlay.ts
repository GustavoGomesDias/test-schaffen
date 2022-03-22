const handleRenderSuccessOverlay = (message: string) => {
  const overlay = document.querySelector('.overlay') as HTMLDivElement;
  const overlayContainer = document.querySelector('.container') as HTMLDivElement;
  const overlayMessage = document.querySelector('.message') as HTMLParagraphElement;
  const title = document.querySelector('.title') as HTMLHeadingElement;
  const img = document.querySelector('.img-container') as HTMLImageElement;

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
}

const handleRenderErrorOverlay = (message: string) => {
  const overlay = document.querySelector('.overlay') as HTMLDivElement;
  const overlayContainer = document.querySelector('.container') as HTMLDivElement;
  const overlayMessage = document.querySelector('.message') as HTMLParagraphElement;
  const title = document.querySelector('.title') as HTMLHeadingElement;
  const img = document.querySelector('.img-container') as HTMLImageElement;

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
}

// #FF6961

const closeOverlayButton = document.querySelector('.overlay-close-button') as HTMLButtonElement;

const handleCloseOverLay = () => {
  const overlay = document.querySelector('.overlay') as HTMLDivElement;
  overlay.style.display = 'none';
}

closeOverlayButton.addEventListener('click', handleCloseOverLay);
