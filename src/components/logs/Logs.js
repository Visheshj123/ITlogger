import React, { useEffect} from 'react'
import { connect } from 'react-redux'
import LogItem from './LogItem'
import PropTypes from 'prop-types'
import Preloader from '../layout/Preloader'
import { getLogs } from '../../actions/logActions'


const Logs = (props) => {
  const {logs, loading} = props.log
  const {getLogs} = props

  useEffect(() => {
    props.getLogs()
  },[])

  if(loading || logs == null){
    return <Preloader></Preloader>
  }



  return (
    <ul className="collection">
        <li className="collection-header">
          <h4 className="center">System Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (<p className='center'> No logs to show...</p>) : logs.map(log => (
          <LogItem key={log.id} log={log}></LogItem>
        ))}

    </ul>
  )
}

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  log: state.log
})

export default connect(mapStateToProps, { getLogs })(Logs)
