const Group = require('../models').Group;
const GroupEvent = require('../models').GroupEvent;

module.exports = {
    create(req, res) {
        return Group
            .create({
                title:req.body.title,
            })
            .then(group => res.status(201).sent(group))
            .catch(error => res.status(400).send(error));
    },


    // find all groups and include all associated groupEvents from the GroupEvent model
    list(req, res) {
        return Group   
            .findAll({
                include: [{
                    model: GroupEvent,
                    as: 'groupEvents',
                }],
            })
            .then(groups => res.status(200).send(groups))
            .catch(error => res.status(400).send(error));
    },
    // should do the same for events after user has selected a group

    // find the group whose id matches the groupId from the request parameters
    // also include its associated groupEvents
    retrieve(req, res) {
        return Group
            .findById(req.params.groupId, {
                include: [{
                    model: GroupEvent,
                    as: 'groupEvents',
                }],
            })
            .then(group => {
                // if group matching id doesn't exist, send 404 error
                if (!group) {
                    return res.status(404).send({
                        message: 'Group not found',
                    });
                }
                // if it exists, send it back in the response
                return res.status(200).send(group);
            })
            .catch(error => res.status(400).send(error));
    },

    // update a single group
    update(req, res) {
        return Group
            .findById(req.params.groupId, {
                include: [{
                    model: GroupEvent,
                    as: 'groupEvents',
                }],
            })
            .then(group => {
                if (!group) {
                    return res.status(404).send({
                        message: 'Group not found',
                    });
                }
                return group
                    .update({
                        title: req.body.title || group.title,
                    })
                    .then(() => res.status(200).send(group)) // send back the updated todo
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    destroy(req, res) {
        return Group
            .findById(req.params.groupId)
            .then(group => {
                if(!group) {
                    return res.status(400).send({
                        message: 'Group not found',
                    });
                }
                return group
                    .destroy()
                    .then(() => res.status(200).send({ message: 'Group deleted successfully' }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
};