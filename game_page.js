player1_name=localStorage.getItem("player1");
player2_name=localStorage.getItem("player2");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name;
document.getElementById("player2_name").innerHTML=player2_name;

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question "+player1_name;
document.getElementById("player_answer").innerHTML="Answer "+player2_name;

function send()
{
    Number1=document.getElementById("no_1").value;
    Number2=document.getElementById("no_2").value;
    answer=parseInt(Number1) * parseInt(Number2);
    question_number="<h4>"+Number1+"X"+Number2+"</h4>";
    input_box="<br>Answer: <input type= 'text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_number+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    
}

