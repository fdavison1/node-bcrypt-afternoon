module.exports = {
    usersOnly: (req, res, next) => {
        const {user} = req.session
        if (!user){
            res.status(401).send('please log in')
        }
        next()
    }, 
    adminsOnly: (req, res, next) => {
        const {isAdmin} = req.session.user
        if (!isAdmin){
            res.status(403).send('you are not an admin... yet')
        }
        next()
    }
}