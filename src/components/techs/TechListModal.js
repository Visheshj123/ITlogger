import React, {useState, useEffect} from 'react'
import TechItem from './TechItem'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getTechs} from '../../actions/techActions'


const TechListModal = (props) => {

  const { techs, loading } = props.techs
  useEffect(() => {
    props.getTechs()
  },[])




  return (

    <div id="tech-list-modal" className="modal" style={{height: '50%'}}>
      <div className="modal-content">
        <h4>Technician List</h4>
        <br/>
        <ul className="collection">
          {techs && techs.map(tech => (
            <TechItem key = {tech.id} tech={tech}></TechItem>
          ))}
        </ul>
      </div>
    </div>
  )
}

TechListModal.propTypes = {
  techs: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
}

/* TechItem key = {tech.id} tech={tech}></TechItem>*/
const mapStateToProps = state => ({
  techs: state.tech
})



export default connect(mapStateToProps, {getTechs})(TechListModal)
