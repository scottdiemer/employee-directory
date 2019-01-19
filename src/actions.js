import {
  CHANGE_SEARCH_FIELD,
  REQUEST_EMPLOYEE_PENDING,
  REQUEST_EMPLOYEE_SUCCESS,
  REQUEST_EMPLOYEE_FAILED
} from './constrants'

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

export const requestEmployees = () => dispatch => {
  dispatch({ type: REQUEST_EMPLOYEE_PENDING })
  fetch('https://randomuser.me/api/?nat=us&results=20')
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_EMPLOYEE_SUCCESS, payload: data.results }))
    .catch(error => dispatch({ type: REQUEST_EMPLOYEE_FAILED, payload: error }))
}
