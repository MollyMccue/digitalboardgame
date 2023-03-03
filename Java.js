let board = [
    "############    ",
    "           #    ",
    "           #    ",
    "      ###### ###",

]

// To choose Character with VEX Library
function CharacterChoose() {
    vex.dialog.open({
        message: 'Which character do you want to play?',
        input: [
            '<label for="Frog1"><img src="images/Frog1.png" class="imagepadding" /></label>',
            '<img src="images/Frog1.png" class="imagepadding" />',
            '<img src="images/Frog2.png" class="imagepadding" />',
            '<img src="images/Frog3.png" class="imagepadding" />',
            '<img src="images/Frog4.png" class="imagepadding" />'
        ].join(''),
        buttons: [
            $.extend({}, vex.dialog.buttons.NO, {
                text: 'Frog4',
                click: function () {
                    this.value = 'Frog4';
                    this.close();
                }
            }),
            $.extend({}, vex.dialog.buttons.NO, {
                text: 'Frog3',
                click: function () {
                    this.value = 'Frog3';
                    this.close();
                }
            }),
            $.extend({}, vex.dialog.buttons.NO, {
                text: 'Frog2',
                click: function () {
                    this.value = 'Frog2';
                    this.close();
                }
            }),
            $.extend({}, vex.dialog.buttons.NO, {
                text: 'Frog1',
                click: function () {
                    this.value = 'Frog1';
                    this.close();
                }
            }),
            $.extend({}, vex.dialog.buttons.NO, {
                text: 'Frog1',
                click: function () {
                    this.value = 'Frog1';
                    this.close();
                }
            })
        ],
        callback: function (value) {
            // Frog1','Frog1','Frog3','Frog2','Frog4
            switch (value) {
                case "Frog1":
                    console.log('You choose Frog1');
                    break;
                case "Frog1":
                    console.log('You choose Frog1');
                    break;
                case "Frog3":
                    console.log('you choose Frog3');
                    break;
                case "Frog2":
                    console.log('You Choose Frog2');
                    break;
                case "Frog4":
                    console.log('You Choose Frog4');
                    break;
                default:
                case "Frog1":
                    console.log('You choose Frog1');
                    break;
            }
        }
    })
}

class Player {
    constructor(x, y, speed, value) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.sprite = 'images/' + value + '.png';

    }
}