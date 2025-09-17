import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { notes as notesData } from './../../data';
import Item from './Item';

const List = ({ notes, remove, getAll }) => {
  useEffect(() => {
    getAll(notesData);
  }, []);

  return (
    <>
      {notes &&
        notes.map(note => (
          <Item note={note} remove={remove} key={note.id}></Item>
        ))}
    </>
  );
};

export default List;

List.propTypes = {
  notes: PropTypes.array,
  remove: PropTypes.func,
  getAll: PropTypes.func,
};
