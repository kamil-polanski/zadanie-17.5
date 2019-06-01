const colors = require(`colors`);

const time = function(input) {
    let sec = input;
    const hours = Math.floor(sec / 3600);
    sec %= 3600;
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    console.log(`Uptime:`.green, ` ${hours} hours ${minutes} minutes ${seconds} seconds`);
}

exports.calc = time;