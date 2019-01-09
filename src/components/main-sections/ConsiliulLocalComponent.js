import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from '../navigation-components/NavBar'
import SectionPills from '../navigation-components/SectionPills'
import Profile from '../navigation-components/Profile'
import { membri } from '../../config/constants'

const category = 'guvernanta'
class ConsiliulLocalComponent extends Component {
  render () {
    const echipa = membri[category]
    return (
      <div >
        <NavBar />
        <div style={{ padding: '3rem' }}>
          <Profile echipa={echipa} />
          <SectionPills category={category} />
        </div>
      </div>
    )
  }
}

export default connect(null, { })(ConsiliulLocalComponent)
