let timer = 59;
let score = 0;
let hitrn = 0;

function increaseScore() {
    score += 5;
    document.querySelector("#scoreval").textContent = score;
}

function decreaseScore() {
    if (score >= 5) {
        score -= 5;
    } else {
        score = 0;
    }
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {
    let clutter = "";


    for (let i = 1; i <= 114; i++) {
        let rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    let timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
        }

        else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over! 👻</h1>`;
        }

        document.querySelector("#timerVal").textContent = timer
    }, 1000);
}

document.querySelector("#pbtm")
    .addEventListener("click", function (dets) {
        let clickedNum = Number(dets.target.textContent)
        if (clickedNum === hitrn) {
            increaseScore();
            makeBubble();
            getNewHit();
        }
        else {
            decreaseScore();
        }
    })

getNewHit();
runTimer();
makeBubble();