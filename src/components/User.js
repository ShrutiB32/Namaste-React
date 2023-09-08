import { useState } from "react";
const User = () => {
    const [count]=useState(0);
    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h2>Name: Shruti</h2>
            <h3>Location: Dehradun</h3>
            <h4>Contact: @shrutiballurgi</h4>
        </div>
    );
}

export default User;