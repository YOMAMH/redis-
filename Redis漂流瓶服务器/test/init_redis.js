/**
 * Created by renminghe on 16/7/9.
 */
var request = require('request');

for (var i = 1; i <= 50; i++) {
    (function (i) {
       request.post({
          url:'http://127.0.0.1:5000/post',
          json:{'owner':'bottle'+i,'type':'male','content':'content'+i}
       });
    }(i));

}

for (var i = 6; i <= 100; i++) {
    (function (i) {
        request.post({
            url:'http://127.0.0.1:5000/post',
            json:{'owner':'bottle'+i,'type':'female','content':'content'+i}
        });
    }(i));
}