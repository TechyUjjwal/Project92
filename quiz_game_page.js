p1 = localStorage.getItem("p1");
p2 = localStorage.getItem("p2");

p1_score = 0;
p2_score = 0;

document.getElementById("p1").innerHTML = p1 + ":";
document.getElementById("p2").innerHTML = p2 + ":";

document.getElementById("p1_score").innerHTML = p1_score;
document.getElementById("p2_score").innerHTML = p2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + p1;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + p2;

function send() {
    number1 = document.getElementById("no1").value;
    number2 = document.getElementById("no2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h5>" + number1 + " X " + number2 + "</h5>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("no1").value = "";
    document.getElementById("no2").value = "";
}
question_turn = "p1";
answer_turn = "p2";

function check() {
    question_turn = "p1";
    answer_turn = "p2";
    number1 = document.getElementById("no1").value;
    number2 = document.getElementById("no2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    get_answer = document.getElementById("input_box").value;
    answer = get_answer.toLowerCase();
    console.log("Answer - "+answer);
    if(answer == actual_answer){
        if(answer_turn == "p1"){
            p1_score = p1_score + 1;
            update_score();
            window.alert(p1_score);
        }
        else{
            p2_score = p2_score + 1;
            update_score();
            window.alert(p2_score);
        }
    }
    else{
        if(answer_turn == "p1"){
            p1_score = p1_score - 1;
            p2_score = p2_score + 1;
            update_score();
            window.alert(p1_score);
            window.alert(p2_score);
        }
        else{
            p1_score = p1_score + 1;
            p2_score = p2_score - 1;
            update_score();
            window.alert(p1_score);
            window.alert(p2_score);
        }
    }
    if(question_turn == "p1"){
        question_turn = "p2";
        document.getElementById("player_question").innerHTML = "Question Turn - "+ p2;
    }
    else{
        question_turn = "p1";
        document.getElementById("player_question").innerHTML = "Question Turn - "+ p1;
    }

    if(answer_turn == "p1"){
        answer_turn = "p2";
        document.getElementById("player_answer").innerHTML =  "Answer Turn - "+ p2;
    }
    else{
        answer_turn = "p1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - "+ p1;
    }
    document.getElementById("output").innerHTML = "";
}
function update_score() {
    localStorage.setItem("p1_score",p1_score);
    localStorage.setItem("p2_score",p2_score);
}