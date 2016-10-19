import {Provider} from 'react-redux';
import React from 'react';
import MapContainer from './map/map_container';
import SearchContainer from './search_container';
import Navbar from './navbar/navbar';
import SearchResultsContainer from './search/search_results_container';
import Modal from 'react-modal';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    maxWidth              : '400px',
    background            : 'whitesmoke', 
    padding               : '40px',
    border                : '3px solid #f05053'

  }
};


class Root extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.state = {modalIsOpen: true};
  }


  closeModal() {
    this.setState({modalIsOpen: false});
  }



  render() {

    return(
      <Provider store={this.props.store}>

      <div>
      <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles} >
          <i className="material-icons" onClick={this.closeModal}>close</i>
          <h1>SF Film App</h1>
          <div className='modal-text'>Search for movies and shows that have been filmed in San Francisco. You can search by title, actor, directors, and locations. Click on map markers to get more details, or click on 'Plot' or 'Locations' in the search results.</div>
          
        </Modal>


        <Navbar />
        <div className='map-search'>
          <SearchResultsContainer />
          <MapContainer />
        </div>
      </div>
      </Provider>
    );
  }
}

export default Root;
