import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getTechs} from '../../actions/techActions'

const TechSelectOptions = (props) => {
  const {techs,loading} = props.techs
  const {getTechs} = props

  useEffect(() => {
    getTechs()
  },[])
  return (
    <Fragment>
  {!loading && techs && techs.map(tech => (
    <option key={tech.id} value={tech.firstname + " " + tech.lastname}>{tech.firstname + " " + tech.lastname}</option>
  ))}
    </Fragment>
  )
}

TechSelectOptions.propTypes = {
  getTechs: PropTypes.func.isRequired,
  techs: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  techs: state.tech
})

export default connect(mapStateToProps,{getTechs})(TechSelectOptions)
