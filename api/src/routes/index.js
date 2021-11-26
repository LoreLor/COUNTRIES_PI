const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const authCountries = require('./countries.js');
const authActivities = require('./activities.js')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter)
router.use('/countries', authCountries);
router.use('/activities', authActivities)


module.exports = router;
