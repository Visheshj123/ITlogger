import React, {useState} from 'react'
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js'
import { connect } from 'react-redux'
import { addLog } from '../../actions/logActions'
import TechSelectOptions from '../techs/TechSelectOptions'

const AddLogModal = (props) => {
  const { addLog } = props
  const [message, setMessage] = useState('')
  const [attention, setAttention] = useState(false)
  const [tech, setTech] = useState('')
  const onSubmit = (e) => {
   if(message == '' && tech == ''){
      M.toast({html: 'Please enter message and tech'})
    }else{
    const log = {
      message,
      attention,
      tech,
      date: new Date()
    }
    addLog(log)
    M.toast({html: `Log added by ${tech}`})
  setMessage('')
  setTech('')
  setAttention(false)
  }
}
  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input type="text" name='message' value={message} onChange={(e) => {setMessage(e.target.value)}}/>
            <label htmlFor="message" className="active"></label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
          <select name="tech" value={tech} className="browser-default" onChange={e => {setTech(e.target.value)}}>
            <option value="" disabled>Select Technican</option>
            <TechSelectOptions></TechSelectOptions>
          </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
              <input type="checkbox" className="filled-in" checked={attention} value={attention} onChange={e => setAttention(!attention)}/>
              <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
        <div className="modal-footer">
          <a href="#!" onClick={onSubmit} className="modal-close wave-effect blue waves-light btn">Enter</a>
        </div>
      </div>
</div>

  )
}


AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired
}

const modalStyle = {
  width: '75%',
  height: '75%',
}



export default connect(null, { addLog })(AddLogModal)