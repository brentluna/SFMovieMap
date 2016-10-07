import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: '', results: ''};
    this.updateSearch = this.updateSearch.bind(this);
  }


  updateSearch(e) {
    e.preventDefault();
    this.setState({search: e.target.value}, () => {
      if (this.state.search.length > 2) {

        this.props.fetchMovies(this.state.search);
      }

    });
  }





  render() {
    return(
      <div className='search-container'>
        <input type='text' onChange={this.updateSearch} placeholder='Search'/>
      </div>
    );
  }

}

export default Search;
