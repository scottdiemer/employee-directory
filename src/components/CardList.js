import React from 'react'
import Card from './Card'

const CardList = ({employees}) => {
  return (
    <div>
      {
        employees.map(employee => {
          return (
            <Card
              key={employee.email}
              name={employee.name.first + ' ' + employee.name.last}
              email={employee.email}
              phone={employee.phone}
              picture={employee.picture.large}
            />
          )
        })
      }
    </div>
  )
}

export default CardList
