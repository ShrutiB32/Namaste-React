//ep10 how to apply css to our application,different ways to apply css to application and which is better to use.

// the first way is our usual way which we used here in index.css and using className where we mention the css properties.
//the 2nd way is to use SASS and SCSS (these are writing css with some superpowers) but not recommended way when the application grows big in production level.
//3rd way is to use Styled Components where some  companies like uber use it .(study about it)
//4th way is to use the css libraries and frameworks like  material ui,bootstrap,chakra ui,ant design(2nd most popular ui library) i.e we get pre-built components. And lot of companies use material ui.

//we will be using Tailwind CSS : it woks with all the frameworks like react , angular, noraml html and css.

//part 2

//first we need to configure our tailwind css into our project for that go to their website and click on get started and then choose parcel from framework css tab and follow the steps. then install the tailwind css and post css (here post css is transforming the css along with the javascript )

//wen we did npx tailwindcss init it is like revoking the tailwind css it is like initiating the css and then it alos creates the tailwind.config.js  file which is configuration for tailwind.

//then we need to create a postcssrc file manually in the root level and copy and copy the code into this file  (this is used because our parcel will use postcssrc to understand tailwind)

//then we need to config the tailwind.config.js where in content it takes array of lists which specifies in which all files tailwind can be used.(i.e any folder in our src folder and anywhere futherr and in html,jsx,js,tsx and so files,but we use only html and js files in our projects)
//next is to import the tailwind into our project file ,to do we  commented the css code from index.css because we need to import the tailwind into our project file

//now the tailwind is setup 
// to use tailwind we wont use it using className="classname" becuase tailwind css gives us prebuilt class names where can use those names directly ex : if we want red color there is already a red color class present we need to just add that name .

// now we need to make our header flex so we use className="flex" to cahnge width we use w-24

//we can install tailwind intellisense extension which gives class suggestion wen writing code and even it tells wat this classs is doing i.e wat properties this class is using 

//px if wew want to apply on both the sides padding

//if we want to use specific values for the properties like if we want to 200px width and we dont have the class for it then we can use it like w-[200px] we are hard coding the data

//1 important thing is our app is lightweight because our app only import only once the class that me mentioned in many files ex: if we have w-4 in 3 files only once tis class is imported

//we can create responsive design using media quireies like if we want for mobile use sm: and then use properties values to it. 