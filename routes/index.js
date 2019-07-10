const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const statements = require('../db/statements');
const {query,end} = require('../db/sql');
const fetch = require('node-fetch');
/* GET home page. */
router.use(bodyParser.urlencoded({extended: true}));
router.get('/', (req, res, next)=>{
  res.render('index', { title: 'Express' });
});

const {purify,getNum} = require("../util");
const moods = [{ mood: 'excited about express!'}, { mood: 'route-tastic!' }];
const monsters = { hydra: { height: 3, age: 4 }, dragon: { height: 200, age: 350 } };

router.get('/monsters/:name', (req, res, next) => {
  res.send(monsters[req.params.name]);
});

router.get('/moods', (req, res, next) => {
  res.json(moods);
});

router.get('/api/gallery',(req,res)=>{
  fetch('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1').then(response=>response.json())
    .then(json=>{res.json(json)})
});
router.get('/api/test', async (req, res, next)=>{
  const rows = await query(statements.showTest);
  //console.log(await end());
  res.json({code: 1, msg: '请求成功', data: rows});
});

router.post('/api/signin',async (req, res, next)=>{
  console.log(req.body);
  let rows = await query(statements.signIn(req.body.uid,req.body.uid));
  console.log(rows);
  if(rows.length <1){
    res.json({code: 0, msg: '用户或密码错误'});
    return ;
  }
  let user = (rows[0].pwd===req.body.pwd)?rows[0]:'';
  res.json({code: 1, msg: '登陆成功', data:user});
});


router.post('/api/signup',async (req, res, next)=>{
  let rows = await query(statements.signIn(req.body.uid,req.body.email));
  if(rows.length>0) res.json({code: 0, msg: '用户已存在'});
  else{
    console.log(purify(req.body));
    let result = await query(statements.signUp(req.body));
    res.json({code: 1, msg: '注册成功'});
  }
});
console.log(getNum("dsaf"));
router.post('/api/bookfromisbn',async (req,res)=>{
  if(req.body.ISBN!=null&&req.body.ISBN.length===13){
    let rows = await query(statements.queryBookByISBN(req.body.ISBN));
    console.log(rows[0]);
    if (rows.length>0) res.json({code: 1, msg: '查询成功', data: rows});
    else {
      fetch('http://isbn.szmesoft.com/isbn/query?isbn='+req.body.ISBN).then(res=>res.json()).then(async json=>{
        if(json.ErrorCode !=='6000'){
          let data = {
            ISBN: (`"${json.ISBN}"`),
            BookName: json.BookName?(`"${json.BookName}"`):'NULL',
            Author: json.Author?(`"${json.Author}"`):'NULL',
            Publishing: json.Publishing?(`"${json.Publishing}"`):'NULL',
            Pages: getNum(json.Pages),
            Price: getNum(json.Price),
            PhotoUrl: json.PhotoUrl?("\"http://isbn.szmesoft.com/ISBN/GetBookPhoto?ID="+json.PhotoUrl+'"'):'NULL'
          };
          let b = await query(statements.insertBook(data));
          b = await query(statements.queryBookByISBN(req.body.ISBN));
          if (b.length>0) res.json({code: 1, msg: '查询成功', data: b});
        }else{
          res.json({code:0 ,msg: '查无此书'});
        }
      });
    }
  }else{
    res.json({code:0 ,msg: '查无此书'});
  }
});


router.post('/api/booksfromname',async (req,res)=>{
  let BookName = req.body.BookName.toString();
  console.log(BookName);
  let rows = await query(statements.queryBooks(BookName));
  if (rows.length>0){
    console.log(rows);
    res.json({code: 1, msg: '查询成功', data: rows});
  } else {
    res.json({code:0 ,msg: '查无此书'});
  }
});

router.get('/api/re',async (req, res, next)=>{
  const rows = await query(statements.showTest);
  console.log(rows);
  res.json(rows);
});

module.exports = router;
