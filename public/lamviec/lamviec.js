exports.name = '/lamviec/daoda';
exports.index = async(req, res, next) => {
    try {
        const cadao = require('./data/cauca.json');
       const tien = require('./data/tien.json');
        var image = cadao[Math.floor(Math.random() * cadao.length)].trim();
       var money = tien[Math.floor(Math.random() * cadao.length)].trim();
        res.jsonp({
            data: image,
            money: money,
           
            author: 'Tuấn Dz'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}