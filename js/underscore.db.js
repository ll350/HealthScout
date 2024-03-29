(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var index = require('./');

index.save = function(db, destination) {
  destination = destination || 'db';
  localStorage.setItem(destination, JSON.stringify(db, null, 2));
};

index.load = function(source) {
  source = source || 'db';
  return JSON.parse(localStorage.getItem(source));
};

_.mixin(index);
},{"./":2}],2:[function(require,module,exports){
// UUID
// https://gist.github.com/LeverOne/1308368
/* jshint ignore:start */
function uuid(a,b){for(b=a='';a++<36;b+=a*51&52?(a^15?8^Math.random()*(a^20?16:4):4).toString(16):'-');return b}
/* jshint ignore:end */

module.exports = {
  // Copies properties from an docect to another
  __update: function(dest, src) {
    this.each(src, function(value, key) {
      dest[key] = value;
    });
  },

  // Removes an item from an array
  __remove: function(array, item) {
    var index = this.indexOf(array, item);
    if (index != -1) array.splice(index, 1);
  },

  __id: function() {
    var id = this.id || 'id';
    return id;
  },

  get: function(collection, id) {
    var self = this;
    return this.find(collection, function(doc) {
      return doc[self.__id()] === id;
    });
  },

  createId: function(collection, doc) {
    return uuid();
  },

  insert: function(collection, doc) {
    doc[this.__id()] = doc[this.__id()] || this.createId(collection, doc);

    collection.push(doc);

    return doc;
  },

  update: function(collection, id, attrs) {
    var doc = this.get(collection, id);

    if (doc) this.__update(doc, attrs);

    return doc;
  },

  updateWhere: function(collection, whereAttrs, attrs) {
    var self = this;
    var docs = this.where(collection, whereAttrs);

    docs.forEach(function(doc) {
      self.__update(doc, attrs);
    });

    return docs;
  },

  remove: function(collection, id) {
    var doc = this.get(collection, id);

    this.__remove(collection, doc);

    return doc;
  },

  removeWhere: function(collection, attrs) {
    var self = this;
    var docs = this.where(collection, attrs);

    docs.forEach(function(doc) {
      self.__remove(collection, doc);
    });

    return docs;
  }
};

},{}]},{},[1])