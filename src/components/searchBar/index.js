import React, { Component } from 'react';

class SearchBar extends Component {
  render(){
    const { onChange,type } = this.props;
    return(
        <input type='text' onChange={e=> onChange(e,type)} placeholder={type} />
    )
  }
}
export default SearchBar;
