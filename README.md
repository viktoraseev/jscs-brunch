## jscs-brunch
Adds JSCS support to
[brunch](http://brunch.io).

## Usage
Install the plugin via npm with `npm install --save-dev jscs-brunch`.

By default, no files is verified. You need to configure what will be linted with `plugins.JSCS.files`.

JSCS configuration may be specified at `plugins.JSCS.config`.

```coffeescript
config =
  plugins:
    JSCS:
      files: /^js/ # validate
      config: # passed to JSCS instance
        preset: "google" # default one
        maximumLineLength: 160
        requireCamelCaseOrUpperCaseIdentifiers: 'ignoreProperties'
        disallowMultipleVarDecl: { allExcept: ['undefined'] }
        validateQuoteMarks:
          mark: "'"
          escape: true
```

`.jscsrc` files are not supported yet.

### Limitations
* Number of errors shown are limited by 1000 symbols. That is far more than enought for mass fixing.
* --fix option is not supported. I guess. Never tried it.

## License

The MIT License (MIT)

Copyright (c) 2015 Viktor Aseev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
