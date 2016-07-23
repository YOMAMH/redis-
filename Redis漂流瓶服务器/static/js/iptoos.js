/**
 * Created by renminghe on 16/7/10.
 */
var os = require('os');
exports.ipMsage = os.networkInterfaces().en0[1].address;