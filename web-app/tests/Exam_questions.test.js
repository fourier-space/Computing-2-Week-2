import Exam_questions from "../Exam_questions.js";
import R from "../ramda.js";

const shortest_word = Exam_questions.q1.shortest_word;
describe("Question 1", function () {
    it("A list of words returns the shortest word if unique", function () {
        const input = ["hello", "cat", "ok", "12345"];
        const result = shortest_word(input);
        const expected = "ok";
        if (result !== expected) {
            throw new Error(
                `For an input of ${input}, ${result} was returned,` +
                `when ${expected} was expected`
            );
        }
    });

    it(
        "A list of words returns the first listed shortest word if multiple",
        function () {
            const input = ["Zombies", "not", "12345", "good", "or", "fine"];
            const result = shortest_word(input);
            const expected = "or";
            if (result !== expected) {
                throw new Error(
                    `For an input of ${input}, ${result} was returned,` +
                    `when ${expected} was expected`
                );
            }
        }
    );

    it("The empty list retuns undefined", function () {
        const input = [];
        const result = shortest_word(input);
        const expected = undefined;
        if (result !== expected) {
            throw new Error(
                `For an input of [], ${result} was returned,` +
                `when undefined was expected`
            );
        }
    });
});

const sum_of_numbers = Exam_questions.q2.sum_of_numbers;
describe("Question 2", function () {
    it(
        "A list of only numbers returns its sum",
        function () {
            const input = [1, 2, 3, 4];
            const result = sum_of_numbers(input);
            const expected = 10;
            if (result !== expected) {
                throw new Error(
                    `For an input of ${input}, ${result} was returned,` +
                    `when ${expected} was expected`
                );
            }
        }
    );

    it(
        "A mixed list returns the sum of its numeric members",
        function () {
            const input = ["hello", "cat", 2, true, 17, undefined];
            const result = sum_of_numbers(input);
            const expected = 19;
            if (result !== expected) {
                throw new Error(
                    `For an input of ${input}, ${result} was returned,` +
                    `when ${expected} was expected`
                );
            }
        }
    );

    it(
        "A list without any numbers returns zero",
        function () {
            const input = ["stop!", false, {}, () => 7];
            const result = sum_of_numbers(input);
            const expected = 0;
            if (result !== expected) {
                throw new Error(
                    `For an input of ${input}, ${result} was returned,` +
                    `when ${expected} was expected`
                );
            }
        }
    );

    it(
        "A list without any numbers, but with NaNs, returns zero",
        function () {
            const input = ["stop!", NaN, {}, () => 7];
            const result = sum_of_numbers(input);
            const expected = 0;
            if (result !== expected) {
                throw new Error(
                    `For an input of ${input}, ${result} was returned,` +
                    `when ${expected} was expected`
                );
            }
        }
    );
});

const longest_palindrome = Exam_questions.q3.longest_palindrome;
describe("Question 3", function () {
    it(
        "Given a list with a unique longest palindrome, that is returned",
        function () {
            const input = ["cat", "hello", "nun"];
            const result = longest_palindrome(input);
            const expected = "nun";
            if (result !== expected) {
                throw new Error(
                    `For an input of ${input}, ${result} was returned,` +
                    `when ${expected} was expected`
                );
            }
        }
    );

    it(
        "Given a list with a multiple longest palindromes, " +
        "the first is returned",
        function () {
            const input = ["soup", "gig", "noon", "yes", "toot"];
            const result = longest_palindrome(input);
            const expected = "noon";
            if (result !== expected) {
                throw new Error(
                    `For an input of ${input}, ${result} was returned,` +
                    `when ${expected} was expected`
                );
            }
        }
    );

    it(
        "Spaces are ignored",
        function () {
            const input = ["cat", "hello", "nun", "never odd or even"];
            const result = longest_palindrome(input);
            const expected = "never odd or even";
            if (result !== expected) {
                throw new Error(
                    `For an input of ${input}, ${result} was returned,` +
                    `when ${expected} was expected`
                );
            }
        }
    );

    it(
        "Punctuation is not ignored",
        function () {
            const inputs = [
                ["cat", "hello", "nun", "never.odd.or.even"],
                ["{{}}", "{}}{"]
            ];
            const results = inputs.map(longest_palindrome);
            const expecteds = ["nun", "{}}{"];
            results.forEach(function (result, i) {
                if (result !== expecteds[i]) {
                    throw new Error(
                        `For an input of ${inputs[i]},${result} was returned,` +
                        `when ${expecteds[i]} was expected`
                    );
                }
            });
        }
    );

    it(
        "An empty list returns undefined",
        function () {
            const input = [];
            const result = longest_palindrome(input);
            const expected = undefined;
            if (result !== expected) {
                throw new Error(
                    `For an input of [], ${result} was returned,` +
                    `when undefined was expected`
                );
            }
        }
    );
});


const perfect_squares = Exam_questions.q4.perfect_squares;
describe("Question 4", function () {
    it(
        "A finite range, " +
        "containing perfect squares " +
        "returns those squares",
        function () {
            const a = 2;
            const b = 16;
            const result = perfect_squares(a, b);
            const expected = [4, 9, 16];
            if (!R.equals(result, expected)) {
                throw new Error(
                    `For an input of a=${a}, b=${b},` +
                    `${JSON.stringify(result)} was returned,` +
                    `when ${JSON.stringify(expected)} was expected`
                );
            }
        }
    );

    it(
        "An empty range (starting value greater than end value), " +
        "returns the empty array",
        function () {
            const a = 16;
            const b = 2;
            const result = perfect_squares(a, b);
            const expected = [];
            if (!R.equals(result, expected)) {
                throw new Error(
                    `For an input of a=${a}, b=${b},` +
                    `${JSON.stringify(result)} was returned,` +
                    `when [] was expected`
                );
            }
        }
    );

    it(
        "A single number range, " +
        "that is a square number " +
        "returns an array containing that number",
        function () {
            const a = 25;
            const result = perfect_squares(a, a);
            const expected = [25];
            if (!R.equals(result, expected)) {
                throw new Error(
                    `For an input of a = b = ${a},` +
                    `${JSON.stringify(result)} was returned,` +
                    `when ${JSON.stringify(expected)} was expected`
                );
            }
        }
    );

    it(
        "A single number range, " +
        "that is not a square number " +
        "returns an the empty array",
        function () {
            const a = 24;
            const result = perfect_squares(a, a);
            const expected = [];
            if (!R.equals(result, expected)) {
                throw new Error(
                    `For an input of a = b = ${a},` +
                    `${JSON.stringify(result)} was returned,` +
                    `when [] was expected`
                );
            }
        }
    );
});

const power_object = Exam_questions.q5.power_object;
describe("Question 5", function () {
    it(
        "The numbers property of power_object is the numbers parameter",
        function () {
            const numbers = [1, 3, 5, 6];
            const exponent = 2;
            const result = power_object(numbers, exponent).numbers;
            if (!R.equals(result, numbers)) {
                throw new Error(
                    `For an input of ${JSON.stringify(numbers)} and ` +
                    `${exponent}, ${JSON.stringify(result)} was returned,` +
                    `which is different.`
                );
            }
        }
    );

    it(
        "The powers property contains exponentiated elements of numbers.",
        function () {
            const numbers = [1, 3, 5, 6];
            const exponent = 3;
            const result = power_object(numbers, exponent);
            const expected = [1, 27, 125, 216];
            if (!R.equals(result.powers, expected)) {
                throw new Error(
                    `For an input of ${numbers} and ${exponent}` +
                    `${JSON.stringify(result)} was returned,` +
                    `when ${expected} was expected for the powers property.`
                );
            }
        }
    );
});

const missing_character = Exam_questions.q6.missing_character;
describe("Question 6", function () {
    it(
        "Given a string, " +
        "passing that string " +
        "and that string with a single character appended, " +
        "that is not included in the orignal string, " +
        "returns that character",
        function () {
            throw new Error("Implement this test yourself.");
        }
    );

    it(
        "Given a string, " +
        "passing that string " +
        "and that string with a single character appended " +
        "that is included in the orignal string, " +
        "returns that character",
        function () {
            throw new Error("Implement this test yourself.");
        }
    );

    it(
        "Given a string and a character, " +
        "appending that character to the string and shuffling" +
        "then passing the original and new string to missing_character",
        "returns that character",
        function () {
            throw new Error("Implement this test yourself.");
        }
    );

    it(
        "Given two strings with lengths that differ by not exactly 1," +
        "undefined is always returned",
        function () {
            throw new Error("Implement this test yourself.");
        }
    );
});

const even_digits = Exam_questions.q7.even_digits;
describe("Question 7", function () {
    it(
        "Define and implement your own tests for this question",
        function () {
            throw new Error(
                "Define and implement your own tests for this question"
            );
        }
    );
});
