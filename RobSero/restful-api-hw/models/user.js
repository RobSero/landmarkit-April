const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 40 },
  username: { type: String, required: true, maxlength: 40, unique: true },
  age: { type: Number, required: true },
  password: { type: String, required: true, maxlength: 40 }
})


UserSchema
  .virtual('passwordConfirmation')
  .set(function(passwordConfirmation){
    this._passwordConfirmation = passwordConfirmation
  })


UserSchema.pre('validate', function(next){
  if (this.isModified('password') && this._passwordConfirmation !== this.password){
    this.invalidate('passwordConfirmation', 'not matching dude!')
  }
  next()
})

UserSchema
  .pre('save', function(next){
    if (this.isModified('password')){
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(6))
    }
    next()
  })




module.exports = mongoose.model('user', UserSchema)