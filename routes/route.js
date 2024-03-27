

let express=require('express')
const router=express.Router()
const eventController=require('../controller/eventContoller')


router.post("/events/find",eventController.eventsStore)
router.post("/addEvent",eventController.eventsAdd)


module.exports=router