const GroupEvent = require('../models').GroupEvent;

module.exports = {
    create(req, res) {
        return GroupEvent
            .create({
                content: req.body.content,
                groupId: req.params.groupId,
            })
            .then(groupEvent => res.status(201).send(groupEvent))
            .catch(error => res.status(400).send(error));
    },
};