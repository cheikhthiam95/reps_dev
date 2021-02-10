const express = require('express');
const { authUser, authRole } = require('../../middlewares/auth')
const { ApiError } = require('../../Errors');
const {controller, ACTION} = require('../../controllers/utils/controller');

module.exports = (Collection, {noCreate, noCreateMany, noList, noGet, noSearch, noUpdate, noCount, noDelete, needAuth, role} = {}) => {

    const create = controller(async ({body}) => {
        const result = new Collection({...body});
        if(result) await result.save();
        return result;
    }, ACTION.CREATE);

    const createMany = controller(async ({body: {collections}}) => {
        const result = await Collection.insertMany(collections);
        if(result) await result.save();
        return result;
    }, ACTION.CREATE);

    const list = controller(() => Collection.find(), ACTION.RESULT);
    
    const search = controller(({params}) => {
        return Collection.find({$text: { $search: params.query }});
    }, ACTION.RESULT);

    const count = controller(() => Collection.count(), ACTION.RESULT);

    const get = controller(async ({params}) => {
        const result = await Collection.findOne({_id: params.id});
        if(!result) throw ApiError('Ressource Not found', 404);
        return result;
    }, ACTION.RESULT);

    const update = controller(({params: {id: _id}, body}) => {
        return Collection.updateOne({_id}, {...body});
    }, ACTION.INFORM);

    const remove = controller(({params: {id: _id}}) => Collection.deleteOne({_id}) , ACTION.INFORM);

    const router = express.Router();
    if(needAuth) {
        router.use(authUser);
        if(role) router.use(authRole(role))
    }

    !noList && router.get('/', list);
    !noCount && router.get('/count', count);
    !noSearch && router.get('/search/:query', search);
    !noGet && router.get('/:id', get);
    !noCreate && router.post('/', create);
    !noCreateMany && router.post('/many', createMany);
    !noUpdate && router.put('/:id', update);
    !noDelete && router.delete('/:id', remove);
    return router;
}