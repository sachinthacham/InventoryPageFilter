import React from 'react';

class MyTable extends React.Component {
  render() {
    return (
      <div>
        <h2>React HTML Table Example</h2>
        <table>
          <thead>
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
              <th>Column 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data 1A</td>
              <td>Data 1B</td>
              <td>Data 1C</td>
            </tr>
            <tr>
              <td>Data 2A</td>
              <td>Data 2B</td>
              <td>Data 2C</td>
            </tr>
            <tr>
              <td>Data 3A</td>
              <td>Data 3B</td>
              <td>Data 3C</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MyTable;
