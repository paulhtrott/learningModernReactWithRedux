import React, {Component} from 'react';

// functional component, start with a functional component
//const SearchBar = () => {
//  return (
//    <input />
//  );
//};

// class based component (more aware component), only needed for more functionality
class SearchBar extends Component {

  //Naming - onElementEvent
  //or handleElementEvent
  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <input onChange={this.onInputChange} />
    );
  }
}


export default SearchBar;
