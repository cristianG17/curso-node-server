const express = require('express');
const cors = require('cors');

class Server{




    constructor(){

        this.app = express();
        this.port = process.env.PORT;

        this.middlewares();
        this.routes();
    }

    routes(){

        this.app.get('/api', function(req,res) {

            res.json({

            
                msg: 'get api'
            });      
        })

        this.app.put('/api', function(req,res) {

            res.json({

             
                msg: 'put api'
            });      
        })

        this.app.post('/api', function(req,res) {

            res.json({

           
                msg: 'post api'
            });      
        })

        this.app.delete('/api', function(req,res) {

            res.json({

       
                msg: 'delete api'
            });      
        })


    }

    middlewares(){

        this.app.use(express.static('public'));

        this.app.use( cors());
    }

    listen(){

        
this.app.listen( this.port, () => {
    console.log('app corriendo por el puerto ', process.env.PORT);
});
    }

}

module.exports = Server;