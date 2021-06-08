import React from 'react'
import styled from 'styled-components';
import { Form, Input } from "antd";
import * as AntdIcons from '@ant-design/icons';


export const FormInputComponent = ({ details, data, updateData, form,  error, setError }) => {


    
    const { name, label, rules, icon, placeholder , type} = details;

    const prefixSelector = (
        <Form.Item name="prefix" noStyle >
          <div
            style={{
              width: 60,
            }}
          >
            +234
          </div>
        </Form.Item>
      );


    let AntdIcon = AntdIcons[icon] ;

    function onChange(e) {
        setError({ ...error, [name]: ""});
        updateData({ ...data, [name]: e.target.value});
    }

    return (
        <StyledInput error={error && error[name]}>
            <Form.Item
                className="form-input-item"
                name={name}
                label={label}
                rules={rules}

            >
            
                <Input prefix={<AntdIcon className="site-form-item-icon" />} 
                    placeholder={placeholder} addonBefore={type && type === "num" ? prefixSelector : ""} 
                    onChange={onChange}
                    
                />

            </Form.Item>
            { error && error[name] && <p color="red" className="error-alert form-item-explain-error ant-form-item-explain">{error[name]}</p>}

        </StyledInput>

    )
}

const StyledInput = styled.div`
    width: 47%;
    margin: 0 auto;
    font-weight: 400;
   
.ant-input-affix-wrapper > input.ant-input{
    height: 33px;
}
.ant-row {
    display: flex;
    flex-flow: column wrap;
}
.ant-form-item-label {
   
    text-align: left;
}
.ant-form-item-label > label::after {
    display: none;
}
.ant-input-affix-wrapper {
    border-radius: 6px;
    border: 2px solid #e3e6ee;

}
.ant-form-item-label > label {
    margin-top: 1rem;
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
