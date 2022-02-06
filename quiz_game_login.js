function addUser() {
    p1 = document.getElementById("p1").value;
    p2 = document.getElementById("p2").value;

    localStorage.setItem("Player 1 Name ", p1);
    localStorage.setItem("Player 2 Name ", p2);

    window.location.replace("quiz_game_page.html");
}