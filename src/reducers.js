import {
  CHANGE_SEARCH_FIELD,
  REQUEST_EMPLOYEE_PENDING,
  REQUEST_EMPLOYEE_SUCCESS,
  REQUEST_EMPLOYEE_FAILED
} from './constrants'

const initialStateSearch = {
  searchField: ''
}

export const searchEmployees = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload })
    default:
      return state
  }
}

const initialStateEmployees = {
  isPending: false,
  employees: [],
  error: ''
}

export const requestEmployees = (state = initialStateEmployees, action = {}) => {
  switch (action.type) {
    case REQUEST_EMPLOYEE_PENDING:
      return Object.assign({}, state, { isPending: true })
    case REQUEST_EMPLOYEE_SUCCESS:
      return Object.assign({}, state, { employees: action.payload, isPending: false })
    case REQUEST_EMPLOYEE_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false })
    default:
      return state
  }
}
