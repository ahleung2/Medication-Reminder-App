import mongoDB from "./../db/MyDB.mjs"

const registerUser = async (req, res) => {
    const inputUser = req.body;
    console.log(inputUser);
    if(await mongoDB.registerUser(inputUser)) {
        res.status(201).json({
            status: "success",
            data:{
                inputUser,
            },
        })
    } else {
        return res.status(404).json({
            status: "fail",
            message: "Account already exists"
        });
    }
};

export default registerUser;