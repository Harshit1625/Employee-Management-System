import { useEffect, useState } from "react";
import { deleteEmployee, listAllEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {
  const [allEmployees, setAllEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, []);

  function getAllEmployees() {
    listAllEmployees()
      .then((response) => {
        setAllEmployees(response.data);
      })
      .catch((e) => console.log(e));
  }

  function HandleAddEmployee() {
    navigate("/add-employee");
  }

  function handleUpdate(id) {
    navigate(`/update-employee/${id}`);
  }

  function handleDelete(id) {
    deleteEmployee(id)
      .then((res) => {
        console.log(res.data);
        getAllEmployees();
      })
      .error((e) => console.log(e));
  }

  return (
    <div className="container">
      <h2 className="text-center p-3">List Of Employees</h2>
      <button className="btn btn-primary mb-2" onClick={HandleAddEmployee}>
        Add Employee
      </button>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allEmployees.map((employee) => (
            <tr key={employee.id}>
              <th>{employee.id}</th>
              <th>{employee.firstName}</th>
              <th>{employee.email}</th>
              <th>{employee.lastName}</th>
              <th>
                <button
                  className="text-white mx-2 btn btn-info"
                  onClick={() => handleUpdate(employee.id)}
                >
                  Update
                </button>
                <button
                  className="text-white btn btn-danger"
                  onClick={() => handleDelete(employee.id)}
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
