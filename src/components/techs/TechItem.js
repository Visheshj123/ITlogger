import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {deleteTech} from '../../actions/techActions'

const TechItem = (props) => {
  const {tech, deleteTech} = props
  return (
    <li className="collection-item">
      <div>
          {tech.firstname} {tech.lastname}
          <a href="#!" className="secondary-content" onClick={e => deleteTech(tech.id)}><i className="material-icons grey-text">delete</i></a>
      </div>
    </li>
  )
}

TechItem.propTypes = {
  tech: PropTypes.object.isRequired
}



export default connect(null, {deleteTech})(TechItem)
