import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardList from '../components/CardList'
import Scroll from '../components/Scroll'
import SearchBox from '../components/SearchBox'
import ErrorBoundry from '../components/ErrorBoundary'
import './App.css'
import { setSearchField, requestEmployees } from '../actions'

const mapStateToProps = state => {
  return {
    searchField: state.searchEmployees.searchField,
    employees: state.requestEmployees.employees,
    isPending: state.requestEmployees.isPending,
    error: state.requestEmployees.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestEmployees: () => dispatch(requestEmployees())
  }
}

class App extends Component {
  componentDidMount () {
    this.props.onRequestEmployees()
  }

  render () {
    const { searchField, onSearchChange, employees, isPending } = this.props
    const filteredEmployees = employees.filter(employee => {
      return employee.email.toLowerCase().includes(searchField.toLowerCase())
    })
    return isPending ? (
      <h1>
        Loading...
      </h1>
    )
      : (
        <div className="tc">
          <h1 className="f2">Employee Directory</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList employees={filteredEmployees} />
            </ErrorBoundry>
          </Scroll>
        </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
