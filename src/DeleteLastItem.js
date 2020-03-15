import React from 'react';
import PropTypes from 'prop-types';

const DeleteLastItem = props => (
  <button disabled={props.buttonDisabled} onClick={props.onDeleteLastItem}>
    Delete Last Item
  </button>
);

DeleteLastItem.propTypes = {
  buttonDisabled: PropTypes.bool.isRequired,
  onDeleteLastItem: PropTypes.func.isRequired
};

export default DeleteLastItem;
