const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User')

//@route    POST api/users
//@route    Register user
//@route    Public
router.post('/',[
    check('name','Name is required')
        .not()
        .isEmpty(),
    check('email', 'please include a valid email').isEmail(),
    check('profession','please choose your profession'),
    check('password',
          'Please enter a password with 6 or more charactors'
    ).isLength({ min: 6 })
], 
async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()});
    }

    const { name, email, profession, password } = req.body;

    try{

        // See if user exists

        let user = await User.findOne({ email });

        if(user){
           return res
           .status(400)
           .json({ errors: [{ msg: 'User already exists'}]});
        }

        // Get users gravatar
        
        const avatar = gravatar.url(email, {
            s:'200',
            r:'pg',
            d:'mm'
        })

        user = new User({
            name,
            email,
            profession,
            avatar,
            password
        });

        // Encript password

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        //Return Jsonwebtoken

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(
            payload, 
            config.get('jwtSecret'),
            { expiresIn:360000 },//optional
            (err, token) =>{
                if(err) throw err;
                res.json({ token });
            }
        );
            

    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }


});


module.exports = router;