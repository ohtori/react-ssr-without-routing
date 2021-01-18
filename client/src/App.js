import logo from './logo.svg';
import './App.css';
import React from 'react';
import FormComponent from './components/FormComponent';
import PostsComponent from './components/PostsComponent';

function App({ initialData }) {
  let initialState; 
  if (initialData) {
    initialState = initialData;
  } else {
    initialState = window.__initialData__;
    delete window.__initialData__;
  }
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <PostsComponent initialData={initialState} />
      <FormComponent />
    </div>
  );
}

export default App;
