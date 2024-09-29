import PropsTypes from 'prop-types';

export const OneOf = (props) => {
  const {color} = props ;
  return (
    <div style={{backgroundColor: color , padding:"20px" , color:"white" }}>
      <p>there is a name background color is {color}</p>
    </div>
  )
};

OneOf.PropsTypes = {
  color:PropsTypes.oneOf(["red","green","blue","yellow"]).isRequired
};