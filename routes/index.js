
/*
 * GET home page.
 */

// exports.index = function(req, res){
  // res.render('index', { title: 'Express' });
// };
var user = {
    username: 'admin', password: '000'
}
exports.index = function(req, res){
    res.render('index', { title: '&lt;ul&gt;&lt;li&gt;今天&lt;/li&gt;&lt;/ul&gt;' });
};
exports.login = function(req, res){
res.render('login', { title: aa,zz:''});
};
var aa = '用户登陆';
var bb = 0;
exports.doLogin = function (req, res) {

//    if (req.body.username === user.username && req.body.password === user.password) {
//        //res.json({ success: 1 });

//        res.send(req.body.username + '1234' + req.body.password);
//        res.end();
//        //  res.render('login', { title: aa, zz: '2222' });
//    }
//    else {
        bb += 1;
         var params = querystring.parse(postData);
         res.send(bb.toString() +"@"+ params["id"]);
        res.end();
        //  res.render('login', { title: aa, zz: 'err' });

   // }
};

exports.logout = function(req, res){
res.redirect('/');
};
exports.home = function(req, res){

res.render('home', { title: 'Home',user: user});
};