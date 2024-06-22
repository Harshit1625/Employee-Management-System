import { useEffect, useState } from "react";
import {
  createEmployee,
  getEmployee,
  updateEmployee,
} from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const CreateEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, []);

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }
  function handleLastName(e) {
    setLastName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function validateForm() {
    let valid = true;

    const errorsCopy = { ...errors };
    if (firstName.trim()) {
      errorsCopy.firstName = "";
    } else {
      errorsCopy.firstName = "First name is required";
      valid = false;
    }
    if (lastName.trim()) {
      errorsCopy.lastName = "";
    } else {
      errorsCopy.lastName = "Last name is required";
      valid = false;
    }
    if (email.trim()) {
      errorsCopy.email = "";
    } else {
      errorsCopy.email = "Email is required";
      valid = false;
    }

    setErrors(errorsCopy);

    return valid;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      const employee = { firstName, lastName, email };
      console.log(employee)
      if (id) {
        updateEmployee(id, employee)
          .then((res) => {
            console.log(res.data);
            navigate("/employees");
          })
          .catch((e) => console.log(e));
      } else {
        createEmployee(employee)
          .then((response) => console.log(response), navigate("/"))
          .catch((e) => console.log(e));
      }
    }
  }

  function pageTitle() {
    if (id) {
      return <h2 className="text-center mt-2">Update Employee</h2>;
    } else {
      return <h2 className="text-center mt-2">Add Employee</h2>;
    }
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {pageTitle()}
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">First name :</label>
                <input
                  type="text"
                  placeholder="Enter Your First Name"
                  name="firstName"
                  value={firstName}
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  }`}
                  onChange={(e) => handleFirstName(e)}
                ></input>
                {errors.firstName && (
                  <div className="invalid-feedback">
                    firstName is required !!
                  </div>
                )}
              </div>

              {/* lastname */}

              <div className="form-group mb-2">
                <label className="form-label">Last name :</label>
                <input
                  type="text"
                  placeholder="Enter Your Last Name"
                  name="lastName"
                  value={lastName}
                  className={`form-control ${
                    errors.lastName ? "is-invalid" : ""
                  }`}
                  onChange={(e) => handleLastName(e)}
                ></input>
                {errors.lastName && (
                  <div className="invalid-feedback">
                    lastName is required !!
                  </div>
                )}
              </div>

              {/* email */}

              <div className="form-group mb-2">
                <label className="form-label">Email :</label>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  name="email"
                  value={email}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  onChange={(e) => handleEmail(e)}
                ></input>
                {errors.email && (
                  <div className="invalid-feedback">Email is required !!</div>
                )}
              </div>

              <button className="btn btn-success mb-2" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
