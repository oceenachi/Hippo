import React from 'react'
import { formDetails } from './formDetails'
import { FormInputComponent } from './InputComponent'

const VerificationForm = () => {
    return (
        <>
            <FormInputComponent details={formDetails.otp}/>
            
        </>
    )
}

export default VerificationForm
