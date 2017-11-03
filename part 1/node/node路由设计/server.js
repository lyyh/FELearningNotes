let http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs'),
    pathRegExp = require('path-to-regexp'),
    routers = {
        all: []
    },
    app = {},
    port = 8081;

/**
 * 返回请求路径的正则与参数
 * @param {*} pathName 
 */
let pathRegExpResolver = (pathName) => {
    let keys = [],
        regexp = pathRegExp(pathName, keys),
        keysMap = keys.map((value) => {
            return value.name;
        });
    return {
        reg: regexp,
        keys: keysMap
    };
}

/**
 * 分派器，分发请求到对应的action
 * @param {*} pathName 
 * @param {*} routes 
 * @param {*} ctx 
 */
let dispatcher = (pathName, routes, ctx) => {
    routes.forEach(route => {
        let regExp = route[0].reg,
            keys = route[0].keys,
            action = route[1],
            matched = regExp.exec(pathName),
            param = {};

        if (matched) {
            for (var i = 0; i < keys.length; i++) {
                let value = matched[i + 1];
                if(value) param[keys[i]] = value;
            }
            ctx.req.param = param;
            return action(ctx.req,ctx.res);
        }
        return false;
    });
}

let notFoundHandler = (req,res) =>{
    res.end('404');
}

let readFileAsync = filename => {
    return new Promise((resolve,rejected) => {
        fs.readFile(filename,(err,data) => {
            
            if(err)rejected(err);
            else resolve(data);
        })
    });
}
/**
 * 控制器
 * @param {*} request 
 * @param {*} response 
 */
let controller = (request, response) => {
    let pathName = url.parse(request.url, true).pathname;
    let method = request.method.toLowerCase();
    let ctx = {
        req: request,
        res: response
    };
    if (routers.hasOwnProperty(method)) {
        return dispatcher(pathName, routers[method], ctx) || dispatcher(pathName, routers.all, ctx)
    }else{
        if(dispatcher(pathName, routers.all, ctx))return;
    }
    notFoundHandler(request,response);
}

['get', 'post', 'delete', 'head'].forEach(function (method) {
    routers[method] = [];
    app[method] = (path, action) => {
        routers[method].push([pathRegExpResolver(path), action]);
    }
});


/**
 * 注册请求处理函数
 */
app.get('/page/:name',async (req,res) => {
    let fileName = path.join(__dirname,req.param.name+'.html');
    try {
        let htmlStr = await readFileAsync(fileName);
        res.end(htmlStr);    
    } catch (error) {
        res.end(error.toString());
    }
});

let server = http.createServer(controller).listen(port, () => {
    console.log(`${port} is listening...`);
})