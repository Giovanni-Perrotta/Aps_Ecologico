const randomImg = [
    "../imgs/random1.jpg",
    "../imgs/random2.jpg",
    "../imgs/random3.jpg",
    "../imgs/random4.jpg"
]

var randomNum = Math.random() * randomImg.length

var randomContent= randomImg[parseInt(randomNum + "")]

document.getElementById('random').src = randomContent