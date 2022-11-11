const transformToObject = arr => {
    const obj = {};

    arr.forEach(el => {
        obj[el] = el;
    });

    return obj;
};

// const transformToObject = arr => arr.reduce((acc, el) => ({ ...acc, [el]: el }), {});