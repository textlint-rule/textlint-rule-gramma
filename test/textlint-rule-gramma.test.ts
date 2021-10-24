import TextLintTester from "textlint-tester";
// a rule for testing
import rule, { Options } from "../src/textlint-rule-gramma";

const tester = new TextLintTester();
const testOptions: Options = {
    api_url: "http://localhost:8081/v2/check"
};
tester.run("textlint-rule-gramma", rule, {
    valid: [
        "This is ok",
        {
            text: "It is testing on local server",
            options: testOptions
        }
    ],
    invalid: [
        {
            text: "Suggestions for this sentences will be printed.",
            output: "Suggestions for these sentences will be printed.",
            errors: [
                {
                    message:
                        "The demonstrative ‘this’ may not agree with the plural noun ‘sentences’. Did you mean “these”?",
                    index: 16
                }
            ]
        },
        {
            text: "It are wrong.\n\nIt are good.",
            output: "It is wrong.\n\nIt is good.",
            errors: [
                {
                    message: "After ‘It’, use the third-person verb form “is”.",
                    line: 1,
                    column: 4
                },
                {
                    message: "After ‘It’, use the third-person verb form “is”.",
                    line: 3,
                    column: 4
                }
            ],
            options: testOptions
        }
    ]
});
