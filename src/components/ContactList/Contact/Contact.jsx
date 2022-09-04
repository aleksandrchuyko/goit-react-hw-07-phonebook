import PropTypes from 'prop-types';
import { useRemoveContactMutation } from 'redux/contactsApi';

export const Contact = ({ id, name, phone, onDeleteContact }) => {
  const [removeContact, { isLoading: isDeleting }] = useRemoveContactMutation();
  return (
    <div>
      <p>
        {name}: {phone}
      </p>
      <button
        type="button"
        disabled={isDeleting}
        onClick={() => {
          removeContact(id);
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
  phone: PropTypes.string.isRequired,
};
