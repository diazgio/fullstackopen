import React, { useState, useEffect } from 'react';
import axios from 'axios';
import personService from './services/personService';
import Person from './components/Person';
import Filter from './components/Filter';
import Form from './components/Form';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    personService.getAll()
      .then(response => {
        setPersons(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

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
    if (existingPerson) {
      const confirm = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`);
      if (confirm) {
        const newPerson = { ...existingPerson, number: newNumber };
        personService.update(existingPerson.id, newPerson)
          .then(response => {
            setPersons(persons.map(person => person.id !== existingPerson.id ? person : response.data));
            setNewName('');
            setNewNumber('');
          })
          .catch(error => {
            console.log(error);
          });
      }else{
        setErrorMessage(`${newName} with number: ${newNumber} is already added to phonebook`);
        setNewName('');
        setNewNumber('');
      }
      return;
    }
    const newPerson = { name: newName, number: newNumber };
    personService.create(newPerson)
      .then(response => {
        setPersons([...persons, response.data]);
        setNewName('');
        setNewNumber('');
      })
      .catch(error => {
        console.log(error);
      });
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filterName));

  const handleDelete = (e) => {
    const id = e.target.id;
    const person = persons.find(person => person.id === id);
    const confirm = window.confirm(`Delete ${person.name}?`);
    if (confirm) {
      personService.deletePerson(id)
        .then(response => {
          setPersons(persons.filter(person => person.id !== id));
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  

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
        <Person key={person.id} name={person.name} number={person.number} handleDelete={handleDelete} id={person.id} />
      ))}
      {errorMessage && alert(errorMessage)}
    </div>
  )
}

export default App