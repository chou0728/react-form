import React, { Component } from 'react';
import FormItem from '../components/FormItem';
import Logo from '../assets/logo.png';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: [
        {
          name: 'userName',
          label: '姓名'
        },
        {
          name: 'phone',
          label: '電話'
        },
        {
          name: 'address',
          label: '住址'
        }
      ],
      userName: '',
      phone: '',
      address: '',
      emptyValue: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.formItmeUpdate = this.formItmeUpdate.bind(this);
  }

  handleSubmit(event) {
    const { userName, phone, address, formData } = this.state;
    event.preventDefault();
    this.setState({ userName: '', phone: '', address: '' });
    this.setState(() => {
      return formData.map(item => (item.value = ''));
    });
    alert(`您的表單已送出: 姓名:${userName} 電話:${phone} 住址:${address}`);
  }

  formItmeUpdate(event) {
    // const { formData } = this.state;
    // const targetName = event.target.name;
    // const targetValue = event.target.value;
    // const currentItem = formData.find(item => item.name === targetName);
    // currentItem.value = targetValue;
    // const newFormData = formData.filter(item => item.name !== targetName);
    // newFormData.push(currentItem);
    // this.setState({ newFormData });
    // console.log(newFormData);
    // this.setState(state => {
    //   const [first, ...rest] = state.formData;
    //   return {
    //     formData: rest
    //   };
    // });
    const targetName = event.target.name;
    const targetValue = event.target.value;
    this.setState({
      [targetName]: targetValue
    });
  }

  render() {
    const { formData, userName, phone, address } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>React Form</h1>
        <img src={Logo} alt="react-logo" />

        {formData.map((formItem, index) => (
          <FormItem key={index} {...formItem} handleChange={this.formItmeUpdate} />
        ))}

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
