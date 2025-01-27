const models = require("../models");

function save(req, res) {
    const tribunalsServices = {
     Name: req.body.Name,
    TribunalID: req.body.TribunalID
      
    };

  
    models.TribunalServices
      .create(tribunalsServices)
      .then((result) => {
        res.status(201).json({
          message: "Tribunal Services created successfully",
          tribunalsServices: result,
        });
      })
      .catch((error) => {
        res.status(500).json({
          message: "Services not created",
          error: error,
        });
      });
  }
  function show(req, res) {
    const id = req.params.id;
  
    models.TribunalServices
      .findByPk(id, {include:[models.Tribunals]})
      .then((result) => {
          if(result){
              res.status(200).json(result);
          }else{
              res.status(404).json({
                  message:"post not found"
              })
          }
       
      })
      .catch((error) => {
        res.status(500).json({
          message: "something went wrong",
        });
      });
  }

  function index(req, res) {
    models.TribunalServices
      .findAll()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(500).json({
          message: "something went wrong",
        });
      });
  }

  module.exports = {
    save:save,
    show:show,
    index,index
  }