import PropTypes from "prop-types";
export const ChildProps = (props) => {
  return (
    <div>{props.children}</div>
  )
};

ChildProps.propTypes ={
    children : PropTypes.array,
};