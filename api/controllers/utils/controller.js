const ACTION = {
    CREATE: 'CREATE',
    INFORM: 'INFORM',
    UPDATE: 'UPDATE',
    RESULT: 'RESULT'
}

exports.controller = (cb, resultAction = undefined) => async (req,res,next) => {
    try {
        const result = await cb(req, res, next);
        switch (resultAction) {
            case ACTION.CREATE: 
                return res.status(201).json(result);
            case ACTION.INFORM:
                return res.status(200).end()
            case ACTION.RESULT:
                return res.json(result)
            default:
                return result;
        }    
    } catch(e) {
        next(e)
    }   
};
exports.ACTION = ACTION;
