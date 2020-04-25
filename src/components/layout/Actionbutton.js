import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import AddLogModal from '../logs/AddLogModal'
import EditLogModal from '../logs/EditLogModal'
import AddTechModal from '../techs/AddTechModal'
import TechListModal from '../techs/TechListModal'
const Actionbutton = (props) => {
  return (
    <Fragment>
    <div className="fixed-action-btn">
  <a className="btn-floating btn-large deep-purple darken-1">
    <i className="large material-icons">mode_edit</i>
  </a>
  <ul>
    <li><a className="btn-floating deep-purple lighten-3 modal-trigger" href="#add-log-modal"><i className="material-icons">add_circle</i></a></li>
    <li><a className="btn-floating deep-purple lighten-2 modal-trigger" href="#add-tech-modal" ><i className="material-icons">person_add</i></a></li>
    <li><a className="btn-floating deep-purple lighten-1 modal-trigger" href="#tech-list-modal"><i className="material-icons">list</i></a></li>
  </ul>
  </div>
  <AddTechModal></AddTechModal>
  <AddLogModal></AddLogModal>
  <TechListModal></TechListModal>

    </Fragment>
  )
}



export default Actionbutton
