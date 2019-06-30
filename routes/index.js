const express = require('express');
const router = express.Router();
const statements = require('../db/statements');
const {query,end} = require('../db/sql');
/* GET home page. */
router.get('/', (req, res, next)=>{
  res.render('index', { title: 'Express' });
});

const moods = [{ mood: 'excited about express!'}, { mood: 'route-tastic!' }];

const monsters = { hydra: { height: 3, age: 4 }, dragon: { height: 200, age: 350 } };

router.get('/monsters/:name', (req, res, next) => {
  res.send(monsters[req.params.name]);
});

router.get('/moods', (req, res, next) => {
  res.json(moods);
});
router.get('/mytest', async (req, res, next)=>{
  const rows = await query(statements.showTest);
  //console.log(await end());
  res.json({code: 0, msg: '请求成功', data: rows});
});

router.get('/api/mytest',async (req, res, next)=>{
  const rows = await query(statements.showTest);
  res.json({code: 0, msg: '请求成功', data: rows});
});
router.get('/api/re',async (req, res, next)=>{
  const rows = await query(statements.showTest);
  console.log(rows)
  res.json(rows);
});

module.exports = router;
