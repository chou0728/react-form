import React, { Component } from 'react';

class FormItem extends Component {
  render() {
    const { name, label, value, handleChange } = this.props;
    return (
      <div className="form-item">
        <label>{label}</label>
        <input type="text" className="form-item__input" name={name} value={value} onChange={handleChange} />
      </div>
    );
  }
}

export default FormItem;
