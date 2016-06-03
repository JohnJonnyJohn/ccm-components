/**
 * Created by loco on 03.06.16.
 */

ccm.component({
    name: 'calculator',
    config: {
        style: [ccm.load, 'stylesheet.css'],
    },

    Instance: function () {

        var self = this;

        this.render = function (callback) {

            var element = ccm.helper.element(self);

            element.html(
                '<div class="calc">' +
                    '<textarea style="resize:none" readonly="" rows="1" id="d_result" cols="20">' +
                    '</textarea>' +
                    '<br>' +
                    '<div class="b">' +
                        '<button class="remove" id="b_c">C</button>' +
                        '<br>' +
                        '<button class="num" id="b_7">7</button>' +
                        '<button class="num" id="b_8">8</button>' +
                        '<button class="num" id="b_9">9</button>' +
                        '<button class="op" id="b_div">/</button>' +
                        '<br>' +
                        '<button class="num" id="b_4">4</button>' +
                        '<button class="num" id="b_5">5</button>' +
                        '<button class="num" id="b_6">6</button>' +
                        '<button class="op" id="b_mul">*</button>' +
                        '<br>' +
                        '<button class="num" id="b_1">1</button>' +
                        '<button class="num" id="b_2">2</button>' +
                        '<button class="num" id="b_3">3</button>' +
                        '<button class="op" id="b_sub">-</button>' +
                        '<br>' +
                        '<button class="num" id="b_0">0</button>' +
                        '<button class="num" id="b_comma">.</button>' +
                        '<button class="op" id="b_equals">=</button>' +
                        '<button class="op" id="b_add">+</button>' +
                        '<br>' +
                    '</div>' +
                '</div>'
            );

            var display = element.find('textarea#d_result');

            var button_remove = element.find('button.remove');

            var button_0 = element.find('button.num#b_0');
            var button_1 = element.find('button.num#b_1');
            var button_2 = element.find('button.num#b_2');
            var button_3 = element.find('button.num#b_3');
            var button_4 = element.find('button.num#b_4');
            var button_5 = element.find('button.num#b_5');
            var button_6 = element.find('button.num#b_6');
            var button_7 = element.find('button.num#b_7');
            var button_8 = element.find('button.num#b_8');
            var button_9 = element.find('button.num#b_9');

            var button_add = element.find('button.op#b_add');
            var button_sub = element.find('button.op#b_sub');
            var button_mul = element.find('button.op#b_mul');
            var button_div = element.find('button.op#b_div');

            var button_comma = element.find('button.op#b_comma');
            var button_equals = element.find('button.op#b_equals');


            var lastOp;
            var lastInput;
            var behindComma;

            button_remove.click(function() {
                display.html('');
                lastOp = null;
                lastInput = 0;
            });

            //############################################

            button_0.click(function() {
                display.html(display.val() * 10);
            });

            button_1.click(function() {
                display.html(display.val() * 10 + 1);
            });

            button_2.click(function() {
                display.html(display.val() * 10 + 2);
            });

            button_3.click(function() {
                display.html(display.val() * 10 + 3);
            });

            button_4.click(function() {
                display.html(display.val() * 10 + 4);
            });

            button_5.click(function() {
                display.html(display.val() * 10 + 5);
            });

            button_6.click(function() {
                display.html(display.val() * 10 + 6);
            });

            button_7.click(function() {
                display.html(display.val() * 10 + 7);
            });

            button_8.click(function() {
                display.html(display.val() * 10 + 8);
            });

            button_9.click(function() {
                display.html(display.val() * 10 + 9);
            });

            //############################################

            button_add.click(function() {
                lastInput = display.val();
                display.html(0);
                lastOp = "+";
            });

            button_sub.click(function() {
                lastInput = display.val();
                display.html(0);
                lastOp = "-";
            });

            button_mul.click(function() {
                lastInput = display.val();
                display.html(0);
                lastOp = "*";
            });

            button_div.click(function() {
                lastInput = display.val();
                display.html(0);
                lastOp = "/";
            });

            //############################################

            button_equals.click(function () {
                var result;

                if (lastOp == "+"){
                    result = parseInt(lastInput) + parseInt(display.val());
                }
                if (lastOp == "-"){
                    result = parseInt(lastInput) - parseInt(display.val());
                }
                if (lastOp == "*"){
                    result = parseInt(lastInput) * parseInt(display.val());
                }
                if (lastOp == "/"){
                    result = parseInt(lastInput) / parseInt(display.val());
                }

                display.html(result);
            })

            if ( callback ) callback();
        }
    }
} );