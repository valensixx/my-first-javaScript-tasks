function swap(){
    var image1 = document.getElementById("i1");
    var image2 = document.getElementById("i2");
    var image = image1.src;
    image1.src = image2.src;
    image2.src = image; 
   }