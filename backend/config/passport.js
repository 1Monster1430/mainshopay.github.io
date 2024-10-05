const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models/User');

module.exports = function(passport) {
    passport.use(new GoogleStrategy({
        clientID: 'GOOGLE_CLIENT_ID',
        clientSecret: 'GOOGLE_CLIENT_SECRET',
        callbackURL: '/auth/google/callback'
    },
    async (token, tokenSecret, profile, done) => {
        let user = await User.findOne({ googleId: profile.id });
        if (!user) {
            user = new User({ googleId: profile.id, name: profile.displayName, email: profile.emails[0].value });
            await user.save();
        }
        done(null, user);
    }));

    passport.use(new FacebookStrategy({
        clientID: 'FACEBOOK_APP_ID',
        clientSecret: 'FACEBOOK_APP_SECRET',
        callbackURL: '/auth/facebook/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
        let user = await User.findOne({ facebookId: profile.id });
        if (!user) {
            user = new User({ facebookId: profile.id, name: profile.displayName });
            await user.save();
        }
        done(null, user);
    }));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });
};
