import React from 'react';
import ReactDOM from 'react-dom';

const path = require('path')

const fetchBtn = document.getElementById('fetch-data')

fetchBtn.addEventListener('click', (event) => {
  const modalPath = path.join('file://', __dirname, '../../sections/channels/channel.html')
})

class MyRow extends React.Component {
  render() {
    return (
            <tr>
                <td>photon.css</td>
                <td>CSS</td>
                <td>27K</td>
            </tr>
    );
  }
}

ReactDOM.render(
  <MyRow />,
  document.getElementById('data-rows')
);
