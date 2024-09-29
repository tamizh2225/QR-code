import ListGroup from "./components/practic/ListGroup";
import { ChildProps } from "./components/practic/ChildProps";
import { Student } from "./components/practic/student";

import { ArrayProps } from './components/practic/ArrayProps';

import { OneOf } from './components/practic/OneOf';



import './css/App.css'
function App(){

  const items =[
    { id: 1,name: "item 1"},
    { id: 2,name: "item 2"},
    { id: 3,name: "item 3"},
    { id: 4,name: "item 4"},
  ] 
 const handleClick = () =>{
  alert("Button is Clicked")
 };
  return <>
    
    <ListGroup/>
    <Student name="tamizh" age={23} married={false}/>
    <Student name="selvan" age={35} married={true}/>
    <Student />
    <ChildProps>
      <p>hii how are you</p>
      <p>oiii how are you</p>
      <p>oiii how are you</p>
    </ChildProps>
    <ArrayProps items ={items}/>
    <OneOf color = "black"/>


   
  </>
}

export default App;