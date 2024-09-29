class Enemy{
    constructor(){        
        this.width = 50
        this.height = 50
        this.x = 550
        this.y = Math.floor(Math.random()* (700 - this.height))
        this.directionX = -1 // -1 Izquierda 1 Derecha
        this.speed = 1
        this.sprite = document.createElement('div')
        this.interval = setInterval(this.move.bind(this), 10)
    }
    insert(){
        this.sprite.setAttribute('class', 'enemy')
        this.sprite.style.width = this.width + 'px'
        this.sprite.style.height = this.height + 'px'
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        playField.appendChild(this.sprite)
    }
    remove(){
        playField.removeChild(this.sprite)
    }
    move(){
        console.log(this)
        let newX = this.x + this.speed * this.directionX
        this.checkCollision()
        if (newX >= 0 && newX <=600 - this.width){
            this.x = newX
            this.sprite.style.left = this.x + 'px'
        }
    }
    checkCollision() {
        
        if (this.x < player.x + player.width &&
            this.y < player.y + player.height &&
            this.x + this.width > player.x &&
            this.y + this.height > player.y) {
                this.remove()
            console.log('Choclazo');
            // Aquí puedes eliminar el enemigo y reducir la vida del jugador si deseas
        }
        
        
    }
}