import React, { useState } from 'react';
import Name from './components/Name';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState(null);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const existingPerson = persons.find(person => person.name === newName);
    if (existingPerson) {
      setErrorMessage(`${newName} is already added to phonebook`);
      return;
    }
    const newPerson = { name: newName };
    setPersons([...persons, newPerson]);
    setNewName('');
    alert(errorMessage);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <Name key={person.name} name={person.name} />
      ))}
      {errorMessage && alert(errorMessage)}
    </div>
  )
}

export default App