import React from 'react';
import 'antd/dist/antd.css';
import { Form, DatePicker} from 'antd';
import styled from "styled-components";


const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const config = {
  rules: [
    {
      type: 'object',
      required: false,
      message: 'Please select time!',
    },
  ],
};

const DateComponent = ({details, data, updateData, error, setError }) => {

    const {name, label} = details;
  function onChange(e) {
      setError({ ...error, [name]: ""});
      updateData({ ...data, [name]: e.format('YYYY-MM-DD')});
  }

  const onFinish = (fieldsValue) => {
    // Should format date value before submit.
    
    const values = {
      ...fieldsValue,
      'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD')
    };
    console.log('Received values of form: ', values);
  };

  return (
    <StyledDate name="time_related_controls" {...formItemLayout} onFinish={onFinish}>
      <Form.Item name={name} label={label} {...config} className="form-input-dateField">
        <DatePicker onChange={onChange}/>
      </Form.Item>
      { error && error[name] && <p color="red" className="error-alert form-item-explain-error ant-form-item-explain">{error[name]}</p>}
     
    </StyledDate>
  );
};
const StyledDate = styled.div`
width: 47%;
margin: 0 auto;

.form-input-dateField > div > label { 
    display: flex;
    margin-top: .5rem;
}

.ant-row {
    flex-flow: column wrap;
    text-align: left;
}
.ant-picker {
    width: 100%;
    height: 43px;
    border-radius: 6px;

}
.ant-picker:hover, .ant-picker-focused {
    border-color: #40a9ff !important;
    border-width: 2px !important;
}
.ant-form-inline .ant-form-item > .ant-form-item-label {
    text-align: left !important;
}

.ant-form-inline .ant-form-item > .ant-form-item-label {
    flex: none;
}
.ant-select:not(.ant-select-disabled):hover .ant-select-selector {
    border-color: ${({error}) => `${error? '#ff4d4f':  '#40a9ff'} !important`};
    border-right-width: 1px !important;
}
.form-item-explain-error {
    color: #ff4d4f;
}
.ant-form-item-explain {
    clear: both;
    min-height: 24px;
    font-size: 14px;
    line-height: 1.5715;
}
.error-alert.form-item-explain-error.ant-form-item-explain{
    margin-bottom: 0;
}


@media only screen and  (max-width: 770px){
    width: 100%;
}

`;
export default DateComponent;