

const addImage =  (ImgSrc) => {
    const p = new Promise((resolve, reject) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'Photo');
    imgElem.src = ImgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const onImageLoaded = () => {
        const {height, width} = imgElem;
        resolve({width,height});
    };

    imgElem.addEventListener('load', onImageLoaded);

    imgElem.addEventListener('error', () => reject(new Error('Error')));
    });
    
    return p;
};


const ImgSrc = 'https://images.prom.ua/2913529835_w640_h640_vafelnaya-kartinka-among.jpg';


const resultPromise = addImage(ImgSrc);
resultPromise.catch(error => console.log('Image load failed'))
resultPromise.then(data => console.log(data));