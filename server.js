import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./src/app.js";

dotenv.config();

const PORT = process.env.PORT || 5000;


// Database connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("✅ Database Connected");
})
.catch((err) => {
    console.log("❌ DB Error:", err);
    process.exit(1);
});


// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});