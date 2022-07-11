let mySound = new Audio('backgroundmusic.mp3')
mySound.play();
mySound.loop = true;
var cnt = 0;
let block = document.getElementsByClassName('blocks');
let a = 0, b = 0;
let indexA = -1, indexB = 29;
let indexA2 = -1,indexB2 = 29;
let token1A = 0, token1B = 0, token2A = 0, token2B = 0;;
function myScript() {
    let mySound = new Audio('rolling_dice.wav')
    mySound.playbackRate=2;
    mySound.play();
    let x = Math.random();
    x = Math.round((x * 10) % 5) + 1;
    x = String(x);
    document.getElementById("temp").textContent = x;
    x = Number(x);
    cnt++;
    if (cnt % 2 == 1) {
        if (token1A == 0) {
            if (a == 0 && x == 6) {
                document.getElementById('Player1').style.fontSize = '3rem';
                block[0].style.backgroundColor = 'pink';
                a++;
                document.querySelector('#A > h1').innerHTML = String(1-a) + ' A';
                block[0].innerHTML = '1 A';
                indexA = 0;
            }
            else if (a == 1) {
                if (x == 6)
                    cnt--;
                if (indexA + x <= 7 && indexA <= 7) {
                    block[indexA].style.backgroundColor = '#0d11dc'
                    block[indexA].innerHTML = '';
                    indexA += x;
                    block[indexA].style.backgroundColor = 'pink'
                    block[indexA].innerHTML = '1 A';
                    if (indexA == indexB) {
                        block[indexA].innerHTML = '1 A';
                        indexB = 0;
                        b--;
                        document.querySelector('#B > h1').innerHTML = String(1 - b) + ' B';
                    }
                }
                else if (indexA + x > 7 && indexA <= 7) {
                    block[indexA].style.backgroundColor = '#0d11dc'
                    block[indexA].innerHTML = '';
                    x -= (7 - indexA);
                    indexA = 7;
                    for (let i = 0; i < x; i++) {
                        if (i == 0)
                            indexA += 3;
                        else
                            indexA += 2;
                    }
                    block[indexA].style.backgroundColor = 'pink'
                    block[indexA].innerHTML = '1 A';
                    if (indexA == indexB) {
                        block[indexA].innerHTML = '1 A';
                        indexB = 0;
                        b--;
                        document.querySelector('#B > h1').innerHTML = String(1 - b) + ' B';
                    }

                }
                else if (indexA + x * 2 <= 20 && indexA + x * 2 >= 10 && indexA >= 10 && indexA <= 20 && indexA % 2 == 0) {
                    block[indexA].style.backgroundColor = '#0d11dc'
                    block[indexA].innerHTML = '';
                    for (let i = 0; i < x; i++) {
                        indexA += 2;
                    }
                    block[indexA].style.backgroundColor = 'pink'
                    block[indexA].innerHTML = '1 A';
                    if (indexA == indexB) {
                        block[indexA].innerHTML = '1 A';
                        indexB = 0;
                        b--;
                        document.querySelector('#B > h1').innerHTML = String(1 - b) + ' B';
                    }
                }
                else if (indexA + x * 2 > 20 && indexA >= 10 && indexA <= 20 && indexA % 2 == 0) {
                    block[indexA].style.backgroundColor = '#0d11dc'
                    block[indexA].innerHTML = '';
                    for (let i = 0; indexA < 20; i++) {
                        indexA += 2;
                        x--;
                    }
                    indexA = 28;
                    x--;
                    if (indexA - x >= 21) {
                        block[indexA].style.backgroundColor = '#0d11dc';
                        block[indexA].innerHTML = '';
                        indexA -= x;
                        block[indexA].style.backgroundColor = 'pink';
                        block[indexA].innerHTML = '1 A';
                    }
                    else if (x == 0) {
                        block[indexA].style.backgroundColor = 'pink';
                        block[indexA].innerHTML = '1 A';
                    }
                    if (indexA == indexB) {
                        block[indexA].innerHTML = '1 A';
                        indexB = 0;
                        b--;
                        document.querySelector('#B > h1').innerHTML = String(1 - b) + ' B';
                    }
                }
                else if (indexA - x >= 21) {
                    block[indexA].style.backgroundColor = '#0d11dc';
                    block[indexA].innerHTML = '';
                    indexA -= x;
                    block[indexA].style.backgroundColor = 'pink';
                    block[indexA].innerHTML = '1 A';
                    if (indexA == indexB) {
                        block[indexA].innerHTML = '1 A';
                        indexB = 0;
                        b--;
                        document.querySelector('#B > h1').innerHTML = String(1 - b) + ' B';
                    }
                }
                else if (indexA - x < 21 && indexA >= 21) {
                    block[indexA].style.backgroundColor = '#0d11dc'
                    block[indexA].innerHTML = '';
                    x -= (indexA - 21);
                    indexA = 21;
                    for (let i = 0; i < x; i++) {
                        indexA -= 2;
                    }
                    block[indexA].style.backgroundColor = 'pink'
                    block[indexA].innerHTML = '1 A';
                    if (indexA == indexB) {
                        block[indexA].innerHTML = '1 A';
                        indexB = 0;
                        b--;
                        document.querySelector('#B > h1').innerHTML = String(1 - b) + ' B';
                    }
                }
                else if (indexA - x * 2 >= 11 && indexA - x * 2 <= 19 && indexA >= 11 && indexA <= 19 && indexA % 2 == 1) {
                    block[indexA].style.backgroundColor = '#0d11dc'
                    block[indexA].innerHTML = '';
                    for (let i = 0; i < x; i++) {
                        indexA -= 2;
                    }
                    block[indexA].style.backgroundColor = 'pink'
                    block[indexA].innerHTML = '1 A';
                    if (indexA == indexB) {
                        block[indexA].innerHTML = '1 A';
                        indexB = 0;
                        b--;
                        document.querySelector('#B > h1').innerHTML = String(1 - b) + ' B';
                    }
                }
                else if (indexA - x * 2 >= 9 && indexA >= 11 && indexA <= 19 && indexA % 2 == 1) {
                    block[indexA].style.backgroundColor = '#0d11dc'
                    block[indexA].innerHTML = '';
                    for (let i = 0; indexA != 11 && i<x; i++) {
                        indexA -= 2;
                        x--;
                    }
                    if(x!=0){
                    indexA -= 3;
                    x--;
                    }
                    else{
                        block[indexA].style.backgroundColor = 'pink'
                        block[indexA].innerHTML = '1 A';
                    }
                    if (x != 0) {
                        indexA = -1;
                        x--;
                        token1A++;
                        document.getElementById('middle').innerHTML = 'A WINS';
                        document.getElementById('middle').style.textAlign = 'center';
                        document.getElementById('middle').style.fontSize = '8rem';
                    }
                    else{
                        block[indexA].style.backgroundColor = 'pink'
                        block[indexA].innerHTML = '1 A';
                    }
                    if (indexA == indexB) {
                        block[indexB].innerHTML = '1 B';
                        indexA = 0;
                        a--;
                        document.querySelector('#A > h1').innerHTML = String(1 - a) + ' A';
                    }
                }
            }
            if (cnt % 2 == 0)
                document.getElementById("Turn").textContent = "A's Turn"
            else
                document.getElementById("Turn").textContent = "B's Turn"

        }
    }
    else {
        if (token1B == 0) {
            if (b == 0 && x == 6) {
                document.getElementById('Player2').style.fontSize = '3rem';
                block[28].style.backgroundColor = 'pink';
                b++;
                document.querySelector('#B > h1').innerHTML = String(1-b) + ' B';
                block[28].innerHTML = '1 B';
                indexB = 28;
            }
            else if (b == 1) {
                if (x == 6)
                    cnt--;
                if (indexB - x >= 21) {
                    block[indexB].style.backgroundColor = '#0d11dc';
                    block[indexB].innerHTML = '';
                    indexB -= x;
                    block[indexB].style.backgroundColor = 'pink';
                    block[indexB].innerHTML = '1 B';
                    if (indexA == indexB) {
                        block[indexB].innerHTML = '1 B';
                        indexA = 0;
                        a--;
                        document.querySelector('#A > h1').innerHTML = String(1 - a) + ' A';
                    }
                }
                else if (indexB - x < 21 && indexB >= 21) {
                    block[indexB].style.backgroundColor = '#0d11dc'
                    block[indexB].innerHTML = '';
                    x -= (indexB - 21);
                    indexB = 21;
                    for (let i = 0; i < x; i++) {
                        indexB -= 2;
                    }
                    block[indexB].style.backgroundColor = 'pink'
                    block[indexB].innerHTML = '1 B';
                    if (indexA == indexB) {
                        block[indexB].innerHTML = '1 B';
                        indexA = 0;
                        a--;
                        document.querySelector('#A > h1').innerHTML = String(1 - a) + ' A';
                    }
                }
                else if (indexB - x * 2 >= 11 && indexB - x * 2 <= 19 && indexB >= 11 && indexB <= 19 && indexB % 2 == 1) {
                    block[indexB].style.backgroundColor = '#0d11dc'
                    block[indexB].innerHTML = '';
                    for (let i = 0; i < x; i++) {
                        indexB -= 2;
                    }
                    block[indexB].style.backgroundColor = 'pink'
                    block[indexB].innerHTML = '1 B';
                    if (indexA == indexB) {
                        block[indexB].innerHTML = '1 B';
                        indexA = 0;
                        a--;
                        document.querySelector('#A > h1').innerHTML = String(1 - a) + ' A';
                    }
                }
                else if (indexB - x * 2 < 11 && indexB >= 11 && indexB <= 19 && indexB % 2 == 1) {
                    block[indexB].style.backgroundColor = '#0d11dc'
                    block[indexB].innerHTML = '';
                    for (let i = 0; indexB != 11; i++) {
                        indexB -= 2;
                        x--;
                    }
                    indexB -= 3;
                    x--;
                    if (x != 0) {
                        indexB = 0;
                        x--;
                    }
                    if (x != 0) {
                        block[indexB].style.backgroundColor = '#0d11dc'
                        block[indexB].innerHTML = '';
                        indexB += x;
                    }
                    block[indexB].style.backgroundColor = 'pink'
                    block[indexB].innerHTML = '1 B';
                    if (indexA == indexB) {
                        block[indexB].innerHTML = '1 B';
                        indexA = 0;
                        a--;
                        document.querySelector('#A > h1').innerHTML = String(1 - a) + ' A';
                    }
                }
                else if (indexB == 8) {
                    block[indexB].style.backgroundColor = '#0d11dc'
                    block[indexB].innerHTML = '';
                    indexB = 0;
                    x--;
                    if (x != 0) {
                        indexB += x;
                    }
                    block[indexB].style.backgroundColor = 'pink'
                    block[indexB].innerHTML = '1 B';
                    if (indexA == indexB) {
                        block[indexB].innerHTML = '1 B';
                        indexA = 0;
                        a--;
                        document.querySelector('#A > h1').innerHTML = String(1 - a) + ' A';
                    }
                }
                else if (indexB + x <= 7 && indexB <= 7) {
                    block[indexB].style.backgroundColor = '#0d11dc'
                    block[indexB].innerHTML = '';
                    indexB += x;
                    block[indexB].style.backgroundColor = 'pink'
                    block[indexB].innerHTML = '1 B';
                    if (indexA == indexB) {
                        block[indexB].innerHTML = '1 B';
                        indexA = 0;
                        a--;
                        document.querySelector('#A > h1').innerHTML = String(1 - a) + ' A';
                    }
                }
                else if (indexB + x > 7 && indexB <= 7) {
                    block[indexB].style.backgroundColor = '#0d11dc'
                    block[indexB].innerHTML = '';
                    x -= (7 - indexB);
                    indexB = 7;
                    for (let i = 0; i < x; i++) {
                        if (i == 0)
                            indexB += 3;
                        else
                            indexB += 2;
                    }
                    block[indexB].style.backgroundColor = 'pink'
                    block[indexB].innerHTML = '1 B';
                    if (indexA == indexB) {
                        block[indexB].innerHTML = '1 B';
                        indexA = 0;
                        a--;
                        document.querySelector('#A > h1').innerHTML = String(1 - a) + ' A';
                    }

                }
                else if (indexB + x * 2 <= 20 && indexB + x * 2 >= 10 && indexB >= 10 && indexB <= 20 && indexB % 2 == 0) {
                    block[indexB].style.backgroundColor = '#0d11dc'
                    block[indexB].innerHTML = '';
                    for (let i = 0; i < x; i++) {
                        indexB += 2;
                    }
                    block[indexB].style.backgroundColor = 'pink'
                    block[indexB].innerHTML = '1 B';
                    if (indexA == indexB) {
                        block[indexB].innerHTML = '1 B';
                        indexA = 0;
                        a--;
                        document.querySelector('#A > h1').innerHTML = String(1 - a) + ' A';
                    }
                }
                else if (indexB + 2 * x == 22) {
                    block[indexB].style.backgroundColor = '#0d11dc'
                    block[indexB].innerHTML = '';
                    token1B++;
                    document.getElementById('middle').innerHTML = 'B WINS';
                    document.getElementById('middle').style.fontSize = '8rem';
                    document.getElementById('middle').style.textAlign = 'center';
                    if (indexA == indexB) {
                        block[indexB].innerHTML = '1 B';
                        indexA = 0;
                        a--;
                        document.querySelector('#A > h1').innerHTML = String(1 - a) + ' A';
                    }
                }
            }
            if (cnt % 2 == 0)
                document.getElementById("Turn").textContent = "A's Turn"
            else
                document.getElementById("Turn").textContent = "B's Turn"
        }
    }
}




