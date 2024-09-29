import PropsTypes from 'prop-types';

export const ArrayProps = (props) => {
    const {items} = props;
  return (
    <div>
        <h2>Item List</h2>
        <ul>
            {items.map((item)=> (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    </div>
  )
};

ArrayProps.PropsTypes = {
    items:PropsTypes.arrayOf(
        PropsTypes.shape({
            id:PropsTypes.number.isRequired,
            name:PropsTypes.string.isRequired,
        })
    ).isRequired,
};