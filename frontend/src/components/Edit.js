import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

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

  onChange = (e) => {
    const state = this.state.member
    state[e.target.name] = e.target.value;
    this.setState({member:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { gpin, name, designation, department, team, email } = this.state.member;

    axios.put('/members/'+this.props.match.params.gpin, { gpin, name, designation, department, team, email })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.gpin)
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT Member
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.member.gpin}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Members List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="gpin">GPIN:</label>
                <input type="text" class="form-control" name="gpin" value={this.state.member.gpin} onChange={this.onChange} placeholder="GPIN" />
              </div>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" name="name" value={this.state.member.name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="title">Designation:</label>
                <input type="text" class="form-control" name="designation" value={this.state.member.designation} onChange={this.onChange} placeholder="Designation" />
              </div>
              <div class="form-group">
                <label for="author">Department:</label>
                <input type="text" class="form-control" name="department" value={this.state.member.department} onChange={this.onChange} placeholder="Department" />
              </div>
              <div class="form-group">
                <label for="published_date">Team:</label>
                <input type="text" class="form-control" name="team" value={this.state.member.team} onChange={this.onChange} placeholder="Team" />
              </div>
              <div class="form-group">
                <label for="description">Email:</label>
                <input type="email" class="form-control" name="email" value={this.state.member.email} onChange={this.onChange} placeholder="Email" />
              </div>
              <button type="submit" class="btn btn-default">Update</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;