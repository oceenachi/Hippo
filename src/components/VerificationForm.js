import React from 'react'
import { formDetails } from './formDetails'
import { FormInputComponent } from './InputComponent'

const VerificationForm = ({ data, updateData, error, setError}) => {
    return (
        <>
            <FormInputComponent details={formDetails.otp}  data={data} updateData={updateData} error={error} setError={setError} className="otp-input"/>
            
        </>
    )
}

export default VerificationForm
