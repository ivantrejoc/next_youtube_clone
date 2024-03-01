const { Router } = require("express");
const {
  createUser,
  getUsers,
  getUserById,
  login
} = require("../controllers/userControllers");

const router = Router();

//Controler crear user:
router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    await createUser(name, email, password);
    res.status(201).json("USER CREATED");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Obtener todos los users:
router.get("/", async (req, res) => {
  try {
    const users = await getUsers();
    console.log("ESTOY RESPONDIENDO AL GET DE TODOS LOS USERS");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Obtener login:
router.get("/login", async (req, res) => {
  
  try {
    const { email, password } = req.query;
    if (!email || !password) return res.status(400).send("faltan datos");
    const user = await login(email);
    console.log("ESTOY RESPONDIENDO A LOGIN", user);
    if (!user) return res.status(404).send("Usuario no encontrado"); // si no lo encuentra arroja error

    return user.dataValues.password === password
      ? res.status(200).json({ access: true, user }) // si lo encuentra valida que el password es correcto y otorga acceso
      : res.status(403).send("Contraseña incorrecta"); // si el password es inválido arroja error
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
