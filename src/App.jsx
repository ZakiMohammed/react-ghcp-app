import { useState } from 'react';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';
import Empty from './components/Empty';

function App() {
  const [notes, setNotes] = useState();

  const getAll = notes => {
    setNotes(notes);
  };
  const add = newNotes => {
    setNotes([newNotes, ...notes]);
  };
  const remove = id => {
    setNotes(notes.filter(i => i.id !== id));
  };

  return (
    <>
      <Header />

      <div className="container my-5">
        <div className="row">
          <div className="col">
            <Form add={add} />
            <List notes={notes} remove={remove} getAll={getAll} />
            <Empty notes={notes} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
