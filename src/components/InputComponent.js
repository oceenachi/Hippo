import React from 'react'
import styled from 'styled-components';
import { Form, Input } from "antd";
import { UserOutlined } from '@ant-design/icons';




export const FormInputComponent = ({ details }) => {

    const { name, label, rules, icon, placeholder } = details;

    return (
        <StyledInput>
            <Form.Item
                className="form-input-item"
                name={name}
                label={label}
                rules={rules}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder={placeholder} />
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
