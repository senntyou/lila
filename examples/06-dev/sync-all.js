
require('../../util/change_cwd')(__dirname + '/demo');

const servers = require('./servers');

const projectConfig = require('./demo/lila.config');
projectConfig.servers = [];
projectConfig.servers[100] = {
    useSsh: !0,
    servers: servers
};

require('../../util/exec')('lila sync * -e 100');