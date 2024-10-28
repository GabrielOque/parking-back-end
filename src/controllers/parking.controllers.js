import Parking from "../models/parking.model.js";

export const newRegister = async (req, res) => {
  try {
    const { plate, checkIn, checkOut, nameVehicle, owner, documentNumber } =
      req.body;

    const employee = req.user._id;
    const newParking = new Parking({
      plate,
      checkIn,
      checkOut,
      nameVehicle,
      owner,
      documentNumber,
      employee,
    });
    if (!newParking)
      return res
        .status(400)
        .json({ message: "No se ha podido registrar el vehículo" });
    const parkingSaved = await newParking.save();
    console.log(parkingSaved);
    return res.status(201).json(parkingSaved);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "A ocurrido un error inesperado" });
  }
};

export const getParkings = async (req, res) => {
  try {
    const parkings = await Parking.find({
      employee: req.user._id,
    });
    const filterParkings = parkings.filter(
      (parking) => parking.status === "ACTIVE"
    );
    return res.json(filterParkings);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "A ocurrido un error inesperado" });
  }
};

export const closeRegister = async (req, res) => {
  try {
    const parking = await Parking.findById(req.params.id);
    if (!parking)
      return res.status(404).json({ message: "Registro no encontrado" });
    parking.checkOut = new Date();
    parking.status = "COMPLETED";
    const parkingUpdated = await parking.save();
    return res.json(parkingUpdated);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "A ocurrido un error inesperado" });
  }
};
