const cookiesBanner = document.querySelector('.cookies-banner');

const handlerCloseBanner = () => {
  cookiesBanner.style.display = 'none';
};

const closeButton = cookiesBanner.querySelector('.cookies-banner__close-button');
closeButton.onclick = handlerCloseBanner;