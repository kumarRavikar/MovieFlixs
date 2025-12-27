import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider, useDispatch } from 'react-redux';
import { store } from './redux/movieStore';
import { listenToAuthChanges } from './redux/AuthSlice';
const AppWrapper = () => {
 const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(listenToAuthChanges());
  }, [dispatch]);

  return <App />;
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
     <AppWrapper />
  </Provider>
   
  
);
