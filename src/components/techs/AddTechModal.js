import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addTech} from '../../actions/techActions'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddTechModal = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const { addTech } = props

  const onSubmit = (e) => {
   if(firstName == '' && lastName == ''){
      M.toast({html: 'Please enter first and last name'})
    }else{
    addTech({firstname: firstName, lastname: lastName})
  }
  setFirstName('')
  setLastName('')
  }
  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Technican</h4>
        <div className="row">
          <div className="input-field">
            <input type="text" name='firstName' value={firstName} onChange={(e) => {setFirstName(e.target.value)}}/>
            <label htmlFor="message" className="firstName">First Name</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input type="text" name='lastName' value={lastName} onChange={(e) => {setLastName(e.target.value)}}/>
            <label htmlFor="message" className="firstName">Last Name</label>
          </div>
        </div>

        <div className="modal-footer">
          <a href="#!" onClick={onSubmit} className="modal-close wave-effect blue waves-light btn">Enter</a>
        </div>
      </div>
</div>
  )
}

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired
}



export default connect(null, {addTech})(AddTechModal)
