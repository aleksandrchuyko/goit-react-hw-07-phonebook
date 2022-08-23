import { Box } from 'components/Box';
import PropTypes from 'prop-types';

export const Filter = ({ name, onChange }) => {
  return (
    <Box>
      <label htmlFor="find">Find contacts by name</label>
      <input type="text" name="find" value={name} onChange={onChange} />
    </Box>
  );
};

Filter.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
