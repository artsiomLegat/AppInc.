const {Schema,model,Types} = require('mongoose');

const schema = new Schema({
    mail: {type: String,required: true, unique: true},
    password:{type: String,required: true},
    links: {type: Types.ObjectID, ref:'Link' }
});
exports.module = model('User',schema);