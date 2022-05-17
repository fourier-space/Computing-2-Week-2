import Exam_questions from "../common/Exam_questions_FP.js";
import R from "../common/ramda.js";

const missing_character = Exam_questions.q6.missing_character;
describe("Question 6 - FP", function () {

    const test_two_strings = function (string_1, string_2, character) {
        const result = missing_character(string_1, string_2);
        if (result !== character) {
            throw new Error(
                `For an input of "${string_1}" and "${string_2}", ` +
                `"${character}" should be returned, instead ${result} was.`
            );
        }
    };

    const test_append_character = function (input, character) {
        test_two_strings(input, input + character, character);
    };

    it(
        "Given a string, " +
        "passing that string " +
        "and that string with a single character appended, " +
        "that is not included in the orignal string, " +
        "returns that character",
        function () {
            test_append_character("bean", "s");
        }
    );

    it(
        "Given a string, " +
        "passing that string " +
        "and that string with a single character appended " +
        "that is included in the orignal string, " +
        "returns that character",
        function () {
            test_append_character("chocolate", "a");
            test_append_character("food", "o");
        }
    );

    it(
        "Given a string and a character, " +
        "appending that character to the string and shuffling" +
        "then passing the original and new string to missing_character" +
        "returns that character",
        function () {
            test_two_strings("zombie nation", "obani ztXmnieo", "X");
        }
    );

    const test_returns_undefined = function (string_1, string_2) {
        const result = missing_character(string_1, string_2);
        if (result !== undefined) {
            throw new Error(
                `For inputs of ${string_1} and ${string_2}, ` +
                `${result} was returned instead of undefined.`
            );
        }
    };

    it(
        "Given two strings with lengths that differ by not exactly 1," +
        "undefined is always returned",
        function () {
            test_returns_undefined("hello", "hellonn");
            test_returns_undefined("yes", "no");
            test_returns_undefined("yes", "yessiree");
        }
    );

    it(
        "Given two strings with lengths that differ by exactly 1," +
        "and the first string is longer than the first," +
        "undefined is always returned",
        function () {
            test_returns_undefined("foodo", "food");
        }
    );
});

const even_digits = Exam_questions.q7.even_digits;
describe("Question 7 - FP", function () {
    it(
        "Returns even only digits for three digit numbers",
        function () {
            const result = even_digits(80, 240);
            const expected = [
                80,
                82,
                84,
                86,
                88,
                200,
                202,
                204,
                206,
                208,
                220,
                222,
                224,
                226,
                228,
                240
            ];
            if (!R.equals(result, expected)) {
                throw new Error(
                    "The following digits were returned, " +
                    JSON.stringify(result) +
                    `which does not match the example result.`
                );
            }
        }
    );
});
