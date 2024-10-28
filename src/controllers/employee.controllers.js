import Employee from "../models/employee.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config.js";

export const createEmployee = async (req, res) => {
  const { name, email, password } = req.body;
  const employeeFound = await Employee.findOne({
    emai: email,
  });

  if (employeeFound)
    return res.status(400).json({ message: "The email already exists" });
  const newEmployee = new Employee({ name, email, password });
  try {
    newEmployee.password = await bcrypt.hash(password, 10);
    const EmployeeSaved = await newEmployee.save();
    return res.send(EmployeeSaved);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

export const loginEmployee = async (req, res) => {
  try {
    const { email, password } = req.body;
    const employee = await Employee.findOne({ email });

    if (!employee)
      return res.status(400).json({ message: "Usuario no encontrado" });
    const matchPassword = await bcrypt.compare(password, employee.password);

    if (!matchPassword)
      return res
        .status(401)
        .json({ token: null, message: "Contraseña invalida" });

    const token = jwt.sign(
      { _id: employee._id, email: employee.email, name: employee.name },
      SECRET_KEY
      // {
      //   expiresIn: "1d",
      // }
    );
    return res.json({
      token,
      employee: {
        name: employee.name,
        email: employee.email,
        _id: employee._id,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "A ocurrido un error inesperado" });
  }
};

export const getEmployees = async (req, res) => {
  return res.json({ employee: req.user });
};
