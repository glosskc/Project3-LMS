const router = require("express").Router();
const appointmentRoutes = require("./Appointments");
const clientRoutes = require("./Clients");
const taskRoutes = require("./Tasks");
const userRoutes = require("./Users");
const authRoutes = require("./authUser");


// Book routes
router.use("/appointments", appointmentRoutes);
router.use("/clients", clientRoutes);
router.use("/tasks", taskRoutes);
router.use("/users", userRoutes);
router.use("/auth", authRoutes);

module.exports = router;
