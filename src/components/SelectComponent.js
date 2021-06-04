import React from 'react'
import styled from 'styled-components';
import { Form, Select } from "antd";


export const FormSelectComponent = ({details}) => {

    const {name, label, placeholder, options} = details;

    const { Option } = Select;

    function onChange(value) {
        console.log(`selected ${value}`);
    }

    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }

    function onSearch(val) {
        console.log('search:', val);
    }
    return (

        <StyledSelect>
            <label htmlFor={name}>{label}</label>
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder={placeholder}
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                {options.map((item) => (
                    <Option value={item.value}>{item.name}</Option>

                ))}
            </Select>

        </StyledSelect>

    )
}
const StyledSelect = styled.div`
display: flex;
flex-direction: column;
width: 47%;
margin: 1rem auto 0;

.ant-select {
    width: 100% !important;
}

.ant-select:hover {
    border: 2px solid #e3e6ee;
    border-radius: 6px;

}
label{
    margin-bottom: .5rem;
}

.ant-select-show-search.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border-radius: 6px;
    border: 2px solid #e3e6ee;
    height: 43px;
    padding: 4px 11px;
}

`;