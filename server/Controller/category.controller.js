const categoryDataModel = require('../Model/category.model')

exports.getCategory = async(req,res)=>{
    try {
        const category = await categoryDataModel.find();
        res.status(200).json(category)   
    } catch (error) {
        res.status(500).json({message: error.message});
    } 
}