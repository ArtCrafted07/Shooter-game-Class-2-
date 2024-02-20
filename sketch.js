var GameState = "wait"

function preload(){
    Menu_Screen = loadImage('i.gif')
}
function setup(){
    Play_Button = createImg('start_button-removebg-preview.png')
    About_Button = createImg('question_mark-removebg-preview.png')
    Play_Button.position (150,200)
    About_Button.position (162,300)
    About_Button.size (75,75)
    Play_Button.size (100,50)
}
function draw(){
    

if (GameState == "wait")
{background(Menu_Screen);
Play_Button.show();
About_Button.show();

}
    About_Button.mousePressed(() => {
Play_Button.hide();
About_Button.hide()
GameState = "about"
    })
    if (GameState == "about"){
        About_Game()
    }
if (GameState == "play"){
    background("white")
}
}
function About_Game(){
    swal({
title:"About Game",
text:"kill all the enemies visible to win the game",
textAlign:"centre",
//imageUrl:"",
//imageSize:"",
confirmButtonText:"kill all enemies",
confirmButtonColor:"green",

    },
    function(){
        GameState = "wait"
    })
}