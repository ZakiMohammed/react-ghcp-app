import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import { v4 as uuid } from 'uuid';

const Form = ({ add }) => {
  const [note, setNote] = useState('');

  const handleSubmit = event => {
    try {
      event.preventDefault();

      if (note === '') {
        window.alert('Please fill the form');
        return;
      }

      const newNote = {
        id: uuid(),
        note,
      };

      add(newNote);
    } catch (error) {
      window.alert(`Error Occurred: ${error.message}`);
    } finally {
      setNote('');
    }
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
