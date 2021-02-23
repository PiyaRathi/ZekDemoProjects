import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      member: {}
    };
  }

  componentDidMount() {
    axios.get('/members/'+this.props.match.params.gpin)
      .then(res => {
        this.setState({ member: res.data });
        console.log(this.state.member);
      });
  }

  delete(gpin){
    console.log(gpin);
    axios.delete('/members/'+gpin)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Members Details
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Members List</Link></h4>
            <dl>
              <dt>GPIN:</dt>
              <dd>{this.state.member.gpin}</dd>
              <dt>Name:</dt>
              <dd>{this.state.member.name}</dd>
              <dt>Designation:</dt>
              <dd>{this.state.member.designation}</dd>
              <dt>Department:</dt>
              <dd>{this.state.member.department}</dd>
              <dt>Team:</dt>
              <dd>{this.state.member.team}</dd>
              <dt>Email:</dt>
              <dd>{this.state.member.email}</dd>
            </dl>
            <Link to={`/edit/${this.state.member.gpin}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.member.gpin)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;