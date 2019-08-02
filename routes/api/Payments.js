const router = require("express").Router();
const paymentController = require("../../controllers/paymentController");

// Matches with "/api/paymentss"
router.route("/")
  .get(paymentController.findAll)
  .post(paymentController.create);

// Matches with "/api/payments/:id"
router
  .route("/:id")
  .get(paymentController.findById)
  .put(paymentController.update)
  .delete(paymentController.remove);

module.exports = router;
