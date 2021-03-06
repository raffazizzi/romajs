import expect from 'expect'
import fs from 'fs'
import romajsApp from './combinedReducers'

const customization = fs.readFileSync('test/fakeData/bare.json', 'utf-8')
const localsource = fs.readFileSync('test/fakeData/p5subset.json', 'utf-8')
let customJSON = null
let localJSON = null

describe('ODD class operations reducers', () => {
  it('should handle UPDATE_CLASS_DOCS (desc)', () => {
    customJSON = JSON.parse(customization)
    localJSON = JSON.parse(localsource)
    const state = romajsApp({
      odd: {
        customization: { isFetching: false, json: customJSON },
        localsource: { isFetching: false, json: localJSON }
      },
      selectedOdd: ''
    }, {
      type: 'UPDATE_CLASS_DOCS',
      member: 'att.global',
      docEl: 'desc',
      content: 'new desc',
      index: 0
    })
    const allClasses = state.odd.customization.json.classes.attributes
      .concat(state.odd.customization.json.classes.models)
    expect(allClasses.filter(
      x => (x.ident === 'att.global')
    )[0].desc[0]).toEqual('new desc')
  })

  it('should handle DELETE_CLASS_DOCS (desc)', () => {
    customJSON = JSON.parse(customization)
    localJSON = JSON.parse(localsource)
    const state = romajsApp({
      odd: {
        customization: { isFetching: false, json: customJSON },
        localsource: { isFetching: false, json: localJSON }
      },
      selectedOdd: ''
    }, {
      type: 'DELETE_CLASS_DOCS',
      member: 'att.global',
      docEl: 'desc',
      index: 0
    })
    const allClasses = state.odd.customization.json.classes.attributes
      .concat(state.odd.customization.json.classes.models)
    expect(allClasses.filter(
      x => (x.ident === 'att.global')
    )[0].desc[0]).toNotExist
  })

  it('should handle DELETE_CLASS_ATTRIBUTE', () => {
    customJSON = JSON.parse(customization)
    localJSON = JSON.parse(localsource)
    const state = romajsApp({
      odd: {
        customization: { isFetching: false, json: customJSON },
        localsource: { isFetching: false, json: localJSON }
      },
      selectedOdd: ''
    }, {
      type: 'DELETE_CLASS_ATTRIBUTE',
      member: 'att.global',
      attribute: 'n'
    })
    expect(state.odd.customization.json.classes.attributes.filter(
      x => (x.ident === 'att.global')
    )[0].attributes.filter(a => a.ident === 'n')[0].mode).toEqual('delete')
  })

  it('should handle RESTORE_CLASS_ATTRIBUTE', () => {
    customJSON = JSON.parse(customization)
    localJSON = JSON.parse(localsource)
    const state = romajsApp({
      odd: {
        customization: { isFetching: false, json: customJSON },
        localsource: { isFetching: false, json: localJSON }
      },
      selectedOdd: ''
    }, {
      type: 'RESTORE_CLASS_ATTRIBUTE',
      member: 'att.global',
      attribute: 'xml:space'
    })
    expect(state.odd.customization.json.classes.attributes.filter(
      x => (x.ident === 'att.global')
    )[0].attributes.filter(a => a.ident === 'xml:space')[0].mode).toEqual('add')
  })

  it('should handle ADD_CLASS_ATTRIBUTE', () => {
    customJSON = JSON.parse(customization)
    localJSON = JSON.parse(localsource)
    const state = romajsApp({
      odd: {
        customization: { isFetching: false, json: customJSON },
        localsource: { isFetching: false, json: localJSON }
      },
      selectedOdd: ''
    }, {
      type: 'ADD_CLASS_ATTRIBUTE',
      member: 'att.global',
      attribute: 'newatt'
    })
    expect(state.odd.customization.json.classes.attributes.filter(
      x => (x.ident === 'att.global')
    )[0].attributes.filter(a => a.ident === 'newatt')[0].mode).toEqual('add')
  })

  it('should handle ADD_MEMBERSHIP_TO_CLASS', () => {
    customJSON = JSON.parse(customization)
    localJSON = JSON.parse(localsource)
    const state = romajsApp({
      odd: {
        customization: { isFetching: false, json: customJSON },
        localsource: { isFetching: false, json: localJSON }
      },
      selectedOdd: ''
    }, {
      type: 'ADD_MEMBERSHIP_TO_CLASS',
      member: 'att.global',
      className: 'att.global.linking',
      classType: 'atts'
    })
    expect(state.odd.customization.json.classes.attributes.filter(
      x => (x.ident === 'att.global')
    )[0].classes.atts.filter(c => (c === 'att.global.linking'))[0]).toExist()
  })

  it('should handle REMOVE_MEMBERSHIP_TO_CLASS', () => {
    customJSON = JSON.parse(customization)
    localJSON = JSON.parse(localsource)
    const firstState = romajsApp({
      odd: {
        customization: { isFetching: false, json: customJSON },
        localsource: { isFetching: false, json: localJSON }
      },
      selectedOdd: ''
    }, {
      type: 'ADD_MEMBERSHIP_TO_CLASS',
      member: 'att.global',
      className: 'att.placement',
      classType: 'atts'
    })
    const state = romajsApp(firstState, {
      type: 'REMOVE_MEMBERSHIP_TO_CLASS',
      member: 'att.global',
      className: 'att.placement',
      classType: 'atts'
    })
    expect(state.odd.customization.json.classes.attributes.filter(
      x => (x.ident === 'att.global')
    )[0].classes.atts.filter(c => (c === 'att.placement'))[0]).toNotExist()
  })

  it('should handle CHANGE_CLASS_ATTRIBUTE', () => {
    customJSON = JSON.parse(customization)
    localJSON = JSON.parse(localsource)
    const state = romajsApp({
      odd: {
        customization: { isFetching: false, json: customJSON },
        localsource: { isFetching: false, json: localJSON }
      },
      selectedOdd: ''
    }, {
      type: 'CHANGE_CLASS_ATTRIBUTE',
      className: 'att.global',
      attName: 'n'
    })
    expect(state.odd.customization.json.classes.attributes.filter(
      x => (x.ident === 'att.global')
    )[0].attributes.filter(a => (a.ident === 'n'))[0]
      .mode).toEqual('change')
  })

  it('should handle RESTORE_MEMBERSHIPS_TO_CLASS', () => {
    customJSON = JSON.parse(customization)
    localJSON = JSON.parse(localsource)
    const state = romajsApp({
      odd: {
        customization: { isFetching: false, json: customJSON },
        localsource: { isFetching: false, json: localJSON }
      },
      selectedOdd: ''
    }, {
      type: 'RESTORE_MEMBERSHIPS_TO_CLASS',
      className: 'att.global.analytic',
      classType: 'attributes'
    })
    expect(state.odd.customization.json.classes.attributes.filter(
      x => (x.ident === 'att.global')
    )[0].classes.atts.filter(c => (c === 'att.global.analytic'))[0]).toExist()
  })

  it('should handle CLEAR_MEMBERSHIPS_TO_CLASS', () => {
    customJSON = JSON.parse(customization)
    localJSON = JSON.parse(localsource)
    const firstState = romajsApp({
      odd: {
        customization: { isFetching: false, json: customJSON },
        localsource: { isFetching: false, json: localJSON }
      },
      selectedOdd: ''
    }, {
      type: 'RESTORE_MEMBERSHIPS_TO_CLASS',
      className: 'att.global.analytic',
      classType: 'attributes'
    })
    const state = romajsApp(firstState, {
      type: 'CLEAR_MEMBERSHIPS_TO_CLASS',
      className: 'att.global.analytic',
      classType: 'attributes'
    })
    expect(state.odd.customization.json.classes.attributes.filter(
      x => (x.ident === 'att.global')
    )[0].classes.atts.filter(c => (c === 'att.global.analytic'))[0]).toNotExist()
  })

  it('should handle CREATE_NEW_CLASS (attributes)', () => {
    customJSON = JSON.parse(customization)
    localJSON = JSON.parse(localsource)
    const state = romajsApp({
      odd: {
        customization: { isFetching: false, json: customJSON },
        localsource: { isFetching: false, json: localJSON }
      },
      selectedOdd: ''
    }, {
      type: 'CREATE_NEW_CLASS',
      name: 'att.newClass',
      module: 'core',
      classType: 'attributes'
    })
    expect(state.odd.customization.json.classes.attributes.filter(
      x => (x.ident === 'att.newClass')
    )[0]).toExist()
  })

  it('should handle CREATE_NEW_CLASS (model)', () => {
    customJSON = JSON.parse(customization)
    localJSON = JSON.parse(localsource)
    const state = romajsApp({
      odd: {
        customization: { isFetching: false, json: customJSON },
        localsource: { isFetching: false, json: localJSON }
      },
      selectedOdd: ''
    }, {
      type: 'CREATE_NEW_CLASS',
      name: 'model.newClass',
      module: 'core',
      classType: 'models'
    })
    expect(state.odd.customization.json.classes.models.filter(
      x => (x.ident === 'model.newClass')
    )[0]).toExist()
  })

  it('should handle DISCARD_CLASS_CHANGES', () => {
    customJSON = JSON.parse(customization)
    localJSON = JSON.parse(localsource)
    const firstState = romajsApp({
      odd: {
        customization: { isFetching: false, json: customJSON, orig: customJSON },
        localsource: { isFetching: false, json: localJSON }
      },
      selectedOdd: ''
    }, {
      type: 'UPDATE_CLASS_DOCS',
      member: 'att.global',
      docEl: 'desc',
      content: 'new desc',
      index: 0
    })
    const state = romajsApp(firstState, {
      type: 'DISCARD_CLASS_CHANGES',
      name: 'att.global',
      classType: 'attributes'
    })
    expect(firstState.odd.customization.json.classes.attributes.filter(
      x => (x.ident === 'att.global')
    )[0]._changed).toExist()
    expect(state.odd.customization.json.classes.attributes.filter(
      x => (x.ident === 'att.global')
    )[0]._changed).toNotExist()
  })

  it('should handle REVERT_CLASS_TO_SOURCE', () => {
    customJSON = JSON.parse(customization)
    localJSON = JSON.parse(localsource)
    const firstState = romajsApp({
      odd: {
        customization: { isFetching: false, json: customJSON, orig: customJSON },
        localsource: { isFetching: false, json: localJSON }
      },
      selectedOdd: ''
    }, {
      type: 'UPDATE_CLASS_DOCS',
      member: 'att.divLike',
      docEl: 'desc',
      content: 'new desc',
      index: 0
    })
    const state = romajsApp(firstState, {
      type: 'REVERT_CLASS_TO_SOURCE',
      name: 'att.divLike',
      classType: 'attributes'
    })
    expect(firstState.odd.customization.json.classes.attributes.filter(
      x => (x.ident === 'att.divLike')
    )[0]._changed).toExist()
    expect(state.odd.customization.json.classes.attributes.filter(
      x => (x.ident === 'att.divLike')
    )[0].attributes.filter(a => a.ident === 'org')[0]).toExist()
  })
})
