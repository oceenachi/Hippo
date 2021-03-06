export const formDetails = {
  firstname: {
    name: "firstName",
    label: "First Name",
    rules: [{ required: false, message: "Please input your first name!" }],
    icon: "UserOutlined",
    placeholder: "Enter your first name",
  },
  lastName: {
    name: "lastName",
    label: "Last Name",
    rules: [{ required: false, message: "Please input your last name!" }],
    icon: "UserOutlined",
    placeholder: "Enter your last name",
  },
  email: {
    name: "email",
    label: "Email",
    rules: [{ required: false, message: "Please input your email!" }],
    icon: "MailOutlined",
    placeholder: "Enter your email",
  },
  businessName: {
    name: "businessName",
    label: "Business Name",
    rules: [{ required: false, message: "Please input your business name!" }],
    icon: "BankOutlined",
    placeholder: "Enter your business name",
  },
  phone: {
    name: "phone",
    label: "Phone Number",
    rules: [{ required: false, message: "please input your phone number" }],
    icon: "PhoneOutlined",
    placeholder: "Enter your phone number",
    type: "num",
  },
  otp: {
    name: "otp",
    label: "OTP",
    rules: [{ required: false, message: "Enter OTP" }],
    icon: "MobileOutlined",
    placeholder: "123456",
  },
  bphone: {
    name: "bphone",
    label: "Business Phone Number",
    rules: [
      { required: false, message: "please input your business phone number" },
    ],
    icon: "PhoneOutlined",
    placeholder: "Enter your business number",
    type: "num",
    
  },
  bvn: {
    name: "bvn",
    label: "Bank Verification Number(BVN)",
    rules: [
      { required: false, message: "please input your BVN" },
    ],
    icon: "MobileOutlined",
    placeholder: "Enter your BVN",
  },
  accountNumber: {
    name: "accountNumber",
    label: "Business Account Number",
    rules: [
      { required: false, message: "please input your business account number" },
    ],
    icon: "MobileOutlined",
    placeholder: "Enter your business account number",
  },
  bankName: {
    name: "bankName",
    label: "Choose your Bank",
    rules: [{ required: false, message: "please choose your Bank" }],
    placeholder: "select your bank",
    options: [
      { name: "Access", value: "access" },
      { name: "First Bank", value: "firstBank" },
      { name: "GT Bank", value: "gtb" },
      { name: "Kuda Bank", value: "kuda" },

      { name: "Fidelity", value: "fidelity" },

      { name: "Others", value: "other" },

    ],
  },
  businessAccountName: {
    name: "businessAccountName",
    label: "Business account Name",
    rules: [{ required: false, message: "Please input your business account name!" }],
    icon: "UserOutlined",
    placeholder: "Enter your account name",
  },

  businessPhoneNum: {
    name: "businessPhoneNum",
    label: "Business phone Number",
    rules: [{ required: false, message: "Please input your business phone Number!" }],
    icon: "PhoneOutlined",
    placeholder: "Enter your business phone number",
    type:"num"
  },
  businessAddress: {
    name: "businessAddress",
    label: "Business Address",
    rules: [{ required: false, message: "Please input your business location!" }],
    icon: "UserOutlined",
    placeholder: "Enter your account name",
  },
  personalAddress: {
    name: "personalAddress",
    label: "House Address",
    rules: [{ required: false, message: "Please input your house address!" }],
    icon: "UserOutlined",
    placeholder: "Enter your house address",
  },
  typeOfBusiness: {
    name: "typeOfBusiness",
    label: "Choose business type",
    rules: [{ required: false, message: "please choose your business type" }],
    placeholder: "select your business type",
    options: [
      { name: "E-commerce", value: "ecommerce" },
      { name: "Agriculture", value: "agriculture" },
      { name: "Education", value: "education" },
      { name: "Telecom", value: "telecom" },
      { name: "Marketing", value: "marketing" },
      { name: "Other", value: "other" },
    ],
  },
  lendingPlatform: {
    name: "lendingPlatform",
    label: "Choose other lending platforms you use",
    rules: [{ required: false, message: "please choose other lending platform" }],
    placeholder: "select lending platform",
    options: [
      { name: "Carbon", value: "carbon" },
      { name: "Renmoney", value: "renmoney" },
      { name: "PiggyVest", value: "piggyvest" },
      { name: "CowryWise", value: "cowryWise" },

    ],
  },
  gender: {
    name: "gender",
    label: "Choose your gender",
    rules: [{ required: false, message: "please choose your gender" }],
    placeholder: "select your gender",
    options: [
      { name: "Male", value: "male" },
      { name: "Female", value: "female" },
      { name: "Other", value: "other" },
    ],
  },
  highestQual: {
    name: "highestQual",
    label: "Highest Qualification attained",
    rules: [
      { required: false, message: "please input your highest qualification" },
    ],
    placeholder: "select highest qualification",
    options: [
      { value: "fslc", name: "First School Leaving Certificate" },
      { value: "ssce", name: "SSCE" },
      { value: "ond", name: "OND" },
      { value: "bachelor", name: "Bachelors Degree/HND" },
      { value: "masters", name: "Masters" },
      { value: "phd", name: "PHD" },
      { value: "other", name: "Other" },
    ],
  },
  marital: {
    name: "maritalStatus",
    label: "Marital Status",
    rules: [{ required: false, message: "please state your marital status" }],
    placeholder: "select your marital status",
    options: [
      { value: "single", name: "Single" },
      { value: "married", name: "Married" },
      { value: "divorced", name: "Divorced" },
      { value: "widowed", name: "Widowed" },
    ],
  },
  dob: {
    name: "dob",
    label: "Date of Birth",
    rules: [{ required: false, message: "please input your date of birth" }],
    placeholder: "Date of Birth",
  },
};
