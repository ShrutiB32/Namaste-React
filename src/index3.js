//EP-04---------------------------------------------
//creating the foodordering app
//steps to be followed
//planning the ui or wireframe
//then discuss abiut wat component we require like:
/*
HEADER
    -logo
    -navitmes
BODY 
    -Search component
    -card conntainer
        --lot of resto cards
            ---image and text
FOOTER
    -copyright
    -links
    -Address
    -contact
*/

//now we are ready to build

import React from "react";
import ReactDOM from "react-dom";

//2nd we need to create header component
const HeaderComponent = () => {
  return (
    <div className="header">
      <div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/007/500/121/original/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul className="items">
          <li>Home</li>
          <li>About Us</li>
          <li>Conatct US</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCardPrevious = () => {
  return (
    //we can give inline styles using the javascript object or directly right the objectin the 2 curly brackets i.e style={{backgroundColor:"black"}} the first bracket tell us it is javascript code and 2nd code shows it is   and pass it as shown below but this is not the prefered way
    <div className="res-card" style={styleCard}>
      <div>
        <img
          alt="resto pic"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Raj_Kachori_Haldiram.jpg"
          className="res-logo"
        />
        <h3>HaldiRams</h3>
        <h4>North Indian,Snacks,Chaats</h4>
        <h4>4.4 stars</h4>
        <h4>38 mins</h4>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
    // here we can destructure the props insteadof passing complete props as ({resName,cuisine}) => {}
    // if we console.we get 2objects 1st is halidrams card and 2nd object is kfc card
    const { resData } = props;
    return (
      //we can give inline styles using the javascript object or directly right the objectin the 2 curly brackets i.e style={{backgroundColor:"black"}} the first bracket tell us it is javascript code and 2nd code shows it is   and pass it as shown below but this is not the prefered way
      <div className="res-card" style={styleCard}>
        <div>
        {/* we can add dynamic images coming from the swiggy api i.e there is cloudinaryid ,here cloudinary is a cdn and all images used by swiggy are put in cloudinary and accessed by their id's */}
          {/* <img
            alt="resto pic"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Raj_Kachori_Haldiram.jpg"
            className="res-logo"
          /> */}
          <img
            alt="resto pic"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData?.data.image}
            className="res-logo"
          />
          {/* //this below are if we send properties directly like cuisine="chinese" and so to RestaurantCard which takes it has object  */}
          {/* <h3>{props.resName}</h3>
          <h4>{props.cuisine}</h4> */}
          <h3>{resData?.data.resName}</h3>
          <h4>{resData?.data.cuisine}</h4>
          {/* instead of writing resData?.data everytime it is not a good practice we can destructure the code before like {resName,cuisine}=resData?.data this is good practice */}
          <h4>4.4 stars</h4>
          <h4>38 mins</h4>
        </div>
      </div>
    );
  };
//   const resObj= {
//     "data" : {
//         "resName": "MCD",
//         "cuisine":"Burger",
//         "image": "e33e1d3ba7d6b2bb0d45e1001b731fcf"
//     }
    
//   } // before there was only object netx we have list of objects

const resList= [
    {
        "data" : {
            "id":0,
            "resName": "MCD",
            "cuisine":"Burger",
            "image": "e33e1d3ba7d6b2bb0d45e1001b731fcf"
        }
    },
    {
        "data" : {
            "id":1,
            "resName": "Haldirams",
            "cuisine":"",
            "image": "2f849d999918d411532dd1e8c24f29e0"
        }
    },
    {
        "data" : {
            "id":2,
            "resName": "Dominos",
            "cuisine":"Burger",
            "image": "aadw5xxrjtv6xxhtscai"
        }
    },
    {
        "data" : {
            "id":3,
            "resName": "CCD",
            "cuisine":"Burger",
            "image": "d96267738c19ec62acb5390e52faba41"
        }
    }
]


//then we need to create body component
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="resto-container">
        {/* resto card : for this we create separate commponent */}
        <RestaurantCard
          resName="Haldirams"
          cuisine="North Indian,Snacks,Chaats"

        />
        {/* now if we want to add data to cards dynamically i.e if we want to add 2nd card as KFC then we make use of "PROPS " which is properties,using props we can send data dynamically to a component or they are noraml arguments to the functions  ,these resName and cuisine and all are props ,so wat react will do is it will take all the below mentioned properties as object and it will pass in RestaurantCard function argument as props*/}
        <RestaurantCard
          resName="Dominos"
          cuisine="Pizza, Pasta, Sides,Desserts"
        />

        {/* this mtd is passing complete object to props instead of sending single properties to the props as above */}

        {/* <RestaurantCard resData={resList[0]}/>
        <RestaurantCard resData={resList[1]}/>
        <RestaurantCard resData={resList[2]}/>
        <RestaurantCard resData={resList[3]}/> */}
        {/* insteadof write same code repeatedly like above we can use map js function as shown below */}
        {
            resList.map(restaurant => {
                // return <RestaurantCard resData={restaurant}/>
                // if we return restaurantCard like above we get a warning in conole saying "react-jsx-dev-runtime.development.js:87 Warning: Each child in a list should have a unique "key" prop." so we need to keep in mind that everytime we loop over we need to provide the component a unique key to identify themselves uniquely.So we can giveit like below (check 203 line)
                return <RestaurantCard key={restaurant?.data.id} resData={restaurant}/>

            })
        }
      </div>
    </div>
  );
};

//first we will create complete app Layout

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

//"config driven ui" :controlling the ui using the data .i.e config and this config comes from backend  for ex in swigging app the offers on resto are different from place to place i.e ui is changing according to backend data (config is the api data and if there is no data the ui is not shown ex: carousel is not shown in swiggy if no offers i that resto)



/*WHY DO WE NEED TO ADD KEYS TO THE COMPONENTS RENDERED THROUGH LOOP? ANS:rFor optimisation we add keys so wat optimisation wenever a new card needs to be added on either in between or at first or last ,if they are no unique keys given then react will render all the cards once more but if the key is given then only the new component will get rendered not all . for these keys we can also give index value to key property,this index comes from map's second argument i.e (restaurant,index)=>{
    <Restaurant key={index} resData={resobj}/>
}   but this mtd is not recommended by react itself using index value in not recommended i.e index as a key is anti-pattern*/