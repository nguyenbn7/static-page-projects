import loaderSVG from './loader.svg';
const bodyEle = document.querySelector('body');
const imageTag = document.createElement('img');

imageTag.src = loaderSVG;
bodyEle?.appendChild(imageTag);
location.replace(import.meta.env.VITE_REDIRECT_HOME_URL);
