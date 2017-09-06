function Storage () {

}

Storage.prototype = {
  get: function (attribute, cb) {
    try {
      return JSON.parse(window.localStorage[attribute]);
    } catch(e) {
      if (cb) {
        return this.set(attribute, cb());
      }
      return null;
    }
  },
  set: function (attribute, value) {
    window.localStorage[attribute] = JSON.stringify(value);
    return value;
  }
};

const storage = new Storage();
