const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema ({
    _clientId: {
        type: Schema.Types.ObjectId,
        ref: "Client"
    },
    taskTitle: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date,
        default: Date.now
    },
    notes: {
        type: String
    }
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;