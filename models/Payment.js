const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentSchema = new Schema ({
    _clientId: {
        type: Schema.Types.ObjectId,
        ref: "Client"
    },
    cardName: {
        type: String,
        required: true
    },
    cardNumber: {
        type: String,
        required: true
    },
    expDate: {
        type: Date,
        default: Date.now
    },
    cvv: {
        type: Date,
        default: Date.now
    },
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;