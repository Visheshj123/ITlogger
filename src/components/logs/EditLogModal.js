import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateLog } from '../../actions/logActions'
import TechSelectOptions from '../techs/TechSelectOptions'
import M from 'materialize-css/dist/js/materialize.min.js'

const EditLogModal = (props) => {
  const { current } = props.log
  const { updateLog } = props
  const [message, setMessage] = useState('')
  const [attention, setAttention] = useState(false)
  const [tech, setTech] = useState('')

  useEffect(() => {
    if(current){
      setMessage(current.message)
      setAttention(current.attention)
      setTech(current.tech)
    }
  },[props.log])


  const onSubmit = (e) => {
   if(message == '' && tech == ''){
      M.toast({html: 'Please enter message and tech'})
    }else{
      //fire off action to update
    updateLog({id: current.id, message, tech, attention, date: new Date()})
  }
  //clear fields
  setMessage('')
  setTech('')
  setAttention(false)
}
  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
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

const modalStyle = {
  width: '75%',
  height: '75%',
}

const MapStateToProps = (state) => ({
  log: state.log
})

export default connect(MapStateToProps, {updateLog})(EditLogModal)
