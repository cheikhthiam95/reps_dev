exports.searchFieldFilter = (fields = [], search = undefined) =>  {
    const reg = new RegExp(search, 'i');
    const $regex = {$regex: reg };
    return search ? fields.map(field => ({ [field]: $regex })) : [];
}