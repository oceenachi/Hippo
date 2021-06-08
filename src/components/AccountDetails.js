import React from 'react'
import { formDetails } from './formDetails'
import { FormInputComponent } from './InputComponent'
import { FormSelectComponent } from './SelectComponent'

const AccountDetails = ({ data, updateData, error, setError}) => {
    return (
        <>
             <FormInputComponent details={formDetails.bvn} data={data} updateData={updateData} error={error} setError={setError} />
              <FormInputComponent details={formDetails.accountNumber} data={data} updateData={updateData} error={error} setError={setError} />
              <FormSelectComponent details={formDetails.bankName} data={data} updateData={updateData} error={error} setError={setError}/>

              <FormInputComponent details={formDetails.businessAccountName} data={data} updateData={updateData} error={error} setError={setError}/>

    
            
        </>
    )
}

export default AccountDetails
