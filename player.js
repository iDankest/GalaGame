class Player{
    constructor(x , y){
        this.x = x
        this.y = y
        this.width = 50
        this.height = 50
        this.directionX = 0 // -1 Izquierda 1 Derecha
        this.directionY = 0 // -1 Arriba 1 Abajo
        this.speed = 5
        this.sprite = document.createElement('div')
    }
    insert(){
        this.sprite.setAttribute('id', 'player')
        this.sprite.style.width = this.width + 'px'
        this.sprite.style.height = this.height + 'px'
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        playField.appendChild(this.sprite)
    }
    move(){
        let newX = this.x + this.speed * this.directionX
        let newY = this.y + this.speed * this.directionY

        if (newX >= 0 && newX <=600 - this.width){
            this.x = newX
            this.sprite.style.left = this.x + 'px'
        }
        if(newY >= 0 && newY <= 700 - this.height){
            this.y = newY
            this.sprite.style.top = this.y + 'px'
        }

    }
}