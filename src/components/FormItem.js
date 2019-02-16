import React, { Component } from 'react';

class FormItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  render() {
    const { name, label } = this.props;
    const { handleChange } = this.props;
    return (
      <div className="form-item">
        <label>{label}</label>
        <input type="text" className="form-item__input" name={name} onChange={handleChange} />
      </div>
    );
  }
}

export default FormItem;
