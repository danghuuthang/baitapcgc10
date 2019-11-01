function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
  
    this.getHeroElement = function(){
      return '<img width="'+ this.size + '"' +
        ' height="'+ this.size + '"' +
        ' src="' + this.image +'"' +
        ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }
  
    this.moveRight = function(){
      this.left += 15;
      console.log('ok: ' + this.left);
    }
    this.moveLeft = function(){
        this.left -= 15;
        console.log('ok: ' + this.left);
    }
    this.moveTop = function(){
        this.top -= 15;
        console.log('ok: ' + this.top);
    }
    this.moveDown = function(){
        this.top += 15;
        console.log('ok: ' + this.top);
      }
  
  }
  
  var hero = new Hero('gaidep.jpg', 20, 30, 200);
  
  function start(){
      const width=window.innerWidth - hero.size;
      const height=window.innerHeight - hero.size;
    if(hero.left < width && hero.top<=20){
      hero.moveRight();}
    if(hero.left >= width  && hero.top <height){
        hero.moveDown();}
    if(hero.left < window.innerWidth - hero.size){
        hero.moveRight();}
    if(hero.left < window.innerWidth - hero.size){
        hero.moveRight();}
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 25)
  }

  
  start();