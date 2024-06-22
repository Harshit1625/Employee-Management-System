import axios from "axios";

const baseURL = "http://localhost:8080/api/employees";

export const listAllEmployees = () => {
  return axios.get(baseURL);
};

export const createEmployee = (employee) => {
  return axios.post(baseURL, employee);
};

export const getEmployee = (employeeId) => {
  return axios.get(baseURL + "/" + employeeId);
};

export const updateEmployee = (employeeId, employee) => {
  return axios.put(baseURL + "/" + employeeId, employee);
};

export const deleteEmployee = (employeeId) => {
  return axios.delete(baseURL + "/" + employeeId);
};
