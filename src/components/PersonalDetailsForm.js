import React, { useState, useEffect } from 'react';
import Styled from "styled-components";
import { Form, Button } from "antd";
import { UserOutlined, ArrowRightOutlined } from '@ant-design/icons';
import {FormInputComponent} from './InputComponent';
import {FormSelectComponent} from "./SelectComponent";
import { formDetails } from './formDetails';




const PersonalDetailsForm = () => {
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({});

    // To disable submit button at the beginning.
    useEffect(() => {
        forceUpdate({});
    }, []);

    const onFinish = (values: any) => {
        console.log('Finish:', values);
    };

    return (
        <StyledDetails>
            <h1>
            Tell us about you
            </h1>
            <Form form={form} layout="inline" onFinish={onFinish}>
              <FormInputComponent details={formDetails.firstname}/>
              <FormInputComponent details={formDetails.firstname}/>
   
              <FormSelectComponent details={formDetails.gender} />
              <FormSelectComponent details={formDetails.gender} />
         
              <FormInputComponent details={formDetails.firstname}/>
              <FormInputComponent details={formDetails.firstname}/>
              <FormInputComponent details={formDetails.firstname}/>
              <FormInputComponent details={formDetails.firstname}/>


                <Form.Item shouldUpdate>
                    {() => (
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={
                                !form.isFieldsTouched(true) ||
                                !!form.getFieldsError().filter(({ errors }) => errors.length).length
                            }
                        >
                            Proceed to next Step <ArrowRightOutlined />
                        </Button>
                    )}
                </Form.Item>
            </Form>
        </StyledDetails>
    );
};


const StyledDetails = Styled.div`
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
    min-width: 70%;
    width: 60%;
    h1{
        color: rgba(0, 0, 0, 0.85);
        text-align: center;
        margin-top: 3rem;
        font-weight: 600;
    }
    Form{
        padding: 20px;
    }
    .ant-btn-primary[disabled], .ant-btn-primary[disabled]:hover, .ant-btn-primary[disabled]:focus, .ant-btn-primary[disabled]:active {
    background: #2657ff;
    color: white;
    width: 100%;
    font-size: 1.6rem;
    margin: 4.5rem 3rem;
    padding: 12px 0;
    border-radius: 10px;
    height: 100%;
    width: 70%;
    }
.ant-form-item-control-input-content {
    flex: auto;
    display: flex;
    max-width: 100%;
    justify-content: center;
}
    .ant-form-inline .ant-form-item {
        width: 100%;
    }

`;
export default PersonalDetailsForm;
