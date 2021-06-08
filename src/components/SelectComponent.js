import React from 'react'
import styled from 'styled-components';
import { Select } from "antd";


export const FormSelectComponent = ({details, data, updateData, error, setError }) => {

    const {name, label, placeholder, options} = details;


    const { Option } = Select;

    function onChange(value) {
        setError({ ...error, [name]: ""});
        updateData({ ...data, [name]: value});
    }

    function onBlur() {
        //console.log('blur');
    }

    function onFocus() {
        //console.log('focus');
    }

    function onSearch(val) {
        //console.log('search:', val);
    }
    return (

        <StyledSelect error={error && error[name]}>
            <label htmlFor={name}>{label}</label>
            <Select
                value={data[name]}
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
                {options.map((item, index) => (
                    <Option key={index} value={item.value}>{item.name}</Option>

                ))}
            </Select>
            { error && error[name] && <p color="red" className="error-alert form-item-explain-error ant-form-item-explain">{error[name]}</p>}

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

label{
    margin-bottom: .5rem;
}

.ant-select-show-search.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border-radius: 6px;
    border: 2px solid #e3e6ee;
    height: 43px;
    padding: 4px 11px;
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