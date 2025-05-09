import R from "./ramda.js";

const f = function (x) {
    return Math.exp(-x * x / 2);
};

// === Map ===
const i_s = R.range(0, 40);

const x_s = i_s.map((i) => i * 10 / 40 - 5);


const scale = function (i) {
    return i * 10 / 40 - 5;
}



const f_s = x_s.map(f);
console.log(f_s);

const friends = [
    {"name": "Alex", "group": "Music"},
    {"name": "Billie", "group": "Drama"},
    {"name": "Caroł", "group": "Music"},
    {"name": "Dale", "group": "Karate"}
];

const day_of_friend = function (friend) {
    if (friend.group === "Music") {
        return "Sunday";
    }
    return "Saturday";
};

const shout = function (string) {
    return string.toUpperCase();
};

const invites = friends.map(function (friend) {
    return (
        `Hello ${shout(friend.name)},` +
        ` please come to my party on ${day_of_friend(friend)}`
    );
});
console.log(invites);


// === Filter ===

const students = [
    {"student": "Alex", "elective": "Design Psychology"},
    {"student": "Bobby", "elective": "Additive Manufacture"},
    {"student": "Charlie", "elective": "Design Psychology"},
    {"student": "Dale", "elective": "Additive Manufacture"},
    {"student": "Eli", "elective": "Additive Manufacture"},
    {"student": "Frankie", "elective": "Design Psychology"}
];


const is_enroled_on = function (elective) {
    return function (student) {
        return student.elective === elective;
    };
};

const elective_students = students.filter(
    is_enroled_on("Design Psychology")
);


// === Reduce ===

const words = [
    "Hello",
    "its",
    "me",
    "I've",
    "been",
    "wondering",
    "if",
    "after",
    "all",
    "these"
];

let a = 0;
words.forEach(function (word) {
    if (word.length > a) {
        a = word.length;
    }
});


const lyrics = words.reduce(function (a, word) {
    if (a >= word.length) {
        return a;
    }
    return word.length;
}, 0);
console.log(lyrics);

// Running code in exam questions.
// npm install on every repo
// mocha.rc
 