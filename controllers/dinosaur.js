const fs = require('fs');
const router = require('express').Router();

router.get('/', (req, res) => {
  // Get data from file
  const dinosaurs = fs.readFileSync(__dirname + '/../dinosaurs.json');
  // Parse json object from that data
  const dinoData = JSON.parse(dinosaurs);
  console.log(dinoData);
  res.render('dinosaurs/index', {
    myDinos: dinoData
  });
})

router.post('/', (req, res) => {
  // Read the dino file
  var dinosaurs = fs.readFileSync(__dirname + '/../dinosaurs.json')
  var dinoData = JSON. parse(dinosaurs);

  //Add to the dinosaurs array
  dinoData.push(req.body);
  // Save the dinosaurs to theinosaurs.json file
  fs.writeFileSync(__dirname + '/../dinosaurs.json', JSON.stringify(dinoData));

  res.redirect('/dinosaurs')
})

router.get('/new', (req, res) => {
  res.render('dinosaurs/new')
})

router.get('/edit/:idx', (req, res) => {
  const dinosaurs = fs.readFileSync(__dirname + '/../dinosaurs.json');
  const dinoData = JSON.parse(dinosaurs)
  // Get the idx value from the parameters
  var dinoIndex = parseInt(req.params.idx);
  res.render('dinosaurs/edit', {
    myDino: dinoData[dinoIndex]
  })
})

router.get('/:idx', (req, res) => {
  const dinosaurs = fs.readFileSync(__dirname + '/../dinosaurs.json');
  const dinoData = JSON.parse(dinosaurs)
  // Get the idx value from the parameters
  var dinoIndex = parseInt(req.params.idx);
  res.render('dinosaurs/show', {
    myDino: dinoData[dinoIndex]
  })
})

module.exports = router;
