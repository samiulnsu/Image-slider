
    
    var images = ['nsu1.jpg', 'nsu2.jpg', 'nsu3.jpg', 'nsu4.jpg', 'nsu5.jpg'];

    var x = 0;

    var imgs = document.getElementById('img');

    setInterval(slider, 3000);


    function slider() {

      if (x < images.length) {
        x = x + 1;
      } else {
        x = 1;
      }


      imgs.innerHTML = "<img src=" + images[x - 1] + ">";


    }

