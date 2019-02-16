import React, { Component } from 'react';

const initialState = JSON.parse(
  JSON.stringify({
    userName: '',
    phone: '',
    address: ''
  })
);
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.formItmeUpdate = this.formItmeUpdate.bind(this);
  }

  handleSubmit(event) {
    const { userName, phone, address } = this.state;
    event.preventDefault();
    this.setState({ ...initialState });
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
      <div className="example-form">
        <div className="form-item">
          <label>姓名:</label>
          <input type="text" className="form-item__input" name="userName" value={userName} onChange={this.formItmeUpdate} />
        </div>
        <div className="form-item">
          <label>電話:</label>
          <input type="text" className="form-item__input" name="phone" value={phone} onChange={this.formItmeUpdate} />
        </div>
        <div className="form-item">
          <label>地址:</label>
          <input type="text" className="form-item__input" name="address" value={address} onChange={this.formItmeUpdate} />
        </div>
        <button className="form-item__submit" onClick={this.handleSubmit}>
          Submit
        </button>
        <div className="show-area">
          <p>姓名: {userName}</p>
          <p>電話: {phone}</p>
          <p>地址: {address}</p>
        </div>
      </div>
    );
  }
}

export default Form;

//利用JSX綁定的事件為合成事件(synthetic event)
//參考: https://reactjs.org/docs/forms.html
