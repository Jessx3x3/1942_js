var hero= {
    x:300,
    y:300    
}
var enemies = [{x:150, y:130}, {x:250, y:130}, {x:350, y:130}, {x:450, y:130},
               {x:200, y:80}, {x:300, y:80}, {x:400, y:80}];
var bullets=[{}];
var score=0;
var bigEnemy = [{
    x: 250,
    y:100
}];

function displayHero(){
    document.getElementById('hero').style['top']= hero.y+"px";
    document.getElementById('hero').style['left']= hero.x+"px";
}
function moveEnemies(){
    for(var i=0; i<enemies.length; i++){
        enemies[i].y += 5;
       
        if(enemies[i].y>550){
            enemies[i].y=0;
            enemies[i].x=Math.random()*500;
        }
    }
}
function displayScore(){
    document.getElementById('score').innerHTML=score;
}

function moveBullets(){
    for(var i=0; i<bullets.length; i++){
        bullets[i].y -= 5;

        if (bullets[i].y<0) {
            bullets[i]=bullets[bullets.length-1];
            bullets.pop();
        }
    }
}
function gameLoop(){
    displayHero();
    moveEnemies();
    displayEnemies();
    moveBullets();
    displayBullets();
    colision();
    displayColisionEnemigo();
    displayScore();
}
setInterval(gameLoop, 200);

function colision(){
    for(var i=0; i<bullets.length; i++){
        for(var j=0; j<enemies.length; j++){
            if (Math.abs(bullets[i].x - enemies[j].x)<10 && Math.abs(bullets[i].y - enemies[j].y)<10) {
                score+=10;
                enemies.pop();
            }
        }   
    }    
}
function displayColisionEnemigo(){
    for(var i=0; i<hero.length; i++){
        for(var j=0; j<enemies.length; j++){
            if (Math.abs(hero[i].x - enemies[j].x)<5 && Math.abs(hero[i].y - enemies[j].y)<5) {
                score-=500;
                console.log("hicieron la chocación");
            }
        }
    }
}

function displayBullets(){
    output='';
    for(var i=0; i<bullets.length; i++){
        output+="<div class='bullet' style='top:"+bullets[i].y+"px; left:"+bullets[i].x+"px;'></div>";
    }
    document.getElementById('bullets').innerHTML=output;
}

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
    } else if(e.keyCode == 32){//Bullets
        bullets.push({x: hero.x, y: hero.y});
        displayBullets();
    }
}
displayHero();