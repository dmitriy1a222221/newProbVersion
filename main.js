
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var img = new Image();
img.src = "plan1.png";
img.onload = function imageOnLoad() {

    context.drawImage(img, 0, 0);
    console.log(context.getImageData(0,0, 100, 100));
    var imageData = context.getImageData(0,0, 100, 100);
    var red = 150,
        green = 255,
        blue = 40;
    for(var i = 0; i < imageData.data.length; i +=4){
        if(imageData.data[i] == 0 && imageData.data[i + 1] == 0 && imageData.data[i + 2] == 0) {
            imageData.data[i] = red;
            imageData.data[i + 1] = green;
            imageData.data[i + 2] = blue;
        }

    }
    context.putImageData(imageData, img.width + 10, 0);
}
