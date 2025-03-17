// Credits to: https://opengameart.org/users/alejoc
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # Deklaracje i definicje zmiennych CONST

const CANVA = document.querySelector("#canva");
const CTX = CANVA.getContext("2d");

//  #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #  Definicje AUDIO

// Buttons sounds
const controlClickOn = new Audio("sound/control_click_on.mp3");
const controlClickOff = new Audio("sound/control_click_off.mp3");
const controlHover = new Audio("sound/control_hover.mp3");
const difficultyClick = new Audio("sound/diff_click.mp3");
const difficultyHover = new Audio("sound/diff_hover.mp3");
const switchOnSound = new Audio("sound/switch_on.mp3");
const switchOffSound = new Audio("sound/switch_off.mp3");

// Character sounds
const deathSound = new Audio("sound/death.mp3");
const jumpSound = new Audio("sound/jump.mp3");
const stepsSound = new Audio("sound/steps.mp3");

// Music & melodies
const extremeMusic = new Audio("sound/extreme_bg.mp3");
const gameMusic = new Audio("sound/other_bg.mp3");
const winMelody = new Audio("sound/win.mp3");
const loseMelody = new Audio("sound/lose.mp3");

// Sounds lists & Sound volumes Maps
const SOUNDS = [controlClickOn, controlClickOff, controlHover, difficultyClick, difficultyHover, switchOnSound, switchOffSound, deathSound, jumpSound, stepsSound];
const MELODIES = [extremeMusic, gameMusic, winMelody, loseMelody];
const SOUNDS_VOLUMES = new Map([
    [controlClickOn, 0.7],
    [controlClickOff, 0.7],
    [controlHover, 0.5],
    [difficultyClick, 1],
    [difficultyHover, 1],
    [switchOnSound, 1],
    [switchOffSound, 1],
    [deathSound, 1],
    [jumpSound, 0.5],
    [stepsSound, 0.8]
]);
const MELODIES_VOLUMES = new Map([
    [extremeMusic, 0.15],
    [gameMusic, 0.15],
    [winMelody, 0.5],
    [loseMelody, 0.7]
]);
SOUNDS.forEach(sound => sound.volume = SOUNDS_VOLUMES.get(sound));
MELODIES.forEach(melody => melody.volume = MELODIES_VOLUMES.get(melody));

//  #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #  Definicje IMAGE

// Background images
const easyBg = new Image(); easyBg.src = "img/backgrounds/easy_bg.png";
const mediumBg = new Image(); mediumBg.src = "img/backgrounds/medium_bg.png";
const hardBg = new Image(); hardBg.src = "img/backgrounds/hard_bg.png";
const extremeBg = new Image(); extremeBg.src = "img/backgrounds/extreme_bg.png";

// Buttons images
const buttonOnImg = new Image(); buttonOnImg.src = "img/buttons/on.png";
const buttonOffImg = new Image(); buttonOffImg.src = "img/buttons/off.png";

// Idle sprites & animations
const spriteIdleR = new Image(); spriteIdleR.src = "img/animations/idle_r.png";
const idleRAnimation = new Map([
    [1, [spriteIdleR, 0, 0, 53, 92]],
    [2, [spriteIdleR, 55, 0, 53, 92]],
    [3, [spriteIdleR, 110, 0, 53, 92]],
    [4, [spriteIdleR, 165, 0, 53, 92]]
]);
const spriteIdleL = new Image(); spriteIdleL.src = "img/animations/idle_l.png";
const idleLAnimation = new Map([
    [1, [spriteIdleL, 165, 0, 53, 92]],
    [2, [spriteIdleL, 110, 0, 53, 92]],
    [3, [spriteIdleL, 55, 0, 53, 92]],
    [4, [spriteIdleL, 0, 0, 53, 92]]
]);

// Run sprites & animations
const spriteRunR = new Image(); spriteRunR.src = "img/animations/run_r.png";
const runRAnimation = new Map([
    [1, [spriteRunR, 0, 0, 64, 98]],
    [2, [spriteRunR, 86, 0, 64, 98]],
    [3, [spriteRunR, 179, 0, 64, 98]],
    [4, [spriteRunR, 273, 0, 64, 98]],
    [5, [spriteRunR, 381, 0, 64, 98]],
    [6, [spriteRunR, 488, 0, 64, 98]]
]);
const spriteRunL = new Image(); spriteRunL.src = "img/animations/run_l.png";
const runLAnimation = new Map([
    [1, [spriteRunL, 536, 0, 64, 98]],
    [2, [spriteRunL, 450, 0, 64, 98]],
    [3, [spriteRunL, 357, 0, 64, 98]],
    [4, [spriteRunL, 263, 0, 64, 98]],
    [5, [spriteRunL, 155, 0, 64, 98]],
    [6, [spriteRunL, 48, 0, 64, 98]]
]);

// Death sprites & animations
const spriteDeathR = new Image(); spriteDeathR.src = "img/animations/death_r.png";
const deathRAnimation = new Map([
    [1, [spriteDeathR, 0, 0, 59, 143]],
    [2, [spriteDeathR, 111, 0, 59, 143]],
    [3, [spriteDeathR, 207, 0, 59, 143]],
    [4, [spriteDeathR, 301, 0, 59, 143]],
    [5, [spriteDeathR, 399, 0, 59, 143]],
    [6, [spriteDeathR, 492, 0, 59, 143]],
    [7, [spriteDeathR, 587, 0, 59, 143]],
    [8, [spriteDeathR, 670, 0, 59, 143]]
]);
const spriteDeathL = new Image(); spriteDeathL.src = "img/animations/death_l.png";
const deathLAnimation = new Map([
    [1, [spriteDeathL, 690, 0, 59, 143]],
    [2, [spriteDeathL, 580, 0, 59, 143]],
    [3, [spriteDeathL, 484, 0, 59, 143]],
    [4, [spriteDeathL, 390, 0, 59, 143]],
    [5, [spriteDeathL, 292, 0, 59, 143]],
    [6, [spriteDeathL, 199, 0, 59, 143]],
    [7, [spriteDeathL, 104, 0, 59, 143]],
    [8, [spriteDeathL, 21, 0, 59, 143]]
]);

// Klasa reprezentująca naszą postać, którą gramy
class Character {
    constructor() {
        this.x = 0; // vw
        this.y = 71.5; // vh
        this.verticalVelocity = -8.5; // vh
        this.hasSwitched = false;
        this.isJumping = false;
        this.width;
        this.height;
        this.state = "idle_r";
        this.frame = 1;
        this.idleFrames = 4;
        this.runFrames = 6;
        this.deathFrames = 8;
    }
    
    jump() {
        if (this.isJumping) {
            if (this.verticalVelocity < 0) jumpSound.play();

            this.y += this.verticalVelocity;
            this.verticalVelocity += 1.5;
            this.switchButtons();
            if (this.y >= 71.5) {
                this.y = 71.5;
                this.verticalVelocity = -8.5;
                this.hasSwitched = false;
                if (!isWPressed) this.isJumping = false;
            }
        }
    }

    switchButtons() {
        if (this.y <= 50 && !this.hasSwitched) {
            buttons.forEach(btn => {
                if (this.x + 3 >= btn.x && this.x + 3 <= btn.x + Button.width) {
                    if (btn.img == buttonOffImg) {
                        btn.img = buttonOnImg;
                        btn.isActive = 1;
                        numberBinary += btn.value;
                        switchOnSound.play();
                    }
                    else {
                        btn.img = buttonOffImg;
                        btn.isActive = 0;
                        numberBinary -= btn.value;
                        switchOffSound.play();
                    }
                    this.hasSwitched = true;
                }
            });
            if (numberDecimal == numberBinary) {
                clearTimeout(timeLeftToGuessTimeout);
                isWon = true;
                gameState = "ended";
                redrawCanva(gameState);
            }
        }
    }

    redraw() {
        CTX.clearRect(0, 0, CANVA.width, CANVA.height);
        CTX.drawImage(backgroundImg, 0, 0, CANVA.width, CANVA.height);

        // Narysowanie przycisków
        buttons.forEach(btn =>
            CTX.drawImage(btn.img, vw(btn.x, CANVA.width), vh(Button.y, CANVA.height), vw(Button.width, CANVA.width), vh(Button.height, CANVA.height)));

        // Wypisanie liczby do zgadnięcia
        CTX.fillStyle = numberDecimalColor;
        CTX.font = vw(3.5, CANVA.width) + "px Source Code Pro";
        CTX.fillText(numberDecimal, vw(numberDecimalDisplayX, CANVA.width), vh(98, CANVA.height));

        // Wypisanie aktualnie ustawionej liczby
        if (isHelpersOn && (difficulty == "easy" || (difficulty == "medium" && timeLeftToGuess <= 10))) {
            CTX.fillStyle = "#aaa";
            CTX.font = vw(3.5, CANVA.width) + "px Source Code Pro";
            CTX.fillText(numberBinary, vw(55, CANVA.width), vh(98, CANVA.height))
        }

        // Wypisanie wartości poszczególnych przycisków
        if (isHelpersOn && timeLeftToGuess <= 10) {
            CTX.fillStyle = "#bbb";
            CTX.font = vw(3.5, CANVA.width) + "px Source Code Pro";
            let distance;
            buttons.forEach(btn => {
                switch (String(btn.value).length) {
                    case 1:
                        distance = 3;
                        break;
                    case 2:
                        distance = 2;
                        break;
                    case 3:
                        distance = 1;
                        break;
                }
                CTX.fillText(btn.value, vw(btn.x + distance, CANVA.width), vh(Button.y + Button.height + 6, CANVA.height));
            });
        }

        // Wypisanie pozostałego czasu
        if (timeLeftToGuess > 20) CTX.fillStyle = "#aaa";
        else if (timeLeftToGuess > 10) CTX.fillStyle = "#cc0";
        else CTX.fillStyle = "#f33";
        CTX.strokeStyle = "#fff";
        CTX.lineWidth = 0.1;
        CTX.font = vw(3.5, CANVA.width) + "px Source Code Pro";
        CTX.fillText(timeLeftToGuess, vw(95, CANVA.width), vh(98, CANVA.height));
        CTX.strokeText(timeLeftToGuess, vw(95, CANVA.width), vh(98, CANVA.height));

        // Narysowanie klatki naszego bohatera
        this.jump();
        switch (this.state) {
            case "idle_r":
                CTX.drawImage(...idleRAnimation.get(this.frame), vw(this.x, CANVA.width), vh(this.y, CANVA.height), this.width, this.height);

                if (this.frame < this.idleFrames) this.frame++;
                else this.frame = 1;
                break;
            case "idle_l":
                CTX.drawImage(...(idleLAnimation.get(this.frame)), vw(this.x, CANVA.width), vh(this.y, CANVA.height), this.width, this.height);

                if (this.frame < this.idleFrames) this.frame++;
                else this.frame = 1;
                break;
            case "run_r":
                CTX.drawImage(...runRAnimation.get(this.frame), vw(this.x, CANVA.width), vh(this.y, CANVA.height), this.width * 1.2, this.height);
                this.x += 2.5;
                if (this.x > 99) this.x = -5;

                if (this.frame < this.runFrames) this.frame++;
                else this.frame = 1;
                break;
            case "run_l":
                CTX.drawImage(...runLAnimation.get(this.frame), vw(this.x, CANVA.width), vh(this.y, CANVA.height), this.width * 1.2, this.height);
                this.x -= 2.5;
                if (this.x < -5) this.x = 99;
                
                if (this.frame < this.runFrames) this.frame++;
                else this.frame = 1;
                break;
            case "death_r":
                CTX.drawImage(...deathRAnimation.get(this.frame), vw(this.x, CANVA.width), vh(this.y, CANVA.height) / 1.15, this.width, this.height * 1.46);
                if (this.frame < this.deathFrames) this.frame++;
                else clearTimeout(animationTimer);
                break;
            case "death_l":
                CTX.drawImage(...deathLAnimation.get(this.frame), vw(this.x, CANVA.width), vh(this.y, CANVA.height) / 1.15, this.width, this.height * 1.46);
                if (this.frame < this.deathFrames) this.frame++;
                else clearTimeout(animationTimer);
                break;
        }

        // Obsługa dźwięku dla bohatera
        if (/run/.test(this.state) && !this.isJumping) stepsSound.play();
    }
}

// Klasa odpowiadająca interaktywnemu przyciskowi
class Button {
    static gap; // vw
    static gapFromWall; // vw
    static maxCapacity;
    static y = 17; // vh
    static width = 8; // vw
    static height = 30; // vh
    constructor(x, bitNr) {
        this.x = x; // vw
        this.bitNr = bitNr;
        this.img = buttonOffImg;
        this.isActive = 0;
        this.value = Math.pow(2, bitNr);
    }
}

const skelly = new Character();
const BASIC_SCORE_AMOUNT = 100;
const EASY_SCORE_MULTIPLIER = 0.5;
const MEDIUM_SCORE_MULTIPLIER = 0.9;
const HARD_SCORE_MULTIPLIER = 1.5;
const EXTREME_SCORE_MULTIPLIER = 3;

// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # Deklaracje i definicje zmiennych LET i VAR

let easyWon = 0;
let mediumWon = 0;
let hardWon = 0;
let extremeWon = 0;
let gamesFailed = 0;
let globalScore = 0;
let roundScore = 0;
let timeSpentOnGuessing = 0;

let numberDecimal;
let numberDecimalColor;
let numberDecimalDisplayX; // vw
let numberBinary = 0;
let timeLeftToGuess;
let timeLeftToGuessTimeout;
let buttons = [];
// difficulty: "easy", "medium", "hard", "extreme"
let difficulty;
let backgroundImg;
// gameState: "start_screen", "solving", "ended"
let gameState = "start_screen";
let levelMusic;
let animationTimer;
let currentlyPressedKey;
let isResized = false;
let isWPressed = false;
let isRunning = false;
let isWon = false;
let isHelpersOn = true;
let isMusicOn = true;
let isSoundOn = true;

// Funkcja przekształcająca responsywne vw na px
function vw(amount, clientWidth = window.innerWidth) {
    let pixelsPer1vw = clientWidth / 100;
    return amount * pixelsPer1vw;
}

// Funkcja przekształcająca responsywne vh na px
function vh(amount, clientHeight = window.innerHeight) {
    let pixelsPer1vh = clientHeight / 100;
    return amount * pixelsPer1vh;
}

// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # Event Listenery dla window

window.addEventListener("load", () => {
    canvaResize();
    document.querySelector("#help-panel > ol > ul > ul").innerHTML = ''.concat(
            '<li>On <span class="easy">easy</span>: ' + EASY_SCORE_MULTIPLIER + '</li>',
            '<li>On <span class="medium">medium</span>: ' + MEDIUM_SCORE_MULTIPLIER + '</li>',
            '<li>On <span class="hard">hard</span>: ' + HARD_SCORE_MULTIPLIER + '</li>',
            '<li>On <span class="extreme">extreme</span>: ' + EXTREME_SCORE_MULTIPLIER + '</li>'
        );
});

window.addEventListener("resize", canvaResize);

window.addEventListener("keydown", (e) => {
    if (gameState != "solving") return;

        if (e.key == 'a' && currentlyPressedKey != 'a') {
            currentlyPressedKey = 'a';
            skelly.frame = 1;
            skelly.state = "run_l";
            animateCharacter(60);

        } else if (e.key == 'd' && currentlyPressedKey != 'd') {
            currentlyPressedKey = 'd';
            skelly.frame = 1;
            skelly.state = "run_r";
            animateCharacter(60);
        }

    if (e.key == 'w') {
        if (currentlyPressedKey == null && isWPressed == false) animateCharacter(60);
        isWPressed = true;
        if (skelly.y == 71.5) {
            skelly.isJumping = true;
        }
    }
});

window.addEventListener("keyup", (e) => {
    if (gameState != "solving") return;

    if (e.key == 'a' && currentlyPressedKey != 'd') {
        currentlyPressedKey = null;
        skelly.frame = 1;
        skelly.state = "idle_l";
        if (skelly.isJumping) animateCharacter(60);
        else animateCharacter(300);

    } else if (e.key == 'd' && currentlyPressedKey != 'a') {
        currentlyPressedKey = null;
        skelly.frame = 1;
        skelly.state = "idle_r";
        if (skelly.isJumping) animateCharacter(60);
        else animateCharacter(300);
    }
    
    if (currentlyPressedKey == null) stepsSound.pause();

    if (e.key == 'w') {
        isWPressed = false;
    }
});

// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # Event Listenery dla elementów HTML 

// Obsługa najechania na przycisk wyboru DIFFICULTY
document.querySelectorAll(".difficulty-buttons").forEach(elem => {
    elem.addEventListener("mouseenter", () => {
        if (difficulty == undefined) {
            difficultyHover.play();
        }
    });
});

// Obsługa kliknięcia przycisku wyboru DIFFICULTY
document.querySelectorAll(".difficulty-buttons").forEach(elem => {
    elem.addEventListener("click", () => {
        if (difficulty == undefined) {
            difficultyClick.play();
            difficulty = elem.innerText.toLowerCase();

            difficultyButtonClicked();

            document.querySelectorAll(".difficulty-buttons").forEach(button => {
                button.classList.remove("difficulty-buttons-active");
                button.classList.remove(button.innerText.toLowerCase() + "-button-active");
                if (button == elem) elem.style.cssText = "filter: brightness(1);";
            });
        }
    });
});

let helpButton = document.querySelector("#help-button");
// Obsługa najechania na przycisk HELP (?)
helpButton.addEventListener("mouseenter", () => {
    if (helpButton.classList.contains("help-button-active")) controlHover.play();
});

// Obsługa kliknięcia przycisku HELP (?)
helpButton.addEventListener("click", () => {
    if (helpButton.classList.contains("help-button-active")) {
        if ($("#help-panel").css("display") == "none") {
            controlClickOn.play();
        } else {
            controlClickOff.play();
        }
        helpButtonClick();
        setTimeout(toggleHelpPanel, 300);
    }
});

// Obsługa najechania na przycisk HELPERS
document.querySelector("#helpers-button").addEventListener("mouseenter", () => {
    if (difficulty != "extreme") controlHover.play();
});

// Obsługa kliknięcia przycisku HELPERS
document.querySelector("#helpers-button").addEventListener("click", () => {
    if (difficulty != "extreme") {
        if (isHelpersOn) controlClickOff.play();
        else controlClickOn.play();

        toggleHelpers();
    }
    else {
        $("#helpers-extreme-easteregg").stop(true, true);
        document.querySelector("#helpers-extreme-easteregg").style.opacity = 1;
        $("#helpers-extreme-easteregg").animate({ opacity: 0 }, 500);
    }
});

// #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   Obsługa przycisków ekranu końcowego

// Obsługa najechania na przycisk CHANGE DIFFICULTY i PLAY AGAIN
document.querySelectorAll(".ending-screen-buttons").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        controlHover.play();
    });
});

// Obsługa kliknięcia przycisku CHANGE DIFFICULTY
document.querySelector("#change-difficulty-button").addEventListener("click", () => {
    controlClickOn.play();
    clearTimeout(animationTimer);
    document.querySelector("#ending-screen").style.display = "none";
    document.querySelectorAll(".difficulty-buttons").forEach(button => {
        if (difficulty == button.innerText.toLowerCase()) button.style.cssText = '';
        button.classList.add("difficulty-buttons-active");
        button.classList.add(button.innerText.toLowerCase() + "-button-active");
    });
    document.querySelector("#helpers-button").classList.add("control-buttons-active");

    skelly.x = 0;
    skelly.state = "idle_r";
    skelly.frame = 1;
    gameState = "start_screen";
    difficulty = undefined;
    numberDecimal = undefined;
    numberBinary = 0;
    buttons = [];
    isWPressed = false;
    isWon = false;

    redrawCanva(gameState);
});

// Obsługa kliknięcia przycisku PLAY AGAIN
document.querySelector("#play-again-button").addEventListener("click", () => {
    controlClickOn.play();
    clearTimeout(animationTimer);
    document.querySelector("#ending-screen").style.display = "none";
    document.querySelector("#helpers-button").classList.add("control-buttons-active");

    skelly.x = 0;
    skelly.state = "idle_r";
    skelly.frame = 1;
    numberDecimal = undefined;
    numberBinary = 0;
    buttons = [];
    isWPressed = false;
    isWon = false;

    difficultyButtonClicked();
});

// #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   Obsługa przycisków audio

let musicButton = document.querySelector("#music-button");
// Najechanie na przycisk MUSIC
musicButton.addEventListener("mouseenter", () => controlHover.play());

// Kliknięcie przycisku MUSIC
let musicLock = false;
musicButton.addEventListener("click", () => {
    if (musicLock) return;
    isMusicOn = !isMusicOn;

    if (!isMusicOn) {
        controlClickOff.play();
        MELODIES.forEach(melody => audioFadeOut(melody, 1000, false));

        musicButton.style.color = "#a06060";
        musicButton.innerHTML = "Music<br>OFF";
    } else {
        controlClickOn.play();
        MELODIES.forEach(melody => audioFadeIn(melody, 1000, false));

        musicButton.style.color = "#60a060";
        musicButton.innerHTML = "Music<br>ON";
    }

    musicLock = true;
    setTimeout(() => musicLock = false, 1000);
});

let soundButton = document.querySelector("#sound-button");
// Najechanie na przycisk SOUND
soundButton.addEventListener("mouseenter", () => controlHover.play());

// Kliknięcie przycisku SOUND
let soundLock = false;
soundButton.addEventListener("click", () => {
    if (soundLock) return;
    isSoundOn = !isSoundOn;

    if (!isSoundOn) {
        controlClickOff.play();
        setTimeout(() => SOUNDS.forEach(sound => sound.volume = 0), 180);
        soundButton.style.color = "#a06060";
        soundButton.innerHTML = "Sound<br>OFF";
    } else {
        controlClickOn.play();
        SOUNDS.forEach(sound => sound.volume = SOUNDS_VOLUMES.get(sound));
        soundButton.style.color = "#60a060";
        soundButton.innerHTML = "Sound<br>ON";
    }

    soundLock = true;
    setTimeout(() => soundLock = false, 1000);
}); 

// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # Funkcje

function canvaResize() {
    isResized = true;
    CANVA.width = window.innerWidth - vw(30);
    CANVA.height = window.innerHeight - vh(35);
    
    skelly.width = vw(6, CANVA.width);
    skelly.height = vh(20, CANVA.height);

    clearTimeout(timeLeftToGuessTimeout);
    redrawCanva(gameState);
    isResized = false;
}

function redrawCanva(state) {
    CTX.clearRect(0, 0, CANVA.width, CANVA.height);
    switch (state) {
        case "start_screen":
            CTX.fillStyle = "#fff";
            CTX.font = vw(5, CANVA.width) + "px Source Code Pro";
            CTX.fillText("Choose the difficulty level", vw(9, CANVA.width), vh(52, CANVA.height));
            break;
        case "solving":
            animateCharacter(300);
            timerDecrement();
            break;
        case "ended":
            // Część obsługująca ekran, animacje i muzykę
            setTimeout(() => helpButton.classList.add("help-button-active"), 3000);
            isWPressed = false;
            currentlyPressedKey = null;
            if (skelly.state.charAt(skelly.state.length - 1) == 'r') {
                skelly.frame = 1;
                skelly.state = "idle_r";
                if (!isWon) setTimeout(() => { skelly.state = "death_r"; animateCharacter(150); }, 2000);
            } else {
                skelly.frame = 1;
                skelly.state = "idle_l";
                if (!isWon) setTimeout(() => { skelly.state = "death_l"; animateCharacter(150); }, 2000);
            }
            if (skelly.isJumping) animateCharacter(60);
            else animateCharacter(300);

            setTimeout(() => {
                $("#ending-screen").fadeIn(500);
                $("#ending-screen").css("display", "flex");
            }, 2500);
            document.querySelector("#change-difficulty-button").style.marginTop = vh(38, CANVA.height) + "px";
            document.querySelector("#change-difficulty-button").style.padding = vh(2, CANVA.height) + "px " + vw(1, CANVA.width) + "px";
            document.querySelector("#change-difficulty-button").style.width = vw(15, CANVA.width) + "px";

            document.querySelector("#play-again-button").style.marginTop = vh(3, CANVA.height) + "px";
            document.querySelector("#play-again-button").style.padding = vh(2, CANVA.height) + "px " + vw(1, CANVA.width) + "px";
            document.querySelector("#play-again-button").style.width = vw(15, CANVA.width) + "px";

            document.querySelector("#score-info").style.marginTop = vh(3, CANVA.height) + "px";

            audioFadeOut(levelMusic, 500);
            if (isResized) return;

            // Część obsługująca logikę punktacji i dźwięki przy końcu gry
            if (isWon) {
                timeSpentOnGuessing -= timeLeftToGuess;
                roundScore -= timeSpentOnGuessing
                switch (difficulty) {
                    case "easy":
                        easyWon++;
                        roundScore *= EASY_SCORE_MULTIPLIER;
                        break;
                    case "medium":
                        mediumWon++;
                        roundScore *= MEDIUM_SCORE_MULTIPLIER;
                        break;
                    case "hard":
                        hardWon++;
                        roundScore *= HARD_SCORE_MULTIPLIER;
                        break;
                    case "extreme":
                        extremeWon++;
                        roundScore *= EXTREME_SCORE_MULTIPLIER;
                        break;
                }
                roundScore = Math.ceil(roundScore);
                globalScore += roundScore;
                document.querySelector("#score-info").innerHTML = "Your score: " + roundScore;

                winMelody.play();
            } else {
                gamesFailed++;
                document.querySelector("#score-info").innerHTML = "Game failed :(<br>Correct: " + numberDecimal.toString(2).padStart(Button.maxCapacity, '0');

                loseMelody.play();
                setTimeout(() => deathSound.play(), 2000);
            }

            setTimeout(() => {
                document.querySelector("#global-score").innerHTML = "Score: " + globalScore;
                document.querySelector("#games-failed").innerHTML = "Failed: " + gamesFailed;
                document.querySelector("#easy-won").innerHTML = "Easy: " + easyWon;
                document.querySelector("#medium-won").innerHTML = "Medium: " + mediumWon;
                document.querySelector("#hard-won").innerHTML = "Hard: " + hardWon;
                document.querySelector("#extreme-won").innerHTML = "Extreme: " + extremeWon;
            }, 2000);
            break;
    }
}

function difficultyButtonClicked() {
    helpButton.classList.remove("help-button-active");
    if ($("#help-panel").css("display") == "block") toggleHelpPanel();

    switch (difficulty) {
        case "easy":
            easyConfig();
            break;
        case "medium":
            mediumConfig();
            break;
        case "hard":
            hardConfig();
            break;
        case "extreme":
            extremeConfig();
            break;
    }
    timeSpentOnGuessing = timeLeftToGuess;
    roundScore = BASIC_SCORE_AMOUNT;
                    
    if (difficulty == "extreme") levelMusic = extremeMusic;
    else levelMusic = gameMusic;
    setTimeout(() => audioFadeIn(levelMusic), 1500);

    switch (String(numberDecimal).length) {
        case 1:
            numberDecimalDisplayX = 49;
            break;
        case 2:
            numberDecimalDisplayX = 48;
            break;
        case 3:
            numberDecimalDisplayX = 47;
            break;
        case 4:
            numberDecimalDisplayX = 46;
            break;
    }

    $("#instruction").animate({ opacity: 1 }, 1500);

    let counter = 1;
    let dots = '';
    CTX.fillStyle = "#fff";
    document.fonts.load("italic " + vw(2, CANVA.width) + "px Source Code Pro").then(() => {
        CTX.clearRect(0, 0, CANVA.width, CANVA.height);
        CTX.font = "bold " + vw(5, CANVA.width) + "px Source Code Pro";
        CTX.fillText("Loading", vw(37, CANVA.width), vh(45, CANVA.height));
        CTX.font = "italic " + vw(2, CANVA.width) + "px Source Code Pro";
        CTX.fillText("Collect as low score as possible", vw(30, CANVA.width), vh(70, CANVA.height));
        CTX.fillText("Lost games DON'T affect score and games counter", vw(22, CANVA.width), vh(83, CANVA.height));
    });

    let loadingScreenInterval = setInterval(() => {
        dots = '';
        for (i = 0; i < counter; i++) dots += '.';
        CTX.clearRect(0, 0, CANVA.width, CANVA.height);
        CTX.font = "bold " + vw(5, CANVA.width) + "px Source Code Pro";
        CTX.fillText("Loading" + dots, vw(37, CANVA.width), vh(45, CANVA.height));
        CTX.font = "italic " + vw(2, CANVA.width) + "px Source Code Pro";
        CTX.fillText("Collect as low score as possible", vw(30, CANVA.width), vh(70, CANVA.height));
        CTX.font = "italic " + vw(2, CANVA.width) + "px Source Code Pro";
        CTX.fillText("Lost games DON'T affect score and games counter", vw(22, CANVA.width), vh(83, CANVA.height))
        counter++;
        if (counter > 4) {
            clearInterval(loadingScreenInterval);
            gameState = "solving";
            redrawCanva(gameState);
        }
    }, 500);
}

function animateCharacter(frameDuration) {
    clearTimeout(animationTimer);
    skelly.redraw();
    if (currentlyPressedKey == null && !skelly.isJumping && skelly.state != "death_r" && skelly.state != "death_l")
        animationTimer = setTimeout(() => animateCharacter(frameDuration), 300);
    else animationTimer = setTimeout(() => animateCharacter(frameDuration), frameDuration);
}

function easyConfig() {
    backgroundImg = easyBg;
    numberDecimal = Math.floor(Math.random() * 31) + 1;
    numberDecimalColor = "#0d5";
    timeLeftToGuess = 30;

    Button.maxCapacity = 5;
    Button.gapFromWall = 18;
    Button.gap = 14;
    for (i = 0; i < Button.maxCapacity; i++) {
        buttons.push(new Button(Button.gapFromWall + Button.gap * i, Button.maxCapacity - (i + 1)));
    }
}

function mediumConfig() {
    backgroundImg = mediumBg;
    numberDecimal = Math.floor(Math.random() * 48) + 16;
    numberDecimalColor = "#dd5";
    timeLeftToGuess = 35;

    Button.maxCapacity = 6;
    Button.gapFromWall = 11;
    Button.gap = 14;
    for (i = 0; i < Button.maxCapacity; i++) {
        buttons.push(new Button(Button.gapFromWall + Button.gap * i, Button.maxCapacity - (i + 1)));
    }
}

function hardConfig() {
    backgroundImg = hardBg;
    numberDecimal = Math.floor(Math.random() * 192) + 64;
    numberDecimalColor = "#d35";
    timeLeftToGuess = 45;

    Button.maxCapacity = 8;
    Button.gapFromWall = 4;
    Button.gap = 12;
    for (i = 0; i < Button.maxCapacity; i++) {
        buttons.push(new Button(Button.gapFromWall + Button.gap * i, Button.maxCapacity - (i + 1)));
    }
}

function extremeConfig() {
    backgroundImg = extremeBg;
    numberDecimal = Math.floor(Math.random() * 768) + 256;
    numberDecimalColor = "#a11";
    timeLeftToGuess = 60;

    Button.maxCapacity = 10;
    Button.gapFromWall = 1;
    Button.gap = 10;
    for (i = 0; i < Button.maxCapacity; i++) {
        buttons.push(new Button(Button.gapFromWall + Button.gap * i, Button.maxCapacity - (i + 1)));
    }
    document.querySelector("#helpers-button").classList.remove("control-buttons-active");
    if (isHelpersOn) toggleHelpers();
}

function timerDecrement() {
    timeLeftToGuessTimeout = setTimeout(timerDecrement, 1000);
    if (timeLeftToGuess > 0) timeLeftToGuess--;
    else {
        clearTimeout(timeLeftToGuessTimeout);
        gameState = "ended";
        skelly.frame = 1;
        redrawCanva(gameState);
    }
}

function toggleHelpers() {
    let helpersButton = document.querySelector("#helpers-button");
    if (isHelpersOn) {
        helpersButton.innerHTML = "Helpers<br>OFF";
        helpersButton.style.color = "#a06060";
    } else {
        helpersButton.innerHTML = "Helpers<br>ON";
        helpersButton.style.color = "#60a060";
    }
    isHelpersOn = !isHelpersOn;
}

function helpButtonClick() {
    let rotationValue;
    helpButton.style.color = "#e2a808";
    helpButton.classList.remove("help-button-active");

    helpButton.animate([{ transform: "scale(1)" }, { transform: "scale(0.9)" }], { duration: 300, fill: "forwards" });
    if ($("#help-panel").css("display") == "none") rotationValue = "360deg";
    else rotationValue = "-360deg";
    
    setTimeout(() => document.querySelector("#help-button > span").animate({ rotate: rotationValue }, 600), 300);
    setTimeout(() => helpButton.animate([{ transform: "scale(0.9)" }, { transform: "scale(1.3)" }], { duration: 300, fill: "forwards" }), 300);
    setTimeout(() => helpButton.animate([{ transform: "scale(1.3)" }, { transform: "scale(1)" }], { duration: 300, fill: "forwards" }), 600);
    setTimeout(() => helpButton.style.color = '', 900);

    setTimeout(() => {
        if (gameState != "solving") helpButton.classList.add("help-button-active");
    }, 3000);
}

function toggleHelpPanel() {
    if ($("#help-panel").css("display") == "none") {
        $("#help-panel").css("display", "block");
        $("#help-panel").animate({ opacity: 1 }, 600);
    } else {
        $("#help-panel").animate({ opacity: 0 }, 600);
        setTimeout(() => $("#help-panel").css("display", "none"), 600);
    }
}

//  #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   Funkcje AUDIO

function audioFadeIn(audio, duration = 1000, play = true) {
    if (play) { audio.volume = 0; audio.play(); }
    if (!isMusicOn) return;

    let step = 0.01;
    let targetVolume = MELODIES_VOLUMES.get(audio);
    let intervalStep = duration * step / targetVolume;

    let interval = setInterval(() => {
        audio.volume += step;
        if (audio.volume + step >= targetVolume) {
            clearInterval(interval);
            audio.volume = targetVolume;
        }
    }, intervalStep);
}

function audioFadeOut(audio, duration = 1000, pause = true) {
    let step = 0.01;
    let intervalStep = duration * step / audio.volume;

    let interval = setInterval(() => {
        audio.volume -= step;

        if (audio.volume - step <= 0) {
            clearInterval(interval);
            audio.volume = 0;
            if (pause) { audio.pause(); audio.currentTime = 0; }
        }
    }, intervalStep);
}