const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, maxlength: 20 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, {
  timestamps: true
})


// setup virtual field of pw confirmation

UserSchema
  .virtual('passwordConfirmation')
  .set(function(passwordConfirmation){
    this._passwordConfirmation = passwordConfirmation
  })

// setup pre validation check for pw confirmation

UserSchema
  .pre('validate', function(next){
    if (this.isModified('password') && this._passwordConfirmation !== this.password){
      this.invalidate('passwordConfirmation', 'PW does not match')
    }
    next()
  })

// setup pre save to hash pw

UserSchema
  .pre('save', function(next){
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(5))
    }
    next()
  })



// setup hash compare pw for login

UserSchema.methods.validatePassword = function(password){
  return bcrypt.compareSync(password, this.password)
}


module.exports = mongoose.model('user', UserSchema)