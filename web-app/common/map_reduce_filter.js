import R from "./ramda.js";

// === Map ===
const i_s = R.range(0, 40);

const x_s = i_s.map(function (i) {
    return (i - 20) / 5;
});

const f = function (x) {
    return Math.exp(-x * x / 2);
};

const f_s = x_s.map(f);

console.log(f_s);

const friends = [
    {"name": "Alex", "group": "Music"},
    {"name": "Billie", "group": "Drama"},
    {"name": "Caroł", "group": "Music"},
    {"name": "Dale", "group": "Karate"}
];

const invites = friends.map(function (friend) {
    let day;
    if (friend.group === "Music") {
        day = "Saturday";
    } else {
        day = "Sunday";
    }
    return `Hello ${friend.name}, please come on ${day}`;
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

const des_psych_students = students.filter(function (student) {
    return student.elective === "Design Psychology";
}).map(function (student) {
    return student.student;
});

console.log(des_psych_students);

debugger;

// === Reduce ===

const j_s = i_s.filter((i) => i > 0 && i <= 10);

const sum = j_s.reduce(function (a, x) {
    return a + x;
});

console.log(sum);

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

const adele = words.map((word) => word + " ").reduce(function (a, x) {
    return a + x;
});

console.log(adele);
