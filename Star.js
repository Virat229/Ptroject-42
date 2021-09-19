class Star{
    constructor(){
        star = createSprite(random(0,windowWidth),random(0,windowHeight));
        star.addImage(starImg);
        star.scale = 0.25;
        star.lifetime = 15;
    }
}

