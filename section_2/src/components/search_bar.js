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
  onInputChange(term) {
    this.setState({
      term: term
    });

    this.props.onSearchTermChange(term);
  }


  render() {
    return (
      <div className='search-bar'>
        <input
          value={this.state.term} // controlled field is a value set by a state
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}


export default SearchBar;
