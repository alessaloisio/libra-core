# {[{name}]}.JS

{[{description}]}

# Features

- **ES6/ESNext** - Write _ES6_ code and _Babel_ will transpile it to ES5 for backwards compatibility
- **Test** - _Mocha_
- **Lint** - Preconfigured _ESlint_ with _Airbnb_ config
- **CI** - _TravisCI_ configuration setup
- **Minify** - Built code will be minified for performance

# Commands

- `npm run clean` - Remove browser and node files builded
- `npm run pretest` - Run ESlint and build.
- `npm run build` - Babel will transpile ES6 => ES5 for browser/node and minify the code.
- `npm test` - Test written examples on pure JS for better understanding module usage.
- `npm run lint` - Run ESlint with airbnb-config
- `npm run lint:fix` - Run ESlint with airbnb-config and try to fix
- `npm run minify` - Minify {[{name}]}.js
- `npm run watch:browser` - Run build on file change

# Installation

Just clone this repo and remove `.git` folder.

# License

MIT © {[{author}]}
