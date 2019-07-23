var mongoose = required('mongoose');

var Schema = mongoose.Schema;

var clientSchema = new Schema ({
    clientName: {
        type: String,
        required: true
    },
    taskName: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    phone: { 
        type: String,
        required: true
    }, 
    address: {
        type: String,
        required: true
    },
    notes: {
        type: String
    }
});

var Client = mongoose.model("Client", clientSchema);

module.exports = Client;