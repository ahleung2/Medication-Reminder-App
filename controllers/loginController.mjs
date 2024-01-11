import mongoDB from "../db/MyDB.mjs"

// controller functions to get requested data from db
const userLogin = async (req, res) => {
    const inputUser = req.body;
    console.log(inputUser);
    if(await mongoDB.authenticate(inputUser)) {
        
        // if authenticate then user in session
        //req.session.inputUser = { inputUser : inputUser.username }
        res.status(200).json ({
            isLoggedIn: true,
            err: null,
            inputUser: inputUser.email
        });
    } else {
        //req.session.inputUser = null;
        res.status(403).json({
            isLoggedIn: false,
            err: "Email and password combination is invalid. Please try again"
        })
    }
} 

export default userLogin;