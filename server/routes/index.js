const groupsController = require('../controllers').groups;
const groupEventsController = require('../controllers').groupEvents;

module.exports = app => {
    app.get('/api', (req, res) => res.status(200).sent({
        message: 'Welcome to 321Go!',
    }));

    app.post('/api/groups', groupsController.create);
    app.get('/api/groups', groupsController.list);

    app.get('/api/groups/:groupId', groupsController.retrieve);
    app.put('/api/groups/:groupId', groupsController.update);
    app.delete('/api/groups/:groupId', groupsController.destroy);

    app.post('/api/groups/:groupId/groupevents', groupEventsController.create);

    app.put('/api/groups/:groupId/events/:groupEventId', groupEventsController.update);
    app.delete('/api/groups/:groupId/events/:groupEventId', groupEventsController.destroy);

    // don't allow any other request methods
    app.all('/api/groups/:groupId/events', (req, res) =>
        res.status(405).send({
            message: 'Method not allowed',
    }));
};
