class Enemy{
    constructor(){        
        this.width = 50
        this.height = 50
        this.x = 550
        this.y = Math.floor(Math.random() * (700 - this.height))
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
        clearInterval(this.interval)
    }
    move(){
        let newX = this.x + this.speed * this.directionX
        this.checkCollision()
        if (newX >= 0 && newX <=600 - this.width){
            this.x = newX
            this.sprite.style.left = this.x + 'px'
        }else{
            enemies.shift()
            this.remove()
        }
    }
    checkCollision() {
        enemies.forEach(function(enemy, index){
        if (enemy.x < player.x + player.width &&
            enemy.y < player.y + player.height &&
            enemy.x + enemy.width > player.x &&
            enemy.y + enemy.height > player.y) {
            enemy.remove()
            enemies.splice(index, 1)
            // Aquí puedes eliminar el enemigo y reducir la vida del jugador si deseas
            player.lives -= 1
        }
        }) 
        
    }
}