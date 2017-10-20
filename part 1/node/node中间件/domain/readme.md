# domain
捕获异步回调中出现的异常  

## 实例
```
var domain = require('domain');

//引入一个domain的中间件，将每一个请求都包裹在一个独立的domain中
//domain来处理异常
app.use(function (req,res, next) {
  var d = domain.create();
  //监听domain的错误事件
  d.on('error', function (err) {
    logger.error(err);
    res.statusCode = 500;
    res.json({sucess:false, messag: '服务器异常'});
    d.dispose();
  });
  
  d.add(req);
  d.add(res);
  d.run(next);
});

app.get('/index', function (req, res) {
  //处理业务
});
```
