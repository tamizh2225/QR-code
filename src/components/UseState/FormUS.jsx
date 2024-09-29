import {useState} from 'react'
import "./FormUS.css"

export const FormUS = () => {
    const [user, setUser] = useState({
        name: "Enter to bellow Form",
        age: "Select to bellow Form",
        gender: "Select to bellow Form",
        isMarried: false,
        country: "INDIA",
        bio: "About You" ,
    });

    function changeEvent(e){
        const name = e.target.name;
        // console.log(name)
        const value = e.target.type === "checked" ? e.target.checked : e.target.value;
        setUser({...user,[name]:value});

    }

  return (
    <>
    <table>
        <tbody>
            <tr>
                <td>Name</td>
                <td>{user.name}</td>
            </tr>
            <tr>
                <td>Age</td>
                <td>{user.age}</td>
            </tr>
            <tr>
                <td>Gender</td>
                <td>{user.gender}</td>
            </tr>
            <tr>
                <td>Marital Status</td>
                <td>{user.isMarried ? "Married" : "Not Married"}</td>
            </tr>
            <tr>
                <td>Country</td>
                <td>{user.country}</td>
            </tr>
            <tr>
                <td>Bio</td>
                <td className='abc'>{user.bio}</td>
            </tr>
        </tbody>
    </table>
    <form >
        <input type="text" placeholder='Full Name'   name='name' onChange={changeEvent}/>
        <input type="number" placeholder='Age'   name='age' onChange={changeEvent}/>
        <div className="gender">
            <label htmlFor="male">
                <input type="radio" name='gender' id='male' checked={user.gender == "Male"} value="Male" onChange={changeEvent}/> Male
            </label>
            <label htmlFor="female">
                <input type="radio" name='gender' id='female' checked={user.gender == "Female"} value="Female" onChange={changeEvent}/>Female
            </label>
        </div>
        <label htmlFor="isMarried">
            <input type="checkbox" id='isMarried' checked={user.isMarried} 
             name='isMarried' onChange={changeEvent}/>IsMarried
        </label>
        <div className='select-div'>
            <label htmlFor="country">Select Country :</label>
              <select name="country" id="country" value={user.country} onChange={changeEvent}>
                <option value="India">INDIA</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="SPAIN">SPAIN</option>
                <option value="AMERICA">AMERICA</option>
            </select>
        </div>
        <textarea name="bio" id="bio" cols="30" rows="5" placeholder='Write About You' value={user.bio} onChange={changeEvent}/>
    </form>
    </>
  )
}

