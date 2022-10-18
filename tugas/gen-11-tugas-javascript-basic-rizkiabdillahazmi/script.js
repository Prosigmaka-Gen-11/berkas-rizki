const multiply =  function(a, b) {
    return a * b;
}

const album = {
    name : "Stronger",
    price : 60000,
    sell: 200000,
    musics : {
        song : "Gonna Be Okay",
        artist : 'Brent Morgan',
        genre : 'pop',
    },
    playSound : function playSound (){
        console.log("Music Played !!!")
    },
    canMultiply : true,
    multiply : multiply,
}

const result = album.multiply(album.price, album.sell);
console.log(result);
console.log(album);