const {Schema,model,Types} = require('mongoose');

const schema = new Schema({
    mail: {type: String,required: true, unique: true},
    password:{type: String,required: true},
    links: [{type: Types.ObjectId, ref:'Link' }],
});
exports.module = model('User',schema);