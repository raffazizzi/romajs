import { connect } from 'react-redux'
import Class from '../components/Class'
import { push } from 'react-router-redux'
// import { deleteElementModelClass } from '../actions/elements'
import { clearPicker } from '../actions/interface'

const mapStateToProps = (state, ownProps) => {
  let klass = null
  let success = false
  if (state.odd.customization && state.odd.localsource) {
    if (!state.odd.customization.isFetching && !state.odd.localsource.isFetching) {
      const customClasses = state.odd.customization.json.classes.models
        .concat(state.odd.customization.json.classes.attributes)
      const localClasses = state.odd.localsource.json.classes.models
        .concat(state.odd.localsource.json.classes.attributes)

      const customClass = customClasses.filter(x => {
        return (x.ident === ownProps.match.params.cl)
      })[0]
      if (!customClass) {
        const localClass = localClasses.filter(x => {
          return (x.ident === ownProps.match.params.cl)
        })[0]
        if (localClass) {
          klass = localClass
        }
      } else {
        klass = customClass
        success = true
      }
      // Get class descriptions
      if (klass.classes) {
        const subClasses = klass.classes.model.concat(klass.classes.atts)
        klass.classDescs = subClasses.reduce((descs, className) => {
          let classData = null
          const customSubClass = customClasses.filter(x => {
            return (x.ident === className)
          })[0]
          if (!customSubClass) {
            const localSubClass = localClasses.filter(x => {
              return (x.ident === className)
            })[0]
            if (localSubClass) {
              classData = localSubClass
            }
          } else {
            classData = customSubClass
          }
          descs[className] = classData.shortDesc
          return descs
        }, {})
      }
    }
  }
  // Handle attribute subsection
  let section = ownProps.match.params.section
  let attribute
  if (ownProps.match.path.includes('attributes/:attr')) {
    section = 'attributes'
    attribute = ownProps.match.params.attr
  }
  return {klass, success, section, attribute}
}

const mapDispatchToProps = (dispatch) => {
  return {
    navigateTo: (place) => dispatch(push(place)),
    // deleteElementModelClass: (element, className) => dispatch(deleteElementModelClass(element, className)),
    clearPicker: () => dispatch(clearPicker())
  }
}

const ClassPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Class)

export default ClassPage
