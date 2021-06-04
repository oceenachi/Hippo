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
      required: true,
      message: 'Please select time!',
    },
  ],
};

const DateComponent = ({details}) => {

    const {name, label} = details;

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
        <DatePicker />
      </Form.Item>
      
     
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
.ant-picker-hover{
    border: 2px solid #2657ff;
}
.ant-picker-focused{
    border: 2px solid #2657ff;
}
.ant-form-inline .ant-form-item > .ant-form-item-label {
    text-align: left !important;
}

.ant-form-inline .ant-form-item > .ant-form-item-label {
    flex: none;
}

@media only screen and  (max-width: 770px){
    width: 100%;
}

`;
export default DateComponent;