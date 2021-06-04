import React from 'react'
import styled from 'styled-components';
import { Form, Input } from "antd";
import * as AntdIcons from '@ant-design/icons';


export const FormInputComponent = ({ details }) => {


    const { name, label, rules, icon, placeholder , type} = details;

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
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

    return (
        <StyledInput>
            <Form.Item
                className="form-input-item"
                name={name}
                label={label}
                rules={rules}
            >
                <Input prefix={<AntdIcon className="site-form-item-icon" />} placeholder={placeholder} addonBefore={type && type === "num" ? prefixSelector : ""}/>
            </Form.Item>

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

@media only screen and  (max-width: 770px){
    width: 100%;
}


`;
