var passport = require('passport');
var Strategy = require('passport-magic-link').Strategy;


module.exports = function() {
  
  passport.use(new Strategy({
      secret: 'my-secret',
      userFields: ['email'],
      tokenField: 'token',
      verifyUserAfterToken: true
   }, function(user, token) {
     console.log('SEND TOKEN');
     console.log(user);
     console.log(token);
     
     /*
     
      return MailService.sendMail({
       to: user.email,
       token
      })
     */
     
   }, (user) => {
     console.log('FIND USER');
     
     //return User.findOrCreate({email: user.email, name: user.name})
   }))
  
    
  // Configure Passport authenticated session persistence.
  //
  // In order to restore authentication state across HTTP requests, Passport needs
  // to serialize users into and deserialize users out of the session.  In a
  // production-quality application, this would typically be as simple as
  // supplying the user ID when serializing, and querying the user record by ID
  // from the database when deserializing.  However, due to the fact that this
  // example does not have a database, the complete Facebook profile is serialized
  // and deserialized.
  passport.serializeUser(function(user, cb) {
    cb(null, user);
  });

  passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
  });
  
};
