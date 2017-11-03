var pathRegexp = require('path-to-regexp'),
    url = require('url'),
    http = require('http'),
    path = require('path'),
    app = {},
    fs = require('fs'),
    routes = {
        all: []
    };

var pathRegexpResolver = function(path) {
    var keys = [],
        rp = pathRegexp(path, keys),
        keyMaps = keys.map(function (value) {
            return value.name;
        });
    return {
        regexp: rp,
        keys: keyMaps
    };
}

// 识别请求，对业务进行分发
var dispatcher = function (pathname, routes, ctx) {
    routes.forEach(function (route) {
        var reg = route[0].regexp,
            keys = route[0].keys;
        var matched = reg.exec(pathname); // 正则表达式
        if (matched) {
            var params = {};
            for (var i = 0, len = keys.length; i < len; i++) {
                var value = matched[i + 1];
                if (value) {
                    params[keys[i]] = value;
                }
            }
            ctx.req.params = params;
            var action = route[1];
            action(ctx.req, ctx.res);
            return true;
        }
    });
    return false;
}

// 服务器请求
var controller = function(request, response) {
    var pathName = url.parse(request.url).pathname;
    var method = request.method.toLowerCase();
    var ctx = {req: request,res: response};
    if (routes.hasOwnProperty(method)) {
        dispatcher(pathName, routes[method], ctx) || dispatcher(pathName, routes.all, ctx);
        return;
    } else {
        if (dispatcher(pathName, routes.all, ctx))return;
    }
    enotFoundHandler(request,response);
}


['get', 'put', 'post', 'delete'].forEach(function (method) {
    routes[method] = [];
    app[method] = function (path, action) {
        routes[method].push([pathRegexpResolver(path), action]);
    };
});


app.use = function (path, action) {
    routes.all.push([pathRegexpResolver(path), action]);
};

app.get('/',function(req,res){
    var htmlString = fs.readFileSync(path.join(__dirname,'index.html'));
    res.end(htmlString);
})

app.post('/user/:name', function (req, res) {
    var userName = req.param.name;
    console.log('增加用户:' + userName);
});

app.delete('/user/:name', function (req, res) {
    var userName = req.param.name;
    console.log('删除用户:' + userName);
});

var server = http.createServer(controller),
    port = 8080;
server.listen(port,function(){
    console.log(port+' is listening...');
})

