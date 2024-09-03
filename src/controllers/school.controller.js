const prisma = require('../../prisma/index');


// create school 

exports.regSchool = async(req,res)=>{
    try {
        const { name, slug, email, phone, logo, medium, address, established } = req.body;

           
        const schoolReg = await prisma.school.create({

             data:{
                name,
                email,
                phone,
                established,
                logo,
                medium,
                slug,
                address:{
                    create:address
                }
             },

             include:{
                address:true
            }

        })

            if(!schoolReg){
                return res.status(400).json({
                    message:"data not stored in db"
                })
            }
          
                res.status(200).json({
                    message:"data stored in db",
                    data:schoolReg
                })
            
    } catch (error) {
        console.log("error in regSchool", error)
    }
}


// get school data

exports.getSchoolData = async(_,res)=>{
    try {
        const schoolInfo = await prisma.school.findMany({
           include:{
            address:true
           }
        });

        if(!schoolInfo){
            return res.status(400).json({
                message:"data not fetched"
            })
        }
      
            res.status(200).json({
                message:"data fetched successfully",
                data:schoolInfo
            })
        
    } catch (error) {
        console.log("error in get school data", error);
        
    }
}


// update data

exports.updateSchoolData = async(req,res)=>{
    try {
        const userId = req.params.id;
        // console.log(userId)
        const { name, slug, email, phone, logo, medium, address, established } = req.body;

        const updateSchoolInfo = await prisma.school.update({
          where:{
            id:userId
          },
          data:{
            name,
            email,
            slug,
            phone,
            logo,
            medium,
            established,
            

            address:{
                update:address
            }
          }
        });

        if(!updateSchoolInfo){
            return res.status(400).json({
                message:"data not fetched"
            })
        }
      
            res.status(200).json({
                message:"data updated successfully",
                data:updateSchoolInfo
            })
        
    } catch (error) {
        console.log("error in get school data", error);
        
    }
}


//delete data 

exports.deleteSchool = async(req,res)=>{
    try {
        const userId = req.params.id;
        
        const deletedSchool = await prisma.school.delete({
            where:{
                id:userId
            }
        })
       

        if(!deletedSchool){
            return res.status(400).json({
                message:"data not deleted"
            })
        }
      
            res.status(200).json({
                message:"data deleted successfully",
                data:deletedSchool
            })
        
    } catch (error) {
        console.log("error in get school data", error);
        
    }
}
