import React, { Component } from 'react';
import FormItem from '../components/FormItem';

const initialState = JSON.parse(
  JSON.stringify({
    formData: [
      {
        name: 'userName',
        label: '姓名',
        value: undefined
      },
      {
        name: 'phone',
        label: '電話',
        value: undefined
      },
      {
        name: 'address',
        label: '住址',
        value: undefined
      }
    ],
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
    const { userName, phone, address, formData } = this.state;
    event.preventDefault();
    this.setState({ ...initialState });
    this.setState(() => {
      return formData.map(item => (item.value = ''));
    });
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
    const { formData, userName, phone, address } = this.state;

    return (
      <div className="example-form">
        {formData.map((formItem, index) => (
          <FormItem key={index} {...formItem} handleChange={this.formItmeUpdate} />
        ))}
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
