import Setting from "../models/Settings.js";

// GET SYSTEM SETTINGS
export const getSettings = async (req, res) => {
  try {
    // Finds the first document, or creates it with defaults if it doesn't exist
    let settings = await Setting.findOne({});
    if (!settings) {
      settings = await Setting.create({});
    }
    res.status(200).json(settings);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch settings", error: error.message });
  }
};

// UPDATE SYSTEM SETTINGS
export const updateSettings = async (req, res) => {
  try {
    const settings = await Setting.findOneAndUpdate(
      {}, 
      req.body, 
      { new: true, upsert: true, runValidators: true }
    );
    res.status(200).json(settings);
  } catch (error) {
    res.status(500).json({ message: "Failed to update settings", error: error.message });
  }
};