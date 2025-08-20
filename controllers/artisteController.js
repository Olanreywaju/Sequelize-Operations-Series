//Import Model
const Artiste = require('../models/artiste');
const artisteModel = require ('../models/artiste');


//POST: Create an artiste
exports.createArtiste = async (req, res) => {
    try {
        //Extract the neccesary fields frm th request body
        const {name, gender, genre, is_married, country, record_label}=req.body;

        //Create a new instance of the model and save to the db automatically
        const newArtiste = await artisteModel.create({
            name,
            gender,
            genre,
            is_married,
            country,
            record_label
        });
//Send a success response
        res.status(201).json({
            message: 'Created successfully',
            data: newArtiste
        })

    } catch (error) {
      res.status(500).json({
        message: error.message
      })  
    }
};


//READ: Get all artiste
exports.getAllArtiste = async (req, res) => {
  try {
    //Find all artiste in the db
    const allArtistes = await artisteModel.findAll();
    //Send a success respose
    res.status(200).json({
      message: 'All Artistes in our database',
      data: allArtistes
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  } 
};


//Get one Artiste
exports.getOneArtiste = async (req, res)=> {
  try {
    //Extract the ID
    const {id} = req.params;
    //Find the Ariste with corresponding ID
    const Artiste = await artisteModel.findByPk(id);
    if(!Artiste) {
      res.status(404).json({
        message: `Artiste with ID:, ${id} not Found`
      })
    } 
    //Send a success messag
    res.status(200).json({
      message: 'Artiste Found',
      data: Artiste
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
};



// Update artiste
exports.updateOneArtiste = async (req, res) => {
  try {
   //Extract the ID
    const {id} = req.params;
        const {name,country,gender,genre,is_married,record_label} = req.body;

    const updateArtiste = await Artiste.update(
  { name:name,
    country:country,
     genre:genre,
    gender:gender,
    genre:genre,
    is_married:is_married,
     record_label:record_label},
  {
    where: {
       id: id,
    },
  },
);
if (updated) {
    const updateArtiste = await Artiste.findOne({where: {id}}) 
    // Send a success message
    return res.status(200).json({
    message:'Updated successfully',
    data: updateArtiste
})
  } return res.status(404).json
({message:"Artiste updated",
data: updateOneArtiste
});
    } catch(error){
        res.status(500).json({
            message:error.message
        })
      
    }
};


//Delete Artiste
exports.deleteOneArtiste = async (req, res) => {
  try {
    //Extract the ID
    const { id } = req.params;
    //Find the Artiste with corresponding ID
    const deleteArtiste = await Artiste.destroy({
      where: {
        id: id},
      });

    if (deleteArtiste) {
      return res.status(400).json({
        message: `Artiste not deleted`,
        data: deleteArtiste
      });
    } 
    //Send a success message
    res.status(200).json({
      message: 'Artiste successfully deleted',
      data: deleteArtiste
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
