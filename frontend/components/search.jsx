import React from 'react';



class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: '', results: ''};
    this.updateSearch = this.updateSearch.bind(this);
    this.renderResults = this.renderResults.bind(this);
  }


  updateSearch(e) {
    e.preventDefault();
    this.setState({search: e.target.value}, () => {
      if (this.state.search.length > 2) {

        this.props.fetchMovies(this.state.search);
      }

    });
  }



  renderResults() {
    const resultLis = [];
    if (this.props.movies.length) {
      this.props.movies.forEach((res, idx) => {
        resultLis.push(
          <li key={idx}>
            <h4>
              {res.title}
            </h4>

            <p>
              {res.locations}
            </p>
          </li>
        );
      });
    }
    return resultLis;

  }

  render() {
    return(
      <div className='search-container'>
        <input type='text' onChange={this.updateSearch} placeholder='Search by Actor, Movie, Location, Director'/>
        <ul>
          {this.renderResults()}
        </ul>
      </div>
    );
  }

}

export default Search;
