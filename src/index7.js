//ep08
//part 1
//we will study of class based components : it is the older way of creating components  whereas functional components is the newer way to create components.
//so to check the difference between the functional and class based component creation we create User.js file where we create both type card to display the details about people (go to User.js) where we create functional based component and now we create the same componenet in class based component in UserClass.js
//at the end of the day functional based component is nothing but the normal js function and so evn class based component is the normal js class
//so to create the class based component check userclass.js file

//part-2
//next is creating a state variable in the class based component i.e userClass.js and in function based component i.e user.js

//part 3
//if we want to update the state variable in the class based component then how to do ?
//we can use setState() mtd we can changeor update the state variables as shown in userClass.js

//part 4 how this class based component is mounted/loaded on this web page
//so in the about.js file,the about component is parent component where as the User class component which is present in the about component is child so while rendering react goes through the code of the about.js file line by line and then wen it encounters the userclass component in it ,it check it is imported and then it goes to that component and creates the instance of it and then constructor is called and then render mtd is called .
//so thhis becomme complicated wen evn parent become a clas based component.see in about.js,so here will how it works first the constructor of the parent is calledd then the renderer of the parent is called then the constructor and render od te child is called.

//next is componentDidMount mtd which is provided by react .we are using it in the userClass.js here once the userClass 's constructor is called then render is called and is mounted on thee DOM then this componentDidMount mtd is called ,but wat if componentDidMount is present in child component also then the parent's constructor and renderer is called then it will find that children userClass component is also class based so i go to useclass component then its constructor and renderer is called and child's componentDidMount is called and then parent's componentDidMount is called
// but wat if they are 2 child components in the parent component then it will first onstructor and renderer of parent is called and then constructor and renderer of first child is called then constructor and renderer of second child is called and then componentDidMount of first child is called,then componentDidMount of second child is called and componentDidMount of parent is called --this is according to react render lifecycle 
//but according to our assumption it is like this and not like it will first constructor and renderer of parent is called and then constructor and renderer of first child is called ,then componentDidMount of first child is called,then constructor and renderer of second child is called and ,then componentDidMount of second child is called and componentDidMount of parent is called because during the mounting there are 2 phases render phase and commit phase so in render phase the component constructor and render is called where is commit phase the react updates the DOM and then componentDidMount is called .here our assumption was wrong because according to the react render lifecycle it will batch the render phase of the 2 children and then after completing of the render of both the children both will be batched to commit phase, becuse DOM manipulation is expensive so to optimise react batches all the children into render phase and then it batches commit phase ,so it is the best place to call the api's .----this is mounting stage

//why is componentDidMount is used ?
//so der are few things after the component is mounted i.e to make api calls it is used but why ,it is because in functional component we can make api call in useEffect() here in class based we use componentDidMount

//part 5 how to make an Apicall.
//here in class based component we can make the componentDidMount mtd async and then await the fetch mtd to call the api
//so after the commitphase of mounting stage there is updating stage where after the api call in componentDidMount react triggers the render mtd once again and then calculate the diff are update the DOM nad componentDidUpdate is called i.e i n mounting stage/cycle
//constructor(dummy data)
//render(dummy data)
// <HTML Dummy>
//Component Did Mount
//<api Call>
//<this.setState> here 

//update cycle
//when the setState is called render mtd is called once again i.e 
//render mtd(new api data)
//react updates the Dom
//html is loaded with new api data
//then i will call componentDidUpdate

//then Unmounting Cycle
//then there is function componentWillUnmount i.e this mtd is called just before the component is unmounted.here Unmount is wen this component will disappear from the webpageor removing from the ui,so will component go from the page wen we go to the new page. For ex if we switch to home from aboutUs page componentWillUnmount is called.

//part 7 live seesion from the above.
//if we want to update only wen certain state variable updates in class based component then we need to do it in the componentDidUpdate with parameters componentDidUpdate(prevProps,prevState){if(this.state.count!==prevState.count){then call the render here}} so if the dependencies are more then more if stmts in coomponentDidUpdate i.e in functional based component we use useEffect() becuase it is called after each render.so the dependencies in the useffect dependencies array each dependency has if stmt in the class bassed component.

//react is SINGLE PAGE application
// so if wee write ṣetinterval(){console.log("hi"),1000} in componentDidMount of userclass then it will print hi after every 1 ec even wen we switch to home it will print this is because of single page application and wen we switch to home the page will not reload only the components will be reloaded,this leades to performance loss
//so how to clear this interval we use clearInterval() and where do we write it ? we write it in componentWillUnmount() and how will we reference that setinterval in componentDidMount by using this keyword i.e making this.timer =setinterval(){} and in ComponentWillUnmount clearInterval(this.timer) this will set the interval once wen we load abou tpage and if we switch to home page it will stop and again if we switch to about us page again it will start new timer before all the timers were running i.e evn before consoles willbe running wen we switched from about to home to about so 2 consoles will be rendered.

//but if we put the setInterval in useEffect() then there also the interval will run continously even if dependencies are present so to clear the seetInterval in functional component we use return function in useEffect which is called after unmount of hte component i.e
// useEffect(()=>{const timer =setInterval(()=>{console.log("hi")},1000)};
// return ()=>{
//clearInterval(timer)
// }
// )
//so this return function is called after unmount of aboutpage i.e wen we switchc to home page
//CHECK THIS super(props),constructor(props) ,why we make async  for componentDidMount 

