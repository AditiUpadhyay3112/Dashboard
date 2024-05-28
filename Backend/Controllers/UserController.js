import {User} from '../Modles/UserSchema.js'
import { catchAsyncError } from '../Modles/catchAsyncError.js';
import ErrorHandler from '../Modles/error.js';
import { sendToken } from '../Modles/jwtToken.js';


// LOGIN
export const Login = catchAsyncError(async (req, res, next) => {
    const {username, password} = req.body;

    if(!username || !password){
        return next(new ErrorHandler("Please Provide Username and Password", 400))
    }

    const user = await User.findOne({username: username});

    console.log(user);

    if(!user){
        return next(new ErrorHandler("user does not exists ", 400));
    }


    if(password !== user.password){
        return next(new ErrorHandler("Please Enter Valid Details LOGIN", 400));
    }


    sendToken(user, 200, res, "User Loged In Successfully!");


})


// LOGED OUT USER
export const Logout = catchAsyncError(async(req, res, next) => {
    res.status(201).cookie("token", "",{
        httpOnly: true,
        expires: new Date(Date.now())
    }).json({
        success: true,
        message: "User Logged Out Successfully!"
    })
})

export const getUser = catchAsyncError(async(req,res) =>{
  return res.status(200).json({success:true, data:req.user});
})