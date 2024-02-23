let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")

let computer = document.getElementById("computer")

rock.addEventListener("click", () => {
    selectOption("rock")
})

paper.addEventListener("click", () => {
    selectOption("paper")
})

scissors.addEventListener("click", () => {
    selectOption("scissors")
})

let currentSelection = null
let computerSelection = null

let currentlyGoing = false
function logic(player, computer) {
    if (player === "rock") {

        if (computer === "paper") return 0
        if (computer === "rock") return -1
        if (computer === "scissors") return 1
    } else if (player === "paper") {

        if (computer === "paper") return -1
        if (computer === "rock") return 1
        if (computer === "scissors") return 0
    } else {

        if (computer === "paper") return 1
        if (computer === "rock") return 0
        if (computer === "scissors") return -1
    }
}
function selectOption(name) {
    if (currentSelection == null && !currentlyGoing) {
        currentSelection = name
        currentlyGoing = true
        switch (name) {
            case "rock":
                rock.style.border = "16px solid red"
                break
            case "paper":
                paper.style.border = "16px solid red"
                break

            case "scissors":
                scissors.style.border = "16px solid red"
                break
        }
        startGame()
    }
}

function startGame() {
    changeImage()
    setTimeout(function () {
        document.getElementById("result").innerHTML = "Result: " + resultToString(currentSelection, computerSelection);
        }, 500 * 8)
}

function reset() {
    currentSelection = null
    computerSelection = null
    rock.style.border = null
    paper.style.border = null
    scissors.style.border = null
    currentlyGoing = false

    document.getElementById("result").innerHTML = "Result: N/A";
}

function resultToString(player, computer) {
    let log = logic(player, computer)
    if (log === 1) return "You Win";
    else if (log === 0) return "You Lose";
    else return "You Tie"
}

function changeImage() {
    for (let i = 1; i <= 7; ++i) {
        if (i < 7) {
            setTimeout(function () {
                computer.src = randImage(false)
            }, (500 * i))
        } else {
            setTimeout(function () {
                computer.src = randImage(true)
            }, 500 * 8)
        }
    }
}


    function randImage(last) {
        let rand = Math.floor(Math.random() * 3)
        let img;
        switch (rand) {
            case 0:
                img = "media/rock.png"
                if (last) computerSelection = "rock"
                break
            case 1:
                img = "media/paper.png"
                if (last) computerSelection = "paper"
                break

            case 2:
                img = "media/scissors.png"
                if (last) computerSelection = "scissors"
                break
        }
        return img
    }