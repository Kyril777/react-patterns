const Dispatcher = () => {
  return {
    _stores: [],
    register: (store) => {  
      this._stores.push({ store: store });
    },
    // checks for updates in each store
    dispatch: (action) => {
      if (this._stores.length > 0) {
        this._stores.forEach((entry) => {
          entry.store.update(action);
        });
      }
    }
  }
};
