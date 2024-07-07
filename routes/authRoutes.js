const express=require('express');
const { registerController,loginController, testController,forgotPasswordController } = require('../controller/authController');
const { requireSignIn, isAdmin } = require('../middleware/authMiddleware');
const router=express.Router();

router.post('/register',registerController);
router.post('/login',loginController);
router.get('/test',requireSignIn,isAdmin,testController);
router.get('/user-auth',requireSignIn,(req,res)=>{
    res.send(200).send({ok:true});
})
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
 });
router.post('/forgot-password',forgotPasswordController)
module.exports=router;