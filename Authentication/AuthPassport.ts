import passport from 'passport';
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;


passport.use(new FacebookStrategy({
  clientID: `${process.env.FACEBOOK_CLIENT_ID}`,
  clientSecret: `${process.env.FACEBOOK_CLIENT_SECRET}`,
  callbackURL: "/auth/facebook/callback"

  },
 function (_: any, __: any, profile: any, cb: any) {
console.log(profile);

   cb(null,profile)
  }));

passport.use(new GoogleStrategy({
  clientID: `${process.env.GOOGLE_CLIENT_ID as string}`,
  clientSecret: `${process.env.GOOGLE_CLIENT_SECRET as string}`,
  callbackURL: "auth/google/callback"
},
  function (_: any, __: any, profile: any, cb: any) {
    console.log(profile);
    
  cb(null,profile)
  }));

export default passport
