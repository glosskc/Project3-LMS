const router = require("express").Router();
const AppointmentController = require("../../controllers/AppointmentController");

// Matches with "/api/books"
router.route("/")
  .get(AppointmentController.findAll)
  .post(AppointmentController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(AppointmentController.findById)
  .put(AppointmentController.update)
  .delete(AppointmentController.remove);

module.exports = router;
