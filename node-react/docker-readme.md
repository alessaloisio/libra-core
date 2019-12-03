# DEV env: docker-compose

This is a generated README by the [BeCode CLI tool](https://github.com/becodeorg/cli).

## Install `docker` & `docker-compose`

### For macOS

Follow the procedure on [this page](https://docs.docker.com/docker-for-mac/install/)

### For Windows

#### Pro, Enterprise or Education versions

Follow the procedure on [this page](https://docs.docker.com/docker-for-windows/install/)

#### Home version

To use docker on Windows Home, you need to use the [Docker Toolbox](https://docs.docker.com/toolbox/overview/), which use VirtualBox to run docker on your machine.

##### ⚠️ Important notes for Windows Home version

The Docker Toolbox and the VirtualBox env will change two important things when you use docker :

1. The host to access the containers isn't `localhost`, but the IP `192.168.99.100` (by default)
2. Due to the nature of VirtualBox, the *volumes* binding between your local system and the containers are kinda limited. Please ensure that **your working folder** is inside the `C:/Users` path.

### For Linux

1. Follow the procedure on [this page](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
1. Run the following command to fix a possible right issue : `sudo usermod -a -G docker $USER`
1. Follow the procedure on [the page](https://docs.docker.com/compose/install/#install-compose)
1. Restart your computer

To test your installation, run the command `docker run hello-world`.

## Run `docker`

When starting your env for the first time, run the following command in yhour repo:

	docker-compose build

> **NOTE:** thus you don't need to run this command each time, it may be useful to *re*build your services when you change the configuration of your services.

Then, simply run the following command to get started:

    docker-compose up

The details for all your services is detailed bellow.

## Your services
### Langage: Node.js

#### What is Node.js?

Node.js is a software platform for scalable server-side and networking applications. Node.js applications are written in JavaScript and can be run within the Node.js runtime on Mac OS X, Windows, and Linux without changes.

Node.js applications are designed to maximize throughput and efficiency, using non-blocking I/O and asynchronous events. Node.js applications run single-threaded, although Node.js uses multiple threads for file and network events. Node.js is commonly used for real-time applications due to its asynchronous nature.

Node.js internally uses the Google V8 JavaScript engine to execute code; a large percentage of the basic modules are written in JavaScript. Node.js contains a built-in, asynchronous I/O library for file, socket, and HTTP communication. The HTTP and socket support allows Node.js to act as a web server without additional software such as Apache.

* **Website:** [nodejs.org](https://nodejs.org)
* **Documentation:** [nodejs.org/en/docs/](https://nodejs.org/en/docs/)

#### Container

* **Image used:** [becodeorg/node](https://hub.docker.com/r/becodeorg/node/) (derived from [library/node](https://hub.docker.com/_/node/))

##### Usage

Place your JS files in `./bin` folder, access it your browser at address [localhost](http://localhost).

The container use [nodemon](https://github.com/remy/nodemon) to watch and reload your app on changes.
You can change the `nodemon` command within your **docker-compose.yml** file according your needs.

**IMPORTANT:** your entry point **must** be defined in your **package.json** `scripts.start` property, and your app's server **must** listen the `12345` port.

**NOTE:** the container expose the debugger on port `9229` to use with [node inspector](https://nodejs.org/en/docs/guides/debugging-getting-started/)


* * *

### Database: MongoDB

#### What is MongoDB?

MongoDB is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses (JSON)[https://en.wikipedia.org/wiki/JSON]-like documents with schemata. MongoDB is developed by MongoDB Inc., and is published under a combination of the Server Side Public License and the Apache License.

* **Website:** [mongodb.com](https://www.mongodb.com)
* **Documentation:** [docs.mongodb.com](https://docs.mongodb.com)

#### Container

* **Image used:** [library/mongo](https://hub.docker.com/_/mongo/)

##### Usage

**IMPORTANT:** the first startup of this container is long : the db server needs to be initialized.

**NOTE:** the container don't create a database at startup - create it within your code (or with MongoExpress)

###### Access from another container

You can access the database **from another container** with the following informations:

* **host:** `mongo`
* **port:** `27017`
* **user:** `dev`
* **pass:** `dev`

###### Access from your host

You can access the database  **from your host** with the following informations:

* **host:** `localhost`
* **port:** `27017`
* **user:** `dev`
* **pass:** `dev`

