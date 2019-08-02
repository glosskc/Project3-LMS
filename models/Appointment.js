const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appointmentSchema = new Schema ({
    _clientId: {
        type: Schema.Types.ObjectId,
        ref: "Client"
    },
    title: {
        type: String
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date,
        default: Date.now
    },
    location: {
        type: String,
        required: true
    },
    notes: {
        type: String
    }
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;