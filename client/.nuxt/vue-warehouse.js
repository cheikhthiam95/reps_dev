import WarehouseStore from 'vue-warehouse/store'

// Define default store
const moduleName = 'warehouse'

// Define the default store, supporting only modern browsers
import store from 'store/dist/store.modern'

export default (ctx, inject) => {
  const warehouseStore = WarehouseStore({
    moduleName: moduleName,

    store: store,
  })

  // Inject WarehouseStore to the context as $moduleName
  ctx['$' + moduleName] = warehouseStore
  inject(moduleName, warehouseStore)
}