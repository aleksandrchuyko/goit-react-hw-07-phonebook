import PropTypes from 'prop-types';

export const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <div>
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
