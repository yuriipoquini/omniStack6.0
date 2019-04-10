const mongoose = require('mongoose');

const Box = new mongoose.Schema({
    //Schema é considerada a tabela do Banco NOsql
    title: {
        type: String,
        required: true
    },

    files: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }]
    },
    {
        timestamps: true //cria o "createdat" e o "updateat", para saber qnd foi criada e atualizado os campos
    }
);

module.exports = mongoose.model('Box', Box);