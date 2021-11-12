const {Router} = require ('express');
const router = Router();
const {Activity, Country} = require('../db');


router.post('/', async(req, res) => {
    const {name, difficulty, duration, season, countries} = req.body;

    const newActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season,
        countries
    })

    await newActivity.addCountries(countries);

    const foundActivity = await Activity.findOne({
        where:{
            name: name
        },

        include: {
             Country
        }
    })
    return res.status(200).json(foundActivity)
})

router.get('/', async(req,res) =>{
    
    const activitiesCreated = await Activity.findAll()
    res.status(200).json(activitiesCreated)
})

module.exports = router;