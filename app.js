const btn = document.querySelector(".sub");
const goal = document.querySelector(".goal");
const nope = document.querySelector(".nope");

btn.addEventListener("click", function(){
    document.getElementById("nope").innerHTML = goal.value
});

nope.addEventListener("click", function(){
    document.getElementById("nope").innerHTML = ""
});


