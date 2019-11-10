# LIBRA-CORE

This repo regroup all boilerplate for [libra-cli](https://github.com/alessaloisio/libra-cli/)

## How to create a new library

1. Create your boilerplate environment
2. Create a libra.json file on the root of your new boilerplate
    > "YOUR_KEY": "QUESTION"
    ```json
    {
      "name": "Library name : ",
      "description": "Library description : ",
      "repoUrl": "Library repo url : ",
      "author": "Library author : "
    }
    ```
3. You can right now edit all files with your dynamic keys  
    > replace static values with {[{YOUR_KEY}]}

    ### bower.json example : 
    ```json
    {
      "name": "{[{name}]}",
      "main": "{[{name}]}.js",
      "homepage": "{[{repoUrl}]}",
      "authors": ["{[{author}]}"],
      "description": "{[{description}]}",
      "license": "MIT",
      "ignore": [
        "**/.*",
        "index.js",
        "build*.js",
        "package.json",
        "node_modules",
        "bower_components",
        "test"
      ]
    }
    ```
