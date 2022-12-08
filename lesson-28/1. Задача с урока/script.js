

const addImage =  (ImgSrc, callback) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'Photo');
    imgElem.src = ImgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const onImageLoaded = () => {
        const {height, width} = imgElem;
        callback({width,height});
    };

    imgElem.addEventListener('load', onImageLoaded);

};


const ImgSrc = 'https://images.prom.ua/2913529835_w640_h640_vafelnaya-kartinka-among.jpg';
const onImageLoaded = (data) => {
    const {height, width} = data;
    const sizeElem = document.querySelector('.image-size');
    sizeElem.textContent = `${width} X ${height}`;


};

addImage(ImgSrc,onImageLoaded);