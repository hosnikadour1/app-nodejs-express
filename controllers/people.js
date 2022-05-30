import People from "../models/peoplesModel.js";

export const getPeoples = async (req, res) => {
  try {
    const peoples = await People.find();
    console.log(peoples)
    res.status(200).json(peoples);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addPerson = async (req, res) => {
    const content = req
    try {
      const newPerson = new People(content);
      await newPerson.save();
  
      res.status(200).json(newPerson);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };