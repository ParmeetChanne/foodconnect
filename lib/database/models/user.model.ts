import {Schema, models, model} from 'mongoose'

const UserSchema = new Schema({
    //clerkId: To make a connection between our clerk user and our database user.
    clerkId: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    photo: {type: String, required: true}
})

//We either get uri of the existing model OR we create a new model by using the schema

const User = models.User || model('User', UserSchema)

export default User