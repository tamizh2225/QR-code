import PropTypes from "prop-types";

export const Student = (props) => {
  return (
    <div className="student">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{props.name}</td>
          </tr>
          <tr>
            <th>age</th>
            <td>{props.age}</td>
          </tr>
          <tr>
            <th>married</th>
            <td>{props.married ? "yes" : "no"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Student.PropType = {
  name: PropTypes.string,
  age: PropTypes.number,
  married: PropTypes.bool,
};

Student.defaultProps ={
  name: "no name",
  age: 0,
  married:false, 
};