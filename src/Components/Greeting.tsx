import React from 'react'; 

interface propsGreeting  {
    name : string
}
const Greeting : React.FC<propsGreeting> = ({ name }) => { 
return <div>Hello, {name}!</div>;
 };
 export default Greeting;