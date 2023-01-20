(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'core-koin-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'core-koin-core-js-ir'.");
    }
    root['core-koin-core-js-ir'] = factory(typeof this['core-koin-core-js-ir'] === 'undefined' ? {} : this['core-koin-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_getInstance = kotlin_kotlin.$_$.x2;
  var classMeta = kotlin_kotlin.$_$.x5;
  var setMetadataFor = kotlin_kotlin.$_$.r6;
  var objectMeta = kotlin_kotlin.$_$.q6;
  var listOf = kotlin_kotlin.$_$.a4;
  var toList = kotlin_kotlin.$_$.r4;
  var THROW_CCE = kotlin_kotlin.$_$.y8;
  var Annotation = kotlin_kotlin.$_$.l8;
  var interfaceMeta = kotlin_kotlin.$_$.h6;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var hashCode = kotlin_kotlin.$_$.g6;
  var emptyList = kotlin_kotlin.$_$.s3;
  var equals = kotlin_kotlin.$_$.z5;
  var joinToString$default = kotlin_kotlin.$_$.e;
  var THROW_ISE = kotlin_kotlin.$_$.z8;
  var Enum = kotlin_kotlin.$_$.q8;
  var Exception = kotlin_kotlin.$_$.s8;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.j1;
  var captureStack = kotlin_kotlin.$_$.r5;
  var Exception_init_$Init$_0 = kotlin_kotlin.$_$.k1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.t;
  var Map = kotlin_kotlin.$_$.c3;
  var isInterface = kotlin_kotlin.$_$.l6;
  var toString = kotlin_kotlin.$_$.v6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var isObject = kotlin_kotlin.$_$.m6;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.w;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var addAll = kotlin_kotlin.$_$.j3;
  var addAll_0 = kotlin_kotlin.$_$.k3;
  var listOf_0 = kotlin_kotlin.$_$.b4;
  var plus = kotlin_kotlin.$_$.h4;
  var getStringHashCode = kotlin_kotlin.$_$.f6;
  var first = kotlin_kotlin.$_$.w3;
  var plus_0 = kotlin_kotlin.$_$.f4;
  var emptySet = kotlin_kotlin.$_$.u3;
  var toList_0 = kotlin_kotlin.$_$.q4;
  var distinct = kotlin_kotlin.$_$.q3;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.p3;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.q;
  var removeAll = kotlin_kotlin.$_$.j4;
  var Pair = kotlin_kotlin.$_$.w8;
  var println = kotlin_kotlin.$_$.p5;
  var isArray = kotlin_kotlin.$_$.i6;
  var roundToLong = kotlin_kotlin.$_$.x6;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.i1;
  var split$default = kotlin_kotlin.$_$.m;
  var Default_getInstance = kotlin_kotlin.$_$.r2;
  var getNumberHashCode = kotlin_kotlin.$_$.d6;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.d;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Koin, 'Koin', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(KoinApplication, 'KoinApplication', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(KoinInternalApi, 'KoinInternalApi', classMeta, undefined, [Annotation], undefined, undefined, []);
  function getKoin() {
    return KoinPlatformTools_getInstance().defaultContext_m5e9ci_k$().get_26vq_k$();
  }
  setMetadataFor(KoinComponent, 'KoinComponent', interfaceMeta, undefined, undefined, undefined, undefined, []);
  function closeScope() {
    if (this.get_scope_iyfcq3_k$().isNotClosed_x1h9n9_k$()) {
      this.get_scope_iyfcq3_k$().close_ymq55z_k$();
    }
  }
  setMetadataFor(KoinScopeComponent, 'KoinScopeComponent', interfaceMeta, undefined, [KoinComponent], undefined, undefined, []);
  setMetadataFor(KoinContext, 'KoinContext', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(BeanDefinition, 'BeanDefinition', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Kind, 'Kind', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(Callbacks, 'Callbacks', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ClosedScopeException, 'ClosedScopeException', classMeta, Exception, undefined, undefined, undefined, []);
  setMetadataFor(DefinitionOverrideException, 'DefinitionOverrideException', classMeta, Exception, undefined, undefined, undefined, []);
  setMetadataFor(DefinitionParameterException, 'DefinitionParameterException', classMeta, Exception, undefined, undefined, undefined, []);
  setMetadataFor(InstanceCreationException, 'InstanceCreationException', classMeta, Exception, undefined, undefined, undefined, []);
  setMetadataFor(KoinAppAlreadyStartedException, 'KoinAppAlreadyStartedException', classMeta, Exception, undefined, undefined, undefined, []);
  setMetadataFor(MissingPropertyException, 'MissingPropertyException', classMeta, Exception, undefined, undefined, undefined, []);
  setMetadataFor(NoBeanDefFoundException, 'NoBeanDefFoundException', classMeta, Exception, undefined, undefined, undefined, []);
  setMetadataFor(NoParameterFoundException, 'NoParameterFoundException', classMeta, Exception, undefined, undefined, undefined, []);
  setMetadataFor(ScopeAlreadyCreatedException, 'ScopeAlreadyCreatedException', classMeta, Exception, undefined, undefined, undefined, []);
  setMetadataFor(ScopeNotCreatedException, 'ScopeNotCreatedException', classMeta, Exception, undefined, undefined, undefined, []);
  setMetadataFor(InstanceFactory, 'InstanceFactory', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(FactoryInstanceFactory, 'FactoryInstanceFactory', classMeta, InstanceFactory, undefined, undefined, undefined, []);
  setMetadataFor(InstanceContext, 'InstanceContext', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ScopedInstanceFactory, 'ScopedInstanceFactory', classMeta, InstanceFactory, undefined, undefined, undefined, []);
  setMetadataFor(SingleInstanceFactory, 'SingleInstanceFactory', classMeta, InstanceFactory, undefined, undefined, undefined, []);
  setMetadataFor(Logger, 'Logger', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(EmptyLogger, 'EmptyLogger', classMeta, Logger, undefined, undefined, undefined, []);
  setMetadataFor(Level, 'Level', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(Module, 'Module', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_1, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ParametersHolder, 'ParametersHolder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Qualifier, 'Qualifier', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(StringQualifier, 'StringQualifier', classMeta, undefined, [Qualifier], undefined, undefined, []);
  setMetadataFor(TypeQualifier, 'TypeQualifier', classMeta, undefined, [Qualifier], undefined, undefined, []);
  setMetadataFor(InstanceRegistry, 'InstanceRegistry', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(PropertyRegistry, 'PropertyRegistry', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_2, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ScopeRegistry, 'ScopeRegistry', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Scope, 'Scope', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ScopeCallback, 'ScopeCallback', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ScopeDSL, 'ScopeDSL', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(GlobalContext, 'GlobalContext', objectMeta, undefined, [KoinContext], undefined, undefined, []);
  setMetadataFor(PrintLogger, 'PrintLogger', classMeta, Logger, undefined, undefined, undefined, []);
  setMetadataFor(TimeSource, 'TimeSource', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(NodeJsHrTimeSource, 'NodeJsHrTimeSource', classMeta, undefined, [TimeSource], undefined, undefined, []);
  setMetadataFor(PerformanceNowTimeSource, 'PerformanceNowTimeSource', classMeta, undefined, [TimeSource], undefined, undefined, []);
  setMetadataFor(DateNowTimeSource, 'DateNowTimeSource', classMeta, undefined, [TimeSource], undefined, undefined, []);
  setMetadataFor(KoinPlatformTimeTools, 'KoinPlatformTimeTools', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(KoinPlatformTools, 'KoinPlatformTools', objectMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function _set_logger__t1fpfd($this, _set____db54di) {
    $this.logger_1 = _set____db54di;
  }
  function Koin$createScope$lambda($scopeId, $qualifier) {
    return function () {
      return "|- create scope - id:'" + $scopeId + "' q:" + $qualifier;
    };
  }
  function Koin$createScope$lambda_0($scopeId, $qualifier) {
    return function () {
      return "|- create scope - id:'" + $scopeId + "' q:" + $qualifier;
    };
  }
  function Koin$createEagerInstances$lambda(this$0) {
    return function () {
      this$0.instanceRegistry_1.createAllEagerInstances_wwsk6y_k$();
      return Unit_getInstance();
    };
  }
  function Koin() {
    this.scopeRegistry_1 = new ScopeRegistry(this);
    this.instanceRegistry_1 = new InstanceRegistry(this);
    this.propertyRegistry_1 = new PropertyRegistry(this);
    this.logger_1 = new EmptyLogger();
  }
  Koin.prototype.get_scopeRegistry_7zu3y0_k$ = function () {
    return this.scopeRegistry_1;
  };
  Koin.prototype.get_instanceRegistry_jmeu6d_k$ = function () {
    return this.instanceRegistry_1;
  };
  Koin.prototype.get_propertyRegistry_kqppff_k$ = function () {
    return this.propertyRegistry_1;
  };
  Koin.prototype.get_logger_g9gejd_k$ = function () {
    return this.logger_1;
  };
  Koin.prototype.setupLogger_t3ovmf_k$ = function (logger) {
    this.logger_1 = logger;
  };
  Koin.prototype.get_ocvqe2_k$ = function (clazz, qualifier, parameters) {
    return this.scopeRegistry_1.get_rootScope_60k1zr_k$().get_ocvqe2_k$(clazz, qualifier, parameters);
  };
  Koin.prototype.get$default_dbowaj_k$ = function (clazz, qualifier, parameters, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      qualifier = null;
    if (!(($mask0 & 4) === 0))
      parameters = null;
    return this.get_ocvqe2_k$(clazz, qualifier, parameters);
  };
  Koin.prototype.getOrNull_re75dc_k$ = function (clazz, qualifier, parameters) {
    return this.scopeRegistry_1.get_rootScope_60k1zr_k$().getOrNull_re75dc_k$(clazz, qualifier, parameters);
  };
  Koin.prototype.getOrNull$default_3za52n_k$ = function (clazz, qualifier, parameters, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      qualifier = null;
    if (!(($mask0 & 4) === 0))
      parameters = null;
    return this.getOrNull_re75dc_k$(clazz, qualifier, parameters);
  };
  Koin.prototype.createScope_l554vf_k$ = function (scopeId, qualifier, source) {
    var tmp = this.logger_1;
    var tmp_0 = Level_DEBUG_getInstance();
    tmp.log_a77iie_k$(tmp_0, Koin$createScope$lambda(scopeId, qualifier));
    return this.scopeRegistry_1.createScope_l554vf_k$(scopeId, qualifier, source);
  };
  Koin.prototype.createScope$default_2nf3i2_k$ = function (scopeId, qualifier, source, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      source = null;
    return this.createScope_l554vf_k$(scopeId, qualifier, source);
  };
  Koin.prototype.createScope_fk2d7g_k$ = function (t) {
    var scopeId = getScopeId(t);
    var qualifier = getScopeName(t);
    var tmp = this.logger_1;
    var tmp_0 = Level_DEBUG_getInstance();
    tmp.log_a77iie_k$(tmp_0, Koin$createScope$lambda_0(scopeId, qualifier));
    return this.scopeRegistry_1.createScope_l554vf_k$(scopeId, qualifier, null);
  };
  Koin.prototype.getOrCreateScope_lw764y_k$ = function (scopeId, qualifier, source) {
    var tmp0_elvis_lhs = this.scopeRegistry_1.getScopeOrNull_vptix3_k$(scopeId);
    return tmp0_elvis_lhs == null ? this.createScope_l554vf_k$(scopeId, qualifier, source) : tmp0_elvis_lhs;
  };
  Koin.prototype.getOrCreateScope$default_qcgofn_k$ = function (scopeId, qualifier, source, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      source = null;
    return this.getOrCreateScope_lw764y_k$(scopeId, qualifier, source);
  };
  Koin.prototype.getScope_gk9t7n_k$ = function (scopeId) {
    var tmp0_elvis_lhs = this.scopeRegistry_1.getScopeOrNull_vptix3_k$(scopeId);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new ScopeNotCreatedException("No scope found for id '" + scopeId + "'");
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  Koin.prototype.getScopeOrNull_vptix3_k$ = function (scopeId) {
    return this.scopeRegistry_1.getScopeOrNull_vptix3_k$(scopeId);
  };
  Koin.prototype.deleteScope_z9844p_k$ = function (scopeId) {
    this.scopeRegistry_1.deleteScope_z9844p_k$(scopeId);
  };
  Koin.prototype.getProperty_n7ug6a_k$ = function (key, defaultValue) {
    var tmp0_elvis_lhs = this.propertyRegistry_1.getProperty_sqfjxw_k$(key);
    return tmp0_elvis_lhs == null ? defaultValue : tmp0_elvis_lhs;
  };
  Koin.prototype.getProperty_gwh1jd_k$ = function (key) {
    return this.propertyRegistry_1.getProperty_sqfjxw_k$(key);
  };
  Koin.prototype.setProperty_e3jw15_k$ = function (key, value) {
    this.propertyRegistry_1.saveProperty_d7jy4s_k$(key, value);
  };
  Koin.prototype.deleteProperty_9xld72_k$ = function (key) {
    this.propertyRegistry_1.deleteProperty_9xld72_k$(key);
  };
  Koin.prototype.close_ymq55z_k$ = function () {
    this.scopeRegistry_1.close_ymq55z_k$();
    this.instanceRegistry_1.close_ymq55z_k$();
    this.propertyRegistry_1.close_ymq55z_k$();
  };
  Koin.prototype.loadModules_73nei7_k$ = function (modules, allowOverride) {
    var flattedModules = flatten$default(modules, null, 2, null);
    this.instanceRegistry_1.loadModules_thcdwd_k$(flattedModules, allowOverride);
    this.scopeRegistry_1.loadScopes_a69qav_k$(flattedModules);
  };
  Koin.prototype.loadModules$default_6txcz8_k$ = function (modules, allowOverride, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      allowOverride = true;
    return this.loadModules_73nei7_k$(modules, allowOverride);
  };
  Koin.prototype.unloadModules_rmaqm6_k$ = function (modules) {
    var flattedModules = flatten$default(modules, null, 2, null);
    this.instanceRegistry_1.unloadModules_rv8cqk_k$(flattedModules);
  };
  Koin.prototype.createEagerInstances_b51alt_k$ = function () {
    this.logger_1.info_nf2s9o_k$('create eager instances ...');
    if (this.logger_1.isAt_9azl0c_k$(Level_DEBUG_getInstance())) {
      var duration = measureDuration(Koin$createEagerInstances$lambda(this));
      this.logger_1.debug_1nsf3z_k$('eager instances created in ' + duration + ' ms');
    } else {
      this.instanceRegistry_1.createAllEagerInstances_wwsk6y_k$();
    }
  };
  function _set_allowOverride__dpyqb4($this, _set____db54di) {
    $this.allowOverride_1 = _set____db54di;
  }
  function _get_allowOverride__1hss78($this) {
    return $this.allowOverride_1;
  }
  function loadModules($this, modules) {
    $this.koin_1.loadModules_73nei7_k$(modules, $this.allowOverride_1);
  }
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.init_1xdsg_k$ = function () {
    var app = new KoinApplication();
    return app;
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function KoinApplication$modules$lambda(this$0, $modules) {
    return function () {
      loadModules(this$0, $modules);
      return Unit_getInstance();
    };
  }
  function KoinApplication() {
    Companion_getInstance();
    this.koin_1 = new Koin();
    this.allowOverride_1 = true;
  }
  KoinApplication.prototype.get_koin_wopbyq_k$ = function () {
    return this.koin_1;
  };
  KoinApplication.prototype.modules_t1cy66_k$ = function (modules) {
    return this.modules_nsjcs4_k$(listOf(modules));
  };
  KoinApplication.prototype.modules_srpak2_k$ = function (modules) {
    return this.modules_nsjcs4_k$(toList(modules));
  };
  KoinApplication.prototype.modules_nsjcs4_k$ = function (modules) {
    if (this.koin_1.get_logger_g9gejd_k$().isAt_9azl0c_k$(Level_INFO_getInstance())) {
      var duration = measureDuration(KoinApplication$modules$lambda(this, modules));
      var count = this.koin_1.get_instanceRegistry_jmeu6d_k$().size_23och_k$();
      this.koin_1.get_logger_g9gejd_k$().info_nf2s9o_k$('loaded ' + count + ' definitions - ' + duration + ' ms');
    } else {
      loadModules(this, modules);
    }
    return this;
  };
  KoinApplication.prototype.createEagerInstances_b51alt_k$ = function () {
    this.koin_1.createEagerInstances_b51alt_k$();
  };
  KoinApplication.prototype.allowOverride_46f8bw_k$ = function (override) {
    this.allowOverride_1 = override;
  };
  KoinApplication.prototype.properties_3p74wn_k$ = function (values) {
    this.koin_1.get_propertyRegistry_kqppff_k$().saveProperties_q6b72h_k$(values);
    return this;
  };
  KoinApplication.prototype.logger_a4b4sr_k$ = function (logger) {
    this.koin_1.setupLogger_t3ovmf_k$(logger);
    return this;
  };
  KoinApplication.prototype.printLogger_ccsebg_k$ = function (level) {
    this.koin_1.setupLogger_t3ovmf_k$(KoinPlatformTools_getInstance().defaultLogger_36wu3s_k$(level));
    return this;
  };
  KoinApplication.prototype.printLogger$default_rgerj2_k$ = function (level, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      level = Level_INFO_getInstance();
    return this.printLogger_ccsebg_k$(level);
  };
  KoinApplication.prototype.close_ymq55z_k$ = function () {
    this.koin_1.close_ymq55z_k$();
  };
  KoinApplication.prototype.unloadModules_rmaqm6_k$ = function (modules) {
    this.koin_1.unloadModules_rmaqm6_k$(modules);
  };
  KoinApplication.prototype.unloadModules_6yds8i_k$ = function (module_0) {
    this.koin_1.unloadModules_rmaqm6_k$(listOf(module_0));
  };
  function KoinInternalApi() {
  }
  KoinInternalApi.prototype.equals = function (other) {
    if (!(other instanceof KoinInternalApi))
      return false;
    var tmp0_other_with_cast = other instanceof KoinInternalApi ? other : THROW_CCE();
    return true;
  };
  KoinInternalApi.prototype.hashCode = function () {
    return 0;
  };
  KoinInternalApi.prototype.toString = function () {
    return '@org.koin.core.annotation.KoinInternalApi()';
  };
  function KoinComponent() {
  }
  function KoinScopeComponent() {
  }
  function getScopeId(_this__u8e3s4) {
    return getFullName(getKClassFromExpression(_this__u8e3s4)) + '@' + hashCode(_this__u8e3s4);
  }
  function getScopeName(_this__u8e3s4) {
    return new TypeQualifier(getKClassFromExpression(_this__u8e3s4));
  }
  function KoinContext() {
  }
  function BeanDefinition_init_$Init$(scopeQualifier, primaryType, qualifier, definition, kind, secondaryTypes, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      qualifier = null;
    if (!(($mask0 & 32) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$0 = emptyList();
      tmp$ret$0_0 = Unit_getInstance();
      secondaryTypes = tmp$ret$0;
    }
    BeanDefinition.call($this, scopeQualifier, primaryType, qualifier, definition, kind, secondaryTypes);
    return $this;
  }
  function BeanDefinition_init_$Create$(scopeQualifier, primaryType, qualifier, definition, kind, secondaryTypes, $mask0, $marker) {
    return BeanDefinition_init_$Init$(scopeQualifier, primaryType, qualifier, definition, kind, secondaryTypes, $mask0, $marker, Object.create(BeanDefinition.prototype));
  }
  function BeanDefinition$toString$lambda(it) {
    return getFullName(it);
  }
  function BeanDefinition(scopeQualifier, primaryType, qualifier, definition, kind, secondaryTypes) {
    this.scopeQualifier_1 = scopeQualifier;
    this.primaryType_1 = primaryType;
    this.qualifier_1 = qualifier;
    this.definition_1 = definition;
    this.kind_1 = kind;
    this.secondaryTypes_1 = secondaryTypes;
    var tmp = this;
    tmp.callbacks_1 = Callbacks_init_$Create$(null, 1, null);
    this._createdAtStart_1 = false;
  }
  BeanDefinition.prototype.get_scopeQualifier_eby6kf_k$ = function () {
    return this.scopeQualifier_1;
  };
  BeanDefinition.prototype.get_primaryType_gbcb1_k$ = function () {
    return this.primaryType_1;
  };
  BeanDefinition.prototype.set_qualifier_yyxnv6_k$ = function (_set____db54di) {
    this.qualifier_1 = _set____db54di;
  };
  BeanDefinition.prototype.get_qualifier_c4gvsv_k$ = function () {
    return this.qualifier_1;
  };
  BeanDefinition.prototype.get_definition_y2whcs_k$ = function () {
    return this.definition_1;
  };
  BeanDefinition.prototype.get_kind_wop7ml_k$ = function () {
    return this.kind_1;
  };
  BeanDefinition.prototype.set_secondaryTypes_1bfdsj_k$ = function (_set____db54di) {
    this.secondaryTypes_1 = _set____db54di;
  };
  BeanDefinition.prototype.get_secondaryTypes_du752m_k$ = function () {
    return this.secondaryTypes_1;
  };
  BeanDefinition.prototype.set_callbacks_g4fbls_k$ = function (_set____db54di) {
    this.callbacks_1 = _set____db54di;
  };
  BeanDefinition.prototype.get_callbacks_8qyswr_k$ = function () {
    return this.callbacks_1;
  };
  BeanDefinition.prototype.set__createdAtStart_93sokg_k$ = function (_set____db54di) {
    this._createdAtStart_1 = _set____db54di;
  };
  BeanDefinition.prototype.get__createdAtStart_6om28z_k$ = function () {
    return this._createdAtStart_1;
  };
  BeanDefinition.prototype.toString = function () {
    var defKind = this.kind_1.toString();
    var defType = "'" + getFullName(this.primaryType_1) + "'";
    var tmp0_safe_receiver = this.qualifier_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'org.koin.core.definition.BeanDefinition.toString.<anonymous>' call
      tmp$ret$0 = ',qualifier:' + this.qualifier_1;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var defName = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var tmp$ret$3;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.scopeQualifier_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'org.koin.core.definition.BeanDefinition.toString.<anonymous>' call
    tmp$ret$2 = equals(tmp0_let, Companion_getInstance_2().get_rootScopeQualifier_6qrm0v_k$()) ? '' : ',scope:' + this.scopeQualifier_1;
    tmp$ret$3 = tmp$ret$2;
    var defScope = tmp$ret$3;
    var tmp_0;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp1_isNotEmpty = this.secondaryTypes_1;
    tmp$ret$4 = !tmp1_isNotEmpty.isEmpty_y1axqb_k$();
    if (tmp$ret$4) {
      var tmp_1 = this.secondaryTypes_1;
      var typesAsString = joinToString$default(tmp_1, ',', null, null, 0, null, BeanDefinition$toString$lambda, 30, null);
      tmp_0 = ',binds:' + typesAsString;
    } else {
      tmp_0 = '';
    }
    var defOtherTypes = tmp_0;
    return '[' + defKind + ':' + defType + defName + defScope + defOtherTypes + ']';
  };
  BeanDefinition.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other instanceof BeanDefinition)
      other;
    else
      THROW_CCE();
    if (!this.primaryType_1.equals(other.primaryType_1))
      return false;
    if (!equals(this.qualifier_1, other.qualifier_1))
      return false;
    if (!equals(this.scopeQualifier_1, other.scopeQualifier_1))
      return false;
    return true;
  };
  BeanDefinition.prototype.hasType_mittxs_k$ = function (clazz) {
    return this.primaryType_1.equals(clazz) ? true : this.secondaryTypes_1.contains_2ehdt1_k$(clazz);
  };
  BeanDefinition.prototype.is_rou4qj_k$ = function (clazz, qualifier, scopeDefinition) {
    return (this.hasType_mittxs_k$(clazz) ? equals(this.qualifier_1, qualifier) : false) ? equals(this.scopeQualifier_1, scopeDefinition) : false;
  };
  BeanDefinition.prototype.hashCode = function () {
    var tmp0_safe_receiver = this.qualifier_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    result = imul(31, result) + this.primaryType_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.scopeQualifier_1) | 0;
    return result;
  };
  BeanDefinition.prototype.component1_7eebsc_k$ = function () {
    return this.scopeQualifier_1;
  };
  BeanDefinition.prototype.component2_7eebsb_k$ = function () {
    return this.primaryType_1;
  };
  BeanDefinition.prototype.component3_7eebsa_k$ = function () {
    return this.qualifier_1;
  };
  BeanDefinition.prototype.component4_7eebs9_k$ = function () {
    return this.definition_1;
  };
  BeanDefinition.prototype.component5_7eebs8_k$ = function () {
    return this.kind_1;
  };
  BeanDefinition.prototype.component6_7eebs7_k$ = function () {
    return this.secondaryTypes_1;
  };
  BeanDefinition.prototype.copy_vf00vz_k$ = function (scopeQualifier, primaryType, qualifier, definition, kind, secondaryTypes) {
    return new BeanDefinition(scopeQualifier, primaryType, qualifier, definition, kind, secondaryTypes);
  };
  BeanDefinition.prototype.copy$default_ko739b_k$ = function (scopeQualifier, primaryType, qualifier, definition, kind, secondaryTypes, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      scopeQualifier = this.scopeQualifier_1;
    if (!(($mask0 & 2) === 0))
      primaryType = this.primaryType_1;
    if (!(($mask0 & 4) === 0))
      qualifier = this.qualifier_1;
    if (!(($mask0 & 8) === 0))
      definition = this.definition_1;
    if (!(($mask0 & 16) === 0))
      kind = this.kind_1;
    if (!(($mask0 & 32) === 0))
      secondaryTypes = this.secondaryTypes_1;
    return this.copy_vf00vz_k$(scopeQualifier, primaryType, qualifier, definition, kind, secondaryTypes);
  };
  function indexKey(clazz, typeQualifier, scopeQualifier) {
    var tmp0_safe_receiver = typeQualifier;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_value_j01efc_k$();
    var tq = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    return getFullName(clazz) + ':' + tq + ':' + scopeQualifier;
  }
  var Kind_Singleton_instance;
  var Kind_Factory_instance;
  var Kind_Scoped_instance;
  function values() {
    return [Kind_Singleton_getInstance(), Kind_Factory_getInstance(), Kind_Scoped_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Singleton':
        return Kind_Singleton_getInstance();
      case 'Factory':
        return Kind_Factory_getInstance();
      case 'Scoped':
        return Kind_Scoped_getInstance();
      default:
        Kind_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Kind_entriesInitialized;
  function Kind_initEntries() {
    if (Kind_entriesInitialized)
      return Unit_getInstance();
    Kind_entriesInitialized = true;
    Kind_Singleton_instance = new Kind('Singleton', 0);
    Kind_Factory_instance = new Kind('Factory', 1);
    Kind_Scoped_instance = new Kind('Scoped', 2);
  }
  function Kind(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Kind_Singleton_getInstance() {
    Kind_initEntries();
    return Kind_Singleton_instance;
  }
  function Kind_Factory_getInstance() {
    Kind_initEntries();
    return Kind_Factory_instance;
  }
  function Kind_Scoped_getInstance() {
    Kind_initEntries();
    return Kind_Scoped_instance;
  }
  function Callbacks_init_$Init$(onClose, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      onClose = null;
    Callbacks.call($this, onClose);
    return $this;
  }
  function Callbacks_init_$Create$(onClose, $mask0, $marker) {
    return Callbacks_init_$Init$(onClose, $mask0, $marker, Object.create(Callbacks.prototype));
  }
  function Callbacks(onClose) {
    this.onClose_1 = onClose;
  }
  Callbacks.prototype.get_onClose_l3bvrk_k$ = function () {
    return this.onClose_1;
  };
  Callbacks.prototype.component1_7eebsc_k$ = function () {
    return this.onClose_1;
  };
  Callbacks.prototype.copy_otr263_k$ = function (onClose) {
    return new Callbacks(onClose);
  };
  Callbacks.prototype.copy$default_5vjgx6_k$ = function (onClose, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onClose = this.onClose_1;
    return this.copy_otr263_k$(onClose);
  };
  Callbacks.prototype.toString = function () {
    return 'Callbacks(onClose=' + this.onClose_1 + ')';
  };
  Callbacks.prototype.hashCode = function () {
    return this.onClose_1 == null ? 0 : hashCode(this.onClose_1);
  };
  Callbacks.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Callbacks))
      return false;
    var tmp0_other_with_cast = other instanceof Callbacks ? other : THROW_CCE();
    if (!equals(this.onClose_1, tmp0_other_with_cast.onClose_1))
      return false;
    return true;
  };
  function ClosedScopeException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, ClosedScopeException);
  }
  function DefinitionOverrideException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, DefinitionOverrideException);
  }
  function DefinitionParameterException(str) {
    Exception_init_$Init$(str, this);
    captureStack(this, DefinitionParameterException);
  }
  function InstanceCreationException(msg, parent) {
    Exception_init_$Init$_0(msg, parent, this);
    captureStack(this, InstanceCreationException);
  }
  function KoinAppAlreadyStartedException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, KoinAppAlreadyStartedException);
  }
  function MissingPropertyException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, MissingPropertyException);
  }
  function NoBeanDefFoundException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, NoBeanDefFoundException);
  }
  function NoParameterFoundException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, NoParameterFoundException);
  }
  function ScopeAlreadyCreatedException(s) {
    Exception_init_$Init$(s, this);
    captureStack(this, ScopeAlreadyCreatedException);
  }
  function ScopeNotCreatedException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, ScopeNotCreatedException);
  }
  function FactoryInstanceFactory(beanDefinition) {
    InstanceFactory.call(this, beanDefinition);
  }
  FactoryInstanceFactory.prototype.isCreated_3z08on_k$ = function (context) {
    return false;
  };
  FactoryInstanceFactory.prototype.drop_jzjibc_k$ = function (scope) {
    var tmp0_safe_receiver = this.get_beanDefinition_b177zg_k$().get_callbacks_8qyswr_k$().get_onClose_l3bvrk_k$();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(null);
  };
  FactoryInstanceFactory.prototype.dropAll_wlge75_k$ = function () {
  };
  FactoryInstanceFactory.prototype.get_kchvk2_k$ = function (context) {
    return this.create_jnbvc8_k$(context);
  };
  function InstanceContext_init_$Init$(koin, scope, parameters, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      parameters = null;
    InstanceContext.call($this, koin, scope, parameters);
    return $this;
  }
  function InstanceContext_init_$Create$(koin, scope, parameters, $mask0, $marker) {
    return InstanceContext_init_$Init$(koin, scope, parameters, $mask0, $marker, Object.create(InstanceContext.prototype));
  }
  function InstanceContext(koin, scope, parameters) {
    this.koin_1 = koin;
    this.scope_1 = scope;
    this.parameters_1 = parameters;
  }
  InstanceContext.prototype.get_koin_wopbyq_k$ = function () {
    return this.koin_1;
  };
  InstanceContext.prototype.get_scope_iyfcq3_k$ = function () {
    return this.scope_1;
  };
  InstanceContext.prototype.get_parameters_cl4rkd_k$ = function () {
    return this.parameters_1;
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.ERROR_SEPARATOR_1 = '\n\t';
  }
  Companion_0.prototype.get_ERROR_SEPARATOR_l3t0ed_k$ = function () {
    return this.ERROR_SEPARATOR_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function InstanceFactory(beanDefinition) {
    Companion_getInstance_0();
    this.beanDefinition_1 = beanDefinition;
  }
  InstanceFactory.prototype.get_beanDefinition_b177zg_k$ = function () {
    return this.beanDefinition_1;
  };
  InstanceFactory.prototype.create_jnbvc8_k$ = function (context) {
    var koin = context.get_koin_wopbyq_k$();
    if (koin.get_logger_g9gejd_k$().isAt_9azl0c_k$(Level_DEBUG_getInstance())) {
      koin.get_logger_g9gejd_k$().debug_1nsf3z_k$('| create instance for ' + this.beanDefinition_1);
    }
    try {
      var tmp0_elvis_lhs = context.get_parameters_cl4rkd_k$();
      var parameters = tmp0_elvis_lhs == null ? emptyParametersHolder() : tmp0_elvis_lhs;
      return this.beanDefinition_1.get_definition_y2whcs_k$()(context.get_scope_iyfcq3_k$(), parameters);
    } catch ($p) {
      if ($p instanceof Exception) {
        var stack = KoinPlatformTools_getInstance().getStackTrace_hzwm26_k$($p);
        koin.get_logger_g9gejd_k$().error_3u4tx2_k$('Instance creation error : could not create instance for ' + this.beanDefinition_1 + ': ' + stack);
        throw new InstanceCreationException('Could not create instance for ' + this.beanDefinition_1, $p);
      } else {
        throw $p;
      }
    }
  };
  InstanceFactory.prototype.isCreated$default_4pev4s_k$ = function (context, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = null;
    return $handler == null ? this.isCreated_3z08on_k$(context) : $handler(context);
  };
  InstanceFactory.prototype.drop$default_nyors5_k$ = function (scope, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      scope = null;
    var tmp;
    if ($handler == null) {
      this.drop_jzjibc_k$(scope);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(scope);
    }
    return tmp;
  };
  function _set_values__uvbruz($this, _set____db54di) {
    $this.values_1 = _set____db54di;
  }
  function _get_values__tel787($this) {
    return $this.values_1;
  }
  function ScopedInstanceFactory$get$lambda(this$0, $context) {
    return function () {
      var tmp;
      if (!this$0.isCreated_3z08on_k$($context)) {
        var tmp0_set = this$0.values_1;
        var tmp1_set = $context.get_scope_iyfcq3_k$().get_id_kntnx8_k$();
        var tmp2_set = this$0.create_jnbvc8_k$($context);
        tmp0_set.put_3mhbri_k$(tmp1_set, tmp2_set);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ScopedInstanceFactory(beanDefinition) {
    InstanceFactory.call(this, beanDefinition);
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp$ret$0 = HashMap_init_$Create$();
    tmp.values_1 = tmp$ret$0;
  }
  ScopedInstanceFactory.prototype.isCreated_3z08on_k$ = function (context) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.get' call
    var tmp0_get = this.values_1;
    var tmp0_safe_receiver = context;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_scope_iyfcq3_k$();
    var tmp1_get = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_id_kntnx8_k$();
    tmp$ret$0 = (isInterface(tmp0_get, Map) ? tmp0_get : THROW_CCE()).get_1mhr4y_k$(tmp1_get);
    return !(tmp$ret$0 == null);
  };
  ScopedInstanceFactory.prototype.drop_jzjibc_k$ = function (scope) {
    var tmp0_safe_receiver = scope;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'org.koin.core.instance.ScopedInstanceFactory.drop.<anonymous>' call
      var tmp0_safe_receiver_0 = this.get_beanDefinition_b177zg_k$().get_callbacks_8qyswr_k$().get_onClose_l3bvrk_k$();
      if (tmp0_safe_receiver_0 == null)
        null;
      else
        tmp0_safe_receiver_0(this.values_1.get_1mhr4y_k$(tmp0_safe_receiver.get_id_kntnx8_k$()));
      tmp$ret$0 = this.values_1.remove_8hbkc0_k$(tmp0_safe_receiver.get_id_kntnx8_k$());
      tmp$ret$1 = tmp$ret$0;
    }
  };
  ScopedInstanceFactory.prototype.create_jnbvc8_k$ = function (context) {
    var tmp;
    if (this.values_1.get_1mhr4y_k$(context.get_scope_iyfcq3_k$().get_id_kntnx8_k$()) == null) {
      tmp = InstanceFactory.prototype.create_jnbvc8_k$.call(this, context);
    } else {
      var tmp0_elvis_lhs = this.values_1.get_1mhr4y_k$(context.get_scope_iyfcq3_k$().get_id_kntnx8_k$());
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var tmp0_error = 'Scoped instance not found for ' + context.get_scope_iyfcq3_k$().get_id_kntnx8_k$() + ' in ' + this.get_beanDefinition_b177zg_k$();
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  ScopedInstanceFactory.prototype.get_kchvk2_k$ = function (context) {
    if (!equals(context.get_scope_iyfcq3_k$().get_scopeQualifier_eby6kf_k$(), this.get_beanDefinition_b177zg_k$().get_scopeQualifier_eby6kf_k$())) {
      // Inline function 'kotlin.error' call
      var tmp0_error = 'Wrong Scope: trying to open instance for ' + context.get_scope_iyfcq3_k$().get_id_kntnx8_k$() + ' in ' + this.get_beanDefinition_b177zg_k$();
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
    var tmp = KoinPlatformTools_getInstance();
    tmp.synchronized_5h0e7m_k$(this, ScopedInstanceFactory$get$lambda(this, context));
    var tmp0_elvis_lhs = this.values_1.get_1mhr4y_k$(context.get_scope_iyfcq3_k$().get_id_kntnx8_k$());
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      var tmp1_error = 'Scoped instance not found for ' + context.get_scope_iyfcq3_k$().get_id_kntnx8_k$() + ' in ' + this.get_beanDefinition_b177zg_k$();
      throw IllegalStateException_init_$Create$(toString(tmp1_error));
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  };
  ScopedInstanceFactory.prototype.dropAll_wlge75_k$ = function () {
    this.values_1.clear_j9y8zo_k$();
  };
  ScopedInstanceFactory.prototype.refreshInstance_qwbym6_k$ = function (scopeID, instance) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.values_1;
    var tmp1_set = isObject(instance) ? instance : THROW_CCE();
    tmp0_set.put_3mhbri_k$(scopeID, tmp1_set);
  };
  function _set_value__lx0xdg($this, _set____db54di) {
    $this.value_1 = _set____db54di;
  }
  function _get_value__a43j40($this) {
    return $this.value_1;
  }
  function getValue($this) {
    var tmp0_elvis_lhs = $this.value_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$("Single instance created couldn't return value");
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SingleInstanceFactory$get$lambda(this$0, $context) {
    return function () {
      var tmp;
      if (!this$0.isCreated_3z08on_k$($context)) {
        this$0.value_1 = this$0.create_jnbvc8_k$($context);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SingleInstanceFactory(beanDefinition) {
    InstanceFactory.call(this, beanDefinition);
    this.value_1 = null;
  }
  SingleInstanceFactory.prototype.isCreated_3z08on_k$ = function (context) {
    return !(this.value_1 == null);
  };
  SingleInstanceFactory.prototype.drop_jzjibc_k$ = function (scope) {
    var tmp0_safe_receiver = this.get_beanDefinition_b177zg_k$().get_callbacks_8qyswr_k$().get_onClose_l3bvrk_k$();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(this.value_1);
    this.value_1 = null;
  };
  SingleInstanceFactory.prototype.dropAll_wlge75_k$ = function () {
    this.drop$default_nyors5_k$(null, 1, null);
  };
  SingleInstanceFactory.prototype.create_jnbvc8_k$ = function (context) {
    var tmp;
    if (this.value_1 == null) {
      tmp = InstanceFactory.prototype.create_jnbvc8_k$.call(this, context);
    } else {
      tmp = getValue(this);
    }
    return tmp;
  };
  SingleInstanceFactory.prototype.get_kchvk2_k$ = function (context) {
    var tmp = KoinPlatformTools_getInstance();
    tmp.synchronized_5h0e7m_k$(this, SingleInstanceFactory$get$lambda(this, context));
    return getValue(this);
  };
  function EmptyLogger() {
    Logger.call(this, Level_NONE_getInstance());
  }
  EmptyLogger.prototype.log_5yx0bh_k$ = function (level, msg) {
  };
  function Logger_init_$Init$(level, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      level = Level_INFO_getInstance();
    Logger.call($this, level);
    return $this;
  }
  function Logger_init_$Create$(level, $mask0, $marker) {
    return Logger_init_$Init$(level, $mask0, $marker, Object.create(Logger.prototype));
  }
  function canLog($this, level) {
    return $this.level_1.compareTo_6thzay_k$(level) <= 0;
  }
  function doLog($this, level, msg) {
    if (canLog($this, level)) {
      $this.log_5yx0bh_k$(level, msg);
    }
  }
  function Logger(level) {
    this.level_1 = level;
  }
  Logger.prototype.set_level_rig2n_k$ = function (_set____db54di) {
    this.level_1 = _set____db54di;
  };
  Logger.prototype.get_level_ium7h7_k$ = function () {
    return this.level_1;
  };
  Logger.prototype.debug_1nsf3z_k$ = function (msg) {
    doLog(this, Level_DEBUG_getInstance(), msg);
  };
  Logger.prototype.info_nf2s9o_k$ = function (msg) {
    doLog(this, Level_INFO_getInstance(), msg);
  };
  Logger.prototype.error_3u4tx2_k$ = function (msg) {
    doLog(this, Level_ERROR_getInstance(), msg);
  };
  Logger.prototype.isAt_9azl0c_k$ = function (lvl) {
    return this.level_1.compareTo_6thzay_k$(lvl) <= 0;
  };
  Logger.prototype.log_a77iie_k$ = function (lvl, msg) {
    if (this.isAt_9azl0c_k$(lvl)) {
      doLog(this, lvl, msg());
    }
  };
  var Level_DEBUG_instance;
  var Level_INFO_instance;
  var Level_ERROR_instance;
  var Level_NONE_instance;
  function values_0() {
    return [Level_DEBUG_getInstance(), Level_INFO_getInstance(), Level_ERROR_getInstance(), Level_NONE_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'DEBUG':
        return Level_DEBUG_getInstance();
      case 'INFO':
        return Level_INFO_getInstance();
      case 'ERROR':
        return Level_ERROR_getInstance();
      case 'NONE':
        return Level_NONE_getInstance();
      default:
        Level_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Level_entriesInitialized;
  function Level_initEntries() {
    if (Level_entriesInitialized)
      return Unit_getInstance();
    Level_entriesInitialized = true;
    Level_DEBUG_instance = new Level('DEBUG', 0);
    Level_INFO_instance = new Level('INFO', 1);
    Level_ERROR_instance = new Level('ERROR', 2);
    Level_NONE_instance = new Level('NONE', 3);
  }
  function Level(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function get_KOIN_TAG() {
    return KOIN_TAG;
  }
  var KOIN_TAG;
  function Level_DEBUG_getInstance() {
    Level_initEntries();
    return Level_DEBUG_instance;
  }
  function Level_INFO_getInstance() {
    Level_initEntries();
    return Level_INFO_instance;
  }
  function Level_ERROR_getInstance() {
    Level_initEntries();
    return Level_ERROR_instance;
  }
  function Level_NONE_getInstance() {
    Level_initEntries();
    return Level_NONE_instance;
  }
  function Module_init_$Init$(_createdAtStart, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      _createdAtStart = false;
    Module.call($this, _createdAtStart);
    return $this;
  }
  function Module_init_$Create$(_createdAtStart, $mask0, $marker) {
    return Module_init_$Init$(_createdAtStart, $mask0, $marker, Object.create(Module.prototype));
  }
  function Module(_createdAtStart) {
    this._createdAtStart_1 = _createdAtStart;
    this.id_1 = KoinPlatformTools_getInstance().generateId_52067k_k$();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.hashSetOf' call
    tmp$ret$0 = HashSet_init_$Create$();
    tmp.eagerInstances_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp$ret$1 = HashMap_init_$Create$();
    tmp_0.mappings_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.hashSetOf' call
    tmp$ret$2 = HashSet_init_$Create$();
    tmp_1.scopes_1 = tmp$ret$2;
    var tmp_2 = this;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$3 = ArrayList_init_$Create$();
    tmp_2.includedModules_1 = tmp$ret$3;
  }
  Module.prototype.get__createdAtStart_6om28z_k$ = function () {
    return this._createdAtStart_1;
  };
  Module.prototype.get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  Module.prototype.set_eagerInstances_hoqzvt_k$ = function (_set____db54di) {
    this.eagerInstances_1 = _set____db54di;
  };
  Module.prototype.get_eagerInstances_3ljm7j_k$ = function () {
    return this.eagerInstances_1;
  };
  Module.prototype.get_mappings_sl63f6_k$ = function () {
    return this.mappings_1;
  };
  Module.prototype.get_isLoaded_w81k7s_k$ = function () {
    return this.mappings_1.get_size_woubt6_k$() > 0;
  };
  Module.prototype.get_scopes_jebiqw_k$ = function () {
    return this.scopes_1;
  };
  Module.prototype.get_includedModules_c46mo2_k$ = function () {
    return this.includedModules_1;
  };
  Module.prototype.includes_8t8lz5_k$ = function (module_0) {
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.includedModules_1;
    addAll(tmp0_plusAssign, module_0);
  };
  Module.prototype.includes_xeftjz_k$ = function (module_0) {
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.includedModules_1;
    addAll_0(tmp0_plusAssign, module_0);
  };
  Module.prototype.scope_nbttwr_k$ = function (qualifier, scopeSet) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new ScopeDSL(qualifier, this);
    // Inline function 'kotlin.contracts.contract' call
    scopeSet(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    this.scopes_1.add_1j60pz_k$(qualifier);
  };
  Module.prototype.indexPrimaryType_6kc2cm_k$ = function (instanceFactory) {
    var def = instanceFactory.get_beanDefinition_b177zg_k$();
    var mapping = indexKey(def.get_primaryType_gbcb1_k$(), def.get_qualifier_c4gvsv_k$(), def.get_scopeQualifier_eby6kf_k$());
    this.saveMapping$default_4d30ez_k$(mapping, instanceFactory, false, 4, null);
  };
  Module.prototype.indexSecondaryTypes_mp47ev_k$ = function (instanceFactory) {
    var def = instanceFactory.get_beanDefinition_b177zg_k$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = def.get_secondaryTypes_du752m_k$();
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.koin.core.module.Module.indexSecondaryTypes.<anonymous>' call
      var mapping = indexKey(element, def.get_qualifier_c4gvsv_k$(), def.get_scopeQualifier_eby6kf_k$());
      this.saveMapping$default_4d30ez_k$(mapping, instanceFactory, false, 4, null);
    }
  };
  Module.prototype.prepareForCreationAtStart_9th3a_k$ = function (instanceFactory) {
    this.eagerInstances_1.add_1j60pz_k$(instanceFactory);
  };
  Module.prototype.saveMapping_fij348_k$ = function (mapping, factory, allowOverride) {
    var tmp;
    if (!allowOverride) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.contains' call
      var tmp0_contains = this.mappings_1;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.containsKey' call
      tmp$ret$0 = (isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).containsKey_wgk31w_k$(mapping);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    } else {
      tmp = false;
    }
    if (tmp) {
      overrideError(factory, mapping);
    }
    // Inline function 'kotlin.collections.set' call
    var tmp1_set = this.mappings_1;
    tmp1_set.put_3mhbri_k$(mapping, factory);
  };
  Module.prototype.saveMapping$default_4d30ez_k$ = function (mapping, factory, allowOverride, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      allowOverride = false;
    return this.saveMapping_fij348_k$(mapping, factory, allowOverride);
  };
  Module.prototype.plus_xvzq0b_k$ = function (module_0) {
    return listOf_0([this, module_0]);
  };
  Module.prototype.plus_nbsegx_k$ = function (modules) {
    return plus(listOf(this), modules);
  };
  Module.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof Module)
      other;
    else
      THROW_CCE();
    if (!(this.id_1 === other.id_1))
      return false;
    return true;
  };
  Module.prototype.hashCode = function () {
    return getStringHashCode(this.id_1);
  };
  function flatten(modules, newModules) {
    var modules_0 = modules;
    var newModules_0 = newModules;
    $l$1: do {
      $l$0: do {
        var tmp;
        if (modules_0.isEmpty_y1axqb_k$()) {
          tmp = newModules_0;
        } else {
          var tmp0_elvis_lhs = first(modules_0);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            throw IllegalStateException_init_$Create$('Flatten - No head element in list');
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var head = tmp_0;
          var tail = modules_0.subList_d153ha_k$(1, modules_0.get_size_woubt6_k$());
          var tmp_1;
          if (head.includedModules_1.isEmpty_y1axqb_k$()) {
            var tmp0 = tail;
            var tmp1 = plus_0(newModules_0, head);
            modules_0 = tmp0;
            newModules_0 = tmp1;
            continue $l$0;
          } else {
            var tmp2 = plus(head.includedModules_1, tail);
            var tmp3 = plus_0(newModules_0, head);
            modules_0 = tmp2;
            newModules_0 = tmp3;
            continue $l$0;
          }
          tmp = tmp_1;
        }
        return tmp;
      }
       while (false);
    }
     while (true);
  }
  function flatten$default(modules, newModules, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      newModules = emptySet();
    return flatten(modules, newModules);
  }
  function overrideError(factory, mapping) {
    throw new DefinitionOverrideException('Already existing definition for ' + factory.get_beanDefinition_b177zg_k$() + ' at ' + mapping);
  }
  function ParametersHolder_init_$Init$(_values, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$();
      tmp$ret$0_0 = Unit_getInstance();
      _values = tmp$ret$0;
    }
    ParametersHolder.call($this, _values);
    return $this;
  }
  function ParametersHolder_init_$Create$(_values, $mask0, $marker) {
    return ParametersHolder_init_$Init$(_values, $mask0, $marker, Object.create(ParametersHolder.prototype));
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.MAX_PARAMS_1 = 5;
  }
  Companion_1.prototype.get_MAX_PARAMS_jgsgie_k$ = function () {
    return this.MAX_PARAMS_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function ParametersHolder(_values) {
    Companion_getInstance_1();
    this._values_1 = _values;
  }
  ParametersHolder.prototype.get__values_wfmpnc_k$ = function () {
    return this._values_1;
  };
  ParametersHolder.prototype.get_values_ksazhn_k$ = function () {
    return this._values_1;
  };
  ParametersHolder.prototype.elementAt_7ihs0k_k$ = function (i, clazz) {
    var tmp;
    if (this._values_1.get_size_woubt6_k$() > i) {
      var tmp_0 = this._values_1.get_fkrdnv_k$(i);
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      throw new NoParameterFoundException("Can't get injected parameter #" + i + ' from ' + this + " for type '" + getFullName(clazz) + "'");
    }
    return tmp;
  };
  ParametersHolder.prototype.get_mntx2v_k$ = function (i) {
    var tmp = this._values_1.get_fkrdnv_k$(i);
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  ParametersHolder.prototype.set_z4t7y1_k$ = function (i, t) {
    this._values_1.set_meu351_k$(i, isObject(t) ? t : THROW_CCE());
  };
  ParametersHolder.prototype.size_23och_k$ = function () {
    return this._values_1.get_size_woubt6_k$();
  };
  ParametersHolder.prototype.isEmpty_y1axqb_k$ = function () {
    return this.size_23och_k$() === 0;
  };
  ParametersHolder.prototype.isNotEmpty_cjxbwk_k$ = function () {
    return !this.isEmpty_y1axqb_k$();
  };
  ParametersHolder.prototype.insert_i5ixxy_k$ = function (index, value) {
    this._values_1.add_ydlf05_k$(index, value);
    return this;
  };
  ParametersHolder.prototype.add_ylbznn_k$ = function (value) {
    this._values_1.add_1j60pz_k$(value);
    return this;
  };
  ParametersHolder.prototype.getOrNull_7f05lo_k$ = function (clazz) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstNotNullOfOrNull' call
      var tmp0_firstNotNullOfOrNull = this._values_1;
      var tmp0_iterator = tmp0_firstNotNullOfOrNull.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$0;
        // Inline function 'org.koin.core.parameter.ParametersHolder.getOrNull.<anonymous>' call
        var tmp;
        if (clazz.isInstance_6tn68w_k$(element)) {
          tmp = (element == null ? true : isObject(element)) ? element : null;
        } else {
          tmp = null;
        }
        tmp$ret$0 = tmp;
        var result = tmp$ret$0;
        if (!(result == null)) {
          tmp$ret$1 = result;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  ParametersHolder.prototype.toString = function () {
    return 'DefinitionParameters' + toList_0(this._values_1);
  };
  function emptyParametersHolder() {
    return ParametersHolder_init_$Create$(null, 1, null);
  }
  function Qualifier() {
  }
  function _q(name) {
    return new StringQualifier(name);
  }
  function StringQualifier(value) {
    this.value_1 = value;
  }
  StringQualifier.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  StringQualifier.prototype.toString = function () {
    return this.value_1;
  };
  StringQualifier.prototype.component1_7eebsc_k$ = function () {
    return this.value_1;
  };
  StringQualifier.prototype.copy_3t26ic_k$ = function (value) {
    return new StringQualifier(value);
  };
  StringQualifier.prototype.copy$default_q3pzg4_k$ = function (value, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      value = this.value_1;
    return this.copy_3t26ic_k$(value);
  };
  StringQualifier.prototype.hashCode = function () {
    return getStringHashCode(this.value_1);
  };
  StringQualifier.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StringQualifier))
      return false;
    var tmp0_other_with_cast = other instanceof StringQualifier ? other : THROW_CCE();
    if (!(this.value_1 === tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  function TypeQualifier(type) {
    this.type_1 = type;
    this.value_1 = getFullName(this.type_1);
  }
  TypeQualifier.prototype.get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  TypeQualifier.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  TypeQualifier.prototype.toString = function () {
    return "q:'" + this.value_1 + "'";
  };
  TypeQualifier.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof TypeQualifier)
      other;
    else
      THROW_CCE();
    if (!(this.value_1 === other.value_1))
      return false;
    return true;
  };
  TypeQualifier.prototype.hashCode = function () {
    return getStringHashCode(this.value_1);
  };
  function _get__instances__1pxuuk($this) {
    return $this._instances_1;
  }
  function _get_eagerInstances__e0lc9n($this) {
    return $this.eagerInstances_1;
  }
  function loadModule($this, module_0, allowOverride) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = module_0.get_mappings_sl63f6_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = tmp0_forEach.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.koin.core.registry.InstanceRegistry.loadModule.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.get_key_18j28a_k$();
      var mapping = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.get_value_j01efc_k$();
      var factory = tmp$ret$2;
      $this.saveMapping$default_rs1kxp_k$(allowOverride, mapping, factory, false, 8, null);
    }
  }
  function createEagerInstances($this, eagerInstances) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp$ret$0 = !eagerInstances.isEmpty_y1axqb_k$();
    if (tmp$ret$0) {
      if ($this._koin_1.get_logger_g9gejd_k$().isAt_9azl0c_k$(Level_DEBUG_getInstance())) {
        $this._koin_1.get_logger_g9gejd_k$().debug_1nsf3z_k$('Creating eager instances ...');
      }
      var tmp = $this._koin_1.get_scopeRegistry_7zu3y0_k$().get_rootScope_60k1zr_k$();
      var defaultContext = InstanceContext_init_$Create$($this._koin_1, tmp, null, 4, null);
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = eagerInstances.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'org.koin.core.registry.InstanceRegistry.createEagerInstances.<anonymous>' call
        element.get_kchvk2_k$(defaultContext);
      }
    }
  }
  function unloadModule($this, module_0) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = module_0.get_mappings_sl63f6_k$().get_keys_wop4xp_k$();
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.koin.core.registry.InstanceRegistry.unloadModule.<anonymous>' call
      if ($this._instances_1.containsKey_wgk31w_k$(element)) {
        var tmp0_safe_receiver = $this._instances_1.get_1mhr4y_k$(element);
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.dropAll_wlge75_k$();
        }
        $this._instances_1.remove_8hbkc0_k$(element);
      }
    }
  }
  function InstanceRegistry(_koin) {
    this._koin_1 = _koin;
    this._instances_1 = KoinPlatformTools_getInstance().safeHashMap_vw883b_k$();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.hashSetOf' call
    tmp$ret$0 = HashSet_init_$Create$();
    tmp.eagerInstances_1 = tmp$ret$0;
  }
  InstanceRegistry.prototype.get__koin_inkklb_k$ = function () {
    return this._koin_1;
  };
  InstanceRegistry.prototype.get_instances_8zuh1x_k$ = function () {
    return this._instances_1;
  };
  InstanceRegistry.prototype.loadModules_thcdwd_k$ = function (modules, allowOverride) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = modules.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.koin.core.registry.InstanceRegistry.loadModules.<anonymous>' call
      loadModule(this, element, allowOverride);
      this.eagerInstances_1.addAll_oxxjjk_k$(element.get_eagerInstances_3ljm7j_k$());
    }
  };
  InstanceRegistry.prototype.createAllEagerInstances_wwsk6y_k$ = function () {
    createEagerInstances(this, this.eagerInstances_1);
    this.eagerInstances_1.clear_j9y8zo_k$();
  };
  InstanceRegistry.prototype.saveMapping_nypaps_k$ = function (allowOverride, mapping, factory, logWarning) {
    if (this._instances_1.containsKey_wgk31w_k$(mapping)) {
      if (!allowOverride) {
        overrideError(factory, mapping);
      } else {
        if (logWarning) {
          this._koin_1.get_logger_g9gejd_k$().info_nf2s9o_k$("Override Mapping '" + mapping + "' with " + factory.get_beanDefinition_b177zg_k$());
        }
      }
    }
    if (this._koin_1.get_logger_g9gejd_k$().isAt_9azl0c_k$(Level_DEBUG_getInstance()) ? logWarning : false) {
      this._koin_1.get_logger_g9gejd_k$().debug_1nsf3z_k$("add mapping '" + mapping + "' for " + factory.get_beanDefinition_b177zg_k$());
    }
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this._instances_1;
    tmp0_set.put_3mhbri_k$(mapping, factory);
  };
  InstanceRegistry.prototype.saveMapping$default_rs1kxp_k$ = function (allowOverride, mapping, factory, logWarning, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      logWarning = true;
    return this.saveMapping_nypaps_k$(allowOverride, mapping, factory, logWarning);
  };
  InstanceRegistry.prototype.resolveDefinition_bo7uo6_k$ = function (clazz, qualifier, scopeQualifier) {
    var indexKey_0 = indexKey(clazz, qualifier, scopeQualifier);
    return this._instances_1.get_1mhr4y_k$(indexKey_0);
  };
  InstanceRegistry.prototype.resolveInstance_cs8p06_k$ = function (qualifier, clazz, scopeQualifier, instanceContext) {
    var tmp0_safe_receiver = this.resolveDefinition_bo7uo6_k$(clazz, qualifier, scopeQualifier);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_kchvk2_k$(instanceContext);
    return (tmp == null ? true : isObject(tmp)) ? tmp : null;
  };
  InstanceRegistry.prototype.dropScopeInstances_gs4w8h_k$ = function (scope) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.filterIsInstance' call
    var tmp1_filterIsInstance = this._instances_1.get_values_ksazhn_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var tmp0_filterIsInstanceTo = ArrayList_init_$Create$();
    var tmp0_iterator = tmp1_filterIsInstance.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      if (element instanceof ScopedInstanceFactory) {
        tmp0_filterIsInstanceTo.add_1j60pz_k$(element);
      }
    }
    tmp$ret$0 = tmp0_filterIsInstanceTo;
    tmp$ret$1 = tmp$ret$0;
    var tmp2_forEach = tmp$ret$1;
    var tmp0_iterator_0 = tmp2_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'org.koin.core.registry.InstanceRegistry.dropScopeInstances.<anonymous>' call
      element_0.drop_jzjibc_k$(scope);
    }
  };
  InstanceRegistry.prototype.close_ymq55z_k$ = function () {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this._instances_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = tmp0_forEach.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.koin.core.registry.InstanceRegistry.close.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.get_key_18j28a_k$();
      var key = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.get_value_j01efc_k$();
      var factory = tmp$ret$2;
      factory.dropAll_wlge75_k$();
    }
    this._instances_1.clear_j9y8zo_k$();
  };
  InstanceRegistry.prototype.getAll_w2pul7_k$ = function (clazz, instanceContext) {
    var tmp$ret$8;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$5;
    // Inline function 'kotlin.collections.filter' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.filter' call
    var tmp1_filter = this._instances_1.get_values_ksazhn_k$();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$();
    var tmp0_iterator = tmp1_filter.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'org.koin.core.registry.InstanceRegistry.getAll.<anonymous>' call
      tmp$ret$0 = equals(element.get_beanDefinition_b177zg_k$().get_scopeQualifier_eby6kf_k$(), instanceContext.get_scope_iyfcq3_k$().get_scopeQualifier_eby6kf_k$());
      if (tmp$ret$0) {
        tmp0_filterTo.add_1j60pz_k$(element);
      }
    }
    tmp$ret$1 = tmp0_filterTo;
    tmp$ret$2 = tmp$ret$1;
    var tmp3_filter = tmp$ret$2;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp2_filterTo = ArrayList_init_$Create$();
    var tmp0_iterator_0 = tmp3_filter.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      var tmp$ret$3;
      // Inline function 'org.koin.core.registry.InstanceRegistry.getAll.<anonymous>' call
      tmp$ret$3 = element_0.get_beanDefinition_b177zg_k$().get_primaryType_gbcb1_k$().equals(clazz) ? true : element_0.get_beanDefinition_b177zg_k$().get_secondaryTypes_du752m_k$().contains_2ehdt1_k$(clazz);
      if (tmp$ret$3) {
        tmp2_filterTo.add_1j60pz_k$(element_0);
      }
    }
    tmp$ret$4 = tmp2_filterTo;
    tmp$ret$5 = tmp$ret$4;
    var tmp5_map = distinct(tmp$ret$5);
    var tmp$ret$7;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp4_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp5_map, 10));
    var tmp0_iterator_1 = tmp5_map.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator_1.next_20eer_k$();
      var tmp$ret$6;
      // Inline function 'org.koin.core.registry.InstanceRegistry.getAll.<anonymous>' call
      var tmp = item.get_kchvk2_k$(instanceContext);
      tmp$ret$6 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
      tmp4_mapTo.add_1j60pz_k$(tmp$ret$6);
    }
    tmp$ret$7 = tmp4_mapTo;
    tmp$ret$8 = tmp$ret$7;
    return tmp$ret$8;
  };
  InstanceRegistry.prototype.unloadModules_rv8cqk_k$ = function (modules) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = modules.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.koin.core.registry.InstanceRegistry.unloadModules.<anonymous>' call
      unloadModule(this, element);
    }
  };
  InstanceRegistry.prototype.size_23och_k$ = function () {
    return this._instances_1.get_size_woubt6_k$();
  };
  function _get__values__6yksts($this) {
    return $this._values_1;
  }
  function PropertyRegistry$saveProperties$lambda($properties) {
    return function () {
      return 'load ' + $properties.get_size_woubt6_k$() + ' properties';
    };
  }
  function PropertyRegistry(_koin) {
    this._koin_1 = _koin;
    this._values_1 = KoinPlatformTools_getInstance().safeHashMap_vw883b_k$();
  }
  PropertyRegistry.prototype.get__koin_inkklb_k$ = function () {
    return this._koin_1;
  };
  PropertyRegistry.prototype.saveProperties_q6b72h_k$ = function (properties) {
    var tmp = this._koin_1.get_logger_g9gejd_k$();
    var tmp_0 = Level_DEBUG_getInstance();
    tmp.log_a77iie_k$(tmp_0, PropertyRegistry$saveProperties$lambda(properties));
    this._values_1.putAll_mee1c3_k$(properties);
  };
  PropertyRegistry.prototype.saveProperty_d7jy4s_k$ = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this._values_1;
    tmp0_set.put_3mhbri_k$(key, value);
  };
  PropertyRegistry.prototype.deleteProperty_9xld72_k$ = function (key) {
    this._values_1.remove_8hbkc0_k$(key);
  };
  PropertyRegistry.prototype.getProperty_sqfjxw_k$ = function (key) {
    var tmp = this._values_1.get_1mhr4y_k$(key);
    return (tmp == null ? true : isObject(tmp)) ? tmp : null;
  };
  PropertyRegistry.prototype.close_ymq55z_k$ = function () {
    this._values_1.clear_j9y8zo_k$();
  };
  function _get_ROOT_SCOPE_ID__69ax66($this) {
    return $this.ROOT_SCOPE_ID_1;
  }
  function _get__koin__kul7yv($this) {
    return $this._koin_1;
  }
  function _get__scopeDefinitions__3phb96($this) {
    return $this._scopeDefinitions_1;
  }
  function _get__scopes__yy5frn($this) {
    return $this._scopes_1;
  }
  function closeAllScopes($this) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = $this._scopes_1.get_values_ksazhn_k$();
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.koin.core.registry.ScopeRegistry.closeAllScopes.<anonymous>' call
      element.close_ymq55z_k$();
    }
  }
  function loadModule_0($this, module_0) {
    $this._scopeDefinitions_1.addAll_oxxjjk_k$(module_0.get_scopes_jebiqw_k$());
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.ROOT_SCOPE_ID_1 = '_root_';
    this.rootScopeQualifier_1 = _q('_root_');
  }
  Companion_2.prototype.get_rootScopeQualifier_6qrm0v_k$ = function () {
    return this.rootScopeQualifier_1;
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function ScopeRegistry(_koin) {
    Companion_getInstance_2();
    this._koin_1 = _koin;
    this._scopeDefinitions_1 = HashSet_init_$Create$();
    this._scopes_1 = KoinPlatformTools_getInstance().safeHashMap_vw883b_k$();
    var tmp = this;
    var tmp_0 = Companion_getInstance_2().rootScopeQualifier_1;
    Companion_getInstance_2();
    tmp.rootScope_1 = new Scope(tmp_0, '_root_', true, this._koin_1);
    this._scopeDefinitions_1.add_1j60pz_k$(this.rootScope_1.get_scopeQualifier_eby6kf_k$());
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this._scopes_1;
    var tmp1_set = this.rootScope_1.get_id_kntnx8_k$();
    var tmp2_set = this.rootScope_1;
    tmp0_set.put_3mhbri_k$(tmp1_set, tmp2_set);
  }
  ScopeRegistry.prototype.get_scopeDefinitions_dqva97_k$ = function () {
    return this._scopeDefinitions_1;
  };
  ScopeRegistry.prototype.get_rootScope_60k1zr_k$ = function () {
    return this.rootScope_1;
  };
  ScopeRegistry.prototype.getScopeOrNull_vptix3_k$ = function (scopeId) {
    return this._scopes_1.get_1mhr4y_k$(scopeId);
  };
  ScopeRegistry.prototype.createScope_l554vf_k$ = function (scopeId, qualifier, source) {
    if (!this._scopeDefinitions_1.contains_2ehdt1_k$(qualifier)) {
      this._koin_1.get_logger_g9gejd_k$().info_nf2s9o_k$("Warning: Scope '" + qualifier + "' not defined. Creating it");
      this._scopeDefinitions_1.add_1j60pz_k$(qualifier);
    }
    var tmp$ret$1;
    // Inline function 'kotlin.collections.contains' call
    var tmp0_contains = this._scopes_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.containsKey' call
    tmp$ret$0 = (isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).containsKey_wgk31w_k$(scopeId);
    tmp$ret$1 = tmp$ret$0;
    if (tmp$ret$1) {
      throw new ScopeAlreadyCreatedException("Scope with id '" + scopeId + "' is already created");
    }
    var scope = Scope_init_$Create$(qualifier, scopeId, false, this._koin_1, 4, null);
    var tmp0_safe_receiver = source;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      scope.set__source_t801al_k$(source);
      tmp$ret$2 = Unit_getInstance();
    }
    scope.linkTo_ao6bsx_k$([this.rootScope_1]);
    // Inline function 'kotlin.collections.set' call
    var tmp1_set = this._scopes_1;
    tmp1_set.put_3mhbri_k$(scopeId, scope);
    return scope;
  };
  ScopeRegistry.prototype.createScope$default_2nf3i2_k$ = function (scopeId, qualifier, source, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      source = null;
    return this.createScope_l554vf_k$(scopeId, qualifier, source);
  };
  ScopeRegistry.prototype.deleteScope_z9844p_k$ = function (scopeId) {
    var tmp0_safe_receiver = this._scopes_1.get_1mhr4y_k$(scopeId);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.deleteScope_azve1r_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
  };
  ScopeRegistry.prototype.deleteScope_azve1r_k$ = function (scope) {
    this._koin_1.get_instanceRegistry_jmeu6d_k$().dropScopeInstances_gs4w8h_k$(scope);
    this._scopes_1.remove_8hbkc0_k$(scope.get_id_kntnx8_k$());
  };
  ScopeRegistry.prototype.close_ymq55z_k$ = function () {
    closeAllScopes(this);
    this._scopes_1.clear_j9y8zo_k$();
    this._scopeDefinitions_1.clear_j9y8zo_k$();
  };
  ScopeRegistry.prototype.loadScopes_a69qav_k$ = function (modules) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = modules.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.koin.core.registry.ScopeRegistry.loadScopes.<anonymous>' call
      loadModule_0(this, element);
    }
  };
  function Scope_init_$Init$(scopeQualifier, id, isRoot, _koin, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      isRoot = false;
    Scope.call($this, scopeQualifier, id, isRoot, _koin);
    return $this;
  }
  function Scope_init_$Create$(scopeQualifier, id, isRoot, _koin, $mask0, $marker) {
    return Scope_init_$Init$(scopeQualifier, id, isRoot, _koin, $mask0, $marker, Object.create(Scope.prototype));
  }
  function _get_linkedScopes__komjf1($this) {
    return $this.linkedScopes_1;
  }
  function _get__callbacks__jvmpss($this) {
    return $this._callbacks_1;
  }
  function _set__closed__rya7c6($this, _set____db54di) {
    $this._closed_1 = _set____db54di;
  }
  function _get__closed__hglk9y($this) {
    return $this._closed_1;
  }
  function resolveInstance($this, qualifier, clazz, parameterDef) {
    if ($this._closed_1) {
      throw new ClosedScopeException("Scope '" + $this.id_1 + "' is closed");
    }
    var tmp0_safe_receiver = parameterDef;
    var parameters = tmp0_safe_receiver == null ? null : tmp0_safe_receiver();
    if (!(parameters == null)) {
      var tmp = $this._koin_1.get_logger_g9gejd_k$();
      var tmp_0 = Level_DEBUG_getInstance();
      tmp.log_a77iie_k$(tmp_0, Scope$resolveInstance$lambda(parameters));
      $this._parameterStack_1.addFirst_qo8i10_k$(parameters);
    }
    var instanceContext = new InstanceContext($this._koin_1, $this, parameters);
    var value = resolveValue($this, qualifier, clazz, instanceContext, parameterDef);
    if (!(parameters == null)) {
      var tmp_1 = $this._koin_1.get_logger_g9gejd_k$();
      var tmp_2 = Level_DEBUG_getInstance();
      tmp_1.log_a77iie_k$(tmp_2, Scope$resolveInstance$lambda_0);
      $this._parameterStack_1.removeFirstOrNull_eges3a_k$();
    }
    return value;
  }
  function resolveValue($this, qualifier, clazz, instanceContext, parameterDef) {
    var tmp0_elvis_lhs = $this._koin_1.get_instanceRegistry_jmeu6d_k$().resolveInstance_cs8p06_k$(qualifier, clazz, $this.scopeQualifier_1, instanceContext);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$1;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'org.koin.core.scope.Scope.resolveValue.<anonymous>' call
      var tmp_0 = $this._koin_1.get_logger_g9gejd_k$();
      var tmp_1 = Level_DEBUG_getInstance();
      tmp_0.log_a77iie_k$(tmp_1, Scope$resolveValue$lambda(clazz, qualifier));
      var tmp0_safe_receiver = $this._parameterStack_1.firstOrNull_j0zfvq_k$();
      tmp$ret$0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.getOrNull_7f05lo_k$(clazz);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_2;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$5;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$4;
      // Inline function 'org.koin.core.scope.Scope.resolveValue.<anonymous>' call
      var tmp_3 = $this._koin_1.get_logger_g9gejd_k$();
      var tmp_4 = Level_DEBUG_getInstance();
      tmp_3.log_a77iie_k$(tmp_4, Scope$resolveValue$lambda_0(clazz, qualifier));
      var tmp0_safe_receiver_0 = $this._source_1;
      var tmp_5;
      if (tmp0_safe_receiver_0 == null) {
        tmp_5 = null;
      } else {
        var tmp$ret$3;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$2;
        // Inline function 'org.koin.core.scope.Scope.resolveValue.<anonymous>.<anonymous>' call
        var tmp_6;
        if (clazz.isInstance_6tn68w_k$(tmp0_safe_receiver_0)) {
          var tmp_7 = $this._source_1;
          tmp_6 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : null;
        } else {
          tmp_6 = null;
        }
        tmp$ret$2 = tmp_6;
        tmp$ret$3 = tmp$ret$2;
        tmp_5 = tmp$ret$3;
      }
      tmp$ret$4 = tmp_5;
      tmp$ret$5 = tmp$ret$4;
      tmp_2 = tmp$ret$5;
    } else {
      tmp_2 = tmp1_elvis_lhs;
    }
    var tmp2_elvis_lhs = tmp_2;
    var tmp_8;
    if (tmp2_elvis_lhs == null) {
      var tmp$ret$7;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'org.koin.core.scope.Scope.resolveValue.<anonymous>' call
      var tmp_9 = $this._koin_1.get_logger_g9gejd_k$();
      var tmp_10 = Level_DEBUG_getInstance();
      tmp_9.log_a77iie_k$(tmp_10, Scope$resolveValue$lambda_1(clazz, qualifier));
      tmp$ret$6 = findInOtherScope($this, clazz, qualifier, parameterDef);
      tmp$ret$7 = tmp$ret$6;
      tmp_8 = tmp$ret$7;
    } else {
      tmp_8 = tmp2_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_8;
    var tmp_11;
    if (tmp3_elvis_lhs == null) {
      var tmp$ret$9;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$8;
      // Inline function 'org.koin.core.scope.Scope.resolveValue.<anonymous>' call
      $this._parameterStack_1.clear_j9y8zo_k$();
      var tmp_12 = $this._koin_1.get_logger_g9gejd_k$();
      var tmp_13 = Level_DEBUG_getInstance();
      tmp_12.log_a77iie_k$(tmp_13, Scope$resolveValue$lambda_2);
      throwDefinitionNotFound($this, qualifier, clazz);
      tmp$ret$9 = tmp$ret$8;
      tmp_11 = tmp$ret$9;
    } else {
      tmp_11 = tmp3_elvis_lhs;
    }
    return tmp_11;
  }
  function getFromSource($this, clazz) {
    var tmp;
    if (clazz.isInstance_6tn68w_k$($this._source_1)) {
      var tmp_0 = $this._source_1;
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : null;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function findInOtherScope($this, clazz, qualifier, parameters) {
    var instance = null;
    var tmp0_iterator = $this.linkedScopes_1.iterator_jk1svi_k$();
    $l$loop: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var scope = tmp0_iterator.next_20eer_k$();
      instance = scope.getOrNull_re75dc_k$(clazz, qualifier, parameters);
      if (!(instance == null))
        break $l$loop;
    }
    return instance;
  }
  function throwDefinitionNotFound($this, qualifier, clazz) {
    var tmp0_safe_receiver = qualifier;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'org.koin.core.scope.Scope.throwDefinitionNotFound.<anonymous>' call
      tmp$ret$0 = " & qualifier:'" + qualifier + "'";
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var qualifierString = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    throw new NoBeanDefFoundException("|- No definition found for class:'" + getFullName(clazz) + "'" + qualifierString + '. Check your definitions!');
  }
  function clearData($this) {
    $this._source_1 = null;
    if ($this._koin_1.get_logger_g9gejd_k$().isAt_9azl0c_k$(Level_DEBUG_getInstance())) {
      $this._koin_1.get_logger_g9gejd_k$().info_nf2s9o_k$("closing scope:'" + $this.id_1 + "'");
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = $this._callbacks_1;
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.koin.core.scope.Scope.clearData.<anonymous>' call
      element.onScopeClose_lijfi1_k$($this);
    }
    $this._callbacks_1.clear_j9y8zo_k$();
  }
  function Scope$get$lambda(this$0, $qualifier, $clazz, $parameters) {
    return function () {
      return resolveInstance(this$0, $qualifier, $clazz, $parameters);
    };
  }
  function Scope$resolveInstance$lambda($parameters) {
    return function () {
      return '| put parameters on stack ' + $parameters + ' ';
    };
  }
  function Scope$resolveInstance$lambda_0() {
    return '| remove parameters from stack';
  }
  function Scope$resolveValue$lambda($clazz, $qualifier) {
    return function () {
      return "- lookup? t:'" + getFullName($clazz) + "' - q:'" + $qualifier + "' look in injected parameters";
    };
  }
  function Scope$resolveValue$lambda_0($clazz, $qualifier) {
    return function () {
      return "- lookup? t:'" + getFullName($clazz) + "' - q:'" + $qualifier + "' look at scope source";
    };
  }
  function Scope$resolveValue$lambda_1($clazz, $qualifier) {
    return function () {
      return "- lookup? t:'" + getFullName($clazz) + "' - q:'" + $qualifier + "' look in other scopes";
    };
  }
  function Scope$resolveValue$lambda_2() {
    return '| clear parameter stack';
  }
  function Scope$close$lambda(this$0) {
    return function () {
      this$0._closed_1 = true;
      clearData(this$0);
      this$0._koin_1.get_scopeRegistry_7zu3y0_k$().deleteScope_azve1r_k$(this$0);
      return Unit_getInstance();
    };
  }
  function Scope(scopeQualifier, id, isRoot, _koin) {
    this.scopeQualifier_1 = scopeQualifier;
    this.id_1 = id;
    this.isRoot_1 = isRoot;
    this._koin_1 = _koin;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.linkedScopes_1 = tmp$ret$0;
    this._source_1 = null;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0._callbacks_1 = tmp$ret$1;
    this._parameterStack_1 = ArrayDeque_init_$Create$();
    this._closed_1 = false;
  }
  Scope.prototype.get_scopeQualifier_eby6kf_k$ = function () {
    return this.scopeQualifier_1;
  };
  Scope.prototype.get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  Scope.prototype.get_isRoot_ew5h6d_k$ = function () {
    return this.isRoot_1;
  };
  Scope.prototype.get__koin_inkklb_k$ = function () {
    return this._koin_1;
  };
  Scope.prototype.set__source_t801al_k$ = function (_set____db54di) {
    this._source_1 = _set____db54di;
  };
  Scope.prototype.get__source_v8cndd_k$ = function () {
    return this._source_1;
  };
  Scope.prototype.get_closed_byjrzp_k$ = function () {
    return this._closed_1;
  };
  Scope.prototype.isNotClosed_x1h9n9_k$ = function () {
    return !this.get_closed_byjrzp_k$();
  };
  Scope.prototype.get__parameterStack_bsr1cl_k$ = function () {
    return this._parameterStack_1;
  };
  Scope.prototype.get_logger_g9gejd_k$ = function () {
    return this._koin_1.get_logger_g9gejd_k$();
  };
  Scope.prototype.create_849kn2_k$ = function (links) {
    this.linkedScopes_1.addAll_oxxjjk_k$(links);
  };
  Scope.prototype.linkTo_ao6bsx_k$ = function (scopes) {
    if (!this.isRoot_1) {
      addAll(this.linkedScopes_1, scopes);
    } else {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$("Can't add scope link to a root scope");
    }
  };
  Scope.prototype.unlink_p4pscd_k$ = function (scopes) {
    if (!this.isRoot_1) {
      removeAll(this.linkedScopes_1, scopes);
    } else {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$("Can't remove scope link to a root scope");
    }
  };
  Scope.prototype.getOrNull_re75dc_k$ = function (clazz, qualifier, parameters) {
    var tmp;
    try {
      tmp = this.get_ocvqe2_k$(clazz, qualifier, parameters);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof ClosedScopeException) {
        this._koin_1.get_logger_g9gejd_k$().debug_1nsf3z_k$('|- Scope closed - no instance found for ' + getFullName(clazz) + ' on scope ' + this.toString());
        tmp_0 = null;
      } else {
        if ($p instanceof NoBeanDefFoundException) {
          this._koin_1.get_logger_g9gejd_k$().debug_1nsf3z_k$('|- No instance found for ' + getFullName(clazz) + ' on scope ' + this.toString());
          tmp_0 = null;
        } else {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  Scope.prototype.getOrNull$default_3za52n_k$ = function (clazz, qualifier, parameters, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      qualifier = null;
    if (!(($mask0 & 4) === 0))
      parameters = null;
    return this.getOrNull_re75dc_k$(clazz, qualifier, parameters);
  };
  Scope.prototype.get_ocvqe2_k$ = function (clazz, qualifier, parameters) {
    var tmp;
    if (this._koin_1.get_logger_g9gejd_k$().isAt_9azl0c_k$(Level_DEBUG_getInstance())) {
      var tmp0_safe_receiver = qualifier;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'org.koin.core.scope.Scope.get.<anonymous>' call
        tmp$ret$0 = " with qualifier '" + qualifier + "'";
        tmp$ret$1 = tmp$ret$0;
        tmp_0 = tmp$ret$1;
      }
      var tmp1_elvis_lhs = tmp_0;
      var qualifierString = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
      this._koin_1.get_logger_g9gejd_k$().debug_1nsf3z_k$("+- '" + getFullName(clazz) + "'" + qualifierString);
      var tmp2_container = measureDurationForResult(Scope$get$lambda(this, qualifier, clazz, parameters));
      var instance = tmp2_container.component1_7eebsc_k$();
      var duration = tmp2_container.component2_7eebsb_k$();
      this._koin_1.get_logger_g9gejd_k$().debug_1nsf3z_k$("|- '" + getFullName(clazz) + "' in " + duration + ' ms');
      return instance;
    } else {
      tmp = resolveInstance(this, qualifier, clazz, parameters);
    }
    return tmp;
  };
  Scope.prototype.get$default_dbowaj_k$ = function (clazz, qualifier, parameters, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      qualifier = null;
    if (!(($mask0 & 4) === 0))
      parameters = null;
    return this.get_ocvqe2_k$(clazz, qualifier, parameters);
  };
  Scope.prototype.refreshScopeInstance_j3n17d_k$ = function (clazz, qualifier, instance) {
    if (this._closed_1) {
      throw new ClosedScopeException("Scope '" + this.id_1 + "' is closed");
    }
    var definition = this._koin_1.get_instanceRegistry_jmeu6d_k$().resolveDefinition_bo7uo6_k$(clazz, qualifier, this.scopeQualifier_1);
    var tmp0_safe_receiver = definition instanceof ScopedInstanceFactory ? definition : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.koin.core.scope.Scope.refreshScopeInstance.<anonymous>' call
      this._koin_1.get_logger_g9gejd_k$().debug_1nsf3z_k$("|- '" + getFullName(clazz) + "' refresh with " + instance);
      tmp0_safe_receiver.refreshInstance_qwbym6_k$(this.id_1, instance);
      tmp$ret$0 = tmp0_safe_receiver;
    }
  };
  Scope.prototype.refreshScopeInstance$default_a2sthm_k$ = function (clazz, qualifier, instance, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      qualifier = null;
    return this.refreshScopeInstance_j3n17d_k$(clazz, qualifier, instance);
  };
  Scope.prototype.getKoin_18vqwx_k$ = function () {
    return this._koin_1;
  };
  Scope.prototype.getScope_gk9t7n_k$ = function (scopeID) {
    return this.getKoin_18vqwx_k$().getScope_gk9t7n_k$(scopeID);
  };
  Scope.prototype.registerCallback_afgz6r_k$ = function (callback) {
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this._callbacks_1;
    tmp0_plusAssign.add_1j60pz_k$(callback);
  };
  Scope.prototype.getAll_bcjfbj_k$ = function (clazz) {
    var context = InstanceContext_init_$Create$(this._koin_1, this, null, 4, null);
    var tmp = this._koin_1.get_instanceRegistry_jmeu6d_k$().getAll_w2pul7_k$(clazz, context);
    var tmp$ret$2;
    // Inline function 'kotlin.collections.flatMap' call
    var tmp1_flatMap = this.linkedScopes_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.flatMapTo' call
    var tmp0_flatMapTo = ArrayList_init_$Create$();
    var tmp0_iterator = tmp1_flatMap.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'org.koin.core.scope.Scope.getAll.<anonymous>' call
      tmp$ret$0 = element.getAll_bcjfbj_k$(clazz);
      var list = tmp$ret$0;
      addAll_0(tmp0_flatMapTo, list);
    }
    tmp$ret$1 = tmp0_flatMapTo;
    tmp$ret$2 = tmp$ret$1;
    return plus(tmp, tmp$ret$2);
  };
  Scope.prototype.getProperty_n7ug6a_k$ = function (key, defaultValue) {
    return this._koin_1.getProperty_n7ug6a_k$(key, defaultValue);
  };
  Scope.prototype.getPropertyOrNull_ynzecz_k$ = function (key) {
    return this._koin_1.getProperty_gwh1jd_k$(key);
  };
  Scope.prototype.getProperty_gwh1jd_k$ = function (key) {
    var tmp0_elvis_lhs = this._koin_1.getProperty_gwh1jd_k$(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new MissingPropertyException("Property '" + key + "' not found");
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  Scope.prototype.close_ymq55z_k$ = function () {
    var tmp = KoinPlatformTools_getInstance();
    return tmp.synchronized_5h0e7m_k$(this, Scope$close$lambda(this));
  };
  Scope.prototype.toString = function () {
    return "['" + this.id_1 + "']";
  };
  Scope.prototype.component1_7eebsc_k$ = function () {
    return this.scopeQualifier_1;
  };
  Scope.prototype.component2_7eebsb_k$ = function () {
    return this.id_1;
  };
  Scope.prototype.component3_7eebsa_k$ = function () {
    return this.isRoot_1;
  };
  Scope.prototype.component4_7eebs9_k$ = function () {
    return this._koin_1;
  };
  Scope.prototype.copy_k0w8jt_k$ = function (scopeQualifier, id, isRoot, _koin) {
    return new Scope(scopeQualifier, id, isRoot, _koin);
  };
  Scope.prototype.copy$default_tk1u7p_k$ = function (scopeQualifier, id, isRoot, _koin, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      scopeQualifier = this.scopeQualifier_1;
    if (!(($mask0 & 2) === 0))
      id = this.id_1;
    if (!(($mask0 & 4) === 0))
      isRoot = this.isRoot_1;
    if (!(($mask0 & 8) === 0))
      _koin = this._koin_1;
    return this.copy_k0w8jt_k$(scopeQualifier, id, isRoot, _koin);
  };
  Scope.prototype.hashCode = function () {
    var result = hashCode(this.scopeQualifier_1);
    result = imul(result, 31) + getStringHashCode(this.id_1) | 0;
    result = imul(result, 31) + (this.isRoot_1 | 0) | 0;
    result = imul(result, 31) + hashCode(this._koin_1) | 0;
    return result;
  };
  Scope.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Scope))
      return false;
    var tmp0_other_with_cast = other instanceof Scope ? other : THROW_CCE();
    if (!equals(this.scopeQualifier_1, tmp0_other_with_cast.scopeQualifier_1))
      return false;
    if (!(this.id_1 === tmp0_other_with_cast.id_1))
      return false;
    if (!(this.isRoot_1 === tmp0_other_with_cast.isRoot_1))
      return false;
    if (!equals(this._koin_1, tmp0_other_with_cast._koin_1))
      return false;
    return true;
  };
  function ScopeCallback() {
  }
  function measureDuration(code) {
    return measureTimedValue(code).get_second_jf7fjx_k$();
  }
  function measureDurationForResult(code) {
    var tmp0_container = measureTimedValue(code);
    var value = tmp0_container.component1_7eebsc_k$();
    var duration = tmp0_container.component2_7eebsb_k$();
    return new Pair(value, duration);
  }
  function measureTimedValue(code) {
    var start = KoinPlatformTimeTools_getInstance().getTimeInNanoSeconds_rsnqv1_k$();
    var value = code();
    var end = KoinPlatformTimeTools_getInstance().getTimeInNanoSeconds_rsnqv1_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.Long.div' call
    var tmp0_div = end.minus_llf5ei_k$(start);
    tmp$ret$0 = tmp0_div.toDouble_ygsx0s_k$() / 1000000.0;
    return new Pair(value, tmp$ret$0);
  }
  function ScopeDSL(scopeQualifier, module_0) {
    this.scopeQualifier_1 = scopeQualifier;
    this.module_1 = module_0;
  }
  ScopeDSL.prototype.get_scopeQualifier_eby6kf_k$ = function () {
    return this.scopeQualifier_1;
  };
  ScopeDSL.prototype.get_module_gqgeid_k$ = function () {
    return this.module_1;
  };
  function get_classNames() {
    init_properties_KClassExt_kt_uc2ra8();
    return classNames;
  }
  var classNames;
  function getFullName(_this__u8e3s4) {
    init_properties_KClassExt_kt_uc2ra8();
    var tmp0_elvis_lhs = get_classNames().get_1mhr4y_k$(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? saveCache(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function saveCache(_this__u8e3s4) {
    init_properties_KClassExt_kt_uc2ra8();
    var name = KoinPlatformTools_getInstance().getClassName_lv7ybb_k$(_this__u8e3s4);
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = get_classNames();
    tmp0_set.put_3mhbri_k$(_this__u8e3s4, name);
    return name;
  }
  var properties_initialized_KClassExt_kt_dizwhw;
  function init_properties_KClassExt_kt_uc2ra8() {
    if (properties_initialized_KClassExt_kt_dizwhw) {
    } else {
      properties_initialized_KClassExt_kt_dizwhw = true;
      classNames = KoinPlatformTools_getInstance().safeHashMap_vw883b_k$();
    }
  }
  function _set__koin__b6j8il($this, _set____db54di) {
    $this._koin_1 = _set____db54di;
  }
  function _get__koin__kul7yv_0($this) {
    return $this._koin_1;
  }
  function register($this, koinApplication) {
    if (!($this._koin_1 == null)) {
      throw new KoinAppAlreadyStartedException('A Koin Application has already been started');
    }
    $this._koin_1 = koinApplication.get_koin_wopbyq_k$();
  }
  function GlobalContext() {
    GlobalContext_instance = this;
    this._koin_1 = null;
  }
  GlobalContext.prototype.get_26vq_k$ = function () {
    var tmp0_elvis_lhs = this._koin_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('KoinApplication has not been started');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  GlobalContext.prototype.getOrNull_bcsbgg_k$ = function () {
    return this._koin_1;
  };
  GlobalContext.prototype.stopKoin_tx9yna_k$ = function () {
    var tmp0_safe_receiver = this._koin_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.close_ymq55z_k$();
    }
    this._koin_1 = null;
  };
  GlobalContext.prototype.startKoin_8ozxgf_k$ = function (koinApplication) {
    register(this, koinApplication);
    return koinApplication;
  };
  GlobalContext.prototype.startKoin_yxprxe_k$ = function (appDeclaration) {
    var koinApplication = Companion_getInstance().init_1xdsg_k$();
    register(this, koinApplication);
    appDeclaration(koinApplication);
    return koinApplication;
  };
  GlobalContext.prototype.loadKoinModules_acl9k2_k$ = function (module_0) {
    var tmp = this.get_26vq_k$();
    var tmp_0 = listOf(module_0);
    tmp.loadModules$default_6txcz8_k$(tmp_0, false, 2, null);
  };
  GlobalContext.prototype.loadKoinModules_rr41ua_k$ = function (modules) {
    var tmp = this.get_26vq_k$();
    tmp.loadModules$default_6txcz8_k$(modules, false, 2, null);
  };
  GlobalContext.prototype.unloadKoinModules_3oxx93_k$ = function (module_0) {
    this.get_26vq_k$().unloadModules_rmaqm6_k$(listOf(module_0));
  };
  GlobalContext.prototype.unloadKoinModules_hag4mj_k$ = function (modules) {
    this.get_26vq_k$().unloadModules_rmaqm6_k$(modules);
  };
  var GlobalContext_instance;
  function GlobalContext_getInstance() {
    if (GlobalContext_instance == null)
      new GlobalContext();
    return GlobalContext_instance;
  }
  function PrintLogger_init_$Init$(level, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      level = Level_INFO_getInstance();
    PrintLogger.call($this, level);
    return $this;
  }
  function PrintLogger_init_$Create$(level, $mask0, $marker) {
    return PrintLogger_init_$Init$(level, $mask0, $marker, Object.create(PrintLogger.prototype));
  }
  function PrintLogger(level) {
    Logger.call(this, level);
  }
  PrintLogger.prototype.log_5yx0bh_k$ = function (level, msg) {
    if (this.get_level_ium7h7_k$().compareTo_6thzay_k$(level) <= 0) {
      println('[' + level + '] ' + get_KOIN_TAG() + ' ' + msg);
    }
  };
  function TimeSource() {
  }
  function getTimeSource() {
    var tmp = typeof process !== 'undefined' && process.versions && !!process.versions.node;
    var isNode = (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
    var tmp_0;
    if (isNode) {
      tmp_0 = new NodeJsHrTimeSource();
    } else {
      var tmp_1 = self.performance && !!self.performance.now;
      var isPerformanceNowSupported = (!(tmp_1 == null) ? typeof tmp_1 === 'boolean' : false) ? tmp_1 : THROW_CCE();
      var tmp_2;
      if (isPerformanceNowSupported) {
        tmp_2 = new PerformanceNowTimeSource();
      } else {
        tmp_2 = new DateNowTimeSource();
      }
      tmp_0 = tmp_2;
    }
    return tmp_0;
  }
  function NodeJsHrTimeSource() {
  }
  NodeJsHrTimeSource.prototype.markNow_dvnky1_k$ = function () {
    var tmp = process.hrtime();
    var tmp0_container = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = tmp0_container[0];
    var seconds = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = tmp0_container[1];
    var nanos = tmp$ret$1;
    return roundToLong(seconds * 1000000000 + nanos);
  };
  function PerformanceNowTimeSource() {
  }
  PerformanceNowTimeSource.prototype.markNow_dvnky1_k$ = function () {
    var tmp = self.performance.now();
    return roundToLong(((!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE()) * 1000000);
  };
  function DateNowTimeSource() {
  }
  DateNowTimeSource.prototype.markNow_dvnky1_k$ = function () {
    return roundToLong(Date.now() * 1000000);
  };
  function KoinPlatformTimeTools() {
    KoinPlatformTimeTools_instance = this;
  }
  KoinPlatformTimeTools.prototype.getTimeInNanoSeconds_rsnqv1_k$ = function () {
    return getTimeSource().markNow_dvnky1_k$();
  };
  var KoinPlatformTimeTools_instance;
  function KoinPlatformTimeTools_getInstance() {
    if (KoinPlatformTimeTools_instance == null)
      new KoinPlatformTimeTools();
    return KoinPlatformTimeTools_instance;
  }
  function KoinPlatformTools() {
    KoinPlatformTools_instance = this;
  }
  KoinPlatformTools.prototype.getStackTrace_hzwm26_k$ = function (e) {
    var tmp = e.toString();
    var tmp_0 = Exception_init_$Create$().toString();
    return tmp + split$default(tmp_0, ['\n'], false, 0, 6, null);
  };
  KoinPlatformTools.prototype.getClassName_lv7ybb_k$ = function (kClass) {
    var tmp0_elvis_lhs = kClass.get_simpleName_r6f8py_k$();
    return tmp0_elvis_lhs == null ? 'KClass@' + kClass.hashCode() : tmp0_elvis_lhs;
  };
  KoinPlatformTools.prototype.generateId_52067k_k$ = function () {
    return getNumberHashCode(Default_getInstance().nextDouble_s2xvfg_k$()).toString();
  };
  KoinPlatformTools.prototype.defaultLazyMode_cannh4_k$ = function () {
    return LazyThreadSafetyMode_NONE_getInstance();
  };
  KoinPlatformTools.prototype.defaultLogger_36wu3s_k$ = function (level) {
    return new PrintLogger(level);
  };
  KoinPlatformTools.prototype.defaultLogger$default_z98836_k$ = function (level, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      level = Level_INFO_getInstance();
    return this.defaultLogger_36wu3s_k$(level);
  };
  KoinPlatformTools.prototype.defaultContext_m5e9ci_k$ = function () {
    return GlobalContext_getInstance();
  };
  KoinPlatformTools.prototype.synchronized_5h0e7m_k$ = function (lock, block) {
    return block();
  };
  KoinPlatformTools.prototype.safeHashMap_vw883b_k$ = function () {
    return HashMap_init_$Create$();
  };
  var KoinPlatformTools_instance;
  function KoinPlatformTools_getInstance() {
    if (KoinPlatformTools_instance == null)
      new KoinPlatformTools();
    return KoinPlatformTools_instance;
  }
  //region block: init
  KOIN_TAG = '[Koin]';
  //endregion
  return _;
}));
