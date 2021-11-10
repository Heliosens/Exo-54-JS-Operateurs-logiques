let p1 = document.getElementById("result1");
let p2 = document.getElementById("result2");
let p3 = document.getElementById("result3");
let p4 = document.getElementById("result4");
let p5 = document.getElementById("result5");

let x = 1;
let y = 4;
let z = -1;

if(x < 2){
    p1.innerHTML = "x est plus petit que 2"
}

if(y > 3){
    p2.innerHTML = "y est plus grand que 3"
}

if(z <= 0){
    p3.innerHTML = "z est inférieur ou égal à 0"
}

if(x < 2 && y > 3 && z <= 0){
    p4.innerHTML = "x est plus petit que 2 ET y est plus grand que 3 ET z est inférieur ou égal à 0"
}

if(x < 2 && y > 3 || z === -1){
    p5.innerHTML = "x est plus petit que 2 ET y est plus grand que 3 OU z est inférieur ou égal à 0"
}

