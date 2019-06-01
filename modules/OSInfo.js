const os = require(`os`);
const time = require(`./time`);
const colors = require(`colors`);

function getOSinfo() {
    let type = os.type();
    if (type === `Darwin`) {
        type = `OSX`;
    } else if (type === `Windows_NT`) {
        type = `Windows`;
    }
    const release = os.release();
    const cpu = os.cpus()[0].model;
    const uptime = os.uptime();
    const userInfo = os.userInfo();
    console.log(`System:`.grey, ` ${type}`);
    console.log(`Release:`.red, `${release}`);
    console.log(`CPU model:`.blue, ` ${cpu}`);
    console.log(`User name:`.yellow, ` ${userInfo.username}`);
    console.log(`Home dir:`.gray, ` ${userInfo.homedir}`);
    time.calc(uptime);
}

exports.print = getOSinfo;