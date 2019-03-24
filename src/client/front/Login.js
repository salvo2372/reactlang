import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos:[{id:1, emailTodo: "scolarosalvatore@gmail.com", passwordTodo: "serragli"},{id:1, emailTodo: "scolaros72@virgilio.it", passwordTodo: "serragli1118"}],
      emailValue: '',
      passwordValue : '',
      yearExperiences : ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    if (event.target.name === 'emailValue')
      this.setState({emailValue:event.target.value});
    if (event.target.name === 'passwordValue')
      this.setState({passwordValue:event.target.value});
      if (event.target.name === 'yearExperiences')
        this.setState({yearExperiences:event.target.value});
  }
  handleSubmit(event){
    alert('A password and email was submitted: ' + this.state.emailValue + ' ' + this.state.passwordValue + ' ' +this.state.yearExperiences);
    alert('' + this.state.todos["0"].emailTodo);
    this.simpleHttpRequest();
    event.preventDefault();
  }
  simpleHttpRequest() {
    const email = this.state.emailValue;
    const password = this.state.password;
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>
                 Email:
                 <input type="email" className="form-control" id="exampleInputEmail1" name="emailValue" value={this.state.value} onChange={this.handleChange} />
              </label>
            </div>
            <div className="form-group">
              <label>
                 Password :
                 <input type="password" className="form-control" id="exampleInputPassword1" name="passwordValue" value={this.state.value} onChange={this.handleChange} />
              </label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
         </form>
          </div>
        </div>
      </div>
    )
  }
}
export default Login;

/* A fake authentication function */
export const fakeAuth = {

  isAuthenticated: false,
  authenticate(cb) {console.log(cb);
    this.isAuthenticated = true
     setTimeout(cb, 100)
  },
}
