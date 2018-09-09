var gameState = {
    'top-left': null,
    'top-center': null,
    'top-right': null,
    'center-left': null,
    'center-center': null,
    'center-right': null,
    'bottom-left': null,
    'bottom-center': null,
    'bottom-right': null,
};
var player = 'X';
var winner = null;

window.onload = function () {
    var list = document.querySelectorAll('.field');
    list.forEach(function(item){
        item.addEventListener('click', function(){
            if(gameState[item.id]===null&&winner===null) {
                gameState[item.id] = player;
                item.innerHTML=player;
                check()
                if(winner===null){
                    switch(player) {
                        case 'X':
                            player = 'O';
                            document.getElementById("O").className="player active";
                            document.getElementById("X").className="player";
                            break;
                        case 'O':
                            player = 'X';
                            document.getElementById("X").className="player active";
                            document.getElementById("O").className="player";
                            break;
                    }
                }
                else {
                    document.getElementById("display-winner").innerHTML="Wygrał gracz " + winner;
                }
            }
        })
    })
};

document.getElementById("clear-board").addEventListener('click', function() {
    gameState = {
        'top-left': null,
        'top-center': null,
        'top-right': null,
        'center-left': null,
        'center-center': null,
        'center-right': null,
        'bottom-left': null,
        'bottom-center': null,
        'bottom-right': null,
    };
    player = 'X';
    winner = null;
    document.getElementById("X").className="player active";
    document.getElementById("O").className="player";
    document.getElementById("display-winner").innerHTML="";
    var list = document.querySelectorAll('.field');
    list.forEach(function (item) {
        item.innerHTML = "";
    })
});



function check(){
    if(gameState['top-left']!==null&&gameState['top-left']===gameState['top-center']&&gameState['top-center']===gameState['top-right']) winner = player;
    else if(gameState['center-left']!==null&&gameState['center-left']===gameState['center-center']&&gameState['center-center']===gameState['center-right']) winner = player;
    else if(gameState['center-left']!==null&&gameState['center-left']===gameState['center-center']&&gameState['center-center']===gameState['center-right']) winner = player;
    else if(gameState['bottom-left']!==null&&gameState['bottom-left']===gameState['bottom-center']&&gameState['bottom-center']===gameState['bottom-right']) winner = player;
    else if(gameState['top-left']!==null&&gameState['top-left']===gameState['center-left']&&gameState['center-left']===gameState['bottom-left']) winner = player;
    else if(gameState['top-center']!==null&&gameState['top-center']===gameState['center-center']&&gameState['center-center']===gameState['bottom-center']) winner = player;
    else if(gameState['top-right']!==null&&gameState['top-right']===gameState['center-right']&&gameState['center-right']===gameState['bottom-right']) winner = player;
    else if(gameState['top-left']!==null&&gameState['top-left']===gameState['center-center']&&gameState['center-center']===gameState['bottom-right']) winner = player;
    else if(gameState['top-right']!==null&&gameState['top-right']===gameState['center-center']&&gameState['center-center']===gameState['bottom-left']) winner = player;
}

