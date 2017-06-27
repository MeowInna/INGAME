var pjs = new PointJS('2D', 400, 400);
pjs.system.initFullPage(); // for Full Page mode

var log    = pjs.system.log;     // log = console.log;
var game   = pjs.game;           // Game Manager
var point  = pjs.vector.point;   // Constructor for Point
var camera = pjs.camera;         // Camera Manager
var brush  = pjs.brush;          // Brush, used for simple drawing
var OOP    = pjs.OOP;            // Object's manager
var math   = pjs.math;           // More Math-methods
var levels = pjs.levels;         // Levels manager


var touch = pjs.touchControl;
var key   = pjs.keyControl.initKeyControl();
var mouse = pjs.mouseControl.initMouseControl();

var width  = game.getWH().w; 
var height = game.getWH().h; 
// Получим резолюцию экрана
var r = game.getResolution();


pjs.system.setTitle('Cat and Donuts'); 
