let playField = document.getElementById('playfield')

let player
let enemy

function newPlayer(){ // Funcion para insertar el player dentro del HTML
    player = new Player(0, 325)
    player.insert()
}

function newEnemy(){
    enemy = new Enemy()
    enemy.insert()
}
newEnemy()
newPlayer()
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
    }
    window.addEventListener('keyup', function (event) {
        player.directionX = 0
        player.directionY = 0
      })
})