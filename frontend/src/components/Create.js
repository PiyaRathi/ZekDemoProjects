import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      gpin: '',
      name: '',
      designation: '',
      department: '',
      team: '',
      email: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { gpin, name, designation, department, team, email } = this.state;

    axios.post('/members', { gpin, name, designation, department, team, email })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { gpin, name, designation, department, team, email } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD MEMBERS
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Members List</Link></h4>
            <form onSubmit={this.onSubmit}>
            <div class="form-group">
                <label for="isbn">GPIN:</label>
                <input type="text" class="form-control" name="gpin" value={gpin} onChange={this.onChange} placeholder="GPIN" />
              </div>
              <div class="form-group">
                <label for="isbn">Name:</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="title">Designation:</label>
                <input type="text" class="form-control" name="designation" value={designation} onChange={this.onChange} placeholder="Designation" />
              </div>
              <div class="form-group">
                <label for="author">Department:</label>
                <input type="text" class="form-control" name="department" value={department} onChange={this.onChange} placeholder="Department" />
              </div>
              <div class="form-group">
                <label for="published_date">Team:</label>
                <input type="text" class="form-control" name="team" value={team} onChange={this.onChange} placeholder="Team" />
              </div>
              <div class="form-group">
                <label for="publisher">Email:</label>
                <input type="email" class="form-control" name="email" value={email} onChange={this.onChange} placeholder="Email" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;