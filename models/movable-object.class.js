class MovableObject {
    x = 120;
    y = 360;
    img;
    height = 120;
    width = 150;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;


    loadImages(arr){
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log('Moving Right')
    }

    moveLeft(){
        setInterval(() => { this.x -= this.speed; }, 1000 / 60)
    }
}