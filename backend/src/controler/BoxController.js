const Box = require('../modules/Box');

class BoxController{
    async store(req, res){
        const box = await Box.create({title: req.body});

        return res.json(box);
    }

}

module.exports = new BoxController();