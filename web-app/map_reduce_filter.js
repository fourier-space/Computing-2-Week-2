import R from "./ramda.js";

// === Map ===
const i_s = R.range(0, 40);

const scale = function (i) {
    return i * 4 / 20 - 4;
};

// const x_s = i_s.map(scale);

const f = function (x) {
    return Math.exp(-x * x / 2);
};

const compose = function (outer, inner) {
    return function (value) {
        return outer(inner(value));
    };
};

// const f_from_i = function (i) {
//     return compose(f, scale)(i);
// };

const f_from_i = compose(f, scale);

// const f_s = x_s.map(f);

const f_s = i_s.map(compose(f, scale));


const friends = [
    {"name": "Alex", "group": "Music"},
    {"name": "Billie", "group": "Drama"},
    {"name": "Caroł", "group": "Music"},
    {"name": "Dale", "group": "Karate"}
];

const day_of_party_for_group = function (group) {
    if (group === "Music") { // Exceptional case. Return early.
        return "Saturday";
    }
    return "Sunday"; // Default path (Happy Path)
};

const create_invitation = function (friend) {
    const day = day_of_party_for_group(friend.group);
    return `Hello ${friend.name}, please come to my party on ${day}! xxx --FP`;
};

// const invitiations = friends.map(create_invitation);

// const invitiations = R.map(create_invitation, friends);

const create_invitations = R.map(create_invitation);

const invitiations = create_invitations(friends);





// === Filter ===

const students = [
    {"student": "Alex", "elective": "Design Psychology"},
    {"student": "Bobby", "elective": "Additive Manufacture"},
    {"student": "Charlie", "elective": "Design Psychology"},
    {"student": "Dale", "elective": "Additive Manufacture"},
    {"student": "Eli", "elective": "Additive Manufacture"},
    {"student": "Frankie", "elective": "Design Psychology"}
];

// const enrolled_on_d4am = function (student) {
//     if (student.elective === "Additive Manufacture") {
//         return true;
//     } else {
//         return false;
//     }
// };

const enrolled_on_d4am = function (student) {
    return student.elective === "Additive Manufacture";
};

const enrolled_on_subject = function (subject) {
    return function (student) {
        return student.elective === subject;
    };
};



const d4am_students = students.filter(
    enrolled_on_subject("Additive Manufacture")
);



// === Reduce ===

const single_digits = R.range(1, 10);

// const plus = function (a, x) {
//     return a + x;
// };

const plus = (a, x) => a + x;

// const suduku_secret = single_digits.reduce(plus);

const suduku_secret = single_digits.reduce((a, x) => a + x);

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

const concat = function (a, string) {
    return a + string;
};

const add_space = function (word) {
    return `${word} `;
};

const add_full_stop = function (string) {
    return `${string}.`;
};

// const lyrics = add_full_stop(words.map(add_space).reduce(concat).trim());

// const lyrics = R.compose(
//     add_full_stop,
//     R.trim,
//     R.reduce(concat, ""),
//     R.map(add_space)
// )(words);


const lyrics_from_words = R.pipe(
    R.map(add_space),
    R.reduce(concat, ""),
    R.trim,
    add_full_stop
);

const lyrics = lyrics_from_words(words);

debugger;

// add_full_stop(words.map(add_space).reduce(concat).trim());

debugger;