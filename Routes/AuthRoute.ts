import  Express from "express";
import Passport from "../Authentication/AuthPassport";
import passport from 'passport';

import { login, LoginWithFacebook, LoginWithGoogle } from "../Authentication/Login";
import { signUp } from "../Authentication/Signup";

const router=Express.Router();

router.post('/login',login);

router.post('/signup',signUp);

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/facebook/',passport.authenticate('facebook'))

router.get('/google/callback', Passport.authenticate('google', { failureRedirect: 'api/users', session: false }),LoginWithGoogle)

router.get('/facebook/callback',Passport.authenticate('facebook'),LoginWithFacebook)

export default router;