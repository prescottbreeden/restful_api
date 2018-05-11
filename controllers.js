const Tasks = require('./models')
const mongoose = require('mongoose');
const bp = require('body-parser');

module.exports = {
    readAll: function(req, res) {
        Tasks.find({}, function(err, data) {
            res.json(data);
        })
    },
    readOne: function(req, res) {
        Tasks.findOne({_id: req.params.id}, function(err, data) {
            if(err){
                console.log('this will never be anything')
            }
            else
            {
                console.log('gucci');
                res.json(data);
            }
        })
    },
    update: function(req, res) {
        let updatedInfo = {
            'title': req.body.title,
            'description': req.body.description,
            'completed': req.body.completed
        }
        Tasks.updateOne({_id: req.params.id}, updatedInfo, function(err, data){
            if(err)
            {
                console.log('u suc');
                res.json(err)
            }
            else{
                console.log('changed a thing');
                res.json(data);
            }
        })
    },
    delete: function(req, res) {
        Tasks.deleteOne({_id: req.params.id}, function(err, data){
            if(err)
            {
                console.log('u suc');
                res.json(err);
            }
            else
            {
                res.json(data);
            }
        })
    },
    create: function(req, res) {
        let newTask = new Tasks({
            title: req.body.title,
            description: req.body.description
        });
        newTask.save(function(err){
            if(err)
            {
                console.log('u gooft')
                res.json(err);
            }
            else
            {
                res.redirect('/tasks')
            }
        })
    }
}