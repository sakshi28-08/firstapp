import { Formik } from "formik";
import React from "react";
import Swal from "sweetalert2";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";

const Register = () => {
  const handleFormSubmit = (formdata) => {
    console.log(formdata);

    // 1. address
    // 2. request method
    // 3. data to be sent
    // 4. data format

    fetch("http://localhost:5000/user/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Product Added",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops!!",
          text: "Some Error Occured",
        });
      }
    });
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h3 className="text-muted text-center">Product Added</h3>

          <Formik
            initialValues={{
              Name: "",
              Brand: "",
              RAM: "",
              Camera: "",
              Display: "",
              Storage: "",
              Color:"",
            }}
            onSubmit={handleFormSubmit}
          >
            {({ values, handleSubmit, handleChange }) => (
              <form onSubmit={handleSubmit}>
                <label className="mt-4">Name</label>
                <input
                  className="form-control"
                  placeholder="Name"
                  value={values.Name}
                  id="Name"
                  onChange={handleChange}
                />
                <label className="mt-4">Brand</label>
                <input
                  className="form-control"
                  placeholder="Brand"
                  value={values.Brand}
                  id="Brand"
                  onChange={handleChange}
                />
                <label className="mt-4">RAM</label>
                <input
                  className="form-control"
                  placeholder="Secret RAM"
                  type="RAM"
                  value={values.RAM}
                  id="RAM"
                  onChange={handleChange}
                />
                <label className="mt-4">Camera</label>
                <input
                  className="form-control"
                  placeholder="Secret Camera"
                  type="Camera"
                  value={values.Camera}
                  id="Camera"
                  onChange={handleChange}
                />
                <label className="mt-4">Display</label>
                <input
                  className="form-control"
                  placeholder="Secret Display"
                  type="Display"
                  value={values.Display}
                  id="Display"
                  onChange={handleChange}
                />
                <label className="mt-4">Storage</label>
                <input
                  className="form-control"
                  placeholder="Secret Storage"
                  type="Storage"
                  value={values.Storage}
                  id="Storage"
                  onChange={handleChange}
                />
                <label className="mt-4">Color</label>
                <input
                  className="form-control"
                  placeholder="Secret Color"
                  type="Color"
                  value={values.Color}
                  id="Color"
                  onChange={handleChange}
                />

                 <button className="btn btn-primary mt-5">Submit</button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;
