const router = require("express").Router();
const appointmentRoutes = require("./Appointments");
const clientRoutes = require("./Clients");
const taskRoutes = require("./Tasks");
const userRoutes = require("./Users");


// Book routes
router.use("/appointments", appointmentRoutes);
router.use("/clients", clientRoutes);
router.use("/tasks", taskRoutes);
router.use("/users", userRoutes);

module.exports = router;
