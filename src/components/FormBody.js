import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { Form, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const FormBody = ({ children, title, description, next, current }) => {
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({});

    // To disable submit button at the beginning.
    useEffect(() => {
        forceUpdate({});
    }, []);

    const onFinish = (values) => {
        console.log("Finish:", values);
    };


    return (
        <StyledDetails>
            <div>
                <h1>{title}</h1>
                <p className="form-description">{description}</p>

            </div>

            <Form form={form} layout="inline" onFinish={onFinish}>
                {children}

                <Form.Item shouldUpdate>
                    {() => (
                        <Button
                            type="primary"
                            onClick={next || onFinish}
                             htmlType="submit"
                      
                        >
                           { current < 3 ? `Proceed to next Step `: "Submit"} {current < 3 ? <ArrowRightOutlined/> : null}
                        </Button>
                    )}
                </Form.Item>
            </Form>
        </StyledDetails>
    );
};

const StyledDetails = Styled.div`
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
    max-width: 70%;
    h1{
        color: rgba(0, 0, 0, 0.85);
        text-align: center;
        margin-top: 3rem;
        font-weight: 600;
    }
    Form{
        padding: 20px 20px 0;
    }
    
    .form-description{
        width: 50%;
        margin: 0 auto;
        text-align: center;
        font-size: 1.6rem;
    }
    .ant-btn-primary, .ant-btn-primary:hover, .ant-btn-primary:focus, .ant-btn-primary:active {
    background: #2657ff;
    color: white;
    font-size: 1.6rem;
    margin: 4.5rem 3rem;
    padding: 12px 0;
    border-radius: 10px;
    height: 100%;
    width: 50%;
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
    @media only screen and (max-width:1026px){
     max-width: 85%;
   

 }
 @media only screen and (max-width:600px){
     max-width: 100%;
    .ant-btn-primary, .ant-btn-primary:hover, .ant-btn-primary:focus, .ant-btn-primary:active {
        width: 100%;
    }

 }

 @media only screen and (max-width:600px){
    h1{
        width: 80%;
        margin: 0 auto;

    }

 }

`;
export default FormBody;
