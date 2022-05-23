const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//API ROUTES
app.use("/api", apiRoutes);

//HTML ROUTES
app.use("/", htmlRoutes);


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
console.log("Visit page here: http://localhost:3001/");