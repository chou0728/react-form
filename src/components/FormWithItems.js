import React, { Component } from 'react';
import FormItem from './FormItem';

const initialState = JSON.parse(
  JSON.stringify({
    formData: [
      {
        name: 'userName',
        label: '姓名',
        value: ''
      },
      {
        name: 'phone',
        label: '電話',
        value: ''
      },
      {
        name: 'address',
        label: '住址',
        value: ''
      }
    ]
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
    const { formData } = this.state;
    event.preventDefault();
    this.setState({ ...initialState });
    this.setState(() => {
      return formData.map(item => (item.value = ''));
    });
    alert(`您的表單已送出!`);
  }

  formItmeUpdate(event, index) {
    const { formData } = this.state;
    const targetValue = event.target.value;
    this.setState({
      formData: formData.map((item, mapIndex) => {
        if (index === mapIndex) {
          return {
            ...item,
            value: targetValue
          };
        } else {
          return item;
        }
      })
    });
  }

  render() {
    const { formData } = this.state;

    return (
      <div className="example-form">
        {formData.map((formItem, index) => (
          <FormItem key={index} {...formItem} handleChange={event => this.formItmeUpdate(event, index)} />
        ))}
        <button className="form-item__submit" onClick={this.handleSubmit}>
          Submit
        </button>
        <div className="show-area">
          {formData.map((formItem, index) => (
            <p key={index}>
              {formItem.label}
              {formItem.value}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default Form;

//利用JSX綁定的事件為合成事件(synthetic event)
//參考: https://reactjs.org/docs/forms.html
