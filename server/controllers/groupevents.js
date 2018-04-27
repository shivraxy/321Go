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

    update(req, res) {
        return GroupEvent
            .find({
                where: {
                    id: req.params.groupEventId,
                    groupId: req.params.groupId,
                },
            })
            .then(groupEvent => {
                if(!groupEvent) {
                    return res.status(404).send({
                        message: 'GroupEvent not found',
                    });
                }
            return groupEvent
                .update({
                    // consider changing to something more scaleable like: .update(req.body, { fields: Object.keys(req.body) })
                    content: req.body.content || groupEvent.content,
                    complete: req.body.complete || groupEvent.complete,
                })
                .then(updatedGroupEvent => res.status(200).send(updatedGroupEvent))
                .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    destroy(req, res) {
        return GroupEvent
            .find({
                where: {
                    id: req.params.groupEventId,
                    groupId: req.params.groupId,
                },
            })
            .then(groupEvent => {
                if (!groupEvent) {
                    return res.status(404).send({
                        message: 'GroupEvent not found',
                    });
                }

                return groupEvent
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
};