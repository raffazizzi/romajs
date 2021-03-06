import React, { Component } from 'react'
import PropTypes from 'prop-types'
import YesNoDialog from './dialogs/YesNo'

export default class Module extends Component {
  constructor(props) {
    super(props)
    this.state = { deleting: false }
  }

  toggle() {
    this.props.toggleModule(this.props.ident, this.props.selected)
  }

  render() {
    let dialog = <span/>
    if (this.state.deleting) {
      dialog = (<YesNoDialog key="ynd" show showImmediately continue={() => {
        this.toggle()
      }}
      header={'This will remove the entire module from your customization. All changes to this module\'s members will be lost. Are you sure you want to continue?'}
      hide={() => {
        this.setState({deleting: false})
      }}/>)
    }
    const iconClass = this.props.selected ? 'romajs-color-no' : 'romajs-color-yes'
    const iconType = this.props.selected ? 'cancel' : 'add_circle'
    return (<div>{dialog}<div key="chip" className="mdc-chip" onClick={() => {
      if (this.props.selected) {
        this.setState({deleting: true})
      } else {
        this.toggle()
      }
    }}>
      <i className={`material-icons mdc-chip__icon mdc-chip__icon--leading ${iconClass}`}>{iconType}</i>
      <div className="mdc-chip__text"> ({this.props.ident})</div>
    </div></div>)
  }
}

Module.propTypes = {
  toggleModule: PropTypes.func.isRequired,
  ident: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired
}
