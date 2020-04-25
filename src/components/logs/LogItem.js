import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { deleteLogs, setCurrent } from '../../actions/logActions'

const LogItem = (props) => {
  const {log} = props
  const { deleteLogs, setCurrent } = props
  const onClick = () => {
    deleteLogs(log.id)
  }

  const onEdit = () => {
     setCurrent(log.id)
  }
  return (
    <li className="collection-item">
      <div>

        <a onClick = {onEdit} href="#edit-log-modal" className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}>{log.message}</a>
        <span className="text-darken-2"> Id: #{log.id}</span>
        <span className="right"> <Moment format="MMM Do YYYY">{log.date}</Moment> </span>
        <br/>
        <span className="blue-grey-text text-darken-1">last updated by {log.tech}</span>
        <a href="#!" className="secondary-content" onClick={onClick}>
          <i className="material-icons grey-text">delete</i>
        </a>

      </div>
    </li>
  )
}

LogItem.propTypes ={
  log: PropTypes.object.isRequired,
  deleteLogs: PropTypes.func.isRequired
}

export default connect(null, {deleteLogs, setCurrent})(LogItem)
