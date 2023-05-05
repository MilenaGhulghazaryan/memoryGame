function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}
const arr = shuffle([
    'images/caxik.jpg',
    'images/mm.jpg',
    'images/147m.jpg',
    'images/caxik.jpg',
    'images/147m.jpg',
    'images/mm.jpg',
    'pictures/sunflower_1024x1024 (1).webp',
    'pictures/Green-Flowers-From-Beautiful-to-Bizarre.jpg',
    'pictures/download (1).jpg',
    'pictures/sunflower_1024x1024 (1).webp',
    'pictures/download (1).jpg',
    'pictures/Green-Flowers-From-Beautiful-to-Bizarre.jpg',
    'pictures/download (2).jpg',
    'pictures/download (2).jpg',
    'pictures/flower-729512__340.jpg',
    'pictures/marguerite-729510__340.jpg',
    'pictures/flower-729512__340.jpg',
    'pictures/marguerite-729510__340.jpg',
])

const h1 = document.querySelector('h1')
let time = 60

h1.innerText = time

const id = setInterval(() => {
    h1.innerText = `00:${time--}`
    if (time === 0) {
        alert('verj')
        clearInterval(id)
        location.reload()
    }
}, 1000)

const section = document.querySelector('section')
for (let i = 0; i < arr.length; i++) {
    const image = document.createElement('img');
    image.src = "images/blue.jpg";
    image.style = ` border: solid;
                    width: 138px;
                    height: 150px;`
    image.setAttribute('id', `card${i}`);
    section.append(image);
}

const img = []
let selected;
const defaultPic = 'images/blue.jpg'

for (let i = 0; i < arr.length; i++) {
    img[i] = document.getElementById(`card${i}`)
    img[i].addEventListener("click", () => Click(i))
}

function Click(i) {
    img[i].src = arr[i]

    if (selected == undefined) {
        selected = img[i]
    } else if (img[i].src == selected.src) {
        selected = undefined
    } else {
        setTimeout(() => {
            selected.src = defaultPic
            img[i].src = defaultPic
            selected = undefined
        }, 1000)
    }
}



