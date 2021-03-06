# @textlint-rule/textlint-rule-gramma

[textlint](https://github.com/textlint/textlint) rule for [gramma](https://github.com/caderek/gramma)([LanguageTool](https://languagetool.org/)/[GrammarBot](https://www.grammarbot.io/)/Local API Server).

This rule is frontend of [gramma](https://github.com/caderek/gramma).

## Install

Install with [npm](https://www.npmjs.com/):

    npm install @textlint-rule/textlint-rule-gramma

## Usage

Via `.textlintrc`(Recommended)

```json
{
  "rules": {
    "@textlint-rule/gramma": true
  }
}
```

Via CLI

```
textlint --rule @textlint-rule/gramma README.md
```

## Options

Same to [gramma's options](https://github.com/caderek/gramma#check-method).
It means that send your text to remote server like grammarbot.io or languagetool.org by default.

- `api_url` - url to a non-default API server
- `api_key` - server API key
- `dictionary` - an array of words that should be whitelisted
- `language` - language code to specify the text language
- `rules` - object defining which rules should be disabled

Example, use local server.

```json
{
  "rules": {
    "@textlint-rule/gramma": {
      "api_url": "http://localhost:8081/v2/check"
    }
  }
}
```

:memo: You need to start local API server by following before linting text.

```bash
npm install gramma --global
npx gramma server install
npx gramma servert start
# stop server
# npx gramma servert stop
```


## Changelog

See [Releases page](https://github.com/textlint-rule/textlint-rule-gramma/releases).

## Running tests

    yarn install
    yarn bootstrap
    yarn test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/textlint-rule/textlint-rule-gramma/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT ?? azu
