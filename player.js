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
}