import React, { Component } from 'react'
import { init } from 'ityped'

export default class Type extends Component {
  componentDidMount(){
    const myElement = document.querySelector('#myElement')
    init(myElement, { showCursor: false, strings: ['Transaparenta.', 'Traditii.', 'Biodiversifitate.', 'Viziune europeane.'] })
  }
  render(){
    return <div id="myElement"></div>
  }
}
