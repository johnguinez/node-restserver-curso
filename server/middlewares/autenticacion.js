const jwt = require('jsonwebtoken');

//================================================
// Verificacion de Token
//================================================
let verificaToken = (req, res, next) => {

    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: { message: 'token no válido' }
            });
        }

        req.usuario = decoded.usuario;

        next();

    });

    // res.json({
    //     token: token
    // });

};
// ================================================
// Verificacion de AdminRole
// ================================================
let verificaAdmin_Role = (req, res, next) => {

    let usuario = req.usuario;

    console.log("USUARIO : " + usuario);
    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.json({
            ok: false,
            err: {
                message: 'el usuario no es administrador'
            }
        });
    }
};

module.exports = {
    verificaToken,
    verificaAdmin_Role
};

// module.exports = {
//     verificaToken
// };