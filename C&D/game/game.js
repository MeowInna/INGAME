
game.newLoopFromConstructor('game', function () {

 var audio = pjs.audio.newAudio('audio.mp3');
  audio.play();

  var speed = 2.5*r;
  dx = 0;
  dy = 0;


  var score = 0;

  
  var fon = game.newImageObject({
    x : 0, y : 0,
    file : 'fon1.jpg',
    h:height,
  });


 var marie = game.newAnimationObject({
    animation: pjs.tiles.newImage('marie.png').getAnimation(0,250,345,248,9), 
    x : 5, y : 215*r,
    h: 200, w:255,
    delay : 4,
    visible: true
  });

  var marie2 = game.newAnimationObject({
    animation: pjs.tiles.newImage('marie.png').getAnimation(0,0,345,248,9), 
    x : 5, y : 215*r,
    h: 200, w:255,
    delay : 4,
    visible: true
  });

  var marie3 = game.newAnimationObject({
    animation: pjs.tiles.newImage('marie.png').getAnimation(0,0,345,248,1), 
    x : 5, y : 215*r,
    h: 200, w:255,
    delay : 4,
    visible: true
  });


  var donuts = [];

  // Создать таймер, который будет добавлять donuts
  var timer = OOP.newTimer(2000, function () {
    donuts.push(game.newImageObject({
      x : math.random(0, width - 50*r), // 50*r - ширина объекта
      y : -math.random(50*r, 500*r), // убрать минус, так как он уже есть
      w : 50*r, h : 50*r,
      file : 'don1.png'
    }));
    donuts.push(game.newImageObject({
      x : math.random(0, width - 50*r), // 50*r - ширина объекта
      y : -math.random(50*r, 500*r), // убрать минус, так как он уже есть
      w : 50*r, h : 50*r,
      file : 'don2.png'
    }));
  });

  this.update = function () {

    // Задействовать фактор дельта-тайм
    var dt = game.getDT(7); // 10 - это делитель дeльты для удобного округления

    game.clear(); 

    fon.draw(); 


marie.move(point(speed*dx, speed*dy));
marie2.move(point(speed*dx, speed*dy));
marie3.move(point(speed*dx, speed*dy));



    if (key.isDown('RIGHT')) {
     (marie.x+marie.w < width)
      // marie.x += speed * dt;
     dx=1;
     dy=0;
       marie.draw(); 
    } 
    
     else if (key.isDown('LEFT')) {
       (marie2.x >= 0)
        // marie2.x -= speed * dt;
        dx=-1;
        dy=0;
         marie2.draw();
       } 

     else {
      dx=0;
      dy=0;
       marie3.draw();
     }


    // Алгоритм добавления donuts по таймеру новый donut каждую секунду

    // Для того, чтобы donuts добавлялись каждую секунду
    timer.restart();

    OOP.forArr(donuts, function (el, i) { // i - идентификатор
      el.draw(); 

      el.move(point(0, speed*dt)); // Двигаем вниз

      // Проверка на столкновение donut с marie

      if (el.isIntersect(marie2)) {
        donuts.splice(i, 1); // i - идентификатор, 1 - количество
        score++; // Увеличить счет
      }

    });
   
    brush.drawText({
      x : 10, y : 10,
      text : 'Score: ' + score,
      size : 22 * r,
      color : '#745179',
      strokeColor : 'black',
      strokeWidth : 2,
      style : 'bold',
      font: 'Broadway'
    });

  };

  this.entry = function () { // [optional]
    // При входе в игру очищать donuts и удалять счет
    OOP.clearArr(donuts);
    score = 0;
  };

});

game.start();