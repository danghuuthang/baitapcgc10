let Car = function (image, x, y, speed, isMoveLeft, isMoveRight, isMoveTop,isMoveDown, width, height, fuel) {
    // thuá»™c tĂ­nh: speed, color, xÄƒng, vá»‹ trĂ­, kĂ­ch thÆ°á»›c, áº£nh

    this.x = x;
    this.y = y;
    this.speed = speed;
    this.isMoveLeft = isMoveLeft;
    this.isMoveRight = isMoveRight;
    this.isMoveTop=isMoveTop;
    this.isMoveDown=isMoveDown;
    this.width = width;
    this.height = height;
    this.fuel = fuel;
    this.image = image;
    this.hit = false;
    this.shootBird = false;


    this.toaDoFunction = function (x, y) {
        let toaDo = x + '-' + y;
        return toaDo;
    }
    this.setSpeed = function (newSpeed) {
        this.speed = newSpeed;
    }

    // BÆ¡m xÄƒng: bá»• xÄƒng max sau
    this.fillFuel = function (fuel) {
        this.fuel += fuel;
    }

    this.moveLeft = function () {
        if (270 < this.x && this.isMoveLeft == true) {
            this.x = this.x - this.speed;
        }

    }
    this.moveRight = function () {
        if (this.x < 630 && this.isMoveRight == true) {
            this.x = this.x + this.speed;
        }
    }
    this.moveTop = function () {
        if (0<this.y && this.isMoveTop == true) {
            this.y = this.y - this.speed;
        }
    }
    this.moveDown = function(){
        if (this.y<535 && this.isMoveDown == true) {
            this.y = this.y + this.speed;
        }
    }
    this.fuelBurn = function () {
        this.fuel--;
    }

    this.getFuelLevel = function () {
        return this.fuel;
    }

    this.hitCar = function (TrafficCone) {
        console.log('1111111111111');
        if (this.x < (TrafficCone.x + 20) && TrafficCone.x < this.x + (this.width - 30)) {
            if (this.y-30 < TrafficCone.y && TrafficCone.y < this.y + (this.height-50)) {
                return this.hit = true;
            }

        }
    }
    this.plusFuel = function (Fuel) {
        if (this.x < (Fuel.x + 20) && Fuel.x < this.x + (this.width - 30)) {
            if (this.y < Fuel.y && Fuel.y < this.y + (this.width - 20)) {
                console.log('!!!!!!!!!!!!plusFuel!!!!!!!!!');
                this.fuel += Fuel.fuel;
            }
        }
    }


    // váº½ canvas: táº¡o ra 1 bĂºt contex. Táº¡o canvas.getContext('2d') Sau Ä‘Ă³ contex.drawimage

    this.drawCar = function (canvas) {

        let ctx = canvas.getContext("2d");

        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }


}