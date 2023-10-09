import  UserClass from './UserClass';
import React from 'react';
// import User from './User';
//from ep08 part1 
// {/*
//     const About = () => { 
//         return (
//             <div>
//                 <h1>About</h1>
//                 <h2>This is Namaste Reac web Series</h2>
//                 {/*ep 08 part 1 using props*/}
//                 <User name={"Shruti"}/>
//                 <UserClass name={"Shruti"}/>
//             </div>
//         );
//     }; 
// */}


// export default About

//ep08 part 8 the above code is commented tocreate class based component
//we can do React.Component or simply Component if we use simply component then we should import it as import {Component} from "react"; not import React from "react";
class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("parent constructor");
    }
    render() {
        console.log("parent render");
        return (
            <div>
             <h1>About</h1>
             <h2>This is Namaste Reac web Series</h2>
             <UserClass name={"Shruti"}/>
         </div>
        );
    }
}

export default About;