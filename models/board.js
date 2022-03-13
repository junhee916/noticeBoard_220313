const mongooses = require('mongoose')

const modelSchema = mongooses.Schema(
    {
        user : {
            type : mongooses.Schema.Types.ObjectId,
            ref : 'user',
            required: true
        },
        board: {
            type : String,
            required : true
        }
    },
    {
        timestamps : true
    }
)

module.exports = mongooses.model('board', modelSchema)