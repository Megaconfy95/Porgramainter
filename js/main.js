var game = new Phaser.Game(800, 600, Phaser.AUTO, 'area', { preload: preload, create: create, update: update });

function preload() {

    game.load.image('sky', 'assets/sky.png');
    game.load.image('ground', 'assets/platform.png');
    game.load.image('star', 'assets/star.png');
    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);

}
var platformns;

function create() {

  game.physics.startSystem(Phaser.Physics.ARCADE);

   game.add.sprite(0, 0, 'sky');

    platformns = game.add.group();

    platformns.enableBody =true;

    var ground =platformns.create(0,game.world.height - 64,'ground');

    ground.scale.setTo(2, 2);

    ground.body.inmovable = true;

    var ledge = platformns.create(400, 400, 'ground');

    ledge.body.inmovable = true;
    ledge = platformns.create(-150, 250, 'ground');
    ledge.body.inmovable = true;


}

function update() {
}
