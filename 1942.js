var hero= {
    x:300,
    y:300    
}
var enemies = [{x:150, y:130}, {x:250, y:130}, {x:350, y:130}, {x:450, y:130},
               {x:200, y:80}, {x:300, y:80}, {x:400, y:80}];

function displayHero(){
    document.getElementById('hero').style['top']= hero.y+"px";
    document.getElementById('hero').style['left']= hero.x+"px";
}
function moveEnemies(){
    for(var i=0; i<enemies.length; i++){
        enemies[i].y += 5;
       
        if(enemies[i].y>500){
            console.log("El enemigo pasó el límite");
        }
    }
}
function gameLoop(){
    displayHero();
    moveEnemies();
    displayEnemies();
}
setInterval(gameLoop, 300);

function displayEnemies(){
    var output='';
        for(var i=0; i<enemies.length; i++){
            output+="<div class='enemy1' style='top:"+enemies[i].y+"px; left:"+enemies[i].x+"px;'></div>";
        }
        document.getElementById('enemies').innerHTML=output;
}

document.onkeydown= function(e){
    console.log(e.keyCode);
    if(e.keyCode == 37){
        hero.x -= 10;
    } else if(e.keyCode == 39){
        hero.x += 10;
    } else if(e.keyCode == 38){
        hero.y -= 10;
    } else if(e.keyCode == 40){
        hero.y += 10;
    }
    displayHero();
    displayEnemies();
}
displayHero();