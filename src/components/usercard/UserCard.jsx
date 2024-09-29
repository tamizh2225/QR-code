import PropTypes from "prop-types";

const userData = [
  {
    name: "Tamizh",
    city: "New York",
    discription: "FRONT-END DEVELOPER",
    skills: ["UI/UX","HTML","CSS","JAVASCRIPT","REACT.JS","GITHUB","NODE.JS"],
    profile: "images/2.jpg",
    online: false,
  },
  {
    name: "Tony",
    city: "Germain",
    discription: "BACK-END DEVELOPER",
    skills: ["UI/UX","HTML","CSS","JAVASCRIPT","REACT.JS","GITHUB","NODE.JS",],
    profile: "images/1.jpg",
    online: false,
  },
  {
    name: "Jeya",
    city: "New York",
    discription: "DATA SCIENTEST",
    skills: ["UI/UX", "HTML", "PYTHON", "SQL", "REACT.JS", "DATABASE"],
    profile: "images/3.jpg",
    online: true,
  },
  
];

function User(props) {
  return (
    <div className="card-container">
      <span className={props.online ? "pro online" : "pro offline"}>
        {props.online ? "ONLINE" : "OFFLINE"}
      </span>
      <img
        className="img"
        src={props.profile}
        alt=""
        style={{ width: "150px", height: "150px" }}
      />
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.discription}</p>
      <div className="button">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skill">
        <h6>Skill</h6>
        <ul>
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const UserCard = () => {
  return (
    <>
      {userData.map((user, index) => (
        <User
          key={index}
          name={user.name}
          city={user.city}
          discription={user.discription}
          profile={user.profile}
          online={user.online}
          skills={user.skills}
        />
      ))}
    </>
  );
};

{
  /* <User name="Tamizh"  city="New York"
     discription="FRONT-END DEVELOPER" 
     skills={["UI/UX" ,"HTML","CSS","JAVASCRIPT","REACT.JS","GITHUB","NODE.JS"]}
      profile="images/2.jpg"
         online={false}/>; */
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  discription: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  online: PropTypes.bool.isRequired,
  profile: PropTypes.string.isRequired,
};
