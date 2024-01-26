import React, { useState } from 'react';
import Person from './components/Person';
import Filter from './components/Filter';
import Form from './components/Form';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [errorMessage, setErrorMessage] = useState(null);
  const [filterName, setFilterName] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleFilterChange = (event) => {
    setFilterName(event.target.value.toLowerCase());
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const existingPerson = persons.find(person => person.name === newName);
    const existingNumber = persons.find(person => person.number === newNumber);
    if (existingPerson || existingNumber) {
      setErrorMessage(`${newName} with number: ${newNumber} is already added to phonebook`);
      return;
    }
    const newPerson = { name: newName, number: newNumber };
    setPersons([...persons, newPerson]);
    setNewName('');
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filterName));

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filterName={filterName} handleFilterChange={handleFilterChange} />
      <h2>add new Person</h2>
      <Form newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      {filteredPersons.map((person) => (
        <Person key={person.name} name={person.name} number={person.number} />
      ))}
      {errorMessage && alert(errorMessage)}
    </div>
  )
}

export default App