class Bullet {
    constructor(){
        this.height = 20
        this.width = 30
        this.y = player.y + player.height / 2 - this.height /2
        this.x = player.x + player.width
        this.directionX = 1
        this.speed = 10
        this.sprite = document.createElement('div')
        this.interval = setInterval(this.move.bind(this), 20)
    }
    insert(){
        this.sprite.setAttribute('class', 'bullet')
        this.sprite.style.width = this.width  + 'px'
        this.sprite.style.height = this.height  + 'px'
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x  + 'px'
        playField.appendChild(this.sprite)
    }
    remove(){
        playField.removeChild(this.sprite)
        clearInterval(this.interval)
    }
    move(){
        let newX = this.x + this.speed * this.directionX
        this.checkCollision(this)
        if (newX >= 0 && newX <=600 - this.width){
            this.x = newX
            this.sprite.style.left = this.x + 'px'
       }else{
        this.remove()
       }
    }
    checkCollision(self){
        enemies.forEach(function(enemy, index){
          if ( enemy.x < self.x + self.width &&
            enemy.y < self.y + self.height &&
            enemy.x + enemy.width > self.x &&
            enemy.y + enemy.height > self.y) {
            enemy.remove()
            enemies.splice(index, 1)
            //Player.score += 1
            //score.innerText = 'SCORE ' + Player.score
            self.remove()
            }
        })
      }
}