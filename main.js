let playField = document.getElementById('playfield')

let player
let enemy
let bullet
let enemies = []

function newPlayer(){ // Funcion para insertar el player dentro del HTML
    player = new Player(0, 325)
    player.insert()
}

function newEnemy(){
    enemy = new Enemy()
    enemy.insert()
}
function spawnBullets(){
    bullet = new Bullet()
    bullet.insert()
}
function startGame(){
    newPlayer()
    newEnemy()
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
