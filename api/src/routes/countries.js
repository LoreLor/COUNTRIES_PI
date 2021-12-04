const {Router} = require('express')
const {Op} = require('sequelize');
const router  = Router();
const {Country, Activity} = require('../db');



router.get('/', async (req, res, next ) => {
    try{
    const {name}= req.query;

    let countries;
    if(name){
        countries= await Country.findAll({
            where:{
                name: {
                    [Op.iLike]:`%${name}%`
                    
                }},
            include: Activity
        })
    }else{
        countries= await Country.findAll({
            include: Activity,
        })
    }
    return res.send(countries)
}catch(err){
    next(err)
}
    
})

// router.get('/', async (req, res, next) => {
//     const {name}= req.query;

//     try{
//         if(!name){
//             const allCountries = await Country.findAll({
//                 include: Activity
//             })
//             res.status(200).json(allCountries)
//         }
//         else{
//             const oneCountry= await Country.findAll({
//                 where:{
//                     name: {
//                         // [Op.iLike]:`%${name}%`
//                         //insensitive case y me incluye name que contiene el input que ingreso
//                     }},
//                 include: Activity
//             })
//             res.status(200).json(oneCountry)
//         }
//     }catch(err){
//         next(err)
//     }
// });

router.get('/:id', async(req, res) => {
    const {id} = req.params;
    
    try{  
         const countryDetail= await Country.findOne({
            where:{
                id: id.toUpperCase()
            },
            include: Activity
        })
            return res.status(200).json(countryDetail);
    }catch(err){
        res.status(500).json({msg: err})
    }
});

module.exports = router;
