import { useRouteError } from "react-router-dom";
//this useRouterError is hook anything that start with use is a hook in react so this useRouterError gives us more information on the error

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div> 
            <h1>Oops!!!</h1>
            <h2>Something went wrong!!</h2>
            <h2>{err.statusText}</h2>
        </div>
    );
};

export default Error;