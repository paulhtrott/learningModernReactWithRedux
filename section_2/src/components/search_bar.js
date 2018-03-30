import React, {Component} from 'react';

// functional component, start with a functional component
//const SearchBar = () => {
//  return (
//    <input />
//  );
//};

// class based component (more aware component), only needed for more functionality
// when you want state, among other things
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  //Naming - onElementEvent
  //or handleElementEvent

  //onInputChange(event) {
  //  console.log(this);
  //  console.log(event.target.value);
  //  this.setState({
  //    term: event.target.value
  //  })
  //}


  render() {
    return (
      <div>
        <input
          value={this.state.term} // controlled field is a value set by a state
          onChange={event => this.setState({term: event.target.value})} />
      </div>
    );
  }
}


export default SearchBar;
