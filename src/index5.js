//EP-06------------------
// Monolith Architecture: here in 1 application we have to add all the elements like backend api  and front end ui database connectivity ,authenication code,sending sms or notification code  and all elements were present in the same service ,so this was kind of tough to compile this code .

//microservice architecture: we have different service for different jobs like a service for BE,UI,Auth, SMS and all these services combbine to form  a new applicaion and this is known as single responsibility services and separation of concerns.

//now how do these services interact with each other  the ui service need to talk to BE to fetch data the backend services need to talk to the DB then BE need to talk to AUTH THEN NOTIFICATION SERVICES.
//now are these all services deployed :these all services are deployed and re running on different services and they are mapped to domain name and if 1 service needs other service then they are being called by for ex if BE is on port 1000 and its domain name is /api then if UI need to call BE it calls by using /api i.e their domain name.

//will we see how web application will take the data from BE through API's :there are 2 ways that can be followed
//1st is when the app loads we can make the api call and as soon as the data comes we can render the ui ex: suppose our page loads and then makes the API call and it takes 500ms to get the data and then the ui renders.
//2nd is when as soon as the page loads we will quickly render ui and then make the api call and as soon as the data comes we can rerender the ui once again.

//in react will be using 2nd approach because this gives us better UX because in the 1st approach user experience will not be good as it will take little time to load the data thus giving bad UX experience

//NEXT is USEEFFECT hook:useEffect is again a hook which is function and it takes 2 arguments they are 1st is the arrow function which gives the callback function and 2nd is the dependency array  so othe question is wen will this callback funciton be called so the ans is this callback function will be called after the component is rendered.SO if we want to call some function after the after the componenet is rendered then we need to use "UseEffect hook" . So for the above 2nd approach we use useEffect hook to fetch data from the api's

