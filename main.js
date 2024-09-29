let playField = document.getElementById('playfield')

let player

function newPlayer(){ // Funcion para insertar el player dentro del HTML
    player = new Player(275, 650)
    player.insert()
}
newPlayer()