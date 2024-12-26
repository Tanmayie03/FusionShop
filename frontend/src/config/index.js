export const registerFormControls = [
  {
    name: "name",
    label: "name",
    placeholder: "Enter your name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your Password",
    componentType: "input",
    type: "password",
  },
];

export const shoppingViewMenu = [
  {
    id: "all",
    label: "All",
    path: "/shop/listing",
  },
  {
    id: "men's clothing",
    label: "Men",
    path: "/shop/listing?category=men's clothing",
  },
  {
    id: "women's clothing",
    label: "Women",
    path: "/shop/listing?category=women's clothing",
  },
  {
    id: "jewelry",
    label: "Jewelry",
    path: "/shop/listing?category=jewelry",
  },
  {
    id: "electronics",
    label: "Electronics",
    path: "/shop/listing?category=electronics",
  },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
];
