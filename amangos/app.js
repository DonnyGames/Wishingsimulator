let wish = document.getElementById("wish");
let character = document.getElementById("character");
let wishEvent = document.getElementById("wishEvent");
let characterEvent = document.getElementById("characterEvent");
let wiseTree = document.getElementById("wise");
var soundtree = new Audio('../amangos/audio/Wise_Mystical_Tree_music.mp3');





function startWish() {
    let characterRoll = Math.round(Math.random()* 13)

    if (characterRoll == 1){
    character.innerHTML = "qiqi 5⭐";
    }
    else if (characterRoll == 2) {
        character.innerHTML = "diluc 5⭐";
    }
    else if (characterRoll == 3) {
        character.innerHTML = "jean 5⭐";
    }
    else if (characterRoll == 4) {
        character.innerHTML = "Keqing 5⭐";
    }
    else if (characterRoll == 5) {
        character.innerHTML = "Mona 5⭐";
    }
    else if (characterRoll == 6) {
        character.innerHTML = "Tighnari 5⭐";
    }
    else if (characterRoll == 7) {
        character.innerHTML = "Skyward Harp 5⭐";
    }
    else if (characterRoll == 8) {
        character.innerHTML = "Skyward spine 5⭐";
    }
    else if (characterRoll == 9) {
        character.innerHTML = "Skyward pride 5⭐";
    }
    else if (characterRoll == 10) {
        character.innerHTML = "skyward pride 5⭐";
    }
    else if (characterRoll == 11) {
        character.innerHTML = "Wolfs gravestone 5⭐";
    }
    else if (characterRoll == 12) {
        character.innerHTML = "Amos bow 5⭐";
    }
    else if (characterRoll == 13) {
        character.innerHTML = "Lost prayers to the sacred winds 5⭐";
    }
    console.log(characterRoll)
}

function startWishEvent() {
    let characterRoll = Math.round(Math.random()* 23)

    if (characterRoll == 1){
    characterEvent.innerHTML = "venti 5⭐";
    wiseTree.style.display = "none";
    pauze()
    }
    else if (characterRoll == 2) {
        characterEvent.innerHTML = "klee 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        pauze()
soundtree.currentTime = 0;
    }
    else if (characterRoll == 3) {
        characterEvent.innerHTML = "childe 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        pauze()
soundtree.currentTime = 0;
    }else if (characterRoll == 4) {
        characterEvent.innerHTML = "zhongli 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        pauze()
soundtree.currentTime = 0;
    }else if (characterRoll == 5) {
        characterEvent.innerHTML = "Albedo 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        pauze()
soundtree.currentTime = 0;
    }else if (characterRoll == 6) {
        characterEvent.innerHTML = "Ganyu 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        pauze()
soundtree.currentTime = 0;
    }else if (characterRoll == 7) {
        characterEvent.innerHTML = "xiao 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        pauze()
soundtree.currentTime = 0;
    }else if (characterRoll == 8) {
        characterEvent.innerHTML = "keqing 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        pauze()
soundtree.currentTime = 0;
    }else if (characterRoll == 9) {
        characterEvent.innerHTML = "hutao 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        pauze()
    }else if (characterRoll == 10) {
        characterEvent.innerHTML = "eula 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        pauze()
    }
    else if (characterRoll == 11) {
        characterEvent.innerHTML = "kazuha 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        pauze()
    }
    else if (characterRoll == 12) {
        characterEvent.innerHTML = "ayaka 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        pauze()
    }
    else if (characterRoll == 13) {
        characterEvent.innerHTML = "yoimiya 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        pauze()
    }
    else if (characterRoll == 14) {
        characterEvent.innerHTML = "raiden 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        pauze()
    }
    else if (characterRoll == 15) {
        characterEvent.innerHTML = "kokomi 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        pauze()
    }
    else if (characterRoll == 16) {
        characterEvent.innerHTML = "itto 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        pauze();
    }
    else if (characterRoll == 17) {
        characterEvent.innerHTML = "Shenhe 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        pauze()
    }
    else if (characterRoll == 18) {
        characterEvent.innerHTML = "Yae miko 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        pauze()
    }
    else if (characterRoll == 19) {
        characterEvent.innerHTML = "ayato 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        pauze()
    }
    else if (characterRoll == 20) {
        characterEvent.innerHTML = "yelan 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        pauze()
    }
    else if (characterRoll == 21) {
        characterEvent.innerHTML = "Cyno 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        pauze()
    }
    else if (characterRoll == 22) {
        characterEvent.innerHTML = "nilou 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        pauze()

    }
    else if (characterRoll == 23) {
        characterEvent.innerHTML = "Wise mystical tree 6⭐";
        characterEvent.style.color = "red";
        wiseTree.style.display = "block";
        soundtree.play();
  

    }
}

window.onload = function () {
    wiseTree.style.display = "none";
}

function pauze() {
    soundtree.pause()
}

