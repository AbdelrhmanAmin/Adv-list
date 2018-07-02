import React, { Component } from 'react';
import SearchBar from '../searchBar';
import './style.css';

class Search extends Component {
  render(){
    const { onChange }= this.props;
    return(
      <form>
        <SearchBar type='name.common' onChange={onChange} />
        <SearchBar type='Captial' onChange={onChange} />
        <SearchBar type='region' onChange={onChange} />
        <SearchBar type='subregion' onChange={onChange} />
      </form>
    )
  }
}
export default Search;
