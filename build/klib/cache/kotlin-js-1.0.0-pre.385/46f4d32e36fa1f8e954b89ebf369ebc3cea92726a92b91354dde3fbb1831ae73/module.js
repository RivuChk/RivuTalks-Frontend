(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-js-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin-wrappers-kotlin-js-js-ir'.");
    }
    root['kotlin-wrappers-kotlin-js-js-ir'] = factory(typeof this['kotlin-wrappers-kotlin-js-js-ir'] === 'undefined' ? {} : this['kotlin-wrappers-kotlin-js-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.x2;
  var interfaceMeta = kotlin_kotlin.$_$.h6;
  var setMetadataFor = kotlin_kotlin.$_$.r6;
  var THROW_CCE = kotlin_kotlin.$_$.y8;
  var Annotation = kotlin_kotlin.$_$.l8;
  var classMeta = kotlin_kotlin.$_$.x5;
  //endregion
  //region block: pre-declaration
  function component1() {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = this;
    return tmp$ret$0[0];
  }
  setMetadataFor(JsTuple1, 'JsTuple1', interfaceMeta, undefined, undefined, undefined, undefined, []);
  function component2() {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = this;
    return tmp$ret$0[1];
  }
  setMetadataFor(JsTuple2, 'JsTuple2', interfaceMeta, undefined, [JsTuple1], undefined, undefined, []);
  function component3() {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = this;
    return tmp$ret$0[2];
  }
  setMetadataFor(JsTuple3, 'JsTuple3', interfaceMeta, undefined, [JsTuple2], undefined, undefined, []);
  function component4() {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = this;
    return tmp$ret$0[3];
  }
  setMetadataFor(JsTuple4, 'JsTuple4', interfaceMeta, undefined, [JsTuple3], undefined, undefined, []);
  function component5() {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = this;
    return tmp$ret$0[4];
  }
  setMetadataFor(JsTuple5, 'JsTuple5', interfaceMeta, undefined, [JsTuple4], undefined, undefined, []);
  setMetadataFor(JsoDsl, 'JsoDsl', classMeta, undefined, [Annotation], undefined, undefined, []);
  //endregion
  function JsTuple2() {
  }
  function JsTuple1() {
  }
  function JsTuple3() {
  }
  function JsTuple4() {
  }
  function JsTuple5() {
  }
  function JsoDsl() {
  }
  JsoDsl.prototype.equals = function (other) {
    if (!(other instanceof JsoDsl))
      return false;
    var tmp0_other_with_cast = other instanceof JsoDsl ? other : THROW_CCE();
    return true;
  };
  JsoDsl.prototype.hashCode = function () {
    return 0;
  };
  JsoDsl.prototype.toString = function () {
    return '@kotlinx.js.JsoDsl()';
  };
  function set(_this__u8e3s4, key, value) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    tmp$ret$0[key] = value;
  }
  function jso(block) {
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    var tmp$ret$0;
    // Inline function 'kotlinx.js.jso' call
    tmp$ret$0 = {};
    var tmp0_apply = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$1 = tmp0_apply;
    return tmp$ret$1;
  }
  function jso_0() {
    return {};
  }
  return _;
}));
