const TempDataModel = require('../Model/clone.model');

// exports.findData = async (req,res)=>{
//     try {
//         await TempDataModel.find().then((data)=>{
//             // console.log(data);
//             res.send(data);

            
//         })
//     } catch (error) {
//         res.status(404).send(error);
//         console.log(error);
        
//     }
// };

exports.findData = async (req, res) => {
 
      const products = await TempDataModel.find({uniqueID : req.params.cid});
      res.status(200).json(products);
    // } catch (err) {
    //   res.status(500).json({ message: err.message });
    // }
  };


  exports.signUp = async (req, res) => {
    // try {
      const { id,hotelName,location } =
        req.body;
      console.log(id,hotelName,location);
  
    
      // Create a new user
      const newUser = new TempDataModel({
        id,
        hotelName,
        location
      });
  
      // Save the new user to the database
      await newUser.save();
      res.status(201).json({ message: "User registered successfully" });

  };