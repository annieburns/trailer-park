import React, { Component } from 'react';
import MovieCarousel from './MovieCarousel.jsx';

const propTypes = {
  currentUser: React.PropTypes.object,
};

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.currentUser.email || '',
      username: '',
      first_name: '',
      last_name: '',
      bio: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
  }
  handleChange(e) {
    const target = e.target;
    const name = target.getAttribute('name');
    const value = target.value;
    const updated = {};
    updated[name] = value;
    this.setState(updated);
  }
  handleSubmit(e) {
    e.preventDefault();
    // >>>> TODO need to submit to the users profile
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>My Profile {this.state.email} </h1>
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            placeholder="Email"
            value={this.state.email}
          />
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            placeholder="User Name"
          />
          <input
            type="text" name="first_name"
            onChange={this.handleChange}
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastName"
            onChange={this.handleChange}
            placeholder="Last Name"
          />
          <input
            type="text"
            name="bio"
            onChange={this.handleChange}
            placeholder="My Bio"
          />
          <input
            type="submit"
            value="Update"
          />
        </form>
        <button onClick={this.signOut}>Logout</button>
        <MovieCarousel />
      </div>
    );
  }
}

UserProfile.propTypes = propTypes;

export default UserProfile;