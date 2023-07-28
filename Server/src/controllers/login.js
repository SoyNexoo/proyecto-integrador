// const allowed = require("../utils/users")
const { User } = require("../DB_connection")

// function login(req, res){

//     const {email, password} = req.query;
//     let access = false
//     allowed.forEach((user) => {
//         if(user.email === email && user.password === password){
//             access = true;
//         }
//     })
//     return res.json({access})
// }

// async function createUser (obj) {
//     try {
//         const newUser = await User.create(obj)
//         return newUser
//     } catch (error) {
//         throw error;
//     }
// }

const login = async (req, res) =>{
    const {email , password} = req.query;
    try {
        res.json(email)
        console.log(password)
        
    } catch (error) {
        console.error(error)
    }
    // if (!email || !password) {
    //     return res.status(400).send("Faltan datos");
    // }

    // try {
    //     const user = await User.findOne({ where: { email: email } });

    //     if (!user) {
    //         return res.status(404).send("Usuario no encontrado");
    //     }

    //     if (password === user.password) {
    //         return res.json({ access: true });
    //     } else {
    //         return res.status(403).send("Contraseña incorrecta");
    //     }
    // } catch (error) {
    //     return res.status(500).send(error.message, {data: "bad request"});
    // }
};



module.exports = login