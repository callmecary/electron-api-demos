import React from 'react';
import ReactDOM from 'react-dom';

const path = require('path')

const fetchBtn = document.getElementById('fetch-data')

fetchBtn.addEventListener('click', (event) => {
  console.log("Button clicked!");
})

class Table extends React.Component {
  render() {
    const listItems = this.props.rows.map((row)=>
      <tr>
        <td>photo.css.{row}</td>
        <td>CSS</td>
        <td>27K</td>
      </tr>
    );
    return (
      <table>
      <thead>
          <tr>
            <th>Name</th>
            <th>Kind</th>
            <th>File Size</th>
          </tr>
      </thead>
      <tbody>{listItems}</tbody>
      </table>
    );
  }
}

const rows = [1,2,3,4,5]
ReactDOM.render(
  <Table rows = {rows}/>,
  document.getElementById('data')
)