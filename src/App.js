import React,{useEffect, Fragment} from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import Navbar from './components/layout/Navbar.js'
import Logs from './components/logs/Logs'
import ActionButton from './components/layout/Actionbutton'
import AddLogModal from './components/logs/AddLogModal'
import EditLogModal from './components/logs/EditLogModal'
import TechListModal from './components/techs/TechListModal'
import { Provider } from 'react-redux'
import store from './store'
const App = () => {
  useEffect(() => {
    M.AutoInit() //intializes materialize js
  },[])
  return (
    <Provider store={store}>
    <Fragment>
      <Navbar></Navbar>
      <div className="container">
          <Logs></Logs>
          <ActionButton></ActionButton> {/* Holds all modal buttons and Modal components*/}
          <EditLogModal></EditLogModal>
      </div>
    </Fragment>
    </Provider>
  );
}

export default App;
