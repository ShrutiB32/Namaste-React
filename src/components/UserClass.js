import React from "react";
//we create class in js by giving class keyword followed by name of the class and to make this class component will need to extend React.Component also this React.Component will make react knw this is component
//then will have the render mtd inside it which will return the jsx that will be displayed on screen.
//now if we compare user.js and userclass.js i.e functional and class based is functional will directly return the jsx code where as the class based will have class which has the render mtd which will return the jsx code 
//this react.component is  a class which is der in react package
//next is how to send the props from 1 component to other it can be done using constructor which inturn as super() keyword  but in functional we direction send it in the from of object and while recieving it we had to put it in the the arrow function like for ex: from sender component it will be <User name={"shruti"}> and at reciever it will <wen we recieve (props) => {<h1>{props.name}</h1>},whereas in the class based component it will be as shown below, we use super keywod in the constructor at reciever end if we dont write super(props in constructor then we cannot read props and it will throw error)soo while destructuring it on reciever end i will be <h1>{this.props.name}</h1>
//why shd we write super(props) home work

//basic info Whenever the instance of the class is created then the constructor is called .

//next is to create the state variables 
//firstly whta do we mean by creating  a instance  of the class:it menas loading of the class means we are creating a instance of the class so when we load or create an instanceof a class constructor is called first so it is the based place to recieve the props and create state variables.
//so we used hooks in the fuctional based component now we use this keyword followed by the name of the state and the object which consists of all the state vaiables.

//so if we want to update the state variable ,then we can make a button by which on click of the button we can update the count value but we cannot update the state variables directly for ex: this.state.count=this.state.count+2;
//so react gives us access to to function which is known as this.setState() and we can use this function anywhere in the class
//so whenever there is change in the state variable then reconiliation will happen and then page will get re-rendered 

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

//this is the way to create a state variables 
        this.state = {
            count: 0,
        };
    }
    render() {
        const {name} = this.props;
        //or else we can destructure the state variable and use it instead of using {this.state.count};
        const {count} = this.state;
        return (
            <div className="user-card">
                <h2>Name: Shruti</h2>
                <h2>Name: {this.props.name}</h2>
                {/*using destructuring */}
                <h2>Name: {name}</h2>
                <h3>Location: Dehradun</h3>
                <h4>Contact: @shrutiballurgi</h4>
                {/*we can use the state variables as shown below */}
                <button onClick={()=>{
                    //never do this
                    // this.state.count=this.state.count+2;
                    this.setState({
                        count: this.state.count +1,
                    })
                }}>Count Increase</button>
                <h1>Count: {this.state.count}</h1>
            </div>
        )
    }
}

export default UserClass;