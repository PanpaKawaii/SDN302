const express = require('express');
const articleRouter = express.Router();//Routers allow you to route requests to specific handles based on URL and HTTP method (GET, POST, etc.)
articleRouter.use(express.json());//Middleware express.json() is used here to automatically parse JSON request bodies into JavaScript objects
articleRouter.use(express.urlencoded({ extended: true }));//This middleware is used to parse URL-encoded request bodies. The extended: true parameter allows objects and arrays to be encoded in the URL. This is useful when you need to process data from HTML forms.

articleRouter.route('/')//creates a new route object and allows defining handles for a specific path (in this case the router's root path '/').
    //Get all article
    .get(async (req, res) => {
        try {
            res.status(200).end('Will send all the articles to you!');
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    })
    // POST a new article
    .post(async (req, res) => {
        try {
            res.status(201).json('Will add the article: ' + req.body.title +
                ' with details: ' + req.body.text + ' and ' + req.body.date);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    })
    // PUT a new article
    .put(async (req, res) => {
        try {
            res.status(403).json('PUT operation not supported on /articles');
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    })
    // DELETE all articles
    .delete(async (req, res) => {
        try {
            res.status(200).json('Deleting all articles');
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    })

articleRouter.route('/:id')//This allows you to handle HTTP requests to URLs that contain a dynamic value in that part of the path
    // GET a specific article
    .get(async (req, res) => {
        try {
            res.status(200).end('Will send details of the article: ' + req.params.id + ' to you!');
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    })
    // POST a specific article
    .post(async (req, res) => {
        try {
            res.status(403).end('POST operation not supported on /articles/' + req.params.id);

        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    })
    // PUT a new article
    .put(async (req, res) => {
        try {
            res.write('Updating the article: ' + req.params.id + '\n');
            res.status(201).end('Will update the article: ' + req.body.title + ' with details: ' + req.body.text + ' and ' + req.body.date);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    })
    // DELETE an article
    .delete(async (req, res) => {
        try {
            res.status(200).end('Deleting article: ' + req.params.id);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

module.exports = articleRouter;