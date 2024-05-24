import axios from "axios";
const backendUrl = `http://localhost:3000/api/v1`;

export const registerUser = async ({ name, email, password, confirmPassword }) => {
  try {
    const reqUrl = `${backendUrl}/auth/register`;
    const response = await axios.post(reqUrl, {
     name,
     email,
     password,
     confirmPassword
    });
    console.log(response.data);
   
  } catch (error) {
    console.log(error);
    alert("Something went wrong!");
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const reqUrl = `${backendUrl}/auth/login`;
    const response = await axios.post(reqUrl, {
      email,
      password,
    });
    console.log(response.data);
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("userId", response.data.userId);
    return response.data.name;
  } catch (error) {
    console.log(error);
    alert("Something went wrong!");
  }
};