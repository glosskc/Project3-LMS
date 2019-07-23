var mongoose = required('mongoose');

var Schema = mongoose.Schema;

var taskSchema = new Schema ({
    _clientId: {
        type: Schema.Types.ObjectId,
        ref: "Client"
    },
    taskName: {
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

var Task = mongoose.model("Task", taskSchema);

module.exports = Task;