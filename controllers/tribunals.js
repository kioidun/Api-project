const models = require("../models");

function save(req, res) {
    const Tribunals = {
     Name: req.body.Name,
    };

    models.Tribunals
      .create(Tribunals)
      .then((result) => {
        res.status(201).json({
          message: "Tribunal Services created successfully",
          Tribunals: result,
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
  
    models.Tribunals
      .findByPk(id)
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
    models.Tribunals
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