import React, { Component } from 'react';

class Content extends Component {
  constructor(){
    super();

    this.state = {
      data:[
        {
          "id":1,
          "name" : "Scolaro Salvatore",
          "age" : 34
        },
        {
          "id":2,
          "name" : "Alacqua Salvatore",
          "age" : 83
        },
        {
          "id":1,
          "name" : "Ullo Carmelo",
          "age" : 65
        },
        {
          "id":1,
          "name" : "Patti Rosario",
          "age" : 67
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <table className="table table-responsive">
          <tbody>
            {this.state.data.map((person, i) => <TableRow key = {i} data
= {person} />)}
          </tbody>
        </table>
      </div>
    );
  }
}

class TableRow extends Component {
     render() {
       return (
         <tr>
           <td>{this.props.data.id}</td>
           <td>{this.props.data.name}</td>
           <td>{this.props.data.age}</td>
         </tr>
      );
    }
}

export default Content;
