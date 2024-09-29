class Enemy{
    constructor(){        
        this.width = 50
        this.height = 50
        this.x = 550
        this.y = Math.floor(Math.random()* (700 - this.height))
        this.directionX = 0 // -1 Izquierda 1 Derecha
        this.speed = 5
        this.sprite = document.createElement('div')
    }
    insert(){
        this.sprite.setAttribute('class', 'enemy')
        this.sprite.style.width = this.width + 'px'
        this.sprite.style.height = this.height + 'px'
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        playField.appendChild(this.sprite)
    }
    checkCollision(){
        if ( enemy.x < player.x + player.width &&
            enemy.y < player.y + player.height &&
            enemy.x + enemy.width > player.x &&
            enemy.y + enemy.height > player.y){
                console.log('Choclazo')
            }
    }
}