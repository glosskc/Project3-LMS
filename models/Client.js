const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clientSchema = new Schema ({
    clientName: {
        type: String,
        required: true
    },
    // taskName: {
    //     type: String,
    //     required: true
    // },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: { 
        type: String,
        // required: true
    }, 
    notes: {
        type: String
    }
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;