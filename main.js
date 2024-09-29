let playField = document.getElementById('playfield')

let player
let enemy
let bullet
let enemies = []
let movePlayerInterval
let enemiesSpawnInterval

function newPlayer(){ // Funcion para insertar el player dentro del HTML
    player = new Player(0, 325)
    player.insert()

    movePlayerInterval = setInterval(function(){
        gameRunning()
      }, 10)
}

function newEnemy(){
    enemiesSpawnInterval = setInterval(function(){
        enemy = new Enemy()
        enemy.insert()  
        enemies.push(enemy)
    }, 1000)

}
function spawnBullets(){
    bullet = new Bullet()
    bullet.insert()
}
function startGame(){
    newPlayer()
    newEnemy()
}
function gameRunning(){
    if (player.lives > 0){
        player.move()
    }else{
        endGame()
    }
}
function endGame(){
    clearInterval(enemiesSpawnInterval)
    clearInterval(movePlayerInterval)
    player.remove()
    enemies.forEach(function(enemy){
        enemy.remove()
    })
}
window.addEventListener('keydown' , function(event){

    switch(event.key.toLowerCase()){
        case 'a':
            player.directionX = -1
            player.move()
        break;
        case 'd':
            player.directionX = 1
            player.move()
        break;
        case 'w':
            player.directionY = -1
            player.move()
        break;
        case 's':
            player.directionY = 1
            player.move()
        break;
        case ' ':
            spawnBullets()
        break;
    }
    window.addEventListener('keyup', function (event) {
        player.directionX = 0
        player.directionY = 0
      })
})

startGame()
