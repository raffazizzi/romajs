export const UPDATE_ELEMENT_DOCS = 'UPDATE_ELEMENT_DOCS'
export const DELETE_ELEMENT_DOCS = 'DELETE_ELEMENT_DOCS'
export const ADD_ELEMENT_MODEL_CLASS = 'ADD_ELEMENT_MODEL_CLASS'
export const DELETE_ELEMENT_MODEL_CLASS = 'DELETE_ELEMENT_MODEL_CLASS'
export const ADD_ELEMENT_ATTRIBUTE_CLASS = 'ADD_ELEMENT_ATTRIBUTE_CLASS'
export const RESTORE_ELEMENT_ATTRIBUTE_CLASS = 'RESTORE_ELEMENT_ATTRIBUTE_CLASS'
export const DELETE_ELEMENT_ATTRIBUTE_CLASS = 'DELETE_ELEMENT_ATTRIBUTE_CLASS'
export const ADD_ELEMENT_ATTRIBUTE = 'ADD_ELEMENT_ATTRIBUTE'
export const DELETE_ELEMENT_ATTRIBUTE = 'DELETE_ELEMENT_ATTRIBUTE'
export const CHANGE_ELEMENT_ATTRIBUTE = 'CHANGE_ELEMENT_ATTRIBUTE'
export const RESTORE_ELEMENT_ATTRIBUTE = 'RESTORE_ELEMENT_ATTRIBUTE'
export const RESTORE_CLASS_ATTRIBUTE_ON_ELEMENT = 'RESTORE_CLASS_ATTRIBUTE_ON_ELEMENT'
export const RESTORE_CLASS_ATTRIBUTE_DELETED_ON_CLASS = 'RESTORE_CLASS_ATTRIBUTE_DELETED_ON_CLASS'
export const USE_CLASS_DEFAULT = 'USE_CLASS_DEFAULT'
export const DELETE_CLASS_ATTRIBUTE_ON_ELEMENT = 'DELETE_CLASS_ATTRIBUTE_ON_ELEMENT'
export const CHANGE_CLASS_ATTRIBUTE_ON_ELEMENT = 'CHANGE_CLASS_ATTRIBUTE_ON_ELEMENT'
export const UPDATE_CONTENT_MODEL = 'UPDATE_CONTENT_MODEL'
export const RESTORE_ELEMENT_MEMBERSHIPS_TO_CLASS = 'RESTORE_ELEMENT_MEMBERSHIPS_TO_CLASS'
export const CLEAR_ELEMENT_MEMBERSHIPS_TO_CLASS = 'CLEAR_ELEMENT_MEMBERSHIPS_TO_CLASS'
export const CREATE_NEW_ELEMENT = 'CREATE_NEW_ELEMENT'
export const DISCARD_ELEMENT_CHANGES = 'DISCARD_ELEMENT_CHANGES'
export const REVERT_ELEMENT_TO_SOURCE = 'REVERT_ELEMENT_TO_SOURCE'

export function updateContentModel(element, content) {
  return {
    type: UPDATE_CONTENT_MODEL,
    element,
    content
  }
}

export function updateElementDocs(element, docEl, content, index) {
  return {
    type: UPDATE_ELEMENT_DOCS,
    element,
    docEl,
    content,
    index
  }
}

export function deleteElementDocs(element, docEl, index) {
  return {
    type: DELETE_ELEMENT_DOCS,
    element,
    docEl,
    index
  }
}

export function addElementModelClass(element, className) {
  return {
    type: ADD_ELEMENT_MODEL_CLASS,
    element,
    className
  }
}

export function deleteElementModelClass(element, className) {
  return {
    type: DELETE_ELEMENT_MODEL_CLASS,
    element,
    className
  }
}

export function addElementAttribute(element, attribute) {
  return {
    type: ADD_ELEMENT_ATTRIBUTE,
    element,
    attribute
  }
}

export function deleteElementAttribute(element, attribute) {
  return {
    type: DELETE_ELEMENT_ATTRIBUTE,
    element,
    attribute
  }
}

export function restoreElementAttribute(element, attribute) {
  return {
    type: RESTORE_ELEMENT_ATTRIBUTE,
    element,
    attribute
  }
}

export function addElementAttributeClass(element, className) {
  return {
    type: ADD_ELEMENT_ATTRIBUTE_CLASS,
    element,
    className
  }
}

export function deleteElementAttributeClass(element, className) {
  return {
    type: DELETE_ELEMENT_ATTRIBUTE_CLASS,
    element,
    className
  }
}

export function restoreElementAttributeClass(element, className, deletedAttributes) {
  return {
    type: RESTORE_ELEMENT_ATTRIBUTE_CLASS,
    element,
    className,
    deletedAttributes
  }
}

export function restoreClassAttribute(element, attName) {
  return {
    type: RESTORE_CLASS_ATTRIBUTE_ON_ELEMENT,
    element,
    attName
  }
}

export function restoreClassAttributeDeletedOnClass(element, className, attName) {
  return {
    type: RESTORE_CLASS_ATTRIBUTE_DELETED_ON_CLASS,
    element,
    className,
    attName
  }
}

export function useClassDefault(element, attName) {
  return {
    type: USE_CLASS_DEFAULT,
    element,
    attName
  }
}

export function deleteClassAttribute(element, className, attName) {
  return {
    type: DELETE_CLASS_ATTRIBUTE_ON_ELEMENT,
    element,
    className,
    attName
  }
}

export function changeElementAttribute(element, attName) {
  return {
    type: CHANGE_ELEMENT_ATTRIBUTE,
    element,
    attName
  }
}

export function changeClassAttribute(element, className, attName) {
  return {
    type: CHANGE_CLASS_ATTRIBUTE_ON_ELEMENT,
    element,
    className,
    attName
  }
}

export function restoreElementMembershipsToClass(className, classType) {
  return {
    type: RESTORE_ELEMENT_MEMBERSHIPS_TO_CLASS,
    className,
    classType
  }
}

export function clearElementMembershipsToClass(className, classType) {
  return {
    type: CLEAR_ELEMENT_MEMBERSHIPS_TO_CLASS,
    className,
    classType
  }
}

export function createNewElement(name, module, ns) {
  return {
    type: CREATE_NEW_ELEMENT,
    name,
    module,
    ns
  }
}

export function discardChanges(name) {
  return {
    type: DISCARD_ELEMENT_CHANGES,
    name
  }
}

export function revertToSource(name) {
  return {
    type: REVERT_ELEMENT_TO_SOURCE,
    name
  }
}
