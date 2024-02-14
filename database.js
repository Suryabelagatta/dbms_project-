const {
    createPool
}=require('mysql');
const pool=createPool({
    host:"127.0.0.1 ",
    user:"root",
    password:"Surya123$",
    database:"Agri",
    connectionLimit:10
})
pool.query("select * from Agri.DEPT",(err,result,fields)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
})
