import React, { Component } from 'react';
// import FormItem from '../components/FormItem';
import Logo from '../assets/logo.png';

const INITIAL_STATE = {
  userName: '',
  phone: '',
  address: ''
};
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formItmeUpdate = this.formItmeUpdate.bind(this);
  }

  handleSubmit(event) {
    const { userName, phone, address } = this.state;
    event.preventDefault();
    this.setState({ ...INITIAL_STATE });
    alert(`您的表單已送出: 姓名:${userName} 電話:${phone} 住址:${address}`);
  }

  formItmeUpdate(event) {
    const targetName = event.target.name;
    const targetValue = event.target.value;
    this.setState({
      [targetName]: targetValue
    });
  }

  render() {
    const { userName, phone, address } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>React Form</h1>
        <img src={Logo} alt="react-logo" />
        <div className="form-item" onSubmit={this.handleSubmit}>
          <label>姓名</label>
          <input type="text" className="form-item__input" name="userName" value={userName} onChange={this.formItmeUpdate} />
        </div>
        <div className="form-item">
          <label>電話</label>
          <input type="text" className="form-item__input" name="phone" value={phone} onChange={this.formItmeUpdate} />
        </div>
        <div className="form-item">
          <label>地址</label>
          <input type="text" className="form-item__input" name="address" value={address} onChange={this.formItmeUpdate} />
        </div>
        <div className="form-item">
          <input type="submit" value="Submit" className="form-item__submit" height="60" />
        </div>
        <div className="show-area">
          姓名: {userName} <br />
          電話: {phone} <br />
          地址: {address} <br />
        </div>
      </form>
    );
  }
}

export default Form;

//利用JSX綁定的事件為合成事件(synthetic event)
//參考: https://reactjs.org/docs/forms.html
