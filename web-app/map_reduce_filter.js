import R from "./ramda.js";

// === Map ===
const i_s = R.range(0, 40);

const scale = function (i) {
    return i * 4 / 20 - 4;
};

const x_s = i_s.map(scale);

const f = function (x) {
    return Math.exp(-x * x / 2);
};

const f_s = x_s.map(f);


const friends = [
    {"name": "Alex", "group": "Music"},
    {"name": "Billie", "group": "Drama"},
    {"name": "Caroł", "group": "Music"},
    {"name": "Dale", "group": "Karate"}
];


// === Filter ===

const students = [
    {"student": "Alex", "elective": "Design Psychology"},
    {"student": "Bobby", "elective": "Additive Manufacture"},
    {"student": "Charlie", "elective": "Design Psychology"},
    {"student": "Dale", "elective": "Additive Manufacture"},
    {"student": "Eli", "elective": "Additive Manufacture"},
    {"student": "Frankie", "elective": "Design Psychology"}
];

const enrolled_on_d4am = function (student) {
    return student.elective === "Additive Manufacture";
};

// const enrolled_on_d4am = function (student) {
//     if (student.elective === "Additive Manufacture") {
//         return true;
//     } else {
//         return false;
//     }
// };

const d4am_students = students.filter(enrolled_on_d4am);

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
    "these",
    "years",
    "you'd",
    "like",
    "to",
    "meet"
];

