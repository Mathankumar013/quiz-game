const {Sequelize} =  require('sequelize')

const sequelize= new Sequelize("quiz","root","Mathan@123",{
    host:"localhost",
    dialect:"mysql"
})

sequelize.authenticate().then(()=>{
    console.log("connect successfully")
}).catch((error)=>{
    console.log("failed to connect",error)
})
sequelize.sync().then(()=>{
    console.log("successfull")
}).catch((error)=>{
    console.log("failed",error)
})
module.exports=sequelize;