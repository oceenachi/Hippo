import React from "react";
import "antd/dist/antd.css";
import { Steps } from "antd";
import Styled from "styled-components";
import FormBody from "./FormBody";
import VerificationForm from "./VerificationForm";
import BusinessDetailsForm from "./BusinessDetailsForm";
import AccountDetails from "./AccountDetails";
import PersonalDetails from "./PersonalDetails";

const { Step } = Steps;

function ProgressStep() {
  const [current, setCurrent] = React.useState(0);

  const onChange = (current) => {
    console.log("onChange:", current);
    setCurrent(current);
  };

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: "Personal Details",
      content: (
        <FormBody next={next} description="" title="Tell us about you">
          <PersonalDetails />
        </FormBody>
      ),
      description: "Tell us about you",
    },
    {
      title: "Verification",
      content: (
        <FormBody
          next={next}
          description="We have sent and SMS message with your verification code to your phone number"
          title="Verify Your Phone Number"
        >
          <VerificationForm />
        </FormBody>
      ),
      description: "Verify your phone number",
    },
    {
      title: "Business Details",
      content: (
        <FormBody
          next={next}
          description="Bussiness account Details"
          title="Tell us about your Bank account details"
        >
          <BusinessDetailsForm />
        </FormBody>
      ),
      description: "Tell us about your business",
    },
    {
      title: "Bank/Business Account Details",
      content: (
        <FormBody
          next={next}
          description="Business Account Details"
          title="Tell us about your Bank Account"
        >
          <AccountDetails />
        </FormBody>
      ),
      description: "Enter your bank account details",
    },
  ];

  return (
    <StyledProgressSteps>
      <Steps current={current} className="steps-parent" onChange={onChange}>
        {steps.map((item) => (
          <>
            <Step
              key={item.title}
              title={item.title}
              description={item.description}
              className="progress-steps"
            />
          </>
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>

      {current > 0 ? (
        <button className="form-class-btn" onClick={prev}>
          {" "}
          Go Back
        </button>
      ) : (
        ""
      )}
    </StyledProgressSteps>
  );
}

const StyledProgressSteps = Styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex: 1;

    .form-class-btn{
      text-align: center;
      color: #2657ff;
      background: none;
      border: none;
      font-weight: 700;
      margin: auto;

    }
    .form-class-btn:hover{
      font-weight: 600;
      cursor: pointer;
    }


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
@media only screen and (max-width:770px){
 
  .ant-steps-item-title, .ant-steps-item-description{
    display: none;
  }
}
@media only screen and (max-width: 420px){
  width: 100%;
  .ant-steps {
   
    padding: 0 20px;
}
  .form-description {
    width: 70%;
   
}

}
`;
export default ProgressStep;
