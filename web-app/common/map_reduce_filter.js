import R from "./ramda.js";

// === Map ===
const i_s = R.range(0, 40);

debugger;

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

// === Reduce ===

const j_s = i_s.filter((i) => i > 0 && i <= 10);

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
