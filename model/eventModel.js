
const { log } = require("console");
let db=require("../data/eventdb")
let util=require('util')
let Query=util.promisify(db.query).bind(db)

const events = {
   
    getAllEvents: (startDateString,endDateString) => {

const query = `SELECT * FROM gyangrove.event_store WHERE STR_TO_DATE(date, '%Y-%m-%d') BETWEEN ? AND ? ORDER BY STR_TO_DATE(date, '%Y-%m-%d') asc;`;
        return Query(query, [startDateString, endDateString]);
       
    },

    countAllEvents: (startDateString, endDateString) => {
       
        return Query(`SELECT COUNT(*) AS total_events FROM gyangrove.event_store WHERE STR_TO_DATE(date, '%Y-%m-%d') BETWEEN ? AND ?;`, [startDateString, endDateString]);
    },

    addEvents:(event_name, city_name, date, time, latitude, longitude)=>{
        return Query('INSERT INTO event_store (event_name, city_name, date, time,latitude,longitude) VALUES (?, ?, ?, ?,?,?);',[event_name, city_name, date, time,latitude,longitude]);
    }   
};

module.exports = events;