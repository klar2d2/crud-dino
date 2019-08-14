// EXpress load in
const fs = require('fs');
const router = require('express').Router();

//Get Data
router.get('/', (req, res) => {
  const cryptids = fs.readFileSync(__dirname + '/../cryptids.json');
  //parse data
  let cryptidsData = JSON.parse(cryptids)
  res.render('cryptids/index', {
    myCryptids: cryptidsData
  })
})

router.post('/', (req, res) => {
  const cryptids = fs.readFileSync(__dirname + '/../cryptids.json')
  let cryptidsData = JSON.parse(cryptids)

  cryptidsData.push(req.body)
  fs.writeFileSync(__dirname + '/../cryptids.json', JSON.stringify(cryptidsData))

  res.redirect('/cryptids')
})

router.get('/new', (req, res) => {

  res.render('cryptids/new')
})

router.get('/edit/:idx', (req, res) => {
  const cryptids = fs.readFileSync(__dirname + '/../cryptids.json')

  let cryptidsData = JSON.parse(cryptids)
  let cryptidsIndex = parseINt(req.params.idx)
  res.render('cryptids/edit', {
    myCryptids: cryptidsData[cryptidsIndex]
  })
})

router.get('/:idx', (req, res) => {
  const cryptids = fs.readFileSync(__dirname + '/../cryptids.json')

  let cryptidsData = JSON.parse(cryptids)
  let cryptidsIndex = parseInt(req.params.idx)
  res.render('cryptids/show', {
    myCryptids: cryptidsData[cryptidsIndex]
  })

})


module.exports = router
