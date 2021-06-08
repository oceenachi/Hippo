export const numberValidator = (numberString, length) => {
    let lenMatch = true;
    if (length) {
        lenMatch = numberString.length === length;
    }
    let numberRegexp = /^\d{0,}$/;
    let allNumbers = numberRegexp.test(numberString);

    return lenMatch && allNumbers;
}

function getChecker(current) {
    return [{
        dob: true,
        email: true,
        firstName: true,
        gender: true,
        highestQual: true,
        lastName: true,
        maritalStatus: true,
        phone: true,
    }, { otp: true }, {
        businessAddress: true,
        businessName: true,
        businessPhoneNum: true,
        personalAddress: true,
        typeOfBusiness: true,
        lendingPlatform: true

    }, {
        accountNumber: true,
        businessAccountName: true,
        bvn: true,
        bankName: true
    }][current]
}

export const dataValidator = (data, current) => {
    console.log(data, current)
    let checker = getChecker(current);
    let error = {};

    for (let key in checker) {
        if (!data[key]) {
            error[key] = `${key} field is required`
        }
    }

    return error;
}