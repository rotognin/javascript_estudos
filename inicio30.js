function teste(a, b){
    return new Promise((resolve, reject) => {
        resolve(a + b);
    });
}

teste(2, 3).then((resultado) => {
    console.log(resultado);
});
