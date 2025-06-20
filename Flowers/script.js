document.addEventListener("mousemove", function(a) {
    let body = document.querySelector("body");
    let flower = document.createElement("div");
    let x = a.offsetX;
    let y = a.offsetY;

    flower.style.left = x + "px";
    flower.style.top = y + "px";

    let size = Math.random() * 80;
    flower.style.width = 50 + size + "px";
    flower.style.height = 50 + size + "px";

    let rotation = Math.random() * 360;
    flower.style.transform = 'rotate($(rotation) deg)';

    body.appendChild(flower);

    setTimeout(function() {
        flower.remove();
    }, 9000)

});

window.onload = function() {
    setInterval(createFlower, 500); // Creates a flower every 500mins
};

