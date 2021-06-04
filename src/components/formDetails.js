export const formDetails = {
    firstname: {
        name: "firstName", 
        label: "First Name", 
        rules: [{ required: true, message: 'Please input your last name!' }], 
        icon: "UserOutlined", 
        placeholder: "Enter your first name"
    },
    lastName: {},
    gender: {
        name: "gender", 
        label: "Choose your gender",
        placeholder: "select your gender", 
        options: [
            {name: "Male", value: "male"},
            {name: "Female", value: "female"},
            {name: "Other", value: "other"}

        ]
    }
}