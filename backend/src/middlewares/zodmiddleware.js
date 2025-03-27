const {z} = require('zod')
const UserZod = z.object({
    username: z.string().email(),
    password: z.string().min()
})

async function zodMiddleWare(req, res, next){
    try{

        const { username, password } = req.body;
        const { success } = UserZod.safeParse({ username, password })

        if (!success) {
            return res.status(401).json({
                msg: "Please provide valid data"
            })
        }

        next()

    }catch(e){
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}

module.exports = zodMiddleWare