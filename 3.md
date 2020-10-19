# Create React App

In the previous lesson we learned how to add React to a simple HTML document using the script tags.
However, real web apps have a different scale, contain multiple files, use 3rd party libraries, etc.

Facebook has created a handy tool called [Create React App](https://create-react-app.dev/) that makes it easy to setup a React project with just a simple command!

To get started, make sure you have a recent version of [Node](https://nodejs.org/en/) installed on your machine.
Run the following commands in the Terminal to create and start a React app called "**my-app**":

    npx create-react-app my-app
    cd my-app
    npm start 

This will install all the required dependencies, configure and start the project on **localhost:3000**.

This is the default output of our project in the browser:

![](https://api.sololearn.com/DownloadFile?id=4380)

> **Create React App** allows us to focus on the code, rather than installing and configuring different tools.

## Project Structure

Let's explore the structure of our project by opening it using a code editor.
We will be using **Visual Studio Code** in our example, but you are free to use any code editor.

![](https://api.sololearn.com/DownloadFile?id=3940)

The **public** folder contains files related to how the application will display on the client, the most important of those being **index.html**, which is the HTML template of our page:

![](https://api.sololearn.com/DownloadFile?id=3941)

The **src** folder contains all of the JavaScript, CSS, and image files that will be compiled into a bundle file and injected into **index.html**:

![](https://api.sololearn.com/DownloadFile?id=3942)

How is React compiled into a bundle file? It uses what is called a "file loader". In the case of Create React App, **Webpack** is used.
Webpack creates a "bundle" file containing the content of multiple files that need to be "bundled" together and it is all added together into a single file. Instead of making the HTML file go and find multiple files, which can slow down load times tremendously, it only has to find one file.

> Remember, all CSS and JS files need to be added to the src folder, otherwise webpack won't see them.

While there are other files in the **src** folder that come with **Create React App** when it is generated, the two files below are the only critical files:
* **index.js**: This file is the entry point into our application. In our code, a method called `ReactDOM.render()` is used to find an element with `id="root"` in the HTML and add our React application inside of that element (similar to the previous lesson).
* **App.js**: This file is the main **component** that will be rendered to the **DOM**, which currently includes the React logo image and the default text, that we see in the output.

> We will learn about components in the upcoming lessons.

## Changing the Output
Now, when we know how to create and run a React project, let's change the default output to a simple Hello message.

To do that, we need to open **src/index.js** and change the code to the following:

```js
ReactDOM.render(
  <h1>Hello, React!</h1>,
  document.getElementById('root')
);
```

This will output the message as a heading:

![](https://api.sololearn.com/DownloadFile?id=4388)

> A really cool feature of Create React App is Fast Refresh, which automatically reflects the changes made to the code in the browser.

## StackBlitz

To make it easier to play around with React, we will be using **StackBlitz** as our online playground to enable changing and running real React code.

Here is the the same project on StackBlitz:

![](https://api.sololearn.com/DownloadFile?id=4389)


[Try it on StackBlitz](https://stackblitz.com/edit/hello-react-example?file=index.js)

We have removed all the extra files, such as the logo images, to make the project structure simpler.
Now we have the following files:
- **index.html**: The HTML page template.
- **index.js**: The entry point of our app.
- **style.css**: the stylesheet for our project.
- **package.json**: holds various metadata relevant to the project, like dependencies.