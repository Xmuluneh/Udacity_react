import React, { Component } from 'react'

export default class ContactList extends Component {
  render() {
    const man = [
      { name: 'Aaron Abrham' },
      {name:'Root GebreMariam'}
    ]
    return (
        <ol>
        {man.map((x) => (
          <li key={x.name}>{x.name}</li>
        ))}
      </ol>
      
    )
  }
}
