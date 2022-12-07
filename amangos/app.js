let wish = document.getElementById("wish");
let character = document.getElementById("character");
let wishEvent = document.getElementById("wishEvent");
let characterEvent = document.getElementById("characterEvent");
let wiseTree = document.getElementById("wise");
var soundtree = new Audio('../amangos/audio/Wise_Mystical_Tree_music.mp3');
var primos = 0
var counter = document.getElementById("primos")
let stardust = document.getElementById("stardust")


let stardustcounter = 0


function startWish() {
    let characterRoll = Math.round(Math.random()* 26)
    if (primos > 159) {
        primos = primos - 160
        counter.innerHTML = primos
        stardustcounter = stardustcounter + 15;
        stardust.innerText = stardustcounter
    
    if (characterRoll == 1){
    character.innerHTML = "qiqi 5⭐";
    character.style.color = "gold";
    }
    else if (characterRoll == 2) {
        character.innerHTML = "diluc 5⭐";
        character.style.color = "gold";
    }
    else if (characterRoll == 3) {
        character.innerHTML = "jean 5⭐";
        character.style.color = "gold";
    }
    else if (characterRoll == 4) {
        character.innerHTML = "Keqing 5⭐";
        character.style.color = "gold";
    }
    else if (characterRoll == 5) {
        character.innerHTML = "Mona 5⭐";
        character.style.color = "gold";
    }
    else if (characterRoll == 6) {
        character.innerHTML = "Tighnari 5⭐";
        character.style.color = "gold";
    }
    else if (characterRoll == 7) {
        character.innerHTML = "Skyward Harp 5⭐";
        character.style.color = "gold";
    }
    else if (characterRoll == 8) {
        character.innerHTML = "Skyward spine 5⭐";
        character.style.color = "gold";
    }
    else if (characterRoll == 9) {
        character.innerHTML = "Skyward pride 5⭐";
        character.style.color = "gold";
    }
    else if (characterRoll == 10) {
        character.innerHTML = "skyward pride 5⭐";
        character.style.color = "gold";
    }
    else if (characterRoll == 11) {
        character.innerHTML = "Wolfs gravestone 5⭐";
        character.style.color = "gold";
    }
    else if (characterRoll == 12) {
        character.innerHTML = "Amos bow 5⭐";
        character.style.color = "gold";
    }
   
    else if (characterRoll == 13) {
        character.innerHTML = "Lost prayers to the sacred winds 5⭐";
        character.style.color = "gold";
    } if (primos > 160) {
        primos = primos - 160
        counter.innerHTML = primos
    }

    console.log(characterRoll)
}
}

function startWishEvent() {
    let characterRoll = Math.round(Math.random()* 61)
    if (primos > 159) {
        primos = primos - 160
        counter.innerHTML = primos
        stardustcounter = stardustcounter + 15;
        stardust.innerText = stardustcounter
    
    if (characterRoll == 1){
    characterEvent.innerHTML = "venti 5⭐";
    wiseTree.style.display = "none";
    characterEvent.style.color = "gold";
    pauze()
    }
    if (characterRoll == 2){
        characterEvent.innerHTML = "venti 5⭐";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
        }
    else if (characterRoll == 3) {
        characterEvent.innerHTML = "klee 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
soundtree.currentTime = 0;
    }
    else if (characterRoll == 4) {
        characterEvent.innerHTML = "klee 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
soundtree.currentTime = 0;
    }
    else if (characterRoll == 5) {
        characterEvent.innerHTML = "childe 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
soundtree.currentTime = 0;
    }
    else if (characterRoll == 6) {
        characterEvent.innerHTML = "childe 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
soundtree.currentTime = 0;
    }else if (characterRoll == 7) {
        characterEvent.innerHTML = "zhongli 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
soundtree.currentTime = 0;
    }else if (characterRoll == 8) {
        characterEvent.innerHTML = "zhongli 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
soundtree.currentTime = 0;
    }
    else if (characterRoll == 9) {
        characterEvent.innerHTML = "Albedo 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
soundtree.currentTime = 0;
    }
    else if (characterRoll == 10) {
        characterEvent.innerHTML = "Albedo 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
soundtree.currentTime = 0;
    }
    
    else if (characterRoll == 11) {
        characterEvent.innerHTML = "Ganyu 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
soundtree.currentTime = 0;
    }
    else if (characterRoll == 12) {
        characterEvent.innerHTML = "Ganyu 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
soundtree.currentTime = 0;
    }
    else if (characterRoll == 13) {
        characterEvent.innerHTML = "xiao 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
soundtree.currentTime = 0;
    }
    else if (characterRoll == 14) {
        characterEvent.innerHTML = "xiao 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
soundtree.currentTime = 0;
    }
    else if (characterRoll == 15) {
        characterEvent.innerHTML = "keqing 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
soundtree.currentTime = 0;
    }
    else if (characterRoll == 16) {
        characterEvent.innerHTML = "keqing 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
soundtree.currentTime = 0;
    }
    else if (characterRoll == 17) {
        characterEvent.innerHTML = "hutao 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
    }
    else if (characterRoll == 18) {
        characterEvent.innerHTML = "hutao 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
    }
    else if (characterRoll == 19) {
        characterEvent.innerHTML = "eula 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
    }
    else if (characterRoll == 20) {
        characterEvent.innerHTML = "eula 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
    }
    else if (characterRoll == 21) {
        characterEvent.innerHTML = "kazuha 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
    }
    else if (characterRoll == 22) {
        characterEvent.innerHTML = "kazuha 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
    }
    else if (characterRoll == 23) {
        characterEvent.innerHTML = "ayaka 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
    }
    else if (characterRoll == 24) {
        characterEvent.innerHTML = "ayaka 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
    }
    else if (characterRoll == 25) {
        characterEvent.innerHTML = "yoimiya 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
    }
    else if (characterRoll == 26) {
        characterEvent.innerHTML = "yoimiya 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
    }
    else if (characterRoll == 27) {
        characterEvent.innerHTML = "raiden 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
    }
    else if (characterRoll == 28) {
        characterEvent.innerHTML = "raiden 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
    }
    else if (characterRoll == 29) {
        characterEvent.innerHTML = "kokomi 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
    }
    else if (characterRoll == 30) {
        characterEvent.innerHTML = "kokomi 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
    }
    else if (characterRoll == 31) {
        characterEvent.innerHTML = "itto 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze();
    }
    else if (characterRoll == 32) {
        characterEvent.innerHTML = "itto 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze();
    }
    else if (characterRoll == 33) {
        characterEvent.innerHTML = "Shenhe 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
    }
    else if (characterRoll == 34) {
        characterEvent.innerHTML = "Shenhe 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
    }
    else if (characterRoll == 35) {
        characterEvent.innerHTML = "Yae miko 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
    }
    else if (characterRoll == 36) {
        characterEvent.innerHTML = "Yae miko 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
    }
    else if (characterRoll == 37) {
        characterEvent.innerHTML = "ayato 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
    }
    else if (characterRoll == 38) {
        characterEvent.innerHTML = "ayato 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
    }
    else if (characterRoll == 39) {
        characterEvent.innerHTML = "yelan 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
    }
    else if (characterRoll == 40) {
        characterEvent.innerHTML = "yelan 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
    }
    else if (characterRoll == 41) {
        characterEvent.innerHTML = "Cyno 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
    }
    else if (characterRoll == 42) {
        characterEvent.innerHTML = "Cyno 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()
    }
    else if (characterRoll == 43) {
        characterEvent.innerHTML = "nilou 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()

    }
    else if (characterRoll == 44) {
        characterEvent.innerHTML = "nilou 5⭐";
        characterEvent.style.color = "black";
        wiseTree.style.display = "none";
        characterEvent.style.color = "gold";
        pauze()

    }
    else if (characterRoll == 45) {
        characterEvent.innerHTML = "Wise mystical tree 6⭐";
        characterEvent.style.color = "red";
        wiseTree.style.display = "block";
        
        soundtree.play();
  

    }
    else if (characterRoll == 46) {
        characterEvent.innerHTML = "Xiangling 4⭐";
        characterEvent.style.color = "purple";
    }
    else if (characterRoll == 47) {
        characterEvent.innerHTML = "Xiangling 4⭐";
        characterEvent.style.color = "purple";
    }
    else if (characterRoll == 48) {
        characterEvent.innerHTML = "Xiangling 4⭐";
        characterEvent.style.color = "purple";
    }
    else if (characterRoll == 49) {
        characterEvent.innerHTML = "Xiangling 4⭐";
        characterEvent.style.color = "purple";
    }
    else if (characterRoll == 50) {
        characterEvent.innerHTML = "Xiangling 4⭐";
        characterEvent.style.color = "purple";
    }
    else if (characterRoll == 51) {
        characterEvent.innerHTML = "Barbara 4⭐";
        characterEvent.style.color = "purple";
    }
    else if (characterRoll == 52) {
        characterEvent.innerHTML = "Barbara 4⭐";
        characterEvent.style.color = "purple";
    }else if (characterRoll == 53) {
        characterEvent.innerHTML = "Barbara 4⭐";
        characterEvent.style.color = "purple";
    }else if (characterRoll == 54) {
        characterEvent.innerHTML = "Barbara 4⭐";
        characterEvent.style.color = "purple";
    }
    else if (characterRoll == 55) {
        characterEvent.innerHTML = "Barbara 4⭐";
        characterEvent.style.color = "purple";
    }
    else if (characterRoll == 56) {
        characterEvent.innerHTML = "Barbara 4⭐";
        characterEvent.style.color = "purple";
    }
    else if (characterRoll == 57) {
        characterEvent.innerHTML = "Beidou 4⭐";
        characterEvent.style.color = "purple";
    }
    else if (characterRoll == 58) {
        characterEvent.innerHTML = "Beidou 4⭐";
        characterEvent.style.color = "purple";
    }
    else if (characterRoll == 59) {
        characterEvent.innerHTML = "Beidou 4⭐";
        characterEvent.style.color = "purple";
    }
    else if (characterRoll == 60) {
        characterEvent.innerHTML = "Beidou 4⭐";
        characterEvent.style.color = "purple";
    }
    else if (characterRoll == 61) {
        characterEvent.innerHTML = "Beidou 4⭐";
        characterEvent.style.color = "purple";
    }

   
}
}

window.onload = function () {
    wiseTree.style.display = "none";
}

function pauze() {
    soundtree.pause()
}


function primoAdd() {
    primos = primos + 10;
    counter.innerHTML = (primos)
    console.log(primos)
}


function stardustcollecting() {
    if (stardustcounter >= 74) {
stardustcounter = stardustcounter  - 75;
primos = primos + 160;
stardust.innerText = stardustcounter;
counter.innerHTML = primos;
    }
    
}

