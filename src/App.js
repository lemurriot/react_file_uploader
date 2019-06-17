import React from 'react'
import './App.css'
import SearchBar from './SearchBar/SearchBar'
import FilterableList from './FilterableList/FilterableList'



function App(props) {
  console.log(props)
  return (
    <div className="App">
      <SearchBar />
      <FilterableList files={props.files} />
    </div>
  );
}

export default App;
