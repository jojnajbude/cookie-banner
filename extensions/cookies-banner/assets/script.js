const cookiesBanner = document.querySelector('.cookies-banner');

const setLinksInMessage = () => {
  const cookiesMessage = cookiesBanner.querySelector('.cookies-banner__message');
  const linksContainer = JSON.parse(
    cookiesBanner
    .querySelector('.cookies-banner__links-container')
    .innerHTML
  );

  for (const link in linksContainer) {
    cookiesMessage.innerHTML = cookiesMessage.innerHTML
      .replace(
        link,
        `<a
          href=${linksContainer[link]}
          class="cookies-banner__link"
        >
          ${link}
        </a>`);
  }
};

const handlerCloseBanner = () => {
  console.log('here');
  cookiesBanner.style.display = 'none';
};

setLinksInMessage();