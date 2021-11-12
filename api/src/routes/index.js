const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const authCountries = require('./countries.js');
const authActivities = require('./activities.js')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter)
router.use('/countries', authCountries);
router.use('/activities', authActivities)


module.exports = router;
