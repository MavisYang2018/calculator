
var display = '';


// number button

function btn_num_1() {
    var num = document.getElementById('btn_num_1');
    display += num.value;
    document.getElementById('display').value = display;

}


function btn_num_2() {
    var num = document.getElementById('btn_num_2');
    display += num.value;
    document.getElementById('display').value = display;
    
}

function btn_num_3() {
    var num = document.getElementById('btn_num_3');
    display += num.value;
    document.getElementById('display').value = display;
}

function btn_num_4() {
    var num = document.getElementById('btn_num_4');
    display += num.value;
    document.getElementById('display').value = display;
}

function btn_num_5() {
    var num = document.getElementById('btn_num_5');
    display += num.value;
    document.getElementById('display').value = display;
}

function btn_num_6() {
    var num = document.getElementById('btn_num_6');
    display += num.value;
    document.getElementById('display').value = display;
}

function btn_num_7() {
    var num = document.getElementById('btn_num_7');
    display += num.value;
    document.getElementById('display').value = display;
}

function btn_num_8() {
    var num = document.getElementById('btn_num_8');
    display += num.value;
    document.getElementById('display').value = display;
}

function btn_num_9() {
    var num = document.getElementById('btn_num_9');
    display += num.value;
    document.getElementById('display').value = display;
}

function btn_num_0() {
    var num = document.getElementById('btn_num_0');
    display += num.value;
    document.getElementById('display').value = display;
}


// operator
// function btn_opra_1() {
//     var now_display = document.getElementById('display');
//     now_display.value = '0';
//     now_display.value = '0';
//     console.log(now_display.value);
//     // var ac = document.getElementById('btn_opra_1');
//     // ac.value += "";
//     // console.log(display);
// }


function btn_opra_2() {
    var operator = document.getElementById('btn_opra_2');
    display += operator.value;
    document.getElementById('display').value = display;
}

function btn_opra_3() {
    var operator = document.getElementById('btn_opra_3');
    display += operator.value;
    document.getElementById('display').value = display;
}

function btn_opra_4() {
    var operator = document.getElementById('btn_opra_4');
    display += operator.value;
    document.getElementById('display').value = display;
}

function btn_opra_5() {
    var operator = document.getElementById('btn_opra_5');
    display += operator.value;
    document.getElementById('display').value = display;
}

function btn_opra_6() {
    var operator = document.getElementById('btn_opra_6');
    display += operator.value;
    document.getElementById('display').value = display;
}

function btn_opra_7() {
    var operator = document.getElementById('btn_opra_7');
    display += operator.value;
    document.getElementById('display').value = display;
}

function btn_opra_8() {
    var operator = document.getElementById('btn_opra_8');
    display += operator.value;
    document.getElementById('display').value = display;
}

// function btn_opra_9() {
//     var operator = document.getElementById('btn_opra_9');
//     display += operator.value;
//     document.getElementById('display').value = display;
// }



function btn_opra_1() {
    var now_display = document.getElementById('display');
    now_display.value = "0";
    // var display = now_display.value;
    // display.innerHTML = "0";
    
    
    // var ac = document.getElementById('btn_opra_1');
    // ac.value += "";
    // console.log(display);
}



function result(input) {
    return new Function('return' + input)();
}

// console.log(result('1+2'));