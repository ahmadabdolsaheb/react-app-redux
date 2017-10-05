import express from 'express';
import authenticate from '../middlewares/authenticate';
import commonValidations from '../shared/validations/events';
import eventModel from '../models/events';
import isEmpty from 'lodash/isEmpty';

let router = express.Router();


router.put('/',(req,res) => {
  let {options, _id} = req.body;
  eventModel.findOneAndUpdate({_id:_id},
    {$set:{"options": options}}, {new: true},
      function(err, event){
      if(err){
          res.status(400).json({ error: err });
      }else{
        res.json(event);
      }
  });
});

router.get('', (req, res) => {
  return eventModel.find({}).then(events => {
   res.json({events});
 });
});

router.post('/', authenticate, (req,res) => {
    let { errors, isValid } = commonValidations(req.body);
    if(!isValid) {
      console.log(errors);
      res.status(400).json(errors);
    }
    else {
      let { userName, title, options, email } = req.body;

      //remove comma and seperate each item with its value in an array example options = [['one',1], ['two',2]];
      options = options.replace(/^[ ]+|[ ]+$|[, ]+$/g,'').split(",").map(x => [x.replace(/^[ ]+|[ ]+$/g,'') , Math.floor(Math.random() * 6) + 1 ]);
      var newEvent = new eventModel ({
        username:userName,
        title:title,
        options:options
      });
      newEvent.save( function(err){
        if (err) {
          res.status(500).json({ error: err });
        }else{
          res.status(201).json({ success: true });
        }
      });
    }
  }
);

export default router;
