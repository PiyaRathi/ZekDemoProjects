import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      members: []
    };
  }

  componentDidMount() {
    axios.get('/members')
      .then(res => {
        this.setState({ members: res.data });
        console.log(this.state.members);
      });
  }

  render() {
    return (      
      <div class="container">
        <div dangerouslySetInnerHTML={{ __html: "<iframe src='https://www.youtube.com/embed/cWDJoK8zw58' />"}} />
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
            MEMBERS LIST
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>Add Member</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Gpin</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {this.state.members.map(c =>
                  <tr>
                    <td><Link to={`/show/${c.gpin}`}>{c.gpin}</Link></td>
                    <td>{c.name}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;