const { Router } = require('express')
const router = Router()
const jwt = require('jsonwebtoken')
const { User } = require('../db')
const zodMiddleWare = require('../middlewares/zodmiddleware')
require('dotenv').config();

router.post('/signup', zodMiddleWare, async (req, res) => {
    try {
        const {name, username, password} = req.body;
        const existingUser = await User.findOne({
            username
        })

        if (existingUser) {
            return res.status(409).json({
                msg: 'User alraedy exist'
            })
        }

        await User.create({
            name,
            username,
            password
        })

        const token = jwt.sign({ username }, process.env.JWT_PASSWORD);

        res.json({
            msg: "User created succesfully",
            token
        })

    } catch (e) {
        return res.status(500).json({
            msg: "Internal Server Error"
        })
    }

})


router.post('/signin', zodMiddleWare, async (req, res)=>{
    try{
        const {username, password} = req.body;

        const existingUser = await User.findOne({
            username,
            password
        })
        
        if (!existingUser) {
            return res.status(409).json({
                msg: 'username or password is wrong'
            })
        }
        
        const token = jwt.sign({ username }, process.env.JWT_PASSWORD);
        
        res.json({
            msg: "User logged in successfully succesfully",
            token
        })

    }catch(e){
        return res.status(500).json({
            msg: "internal server error"
        })
    }
        
})

module.exports = router