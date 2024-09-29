import React, { useState } from 'react'

export const USForm = () => {

  // const [user, setUser] = useState({name : "Tamizh" , age:25})

  // const updateUserName = () =>{
  //   setUser({...user,name : "Selvan"}) 
  // };
  // const updateUserAge = () =>{
  //   setUser({...user,age : "30"})
  // };

  // return (
  //   <>
  //   <h1>User Details </h1>
  //   <h3>{user.name}</h3>
  //   <h3>{user.age}</h3>
  //   <button onClick={updateUserName}>update user name </button>
  //   <button onClick={updateUserAge}>update user age </button>

  //   </>
  // )

  const [user, setUser] = useState({fname : "Tamizh", lname : "Selvan" , age:25});

//   function changeName(e){
//     // const newStateObject = {...user};
//     // newStateObject.name = e.target.value ;
//     // setUser(newStateObject);
//     setUser((oldState) => {
//       return {...oldState,name: e.target.value};
//     });

//   }
//  function changeAge(e){
//   setUser((oldState)=>{
//     return{ ...oldState,age: e.target.value};
//   });
    
//   }

  function changeHandler(e){
    setUser({...user,[e.target.name]   : e.target.value});
  

  }

  return(
    <>
      <h1>
        {user.fname} {user.lname}, {user.age}
      </h1>
      <form >
        <input type="text" placeholder='Enter your name' value={user.fname} 
        onChange={changeHandler} name='fname' />
        <input type="text" placeholder='Enter your name' value={user.lname} 
        onChange={changeHandler} name='lname' />
        <input type="number" placeholder='Enter your age' value={user.age} 
        onChange={changeHandler} name='age' />

      </form>
    </>
  )
}

{/* <input type="text" placeholder='Enter your name' value={user.name} onChange={changeEvent}  name='name'/>
    <input type="number" placeholder='Enter your age' value={user.age} onChange={changeEvent} name='age' /> */}