'use strics';

let chai = require('chai');
let chaiHTTP = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHTTP);
const url = 'http://localhost:3000/api/notes';

describe('Create a note; ', () => {
    it ('Should insert a note', (done) => {
        chai.request(url)
        .post('/new')
        .send({title:"Test Note", content:"Test string for note", fav: true})
        .end( function(err,res){
            console.log(res.body)
            expect(res).to.have.status(201);
            done();
        });
    });
    
});

describe('Create a note with error', () => {
    
    it('Should receive an error', (done) => {
        chai.request(url)
            .post('/new')
            .send({ content: "This note never will be inserted", fav: false })
            .end (function (err,res){
                console.log(res.body)
                expect(res).to.have.status(500);
                done();
            });
    });
    
});

describe('Get all notes', () => {
    
    it('Should get all notes', (done) => {
        chai.request(url)
        .get('/')
        .end( function (err, res){
            console.log(res.body)
            expect(res).to.have.status(200);
            done();
        });
    });
});

describe('Get favorite notes', () => {
    
    it('Should get favorite notes', (done) => {
        chai.request(url)
            .get('/favorites')
            .end( function (err,res){
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});