import React from 'react'; // this react is coming from node modules --> ep02
import ReactDOM from 'react-dom/client'; // this react is coming from node modules --> ep02


// this was in simple js for inserting h1 tag in the div element with id root 
// const rootElement= document.getElementById("root");
// const heading = document.createElement("h1");
// heading.innerHTML= "Hello world!";
// rootElement.appendChild(heading);

// writing the same above code in REACT

// here createElement takes 3 parameters 1st parameter is the name of the tag ,2nd parameter is the object where we give attributes in the form of key value pairs to the tags,3rd parameter is the text to be inserted

// CREATEELEMENT always returns an OBJECT
const heading = React.createElement("h1", {id:"heading"}, "Hello World from React!");

// If we try to console.log the heading which is created using react.createElement we wont get an element but we will get and object with type,props,key as keys in it.
// here props has children and attributes
// AT the end heading is the React element which at the end is the javascript object
// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// here render takes this headidng or javascript object creates the elemnt/tag which is understood by the browser and puts it in the root i.e DOM
root.render(heading);




//CREATING NESTED HTML USNG REACT
/*
    <div id="parent">
        <div id="child">
            <h1></h1>c
        </div>
    </div>
*/

// const parent = React.createElement('div', {id: 'parent'});
// const child = React.createElement('div', {id: 'child'});
// const headingTag = React.createElement("h1", {id: 'headingTag'},"heading");

// instead of writing as above we can do it has below 
// In the below code we are creating the elements in the children attribute of the creatElement mtd

const parent = React.createElement("div", {id: 'parent'},
                React.createElement("div", {id: 'child'},
                React.createElement("h1",{}, "Heading")));

console.log(parent)

const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(parent);

// wat if we have more siblings in the div with id child i.e 2 h1 tags in div, then in above code we can pass it as array of children i.e   [React.createElement("h1",{}, "Heading"), React.createElement("h1",{}, "Heading2")]

// but this will throw error to specify key for these array of children , (SOLVED LATER)

// const parent = React.createElement("div", {id: 'parent'},
//                 React.createElement("div", {id: 'child'},
//                 [React.createElement("h1",{}, "Heading"), React.createElement("h1",{}, "Heading2")]));


//--> This makes the code messy so we use JSX instead ,we wont be using the above mtd


//ep-02 package.json is the configuratin file for npm

//IN package.json we have ^ --> Caret and ~ --> tildel , for the package/dependency versions here caret means minor updates like 8.2.0 will update to 8.2.1 where ass tidel means major updates likes 8.3.0

//while installing parcel we use npm intstall -D parcel here -D is dev dependecides ,there are 2 dependencies i.e dev dependency and normal dependency ,dev dependencyare used in development  phase and normal is used in production phase also,

//transitive dependedncy : Our projectc in dependent  of parcel dependency ,this parcel package is in-turn dependent on many dependencies this is called transitive dependencies.

//Parcel is the bundler like webpack,vite
//parcel in-turn uses BABEL

//we think tht 1 project has only 1 package .json and package.lock.json ,But it is wrong "Each package or dependency in the node modules has package.json and own dev dependencies"

// There i sno need to push node modules to git repository on remote but there is need to push package.json and package.lock.json to git repository as through package.json we can recreate the node modules we get package.json through npm init

//npm is to install the package where ad npx is to execute the package here the parcel builds the development build on the given source file i.e index.html and hosts it to the localhost.1234 port 

// what is react now : It is the javascript package and is also hosted on npm thhis is 2d mtd to bring react on to ur project the 1st method was importing cdn links in index.html

// it is easier to add package of react to node_modules than the cdn links as if the there is some update in react version it is updated automatically in rnode modules and also easy to manage the dependencies of react, but we use the cdn links we need to update the version of react manually

// to install react we use the command "npm install react" here we not using -D while installing as we not installing it as dev-dependency
//we need to install react-dom also using "npm install react-dom"

//now since we installed both the react packages so if we comment the both cdn links from the index.html file we will get error "React not defined" i.e we have used react to create element eg React.createElement("div",{},"Im div"); So we need to import react in js file i.e [import Recat from "react"]
//then if we run we get other error of using browser js file i.e if we use script tag to specify the js file it will become browser file we need to specify that script as module by changing it to type=module i.e "<script type="module" src="./src/index.js" defer></script>"

//here parcel automatically runs the server when der are some changes in the file and when we save the file.
//here parcel is creating 
// -dev build, 
// -local Server, 
// -HMR(hot module replacement) i.e (automatically refreshing the page on the some changes) , 
// -Caching -Faster Builds
// -it also does IMAGE OPTIMISATION
// -Minification of file if we do production build
// -bundles the file
// -compress the files i.e it removes the whitespaces ,extra lines and all
// -consistent hashing
// -Code splitting
// -Differential Bundling -> to support older versions i.e our app can be open in 1 browser and also on other browser 
// -good error handling -> it only display the error in console and not on the web page as in angular
// -diagnostics -> it manages things behind the scenes
// -We can also host the app on "https" using parcel using the cmd "npx parcel index.html --https"
// -It creates different build and bundles for dev and production
// -Tree Shaking -> Parcel will remove unused code for us i.e If there are 100 of functions in our code it will tree shake to remove the unused functions and keep only the used functions.
// here Parcel is doing HMR using "file watching algorithm" which is written in C++ 
// here if we observe wen we build again and again the time is decreasing because parcel is caching things for us in ".parcel-cache" file .If we delete this file and run once more it takes little more time and if we run again ater that then it will take less time comparatively since it cached the data already
//READ PARCEL DOCUMENTATION on parcel.org

// to give the build in production env we give the command as ["npx parcel build index.html"] .After using this cmd in terminal we will get an error in package.json i.e (main : index.js )here the main tells the starting point of hte application but we specify the starting point while giving build cmd i.e npx parcel index.html so we need to remove the main :index.js form the package.json 

//once we have build in dev or prod evn we get minified files namely 3 fies html ,css,js where all the code is minified and these all files are present in dist folder . The files in the dist folder sre production and dev ready files

//EP03

// Here at the start instead of writing the command "npx parcel index.html" we can write scripts, So we can create different scripts for dev environment and for prod environment
//To do this we should write {start: "parcel index.html"} tis is the command that we should write for npm to execute
// In the same way we can write for production as {"build":"parcel build index.html"} here build keyword can be any word we wish.
//so now there is no need to write complete command as "npx parcel index.html" ,Now we should just use "npx run start" or "npx start" for dev and "npx run build" for prod and not "npx build" for prod in wont work 