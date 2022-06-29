import { TextField, Button } from "@mui/material";

import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const Product = () => {
  const handleFormSubmit = (formdata) => {
    console.log("Form submitted!!");
    console.log(formdata);
  };

  const LoginSchema = Yup.object().shape({
    product: Yup.string().required("Required"),
  });
 

  return (
    <div style={{ background: "#eee", height: "100vh" }}>
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h3 className="text-muted text-center">Add New Product</h3>
              <hr />

              <Formik
                initialValues={{ product: "",type: "",color:"",brand:"",price:"",email:"",password:"" }} //specifying initial value for form
                onSubmit={handleFormSubmit} // function to handle form submission
                validationSchema={LoginSchema}
              >
                {({ values, handleChange, handleSubmit, errors,touched }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      sx={{ mt: 3 }}
                      fullWidth
                      label="Product Name"
                      placeholder="product"
                      id="product"
                      value={values.product}
                      onChange={handleChange}
                      error={Boolean(errors.product) && touched.product}
                      helperText={touched.product ? errors.product : ""}
                    />
                    <TextField
                      sx={{ mt: 3 }}
                      fullWidth
                      label="Product Type"
                      placeholder="product"
                      id="type"
                      value={values.type}
                      onChange={handleChange}
                      error={Boolean(errors.type) && touched.type}
                      helperText={touched.type ? errors.type : ""}
                    />
                     <TextField
                      sx={{ mt: 3 }}
                      fullWidth
                      type="Color"
                      label="Color"
                      placeholder="Color"
                      id="color"
                      value={values.color}
                      onChange={handleChange}
                      error={Boolean(errors.color) && touched.color}
                      helperText={touched.color ? errors.color : ""}
                      
                    />

                    <TextField
                      sx={{ mt: 3 }}
                      fullWidth
                      type="Brand"
                      label="Brand"
                      
                      placeholder="Brand"
                      id="brand"
                      value={values.brand}
                      onChange={handleChange}
                      error={Boolean(errors.brand) && touched.brand}
                      helperText={touched.brand ? errors.brand : ""}
                    />
                     <TextField
                      sx={{ mt: 3 }}
                      fullWidth
                      type="Price"
                      label="Price"
                      
                      placeholder="Price"
                      id="price"
                      value={values.price}
                      onChange={handleChange}
                      error={Boolean(errors.price) && touched.price}
                      helperText={touched.price ? errors.price : ""}
                    />
                      <TextField
                      sx={{ mt: 3 }}
                      fullWidth
                      label="Email"
                      placeholder="Email Address"
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                      error={Boolean(errors.email) && touched.email}
                      helperText={touched.email ? errors.email : ""}
                    />
                     <TextField
                      sx={{ mt: 3 }}
                      fullWidth
                      type="password"
                      label="Password"
                      placeholder="Password"
                      id="password"
                      value={values.password}
                      onChange={handleChange}
                      error={Boolean(errors.password) && touched.password}
                      helperText={touched.password ? errors.password : ""}
                    />
                    

                    <Button
                      type="Submit"
                    
                      variant="contained"
                      sx={{ mt: 5 }}
                    >
                      Submit
                    </Button>
                    <Button
                      type="Reset"
                    
                      variant="contained"
                      sx={{ mt: 5, ml:3}}
                      style={{ marginleft:"50%"}}
                    >
                      Reset
                    </Button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Product;
