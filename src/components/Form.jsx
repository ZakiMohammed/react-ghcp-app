import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

const Form = ({ add }) => {
  const [note, setNote] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    
    const newNote = {
      id: 1,
      note,
    };

    add(newNote);
  };

  const handleNoteChange = event => {
    setNote(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Write some notes..."
            value={note}
            onChange={handleNoteChange}
          />
          <button className="btn btn-success" type="submit">
            <FaPlus />
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;

Form.propTypes = {
  add: PropTypes.func,
};
