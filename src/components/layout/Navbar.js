import React, {Fragment, useRef} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { searchLogs } from '../../actions/logActions'

const NavCar = (props) => {
  const { searchLogs } = props
  const text = useRef('') //DOM of input now stored in text.current
  const onChange = (e) => {
    e.preventDefault()
    searchLogs(text.current.value)
  }


  return (
    <nav>
  <div className="nav-wrapper deep-purple darken-1">
    <form>
         <div className="input-field">
           <input id="search" type="search" required ref={text} onChange={onChange}/>
           <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
           <i className="material-icons">close</i>
         </div>
       </form>
  </div>
</nav>


  )
}

NavCar.propTypes = {
  searchLogs: PropTypes.func.isRequired
}

export default connect(null, { searchLogs })(NavCar)
