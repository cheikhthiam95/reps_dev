const middleware = {}

middleware['auth'] = require('../middleware/auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['loadOptions'] = require('../middleware/loadOptions.js')
middleware['loadOptions'] = middleware['loadOptions'].default || middleware['loadOptions']

middleware['stats'] = require('../middleware/stats.js')
middleware['stats'] = middleware['stats'].default || middleware['stats']

export default middleware
