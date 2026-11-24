const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
    id: Number, // This field is now replaced with the auto-increment field
    packageName: String,
    price: Number,
    information: String,
    additionalInfo: String,
    photo: String,
});

// Check if the model already exists, and create it if it doesn't
const Package = mongoose.models.Package || mongoose.model("Package", packageSchema);

module.exports = Package;
