module.exports = {
    usersOnly: (req, res, next) => {
        const {user} = req.session
        if (!user){
            res.status(401).send('please log in')
        }
        next()
    }
}