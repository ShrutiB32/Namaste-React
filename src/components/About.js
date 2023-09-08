import User from './User';
import  UserClass from './UserClass';
//from ep08 part1 

const About = () => { 
    return (
        <div>
            <h1>About</h1>
            <h2>This is Namaste Reac web Series</h2>
            {/*ep 08 part 1 using props*/}
            <User name={"Shruti"}/>
            <UserClass name={"Shruti"}/>
        </div>
    );
};


export default About