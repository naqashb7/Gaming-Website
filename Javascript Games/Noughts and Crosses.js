alert("Welcome to the Game >:) ");


var currentPlayer ="O";  
function place(box){
    if (box.innerText != "") return;
    box.innerText = currentPlayer;
    currentPlayer == "O" ? currentPlayer="X" : currentPlayer="O";
    checkGameBoard()
}
function checkGameBoard(){
    for (var i =0; i<=2; i++){
    var first = document.getElementById("0_"+ i ).innerText;
    var second = document.getElementById("1_"+ i ).innerText;
    var third= document.getElementById("2_"+ i ).innerText;
    if (first=="")continue;
    if (first== second && first == third){
        alert("THREE IN A ROW! You are the Winner!");
    }// if function ends
}//first for function ends (ROW WIN)
    for (var i=0; i<=2; i++){
        var first = document.getElementById(i + "_0").innerText;
        var second = document.getElementById(i + "_1").innerText;
        var third= document.getElementById(i + "_2").innerText;
        if (first =="") continue;
        if (first == second && first == third){
            alert ("A FULL COLUMN! You are the Winner!");
        }//if function ends
    }//second for function ends (COLUMN WIN)

    var firstD1= document.getElementById("0_0").innerText;
    var secondD1= document.getElementById("1_1").innerText;
    var thirdD1= document.getElementById("2_2").innerText;
    if(firstD1!="" && firstD1==secondD1 && firstD1 == thirdD1){
        alert("A DIAGONAL! You are the Winner!")
    }//if function ends (DIAGONAL WIN 1)

    var firstD2= document.getElementById("0_2").innerText;
    var secondD2= document.getElementById("1_1").innerText;
    var thirdD2=document.getElementById("2_0").innerText;
    if(firstD2!="" && firstD2==secondD2 && firstD2==thirdD2){
        alert("A DIAGONAL! You are the Winner!")
    }//if function ends (DIAGONAL WIN 2)

}//checkgameboard ends