// eslint-disable-next-line no-unused-vars
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
    const handleSubmit = async (values, { setSubmitting }) => {
        const { name, email, password, address, city, country, pincode, phone } = values;

        try {
            const response = await axios.post(
                "https://cap-backend-1-6zog.onrender.com/api/register",
                {
                    name,
                    email: email.toLowerCase(),
                    password,
                    address,
                    city,
                    country,
                    pincode,
                    phone
                }
            );
            console.log('Response:', response);

            if (response.status === 200) {
                const user = response.data;

                if (user.error) {
                    window.alert("User already exists");
                } else {
                    window.alert("Registration successful.");
                    localStorage.setItem("token", user.token);
                    window.location.href = "/login";
                }
            } else {
                console.error("Failed response:", response.status);
                window.alert(`Failed response: ${response.status}`);
            }
        } catch (error) {
            console.error("Error in registering user:", error);

            if (error.response) {
                // Server responded with a status other than 200 range
                console.error('Error response data:', error.response.data);
                console.error('Error response status:', error.response.status);
                console.error('Error response headers:', error.response.headers);
                window.alert(`Error: ${error.response.data.message || 'Registration failed.'}`);
            } else if (error.request) {
                // Request was made but no response received
                console.error('Error request:', error.request);
                window.alert('No response from server.');
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error message:', error.message);
                window.alert(`Error: ${error.message}`);
            }
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="FormContainer">
            <Formik
                initialValues={{ name: "", email: "", password: "", address: "", city: "", country: "", pincode: "", phone: "" }}
                validate={(values) => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = "Required";
                    }
                    if (!values.email) {
                        errors.email = "Required";
                    }
                    if (!values.password) {
                        errors.password = "Required";
                    }
                    return errors;
                }}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <h2>SignUp</h2>
                        <Field type="text" name="name" placeholder="Enter Your Name" />
                        <ErrorMessage name="name" component="div" className="error" />
                        <Field type="email" name="email" placeholder="Enter Your email" />
                        <ErrorMessage name="email" component="div" className="error" />
                        <Field type="password" name="password" placeholder="Enter Your password" />
                        <ErrorMessage name="password" component="div" className="error" />
                        <Field type="text" name="address" placeholder="Enter Your Address" />
                        <Field type="text" name="city" placeholder="Enter Your City" />
                        <Field type="text" name="country" placeholder="Enter Your Country" />
                        <Field type="text" name="pincode" placeholder="Enter Your Pincode" />
                        <Field type="text" name="phone" placeholder="Enter Your Phone" />
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                          <div className="forgot-password-link">
                            <Link to="/forgotpassword">Forgot Password?</Link>
                        </div>
                     
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Register;