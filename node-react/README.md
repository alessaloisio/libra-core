# Node.JS + React
***
> A simple react/node app

* * *

#### Toolchain / Dev Env

The project is divided in two distinct parts: back-end and front-end. We prepared a starter with a premade dev environment that can be used again for other following projects. 

##### Environment

The project is provided with a `docker-compose.yml`  and its documentation in markdown: [`docker-readme.md`](./docker-readme.md).
The whole project's code will be written in `src`.  The compiling tools are configurated to push the compilated files in the `bin` folder.

> ⚠️ **WARNING:** Never **ever** put your modifications to the project in the bin's files ! He will be replaced by a new bin folder at your next compilation!

##### Back-end

Back-end part will be compiled with [BabelJS](https://babeljs.io). The back-end's code is located in  `src/server`.

We prepared for you a little snippet of functionnal code that configure your server **express**, an API route : `GET /hello` and the *middleware* **static** to display de client's files.

You are free to use this snippet or rewrite it. 
 
###### Compilation

There is two compilation's options :

- `npm run build:server` (compile your code)
- `npm run work:server` (compile then observe your files and recompile if you make any modifications)
> ☝️ **NOTE :** Do not forget to run your docker-compose before building the back-end part.

##### Front-end

For the front-end part your code will be compiled/packaged with  [Webpack](https://webpack.js.org/). The code is written in  `src/client`.

> ☝️ **NOTE :** Webpack is a powerfull tool that can be complex to learn. We suggest you to take some time to learn this tool during your "pâturages" and maybe provide your collegues a workshop about it.

Like the back-end part, we prepared a little snippet of code displaying a React component with the text "*Hello, World*".
 
###### Compilation

To compile the front-end code there is two options:

- `npm run build:client` (compile your code)
- `npm run work:client` (compile then observe your files to recompile them in case of any modifications)

##### Prettier & ESLint

The project is configured to use  [Prettier](https://prettier.io) & [ESLint](https://eslint.org).

###### Compilation

To check your files with ESLint and Prettier you can also run this command:  `npm run lint`.

###### Hooks git

The project is also configured with a *hook* de **precommit** for git: when you will try to commit your files, ESLint and Prettier will be executed and, in case of error, the commit will be canceled to let you correct your mistakes. This way you will have the certitude of commiting files exempt of potential problems. 

* * *

Have fun and good work.

