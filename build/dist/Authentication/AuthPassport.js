"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
passport_1.default.use(new FacebookStrategy({
    clientID: `${process.env.FACEBOOK_CLIENT_ID}`,
    clientSecret: `${process.env.FACEBOOK_CLIENT_SECRET}`,
    callbackURL: "/auth/facebook/callback"
}, function (_, __, profile, cb) {
    console.log(profile);
    cb(null, profile);
}));
passport_1.default.use(new GoogleStrategy({
    clientID: `${process.env.GOOGLE_CLIENT_ID}`,
    clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
    callbackURL: "auth/google/callback"
}, function (_, __, profile, cb) {
    console.log(profile);
    cb(null, profile);
}));
exports.default = passport_1.default;
