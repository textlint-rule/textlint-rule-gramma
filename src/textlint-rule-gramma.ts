import { TextlintRuleReporter } from "@textlint/types";
import { StringSource } from "textlint-util-to-string";
import gramma from "gramma";

export type Options = {
    api_url?: string;
    api_key?: string;
    language?: string;
    rules?: { [ruleName: string]: boolean };
    dictionary?: string[];
    markdown?: boolean;
};
const report: TextlintRuleReporter<Options> = (context, options) => {
    const { Syntax, report, RuleError, fixer } = context;
    return {
        async [Syntax.Paragraph](node) {
            const source = new StringSource(node);
            const { matches } = await gramma.check(source.toString(), options);
            matches.forEach((match) => {
                const originalStatIndex = source.originalIndexFromIndex(match.offset);
                const originalEndIndex = source.originalIndexFromIndex(match.offset + match.length);
                const correctLine = originalStatIndex !== undefined && originalEndIndex !== undefined;
                report(
                    node,
                    new RuleError(match.message, {
                        index: originalStatIndex,
                        fix: correctLine
                            ? // FIXME: should be suggest
                              fixer.replaceTextRange([originalStatIndex, originalEndIndex], match.replacements[0].value)
                            : undefined
                    })
                );
            });
        }
    };
};
export default {
    linter: report,
    fixer: report
};
