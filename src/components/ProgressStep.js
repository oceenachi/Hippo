import React from 'react';
import 'antd/dist/antd.css';
import { Steps, Popover } from 'antd';
import Styled from "styled-components";
import PersonalDetailsForm from "./PersonalDetailsForm"



const { Step } = Steps;

const CustomDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }

  >
    {dot}
  </Popover>
);



const steps = [
  {
    title: 'Personal Details',
    content: <PersonalDetailsForm />,
    description: "Tell us about you"
  },
  {
    title: 'Verification',
    content: "other",
    description: "SMS message with your verification code to your phone number"

  },
  {
    title: 'Business Details',
    content: 'Tell us about your business',
    description: "Tell us about your business"

  },
  {
    title: 'Bank/Business Account Details',
    content: 'Last-content',
    description: "Enter your bank account details"

  },
];


function ProgressStep() {
  const [current, setCurrent] = React.useState(0);


  const onChange = current => {
    console.log('onChange:', current);
    setCurrent(current);
  };

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <StyledProgressSteps>
      <Steps current={current} className="steps-parent" onChange={onChange} >
        {steps.map((item, index) => (
          <>
            <Step key={item.title} title={item.title} description={item.description} className="progress-steps" />
          </>
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>


    </StyledProgressSteps>
  );
};



const StyledProgressSteps = Styled.div`
    width: 80%;
    height: 100%;
    margin: 0 auto;


.ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-icon {
    background: #2657ff;
}
.ant-steps-item:hover{
  color: #2657ff;

}

.ant-steps-item-finish .ant-steps-item-icon {
    border-color: #2657ff;
}
.ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon {
    color: #2657ff;
}
  .progress-steps{
      margin: 4rem 0;
  }
  .steps-content{
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 500px;
  }
  .ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {
    background-color: #2657ff;
}
`;
export default ProgressStep;