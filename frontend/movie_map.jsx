import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';

document.addEventListener('DOMContentLoaded', () => {
  Modal.setAppElement(document.body);

  const store = configureStore();
  const rootEl = document.getElementById('rootIndex');
  window.store = store;
  ReactDOM.render(<Root store={store} />, rootEl);
});
