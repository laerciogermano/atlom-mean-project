'use strict';

// After bootstrap!
const app       = atlom.get('app');
const TodoModel = atlom.get('TodoModel');
const agent     = require('supertest').agent(app);
const should    = require('should');
 
describe('todo', () => {
    const todo = {
        _id: '5a1203ada6996d170428c6a0',
        title: 'title',
        description: 'description'
    };

    const update = {
        _id: '5a1203ada6996d170428c6a0', 
        updates: {
            title: 'new title'
        }
    }

    it('should be able to create a new todo', done => {
        agent
            .post('/api/todo/create')
            .send(todo)
            .expect(200)
            .end((err, res) => {
                should.not.exist(err);
                res.body.title.should.be.equal(todo.title);
                res.body.description.should.be.equal(todo.description);
                done();
            });
    });

    it('should be able to retrieve an existing todo', done => {
        agent
            .get('/api/todo/all')
            .expect(200)
            .end((err, res) => {
                should.not.exist(err);
                res.body[0].title.should.be.equal(todo.title);
                res.body[0].description.should.be.equal(todo.description);
                done();
            });
    });

    it('should be able to update an existing todo', done => {
        agent
            .post('/api/todo/update')
            .send(update)
            .expect(200)
            .end((err, res) => {
                should.not.exist(err);
                res.body.title.should.be.equal(update.updates.title);
                res.body.description.should.be.equal(todo.description);
                done();
            });
    });

    it('should be able to remove an existing todo', done => {
        agent
            .post('/api/todo/remove')
            .send({_id: todo._id})
            .expect(200)
            .end((err, res) => {
                should.not.exist(err);
                res.body.n.should.be.equal(1);
                done();
            });
    });

    before(done => {
        TodoModel.remove({}, done);
    });


});