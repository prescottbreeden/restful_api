const Tasks = require('./models')
const controller = require('./controllers')
const mongoose = require('mongoose');
const bp = require('body-parser');

module.exports = function(app) {

    app.get('/tasks', function(req, res){
        controller.readAll(req, res);
    })
    
    app.get('/tasks/:id', function(req, res) {
        controller.readOne(req, res);
    })
    
    app.post('/tasks', function(req, res) {
        controller.create(req, res);    
    })
    
    app.put('/tasks/:id', function(req, res) {
        controller.update(req, res);
    })
    
    app.delete('/tasks/:id', function(req, res) {
        controller.delete(req, res);
    })
}

class Observer {
    constructor() {
        this.data = null;
        this.subs = [];
        this.subscribe = function (observer, cb) {
            this.push(observer);
            observer.stuff = cb;
        };
        this.setData = function (data) {
            this.data = data;
            this.alertSubs();
        };
        this.alertSubs = function () {
            for (let s of this.subs) {
                s.stuff(this.data);
            }
        };
    }
}
