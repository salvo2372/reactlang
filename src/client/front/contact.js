import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      emailValue: '',
      NameValue : ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  handleChange(event){
    alert(event.target);
    if (event.target.name === 'emailValue')
      this.setState({emailValue:event.target.value});
    if (event.target.name === 'nameValue')
      this.setState({nameValue:event.target.value});
    if (event.target.name === 'textValue')
      this.setState({textValue:event.target.value});
  }
  handleSubmit(event){
    alert('A password and email was submitted: ' + this.state.emailValue + ' ' + this.state.nameValue);
    event.preventDefault();
  }
  render () {
    return (
      <section id="contact">
        <div className="container">
          <div className="well well-sm">
            <h3><strong>Contact Us</strong></h3>
          </div>

        	<div className="row">
          	  <div className="col-md-12">
              <h4><strong>Get in Touch</strong></h4>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="InputValue">
                     Your Name :
                     <input type="text" className="form-control" id="InputName" name="nameValue" value={this.state.value} onChange={this.handleChange} />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="InputEmail">
                     Email:
                     <input type="email" className="form-control" id="InputEmail" name="emailValue" value={this.state.value} onChange={this.handleChange} />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="InputText">
                      Message:
                      <textarea  name="textValue" value={this.state.value} onChange={this.handleChange} />
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
              </div>
            </div>
        </div>
      </section>
    )
  }
}
export default Contact;
