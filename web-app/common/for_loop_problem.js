import R from "./ramda.js";

const buttons = [];
for (let i = 0; i < 10; i += 1) {
    // We're not in the browser, so I'm using this empty object instead.
    const new_button = {};

    new_button.onclick = function () {
        console.log(`This is button ${i}`);
    };

    // `push` here appends to an array.
    // Nothing to do with, pushing or clicking buttons themselves!
    buttons.push(new_button);
}

// Let's 'click' the button. What do you expect to happen.
buttons[4].onclick();

//===============//

// We can convert a for loop to a forEach loop.

["rock", "paper"]

const buttons_forEach = [];
R.range(0, 10).forEach(function (i) {
    // We're not in the browser, so I'm using this empty object instead.
    const new_button = {};

    new_button.onclick = function () {
        console.log(`This is button ${i}`);
    };

    // `push` here appends to an array.
    // Nothing to do with, pushing or clicking buttons themselves!
    buttons_forEach.push(new_button);
});

// Let's 'click' the button. What do you expect to happen.
buttons_forEach[4].onclick();

//===============//


const make_button = function (string) {
    const new_button = {};

    new_button.onclick = function () {
        console.log(`This is really button ${string} (Made using map)`);
    };

    return new_button;
};

const data = ["rock", "paper", "etc"];
// const data = R.range(1,11);

const array_method_buttons_1 = data.map(make_button);

const make_buttons_from_array = R.map(make_button);

const array_method_buttons_2 = make_buttons_from_array(data);

// However, since we are returning an array of things,
// This is a good use case for an array method.
// Let's try the same with the `map` method.
const array_method_buttons = R.range(0, 10).map(function (i) {
    const new_button = {};

    new_button.onclick = function () {
        console.log(`This is really button ${i} (Made using map)`);
    };

    return new_button;
});

// Now let's 'click' this button and see what happens.
array_method_buttons[4].onclick();
