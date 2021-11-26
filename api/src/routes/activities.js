const {Router} = require ('express');
const router = Router();
const {Activity, Country} = require('../db');


router.post('/', async(req, res) => {
    const {name, difficulty, duration, season, countries} = req.body;

    const newActivity = await Activity.create({
        name: name.charAt(0).toUpperCase()+name.slice(1),
        difficulty,
        duration,
        season,
        countries
    })

    await newActivity.addCountries(countries);

    const foundActivity = await Activity.findAll({
        where:{
            name: name.toUpperCase()
        },

        include: [{
            model: Country,
            attributes:['name']
        }] 
    })
    return res.status(200).json(foundActivity)
})


router.get('/', async(req,res) =>{
    
    const activitiesCreated = await Activity.findAll({
        include: Country
    })
    res.status(200).json(activitiesCreated)
})

module.exports = router;