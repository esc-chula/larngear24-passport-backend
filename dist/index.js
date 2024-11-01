// @bun
var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};

// node_modules/.prisma/client/default.js
var require_default = __commonJS((exports, module) => {
  var __defProp2 = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames2 = Object.getOwnPropertyNames;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __export2 = (target, all) => {
    for (var name in all)
      __defProp2(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames2(from))
        if (!__hasOwnProp2.call(to, key) && key !== except)
          __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
  var default_index_exports = {};
  __export2(default_index_exports, {
    Prisma: () => Prisma,
    PrismaClient: () => PrismaClient,
    default: () => default_index_default
  });
  module.exports = __toCommonJS(default_index_exports);
  var prisma = {
    enginesVersion: "bf0e5e8a04cada8225617067eaa03d041e2bba36"
  };
  var version = "5.21.1";
  var clientVersion = version;
  var PrismaClient = class {
    constructor() {
      throw new Error('@prisma/client did not initialize yet. Please run "prisma generate" and try to import it again.');
    }
  };
  function defineExtension(ext) {
    if (typeof ext === "function") {
      return ext;
    }
    return (client) => client.$extends(ext);
  }
  function getExtensionContext(that) {
    return that;
  }
  var Prisma = {
    defineExtension,
    getExtensionContext,
    prismaVersion: { client: clientVersion, engine: prisma.enginesVersion }
  };
  var default_index_default = { Prisma };
});

// node_modules/@prisma/client/default.js
var require_default2 = __commonJS((exports, module) => {
  module.exports = {
    ...require_default()
  };
});

// node_modules/@sinclair/typebox/build/esm/value/guard/guard.mjs
function IsAsyncIterator(value) {
  return IsObject(value) && Symbol.asyncIterator in value;
}
function IsIterator(value) {
  return IsObject(value) && Symbol.iterator in value;
}
function IsStandardObject(value) {
  return IsObject(value) && (Object.getPrototypeOf(value) === Object.prototype || Object.getPrototypeOf(value) === null);
}
function IsPromise(value) {
  return value instanceof Promise;
}
function IsDate(value) {
  return value instanceof Date && Number.isFinite(value.getTime());
}
function IsTypedArray(value) {
  return ArrayBuffer.isView(value);
}
function IsUint8Array(value) {
  return value instanceof globalThis.Uint8Array;
}
function HasPropertyKey(value, key) {
  return key in value;
}
function IsObject(value) {
  return value !== null && typeof value === "object";
}
function IsArray(value) {
  return Array.isArray(value) && !ArrayBuffer.isView(value);
}
function IsUndefined(value) {
  return value === undefined;
}
function IsNull(value) {
  return value === null;
}
function IsBoolean(value) {
  return typeof value === "boolean";
}
function IsNumber(value) {
  return typeof value === "number";
}
function IsInteger(value) {
  return Number.isInteger(value);
}
function IsBigInt(value) {
  return typeof value === "bigint";
}
function IsString(value) {
  return typeof value === "string";
}
function IsFunction(value) {
  return typeof value === "function";
}
function IsSymbol(value) {
  return typeof value === "symbol";
}
function IsValueType(value) {
  return IsBigInt(value) || IsBoolean(value) || IsNull(value) || IsNumber(value) || IsString(value) || IsSymbol(value) || IsUndefined(value);
}
// node_modules/@sinclair/typebox/build/esm/system/policy.mjs
var TypeSystemPolicy;
(function(TypeSystemPolicy2) {
  TypeSystemPolicy2.ExactOptionalPropertyTypes = false;
  TypeSystemPolicy2.AllowArrayObject = false;
  TypeSystemPolicy2.AllowNaN = false;
  TypeSystemPolicy2.AllowNullVoid = false;
  function IsExactOptionalProperty(value, key) {
    return TypeSystemPolicy2.ExactOptionalPropertyTypes ? key in value : value[key] !== undefined;
  }
  TypeSystemPolicy2.IsExactOptionalProperty = IsExactOptionalProperty;
  function IsObjectLike(value) {
    const isObject = IsObject(value);
    return TypeSystemPolicy2.AllowArrayObject ? isObject : isObject && !IsArray(value);
  }
  TypeSystemPolicy2.IsObjectLike = IsObjectLike;
  function IsRecordLike(value) {
    return IsObjectLike(value) && !(value instanceof Date) && !(value instanceof Uint8Array);
  }
  TypeSystemPolicy2.IsRecordLike = IsRecordLike;
  function IsNumberLike(value) {
    return TypeSystemPolicy2.AllowNaN ? IsNumber(value) : Number.isFinite(value);
  }
  TypeSystemPolicy2.IsNumberLike = IsNumberLike;
  function IsVoidLike(value) {
    const isUndefined = IsUndefined(value);
    return TypeSystemPolicy2.AllowNullVoid ? isUndefined || value === null : isUndefined;
  }
  TypeSystemPolicy2.IsVoidLike = IsVoidLike;
})(TypeSystemPolicy || (TypeSystemPolicy = {}));
// node_modules/@sinclair/typebox/build/esm/type/registry/format.mjs
var exports_format = {};
__export(exports_format, {
  Set: () => Set2,
  Has: () => Has,
  Get: () => Get,
  Entries: () => Entries,
  Delete: () => Delete,
  Clear: () => Clear
});
var map = new Map;
function Entries() {
  return new Map(map);
}
function Clear() {
  return map.clear();
}
function Delete(format) {
  return map.delete(format);
}
function Has(format) {
  return map.has(format);
}
function Set2(format, func) {
  map.set(format, func);
}
function Get(format) {
  return map.get(format);
}
// node_modules/@sinclair/typebox/build/esm/type/registry/type.mjs
var exports_type = {};
__export(exports_type, {
  Set: () => Set3,
  Has: () => Has2,
  Get: () => Get2,
  Entries: () => Entries2,
  Delete: () => Delete2,
  Clear: () => Clear2
});
var map2 = new Map;
function Entries2() {
  return new Map(map2);
}
function Clear2() {
  return map2.clear();
}
function Delete2(kind) {
  return map2.delete(kind);
}
function Has2(kind) {
  return map2.has(kind);
}
function Set3(kind, func) {
  map2.set(kind, func);
}
function Get2(kind) {
  return map2.get(kind);
}
// node_modules/@sinclair/typebox/build/esm/type/symbols/symbols.mjs
var TransformKind = Symbol.for("TypeBox.Transform");
var ReadonlyKind = Symbol.for("TypeBox.Readonly");
var OptionalKind = Symbol.for("TypeBox.Optional");
var Hint = Symbol.for("TypeBox.Hint");
var Kind = Symbol.for("TypeBox.Kind");
// node_modules/@sinclair/typebox/build/esm/type/unsafe/unsafe.mjs
function Unsafe(options = {}) {
  return {
    ...options,
    [Kind]: options[Kind] ?? "Unsafe"
  };
}
// node_modules/@sinclair/typebox/build/esm/type/error/error.mjs
class TypeBoxError extends Error {
  constructor(message) {
    super(message);
  }
}
// node_modules/@sinclair/typebox/build/esm/system/system.mjs
class TypeSystemDuplicateTypeKind extends TypeBoxError {
  constructor(kind) {
    super(`Duplicate type kind '${kind}' detected`);
  }
}

class TypeSystemDuplicateFormat extends TypeBoxError {
  constructor(kind) {
    super(`Duplicate string format '${kind}' detected`);
  }
}
var TypeSystem;
(function(TypeSystem2) {
  function Type(kind, check) {
    if (exports_type.Has(kind))
      throw new TypeSystemDuplicateTypeKind(kind);
    exports_type.Set(kind, check);
    return (options = {}) => Unsafe({ ...options, [Kind]: kind });
  }
  TypeSystem2.Type = Type;
  function Format(format, check) {
    if (exports_format.Has(format))
      throw new TypeSystemDuplicateFormat(format);
    exports_format.Set(format, check);
    return format;
  }
  TypeSystem2.Format = Format;
})(TypeSystem || (TypeSystem = {}));
// node_modules/@sinclair/typebox/build/esm/type/mapped/mapped-result.mjs
function MappedResult(properties) {
  return {
    [Kind]: "MappedResult",
    properties
  };
}
// node_modules/@sinclair/typebox/build/esm/type/guard/value.mjs
var exports_value = {};
__export(exports_value, {
  IsUndefined: () => IsUndefined2,
  IsUint8Array: () => IsUint8Array2,
  IsSymbol: () => IsSymbol2,
  IsString: () => IsString2,
  IsRegExp: () => IsRegExp,
  IsObject: () => IsObject2,
  IsNumber: () => IsNumber2,
  IsNull: () => IsNull2,
  IsIterator: () => IsIterator2,
  IsFunction: () => IsFunction2,
  IsDate: () => IsDate2,
  IsBoolean: () => IsBoolean2,
  IsBigInt: () => IsBigInt2,
  IsAsyncIterator: () => IsAsyncIterator2,
  IsArray: () => IsArray2
});
function IsAsyncIterator2(value) {
  return IsObject2(value) && !IsArray2(value) && !IsUint8Array2(value) && Symbol.asyncIterator in value;
}
function IsArray2(value) {
  return Array.isArray(value);
}
function IsBigInt2(value) {
  return typeof value === "bigint";
}
function IsBoolean2(value) {
  return typeof value === "boolean";
}
function IsDate2(value) {
  return value instanceof globalThis.Date;
}
function IsFunction2(value) {
  return typeof value === "function";
}
function IsIterator2(value) {
  return IsObject2(value) && !IsArray2(value) && !IsUint8Array2(value) && Symbol.iterator in value;
}
function IsNull2(value) {
  return value === null;
}
function IsNumber2(value) {
  return typeof value === "number";
}
function IsObject2(value) {
  return typeof value === "object" && value !== null;
}
function IsRegExp(value) {
  return value instanceof globalThis.RegExp;
}
function IsString2(value) {
  return typeof value === "string";
}
function IsSymbol2(value) {
  return typeof value === "symbol";
}
function IsUint8Array2(value) {
  return value instanceof globalThis.Uint8Array;
}
function IsUndefined2(value) {
  return value === undefined;
}

// node_modules/@sinclair/typebox/build/esm/type/clone/value.mjs
function ArrayType(value) {
  return value.map((value2) => Visit(value2));
}
function DateType(value) {
  return new Date(value.getTime());
}
function Uint8ArrayType(value) {
  return new Uint8Array(value);
}
function RegExpType(value) {
  return new RegExp(value.source, value.flags);
}
function ObjectType(value) {
  const result = {};
  for (const key of Object.getOwnPropertyNames(value)) {
    result[key] = Visit(value[key]);
  }
  for (const key of Object.getOwnPropertySymbols(value)) {
    result[key] = Visit(value[key]);
  }
  return result;
}
function Visit(value) {
  return IsArray2(value) ? ArrayType(value) : IsDate2(value) ? DateType(value) : IsUint8Array2(value) ? Uint8ArrayType(value) : IsRegExp(value) ? RegExpType(value) : IsObject2(value) ? ObjectType(value) : value;
}
function Clone(value) {
  return Visit(value);
}

// node_modules/@sinclair/typebox/build/esm/type/clone/type.mjs
function CloneRest(schemas) {
  return schemas.map((schema) => CloneType(schema));
}
function CloneType(schema, options = {}) {
  return { ...Clone(schema), ...options };
}

// node_modules/@sinclair/typebox/build/esm/type/discard/discard.mjs
function DiscardKey(value, key) {
  const { [key]: _, ...rest } = value;
  return rest;
}
function Discard(value, keys) {
  return keys.reduce((acc, key) => DiscardKey(acc, key), value);
}
// node_modules/@sinclair/typebox/build/esm/type/array/array.mjs
function Array2(schema, options = {}) {
  return {
    ...options,
    [Kind]: "Array",
    type: "array",
    items: CloneType(schema)
  };
}
// node_modules/@sinclair/typebox/build/esm/type/async-iterator/async-iterator.mjs
function AsyncIterator(items, options = {}) {
  return {
    ...options,
    [Kind]: "AsyncIterator",
    type: "AsyncIterator",
    items: CloneType(items)
  };
}
// node_modules/@sinclair/typebox/build/esm/type/constructor/constructor.mjs
function Constructor(parameters, returns, options) {
  return {
    ...options,
    [Kind]: "Constructor",
    type: "Constructor",
    parameters: CloneRest(parameters),
    returns: CloneType(returns)
  };
}
// node_modules/@sinclair/typebox/build/esm/type/function/function.mjs
function Function2(parameters, returns, options) {
  return {
    ...options,
    [Kind]: "Function",
    type: "Function",
    parameters: CloneRest(parameters),
    returns: CloneType(returns)
  };
}
// node_modules/@sinclair/typebox/build/esm/type/never/never.mjs
function Never(options = {}) {
  return {
    ...options,
    [Kind]: "Never",
    not: {}
  };
}
// node_modules/@sinclair/typebox/build/esm/type/guard/kind.mjs
function IsReadonly(value) {
  return IsObject2(value) && value[ReadonlyKind] === "Readonly";
}
function IsOptional(value) {
  return IsObject2(value) && value[OptionalKind] === "Optional";
}
function IsAny(value) {
  return IsKindOf(value, "Any");
}
function IsArray3(value) {
  return IsKindOf(value, "Array");
}
function IsAsyncIterator3(value) {
  return IsKindOf(value, "AsyncIterator");
}
function IsBigInt3(value) {
  return IsKindOf(value, "BigInt");
}
function IsBoolean3(value) {
  return IsKindOf(value, "Boolean");
}
function IsConstructor(value) {
  return IsKindOf(value, "Constructor");
}
function IsDate3(value) {
  return IsKindOf(value, "Date");
}
function IsFunction3(value) {
  return IsKindOf(value, "Function");
}
function IsInteger2(value) {
  return IsKindOf(value, "Integer");
}
function IsIntersect(value) {
  return IsKindOf(value, "Intersect");
}
function IsIterator3(value) {
  return IsKindOf(value, "Iterator");
}
function IsKindOf(value, kind) {
  return IsObject2(value) && Kind in value && value[Kind] === kind;
}
function IsLiteral(value) {
  return IsKindOf(value, "Literal");
}
function IsMappedKey(value) {
  return IsKindOf(value, "MappedKey");
}
function IsMappedResult(value) {
  return IsKindOf(value, "MappedResult");
}
function IsNever(value) {
  return IsKindOf(value, "Never");
}
function IsNot(value) {
  return IsKindOf(value, "Not");
}
function IsNull3(value) {
  return IsKindOf(value, "Null");
}
function IsNumber3(value) {
  return IsKindOf(value, "Number");
}
function IsObject3(value) {
  return IsKindOf(value, "Object");
}
function IsPromise2(value) {
  return IsKindOf(value, "Promise");
}
function IsRecord(value) {
  return IsKindOf(value, "Record");
}
function IsRef(value) {
  return IsKindOf(value, "Ref");
}
function IsRegExp2(value) {
  return IsKindOf(value, "RegExp");
}
function IsString3(value) {
  return IsKindOf(value, "String");
}
function IsSymbol3(value) {
  return IsKindOf(value, "Symbol");
}
function IsTemplateLiteral(value) {
  return IsKindOf(value, "TemplateLiteral");
}
function IsThis(value) {
  return IsKindOf(value, "This");
}
function IsTransform(value) {
  return IsObject2(value) && TransformKind in value;
}
function IsTuple(value) {
  return IsKindOf(value, "Tuple");
}
function IsUndefined3(value) {
  return IsKindOf(value, "Undefined");
}
function IsUnion(value) {
  return IsKindOf(value, "Union");
}
function IsUint8Array3(value) {
  return IsKindOf(value, "Uint8Array");
}
function IsUnknown(value) {
  return IsKindOf(value, "Unknown");
}
function IsUnsafe(value) {
  return IsKindOf(value, "Unsafe");
}
function IsVoid(value) {
  return IsKindOf(value, "Void");
}
function IsKind(value) {
  return IsObject2(value) && Kind in value && IsString2(value[Kind]);
}
function IsSchema(value) {
  return IsAny(value) || IsArray3(value) || IsBoolean3(value) || IsBigInt3(value) || IsAsyncIterator3(value) || IsConstructor(value) || IsDate3(value) || IsFunction3(value) || IsInteger2(value) || IsIntersect(value) || IsIterator3(value) || IsLiteral(value) || IsMappedKey(value) || IsMappedResult(value) || IsNever(value) || IsNot(value) || IsNull3(value) || IsNumber3(value) || IsObject3(value) || IsPromise2(value) || IsRecord(value) || IsRef(value) || IsRegExp2(value) || IsString3(value) || IsSymbol3(value) || IsTemplateLiteral(value) || IsThis(value) || IsTuple(value) || IsUndefined3(value) || IsUnion(value) || IsUint8Array3(value) || IsUnknown(value) || IsUnsafe(value) || IsVoid(value) || IsKind(value);
}

// node_modules/@sinclair/typebox/build/esm/type/optional/optional.mjs
function RemoveOptional(schema) {
  return Discard(CloneType(schema), [OptionalKind]);
}
function AddOptional(schema) {
  return { ...CloneType(schema), [OptionalKind]: "Optional" };
}
function OptionalWithFlag(schema, F) {
  return F === false ? RemoveOptional(schema) : AddOptional(schema);
}
function Optional(schema, enable) {
  const F = enable ?? true;
  return IsMappedResult(schema) ? OptionalFromMappedResult(schema, F) : OptionalWithFlag(schema, F);
}

// node_modules/@sinclair/typebox/build/esm/type/optional/optional-from-mapped-result.mjs
function FromProperties(P, F) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Optional(P[K2], F);
  return Acc;
}
function FromMappedResult(R, F) {
  return FromProperties(R.properties, F);
}
function OptionalFromMappedResult(R, F) {
  const P = FromMappedResult(R, F);
  return MappedResult(P);
}
// node_modules/@sinclair/typebox/build/esm/type/intersect/intersect-create.mjs
function IntersectCreate(T, options) {
  const allObjects = T.every((schema) => IsObject3(schema));
  const clonedUnevaluatedProperties = IsSchema(options.unevaluatedProperties) ? { unevaluatedProperties: CloneType(options.unevaluatedProperties) } : {};
  return options.unevaluatedProperties === false || IsSchema(options.unevaluatedProperties) || allObjects ? { ...options, ...clonedUnevaluatedProperties, [Kind]: "Intersect", type: "object", allOf: CloneRest(T) } : { ...options, ...clonedUnevaluatedProperties, [Kind]: "Intersect", allOf: CloneRest(T) };
}

// node_modules/@sinclair/typebox/build/esm/type/intersect/intersect-evaluated.mjs
function IsIntersectOptional(T) {
  return T.every((L) => IsOptional(L));
}
function RemoveOptionalFromType(T) {
  return Discard(T, [OptionalKind]);
}
function RemoveOptionalFromRest(T) {
  return T.map((L) => IsOptional(L) ? RemoveOptionalFromType(L) : L);
}
function ResolveIntersect(T, options) {
  return IsIntersectOptional(T) ? Optional(IntersectCreate(RemoveOptionalFromRest(T), options)) : IntersectCreate(RemoveOptionalFromRest(T), options);
}
function IntersectEvaluated(T, options = {}) {
  if (T.length === 0)
    return Never(options);
  if (T.length === 1)
    return CloneType(T[0], options);
  if (T.some((schema) => IsTransform(schema)))
    throw new Error("Cannot intersect transform types");
  return ResolveIntersect(T, options);
}
// node_modules/@sinclair/typebox/build/esm/type/intersect/intersect.mjs
function Intersect(T, options = {}) {
  if (T.length === 0)
    return Never(options);
  if (T.length === 1)
    return CloneType(T[0], options);
  if (T.some((schema) => IsTransform(schema)))
    throw new Error("Cannot intersect transform types");
  return IntersectCreate(T, options);
}
// node_modules/@sinclair/typebox/build/esm/type/union/union-create.mjs
function UnionCreate(T, options) {
  return { ...options, [Kind]: "Union", anyOf: CloneRest(T) };
}

// node_modules/@sinclair/typebox/build/esm/type/union/union-evaluated.mjs
function IsUnionOptional(T) {
  return T.some((L) => IsOptional(L));
}
function RemoveOptionalFromRest2(T) {
  return T.map((L) => IsOptional(L) ? RemoveOptionalFromType2(L) : L);
}
function RemoveOptionalFromType2(T) {
  return Discard(T, [OptionalKind]);
}
function ResolveUnion(T, options) {
  return IsUnionOptional(T) ? Optional(UnionCreate(RemoveOptionalFromRest2(T), options)) : UnionCreate(RemoveOptionalFromRest2(T), options);
}
function UnionEvaluated(T, options = {}) {
  return T.length === 0 ? Never(options) : T.length === 1 ? CloneType(T[0], options) : ResolveUnion(T, options);
}
// node_modules/@sinclair/typebox/build/esm/type/union/union.mjs
function Union(T, options = {}) {
  return T.length === 0 ? Never(options) : T.length === 1 ? CloneType(T[0], options) : UnionCreate(T, options);
}
// node_modules/@sinclair/typebox/build/esm/type/template-literal/parse.mjs
class TemplateLiteralParserError extends TypeBoxError {
}
function Unescape(pattern) {
  return pattern.replace(/\\\$/g, "$").replace(/\\\*/g, "*").replace(/\\\^/g, "^").replace(/\\\|/g, "|").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
}
function IsNonEscaped(pattern, index, char) {
  return pattern[index] === char && pattern.charCodeAt(index - 1) !== 92;
}
function IsOpenParen(pattern, index) {
  return IsNonEscaped(pattern, index, "(");
}
function IsCloseParen(pattern, index) {
  return IsNonEscaped(pattern, index, ")");
}
function IsSeparator(pattern, index) {
  return IsNonEscaped(pattern, index, "|");
}
function IsGroup(pattern) {
  if (!(IsOpenParen(pattern, 0) && IsCloseParen(pattern, pattern.length - 1)))
    return false;
  let count = 0;
  for (let index = 0;index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      count += 1;
    if (IsCloseParen(pattern, index))
      count -= 1;
    if (count === 0 && index !== pattern.length - 1)
      return false;
  }
  return true;
}
function InGroup(pattern) {
  return pattern.slice(1, pattern.length - 1);
}
function IsPrecedenceOr(pattern) {
  let count = 0;
  for (let index = 0;index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      count += 1;
    if (IsCloseParen(pattern, index))
      count -= 1;
    if (IsSeparator(pattern, index) && count === 0)
      return true;
  }
  return false;
}
function IsPrecedenceAnd(pattern) {
  for (let index = 0;index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      return true;
  }
  return false;
}
function Or(pattern) {
  let [count, start] = [0, 0];
  const expressions = [];
  for (let index = 0;index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      count += 1;
    if (IsCloseParen(pattern, index))
      count -= 1;
    if (IsSeparator(pattern, index) && count === 0) {
      const range2 = pattern.slice(start, index);
      if (range2.length > 0)
        expressions.push(TemplateLiteralParse(range2));
      start = index + 1;
    }
  }
  const range = pattern.slice(start);
  if (range.length > 0)
    expressions.push(TemplateLiteralParse(range));
  if (expressions.length === 0)
    return { type: "const", const: "" };
  if (expressions.length === 1)
    return expressions[0];
  return { type: "or", expr: expressions };
}
function And(pattern) {
  function Group(value, index) {
    if (!IsOpenParen(value, index))
      throw new TemplateLiteralParserError(`TemplateLiteralParser: Index must point to open parens`);
    let count = 0;
    for (let scan = index;scan < value.length; scan++) {
      if (IsOpenParen(value, scan))
        count += 1;
      if (IsCloseParen(value, scan))
        count -= 1;
      if (count === 0)
        return [index, scan];
    }
    throw new TemplateLiteralParserError(`TemplateLiteralParser: Unclosed group parens in expression`);
  }
  function Range(pattern2, index) {
    for (let scan = index;scan < pattern2.length; scan++) {
      if (IsOpenParen(pattern2, scan))
        return [index, scan];
    }
    return [index, pattern2.length];
  }
  const expressions = [];
  for (let index = 0;index < pattern.length; index++) {
    if (IsOpenParen(pattern, index)) {
      const [start, end] = Group(pattern, index);
      const range = pattern.slice(start, end + 1);
      expressions.push(TemplateLiteralParse(range));
      index = end;
    } else {
      const [start, end] = Range(pattern, index);
      const range = pattern.slice(start, end);
      if (range.length > 0)
        expressions.push(TemplateLiteralParse(range));
      index = end - 1;
    }
  }
  return expressions.length === 0 ? { type: "const", const: "" } : expressions.length === 1 ? expressions[0] : { type: "and", expr: expressions };
}
function TemplateLiteralParse(pattern) {
  return IsGroup(pattern) ? TemplateLiteralParse(InGroup(pattern)) : IsPrecedenceOr(pattern) ? Or(pattern) : IsPrecedenceAnd(pattern) ? And(pattern) : { type: "const", const: Unescape(pattern) };
}
function TemplateLiteralParseExact(pattern) {
  return TemplateLiteralParse(pattern.slice(1, pattern.length - 1));
}

// node_modules/@sinclair/typebox/build/esm/type/template-literal/finite.mjs
class TemplateLiteralFiniteError extends TypeBoxError {
}
function IsNumberExpression(expression) {
  return expression.type === "or" && expression.expr.length === 2 && expression.expr[0].type === "const" && expression.expr[0].const === "0" && expression.expr[1].type === "const" && expression.expr[1].const === "[1-9][0-9]*";
}
function IsBooleanExpression(expression) {
  return expression.type === "or" && expression.expr.length === 2 && expression.expr[0].type === "const" && expression.expr[0].const === "true" && expression.expr[1].type === "const" && expression.expr[1].const === "false";
}
function IsStringExpression(expression) {
  return expression.type === "const" && expression.const === ".*";
}
function IsTemplateLiteralExpressionFinite(expression) {
  return IsNumberExpression(expression) || IsStringExpression(expression) ? false : IsBooleanExpression(expression) ? true : expression.type === "and" ? expression.expr.every((expr) => IsTemplateLiteralExpressionFinite(expr)) : expression.type === "or" ? expression.expr.every((expr) => IsTemplateLiteralExpressionFinite(expr)) : expression.type === "const" ? true : (() => {
    throw new TemplateLiteralFiniteError(`Unknown expression type`);
  })();
}
function IsTemplateLiteralFinite(schema) {
  const expression = TemplateLiteralParseExact(schema.pattern);
  return IsTemplateLiteralExpressionFinite(expression);
}
// node_modules/@sinclair/typebox/build/esm/type/template-literal/generate.mjs
class TemplateLiteralGenerateError extends TypeBoxError {
}
function* GenerateReduce(buffer) {
  if (buffer.length === 1)
    return yield* buffer[0];
  for (const left of buffer[0]) {
    for (const right of GenerateReduce(buffer.slice(1))) {
      yield `${left}${right}`;
    }
  }
}
function* GenerateAnd(expression) {
  return yield* GenerateReduce(expression.expr.map((expr) => [...TemplateLiteralExpressionGenerate(expr)]));
}
function* GenerateOr(expression) {
  for (const expr of expression.expr)
    yield* TemplateLiteralExpressionGenerate(expr);
}
function* GenerateConst(expression) {
  return yield expression.const;
}
function* TemplateLiteralExpressionGenerate(expression) {
  return expression.type === "and" ? yield* GenerateAnd(expression) : expression.type === "or" ? yield* GenerateOr(expression) : expression.type === "const" ? yield* GenerateConst(expression) : (() => {
    throw new TemplateLiteralGenerateError("Unknown expression");
  })();
}
function TemplateLiteralGenerate(schema) {
  const expression = TemplateLiteralParseExact(schema.pattern);
  return IsTemplateLiteralExpressionFinite(expression) ? [...TemplateLiteralExpressionGenerate(expression)] : [];
}
// node_modules/@sinclair/typebox/build/esm/type/literal/literal.mjs
function Literal(value, options = {}) {
  return {
    ...options,
    [Kind]: "Literal",
    const: value,
    type: typeof value
  };
}
// node_modules/@sinclair/typebox/build/esm/type/boolean/boolean.mjs
function Boolean2(options = {}) {
  return {
    ...options,
    [Kind]: "Boolean",
    type: "boolean"
  };
}
// node_modules/@sinclair/typebox/build/esm/type/bigint/bigint.mjs
function BigInt2(options = {}) {
  return {
    ...options,
    [Kind]: "BigInt",
    type: "bigint"
  };
}
// node_modules/@sinclair/typebox/build/esm/type/number/number.mjs
function Number2(options = {}) {
  return {
    ...options,
    [Kind]: "Number",
    type: "number"
  };
}
// node_modules/@sinclair/typebox/build/esm/type/string/string.mjs
function String2(options = {}) {
  return { ...options, [Kind]: "String", type: "string" };
}
// node_modules/@sinclair/typebox/build/esm/type/template-literal/syntax.mjs
function* FromUnion(syntax) {
  const trim = syntax.trim().replace(/"|'/g, "");
  return trim === "boolean" ? yield Boolean2() : trim === "number" ? yield Number2() : trim === "bigint" ? yield BigInt2() : trim === "string" ? yield String2() : yield (() => {
    const literals = trim.split("|").map((literal2) => Literal(literal2.trim()));
    return literals.length === 0 ? Never() : literals.length === 1 ? literals[0] : UnionEvaluated(literals);
  })();
}
function* FromTerminal(syntax) {
  if (syntax[1] !== "{") {
    const L = Literal("$");
    const R = FromSyntax(syntax.slice(1));
    return yield* [L, ...R];
  }
  for (let i = 2;i < syntax.length; i++) {
    if (syntax[i] === "}") {
      const L = FromUnion(syntax.slice(2, i));
      const R = FromSyntax(syntax.slice(i + 1));
      return yield* [...L, ...R];
    }
  }
  yield Literal(syntax);
}
function* FromSyntax(syntax) {
  for (let i = 0;i < syntax.length; i++) {
    if (syntax[i] === "$") {
      const L = Literal(syntax.slice(0, i));
      const R = FromTerminal(syntax.slice(i));
      return yield* [L, ...R];
    }
  }
  yield Literal(syntax);
}
function TemplateLiteralSyntax(syntax) {
  return [...FromSyntax(syntax)];
}
// node_modules/@sinclair/typebox/build/esm/type/patterns/patterns.mjs
var PatternBoolean = "(true|false)";
var PatternNumber = "(0|[1-9][0-9]*)";
var PatternString = "(.*)";
var PatternBooleanExact = `^${PatternBoolean}\$`;
var PatternNumberExact = `^${PatternNumber}\$`;
var PatternStringExact = `^${PatternString}\$`;
// node_modules/@sinclair/typebox/build/esm/type/template-literal/pattern.mjs
class TemplateLiteralPatternError extends TypeBoxError {
}
function Escape(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Visit2(schema, acc) {
  return IsTemplateLiteral(schema) ? schema.pattern.slice(1, schema.pattern.length - 1) : IsUnion(schema) ? `(${schema.anyOf.map((schema2) => Visit2(schema2, acc)).join("|")})` : IsNumber3(schema) ? `${acc}${PatternNumber}` : IsInteger2(schema) ? `${acc}${PatternNumber}` : IsBigInt3(schema) ? `${acc}${PatternNumber}` : IsString3(schema) ? `${acc}${PatternString}` : IsLiteral(schema) ? `${acc}${Escape(schema.const.toString())}` : IsBoolean3(schema) ? `${acc}${PatternBoolean}` : (() => {
    throw new TemplateLiteralPatternError(`Unexpected Kind '${schema[Kind]}'`);
  })();
}
function TemplateLiteralPattern(kinds) {
  return `^${kinds.map((schema) => Visit2(schema, "")).join("")}$`;
}
// node_modules/@sinclair/typebox/build/esm/type/template-literal/union.mjs
function TemplateLiteralToUnion(schema) {
  const R = TemplateLiteralGenerate(schema);
  const L = R.map((S) => Literal(S));
  return UnionEvaluated(L);
}
// node_modules/@sinclair/typebox/build/esm/type/template-literal/template-literal.mjs
function TemplateLiteral(unresolved, options = {}) {
  const pattern = IsString2(unresolved) ? TemplateLiteralPattern(TemplateLiteralSyntax(unresolved)) : TemplateLiteralPattern(unresolved);
  return { ...options, [Kind]: "TemplateLiteral", type: "string", pattern };
}
// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-property-keys.mjs
function FromTemplateLiteral(T) {
  const R = TemplateLiteralGenerate(T);
  return R.map((S) => S.toString());
}
function FromUnion2(T) {
  const Acc = [];
  for (const L of T)
    Acc.push(...IndexPropertyKeys(L));
  return Acc;
}
function FromLiteral(T) {
  return [T.toString()];
}
function IndexPropertyKeys(T) {
  return [...new Set(IsTemplateLiteral(T) ? FromTemplateLiteral(T) : IsUnion(T) ? FromUnion2(T.anyOf) : IsLiteral(T) ? FromLiteral(T.const) : IsNumber3(T) ? ["[number]"] : IsInteger2(T) ? ["[number]"] : [])];
}

// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-from-mapped-result.mjs
function FromProperties2(T, P, options) {
  const Acc = {};
  for (const K2 of Object.getOwnPropertyNames(P)) {
    Acc[K2] = Index(T, IndexPropertyKeys(P[K2]), options);
  }
  return Acc;
}
function FromMappedResult2(T, R, options) {
  return FromProperties2(T, R.properties, options);
}
function IndexFromMappedResult(T, R, options) {
  const P = FromMappedResult2(T, R, options);
  return MappedResult(P);
}

// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed.mjs
function FromRest(T, K) {
  return T.map((L) => IndexFromPropertyKey(L, K));
}
function FromIntersectRest(T) {
  return T.filter((L) => !IsNever(L));
}
function FromIntersect(T, K) {
  return IntersectEvaluated(FromIntersectRest(FromRest(T, K)));
}
function FromUnionRest(T) {
  return T.some((L) => IsNever(L)) ? [] : T;
}
function FromUnion3(T, K) {
  return UnionEvaluated(FromUnionRest(FromRest(T, K)));
}
function FromTuple(T, K) {
  return K in T ? T[K] : K === "[number]" ? UnionEvaluated(T) : Never();
}
function FromArray(T, K) {
  return K === "[number]" ? T : Never();
}
function FromProperty(T, K) {
  return K in T ? T[K] : Never();
}
function IndexFromPropertyKey(T, K) {
  return IsIntersect(T) ? FromIntersect(T.allOf, K) : IsUnion(T) ? FromUnion3(T.anyOf, K) : IsTuple(T) ? FromTuple(T.items ?? [], K) : IsArray3(T) ? FromArray(T.items, K) : IsObject3(T) ? FromProperty(T.properties, K) : Never();
}
function IndexFromPropertyKeys(T, K) {
  return K.map((L) => IndexFromPropertyKey(T, L));
}
function FromSchema(T, K) {
  return UnionEvaluated(IndexFromPropertyKeys(T, K));
}
function Index(T, K, options = {}) {
  return IsMappedResult(K) ? CloneType(IndexFromMappedResult(T, K, options)) : IsMappedKey(K) ? CloneType(IndexFromMappedKey(T, K, options)) : IsSchema(K) ? CloneType(FromSchema(T, IndexPropertyKeys(K)), options) : CloneType(FromSchema(T, K), options);
}

// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-from-mapped-key.mjs
function MappedIndexPropertyKey(T, K, options) {
  return { [K]: Index(T, [K], options) };
}
function MappedIndexPropertyKeys(T, K, options) {
  return K.reduce((Acc, L) => {
    return { ...Acc, ...MappedIndexPropertyKey(T, L, options) };
  }, {});
}
function MappedIndexProperties(T, K, options) {
  return MappedIndexPropertyKeys(T, K.keys, options);
}
function IndexFromMappedKey(T, K, options) {
  const P = MappedIndexProperties(T, K, options);
  return MappedResult(P);
}
// node_modules/@sinclair/typebox/build/esm/type/iterator/iterator.mjs
function Iterator(items, options = {}) {
  return {
    ...options,
    [Kind]: "Iterator",
    type: "Iterator",
    items: CloneType(items)
  };
}
// node_modules/@sinclair/typebox/build/esm/type/object/object.mjs
function _Object(properties, options = {}) {
  const propertyKeys = globalThis.Object.getOwnPropertyNames(properties);
  const optionalKeys = propertyKeys.filter((key) => IsOptional(properties[key]));
  const requiredKeys = propertyKeys.filter((name) => !optionalKeys.includes(name));
  const clonedAdditionalProperties = IsSchema(options.additionalProperties) ? { additionalProperties: CloneType(options.additionalProperties) } : {};
  const clonedProperties = {};
  for (const key of propertyKeys)
    clonedProperties[key] = CloneType(properties[key]);
  return requiredKeys.length > 0 ? { ...options, ...clonedAdditionalProperties, [Kind]: "Object", type: "object", properties: clonedProperties, required: requiredKeys } : { ...options, ...clonedAdditionalProperties, [Kind]: "Object", type: "object", properties: clonedProperties };
}
var Object2 = _Object;
// node_modules/@sinclair/typebox/build/esm/type/promise/promise.mjs
function Promise2(item, options = {}) {
  return {
    ...options,
    [Kind]: "Promise",
    type: "Promise",
    item: CloneType(item)
  };
}
// node_modules/@sinclair/typebox/build/esm/type/readonly/readonly.mjs
function RemoveReadonly(schema) {
  return Discard(CloneType(schema), [ReadonlyKind]);
}
function AddReadonly(schema) {
  return { ...CloneType(schema), [ReadonlyKind]: "Readonly" };
}
function ReadonlyWithFlag(schema, F) {
  return F === false ? RemoveReadonly(schema) : AddReadonly(schema);
}
function Readonly(schema, enable) {
  const F = enable ?? true;
  return IsMappedResult(schema) ? ReadonlyFromMappedResult(schema, F) : ReadonlyWithFlag(schema, F);
}

// node_modules/@sinclair/typebox/build/esm/type/readonly/readonly-from-mapped-result.mjs
function FromProperties3(K, F) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(K))
    Acc[K2] = Readonly(K[K2], F);
  return Acc;
}
function FromMappedResult3(R, F) {
  return FromProperties3(R.properties, F);
}
function ReadonlyFromMappedResult(R, F) {
  const P = FromMappedResult3(R, F);
  return MappedResult(P);
}
// node_modules/@sinclair/typebox/build/esm/type/tuple/tuple.mjs
function Tuple(items, options = {}) {
  const [additionalItems, minItems, maxItems] = [false, items.length, items.length];
  return items.length > 0 ? { ...options, [Kind]: "Tuple", type: "array", items: CloneRest(items), additionalItems, minItems, maxItems } : { ...options, [Kind]: "Tuple", type: "array", minItems, maxItems };
}
// node_modules/@sinclair/typebox/build/esm/type/sets/set.mjs
function SetIncludes(T, S) {
  return T.includes(S);
}
function SetDistinct(T) {
  return [...new Set(T)];
}
function SetIntersect(T, S) {
  return T.filter((L) => S.includes(L));
}
function SetIntersectManyResolve(T, Init) {
  return T.reduce((Acc, L) => {
    return SetIntersect(Acc, L);
  }, Init);
}
function SetIntersectMany(T) {
  return T.length === 1 ? T[0] : T.length > 1 ? SetIntersectManyResolve(T.slice(1), T[0]) : [];
}
function SetUnionMany(T) {
  const Acc = [];
  for (const L of T)
    Acc.push(...L);
  return Acc;
}
// node_modules/@sinclair/typebox/build/esm/type/mapped/mapped.mjs
function FromMappedResult4(K, P) {
  return K in P ? FromSchemaType(K, P[K]) : MappedResult(P);
}
function MappedKeyToKnownMappedResultProperties(K) {
  return { [K]: Literal(K) };
}
function MappedKeyToUnknownMappedResultProperties(P) {
  const Acc = {};
  for (const L of P)
    Acc[L] = Literal(L);
  return Acc;
}
function MappedKeyToMappedResultProperties(K, P) {
  return SetIncludes(P, K) ? MappedKeyToKnownMappedResultProperties(K) : MappedKeyToUnknownMappedResultProperties(P);
}
function FromMappedKey(K, P) {
  const R = MappedKeyToMappedResultProperties(K, P);
  return FromMappedResult4(K, R);
}
function FromRest2(K, T) {
  return T.map((L) => FromSchemaType(K, L));
}
function FromProperties4(K, T) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(T))
    Acc[K2] = FromSchemaType(K, T[K2]);
  return Acc;
}
function FromSchemaType(K, T) {
  return IsOptional(T) ? Optional(FromSchemaType(K, Discard(T, [OptionalKind]))) : IsReadonly(T) ? Readonly(FromSchemaType(K, Discard(T, [ReadonlyKind]))) : IsMappedResult(T) ? FromMappedResult4(K, T.properties) : IsMappedKey(T) ? FromMappedKey(K, T.keys) : IsConstructor(T) ? Constructor(FromRest2(K, T.parameters), FromSchemaType(K, T.returns)) : IsFunction3(T) ? Function2(FromRest2(K, T.parameters), FromSchemaType(K, T.returns)) : IsAsyncIterator3(T) ? AsyncIterator(FromSchemaType(K, T.items)) : IsIterator3(T) ? Iterator(FromSchemaType(K, T.items)) : IsIntersect(T) ? Intersect(FromRest2(K, T.allOf)) : IsUnion(T) ? Union(FromRest2(K, T.anyOf)) : IsTuple(T) ? Tuple(FromRest2(K, T.items ?? [])) : IsObject3(T) ? Object2(FromProperties4(K, T.properties)) : IsArray3(T) ? Array2(FromSchemaType(K, T.items)) : IsPromise2(T) ? Promise2(FromSchemaType(K, T.item)) : T;
}
function MappedFunctionReturnType(K, T) {
  const Acc = {};
  for (const L of K)
    Acc[L] = FromSchemaType(L, T);
  return Acc;
}
function Mapped(key, map3, options = {}) {
  const K = IsSchema(key) ? IndexPropertyKeys(key) : key;
  const RT = map3({ [Kind]: "MappedKey", keys: K });
  const R = MappedFunctionReturnType(K, RT);
  return CloneType(Object2(R), options);
}
// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof-property-keys.mjs
function FromRest3(T) {
  const Acc = [];
  for (const L of T)
    Acc.push(KeyOfPropertyKeys(L));
  return Acc;
}
function FromIntersect2(T) {
  const C = FromRest3(T);
  const R = SetUnionMany(C);
  return R;
}
function FromUnion4(T) {
  const C = FromRest3(T);
  const R = SetIntersectMany(C);
  return R;
}
function FromTuple2(T) {
  return T.map((_, I) => I.toString());
}
function FromArray2(_) {
  return ["[number]"];
}
function FromProperties5(T) {
  return globalThis.Object.getOwnPropertyNames(T);
}
function FromPatternProperties(patternProperties) {
  if (!includePatternProperties)
    return [];
  const patternPropertyKeys = globalThis.Object.getOwnPropertyNames(patternProperties);
  return patternPropertyKeys.map((key) => {
    return key[0] === "^" && key[key.length - 1] === "$" ? key.slice(1, key.length - 1) : key;
  });
}
function KeyOfPropertyKeys(T) {
  return IsIntersect(T) ? FromIntersect2(T.allOf) : IsUnion(T) ? FromUnion4(T.anyOf) : IsTuple(T) ? FromTuple2(T.items ?? []) : IsArray3(T) ? FromArray2(T.items) : IsObject3(T) ? FromProperties5(T.properties) : IsRecord(T) ? FromPatternProperties(T.patternProperties) : [];
}
var includePatternProperties = false;
function KeyOfPattern(schema) {
  includePatternProperties = true;
  const keys = KeyOfPropertyKeys(schema);
  includePatternProperties = false;
  const pattern2 = keys.map((key) => `(${key})`);
  return `^(${pattern2.join("|")})\$`;
}

// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof.mjs
function KeyOfPropertyKeysToRest(T) {
  return T.map((L) => L === "[number]" ? Number2() : Literal(L));
}
function KeyOf(T, options = {}) {
  if (IsMappedResult(T)) {
    return KeyOfFromMappedResult(T, options);
  } else {
    const K = KeyOfPropertyKeys(T);
    const S = KeyOfPropertyKeysToRest(K);
    const U = UnionEvaluated(S);
    return CloneType(U, options);
  }
}

// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof-from-mapped-result.mjs
function FromProperties6(K, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(K))
    Acc[K2] = KeyOf(K[K2], options);
  return Acc;
}
function FromMappedResult5(R, options) {
  return FromProperties6(R.properties, options);
}
function KeyOfFromMappedResult(R, options) {
  const P = FromMappedResult5(R, options);
  return MappedResult(P);
}
// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof-property-entries.mjs
function KeyOfPropertyEntries(schema) {
  const keys = KeyOfPropertyKeys(schema);
  const schemas = IndexFromPropertyKeys(schema, keys);
  return keys.map((_, index) => [keys[index], schemas[index]]);
}
// node_modules/@sinclair/typebox/build/esm/type/extends/extends-undefined.mjs
function Intersect2(schema) {
  return schema.allOf.every((schema2) => ExtendsUndefinedCheck(schema2));
}
function Union2(schema) {
  return schema.anyOf.some((schema2) => ExtendsUndefinedCheck(schema2));
}
function Not(schema) {
  return !ExtendsUndefinedCheck(schema.not);
}
function ExtendsUndefinedCheck(schema) {
  return schema[Kind] === "Intersect" ? Intersect2(schema) : schema[Kind] === "Union" ? Union2(schema) : schema[Kind] === "Not" ? Not(schema) : schema[Kind] === "Undefined" ? true : false;
}

// node_modules/@sinclair/typebox/build/esm/errors/function.mjs
function DefaultErrorFunction(error2) {
  switch (error2.errorType) {
    case ValueErrorType.ArrayContains:
      return "Expected array to contain at least one matching value";
    case ValueErrorType.ArrayMaxContains:
      return `Expected array to contain no more than ${error2.schema.maxContains} matching values`;
    case ValueErrorType.ArrayMinContains:
      return `Expected array to contain at least ${error2.schema.minContains} matching values`;
    case ValueErrorType.ArrayMaxItems:
      return `Expected array length to be less or equal to ${error2.schema.maxItems}`;
    case ValueErrorType.ArrayMinItems:
      return `Expected array length to be greater or equal to ${error2.schema.minItems}`;
    case ValueErrorType.ArrayUniqueItems:
      return "Expected array elements to be unique";
    case ValueErrorType.Array:
      return "Expected array";
    case ValueErrorType.AsyncIterator:
      return "Expected AsyncIterator";
    case ValueErrorType.BigIntExclusiveMaximum:
      return `Expected bigint to be less than ${error2.schema.exclusiveMaximum}`;
    case ValueErrorType.BigIntExclusiveMinimum:
      return `Expected bigint to be greater than ${error2.schema.exclusiveMinimum}`;
    case ValueErrorType.BigIntMaximum:
      return `Expected bigint to be less or equal to ${error2.schema.maximum}`;
    case ValueErrorType.BigIntMinimum:
      return `Expected bigint to be greater or equal to ${error2.schema.minimum}`;
    case ValueErrorType.BigIntMultipleOf:
      return `Expected bigint to be a multiple of ${error2.schema.multipleOf}`;
    case ValueErrorType.BigInt:
      return "Expected bigint";
    case ValueErrorType.Boolean:
      return "Expected boolean";
    case ValueErrorType.DateExclusiveMinimumTimestamp:
      return `Expected Date timestamp to be greater than ${error2.schema.exclusiveMinimumTimestamp}`;
    case ValueErrorType.DateExclusiveMaximumTimestamp:
      return `Expected Date timestamp to be less than ${error2.schema.exclusiveMaximumTimestamp}`;
    case ValueErrorType.DateMinimumTimestamp:
      return `Expected Date timestamp to be greater or equal to ${error2.schema.minimumTimestamp}`;
    case ValueErrorType.DateMaximumTimestamp:
      return `Expected Date timestamp to be less or equal to ${error2.schema.maximumTimestamp}`;
    case ValueErrorType.DateMultipleOfTimestamp:
      return `Expected Date timestamp to be a multiple of ${error2.schema.multipleOfTimestamp}`;
    case ValueErrorType.Date:
      return "Expected Date";
    case ValueErrorType.Function:
      return "Expected function";
    case ValueErrorType.IntegerExclusiveMaximum:
      return `Expected integer to be less than ${error2.schema.exclusiveMaximum}`;
    case ValueErrorType.IntegerExclusiveMinimum:
      return `Expected integer to be greater than ${error2.schema.exclusiveMinimum}`;
    case ValueErrorType.IntegerMaximum:
      return `Expected integer to be less or equal to ${error2.schema.maximum}`;
    case ValueErrorType.IntegerMinimum:
      return `Expected integer to be greater or equal to ${error2.schema.minimum}`;
    case ValueErrorType.IntegerMultipleOf:
      return `Expected integer to be a multiple of ${error2.schema.multipleOf}`;
    case ValueErrorType.Integer:
      return "Expected integer";
    case ValueErrorType.IntersectUnevaluatedProperties:
      return "Unexpected property";
    case ValueErrorType.Intersect:
      return "Expected all values to match";
    case ValueErrorType.Iterator:
      return "Expected Iterator";
    case ValueErrorType.Literal:
      return `Expected ${typeof error2.schema.const === "string" ? `'${error2.schema.const}'` : error2.schema.const}`;
    case ValueErrorType.Never:
      return "Never";
    case ValueErrorType.Not:
      return "Value should not match";
    case ValueErrorType.Null:
      return "Expected null";
    case ValueErrorType.NumberExclusiveMaximum:
      return `Expected number to be less than ${error2.schema.exclusiveMaximum}`;
    case ValueErrorType.NumberExclusiveMinimum:
      return `Expected number to be greater than ${error2.schema.exclusiveMinimum}`;
    case ValueErrorType.NumberMaximum:
      return `Expected number to be less or equal to ${error2.schema.maximum}`;
    case ValueErrorType.NumberMinimum:
      return `Expected number to be greater or equal to ${error2.schema.minimum}`;
    case ValueErrorType.NumberMultipleOf:
      return `Expected number to be a multiple of ${error2.schema.multipleOf}`;
    case ValueErrorType.Number:
      return "Expected number";
    case ValueErrorType.Object:
      return "Expected object";
    case ValueErrorType.ObjectAdditionalProperties:
      return "Unexpected property";
    case ValueErrorType.ObjectMaxProperties:
      return `Expected object to have no more than ${error2.schema.maxProperties} properties`;
    case ValueErrorType.ObjectMinProperties:
      return `Expected object to have at least ${error2.schema.minProperties} properties`;
    case ValueErrorType.ObjectRequiredProperty:
      return "Required property";
    case ValueErrorType.Promise:
      return "Expected Promise";
    case ValueErrorType.RegExp:
      return "Expected string to match regular expression";
    case ValueErrorType.StringFormatUnknown:
      return `Unknown format '${error2.schema.format}'`;
    case ValueErrorType.StringFormat:
      return `Expected string to match '${error2.schema.format}' format`;
    case ValueErrorType.StringMaxLength:
      return `Expected string length less or equal to ${error2.schema.maxLength}`;
    case ValueErrorType.StringMinLength:
      return `Expected string length greater or equal to ${error2.schema.minLength}`;
    case ValueErrorType.StringPattern:
      return `Expected string to match '${error2.schema.pattern}'`;
    case ValueErrorType.String:
      return "Expected string";
    case ValueErrorType.Symbol:
      return "Expected symbol";
    case ValueErrorType.TupleLength:
      return `Expected tuple to have ${error2.schema.maxItems || 0} elements`;
    case ValueErrorType.Tuple:
      return "Expected tuple";
    case ValueErrorType.Uint8ArrayMaxByteLength:
      return `Expected byte length less or equal to ${error2.schema.maxByteLength}`;
    case ValueErrorType.Uint8ArrayMinByteLength:
      return `Expected byte length greater or equal to ${error2.schema.minByteLength}`;
    case ValueErrorType.Uint8Array:
      return "Expected Uint8Array";
    case ValueErrorType.Undefined:
      return "Expected undefined";
    case ValueErrorType.Union:
      return "Expected union value";
    case ValueErrorType.Void:
      return "Expected void";
    case ValueErrorType.Kind:
      return `Expected kind '${error2.schema[Kind]}'`;
    default:
      return "Unknown error type";
  }
}
var errorFunction = DefaultErrorFunction;
function GetErrorFunction() {
  return errorFunction;
}

// node_modules/@sinclair/typebox/build/esm/value/deref/deref.mjs
class TypeDereferenceError extends TypeBoxError {
  constructor(schema) {
    super(`Unable to dereference schema with \$id '${schema.$id}'`);
    this.schema = schema;
  }
}
function Resolve(schema, references) {
  const target = references.find((target2) => target2.$id === schema.$ref);
  if (target === undefined)
    throw new TypeDereferenceError(schema);
  return Deref(target, references);
}
function Deref(schema, references) {
  return schema[Kind] === "This" || schema[Kind] === "Ref" ? Resolve(schema, references) : schema;
}
// node_modules/@sinclair/typebox/build/esm/value/hash/hash.mjs
class ValueHashError extends TypeBoxError {
  constructor(value) {
    super(`Unable to hash value`);
    this.value = value;
  }
}
var ByteMarker;
(function(ByteMarker2) {
  ByteMarker2[ByteMarker2["Undefined"] = 0] = "Undefined";
  ByteMarker2[ByteMarker2["Null"] = 1] = "Null";
  ByteMarker2[ByteMarker2["Boolean"] = 2] = "Boolean";
  ByteMarker2[ByteMarker2["Number"] = 3] = "Number";
  ByteMarker2[ByteMarker2["String"] = 4] = "String";
  ByteMarker2[ByteMarker2["Object"] = 5] = "Object";
  ByteMarker2[ByteMarker2["Array"] = 6] = "Array";
  ByteMarker2[ByteMarker2["Date"] = 7] = "Date";
  ByteMarker2[ByteMarker2["Uint8Array"] = 8] = "Uint8Array";
  ByteMarker2[ByteMarker2["Symbol"] = 9] = "Symbol";
  ByteMarker2[ByteMarker2["BigInt"] = 10] = "BigInt";
})(ByteMarker || (ByteMarker = {}));
var Accumulator = BigInt("14695981039346656037");
var [Prime, Size] = [BigInt("1099511628211"), BigInt("2") ** BigInt("64")];
var Bytes = Array.from({ length: 256 }).map((_, i) => BigInt(i));
var F64 = new Float64Array(1);
var F64In = new DataView(F64.buffer);
var F64Out = new Uint8Array(F64.buffer);
function* NumberToBytes(value) {
  const byteCount = value === 0 ? 1 : Math.ceil(Math.floor(Math.log2(value) + 1) / 8);
  for (let i = 0;i < byteCount; i++) {
    yield value >> 8 * (byteCount - 1 - i) & 255;
  }
}
function ArrayType2(value) {
  FNV1A64(ByteMarker.Array);
  for (const item of value) {
    Visit3(item);
  }
}
function BooleanType(value) {
  FNV1A64(ByteMarker.Boolean);
  FNV1A64(value ? 1 : 0);
}
function BigIntType(value) {
  FNV1A64(ByteMarker.BigInt);
  F64In.setBigInt64(0, value);
  for (const byte of F64Out) {
    FNV1A64(byte);
  }
}
function DateType2(value) {
  FNV1A64(ByteMarker.Date);
  Visit3(value.getTime());
}
function NullType(value) {
  FNV1A64(ByteMarker.Null);
}
function NumberType(value) {
  FNV1A64(ByteMarker.Number);
  F64In.setFloat64(0, value);
  for (const byte of F64Out) {
    FNV1A64(byte);
  }
}
function ObjectType2(value) {
  FNV1A64(ByteMarker.Object);
  for (const key of globalThis.Object.getOwnPropertyNames(value).sort()) {
    Visit3(key);
    Visit3(value[key]);
  }
}
function StringType(value) {
  FNV1A64(ByteMarker.String);
  for (let i = 0;i < value.length; i++) {
    for (const byte of NumberToBytes(value.charCodeAt(i))) {
      FNV1A64(byte);
    }
  }
}
function SymbolType(value) {
  FNV1A64(ByteMarker.Symbol);
  Visit3(value.description);
}
function Uint8ArrayType2(value) {
  FNV1A64(ByteMarker.Uint8Array);
  for (let i = 0;i < value.length; i++) {
    FNV1A64(value[i]);
  }
}
function UndefinedType(value) {
  return FNV1A64(ByteMarker.Undefined);
}
function Visit3(value) {
  if (IsArray(value))
    return ArrayType2(value);
  if (IsBoolean(value))
    return BooleanType(value);
  if (IsBigInt(value))
    return BigIntType(value);
  if (IsDate(value))
    return DateType2(value);
  if (IsNull(value))
    return NullType(value);
  if (IsNumber(value))
    return NumberType(value);
  if (IsStandardObject(value))
    return ObjectType2(value);
  if (IsString(value))
    return StringType(value);
  if (IsSymbol(value))
    return SymbolType(value);
  if (IsUint8Array(value))
    return Uint8ArrayType2(value);
  if (IsUndefined(value))
    return UndefinedType(value);
  throw new ValueHashError(value);
}
function FNV1A64(byte) {
  Accumulator = Accumulator ^ Bytes[byte];
  Accumulator = Accumulator * Prime % Size;
}
function Hash(value) {
  Accumulator = BigInt("14695981039346656037");
  Visit3(value);
  return Accumulator;
}
// node_modules/@sinclair/typebox/build/esm/errors/errors.mjs
var ValueErrorType;
(function(ValueErrorType2) {
  ValueErrorType2[ValueErrorType2["ArrayContains"] = 0] = "ArrayContains";
  ValueErrorType2[ValueErrorType2["ArrayMaxContains"] = 1] = "ArrayMaxContains";
  ValueErrorType2[ValueErrorType2["ArrayMaxItems"] = 2] = "ArrayMaxItems";
  ValueErrorType2[ValueErrorType2["ArrayMinContains"] = 3] = "ArrayMinContains";
  ValueErrorType2[ValueErrorType2["ArrayMinItems"] = 4] = "ArrayMinItems";
  ValueErrorType2[ValueErrorType2["ArrayUniqueItems"] = 5] = "ArrayUniqueItems";
  ValueErrorType2[ValueErrorType2["Array"] = 6] = "Array";
  ValueErrorType2[ValueErrorType2["AsyncIterator"] = 7] = "AsyncIterator";
  ValueErrorType2[ValueErrorType2["BigIntExclusiveMaximum"] = 8] = "BigIntExclusiveMaximum";
  ValueErrorType2[ValueErrorType2["BigIntExclusiveMinimum"] = 9] = "BigIntExclusiveMinimum";
  ValueErrorType2[ValueErrorType2["BigIntMaximum"] = 10] = "BigIntMaximum";
  ValueErrorType2[ValueErrorType2["BigIntMinimum"] = 11] = "BigIntMinimum";
  ValueErrorType2[ValueErrorType2["BigIntMultipleOf"] = 12] = "BigIntMultipleOf";
  ValueErrorType2[ValueErrorType2["BigInt"] = 13] = "BigInt";
  ValueErrorType2[ValueErrorType2["Boolean"] = 14] = "Boolean";
  ValueErrorType2[ValueErrorType2["DateExclusiveMaximumTimestamp"] = 15] = "DateExclusiveMaximumTimestamp";
  ValueErrorType2[ValueErrorType2["DateExclusiveMinimumTimestamp"] = 16] = "DateExclusiveMinimumTimestamp";
  ValueErrorType2[ValueErrorType2["DateMaximumTimestamp"] = 17] = "DateMaximumTimestamp";
  ValueErrorType2[ValueErrorType2["DateMinimumTimestamp"] = 18] = "DateMinimumTimestamp";
  ValueErrorType2[ValueErrorType2["DateMultipleOfTimestamp"] = 19] = "DateMultipleOfTimestamp";
  ValueErrorType2[ValueErrorType2["Date"] = 20] = "Date";
  ValueErrorType2[ValueErrorType2["Function"] = 21] = "Function";
  ValueErrorType2[ValueErrorType2["IntegerExclusiveMaximum"] = 22] = "IntegerExclusiveMaximum";
  ValueErrorType2[ValueErrorType2["IntegerExclusiveMinimum"] = 23] = "IntegerExclusiveMinimum";
  ValueErrorType2[ValueErrorType2["IntegerMaximum"] = 24] = "IntegerMaximum";
  ValueErrorType2[ValueErrorType2["IntegerMinimum"] = 25] = "IntegerMinimum";
  ValueErrorType2[ValueErrorType2["IntegerMultipleOf"] = 26] = "IntegerMultipleOf";
  ValueErrorType2[ValueErrorType2["Integer"] = 27] = "Integer";
  ValueErrorType2[ValueErrorType2["IntersectUnevaluatedProperties"] = 28] = "IntersectUnevaluatedProperties";
  ValueErrorType2[ValueErrorType2["Intersect"] = 29] = "Intersect";
  ValueErrorType2[ValueErrorType2["Iterator"] = 30] = "Iterator";
  ValueErrorType2[ValueErrorType2["Kind"] = 31] = "Kind";
  ValueErrorType2[ValueErrorType2["Literal"] = 32] = "Literal";
  ValueErrorType2[ValueErrorType2["Never"] = 33] = "Never";
  ValueErrorType2[ValueErrorType2["Not"] = 34] = "Not";
  ValueErrorType2[ValueErrorType2["Null"] = 35] = "Null";
  ValueErrorType2[ValueErrorType2["NumberExclusiveMaximum"] = 36] = "NumberExclusiveMaximum";
  ValueErrorType2[ValueErrorType2["NumberExclusiveMinimum"] = 37] = "NumberExclusiveMinimum";
  ValueErrorType2[ValueErrorType2["NumberMaximum"] = 38] = "NumberMaximum";
  ValueErrorType2[ValueErrorType2["NumberMinimum"] = 39] = "NumberMinimum";
  ValueErrorType2[ValueErrorType2["NumberMultipleOf"] = 40] = "NumberMultipleOf";
  ValueErrorType2[ValueErrorType2["Number"] = 41] = "Number";
  ValueErrorType2[ValueErrorType2["ObjectAdditionalProperties"] = 42] = "ObjectAdditionalProperties";
  ValueErrorType2[ValueErrorType2["ObjectMaxProperties"] = 43] = "ObjectMaxProperties";
  ValueErrorType2[ValueErrorType2["ObjectMinProperties"] = 44] = "ObjectMinProperties";
  ValueErrorType2[ValueErrorType2["ObjectRequiredProperty"] = 45] = "ObjectRequiredProperty";
  ValueErrorType2[ValueErrorType2["Object"] = 46] = "Object";
  ValueErrorType2[ValueErrorType2["Promise"] = 47] = "Promise";
  ValueErrorType2[ValueErrorType2["RegExp"] = 48] = "RegExp";
  ValueErrorType2[ValueErrorType2["StringFormatUnknown"] = 49] = "StringFormatUnknown";
  ValueErrorType2[ValueErrorType2["StringFormat"] = 50] = "StringFormat";
  ValueErrorType2[ValueErrorType2["StringMaxLength"] = 51] = "StringMaxLength";
  ValueErrorType2[ValueErrorType2["StringMinLength"] = 52] = "StringMinLength";
  ValueErrorType2[ValueErrorType2["StringPattern"] = 53] = "StringPattern";
  ValueErrorType2[ValueErrorType2["String"] = 54] = "String";
  ValueErrorType2[ValueErrorType2["Symbol"] = 55] = "Symbol";
  ValueErrorType2[ValueErrorType2["TupleLength"] = 56] = "TupleLength";
  ValueErrorType2[ValueErrorType2["Tuple"] = 57] = "Tuple";
  ValueErrorType2[ValueErrorType2["Uint8ArrayMaxByteLength"] = 58] = "Uint8ArrayMaxByteLength";
  ValueErrorType2[ValueErrorType2["Uint8ArrayMinByteLength"] = 59] = "Uint8ArrayMinByteLength";
  ValueErrorType2[ValueErrorType2["Uint8Array"] = 60] = "Uint8Array";
  ValueErrorType2[ValueErrorType2["Undefined"] = 61] = "Undefined";
  ValueErrorType2[ValueErrorType2["Union"] = 62] = "Union";
  ValueErrorType2[ValueErrorType2["Void"] = 63] = "Void";
})(ValueErrorType || (ValueErrorType = {}));

class ValueErrorsUnknownTypeError extends TypeBoxError {
  constructor(schema) {
    super("Unknown type");
    this.schema = schema;
  }
}
function EscapeKey(key) {
  return key.replace(/~/g, "~0").replace(/\//g, "~1");
}
function IsDefined(value) {
  return value !== undefined;
}

class ValueErrorIterator {
  constructor(iterator2) {
    this.iterator = iterator2;
  }
  [Symbol.iterator]() {
    return this.iterator;
  }
  First() {
    const next = this.iterator.next();
    return next.done ? undefined : next.value;
  }
}
function Create(errorType, schema, path, value) {
  return { type: errorType, schema, path, value, message: GetErrorFunction()({ errorType, path, schema, value }) };
}
function* FromAny(schema, references, path, value) {
}
function* FromArray3(schema, references, path, value) {
  if (!IsArray(value)) {
    return yield Create(ValueErrorType.Array, schema, path, value);
  }
  if (IsDefined(schema.minItems) && !(value.length >= schema.minItems)) {
    yield Create(ValueErrorType.ArrayMinItems, schema, path, value);
  }
  if (IsDefined(schema.maxItems) && !(value.length <= schema.maxItems)) {
    yield Create(ValueErrorType.ArrayMaxItems, schema, path, value);
  }
  for (let i = 0;i < value.length; i++) {
    yield* Visit4(schema.items, references, `${path}/${i}`, value[i]);
  }
  if (schema.uniqueItems === true && !function() {
    const set3 = new Set;
    for (const element of value) {
      const hashed = Hash(element);
      if (set3.has(hashed)) {
        return false;
      } else {
        set3.add(hashed);
      }
    }
    return true;
  }()) {
    yield Create(ValueErrorType.ArrayUniqueItems, schema, path, value);
  }
  if (!(IsDefined(schema.contains) || IsDefined(schema.minContains) || IsDefined(schema.maxContains))) {
    return;
  }
  const containsSchema = IsDefined(schema.contains) ? schema.contains : Never();
  const containsCount = value.reduce((acc, value2, index) => Visit4(containsSchema, references, `${path}${index}`, value2).next().done === true ? acc + 1 : acc, 0);
  if (containsCount === 0) {
    yield Create(ValueErrorType.ArrayContains, schema, path, value);
  }
  if (IsNumber(schema.minContains) && containsCount < schema.minContains) {
    yield Create(ValueErrorType.ArrayMinContains, schema, path, value);
  }
  if (IsNumber(schema.maxContains) && containsCount > schema.maxContains) {
    yield Create(ValueErrorType.ArrayMaxContains, schema, path, value);
  }
}
function* FromAsyncIterator(schema, references, path, value) {
  if (!IsAsyncIterator(value))
    yield Create(ValueErrorType.AsyncIterator, schema, path, value);
}
function* FromBigInt(schema, references, path, value) {
  if (!IsBigInt(value))
    return yield Create(ValueErrorType.BigInt, schema, path, value);
  if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    yield Create(ValueErrorType.BigIntExclusiveMaximum, schema, path, value);
  }
  if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    yield Create(ValueErrorType.BigIntExclusiveMinimum, schema, path, value);
  }
  if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
    yield Create(ValueErrorType.BigIntMaximum, schema, path, value);
  }
  if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
    yield Create(ValueErrorType.BigIntMinimum, schema, path, value);
  }
  if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === BigInt(0))) {
    yield Create(ValueErrorType.BigIntMultipleOf, schema, path, value);
  }
}
function* FromBoolean(schema, references, path, value) {
  if (!IsBoolean(value))
    yield Create(ValueErrorType.Boolean, schema, path, value);
}
function* FromConstructor(schema, references, path, value) {
  yield* Visit4(schema.returns, references, path, value.prototype);
}
function* FromDate(schema, references, path, value) {
  if (!IsDate(value))
    return yield Create(ValueErrorType.Date, schema, path, value);
  if (IsDefined(schema.exclusiveMaximumTimestamp) && !(value.getTime() < schema.exclusiveMaximumTimestamp)) {
    yield Create(ValueErrorType.DateExclusiveMaximumTimestamp, schema, path, value);
  }
  if (IsDefined(schema.exclusiveMinimumTimestamp) && !(value.getTime() > schema.exclusiveMinimumTimestamp)) {
    yield Create(ValueErrorType.DateExclusiveMinimumTimestamp, schema, path, value);
  }
  if (IsDefined(schema.maximumTimestamp) && !(value.getTime() <= schema.maximumTimestamp)) {
    yield Create(ValueErrorType.DateMaximumTimestamp, schema, path, value);
  }
  if (IsDefined(schema.minimumTimestamp) && !(value.getTime() >= schema.minimumTimestamp)) {
    yield Create(ValueErrorType.DateMinimumTimestamp, schema, path, value);
  }
  if (IsDefined(schema.multipleOfTimestamp) && !(value.getTime() % schema.multipleOfTimestamp === 0)) {
    yield Create(ValueErrorType.DateMultipleOfTimestamp, schema, path, value);
  }
}
function* FromFunction(schema, references, path, value) {
  if (!IsFunction(value))
    yield Create(ValueErrorType.Function, schema, path, value);
}
function* FromInteger(schema, references, path, value) {
  if (!IsInteger(value))
    return yield Create(ValueErrorType.Integer, schema, path, value);
  if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    yield Create(ValueErrorType.IntegerExclusiveMaximum, schema, path, value);
  }
  if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    yield Create(ValueErrorType.IntegerExclusiveMinimum, schema, path, value);
  }
  if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
    yield Create(ValueErrorType.IntegerMaximum, schema, path, value);
  }
  if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
    yield Create(ValueErrorType.IntegerMinimum, schema, path, value);
  }
  if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    yield Create(ValueErrorType.IntegerMultipleOf, schema, path, value);
  }
}
function* FromIntersect3(schema, references, path, value) {
  for (const inner of schema.allOf) {
    const next = Visit4(inner, references, path, value).next();
    if (!next.done) {
      yield Create(ValueErrorType.Intersect, schema, path, value);
      yield next.value;
    }
  }
  if (schema.unevaluatedProperties === false) {
    const keyCheck = new RegExp(KeyOfPattern(schema));
    for (const valueKey of Object.getOwnPropertyNames(value)) {
      if (!keyCheck.test(valueKey)) {
        yield Create(ValueErrorType.IntersectUnevaluatedProperties, schema, `${path}/${valueKey}`, value);
      }
    }
  }
  if (typeof schema.unevaluatedProperties === "object") {
    const keyCheck = new RegExp(KeyOfPattern(schema));
    for (const valueKey of Object.getOwnPropertyNames(value)) {
      if (!keyCheck.test(valueKey)) {
        const next = Visit4(schema.unevaluatedProperties, references, `${path}/${valueKey}`, value[valueKey]).next();
        if (!next.done)
          yield next.value;
      }
    }
  }
}
function* FromIterator(schema, references, path, value) {
  if (!IsIterator(value))
    yield Create(ValueErrorType.Iterator, schema, path, value);
}
function* FromLiteral2(schema, references, path, value) {
  if (!(value === schema.const))
    yield Create(ValueErrorType.Literal, schema, path, value);
}
function* FromNever(schema, references, path, value) {
  yield Create(ValueErrorType.Never, schema, path, value);
}
function* FromNot(schema, references, path, value) {
  if (Visit4(schema.not, references, path, value).next().done === true)
    yield Create(ValueErrorType.Not, schema, path, value);
}
function* FromNull(schema, references, path, value) {
  if (!IsNull(value))
    yield Create(ValueErrorType.Null, schema, path, value);
}
function* FromNumber(schema, references, path, value) {
  if (!TypeSystemPolicy.IsNumberLike(value))
    return yield Create(ValueErrorType.Number, schema, path, value);
  if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    yield Create(ValueErrorType.NumberExclusiveMaximum, schema, path, value);
  }
  if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    yield Create(ValueErrorType.NumberExclusiveMinimum, schema, path, value);
  }
  if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
    yield Create(ValueErrorType.NumberMaximum, schema, path, value);
  }
  if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
    yield Create(ValueErrorType.NumberMinimum, schema, path, value);
  }
  if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    yield Create(ValueErrorType.NumberMultipleOf, schema, path, value);
  }
}
function* FromObject(schema, references, path, value) {
  if (!TypeSystemPolicy.IsObjectLike(value))
    return yield Create(ValueErrorType.Object, schema, path, value);
  if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    yield Create(ValueErrorType.ObjectMinProperties, schema, path, value);
  }
  if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value);
  }
  const requiredKeys = Array.isArray(schema.required) ? schema.required : [];
  const knownKeys = Object.getOwnPropertyNames(schema.properties);
  const unknownKeys = Object.getOwnPropertyNames(value);
  for (const requiredKey of requiredKeys) {
    if (unknownKeys.includes(requiredKey))
      continue;
    yield Create(ValueErrorType.ObjectRequiredProperty, schema.properties[requiredKey], `${path}/${EscapeKey(requiredKey)}`, undefined);
  }
  if (schema.additionalProperties === false) {
    for (const valueKey of unknownKeys) {
      if (!knownKeys.includes(valueKey)) {
        yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(valueKey)}`, value[valueKey]);
      }
    }
  }
  if (typeof schema.additionalProperties === "object") {
    for (const valueKey of unknownKeys) {
      if (knownKeys.includes(valueKey))
        continue;
      yield* Visit4(schema.additionalProperties, references, `${path}/${EscapeKey(valueKey)}`, value[valueKey]);
    }
  }
  for (const knownKey of knownKeys) {
    const property = schema.properties[knownKey];
    if (schema.required && schema.required.includes(knownKey)) {
      yield* Visit4(property, references, `${path}/${EscapeKey(knownKey)}`, value[knownKey]);
      if (ExtendsUndefinedCheck(schema) && !(knownKey in value)) {
        yield Create(ValueErrorType.ObjectRequiredProperty, property, `${path}/${EscapeKey(knownKey)}`, undefined);
      }
    } else {
      if (TypeSystemPolicy.IsExactOptionalProperty(value, knownKey)) {
        yield* Visit4(property, references, `${path}/${EscapeKey(knownKey)}`, value[knownKey]);
      }
    }
  }
}
function* FromPromise(schema, references, path, value) {
  if (!IsPromise(value))
    yield Create(ValueErrorType.Promise, schema, path, value);
}
function* FromRecord(schema, references, path, value) {
  if (!TypeSystemPolicy.IsRecordLike(value))
    return yield Create(ValueErrorType.Object, schema, path, value);
  if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    yield Create(ValueErrorType.ObjectMinProperties, schema, path, value);
  }
  if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value);
  }
  const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
  const regex = new RegExp(patternKey);
  for (const [propertyKey, propertyValue] of Object.entries(value)) {
    if (regex.test(propertyKey))
      yield* Visit4(patternSchema, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
  }
  if (typeof schema.additionalProperties === "object") {
    for (const [propertyKey, propertyValue] of Object.entries(value)) {
      if (!regex.test(propertyKey))
        yield* Visit4(schema.additionalProperties, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
    }
  }
  if (schema.additionalProperties === false) {
    for (const [propertyKey, propertyValue] of Object.entries(value)) {
      if (regex.test(propertyKey))
        continue;
      return yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
    }
  }
}
function* FromRef(schema, references, path, value) {
  yield* Visit4(Deref(schema, references), references, path, value);
}
function* FromRegExp(schema, references, path, value) {
  if (!IsString(value))
    return yield Create(ValueErrorType.String, schema, path, value);
  if (IsDefined(schema.minLength) && !(value.length >= schema.minLength)) {
    yield Create(ValueErrorType.StringMinLength, schema, path, value);
  }
  if (IsDefined(schema.maxLength) && !(value.length <= schema.maxLength)) {
    yield Create(ValueErrorType.StringMaxLength, schema, path, value);
  }
  const regex = new RegExp(schema.source, schema.flags);
  if (!regex.test(value)) {
    return yield Create(ValueErrorType.RegExp, schema, path, value);
  }
}
function* FromString(schema, references, path, value) {
  if (!IsString(value))
    return yield Create(ValueErrorType.String, schema, path, value);
  if (IsDefined(schema.minLength) && !(value.length >= schema.minLength)) {
    yield Create(ValueErrorType.StringMinLength, schema, path, value);
  }
  if (IsDefined(schema.maxLength) && !(value.length <= schema.maxLength)) {
    yield Create(ValueErrorType.StringMaxLength, schema, path, value);
  }
  if (IsString(schema.pattern)) {
    const regex = new RegExp(schema.pattern);
    if (!regex.test(value)) {
      yield Create(ValueErrorType.StringPattern, schema, path, value);
    }
  }
  if (IsString(schema.format)) {
    if (!exports_format.Has(schema.format)) {
      yield Create(ValueErrorType.StringFormatUnknown, schema, path, value);
    } else {
      const format = exports_format.Get(schema.format);
      if (!format(value)) {
        yield Create(ValueErrorType.StringFormat, schema, path, value);
      }
    }
  }
}
function* FromSymbol(schema, references, path, value) {
  if (!IsSymbol(value))
    yield Create(ValueErrorType.Symbol, schema, path, value);
}
function* FromTemplateLiteral2(schema, references, path, value) {
  if (!IsString(value))
    return yield Create(ValueErrorType.String, schema, path, value);
  const regex = new RegExp(schema.pattern);
  if (!regex.test(value)) {
    yield Create(ValueErrorType.StringPattern, schema, path, value);
  }
}
function* FromThis(schema, references, path, value) {
  yield* Visit4(Deref(schema, references), references, path, value);
}
function* FromTuple3(schema, references, path, value) {
  if (!IsArray(value))
    return yield Create(ValueErrorType.Tuple, schema, path, value);
  if (schema.items === undefined && !(value.length === 0)) {
    return yield Create(ValueErrorType.TupleLength, schema, path, value);
  }
  if (!(value.length === schema.maxItems)) {
    return yield Create(ValueErrorType.TupleLength, schema, path, value);
  }
  if (!schema.items) {
    return;
  }
  for (let i = 0;i < schema.items.length; i++) {
    yield* Visit4(schema.items[i], references, `${path}/${i}`, value[i]);
  }
}
function* FromUndefined(schema, references, path, value) {
  if (!IsUndefined(value))
    yield Create(ValueErrorType.Undefined, schema, path, value);
}
function* FromUnion5(schema, references, path, value) {
  let count = 0;
  for (const subschema of schema.anyOf) {
    const errors = [...Visit4(subschema, references, path, value)];
    if (errors.length === 0)
      return;
    count += errors.length;
  }
  if (count > 0) {
    yield Create(ValueErrorType.Union, schema, path, value);
  }
}
function* FromUint8Array(schema, references, path, value) {
  if (!IsUint8Array(value))
    return yield Create(ValueErrorType.Uint8Array, schema, path, value);
  if (IsDefined(schema.maxByteLength) && !(value.length <= schema.maxByteLength)) {
    yield Create(ValueErrorType.Uint8ArrayMaxByteLength, schema, path, value);
  }
  if (IsDefined(schema.minByteLength) && !(value.length >= schema.minByteLength)) {
    yield Create(ValueErrorType.Uint8ArrayMinByteLength, schema, path, value);
  }
}
function* FromUnknown(schema, references, path, value) {
}
function* FromVoid(schema, references, path, value) {
  if (!TypeSystemPolicy.IsVoidLike(value))
    yield Create(ValueErrorType.Void, schema, path, value);
}
function* FromKind(schema, references, path, value) {
  const check = exports_type.Get(schema[Kind]);
  if (!check(schema, value))
    yield Create(ValueErrorType.Kind, schema, path, value);
}
function* Visit4(schema, references, path, value) {
  const references_ = IsDefined(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Any":
      return yield* FromAny(schema_, references_, path, value);
    case "Array":
      return yield* FromArray3(schema_, references_, path, value);
    case "AsyncIterator":
      return yield* FromAsyncIterator(schema_, references_, path, value);
    case "BigInt":
      return yield* FromBigInt(schema_, references_, path, value);
    case "Boolean":
      return yield* FromBoolean(schema_, references_, path, value);
    case "Constructor":
      return yield* FromConstructor(schema_, references_, path, value);
    case "Date":
      return yield* FromDate(schema_, references_, path, value);
    case "Function":
      return yield* FromFunction(schema_, references_, path, value);
    case "Integer":
      return yield* FromInteger(schema_, references_, path, value);
    case "Intersect":
      return yield* FromIntersect3(schema_, references_, path, value);
    case "Iterator":
      return yield* FromIterator(schema_, references_, path, value);
    case "Literal":
      return yield* FromLiteral2(schema_, references_, path, value);
    case "Never":
      return yield* FromNever(schema_, references_, path, value);
    case "Not":
      return yield* FromNot(schema_, references_, path, value);
    case "Null":
      return yield* FromNull(schema_, references_, path, value);
    case "Number":
      return yield* FromNumber(schema_, references_, path, value);
    case "Object":
      return yield* FromObject(schema_, references_, path, value);
    case "Promise":
      return yield* FromPromise(schema_, references_, path, value);
    case "Record":
      return yield* FromRecord(schema_, references_, path, value);
    case "Ref":
      return yield* FromRef(schema_, references_, path, value);
    case "RegExp":
      return yield* FromRegExp(schema_, references_, path, value);
    case "String":
      return yield* FromString(schema_, references_, path, value);
    case "Symbol":
      return yield* FromSymbol(schema_, references_, path, value);
    case "TemplateLiteral":
      return yield* FromTemplateLiteral2(schema_, references_, path, value);
    case "This":
      return yield* FromThis(schema_, references_, path, value);
    case "Tuple":
      return yield* FromTuple3(schema_, references_, path, value);
    case "Undefined":
      return yield* FromUndefined(schema_, references_, path, value);
    case "Union":
      return yield* FromUnion5(schema_, references_, path, value);
    case "Uint8Array":
      return yield* FromUint8Array(schema_, references_, path, value);
    case "Unknown":
      return yield* FromUnknown(schema_, references_, path, value);
    case "Void":
      return yield* FromVoid(schema_, references_, path, value);
    default:
      if (!exports_type.Has(schema_[Kind]))
        throw new ValueErrorsUnknownTypeError(schema);
      return yield* FromKind(schema_, references_, path, value);
  }
}
function Errors(...args) {
  const iterator2 = args.length === 3 ? Visit4(args[0], args[1], "", args[2]) : Visit4(args[0], [], "", args[1]);
  return new ValueErrorIterator(iterator2);
}
// node_modules/@sinclair/typebox/build/esm/type/any/any.mjs
function Any(options = {}) {
  return { ...options, [Kind]: "Any" };
}
// node_modules/@sinclair/typebox/build/esm/type/unknown/unknown.mjs
function Unknown(options = {}) {
  return {
    ...options,
    [Kind]: "Unknown"
  };
}
// node_modules/@sinclair/typebox/build/esm/type/guard/type.mjs
var exports_type2 = {};
__export(exports_type2, {
  TypeGuardUnknownTypeError: () => TypeGuardUnknownTypeError,
  IsVoid: () => IsVoid2,
  IsUnsafe: () => IsUnsafe2,
  IsUnknown: () => IsUnknown2,
  IsUnionLiteral: () => IsUnionLiteral,
  IsUnion: () => IsUnion2,
  IsUndefined: () => IsUndefined4,
  IsUint8Array: () => IsUint8Array4,
  IsTuple: () => IsTuple2,
  IsTransform: () => IsTransform2,
  IsThis: () => IsThis2,
  IsTemplateLiteral: () => IsTemplateLiteral2,
  IsSymbol: () => IsSymbol4,
  IsString: () => IsString4,
  IsSchema: () => IsSchema2,
  IsRegExp: () => IsRegExp3,
  IsRef: () => IsRef2,
  IsRecursive: () => IsRecursive,
  IsRecord: () => IsRecord2,
  IsReadonly: () => IsReadonly2,
  IsProperties: () => IsProperties,
  IsPromise: () => IsPromise3,
  IsOptional: () => IsOptional2,
  IsObject: () => IsObject4,
  IsNumber: () => IsNumber4,
  IsNull: () => IsNull4,
  IsNot: () => IsNot2,
  IsNever: () => IsNever2,
  IsMappedResult: () => IsMappedResult2,
  IsMappedKey: () => IsMappedKey2,
  IsLiteralValue: () => IsLiteralValue,
  IsLiteralString: () => IsLiteralString,
  IsLiteralNumber: () => IsLiteralNumber,
  IsLiteralBoolean: () => IsLiteralBoolean,
  IsLiteral: () => IsLiteral2,
  IsKindOf: () => IsKindOf2,
  IsKind: () => IsKind2,
  IsIterator: () => IsIterator4,
  IsIntersect: () => IsIntersect2,
  IsInteger: () => IsInteger3,
  IsFunction: () => IsFunction4,
  IsDate: () => IsDate4,
  IsConstructor: () => IsConstructor2,
  IsBoolean: () => IsBoolean4,
  IsBigInt: () => IsBigInt4,
  IsAsyncIterator: () => IsAsyncIterator4,
  IsArray: () => IsArray4,
  IsAny: () => IsAny2
});
class TypeGuardUnknownTypeError extends TypeBoxError {
}
var KnownTypes = [
  "Any",
  "Array",
  "AsyncIterator",
  "BigInt",
  "Boolean",
  "Constructor",
  "Date",
  "Enum",
  "Function",
  "Integer",
  "Intersect",
  "Iterator",
  "Literal",
  "MappedKey",
  "MappedResult",
  "Not",
  "Null",
  "Number",
  "Object",
  "Promise",
  "Record",
  "Ref",
  "RegExp",
  "String",
  "Symbol",
  "TemplateLiteral",
  "This",
  "Tuple",
  "Undefined",
  "Union",
  "Uint8Array",
  "Unknown",
  "Void"
];
function IsPattern(value) {
  try {
    new RegExp(value);
    return true;
  } catch {
    return false;
  }
}
function IsControlCharacterFree(value) {
  if (!IsString2(value))
    return false;
  for (let i = 0;i < value.length; i++) {
    const code = value.charCodeAt(i);
    if (code >= 7 && code <= 13 || code === 27 || code === 127) {
      return false;
    }
  }
  return true;
}
function IsAdditionalProperties(value) {
  return IsOptionalBoolean(value) || IsSchema2(value);
}
function IsOptionalBigInt(value) {
  return IsUndefined2(value) || IsBigInt2(value);
}
function IsOptionalNumber(value) {
  return IsUndefined2(value) || IsNumber2(value);
}
function IsOptionalBoolean(value) {
  return IsUndefined2(value) || IsBoolean2(value);
}
function IsOptionalString(value) {
  return IsUndefined2(value) || IsString2(value);
}
function IsOptionalPattern(value) {
  return IsUndefined2(value) || IsString2(value) && IsControlCharacterFree(value) && IsPattern(value);
}
function IsOptionalFormat(value) {
  return IsUndefined2(value) || IsString2(value) && IsControlCharacterFree(value);
}
function IsOptionalSchema(value) {
  return IsUndefined2(value) || IsSchema2(value);
}
function IsReadonly2(value) {
  return IsObject2(value) && value[ReadonlyKind] === "Readonly";
}
function IsOptional2(value) {
  return IsObject2(value) && value[OptionalKind] === "Optional";
}
function IsAny2(value) {
  return IsKindOf2(value, "Any") && IsOptionalString(value.$id);
}
function IsArray4(value) {
  return IsKindOf2(value, "Array") && value.type === "array" && IsOptionalString(value.$id) && IsSchema2(value.items) && IsOptionalNumber(value.minItems) && IsOptionalNumber(value.maxItems) && IsOptionalBoolean(value.uniqueItems) && IsOptionalSchema(value.contains) && IsOptionalNumber(value.minContains) && IsOptionalNumber(value.maxContains);
}
function IsAsyncIterator4(value) {
  return IsKindOf2(value, "AsyncIterator") && value.type === "AsyncIterator" && IsOptionalString(value.$id) && IsSchema2(value.items);
}
function IsBigInt4(value) {
  return IsKindOf2(value, "BigInt") && value.type === "bigint" && IsOptionalString(value.$id) && IsOptionalBigInt(value.exclusiveMaximum) && IsOptionalBigInt(value.exclusiveMinimum) && IsOptionalBigInt(value.maximum) && IsOptionalBigInt(value.minimum) && IsOptionalBigInt(value.multipleOf);
}
function IsBoolean4(value) {
  return IsKindOf2(value, "Boolean") && value.type === "boolean" && IsOptionalString(value.$id);
}
function IsConstructor2(value) {
  return IsKindOf2(value, "Constructor") && value.type === "Constructor" && IsOptionalString(value.$id) && IsArray2(value.parameters) && value.parameters.every((schema) => IsSchema2(schema)) && IsSchema2(value.returns);
}
function IsDate4(value) {
  return IsKindOf2(value, "Date") && value.type === "Date" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximumTimestamp) && IsOptionalNumber(value.exclusiveMinimumTimestamp) && IsOptionalNumber(value.maximumTimestamp) && IsOptionalNumber(value.minimumTimestamp) && IsOptionalNumber(value.multipleOfTimestamp);
}
function IsFunction4(value) {
  return IsKindOf2(value, "Function") && value.type === "Function" && IsOptionalString(value.$id) && IsArray2(value.parameters) && value.parameters.every((schema) => IsSchema2(schema)) && IsSchema2(value.returns);
}
function IsInteger3(value) {
  return IsKindOf2(value, "Integer") && value.type === "integer" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximum) && IsOptionalNumber(value.exclusiveMinimum) && IsOptionalNumber(value.maximum) && IsOptionalNumber(value.minimum) && IsOptionalNumber(value.multipleOf);
}
function IsProperties(value) {
  return IsObject2(value) && Object.entries(value).every(([key, schema]) => IsControlCharacterFree(key) && IsSchema2(schema));
}
function IsIntersect2(value) {
  return IsKindOf2(value, "Intersect") && (IsString2(value.type) && value.type !== "object" ? false : true) && IsArray2(value.allOf) && value.allOf.every((schema) => IsSchema2(schema) && !IsTransform2(schema)) && IsOptionalString(value.type) && (IsOptionalBoolean(value.unevaluatedProperties) || IsOptionalSchema(value.unevaluatedProperties)) && IsOptionalString(value.$id);
}
function IsIterator4(value) {
  return IsKindOf2(value, "Iterator") && value.type === "Iterator" && IsOptionalString(value.$id) && IsSchema2(value.items);
}
function IsKindOf2(value, kind) {
  return IsObject2(value) && Kind in value && value[Kind] === kind;
}
function IsLiteralString(value) {
  return IsLiteral2(value) && IsString2(value.const);
}
function IsLiteralNumber(value) {
  return IsLiteral2(value) && IsNumber2(value.const);
}
function IsLiteralBoolean(value) {
  return IsLiteral2(value) && IsBoolean2(value.const);
}
function IsLiteral2(value) {
  return IsKindOf2(value, "Literal") && IsOptionalString(value.$id) && IsLiteralValue(value.const);
}
function IsLiteralValue(value) {
  return IsBoolean2(value) || IsNumber2(value) || IsString2(value);
}
function IsMappedKey2(value) {
  return IsKindOf2(value, "MappedKey") && IsArray2(value.keys) && value.keys.every((key) => IsNumber2(key) || IsString2(key));
}
function IsMappedResult2(value) {
  return IsKindOf2(value, "MappedResult") && IsProperties(value.properties);
}
function IsNever2(value) {
  return IsKindOf2(value, "Never") && IsObject2(value.not) && Object.getOwnPropertyNames(value.not).length === 0;
}
function IsNot2(value) {
  return IsKindOf2(value, "Not") && IsSchema2(value.not);
}
function IsNull4(value) {
  return IsKindOf2(value, "Null") && value.type === "null" && IsOptionalString(value.$id);
}
function IsNumber4(value) {
  return IsKindOf2(value, "Number") && value.type === "number" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximum) && IsOptionalNumber(value.exclusiveMinimum) && IsOptionalNumber(value.maximum) && IsOptionalNumber(value.minimum) && IsOptionalNumber(value.multipleOf);
}
function IsObject4(value) {
  return IsKindOf2(value, "Object") && value.type === "object" && IsOptionalString(value.$id) && IsProperties(value.properties) && IsAdditionalProperties(value.additionalProperties) && IsOptionalNumber(value.minProperties) && IsOptionalNumber(value.maxProperties);
}
function IsPromise3(value) {
  return IsKindOf2(value, "Promise") && value.type === "Promise" && IsOptionalString(value.$id) && IsSchema2(value.item);
}
function IsRecord2(value) {
  return IsKindOf2(value, "Record") && value.type === "object" && IsOptionalString(value.$id) && IsAdditionalProperties(value.additionalProperties) && IsObject2(value.patternProperties) && ((schema) => {
    const keys = Object.getOwnPropertyNames(schema.patternProperties);
    return keys.length === 1 && IsPattern(keys[0]) && IsObject2(schema.patternProperties) && IsSchema2(schema.patternProperties[keys[0]]);
  })(value);
}
function IsRecursive(value) {
  return IsObject2(value) && Hint in value && value[Hint] === "Recursive";
}
function IsRef2(value) {
  return IsKindOf2(value, "Ref") && IsOptionalString(value.$id) && IsString2(value.$ref);
}
function IsRegExp3(value) {
  return IsKindOf2(value, "RegExp") && IsOptionalString(value.$id) && IsString2(value.source) && IsString2(value.flags) && IsOptionalNumber(value.maxLength) && IsOptionalNumber(value.minLength);
}
function IsString4(value) {
  return IsKindOf2(value, "String") && value.type === "string" && IsOptionalString(value.$id) && IsOptionalNumber(value.minLength) && IsOptionalNumber(value.maxLength) && IsOptionalPattern(value.pattern) && IsOptionalFormat(value.format);
}
function IsSymbol4(value) {
  return IsKindOf2(value, "Symbol") && value.type === "symbol" && IsOptionalString(value.$id);
}
function IsTemplateLiteral2(value) {
  return IsKindOf2(value, "TemplateLiteral") && value.type === "string" && IsString2(value.pattern) && value.pattern[0] === "^" && value.pattern[value.pattern.length - 1] === "$";
}
function IsThis2(value) {
  return IsKindOf2(value, "This") && IsOptionalString(value.$id) && IsString2(value.$ref);
}
function IsTransform2(value) {
  return IsObject2(value) && TransformKind in value;
}
function IsTuple2(value) {
  return IsKindOf2(value, "Tuple") && value.type === "array" && IsOptionalString(value.$id) && IsNumber2(value.minItems) && IsNumber2(value.maxItems) && value.minItems === value.maxItems && (IsUndefined2(value.items) && IsUndefined2(value.additionalItems) && value.minItems === 0 || IsArray2(value.items) && value.items.every((schema) => IsSchema2(schema)));
}
function IsUndefined4(value) {
  return IsKindOf2(value, "Undefined") && value.type === "undefined" && IsOptionalString(value.$id);
}
function IsUnionLiteral(value) {
  return IsUnion2(value) && value.anyOf.every((schema) => IsLiteralString(schema) || IsLiteralNumber(schema));
}
function IsUnion2(value) {
  return IsKindOf2(value, "Union") && IsOptionalString(value.$id) && IsObject2(value) && IsArray2(value.anyOf) && value.anyOf.every((schema) => IsSchema2(schema));
}
function IsUint8Array4(value) {
  return IsKindOf2(value, "Uint8Array") && value.type === "Uint8Array" && IsOptionalString(value.$id) && IsOptionalNumber(value.minByteLength) && IsOptionalNumber(value.maxByteLength);
}
function IsUnknown2(value) {
  return IsKindOf2(value, "Unknown") && IsOptionalString(value.$id);
}
function IsUnsafe2(value) {
  return IsKindOf2(value, "Unsafe");
}
function IsVoid2(value) {
  return IsKindOf2(value, "Void") && value.type === "void" && IsOptionalString(value.$id);
}
function IsKind2(value) {
  return IsObject2(value) && Kind in value && IsString2(value[Kind]) && !KnownTypes.includes(value[Kind]);
}
function IsSchema2(value) {
  return IsObject2(value) && (IsAny2(value) || IsArray4(value) || IsBoolean4(value) || IsBigInt4(value) || IsAsyncIterator4(value) || IsConstructor2(value) || IsDate4(value) || IsFunction4(value) || IsInteger3(value) || IsIntersect2(value) || IsIterator4(value) || IsLiteral2(value) || IsMappedKey2(value) || IsMappedResult2(value) || IsNever2(value) || IsNot2(value) || IsNull4(value) || IsNumber4(value) || IsObject4(value) || IsPromise3(value) || IsRecord2(value) || IsRef2(value) || IsRegExp3(value) || IsString4(value) || IsSymbol4(value) || IsTemplateLiteral2(value) || IsThis2(value) || IsTuple2(value) || IsUndefined4(value) || IsUnion2(value) || IsUint8Array4(value) || IsUnknown2(value) || IsUnsafe2(value) || IsVoid2(value) || IsKind2(value));
}
// node_modules/@sinclair/typebox/build/esm/type/extends/extends-check.mjs
class ExtendsResolverError extends TypeBoxError {
}
var ExtendsResult;
(function(ExtendsResult2) {
  ExtendsResult2[ExtendsResult2["Union"] = 0] = "Union";
  ExtendsResult2[ExtendsResult2["True"] = 1] = "True";
  ExtendsResult2[ExtendsResult2["False"] = 2] = "False";
})(ExtendsResult || (ExtendsResult = {}));
function IntoBooleanResult(result) {
  return result === ExtendsResult.False ? result : ExtendsResult.True;
}
function Throw(message) {
  throw new ExtendsResolverError(message);
}
function IsStructuralRight(right) {
  return exports_type2.IsNever(right) || exports_type2.IsIntersect(right) || exports_type2.IsUnion(right) || exports_type2.IsUnknown(right) || exports_type2.IsAny(right);
}
function StructuralRight(left, right) {
  return exports_type2.IsNever(right) ? FromNeverRight(left, right) : exports_type2.IsIntersect(right) ? FromIntersectRight(left, right) : exports_type2.IsUnion(right) ? FromUnionRight(left, right) : exports_type2.IsUnknown(right) ? FromUnknownRight(left, right) : exports_type2.IsAny(right) ? FromAnyRight(left, right) : Throw("StructuralRight");
}
function FromAnyRight(left, right) {
  return ExtendsResult.True;
}
function FromAny2(left, right) {
  return exports_type2.IsIntersect(right) ? FromIntersectRight(left, right) : exports_type2.IsUnion(right) && right.anyOf.some((schema) => exports_type2.IsAny(schema) || exports_type2.IsUnknown(schema)) ? ExtendsResult.True : exports_type2.IsUnion(right) ? ExtendsResult.Union : exports_type2.IsUnknown(right) ? ExtendsResult.True : exports_type2.IsAny(right) ? ExtendsResult.True : ExtendsResult.Union;
}
function FromArrayRight(left, right) {
  return exports_type2.IsUnknown(left) ? ExtendsResult.False : exports_type2.IsAny(left) ? ExtendsResult.Union : exports_type2.IsNever(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromArray4(left, right) {
  return exports_type2.IsObject(right) && IsObjectArrayLike(right) ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : !exports_type2.IsArray(right) ? ExtendsResult.False : IntoBooleanResult(Visit5(left.items, right.items));
}
function FromAsyncIterator2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : !exports_type2.IsAsyncIterator(right) ? ExtendsResult.False : IntoBooleanResult(Visit5(left.items, right.items));
}
function FromBigInt2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsBigInt(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromBooleanRight(left, right) {
  return exports_type2.IsLiteralBoolean(left) ? ExtendsResult.True : exports_type2.IsBoolean(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromBoolean2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsBoolean(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromConstructor2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : !exports_type2.IsConstructor(right) ? ExtendsResult.False : left.parameters.length > right.parameters.length ? ExtendsResult.False : !left.parameters.every((schema, index) => IntoBooleanResult(Visit5(right.parameters[index], schema)) === ExtendsResult.True) ? ExtendsResult.False : IntoBooleanResult(Visit5(left.returns, right.returns));
}
function FromDate2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsDate(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromFunction2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : !exports_type2.IsFunction(right) ? ExtendsResult.False : left.parameters.length > right.parameters.length ? ExtendsResult.False : !left.parameters.every((schema, index) => IntoBooleanResult(Visit5(right.parameters[index], schema)) === ExtendsResult.True) ? ExtendsResult.False : IntoBooleanResult(Visit5(left.returns, right.returns));
}
function FromIntegerRight(left, right) {
  return exports_type2.IsLiteral(left) && exports_value.IsNumber(left.const) ? ExtendsResult.True : exports_type2.IsNumber(left) || exports_type2.IsInteger(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromInteger2(left, right) {
  return exports_type2.IsInteger(right) || exports_type2.IsNumber(right) ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : ExtendsResult.False;
}
function FromIntersectRight(left, right) {
  return right.allOf.every((schema) => Visit5(left, schema) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromIntersect4(left, right) {
  return left.allOf.some((schema) => Visit5(schema, right) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromIterator2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : !exports_type2.IsIterator(right) ? ExtendsResult.False : IntoBooleanResult(Visit5(left.items, right.items));
}
function FromLiteral3(left, right) {
  return exports_type2.IsLiteral(right) && right.const === left.const ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsString(right) ? FromStringRight(left, right) : exports_type2.IsNumber(right) ? FromNumberRight(left, right) : exports_type2.IsInteger(right) ? FromIntegerRight(left, right) : exports_type2.IsBoolean(right) ? FromBooleanRight(left, right) : ExtendsResult.False;
}
function FromNeverRight(left, right) {
  return ExtendsResult.False;
}
function FromNever2(left, right) {
  return ExtendsResult.True;
}
function UnwrapTNot(schema) {
  let [current, depth] = [schema, 0];
  while (true) {
    if (!exports_type2.IsNot(current))
      break;
    current = current.not;
    depth += 1;
  }
  return depth % 2 === 0 ? current : Unknown();
}
function FromNot2(left, right) {
  return exports_type2.IsNot(left) ? Visit5(UnwrapTNot(left), right) : exports_type2.IsNot(right) ? Visit5(left, UnwrapTNot(right)) : Throw("Invalid fallthrough for Not");
}
function FromNull2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsNull(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromNumberRight(left, right) {
  return exports_type2.IsLiteralNumber(left) ? ExtendsResult.True : exports_type2.IsNumber(left) || exports_type2.IsInteger(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromNumber2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsInteger(right) || exports_type2.IsNumber(right) ? ExtendsResult.True : ExtendsResult.False;
}
function IsObjectPropertyCount(schema, count) {
  return Object.getOwnPropertyNames(schema.properties).length === count;
}
function IsObjectStringLike(schema) {
  return IsObjectArrayLike(schema);
}
function IsObjectSymbolLike(schema) {
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "description" in schema.properties && exports_type2.IsUnion(schema.properties.description) && schema.properties.description.anyOf.length === 2 && (exports_type2.IsString(schema.properties.description.anyOf[0]) && exports_type2.IsUndefined(schema.properties.description.anyOf[1]) || exports_type2.IsString(schema.properties.description.anyOf[1]) && exports_type2.IsUndefined(schema.properties.description.anyOf[0]));
}
function IsObjectNumberLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectBooleanLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectBigIntLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectDateLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectUint8ArrayLike(schema) {
  return IsObjectArrayLike(schema);
}
function IsObjectFunctionLike(schema) {
  const length = Number2();
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "length" in schema.properties && IntoBooleanResult(Visit5(schema.properties["length"], length)) === ExtendsResult.True;
}
function IsObjectConstructorLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectArrayLike(schema) {
  const length = Number2();
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "length" in schema.properties && IntoBooleanResult(Visit5(schema.properties["length"], length)) === ExtendsResult.True;
}
function IsObjectPromiseLike(schema) {
  const then = Function2([Any()], Any());
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "then" in schema.properties && IntoBooleanResult(Visit5(schema.properties["then"], then)) === ExtendsResult.True;
}
function Property(left, right) {
  return Visit5(left, right) === ExtendsResult.False ? ExtendsResult.False : exports_type2.IsOptional(left) && !exports_type2.IsOptional(right) ? ExtendsResult.False : ExtendsResult.True;
}
function FromObjectRight(left, right) {
  return exports_type2.IsUnknown(left) ? ExtendsResult.False : exports_type2.IsAny(left) ? ExtendsResult.Union : exports_type2.IsNever(left) || exports_type2.IsLiteralString(left) && IsObjectStringLike(right) || exports_type2.IsLiteralNumber(left) && IsObjectNumberLike(right) || exports_type2.IsLiteralBoolean(left) && IsObjectBooleanLike(right) || exports_type2.IsSymbol(left) && IsObjectSymbolLike(right) || exports_type2.IsBigInt(left) && IsObjectBigIntLike(right) || exports_type2.IsString(left) && IsObjectStringLike(right) || exports_type2.IsSymbol(left) && IsObjectSymbolLike(right) || exports_type2.IsNumber(left) && IsObjectNumberLike(right) || exports_type2.IsInteger(left) && IsObjectNumberLike(right) || exports_type2.IsBoolean(left) && IsObjectBooleanLike(right) || exports_type2.IsUint8Array(left) && IsObjectUint8ArrayLike(right) || exports_type2.IsDate(left) && IsObjectDateLike(right) || exports_type2.IsConstructor(left) && IsObjectConstructorLike(right) || exports_type2.IsFunction(left) && IsObjectFunctionLike(right) ? ExtendsResult.True : exports_type2.IsRecord(left) && exports_type2.IsString(RecordKey(left)) ? (() => {
    return right[Hint] === "Record" ? ExtendsResult.True : ExtendsResult.False;
  })() : exports_type2.IsRecord(left) && exports_type2.IsNumber(RecordKey(left)) ? (() => {
    return IsObjectPropertyCount(right, 0) ? ExtendsResult.True : ExtendsResult.False;
  })() : ExtendsResult.False;
}
function FromObject2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : !exports_type2.IsObject(right) ? ExtendsResult.False : (() => {
    for (const key of Object.getOwnPropertyNames(right.properties)) {
      if (!(key in left.properties) && !exports_type2.IsOptional(right.properties[key])) {
        return ExtendsResult.False;
      }
      if (exports_type2.IsOptional(right.properties[key])) {
        return ExtendsResult.True;
      }
      if (Property(left.properties[key], right.properties[key]) === ExtendsResult.False) {
        return ExtendsResult.False;
      }
    }
    return ExtendsResult.True;
  })();
}
function FromPromise2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) && IsObjectPromiseLike(right) ? ExtendsResult.True : !exports_type2.IsPromise(right) ? ExtendsResult.False : IntoBooleanResult(Visit5(left.item, right.item));
}
function RecordKey(schema) {
  return PatternNumberExact in schema.patternProperties ? Number2() : (PatternStringExact in schema.patternProperties) ? String2() : Throw("Unknown record key pattern");
}
function RecordValue(schema) {
  return PatternNumberExact in schema.patternProperties ? schema.patternProperties[PatternNumberExact] : (PatternStringExact in schema.patternProperties) ? schema.patternProperties[PatternStringExact] : Throw("Unable to get record value schema");
}
function FromRecordRight(left, right) {
  const [Key, Value] = [RecordKey(right), RecordValue(right)];
  return exports_type2.IsLiteralString(left) && exports_type2.IsNumber(Key) && IntoBooleanResult(Visit5(left, Value)) === ExtendsResult.True ? ExtendsResult.True : exports_type2.IsUint8Array(left) && exports_type2.IsNumber(Key) ? Visit5(left, Value) : exports_type2.IsString(left) && exports_type2.IsNumber(Key) ? Visit5(left, Value) : exports_type2.IsArray(left) && exports_type2.IsNumber(Key) ? Visit5(left, Value) : exports_type2.IsObject(left) ? (() => {
    for (const key of Object.getOwnPropertyNames(left.properties)) {
      if (Property(Value, left.properties[key]) === ExtendsResult.False) {
        return ExtendsResult.False;
      }
    }
    return ExtendsResult.True;
  })() : ExtendsResult.False;
}
function FromRecord2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : !exports_type2.IsRecord(right) ? ExtendsResult.False : Visit5(RecordValue(left), RecordValue(right));
}
function FromRegExp2(left, right) {
  const L = exports_type2.IsRegExp(left) ? String2() : left;
  const R = exports_type2.IsRegExp(right) ? String2() : right;
  return Visit5(L, R);
}
function FromStringRight(left, right) {
  return exports_type2.IsLiteral(left) && exports_value.IsString(left.const) ? ExtendsResult.True : exports_type2.IsString(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromString2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsString(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromSymbol2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsSymbol(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromTemplateLiteral3(left, right) {
  return exports_type2.IsTemplateLiteral(left) ? Visit5(TemplateLiteralToUnion(left), right) : exports_type2.IsTemplateLiteral(right) ? Visit5(left, TemplateLiteralToUnion(right)) : Throw("Invalid fallthrough for TemplateLiteral");
}
function IsArrayOfTuple(left, right) {
  return exports_type2.IsArray(right) && left.items !== undefined && left.items.every((schema) => Visit5(schema, right.items) === ExtendsResult.True);
}
function FromTupleRight(left, right) {
  return exports_type2.IsNever(left) ? ExtendsResult.True : exports_type2.IsUnknown(left) ? ExtendsResult.False : exports_type2.IsAny(left) ? ExtendsResult.Union : ExtendsResult.False;
}
function FromTuple4(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) && IsObjectArrayLike(right) ? ExtendsResult.True : exports_type2.IsArray(right) && IsArrayOfTuple(left, right) ? ExtendsResult.True : !exports_type2.IsTuple(right) ? ExtendsResult.False : exports_value.IsUndefined(left.items) && !exports_value.IsUndefined(right.items) || !exports_value.IsUndefined(left.items) && exports_value.IsUndefined(right.items) ? ExtendsResult.False : exports_value.IsUndefined(left.items) && !exports_value.IsUndefined(right.items) ? ExtendsResult.True : left.items.every((schema, index) => Visit5(schema, right.items[index]) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUint8Array2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsUint8Array(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUndefined2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsVoid(right) ? FromVoidRight(left, right) : exports_type2.IsUndefined(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUnionRight(left, right) {
  return right.anyOf.some((schema) => Visit5(left, schema) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUnion6(left, right) {
  return left.anyOf.every((schema) => Visit5(schema, right) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUnknownRight(left, right) {
  return ExtendsResult.True;
}
function FromUnknown2(left, right) {
  return exports_type2.IsNever(right) ? FromNeverRight(left, right) : exports_type2.IsIntersect(right) ? FromIntersectRight(left, right) : exports_type2.IsUnion(right) ? FromUnionRight(left, right) : exports_type2.IsAny(right) ? FromAnyRight(left, right) : exports_type2.IsString(right) ? FromStringRight(left, right) : exports_type2.IsNumber(right) ? FromNumberRight(left, right) : exports_type2.IsInteger(right) ? FromIntegerRight(left, right) : exports_type2.IsBoolean(right) ? FromBooleanRight(left, right) : exports_type2.IsArray(right) ? FromArrayRight(left, right) : exports_type2.IsTuple(right) ? FromTupleRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsUnknown(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromVoidRight(left, right) {
  return exports_type2.IsUndefined(left) ? ExtendsResult.True : exports_type2.IsUndefined(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromVoid2(left, right) {
  return exports_type2.IsIntersect(right) ? FromIntersectRight(left, right) : exports_type2.IsUnion(right) ? FromUnionRight(left, right) : exports_type2.IsUnknown(right) ? FromUnknownRight(left, right) : exports_type2.IsAny(right) ? FromAnyRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsVoid(right) ? ExtendsResult.True : ExtendsResult.False;
}
function Visit5(left, right) {
  return exports_type2.IsTemplateLiteral(left) || exports_type2.IsTemplateLiteral(right) ? FromTemplateLiteral3(left, right) : exports_type2.IsRegExp(left) || exports_type2.IsRegExp(right) ? FromRegExp2(left, right) : exports_type2.IsNot(left) || exports_type2.IsNot(right) ? FromNot2(left, right) : exports_type2.IsAny(left) ? FromAny2(left, right) : exports_type2.IsArray(left) ? FromArray4(left, right) : exports_type2.IsBigInt(left) ? FromBigInt2(left, right) : exports_type2.IsBoolean(left) ? FromBoolean2(left, right) : exports_type2.IsAsyncIterator(left) ? FromAsyncIterator2(left, right) : exports_type2.IsConstructor(left) ? FromConstructor2(left, right) : exports_type2.IsDate(left) ? FromDate2(left, right) : exports_type2.IsFunction(left) ? FromFunction2(left, right) : exports_type2.IsInteger(left) ? FromInteger2(left, right) : exports_type2.IsIntersect(left) ? FromIntersect4(left, right) : exports_type2.IsIterator(left) ? FromIterator2(left, right) : exports_type2.IsLiteral(left) ? FromLiteral3(left, right) : exports_type2.IsNever(left) ? FromNever2(left, right) : exports_type2.IsNull(left) ? FromNull2(left, right) : exports_type2.IsNumber(left) ? FromNumber2(left, right) : exports_type2.IsObject(left) ? FromObject2(left, right) : exports_type2.IsRecord(left) ? FromRecord2(left, right) : exports_type2.IsString(left) ? FromString2(left, right) : exports_type2.IsSymbol(left) ? FromSymbol2(left, right) : exports_type2.IsTuple(left) ? FromTuple4(left, right) : exports_type2.IsPromise(left) ? FromPromise2(left, right) : exports_type2.IsUint8Array(left) ? FromUint8Array2(left, right) : exports_type2.IsUndefined(left) ? FromUndefined2(left, right) : exports_type2.IsUnion(left) ? FromUnion6(left, right) : exports_type2.IsUnknown(left) ? FromUnknown2(left, right) : exports_type2.IsVoid(left) ? FromVoid2(left, right) : Throw(`Unknown left type operand '${left[Kind]}'`);
}
function ExtendsCheck(left, right) {
  return Visit5(left, right);
}
// node_modules/@sinclair/typebox/build/esm/type/extends/extends-from-mapped-result.mjs
function FromProperties7(P, Right, True, False, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Extends(P[K2], Right, True, False, options);
  return Acc;
}
function FromMappedResult6(Left, Right, True, False, options) {
  return FromProperties7(Left.properties, Right, True, False, options);
}
function ExtendsFromMappedResult(Left, Right, True, False, options) {
  const P = FromMappedResult6(Left, Right, True, False, options);
  return MappedResult(P);
}

// node_modules/@sinclair/typebox/build/esm/type/extends/extends.mjs
function ExtendsResolve(left, right, trueType, falseType) {
  const R = ExtendsCheck(left, right);
  return R === ExtendsResult.Union ? Union([trueType, falseType]) : R === ExtendsResult.True ? trueType : falseType;
}
function Extends(L, R, T, F, options = {}) {
  return IsMappedResult(L) ? ExtendsFromMappedResult(L, R, T, F, options) : IsMappedKey(L) ? CloneType(ExtendsFromMappedKey(L, R, T, F, options)) : CloneType(ExtendsResolve(L, R, T, F), options);
}

// node_modules/@sinclair/typebox/build/esm/type/extends/extends-from-mapped-key.mjs
function FromPropertyKey(K, U, L, R, options) {
  return {
    [K]: Extends(Literal(K), U, L, R, options)
  };
}
function FromPropertyKeys(K, U, L, R, options) {
  return K.reduce((Acc, LK) => {
    return { ...Acc, ...FromPropertyKey(LK, U, L, R, options) };
  }, {});
}
function FromMappedKey2(K, U, L, R, options) {
  return FromPropertyKeys(K.keys, U, L, R, options);
}
function ExtendsFromMappedKey(T, U, L, R, options) {
  const P = FromMappedKey2(T, U, L, R, options);
  return MappedResult(P);
}
// node_modules/@sinclair/typebox/build/esm/value/check/check.mjs
class ValueCheckUnknownTypeError extends TypeBoxError {
  constructor(schema) {
    super(`Unknown type`);
    this.schema = schema;
  }
}
function IsAnyOrUnknown(schema) {
  return schema[Kind] === "Any" || schema[Kind] === "Unknown";
}
function IsDefined2(value) {
  return value !== undefined;
}
function FromAny3(schema, references, value) {
  return true;
}
function FromArray5(schema, references, value) {
  if (!IsArray(value))
    return false;
  if (IsDefined2(schema.minItems) && !(value.length >= schema.minItems)) {
    return false;
  }
  if (IsDefined2(schema.maxItems) && !(value.length <= schema.maxItems)) {
    return false;
  }
  if (!value.every((value2) => Visit6(schema.items, references, value2))) {
    return false;
  }
  if (schema.uniqueItems === true && !function() {
    const set3 = new Set;
    for (const element of value) {
      const hashed = Hash(element);
      if (set3.has(hashed)) {
        return false;
      } else {
        set3.add(hashed);
      }
    }
    return true;
  }()) {
    return false;
  }
  if (!(IsDefined2(schema.contains) || IsNumber(schema.minContains) || IsNumber(schema.maxContains))) {
    return true;
  }
  const containsSchema = IsDefined2(schema.contains) ? schema.contains : Never();
  const containsCount = value.reduce((acc, value2) => Visit6(containsSchema, references, value2) ? acc + 1 : acc, 0);
  if (containsCount === 0) {
    return false;
  }
  if (IsNumber(schema.minContains) && containsCount < schema.minContains) {
    return false;
  }
  if (IsNumber(schema.maxContains) && containsCount > schema.maxContains) {
    return false;
  }
  return true;
}
function FromAsyncIterator3(schema, references, value) {
  return IsAsyncIterator(value);
}
function FromBigInt3(schema, references, value) {
  if (!IsBigInt(value))
    return false;
  if (IsDefined2(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    return false;
  }
  if (IsDefined2(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    return false;
  }
  if (IsDefined2(schema.maximum) && !(value <= schema.maximum)) {
    return false;
  }
  if (IsDefined2(schema.minimum) && !(value >= schema.minimum)) {
    return false;
  }
  if (IsDefined2(schema.multipleOf) && !(value % schema.multipleOf === BigInt(0))) {
    return false;
  }
  return true;
}
function FromBoolean3(schema, references, value) {
  return IsBoolean(value);
}
function FromConstructor3(schema, references, value) {
  return Visit6(schema.returns, references, value.prototype);
}
function FromDate3(schema, references, value) {
  if (!IsDate(value))
    return false;
  if (IsDefined2(schema.exclusiveMaximumTimestamp) && !(value.getTime() < schema.exclusiveMaximumTimestamp)) {
    return false;
  }
  if (IsDefined2(schema.exclusiveMinimumTimestamp) && !(value.getTime() > schema.exclusiveMinimumTimestamp)) {
    return false;
  }
  if (IsDefined2(schema.maximumTimestamp) && !(value.getTime() <= schema.maximumTimestamp)) {
    return false;
  }
  if (IsDefined2(schema.minimumTimestamp) && !(value.getTime() >= schema.minimumTimestamp)) {
    return false;
  }
  if (IsDefined2(schema.multipleOfTimestamp) && !(value.getTime() % schema.multipleOfTimestamp === 0)) {
    return false;
  }
  return true;
}
function FromFunction3(schema, references, value) {
  return IsFunction(value);
}
function FromInteger3(schema, references, value) {
  if (!IsInteger(value)) {
    return false;
  }
  if (IsDefined2(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    return false;
  }
  if (IsDefined2(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    return false;
  }
  if (IsDefined2(schema.maximum) && !(value <= schema.maximum)) {
    return false;
  }
  if (IsDefined2(schema.minimum) && !(value >= schema.minimum)) {
    return false;
  }
  if (IsDefined2(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    return false;
  }
  return true;
}
function FromIntersect5(schema, references, value) {
  const check1 = schema.allOf.every((schema2) => Visit6(schema2, references, value));
  if (schema.unevaluatedProperties === false) {
    const keyPattern = new RegExp(KeyOfPattern(schema));
    const check2 = Object.getOwnPropertyNames(value).every((key) => keyPattern.test(key));
    return check1 && check2;
  } else if (IsSchema2(schema.unevaluatedProperties)) {
    const keyCheck = new RegExp(KeyOfPattern(schema));
    const check2 = Object.getOwnPropertyNames(value).every((key) => keyCheck.test(key) || Visit6(schema.unevaluatedProperties, references, value[key]));
    return check1 && check2;
  } else {
    return check1;
  }
}
function FromIterator3(schema, references, value) {
  return IsIterator(value);
}
function FromLiteral4(schema, references, value) {
  return value === schema.const;
}
function FromNever3(schema, references, value) {
  return false;
}
function FromNot3(schema, references, value) {
  return !Visit6(schema.not, references, value);
}
function FromNull3(schema, references, value) {
  return IsNull(value);
}
function FromNumber3(schema, references, value) {
  if (!TypeSystemPolicy.IsNumberLike(value))
    return false;
  if (IsDefined2(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    return false;
  }
  if (IsDefined2(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    return false;
  }
  if (IsDefined2(schema.minimum) && !(value >= schema.minimum)) {
    return false;
  }
  if (IsDefined2(schema.maximum) && !(value <= schema.maximum)) {
    return false;
  }
  if (IsDefined2(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    return false;
  }
  return true;
}
function FromObject3(schema, references, value) {
  if (!TypeSystemPolicy.IsObjectLike(value))
    return false;
  if (IsDefined2(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    return false;
  }
  if (IsDefined2(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    return false;
  }
  const knownKeys = Object.getOwnPropertyNames(schema.properties);
  for (const knownKey of knownKeys) {
    const property = schema.properties[knownKey];
    if (schema.required && schema.required.includes(knownKey)) {
      if (!Visit6(property, references, value[knownKey])) {
        return false;
      }
      if ((ExtendsUndefinedCheck(property) || IsAnyOrUnknown(property)) && !(knownKey in value)) {
        return false;
      }
    } else {
      if (TypeSystemPolicy.IsExactOptionalProperty(value, knownKey) && !Visit6(property, references, value[knownKey])) {
        return false;
      }
    }
  }
  if (schema.additionalProperties === false) {
    const valueKeys = Object.getOwnPropertyNames(value);
    if (schema.required && schema.required.length === knownKeys.length && valueKeys.length === knownKeys.length) {
      return true;
    } else {
      return valueKeys.every((valueKey) => knownKeys.includes(valueKey));
    }
  } else if (typeof schema.additionalProperties === "object") {
    const valueKeys = Object.getOwnPropertyNames(value);
    return valueKeys.every((key) => knownKeys.includes(key) || Visit6(schema.additionalProperties, references, value[key]));
  } else {
    return true;
  }
}
function FromPromise3(schema, references, value) {
  return IsPromise(value);
}
function FromRecord3(schema, references, value) {
  if (!TypeSystemPolicy.IsRecordLike(value)) {
    return false;
  }
  if (IsDefined2(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    return false;
  }
  if (IsDefined2(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    return false;
  }
  const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
  const regex = new RegExp(patternKey);
  const check1 = Object.entries(value).every(([key, value2]) => {
    return regex.test(key) ? Visit6(patternSchema, references, value2) : true;
  });
  const check2 = typeof schema.additionalProperties === "object" ? Object.entries(value).every(([key, value2]) => {
    return !regex.test(key) ? Visit6(schema.additionalProperties, references, value2) : true;
  }) : true;
  const check3 = schema.additionalProperties === false ? Object.getOwnPropertyNames(value).every((key) => {
    return regex.test(key);
  }) : true;
  return check1 && check2 && check3;
}
function FromRef2(schema, references, value) {
  return Visit6(Deref(schema, references), references, value);
}
function FromRegExp3(schema, references, value) {
  const regex = new RegExp(schema.source, schema.flags);
  if (IsDefined2(schema.minLength)) {
    if (!(value.length >= schema.minLength))
      return false;
  }
  if (IsDefined2(schema.maxLength)) {
    if (!(value.length <= schema.maxLength))
      return false;
  }
  return regex.test(value);
}
function FromString3(schema, references, value) {
  if (!IsString(value)) {
    return false;
  }
  if (IsDefined2(schema.minLength)) {
    if (!(value.length >= schema.minLength))
      return false;
  }
  if (IsDefined2(schema.maxLength)) {
    if (!(value.length <= schema.maxLength))
      return false;
  }
  if (IsDefined2(schema.pattern)) {
    const regex = new RegExp(schema.pattern);
    if (!regex.test(value))
      return false;
  }
  if (IsDefined2(schema.format)) {
    if (!exports_format.Has(schema.format))
      return false;
    const func = exports_format.Get(schema.format);
    return func(value);
  }
  return true;
}
function FromSymbol3(schema, references, value) {
  return IsSymbol(value);
}
function FromTemplateLiteral4(schema, references, value) {
  return IsString(value) && new RegExp(schema.pattern).test(value);
}
function FromThis2(schema, references, value) {
  return Visit6(Deref(schema, references), references, value);
}
function FromTuple5(schema, references, value) {
  if (!IsArray(value)) {
    return false;
  }
  if (schema.items === undefined && !(value.length === 0)) {
    return false;
  }
  if (!(value.length === schema.maxItems)) {
    return false;
  }
  if (!schema.items) {
    return true;
  }
  for (let i = 0;i < schema.items.length; i++) {
    if (!Visit6(schema.items[i], references, value[i]))
      return false;
  }
  return true;
}
function FromUndefined3(schema, references, value) {
  return IsUndefined(value);
}
function FromUnion7(schema, references, value) {
  return schema.anyOf.some((inner) => Visit6(inner, references, value));
}
function FromUint8Array3(schema, references, value) {
  if (!IsUint8Array(value)) {
    return false;
  }
  if (IsDefined2(schema.maxByteLength) && !(value.length <= schema.maxByteLength)) {
    return false;
  }
  if (IsDefined2(schema.minByteLength) && !(value.length >= schema.minByteLength)) {
    return false;
  }
  return true;
}
function FromUnknown3(schema, references, value) {
  return true;
}
function FromVoid3(schema, references, value) {
  return TypeSystemPolicy.IsVoidLike(value);
}
function FromKind2(schema, references, value) {
  if (!exports_type.Has(schema[Kind]))
    return false;
  const func = exports_type.Get(schema[Kind]);
  return func(schema, value);
}
function Visit6(schema, references, value) {
  const references_ = IsDefined2(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Any":
      return FromAny3(schema_, references_, value);
    case "Array":
      return FromArray5(schema_, references_, value);
    case "AsyncIterator":
      return FromAsyncIterator3(schema_, references_, value);
    case "BigInt":
      return FromBigInt3(schema_, references_, value);
    case "Boolean":
      return FromBoolean3(schema_, references_, value);
    case "Constructor":
      return FromConstructor3(schema_, references_, value);
    case "Date":
      return FromDate3(schema_, references_, value);
    case "Function":
      return FromFunction3(schema_, references_, value);
    case "Integer":
      return FromInteger3(schema_, references_, value);
    case "Intersect":
      return FromIntersect5(schema_, references_, value);
    case "Iterator":
      return FromIterator3(schema_, references_, value);
    case "Literal":
      return FromLiteral4(schema_, references_, value);
    case "Never":
      return FromNever3(schema_, references_, value);
    case "Not":
      return FromNot3(schema_, references_, value);
    case "Null":
      return FromNull3(schema_, references_, value);
    case "Number":
      return FromNumber3(schema_, references_, value);
    case "Object":
      return FromObject3(schema_, references_, value);
    case "Promise":
      return FromPromise3(schema_, references_, value);
    case "Record":
      return FromRecord3(schema_, references_, value);
    case "Ref":
      return FromRef2(schema_, references_, value);
    case "RegExp":
      return FromRegExp3(schema_, references_, value);
    case "String":
      return FromString3(schema_, references_, value);
    case "Symbol":
      return FromSymbol3(schema_, references_, value);
    case "TemplateLiteral":
      return FromTemplateLiteral4(schema_, references_, value);
    case "This":
      return FromThis2(schema_, references_, value);
    case "Tuple":
      return FromTuple5(schema_, references_, value);
    case "Undefined":
      return FromUndefined3(schema_, references_, value);
    case "Union":
      return FromUnion7(schema_, references_, value);
    case "Uint8Array":
      return FromUint8Array3(schema_, references_, value);
    case "Unknown":
      return FromUnknown3(schema_, references_, value);
    case "Void":
      return FromVoid3(schema_, references_, value);
    default:
      if (!exports_type.Has(schema_[Kind]))
        throw new ValueCheckUnknownTypeError(schema_);
      return FromKind2(schema_, references_, value);
  }
}
function Check(...args) {
  return args.length === 3 ? Visit6(args[0], args[1], args[2]) : Visit6(args[0], [], args[1]);
}
// node_modules/@sinclair/typebox/build/esm/value/clone/clone.mjs
function ObjectType3(value) {
  const Acc = {};
  for (const key of Object.getOwnPropertyNames(value)) {
    Acc[key] = Clone2(value[key]);
  }
  for (const key of Object.getOwnPropertySymbols(value)) {
    Acc[key] = Clone2(value[key]);
  }
  return Acc;
}
function ArrayType3(value) {
  return value.map((element) => Clone2(element));
}
function TypedArrayType(value) {
  return value.slice();
}
function DateType3(value) {
  return new Date(value.toISOString());
}
function ValueType(value) {
  return value;
}
function Clone2(value) {
  if (IsArray(value))
    return ArrayType3(value);
  if (IsDate(value))
    return DateType3(value);
  if (IsStandardObject(value))
    return ObjectType3(value);
  if (IsTypedArray(value))
    return TypedArrayType(value);
  if (IsValueType(value))
    return ValueType(value);
  throw new Error("ValueClone: Unable to clone value");
}
// node_modules/@sinclair/typebox/build/esm/value/create/create.mjs
class ValueCreateError extends TypeBoxError {
  constructor(schema, message) {
    super(message);
    this.schema = schema;
  }
}
function FromDefault(value) {
  return typeof value === "function" ? value : Clone2(value);
}
function FromAny4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return {};
  }
}
function FromArray6(schema, references) {
  if (schema.uniqueItems === true && !HasPropertyKey(schema, "default")) {
    throw new ValueCreateError(schema, "Array with the uniqueItems constraint requires a default value");
  } else if ("contains" in schema && !HasPropertyKey(schema, "default")) {
    throw new ValueCreateError(schema, "Array with the contains constraint requires a default value");
  } else if ("default" in schema) {
    return FromDefault(schema.default);
  } else if (schema.minItems !== undefined) {
    return Array.from({ length: schema.minItems }).map((item) => {
      return Visit7(schema.items, references);
    });
  } else {
    return [];
  }
}
function FromAsyncIterator4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return async function* () {
    }();
  }
}
function FromBigInt4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return BigInt(0);
  }
}
function FromBoolean4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return false;
  }
}
function FromConstructor4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    const value = Visit7(schema.returns, references);
    if (typeof value === "object" && !Array.isArray(value)) {
      return class {
        constructor() {
          for (const [key, val] of Object.entries(value)) {
            const self = this;
            self[key] = val;
          }
        }
      };
    } else {
      return class {
      };
    }
  }
}
function FromDate4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minimumTimestamp !== undefined) {
    return new Date(schema.minimumTimestamp);
  } else {
    return new Date;
  }
}
function FromFunction4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return () => Visit7(schema.returns, references);
  }
}
function FromInteger4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minimum !== undefined) {
    return schema.minimum;
  } else {
    return 0;
  }
}
function FromIntersect6(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    const value = schema.allOf.reduce((acc, schema2) => {
      const next = Visit7(schema2, references);
      return typeof next === "object" ? { ...acc, ...next } : next;
    }, {});
    if (!Check(schema, references, value))
      throw new ValueCreateError(schema, "Intersect produced invalid value. Consider using a default value.");
    return value;
  }
}
function FromIterator4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return function* () {
    }();
  }
}
function FromLiteral5(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return schema.const;
  }
}
function FromNever4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new ValueCreateError(schema, "Never types cannot be created. Consider using a default value.");
  }
}
function FromNot4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new ValueCreateError(schema, "Not types must have a default value");
  }
}
function FromNull4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return null;
  }
}
function FromNumber4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minimum !== undefined) {
    return schema.minimum;
  } else {
    return 0;
  }
}
function FromObject4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    const required = new Set(schema.required);
    const Acc = {};
    for (const [key, subschema] of Object.entries(schema.properties)) {
      if (!required.has(key))
        continue;
      Acc[key] = Visit7(subschema, references);
    }
    return Acc;
  }
}
function FromPromise4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return Promise.resolve(Visit7(schema.item, references));
  }
}
function FromRecord4(schema, references) {
  const [keyPattern, valueSchema] = Object.entries(schema.patternProperties)[0];
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if (!(keyPattern === PatternStringExact || keyPattern === PatternNumberExact)) {
    const propertyKeys = keyPattern.slice(1, keyPattern.length - 1).split("|");
    const Acc = {};
    for (const key of propertyKeys)
      Acc[key] = Visit7(valueSchema, references);
    return Acc;
  } else {
    return {};
  }
}
function FromRef3(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return Visit7(Deref(schema, references), references);
  }
}
function FromRegExp4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new ValueCreateError(schema, "RegExp types cannot be created. Consider using a default value.");
  }
}
function FromString4(schema, references) {
  if (schema.pattern !== undefined) {
    if (!HasPropertyKey(schema, "default")) {
      throw new ValueCreateError(schema, "String types with patterns must specify a default value");
    } else {
      return FromDefault(schema.default);
    }
  } else if (schema.format !== undefined) {
    if (!HasPropertyKey(schema, "default")) {
      throw new ValueCreateError(schema, "String types with formats must specify a default value");
    } else {
      return FromDefault(schema.default);
    }
  } else {
    if (HasPropertyKey(schema, "default")) {
      return FromDefault(schema.default);
    } else if (schema.minLength !== undefined) {
      return Array.from({ length: schema.minLength }).map(() => " ").join("");
    } else {
      return "";
    }
  }
}
function FromSymbol4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if ("value" in schema) {
    return Symbol.for(schema.value);
  } else {
    return Symbol();
  }
}
function FromTemplateLiteral5(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  }
  if (!IsTemplateLiteralFinite(schema))
    throw new ValueCreateError(schema, "Can only create template literals that produce a finite variants. Consider using a default value.");
  const generated = TemplateLiteralGenerate(schema);
  return generated[0];
}
function FromThis3(schema, references) {
  if (recursiveDepth++ > recursiveMaxDepth)
    throw new ValueCreateError(schema, "Cannot create recursive type as it appears possibly infinite. Consider using a default.");
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return Visit7(Deref(schema, references), references);
  }
}
function FromTuple6(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  }
  if (schema.items === undefined) {
    return [];
  } else {
    return Array.from({ length: schema.minItems }).map((_, index) => Visit7(schema.items[index], references));
  }
}
function FromUndefined4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return;
  }
}
function FromUnion8(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.anyOf.length === 0) {
    throw new Error("ValueCreate.Union: Cannot create Union with zero variants");
  } else {
    return Visit7(schema.anyOf[0], references);
  }
}
function FromUint8Array4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minByteLength !== undefined) {
    return new Uint8Array(schema.minByteLength);
  } else {
    return new Uint8Array(0);
  }
}
function FromUnknown4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return {};
  }
}
function FromVoid4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return;
  }
}
function FromKind3(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new Error("User defined types must specify a default value");
  }
}
function Visit7(schema, references) {
  const references_ = IsString(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Any":
      return FromAny4(schema_, references_);
    case "Array":
      return FromArray6(schema_, references_);
    case "AsyncIterator":
      return FromAsyncIterator4(schema_, references_);
    case "BigInt":
      return FromBigInt4(schema_, references_);
    case "Boolean":
      return FromBoolean4(schema_, references_);
    case "Constructor":
      return FromConstructor4(schema_, references_);
    case "Date":
      return FromDate4(schema_, references_);
    case "Function":
      return FromFunction4(schema_, references_);
    case "Integer":
      return FromInteger4(schema_, references_);
    case "Intersect":
      return FromIntersect6(schema_, references_);
    case "Iterator":
      return FromIterator4(schema_, references_);
    case "Literal":
      return FromLiteral5(schema_, references_);
    case "Never":
      return FromNever4(schema_, references_);
    case "Not":
      return FromNot4(schema_, references_);
    case "Null":
      return FromNull4(schema_, references_);
    case "Number":
      return FromNumber4(schema_, references_);
    case "Object":
      return FromObject4(schema_, references_);
    case "Promise":
      return FromPromise4(schema_, references_);
    case "Record":
      return FromRecord4(schema_, references_);
    case "Ref":
      return FromRef3(schema_, references_);
    case "RegExp":
      return FromRegExp4(schema_, references_);
    case "String":
      return FromString4(schema_, references_);
    case "Symbol":
      return FromSymbol4(schema_, references_);
    case "TemplateLiteral":
      return FromTemplateLiteral5(schema_, references_);
    case "This":
      return FromThis3(schema_, references_);
    case "Tuple":
      return FromTuple6(schema_, references_);
    case "Undefined":
      return FromUndefined4(schema_, references_);
    case "Union":
      return FromUnion8(schema_, references_);
    case "Uint8Array":
      return FromUint8Array4(schema_, references_);
    case "Unknown":
      return FromUnknown4(schema_, references_);
    case "Void":
      return FromVoid4(schema_, references_);
    default:
      if (!exports_type.Has(schema_[Kind]))
        throw new ValueCreateError(schema_, "Unknown type");
      return FromKind3(schema_, references_);
  }
}
var recursiveMaxDepth = 512;
var recursiveDepth = 0;
function Create2(...args) {
  recursiveDepth = 0;
  return args.length === 2 ? Visit7(args[0], args[1]) : Visit7(args[0], []);
}
// node_modules/@sinclair/typebox/build/esm/value/cast/cast.mjs
class ValueCastError extends TypeBoxError {
  constructor(schema, message) {
    super(message);
    this.schema = schema;
  }
}
function ScoreUnion(schema, references, value) {
  if (schema[Kind] === "Object" && typeof value === "object" && !IsNull(value)) {
    const object2 = schema;
    const keys = Object.getOwnPropertyNames(value);
    const entries = Object.entries(object2.properties);
    const [point, max] = [1 / entries.length, entries.length];
    return entries.reduce((acc, [key, schema2]) => {
      const literal2 = schema2[Kind] === "Literal" && schema2.const === value[key] ? max : 0;
      const checks = Check(schema2, references, value[key]) ? point : 0;
      const exists = keys.includes(key) ? point : 0;
      return acc + (literal2 + checks + exists);
    }, 0);
  } else {
    return Check(schema, references, value) ? 1 : 0;
  }
}
function SelectUnion(union3, references, value) {
  const schemas = union3.anyOf.map((schema) => Deref(schema, references));
  let [select, best] = [schemas[0], 0];
  for (const schema of schemas) {
    const score = ScoreUnion(schema, references, value);
    if (score > best) {
      select = schema;
      best = score;
    }
  }
  return select;
}
function CastUnion(union3, references, value) {
  if ("default" in union3) {
    return typeof value === "function" ? union3.default : Clone2(union3.default);
  } else {
    const schema = SelectUnion(union3, references, value);
    return Cast(schema, references, value);
  }
}
function DefaultClone(schema, references, value) {
  return Check(schema, references, value) ? Clone2(value) : Create2(schema, references);
}
function Default(schema, references, value) {
  return Check(schema, references, value) ? value : Create2(schema, references);
}
function FromArray7(schema, references, value) {
  if (Check(schema, references, value))
    return Clone2(value);
  const created = IsArray(value) ? Clone2(value) : Create2(schema, references);
  const minimum = IsNumber(schema.minItems) && created.length < schema.minItems ? [...created, ...Array.from({ length: schema.minItems - created.length }, () => null)] : created;
  const maximum = IsNumber(schema.maxItems) && minimum.length > schema.maxItems ? minimum.slice(0, schema.maxItems) : minimum;
  const casted = maximum.map((value2) => Visit8(schema.items, references, value2));
  if (schema.uniqueItems !== true)
    return casted;
  const unique = [...new Set(casted)];
  if (!Check(schema, references, unique))
    throw new ValueCastError(schema, "Array cast produced invalid data due to uniqueItems constraint");
  return unique;
}
function FromConstructor5(schema, references, value) {
  if (Check(schema, references, value))
    return Create2(schema, references);
  const required = new Set(schema.returns.required || []);
  const result = function() {
  };
  for (const [key, property] of Object.entries(schema.returns.properties)) {
    if (!required.has(key) && value.prototype[key] === undefined)
      continue;
    result.prototype[key] = Visit8(property, references, value.prototype[key]);
  }
  return result;
}
function FromIntersect7(schema, references, value) {
  const created = Create2(schema, references);
  const mapped2 = IsStandardObject(created) && IsStandardObject(value) ? { ...created, ...value } : value;
  return Check(schema, references, mapped2) ? mapped2 : Create2(schema, references);
}
function FromNever5(schema, references, value) {
  throw new ValueCastError(schema, "Never types cannot be cast");
}
function FromObject5(schema, references, value) {
  if (Check(schema, references, value))
    return value;
  if (value === null || typeof value !== "object")
    return Create2(schema, references);
  const required = new Set(schema.required || []);
  const result = {};
  for (const [key, property] of Object.entries(schema.properties)) {
    if (!required.has(key) && value[key] === undefined)
      continue;
    result[key] = Visit8(property, references, value[key]);
  }
  if (typeof schema.additionalProperties === "object") {
    const propertyNames = Object.getOwnPropertyNames(schema.properties);
    for (const propertyName of Object.getOwnPropertyNames(value)) {
      if (propertyNames.includes(propertyName))
        continue;
      result[propertyName] = Visit8(schema.additionalProperties, references, value[propertyName]);
    }
  }
  return result;
}
function FromRecord5(schema, references, value) {
  if (Check(schema, references, value))
    return Clone2(value);
  if (value === null || typeof value !== "object" || Array.isArray(value) || value instanceof Date)
    return Create2(schema, references);
  const subschemaPropertyName = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const subschema = schema.patternProperties[subschemaPropertyName];
  const result = {};
  for (const [propKey, propValue] of Object.entries(value)) {
    result[propKey] = Visit8(subschema, references, propValue);
  }
  return result;
}
function FromRef4(schema, references, value) {
  return Visit8(Deref(schema, references), references, value);
}
function FromThis4(schema, references, value) {
  return Visit8(Deref(schema, references), references, value);
}
function FromTuple7(schema, references, value) {
  if (Check(schema, references, value))
    return Clone2(value);
  if (!IsArray(value))
    return Create2(schema, references);
  if (schema.items === undefined)
    return [];
  return schema.items.map((schema2, index) => Visit8(schema2, references, value[index]));
}
function FromUnion9(schema, references, value) {
  return Check(schema, references, value) ? Clone2(value) : CastUnion(schema, references, value);
}
function Visit8(schema, references, value) {
  const references_ = IsString(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray7(schema_, references_, value);
    case "Constructor":
      return FromConstructor5(schema_, references_, value);
    case "Intersect":
      return FromIntersect7(schema_, references_, value);
    case "Never":
      return FromNever5(schema_, references_, value);
    case "Object":
      return FromObject5(schema_, references_, value);
    case "Record":
      return FromRecord5(schema_, references_, value);
    case "Ref":
      return FromRef4(schema_, references_, value);
    case "This":
      return FromThis4(schema_, references_, value);
    case "Tuple":
      return FromTuple7(schema_, references_, value);
    case "Union":
      return FromUnion9(schema_, references_, value);
    case "Date":
    case "Symbol":
    case "Uint8Array":
      return DefaultClone(schema, references, value);
    default:
      return Default(schema_, references_, value);
  }
}
function Cast(...args) {
  return args.length === 3 ? Visit8(args[0], args[1], args[2]) : Visit8(args[0], [], args[1]);
}
// node_modules/@sinclair/typebox/build/esm/value/clean/clean.mjs
function IsCheckable(schema) {
  return IsSchema2(schema) && schema[Kind] !== "Unsafe";
}
function FromArray8(schema, references, value) {
  if (!IsArray(value))
    return value;
  return value.map((value2) => Visit9(schema.items, references, value2));
}
function FromIntersect8(schema, references, value) {
  const unevaluatedProperties = schema.unevaluatedProperties;
  const intersections = schema.allOf.map((schema2) => Visit9(schema2, references, Clone2(value)));
  const composite = intersections.reduce((acc, value2) => IsObject(value2) ? { ...acc, ...value2 } : value2, {});
  if (!IsObject(value) || !IsObject(composite) || !IsSchema2(unevaluatedProperties))
    return composite;
  const knownkeys = KeyOfPropertyKeys(schema);
  for (const key of Object.getOwnPropertyNames(value)) {
    if (knownkeys.includes(key))
      continue;
    if (Check(unevaluatedProperties, references, value[key])) {
      composite[key] = Visit9(unevaluatedProperties, references, value[key]);
    }
  }
  return composite;
}
function FromObject6(schema, references, value) {
  if (!IsObject(value) || IsArray(value))
    return value;
  const additionalProperties = schema.additionalProperties;
  for (const key of Object.getOwnPropertyNames(value)) {
    if (key in schema.properties) {
      value[key] = Visit9(schema.properties[key], references, value[key]);
      continue;
    }
    if (IsSchema2(additionalProperties) && Check(additionalProperties, references, value[key])) {
      value[key] = Visit9(additionalProperties, references, value[key]);
      continue;
    }
    delete value[key];
  }
  return value;
}
function FromRecord6(schema, references, value) {
  if (!IsObject(value))
    return value;
  const additionalProperties = schema.additionalProperties;
  const propertyKeys = Object.getOwnPropertyNames(value);
  const [propertyKey, propertySchema] = Object.entries(schema.patternProperties)[0];
  const propertyKeyTest = new RegExp(propertyKey);
  for (const key of propertyKeys) {
    if (propertyKeyTest.test(key)) {
      value[key] = Visit9(propertySchema, references, value[key]);
      continue;
    }
    if (IsSchema2(additionalProperties) && Check(additionalProperties, references, value[key])) {
      value[key] = Visit9(additionalProperties, references, value[key]);
      continue;
    }
    delete value[key];
  }
  return value;
}
function FromRef5(schema, references, value) {
  return Visit9(Deref(schema, references), references, value);
}
function FromThis5(schema, references, value) {
  return Visit9(Deref(schema, references), references, value);
}
function FromTuple8(schema, references, value) {
  if (!IsArray(value))
    return value;
  if (IsUndefined(schema.items))
    return [];
  const length = Math.min(value.length, schema.items.length);
  for (let i = 0;i < length; i++) {
    value[i] = Visit9(schema.items[i], references, value[i]);
  }
  return value.length > length ? value.slice(0, length) : value;
}
function FromUnion10(schema, references, value) {
  for (const inner of schema.anyOf) {
    if (IsCheckable(inner) && Check(inner, references, value)) {
      return Visit9(inner, references, value);
    }
  }
  return value;
}
function Visit9(schema, references, value) {
  const references_ = IsString(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Array":
      return FromArray8(schema_, references_, value);
    case "Intersect":
      return FromIntersect8(schema_, references_, value);
    case "Object":
      return FromObject6(schema_, references_, value);
    case "Record":
      return FromRecord6(schema_, references_, value);
    case "Ref":
      return FromRef5(schema_, references_, value);
    case "This":
      return FromThis5(schema_, references_, value);
    case "Tuple":
      return FromTuple8(schema_, references_, value);
    case "Union":
      return FromUnion10(schema_, references_, value);
    default:
      return value;
  }
}
function Clean(...args) {
  return args.length === 3 ? Visit9(args[0], args[1], args[2]) : Visit9(args[0], [], args[1]);
}
// node_modules/@sinclair/typebox/build/esm/value/convert/convert.mjs
function IsStringNumeric(value) {
  return IsString(value) && !isNaN(value) && !isNaN(parseFloat(value));
}
function IsValueToString(value) {
  return IsBigInt(value) || IsBoolean(value) || IsNumber(value);
}
function IsValueTrue(value) {
  return value === true || IsNumber(value) && value === 1 || IsBigInt(value) && value === BigInt("1") || IsString(value) && (value.toLowerCase() === "true" || value === "1");
}
function IsValueFalse(value) {
  return value === false || IsNumber(value) && (value === 0 || Object.is(value, -0)) || IsBigInt(value) && value === BigInt("0") || IsString(value) && (value.toLowerCase() === "false" || value === "0" || value === "-0");
}
function IsTimeStringWithTimeZone(value) {
  return IsString(value) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test(value);
}
function IsTimeStringWithoutTimeZone(value) {
  return IsString(value) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test(value);
}
function IsDateTimeStringWithTimeZone(value) {
  return IsString(value) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test(value);
}
function IsDateTimeStringWithoutTimeZone(value) {
  return IsString(value) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test(value);
}
function IsDateString(value) {
  return IsString(value) && /^\d\d\d\d-[0-1]\d-[0-3]\d$/i.test(value);
}
function TryConvertLiteralString(value, target) {
  const conversion = TryConvertString(value);
  return conversion === target ? conversion : value;
}
function TryConvertLiteralNumber(value, target) {
  const conversion = TryConvertNumber(value);
  return conversion === target ? conversion : value;
}
function TryConvertLiteralBoolean(value, target) {
  const conversion = TryConvertBoolean(value);
  return conversion === target ? conversion : value;
}
function TryConvertLiteral(schema, value) {
  return IsString(schema.const) ? TryConvertLiteralString(value, schema.const) : IsNumber(schema.const) ? TryConvertLiteralNumber(value, schema.const) : IsBoolean(schema.const) ? TryConvertLiteralBoolean(value, schema.const) : Clone2(value);
}
function TryConvertBoolean(value) {
  return IsValueTrue(value) ? true : IsValueFalse(value) ? false : value;
}
function TryConvertBigInt(value) {
  return IsStringNumeric(value) ? BigInt(parseInt(value)) : IsNumber(value) ? BigInt(value | 0) : IsValueFalse(value) ? BigInt(0) : IsValueTrue(value) ? BigInt(1) : value;
}
function TryConvertString(value) {
  return IsValueToString(value) ? value.toString() : IsSymbol(value) && value.description !== undefined ? value.description.toString() : value;
}
function TryConvertNumber(value) {
  return IsStringNumeric(value) ? parseFloat(value) : IsValueTrue(value) ? 1 : IsValueFalse(value) ? 0 : value;
}
function TryConvertInteger(value) {
  return IsStringNumeric(value) ? parseInt(value) : IsNumber(value) ? value | 0 : IsValueTrue(value) ? 1 : IsValueFalse(value) ? 0 : value;
}
function TryConvertNull(value) {
  return IsString(value) && value.toLowerCase() === "null" ? null : value;
}
function TryConvertUndefined(value) {
  return IsString(value) && value === "undefined" ? undefined : value;
}
function TryConvertDate(value) {
  return IsDate(value) ? value : IsNumber(value) ? new Date(value) : IsValueTrue(value) ? new Date(1) : IsValueFalse(value) ? new Date(0) : IsStringNumeric(value) ? new Date(parseInt(value)) : IsTimeStringWithoutTimeZone(value) ? new Date(`1970-01-01T${value}.000Z`) : IsTimeStringWithTimeZone(value) ? new Date(`1970-01-01T${value}`) : IsDateTimeStringWithoutTimeZone(value) ? new Date(`${value}.000Z`) : IsDateTimeStringWithTimeZone(value) ? new Date(value) : IsDateString(value) ? new Date(`${value}T00:00:00.000Z`) : value;
}
function Default2(value) {
  return value;
}
function FromArray9(schema, references, value) {
  const elements = IsArray(value) ? value : [value];
  return elements.map((element) => Visit10(schema.items, references, element));
}
function FromBigInt5(schema, references, value) {
  return TryConvertBigInt(value);
}
function FromBoolean5(schema, references, value) {
  return TryConvertBoolean(value);
}
function FromDate5(schema, references, value) {
  return TryConvertDate(value);
}
function FromInteger5(schema, references, value) {
  return TryConvertInteger(value);
}
function FromIntersect9(schema, references, value) {
  return schema.allOf.reduce((value2, schema2) => Visit10(schema2, references, value2), value);
}
function FromLiteral6(schema, references, value) {
  return TryConvertLiteral(schema, value);
}
function FromNull5(schema, references, value) {
  return TryConvertNull(value);
}
function FromNumber5(schema, references, value) {
  return TryConvertNumber(value);
}
function FromObject7(schema, references, value) {
  const isConvertable = IsObject(value);
  if (!isConvertable)
    return value;
  const result = {};
  for (const key of Object.keys(value)) {
    result[key] = HasPropertyKey(schema.properties, key) ? Visit10(schema.properties[key], references, value[key]) : value[key];
  }
  return result;
}
function FromRecord7(schema, references, value) {
  const propertyKey = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const property = schema.patternProperties[propertyKey];
  const result = {};
  for (const [propKey, propValue] of Object.entries(value)) {
    result[propKey] = Visit10(property, references, propValue);
  }
  return result;
}
function FromRef6(schema, references, value) {
  return Visit10(Deref(schema, references), references, value);
}
function FromString5(schema, references, value) {
  return TryConvertString(value);
}
function FromSymbol5(schema, references, value) {
  return IsString(value) || IsNumber(value) ? Symbol(value) : value;
}
function FromThis6(schema, references, value) {
  return Visit10(Deref(schema, references), references, value);
}
function FromTuple9(schema, references, value) {
  const isConvertable = IsArray(value) && !IsUndefined(schema.items);
  if (!isConvertable)
    return value;
  return value.map((value2, index) => {
    return index < schema.items.length ? Visit10(schema.items[index], references, value2) : value2;
  });
}
function FromUndefined5(schema, references, value) {
  return TryConvertUndefined(value);
}
function FromUnion11(schema, references, value) {
  for (const subschema of schema.anyOf) {
    const converted = Visit10(subschema, references, value);
    if (!Check(subschema, references, converted))
      continue;
    return converted;
  }
  return value;
}
function Visit10(schema, references, value) {
  const references_ = IsString(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray9(schema_, references_, value);
    case "BigInt":
      return FromBigInt5(schema_, references_, value);
    case "Boolean":
      return FromBoolean5(schema_, references_, value);
    case "Date":
      return FromDate5(schema_, references_, value);
    case "Integer":
      return FromInteger5(schema_, references_, value);
    case "Intersect":
      return FromIntersect9(schema_, references_, value);
    case "Literal":
      return FromLiteral6(schema_, references_, value);
    case "Null":
      return FromNull5(schema_, references_, value);
    case "Number":
      return FromNumber5(schema_, references_, value);
    case "Object":
      return FromObject7(schema_, references_, value);
    case "Record":
      return FromRecord7(schema_, references_, value);
    case "Ref":
      return FromRef6(schema_, references_, value);
    case "String":
      return FromString5(schema_, references_, value);
    case "Symbol":
      return FromSymbol5(schema_, references_, value);
    case "This":
      return FromThis6(schema_, references_, value);
    case "Tuple":
      return FromTuple9(schema_, references_, value);
    case "Undefined":
      return FromUndefined5(schema_, references_, value);
    case "Union":
      return FromUnion11(schema_, references_, value);
    default:
      return Default2(value);
  }
}
function Convert(...args) {
  return args.length === 3 ? Visit10(args[0], args[1], args[2]) : Visit10(args[0], [], args[1]);
}
// node_modules/@sinclair/typebox/build/esm/value/default/default.mjs
function ValueOrDefault(schema, value) {
  return value === undefined && "default" in schema ? Clone2(schema.default) : value;
}
function IsCheckable2(schema) {
  return IsSchema2(schema) && schema[Kind] !== "Unsafe";
}
function IsDefaultSchema(value) {
  return IsSchema2(value) && "default" in value;
}
function FromArray10(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  if (!IsArray(defaulted))
    return defaulted;
  for (let i = 0;i < defaulted.length; i++) {
    defaulted[i] = Visit11(schema.items, references, defaulted[i]);
  }
  return defaulted;
}
function FromIntersect10(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  return schema.allOf.reduce((acc, schema2) => {
    const next = Visit11(schema2, references, defaulted);
    return IsObject(next) ? { ...acc, ...next } : next;
  }, {});
}
function FromObject8(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  if (!IsObject(defaulted))
    return defaulted;
  const additionalPropertiesSchema = schema.additionalProperties;
  const knownPropertyKeys = Object.getOwnPropertyNames(schema.properties);
  for (const key of knownPropertyKeys) {
    if (!IsDefaultSchema(schema.properties[key]))
      continue;
    defaulted[key] = Visit11(schema.properties[key], references, defaulted[key]);
  }
  if (!IsDefaultSchema(additionalPropertiesSchema))
    return defaulted;
  for (const key of Object.getOwnPropertyNames(defaulted)) {
    if (knownPropertyKeys.includes(key))
      continue;
    defaulted[key] = Visit11(additionalPropertiesSchema, references, defaulted[key]);
  }
  return defaulted;
}
function FromRecord8(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  if (!IsObject(defaulted))
    return defaulted;
  const additionalPropertiesSchema = schema.additionalProperties;
  const [propertyKeyPattern, propertySchema] = Object.entries(schema.patternProperties)[0];
  const knownPropertyKey = new RegExp(propertyKeyPattern);
  for (const key of Object.getOwnPropertyNames(defaulted)) {
    if (!(knownPropertyKey.test(key) && IsDefaultSchema(propertySchema)))
      continue;
    defaulted[key] = Visit11(propertySchema, references, defaulted[key]);
  }
  if (!IsDefaultSchema(additionalPropertiesSchema))
    return defaulted;
  for (const key of Object.getOwnPropertyNames(defaulted)) {
    if (knownPropertyKey.test(key))
      continue;
    defaulted[key] = Visit11(additionalPropertiesSchema, references, defaulted[key]);
  }
  return defaulted;
}
function FromRef7(schema, references, value) {
  return Visit11(Deref(schema, references), references, ValueOrDefault(schema, value));
}
function FromThis7(schema, references, value) {
  return Visit11(Deref(schema, references), references, value);
}
function FromTuple10(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  if (!IsArray(defaulted) || IsUndefined(schema.items))
    return defaulted;
  const [items, max] = [schema.items, Math.max(schema.items.length, defaulted.length)];
  for (let i = 0;i < max; i++) {
    if (i < items.length)
      defaulted[i] = Visit11(items[i], references, defaulted[i]);
  }
  return defaulted;
}
function FromUnion12(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  for (const inner of schema.anyOf) {
    const result = Visit11(inner, references, defaulted);
    if (IsCheckable2(inner) && Check(inner, result)) {
      return result;
    }
  }
  return defaulted;
}
function Visit11(schema, references, value) {
  const references_ = IsString(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Array":
      return FromArray10(schema_, references_, value);
    case "Intersect":
      return FromIntersect10(schema_, references_, value);
    case "Object":
      return FromObject8(schema_, references_, value);
    case "Record":
      return FromRecord8(schema_, references_, value);
    case "Ref":
      return FromRef7(schema_, references_, value);
    case "This":
      return FromThis7(schema_, references_, value);
    case "Tuple":
      return FromTuple10(schema_, references_, value);
    case "Union":
      return FromUnion12(schema_, references_, value);
    default:
      return ValueOrDefault(schema_, value);
  }
}
function Default3(...args) {
  return args.length === 3 ? Visit11(args[0], args[1], args[2]) : Visit11(args[0], [], args[1]);
}
// node_modules/@sinclair/typebox/build/esm/value/pointer/pointer.mjs
var exports_pointer = {};
__export(exports_pointer, {
  ValuePointerRootSetError: () => ValuePointerRootSetError,
  ValuePointerRootDeleteError: () => ValuePointerRootDeleteError,
  Set: () => Set4,
  Has: () => Has3,
  Get: () => Get3,
  Format: () => Format,
  Delete: () => Delete3
});
class ValuePointerRootSetError extends TypeBoxError {
  constructor(value, path, update) {
    super("Cannot set root value");
    this.value = value;
    this.path = path;
    this.update = update;
  }
}

class ValuePointerRootDeleteError extends TypeBoxError {
  constructor(value, path) {
    super("Cannot delete root value");
    this.value = value;
    this.path = path;
  }
}
function Escape2(component) {
  return component.indexOf("~") === -1 ? component : component.replace(/~1/g, "/").replace(/~0/g, "~");
}
function* Format(pointer) {
  if (pointer === "")
    return;
  let [start, end] = [0, 0];
  for (let i = 0;i < pointer.length; i++) {
    const char = pointer.charAt(i);
    if (char === "/") {
      if (i === 0) {
        start = i + 1;
      } else {
        end = i;
        yield Escape2(pointer.slice(start, end));
        start = i + 1;
      }
    } else {
      end = i;
    }
  }
  yield Escape2(pointer.slice(start));
}
function Set4(value, pointer, update) {
  if (pointer === "")
    throw new ValuePointerRootSetError(value, pointer, update);
  let [owner, next, key] = [null, value, ""];
  for (const component of Format(pointer)) {
    if (next[component] === undefined)
      next[component] = {};
    owner = next;
    next = next[component];
    key = component;
  }
  owner[key] = update;
}
function Delete3(value, pointer) {
  if (pointer === "")
    throw new ValuePointerRootDeleteError(value, pointer);
  let [owner, next, key] = [null, value, ""];
  for (const component of Format(pointer)) {
    if (next[component] === undefined || next[component] === null)
      return;
    owner = next;
    next = next[component];
    key = component;
  }
  if (Array.isArray(owner)) {
    const index = parseInt(key);
    owner.splice(index, 1);
  } else {
    delete owner[key];
  }
}
function Has3(value, pointer) {
  if (pointer === "")
    return true;
  let [owner, next, key] = [null, value, ""];
  for (const component of Format(pointer)) {
    if (next[component] === undefined)
      return false;
    owner = next;
    next = next[component];
    key = component;
  }
  return Object.getOwnPropertyNames(owner).includes(key);
}
function Get3(value, pointer) {
  if (pointer === "")
    return value;
  let current = value;
  for (const component of Format(pointer)) {
    if (current[component] === undefined)
      return;
    current = current[component];
  }
  return current;
}
// node_modules/@sinclair/typebox/build/esm/value/delta/delta.mjs
var Insert = Object2({
  type: Literal("insert"),
  path: String2(),
  value: Unknown()
});
var Update = Object2({
  type: Literal("update"),
  path: String2(),
  value: Unknown()
});
var Delete4 = Object2({
  type: Literal("delete"),
  path: String2()
});
var Edit = Union([Insert, Update, Delete4]);

class ValueDeltaError extends TypeBoxError {
  constructor(value, message) {
    super(message);
    this.value = value;
  }
}

class ValueDeltaSymbolError extends ValueDeltaError {
  constructor(value) {
    super(value, "Cannot diff objects with symbol keys");
    this.value = value;
  }
}
function CreateUpdate(path, value) {
  return { type: "update", path, value };
}
function CreateInsert(path, value) {
  return { type: "insert", path, value };
}
function CreateDelete(path) {
  return { type: "delete", path };
}
function* ObjectType4(path, current, next) {
  if (!IsStandardObject(next))
    return yield CreateUpdate(path, next);
  const currentKeys = [...globalThis.Object.keys(current), ...globalThis.Object.getOwnPropertySymbols(current)];
  const nextKeys = [...globalThis.Object.keys(next), ...globalThis.Object.getOwnPropertySymbols(next)];
  for (const key of currentKeys) {
    if (IsSymbol(key))
      throw new ValueDeltaSymbolError(key);
    if (IsUndefined(next[key]) && nextKeys.includes(key))
      yield CreateUpdate(`${path}/${globalThis.String(key)}`, undefined);
  }
  for (const key of nextKeys) {
    if (IsUndefined(current[key]) || IsUndefined(next[key]))
      continue;
    if (IsSymbol(key))
      throw new ValueDeltaSymbolError(key);
    yield* Visit12(`${path}/${globalThis.String(key)}`, current[key], next[key]);
  }
  for (const key of nextKeys) {
    if (IsSymbol(key))
      throw new ValueDeltaSymbolError(key);
    if (IsUndefined(current[key]))
      yield CreateInsert(`${path}/${globalThis.String(key)}`, next[key]);
  }
  for (const key of currentKeys.reverse()) {
    if (IsSymbol(key))
      throw new ValueDeltaSymbolError(key);
    if (IsUndefined(next[key]) && !nextKeys.includes(key))
      yield CreateDelete(`${path}/${globalThis.String(key)}`);
  }
}
function* ArrayType4(path, current, next) {
  if (!IsArray(next))
    return yield CreateUpdate(path, next);
  for (let i = 0;i < Math.min(current.length, next.length); i++) {
    yield* Visit12(`${path}/${i}`, current[i], next[i]);
  }
  for (let i = 0;i < next.length; i++) {
    if (i < current.length)
      continue;
    yield CreateInsert(`${path}/${i}`, next[i]);
  }
  for (let i = current.length - 1;i >= 0; i--) {
    if (i < next.length)
      continue;
    yield CreateDelete(`${path}/${i}`);
  }
}
function* TypedArrayType2(path, current, next) {
  if (!IsTypedArray(next) || current.length !== next.length || globalThis.Object.getPrototypeOf(current).constructor.name !== globalThis.Object.getPrototypeOf(next).constructor.name)
    return yield CreateUpdate(path, next);
  for (let i = 0;i < Math.min(current.length, next.length); i++) {
    yield* Visit12(`${path}/${i}`, current[i], next[i]);
  }
}
function* ValueType2(path, current, next) {
  if (current === next)
    return;
  yield CreateUpdate(path, next);
}
function* Visit12(path, current, next) {
  if (IsStandardObject(current))
    return yield* ObjectType4(path, current, next);
  if (IsArray(current))
    return yield* ArrayType4(path, current, next);
  if (IsTypedArray(current))
    return yield* TypedArrayType2(path, current, next);
  if (IsValueType(current))
    return yield* ValueType2(path, current, next);
  throw new ValueDeltaError(current, "Unable to create diff edits for unknown value");
}
function Diff(current, next) {
  return [...Visit12("", current, next)];
}
function IsRootUpdate(edits) {
  return edits.length > 0 && edits[0].path === "" && edits[0].type === "update";
}
function IsIdentity(edits) {
  return edits.length === 0;
}
function Patch(current, edits) {
  if (IsRootUpdate(edits)) {
    return Clone2(edits[0].value);
  }
  if (IsIdentity(edits)) {
    return Clone2(current);
  }
  const clone2 = Clone2(current);
  for (const edit of edits) {
    switch (edit.type) {
      case "insert": {
        exports_pointer.Set(clone2, edit.path, edit.value);
        break;
      }
      case "update": {
        exports_pointer.Set(clone2, edit.path, edit.value);
        break;
      }
      case "delete": {
        exports_pointer.Delete(clone2, edit.path);
        break;
      }
    }
  }
  return clone2;
}
// node_modules/@sinclair/typebox/build/esm/value/equal/equal.mjs
function ObjectType5(left, right) {
  if (!IsStandardObject(right))
    return false;
  const leftKeys = [...Object.keys(left), ...Object.getOwnPropertySymbols(left)];
  const rightKeys = [...Object.keys(right), ...Object.getOwnPropertySymbols(right)];
  if (leftKeys.length !== rightKeys.length)
    return false;
  return leftKeys.every((key) => Equal(left[key], right[key]));
}
function DateType4(left, right) {
  return IsDate(right) && left.getTime() === right.getTime();
}
function ArrayType5(left, right) {
  if (!IsArray(right) || left.length !== right.length)
    return false;
  return left.every((value, index) => Equal(value, right[index]));
}
function TypedArrayType3(left, right) {
  if (!IsTypedArray(right) || left.length !== right.length || Object.getPrototypeOf(left).constructor.name !== Object.getPrototypeOf(right).constructor.name)
    return false;
  return left.every((value, index) => Equal(value, right[index]));
}
function ValueType3(left, right) {
  return left === right;
}
function Equal(left, right) {
  if (IsStandardObject(left))
    return ObjectType5(left, right);
  if (IsDate(left))
    return DateType4(left, right);
  if (IsTypedArray(left))
    return TypedArrayType3(left, right);
  if (IsArray(left))
    return ArrayType5(left, right);
  if (IsValueType(left))
    return ValueType3(left, right);
  throw new Error("ValueEquals: Unable to compare value");
}
// node_modules/@sinclair/typebox/build/esm/value/mutate/mutate.mjs
class ValueMutateError extends TypeBoxError {
  constructor(message) {
    super(message);
  }
}
function ObjectType6(root, path, current, next) {
  if (!IsStandardObject(current)) {
    exports_pointer.Set(root, path, Clone2(next));
  } else {
    const currentKeys = Object.getOwnPropertyNames(current);
    const nextKeys = Object.getOwnPropertyNames(next);
    for (const currentKey of currentKeys) {
      if (!nextKeys.includes(currentKey)) {
        delete current[currentKey];
      }
    }
    for (const nextKey of nextKeys) {
      if (!currentKeys.includes(nextKey)) {
        current[nextKey] = null;
      }
    }
    for (const nextKey of nextKeys) {
      Visit13(root, `${path}/${nextKey}`, current[nextKey], next[nextKey]);
    }
  }
}
function ArrayType6(root, path, current, next) {
  if (!IsArray(current)) {
    exports_pointer.Set(root, path, Clone2(next));
  } else {
    for (let index = 0;index < next.length; index++) {
      Visit13(root, `${path}/${index}`, current[index], next[index]);
    }
    current.splice(next.length);
  }
}
function TypedArrayType4(root, path, current, next) {
  if (IsTypedArray(current) && current.length === next.length) {
    for (let i = 0;i < current.length; i++) {
      current[i] = next[i];
    }
  } else {
    exports_pointer.Set(root, path, Clone2(next));
  }
}
function ValueType4(root, path, current, next) {
  if (current === next)
    return;
  exports_pointer.Set(root, path, next);
}
function Visit13(root, path, current, next) {
  if (IsArray(next))
    return ArrayType6(root, path, current, next);
  if (IsTypedArray(next))
    return TypedArrayType4(root, path, current, next);
  if (IsStandardObject(next))
    return ObjectType6(root, path, current, next);
  if (IsValueType(next))
    return ValueType4(root, path, current, next);
}
function IsNonMutableValue(value) {
  return IsTypedArray(value) || IsValueType(value);
}
function IsMismatchedValue(current, next) {
  return IsStandardObject(current) && IsArray(next) || IsArray(current) && IsStandardObject(next);
}
function Mutate(current, next) {
  if (IsNonMutableValue(current) || IsNonMutableValue(next))
    throw new ValueMutateError("Only object and array types can be mutated at the root level");
  if (IsMismatchedValue(current, next))
    throw new ValueMutateError("Cannot assign due type mismatch of assignable values");
  Visit13(current, "", current, next);
}
// node_modules/@sinclair/typebox/build/esm/value/transform/decode.mjs
class TransformDecodeCheckError extends TypeBoxError {
  constructor(schema, value, error2) {
    super(`Unable to decode value as it does not match the expected schema`);
    this.schema = schema;
    this.value = value;
    this.error = error2;
  }
}

class TransformDecodeError extends TypeBoxError {
  constructor(schema, path, value, error2) {
    super(error2 instanceof Error ? error2.message : "Unknown error");
    this.schema = schema;
    this.path = path;
    this.value = value;
    this.error = error2;
  }
}
function Default4(schema, path, value) {
  try {
    return IsTransform2(schema) ? schema[TransformKind].Decode(value) : value;
  } catch (error2) {
    throw new TransformDecodeError(schema, path, value, error2);
  }
}
function FromArray11(schema, references, path, value) {
  return IsArray(value) ? Default4(schema, path, value.map((value2, index) => Visit14(schema.items, references, `${path}/${index}`, value2))) : Default4(schema, path, value);
}
function FromIntersect11(schema, references, path, value) {
  if (!IsStandardObject(value) || IsValueType(value))
    return Default4(schema, path, value);
  const knownEntries = KeyOfPropertyEntries(schema);
  const knownKeys = knownEntries.map((entry) => entry[0]);
  const knownProperties = { ...value };
  for (const [knownKey, knownSchema] of knownEntries)
    if (knownKey in knownProperties) {
      knownProperties[knownKey] = Visit14(knownSchema, references, `${path}/${knownKey}`, knownProperties[knownKey]);
    }
  if (!IsTransform2(schema.unevaluatedProperties)) {
    return Default4(schema, path, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const unevaluatedProperties = schema.unevaluatedProperties;
  const unknownProperties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      unknownProperties[key] = Default4(unevaluatedProperties, `${path}/${key}`, unknownProperties[key]);
    }
  return Default4(schema, path, unknownProperties);
}
function FromNot5(schema, references, path, value) {
  return Default4(schema, path, Visit14(schema.not, references, path, value));
}
function FromObject9(schema, references, path, value) {
  if (!IsStandardObject(value))
    return Default4(schema, path, value);
  const knownKeys = KeyOfPropertyKeys(schema);
  const knownProperties = { ...value };
  for (const key of knownKeys)
    if (key in knownProperties) {
      knownProperties[key] = Visit14(schema.properties[key], references, `${path}/${key}`, knownProperties[key]);
    }
  if (!IsSchema2(schema.additionalProperties)) {
    return Default4(schema, path, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const unknownProperties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      unknownProperties[key] = Default4(additionalProperties, `${path}/${key}`, unknownProperties[key]);
    }
  return Default4(schema, path, unknownProperties);
}
function FromRecord9(schema, references, path, value) {
  if (!IsStandardObject(value))
    return Default4(schema, path, value);
  const pattern2 = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const knownKeys = new RegExp(pattern2);
  const knownProperties = { ...value };
  for (const key of Object.getOwnPropertyNames(value))
    if (knownKeys.test(key)) {
      knownProperties[key] = Visit14(schema.patternProperties[pattern2], references, `${path}/${key}`, knownProperties[key]);
    }
  if (!IsSchema2(schema.additionalProperties)) {
    return Default4(schema, path, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const unknownProperties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.test(key)) {
      unknownProperties[key] = Default4(additionalProperties, `${path}/${key}`, unknownProperties[key]);
    }
  return Default4(schema, path, unknownProperties);
}
function FromRef8(schema, references, path, value) {
  const target = Deref(schema, references);
  return Default4(schema, path, Visit14(target, references, path, value));
}
function FromThis8(schema, references, path, value) {
  const target = Deref(schema, references);
  return Default4(schema, path, Visit14(target, references, path, value));
}
function FromTuple11(schema, references, path, value) {
  return IsArray(value) && IsArray(schema.items) ? Default4(schema, path, schema.items.map((schema2, index) => Visit14(schema2, references, `${path}/${index}`, value[index]))) : Default4(schema, path, value);
}
function FromUnion13(schema, references, path, value) {
  for (const subschema of schema.anyOf) {
    if (!Check(subschema, references, value))
      continue;
    const decoded = Visit14(subschema, references, path, value);
    return Default4(schema, path, decoded);
  }
  return Default4(schema, path, value);
}
function Visit14(schema, references, path, value) {
  const references_ = typeof schema.$id === "string" ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray11(schema_, references_, path, value);
    case "Intersect":
      return FromIntersect11(schema_, references_, path, value);
    case "Not":
      return FromNot5(schema_, references_, path, value);
    case "Object":
      return FromObject9(schema_, references_, path, value);
    case "Record":
      return FromRecord9(schema_, references_, path, value);
    case "Ref":
      return FromRef8(schema_, references_, path, value);
    case "Symbol":
      return Default4(schema_, path, value);
    case "This":
      return FromThis8(schema_, references_, path, value);
    case "Tuple":
      return FromTuple11(schema_, references_, path, value);
    case "Union":
      return FromUnion13(schema_, references_, path, value);
    default:
      return Default4(schema_, path, value);
  }
}
function TransformDecode(schema, references, value) {
  return Visit14(schema, references, "", value);
}
// node_modules/@sinclair/typebox/build/esm/value/transform/encode.mjs
class TransformEncodeCheckError extends TypeBoxError {
  constructor(schema, value, error2) {
    super(`The encoded value does not match the expected schema`);
    this.schema = schema;
    this.value = value;
    this.error = error2;
  }
}

class TransformEncodeError extends TypeBoxError {
  constructor(schema, path, value, error2) {
    super(`${error2 instanceof Error ? error2.message : "Unknown error"}`);
    this.schema = schema;
    this.path = path;
    this.value = value;
    this.error = error2;
  }
}
function Default5(schema, path, value) {
  try {
    return IsTransform2(schema) ? schema[TransformKind].Encode(value) : value;
  } catch (error2) {
    throw new TransformEncodeError(schema, path, value, error2);
  }
}
function FromArray12(schema, references, path, value) {
  const defaulted = Default5(schema, path, value);
  return IsArray(defaulted) ? defaulted.map((value2, index) => Visit15(schema.items, references, `${path}/${index}`, value2)) : defaulted;
}
function FromIntersect12(schema, references, path, value) {
  const defaulted = Default5(schema, path, value);
  if (!IsStandardObject(value) || IsValueType(value))
    return defaulted;
  const knownEntries = KeyOfPropertyEntries(schema);
  const knownKeys = knownEntries.map((entry) => entry[0]);
  const knownProperties = { ...defaulted };
  for (const [knownKey, knownSchema] of knownEntries)
    if (knownKey in knownProperties) {
      knownProperties[knownKey] = Visit15(knownSchema, references, `${path}/${knownKey}`, knownProperties[knownKey]);
    }
  if (!IsTransform2(schema.unevaluatedProperties)) {
    return Default5(schema, path, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const unevaluatedProperties = schema.unevaluatedProperties;
  const properties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      properties[key] = Default5(unevaluatedProperties, `${path}/${key}`, properties[key]);
    }
  return properties;
}
function FromNot6(schema, references, path, value) {
  return Default5(schema.not, path, Default5(schema, path, value));
}
function FromObject10(schema, references, path, value) {
  const defaulted = Default5(schema, path, value);
  if (!IsStandardObject(defaulted))
    return defaulted;
  const knownKeys = KeyOfPropertyKeys(schema);
  const knownProperties = { ...defaulted };
  for (const key of knownKeys)
    if (key in knownProperties) {
      knownProperties[key] = Visit15(schema.properties[key], references, `${path}/${key}`, knownProperties[key]);
    }
  if (!IsSchema2(schema.additionalProperties)) {
    return knownProperties;
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const properties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      properties[key] = Default5(additionalProperties, `${path}/${key}`, properties[key]);
    }
  return properties;
}
function FromRecord10(schema, references, path, value) {
  const defaulted = Default5(schema, path, value);
  if (!IsStandardObject(value))
    return defaulted;
  const pattern2 = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const knownKeys = new RegExp(pattern2);
  const knownProperties = { ...defaulted };
  for (const key of Object.getOwnPropertyNames(value))
    if (knownKeys.test(key)) {
      knownProperties[key] = Visit15(schema.patternProperties[pattern2], references, `${path}/${key}`, knownProperties[key]);
    }
  if (!IsSchema2(schema.additionalProperties)) {
    return Default5(schema, path, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const properties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.test(key)) {
      properties[key] = Default5(additionalProperties, `${path}/${key}`, properties[key]);
    }
  return properties;
}
function FromRef9(schema, references, path, value) {
  const target = Deref(schema, references);
  const resolved = Visit15(target, references, path, value);
  return Default5(schema, path, resolved);
}
function FromThis9(schema, references, path, value) {
  const target = Deref(schema, references);
  const resolved = Visit15(target, references, path, value);
  return Default5(schema, path, resolved);
}
function FromTuple12(schema, references, path, value) {
  const value1 = Default5(schema, path, value);
  return IsArray(schema.items) ? schema.items.map((schema2, index) => Visit15(schema2, references, `${path}/${index}`, value1[index])) : [];
}
function FromUnion14(schema, references, path, value) {
  for (const subschema of schema.anyOf) {
    if (!Check(subschema, references, value))
      continue;
    const value1 = Visit15(subschema, references, path, value);
    return Default5(schema, path, value1);
  }
  for (const subschema of schema.anyOf) {
    const value1 = Visit15(subschema, references, path, value);
    if (!Check(schema, references, value1))
      continue;
    return Default5(schema, path, value1);
  }
  return Default5(schema, path, value);
}
function Visit15(schema, references, path, value) {
  const references_ = typeof schema.$id === "string" ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray12(schema_, references_, path, value);
    case "Intersect":
      return FromIntersect12(schema_, references_, path, value);
    case "Not":
      return FromNot6(schema_, references_, path, value);
    case "Object":
      return FromObject10(schema_, references_, path, value);
    case "Record":
      return FromRecord10(schema_, references_, path, value);
    case "Ref":
      return FromRef9(schema_, references_, path, value);
    case "This":
      return FromThis9(schema_, references_, path, value);
    case "Tuple":
      return FromTuple12(schema_, references_, path, value);
    case "Union":
      return FromUnion14(schema_, references_, path, value);
    default:
      return Default5(schema_, path, value);
  }
}
function TransformEncode(schema, references, value) {
  return Visit15(schema, references, "", value);
}
// node_modules/@sinclair/typebox/build/esm/value/transform/has.mjs
function FromArray13(schema, references) {
  return IsTransform2(schema) || Visit16(schema.items, references);
}
function FromAsyncIterator5(schema, references) {
  return IsTransform2(schema) || Visit16(schema.items, references);
}
function FromConstructor6(schema, references) {
  return IsTransform2(schema) || Visit16(schema.returns, references) || schema.parameters.some((schema2) => Visit16(schema2, references));
}
function FromFunction5(schema, references) {
  return IsTransform2(schema) || Visit16(schema.returns, references) || schema.parameters.some((schema2) => Visit16(schema2, references));
}
function FromIntersect13(schema, references) {
  return IsTransform2(schema) || IsTransform2(schema.unevaluatedProperties) || schema.allOf.some((schema2) => Visit16(schema2, references));
}
function FromIterator5(schema, references) {
  return IsTransform2(schema) || Visit16(schema.items, references);
}
function FromNot7(schema, references) {
  return IsTransform2(schema) || Visit16(schema.not, references);
}
function FromObject11(schema, references) {
  return IsTransform2(schema) || Object.values(schema.properties).some((schema2) => Visit16(schema2, references)) || IsSchema2(schema.additionalProperties) && Visit16(schema.additionalProperties, references);
}
function FromPromise5(schema, references) {
  return IsTransform2(schema) || Visit16(schema.item, references);
}
function FromRecord11(schema, references) {
  const pattern2 = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const property = schema.patternProperties[pattern2];
  return IsTransform2(schema) || Visit16(property, references) || IsSchema2(schema.additionalProperties) && IsTransform2(schema.additionalProperties);
}
function FromRef10(schema, references) {
  if (IsTransform2(schema))
    return true;
  return Visit16(Deref(schema, references), references);
}
function FromThis10(schema, references) {
  if (IsTransform2(schema))
    return true;
  return Visit16(Deref(schema, references), references);
}
function FromTuple13(schema, references) {
  return IsTransform2(schema) || !IsUndefined(schema.items) && schema.items.some((schema2) => Visit16(schema2, references));
}
function FromUnion15(schema, references) {
  return IsTransform2(schema) || schema.anyOf.some((schema2) => Visit16(schema2, references));
}
function Visit16(schema, references) {
  const references_ = IsString(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  if (schema.$id && visited.has(schema.$id))
    return false;
  if (schema.$id)
    visited.add(schema.$id);
  switch (schema[Kind]) {
    case "Array":
      return FromArray13(schema_, references_);
    case "AsyncIterator":
      return FromAsyncIterator5(schema_, references_);
    case "Constructor":
      return FromConstructor6(schema_, references_);
    case "Function":
      return FromFunction5(schema_, references_);
    case "Intersect":
      return FromIntersect13(schema_, references_);
    case "Iterator":
      return FromIterator5(schema_, references_);
    case "Not":
      return FromNot7(schema_, references_);
    case "Object":
      return FromObject11(schema_, references_);
    case "Promise":
      return FromPromise5(schema_, references_);
    case "Record":
      return FromRecord11(schema_, references_);
    case "Ref":
      return FromRef10(schema_, references_);
    case "This":
      return FromThis10(schema_, references_);
    case "Tuple":
      return FromTuple13(schema_, references_);
    case "Union":
      return FromUnion15(schema_, references_);
    default:
      return IsTransform2(schema);
  }
}
var visited = new Set;
function HasTransform(schema, references) {
  visited.clear();
  return Visit16(schema, references);
}
// node_modules/@sinclair/typebox/build/esm/value/value/value.mjs
var exports_value2 = {};
__export(exports_value2, {
  Patch: () => Patch2,
  Mutate: () => Mutate2,
  Hash: () => Hash2,
  Errors: () => Errors2,
  Equal: () => Equal2,
  Encode: () => Encode,
  Diff: () => Diff2,
  Default: () => Default6,
  Decode: () => Decode,
  Create: () => Create3,
  Convert: () => Convert2,
  Clone: () => Clone3,
  Clean: () => Clean2,
  Check: () => Check2,
  Cast: () => Cast2
});
function Cast2(...args) {
  return Cast.apply(Cast, args);
}
function Create3(...args) {
  return Create2.apply(Create2, args);
}
function Check2(...args) {
  return Check.apply(Check, args);
}
function Clean2(...args) {
  return Clean.apply(Clean, args);
}
function Convert2(...args) {
  return Convert.apply(Convert, args);
}
function Clone3(value) {
  return Clone2(value);
}
function Decode(...args) {
  const [schema, references, value] = args.length === 3 ? [args[0], args[1], args[2]] : [args[0], [], args[1]];
  if (!Check2(schema, references, value))
    throw new TransformDecodeCheckError(schema, value, Errors2(schema, references, value).First());
  return HasTransform(schema, references) ? TransformDecode(schema, references, value) : value;
}
function Default6(...args) {
  return Default3.apply(Default3, args);
}
function Encode(...args) {
  const [schema, references, value] = args.length === 3 ? [args[0], args[1], args[2]] : [args[0], [], args[1]];
  const encoded = HasTransform(schema, references) ? TransformEncode(schema, references, value) : value;
  if (!Check2(schema, references, encoded))
    throw new TransformEncodeCheckError(schema, encoded, Errors2(schema, references, encoded).First());
  return encoded;
}
function Errors2(...args) {
  return Errors.apply(Errors, args);
}
function Equal2(left, right) {
  return Equal(left, right);
}
function Diff2(current, next) {
  return Diff(current, next);
}
function Hash2(value) {
  return Hash(value);
}
function Patch2(current, edits) {
  return Patch(current, edits);
}
function Mutate2(current, next) {
  Mutate(current, next);
}
// node_modules/@sinclair/typebox/build/esm/type/awaited/awaited.mjs
function FromRest4(T) {
  return T.map((L) => AwaitedResolve(L));
}
function FromIntersect14(T) {
  return Intersect(FromRest4(T));
}
function FromUnion16(T) {
  return Union(FromRest4(T));
}
function FromPromise6(T) {
  return AwaitedResolve(T);
}
function AwaitedResolve(T) {
  return IsIntersect(T) ? FromIntersect14(T.allOf) : IsUnion(T) ? FromUnion16(T.anyOf) : IsPromise2(T) ? FromPromise6(T.item) : T;
}
function Awaited(T, options = {}) {
  return CloneType(AwaitedResolve(T), options);
}
// node_modules/@sinclair/typebox/build/esm/type/composite/composite.mjs
function CompositeKeys(T) {
  const Acc = [];
  for (const L of T)
    Acc.push(...KeyOfPropertyKeys(L));
  return SetDistinct(Acc);
}
function FilterNever(T) {
  return T.filter((L) => !IsNever(L));
}
function CompositeProperty(T, K) {
  const Acc = [];
  for (const L of T)
    Acc.push(...IndexFromPropertyKeys(L, [K]));
  return FilterNever(Acc);
}
function CompositeProperties(T, K) {
  const Acc = {};
  for (const L of K) {
    Acc[L] = IntersectEvaluated(CompositeProperty(T, L));
  }
  return Acc;
}
function Composite(T, options = {}) {
  const K = CompositeKeys(T);
  const P = CompositeProperties(T, K);
  const R = Object2(P, options);
  return R;
}
// node_modules/@sinclair/typebox/build/esm/type/date/date.mjs
function Date2(options = {}) {
  return {
    ...options,
    [Kind]: "Date",
    type: "Date"
  };
}
// node_modules/@sinclair/typebox/build/esm/type/null/null.mjs
function Null(options = {}) {
  return {
    ...options,
    [Kind]: "Null",
    type: "null"
  };
}
// node_modules/@sinclair/typebox/build/esm/type/symbol/symbol.mjs
function Symbol2(options) {
  return { ...options, [Kind]: "Symbol", type: "symbol" };
}
// node_modules/@sinclair/typebox/build/esm/type/undefined/undefined.mjs
function Undefined(options = {}) {
  return { ...options, [Kind]: "Undefined", type: "undefined" };
}
// node_modules/@sinclair/typebox/build/esm/type/uint8array/uint8array.mjs
function Uint8Array2(options = {}) {
  return { ...options, [Kind]: "Uint8Array", type: "Uint8Array" };
}
// node_modules/@sinclair/typebox/build/esm/type/const/const.mjs
function FromArray14(T) {
  return T.map((L) => FromValue(L, false));
}
function FromProperties8(value2) {
  const Acc = {};
  for (const K of globalThis.Object.getOwnPropertyNames(value2))
    Acc[K] = Readonly(FromValue(value2[K], false));
  return Acc;
}
function ConditionalReadonly(T, root) {
  return root === true ? T : Readonly(T);
}
function FromValue(value2, root) {
  return IsAsyncIterator2(value2) ? ConditionalReadonly(Any(), root) : IsIterator2(value2) ? ConditionalReadonly(Any(), root) : IsArray2(value2) ? Readonly(Tuple(FromArray14(value2))) : IsUint8Array2(value2) ? Uint8Array2() : IsDate2(value2) ? Date2() : IsObject2(value2) ? ConditionalReadonly(Object2(FromProperties8(value2)), root) : IsFunction2(value2) ? ConditionalReadonly(Function2([], Unknown()), root) : IsUndefined2(value2) ? Undefined() : IsNull2(value2) ? Null() : IsSymbol2(value2) ? Symbol2() : IsBigInt2(value2) ? BigInt2() : IsNumber2(value2) ? Literal(value2) : IsBoolean2(value2) ? Literal(value2) : IsString2(value2) ? Literal(value2) : Object2({});
}
function Const(T, options = {}) {
  return CloneType(FromValue(T, true), options);
}
// node_modules/@sinclair/typebox/build/esm/type/constructor-parameters/constructor-parameters.mjs
function ConstructorParameters(schema, options = {}) {
  return Tuple(CloneRest(schema.parameters), { ...options });
}
// node_modules/@sinclair/typebox/build/esm/type/deref/deref.mjs
function FromRest5(schema, references) {
  return schema.map((schema2) => Deref2(schema2, references));
}
function FromProperties9(properties, references) {
  const Acc = {};
  for (const K of globalThis.Object.getOwnPropertyNames(properties)) {
    Acc[K] = Deref2(properties[K], references);
  }
  return Acc;
}
function FromConstructor7(schema, references) {
  schema.parameters = FromRest5(schema.parameters, references);
  schema.returns = Deref2(schema.returns, references);
  return schema;
}
function FromFunction6(schema, references) {
  schema.parameters = FromRest5(schema.parameters, references);
  schema.returns = Deref2(schema.returns, references);
  return schema;
}
function FromIntersect15(schema, references) {
  schema.allOf = FromRest5(schema.allOf, references);
  return schema;
}
function FromUnion17(schema, references) {
  schema.anyOf = FromRest5(schema.anyOf, references);
  return schema;
}
function FromTuple14(schema, references) {
  if (IsUndefined2(schema.items))
    return schema;
  schema.items = FromRest5(schema.items, references);
  return schema;
}
function FromArray15(schema, references) {
  schema.items = Deref2(schema.items, references);
  return schema;
}
function FromObject12(schema, references) {
  schema.properties = FromProperties9(schema.properties, references);
  return schema;
}
function FromPromise7(schema, references) {
  schema.item = Deref2(schema.item, references);
  return schema;
}
function FromAsyncIterator6(schema, references) {
  schema.items = Deref2(schema.items, references);
  return schema;
}
function FromIterator6(schema, references) {
  schema.items = Deref2(schema.items, references);
  return schema;
}
function FromRef11(schema, references) {
  const target = references.find((remote) => remote.$id === schema.$ref);
  if (target === undefined)
    throw Error(`Unable to dereference schema with \$id ${schema.$ref}`);
  const discard2 = Discard(target, ["$id"]);
  return Deref2(discard2, references);
}
function DerefResolve(schema, references) {
  return IsConstructor(schema) ? FromConstructor7(schema, references) : IsFunction3(schema) ? FromFunction6(schema, references) : IsIntersect(schema) ? FromIntersect15(schema, references) : IsUnion(schema) ? FromUnion17(schema, references) : IsTuple(schema) ? FromTuple14(schema, references) : IsArray3(schema) ? FromArray15(schema, references) : IsObject3(schema) ? FromObject12(schema, references) : IsPromise2(schema) ? FromPromise7(schema, references) : IsAsyncIterator3(schema) ? FromAsyncIterator6(schema, references) : IsIterator3(schema) ? FromIterator6(schema, references) : IsRef(schema) ? FromRef11(schema, references) : schema;
}
function Deref2(schema, references) {
  return DerefResolve(CloneType(schema), CloneRest(references));
}
// node_modules/@sinclair/typebox/build/esm/type/enum/enum.mjs
function Enum(item, options = {}) {
  if (IsUndefined2(item))
    throw new Error("Enum undefined or empty");
  const values1 = globalThis.Object.getOwnPropertyNames(item).filter((key) => isNaN(key)).map((key) => item[key]);
  const values2 = [...new Set(values1)];
  const anyOf = values2.map((value2) => Literal(value2));
  return Union(anyOf, { ...options, [Hint]: "Enum" });
}
// node_modules/@sinclair/typebox/build/esm/type/exclude/exclude-from-template-literal.mjs
function ExcludeFromTemplateLiteral(L, R) {
  return Exclude(TemplateLiteralToUnion(L), R);
}

// node_modules/@sinclair/typebox/build/esm/type/exclude/exclude.mjs
function ExcludeRest(L, R) {
  const excluded = L.filter((inner) => ExtendsCheck(inner, R) === ExtendsResult.False);
  return excluded.length === 1 ? excluded[0] : Union(excluded);
}
function Exclude(L, R, options = {}) {
  if (IsTemplateLiteral(L))
    return CloneType(ExcludeFromTemplateLiteral(L, R), options);
  if (IsMappedResult(L))
    return CloneType(ExcludeFromMappedResult(L, R), options);
  return CloneType(IsUnion(L) ? ExcludeRest(L.anyOf, R) : ExtendsCheck(L, R) !== ExtendsResult.False ? Never() : L, options);
}

// node_modules/@sinclair/typebox/build/esm/type/exclude/exclude-from-mapped-result.mjs
function FromProperties10(P, U) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Exclude(P[K2], U);
  return Acc;
}
function FromMappedResult7(R, T) {
  return FromProperties10(R.properties, T);
}
function ExcludeFromMappedResult(R, T) {
  const P = FromMappedResult7(R, T);
  return MappedResult(P);
}
// node_modules/@sinclair/typebox/build/esm/type/extract/extract-from-template-literal.mjs
function ExtractFromTemplateLiteral(L, R) {
  return Extract(TemplateLiteralToUnion(L), R);
}

// node_modules/@sinclair/typebox/build/esm/type/extract/extract.mjs
function ExtractRest(L, R) {
  const extracted = L.filter((inner) => ExtendsCheck(inner, R) !== ExtendsResult.False);
  return extracted.length === 1 ? extracted[0] : Union(extracted);
}
function Extract(L, R, options = {}) {
  if (IsTemplateLiteral(L))
    return CloneType(ExtractFromTemplateLiteral(L, R), options);
  if (IsMappedResult(L))
    return CloneType(ExtractFromMappedResult(L, R), options);
  return CloneType(IsUnion(L) ? ExtractRest(L.anyOf, R) : ExtendsCheck(L, R) !== ExtendsResult.False ? L : Never(), options);
}

// node_modules/@sinclair/typebox/build/esm/type/extract/extract-from-mapped-result.mjs
function FromProperties11(P, T) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Extract(P[K2], T);
  return Acc;
}
function FromMappedResult8(R, T) {
  return FromProperties11(R.properties, T);
}
function ExtractFromMappedResult(R, T) {
  const P = FromMappedResult8(R, T);
  return MappedResult(P);
}
// node_modules/@sinclair/typebox/build/esm/type/instance-type/instance-type.mjs
function InstanceType(schema, options = {}) {
  return CloneType(schema.returns, options);
}
// node_modules/@sinclair/typebox/build/esm/type/integer/integer.mjs
function Integer(options = {}) {
  return {
    ...options,
    [Kind]: "Integer",
    type: "integer"
  };
}
// node_modules/@sinclair/typebox/build/esm/type/intrinsic/intrinsic-from-mapped-key.mjs
function MappedIntrinsicPropertyKey(K, M, options) {
  return {
    [K]: Intrinsic(Literal(K), M, options)
  };
}
function MappedIntrinsicPropertyKeys(K, M, options) {
  return K.reduce((Acc, L) => {
    return { ...Acc, ...MappedIntrinsicPropertyKey(L, M, options) };
  }, {});
}
function MappedIntrinsicProperties(T, M, options) {
  return MappedIntrinsicPropertyKeys(T["keys"], M, options);
}
function IntrinsicFromMappedKey(T, M, options) {
  const P = MappedIntrinsicProperties(T, M, options);
  return MappedResult(P);
}

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/intrinsic.mjs
function ApplyUncapitalize(value2) {
  const [first, rest] = [value2.slice(0, 1), value2.slice(1)];
  return [first.toLowerCase(), rest].join("");
}
function ApplyCapitalize(value2) {
  const [first, rest] = [value2.slice(0, 1), value2.slice(1)];
  return [first.toUpperCase(), rest].join("");
}
function ApplyUppercase(value2) {
  return value2.toUpperCase();
}
function ApplyLowercase(value2) {
  return value2.toLowerCase();
}
function FromTemplateLiteral6(schema, mode, options) {
  const expression = TemplateLiteralParseExact(schema.pattern);
  const finite2 = IsTemplateLiteralExpressionFinite(expression);
  if (!finite2)
    return { ...schema, pattern: FromLiteralValue(schema.pattern, mode) };
  const strings = [...TemplateLiteralExpressionGenerate(expression)];
  const literals = strings.map((value2) => Literal(value2));
  const mapped2 = FromRest6(literals, mode);
  const union3 = Union(mapped2);
  return TemplateLiteral([union3], options);
}
function FromLiteralValue(value2, mode) {
  return typeof value2 === "string" ? mode === "Uncapitalize" ? ApplyUncapitalize(value2) : mode === "Capitalize" ? ApplyCapitalize(value2) : mode === "Uppercase" ? ApplyUppercase(value2) : mode === "Lowercase" ? ApplyLowercase(value2) : value2 : value2.toString();
}
function FromRest6(T, M) {
  return T.map((L) => Intrinsic(L, M));
}
function Intrinsic(schema, mode, options = {}) {
  return IsMappedKey(schema) ? IntrinsicFromMappedKey(schema, mode, options) : IsTemplateLiteral(schema) ? FromTemplateLiteral6(schema, mode, schema) : IsUnion(schema) ? Union(FromRest6(schema.anyOf, mode), options) : IsLiteral(schema) ? Literal(FromLiteralValue(schema.const, mode), options) : schema;
}

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/capitalize.mjs
function Capitalize(T, options = {}) {
  return Intrinsic(T, "Capitalize", options);
}
// node_modules/@sinclair/typebox/build/esm/type/intrinsic/lowercase.mjs
function Lowercase(T, options = {}) {
  return Intrinsic(T, "Lowercase", options);
}
// node_modules/@sinclair/typebox/build/esm/type/intrinsic/uncapitalize.mjs
function Uncapitalize(T, options = {}) {
  return Intrinsic(T, "Uncapitalize", options);
}
// node_modules/@sinclair/typebox/build/esm/type/intrinsic/uppercase.mjs
function Uppercase(T, options = {}) {
  return Intrinsic(T, "Uppercase", options);
}
// node_modules/@sinclair/typebox/build/esm/type/not/not.mjs
function Not2(schema, options) {
  return {
    ...options,
    [Kind]: "Not",
    not: CloneType(schema)
  };
}
// node_modules/@sinclair/typebox/build/esm/type/omit/omit-from-mapped-result.mjs
function FromProperties12(P, K, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Omit(P[K2], K, options);
  return Acc;
}
function FromMappedResult9(R, K, options) {
  return FromProperties12(R.properties, K, options);
}
function OmitFromMappedResult(R, K, options) {
  const P = FromMappedResult9(R, K, options);
  return MappedResult(P);
}

// node_modules/@sinclair/typebox/build/esm/type/omit/omit.mjs
function FromIntersect16(T, K) {
  return T.map((T2) => OmitResolve(T2, K));
}
function FromUnion18(T, K) {
  return T.map((T2) => OmitResolve(T2, K));
}
function FromProperty2(T, K) {
  const { [K]: _, ...R } = T;
  return R;
}
function FromProperties13(T, K) {
  return K.reduce((T2, K2) => FromProperty2(T2, K2), T);
}
function OmitResolve(T, K) {
  return IsIntersect(T) ? Intersect(FromIntersect16(T.allOf, K)) : IsUnion(T) ? Union(FromUnion18(T.anyOf, K)) : IsObject3(T) ? Object2(FromProperties13(T.properties, K)) : Object2({});
}
function Omit(T, K, options = {}) {
  if (IsMappedKey(K))
    return OmitFromMappedKey(T, K, options);
  if (IsMappedResult(T))
    return OmitFromMappedResult(T, K, options);
  const I = IsSchema(K) ? IndexPropertyKeys(K) : K;
  const D = Discard(T, [TransformKind, "$id", "required"]);
  const R = CloneType(OmitResolve(T, I), options);
  return { ...D, ...R };
}

// node_modules/@sinclair/typebox/build/esm/type/omit/omit-from-mapped-key.mjs
function FromPropertyKey2(T, K, options) {
  return {
    [K]: Omit(T, [K], options)
  };
}
function FromPropertyKeys2(T, K, options) {
  return K.reduce((Acc, LK) => {
    return { ...Acc, ...FromPropertyKey2(T, LK, options) };
  }, {});
}
function FromMappedKey3(T, K, options) {
  return FromPropertyKeys2(T, K.keys, options);
}
function OmitFromMappedKey(T, K, options) {
  const P = FromMappedKey3(T, K, options);
  return MappedResult(P);
}
// node_modules/@sinclair/typebox/build/esm/type/parameters/parameters.mjs
function Parameters(schema, options = {}) {
  return Tuple(CloneRest(schema.parameters), { ...options });
}
// node_modules/@sinclair/typebox/build/esm/type/partial/partial.mjs
function FromRest7(T) {
  return T.map((L) => PartialResolve(L));
}
function FromProperties14(T) {
  const Acc = {};
  for (const K of globalThis.Object.getOwnPropertyNames(T))
    Acc[K] = Optional(T[K]);
  return Acc;
}
function PartialResolve(T) {
  return IsIntersect(T) ? Intersect(FromRest7(T.allOf)) : IsUnion(T) ? Union(FromRest7(T.anyOf)) : IsObject3(T) ? Object2(FromProperties14(T.properties)) : Object2({});
}
function Partial(T, options = {}) {
  if (IsMappedResult(T))
    return PartialFromMappedResult(T, options);
  const D = Discard(T, [TransformKind, "$id", "required"]);
  const R = CloneType(PartialResolve(T), options);
  return { ...D, ...R };
}

// node_modules/@sinclair/typebox/build/esm/type/partial/partial-from-mapped-result.mjs
function FromProperties15(K, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(K))
    Acc[K2] = Partial(K[K2], options);
  return Acc;
}
function FromMappedResult10(R, options) {
  return FromProperties15(R.properties, options);
}
function PartialFromMappedResult(R, options) {
  const P = FromMappedResult10(R, options);
  return MappedResult(P);
}
// node_modules/@sinclair/typebox/build/esm/type/pick/pick-from-mapped-result.mjs
function FromProperties16(P, K, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Pick(P[K2], K, options);
  return Acc;
}
function FromMappedResult11(R, K, options) {
  return FromProperties16(R.properties, K, options);
}
function PickFromMappedResult(R, K, options) {
  const P = FromMappedResult11(R, K, options);
  return MappedResult(P);
}

// node_modules/@sinclair/typebox/build/esm/type/pick/pick.mjs
function FromIntersect17(T, K) {
  return T.map((T2) => PickResolve(T2, K));
}
function FromUnion19(T, K) {
  return T.map((T2) => PickResolve(T2, K));
}
function FromProperties17(T, K) {
  const Acc = {};
  for (const K2 of K)
    if (K2 in T)
      Acc[K2] = T[K2];
  return Acc;
}
function PickResolve(T, K) {
  return IsIntersect(T) ? Intersect(FromIntersect17(T.allOf, K)) : IsUnion(T) ? Union(FromUnion19(T.anyOf, K)) : IsObject3(T) ? Object2(FromProperties17(T.properties, K)) : Object2({});
}
function Pick(T, K, options = {}) {
  if (IsMappedKey(K))
    return PickFromMappedKey(T, K, options);
  if (IsMappedResult(T))
    return PickFromMappedResult(T, K, options);
  const I = IsSchema(K) ? IndexPropertyKeys(K) : K;
  const D = Discard(T, [TransformKind, "$id", "required"]);
  const R = CloneType(PickResolve(T, I), options);
  return { ...D, ...R };
}

// node_modules/@sinclair/typebox/build/esm/type/pick/pick-from-mapped-key.mjs
function FromPropertyKey3(T, K, options) {
  return {
    [K]: Pick(T, [K], options)
  };
}
function FromPropertyKeys3(T, K, options) {
  return K.reduce((Acc, LK) => {
    return { ...Acc, ...FromPropertyKey3(T, LK, options) };
  }, {});
}
function FromMappedKey4(T, K, options) {
  return FromPropertyKeys3(T, K.keys, options);
}
function PickFromMappedKey(T, K, options) {
  const P = FromMappedKey4(T, K, options);
  return MappedResult(P);
}
// node_modules/@sinclair/typebox/build/esm/type/readonly-optional/readonly-optional.mjs
function ReadonlyOptional(schema) {
  return Readonly(Optional(schema));
}
// node_modules/@sinclair/typebox/build/esm/type/record/record.mjs
function RecordCreateFromPattern(pattern2, T, options) {
  return {
    ...options,
    [Kind]: "Record",
    type: "object",
    patternProperties: { [pattern2]: CloneType(T) }
  };
}
function RecordCreateFromKeys(K, T, options) {
  const Acc = {};
  for (const K2 of K)
    Acc[K2] = CloneType(T);
  return Object2(Acc, { ...options, [Hint]: "Record" });
}
function FromTemplateLiteralKey(K, T, options) {
  return IsTemplateLiteralFinite(K) ? RecordCreateFromKeys(IndexPropertyKeys(K), T, options) : RecordCreateFromPattern(K.pattern, T, options);
}
function FromUnionKey(K, T, options) {
  return RecordCreateFromKeys(IndexPropertyKeys(Union(K)), T, options);
}
function FromLiteralKey(K, T, options) {
  return RecordCreateFromKeys([K.toString()], T, options);
}
function FromRegExpKey(K, T, options) {
  return RecordCreateFromPattern(K.source, T, options);
}
function FromStringKey(K, T, options) {
  const pattern2 = IsUndefined2(K.pattern) ? PatternStringExact : K.pattern;
  return RecordCreateFromPattern(pattern2, T, options);
}
function FromIntegerKey(_, T, options) {
  return RecordCreateFromPattern(PatternNumberExact, T, options);
}
function FromNumberKey(_, T, options) {
  return RecordCreateFromPattern(PatternNumberExact, T, options);
}
function Record(K, T, options = {}) {
  return IsUnion(K) ? FromUnionKey(K.anyOf, T, options) : IsTemplateLiteral(K) ? FromTemplateLiteralKey(K, T, options) : IsLiteral(K) ? FromLiteralKey(K.const, T, options) : IsInteger2(K) ? FromIntegerKey(K, T, options) : IsNumber3(K) ? FromNumberKey(K, T, options) : IsRegExp2(K) ? FromRegExpKey(K, T, options) : IsString3(K) ? FromStringKey(K, T, options) : Never(options);
}
// node_modules/@sinclair/typebox/build/esm/type/recursive/recursive.mjs
var Ordinal = 0;
function Recursive(callback, options = {}) {
  if (IsUndefined2(options.$id))
    options.$id = `T${Ordinal++}`;
  const thisType = callback({ [Kind]: "This", $ref: `${options.$id}` });
  thisType.$id = options.$id;
  return CloneType({ ...options, [Hint]: "Recursive", ...thisType });
}
// node_modules/@sinclair/typebox/build/esm/type/ref/ref.mjs
function Ref(unresolved, options = {}) {
  if (IsString2(unresolved))
    return { ...options, [Kind]: "Ref", $ref: unresolved };
  if (IsUndefined2(unresolved.$id))
    throw new Error("Reference target type must specify an $id");
  return {
    ...options,
    [Kind]: "Ref",
    $ref: unresolved.$id
  };
}
// node_modules/@sinclair/typebox/build/esm/type/regexp/regexp.mjs
function RegExp2(unresolved, options = {}) {
  const expr = IsString2(unresolved) ? new globalThis.RegExp(unresolved) : unresolved;
  return { ...options, [Kind]: "RegExp", type: "RegExp", source: expr.source, flags: expr.flags };
}
// node_modules/@sinclair/typebox/build/esm/type/required/required.mjs
function FromRest8(T) {
  return T.map((L) => RequiredResolve(L));
}
function FromProperties18(T) {
  const Acc = {};
  for (const K of globalThis.Object.getOwnPropertyNames(T))
    Acc[K] = Discard(T[K], [OptionalKind]);
  return Acc;
}
function RequiredResolve(T) {
  return IsIntersect(T) ? Intersect(FromRest8(T.allOf)) : IsUnion(T) ? Union(FromRest8(T.anyOf)) : IsObject3(T) ? Object2(FromProperties18(T.properties)) : Object2({});
}
function Required(T, options = {}) {
  if (IsMappedResult(T)) {
    return RequiredFromMappedResult(T, options);
  } else {
    const D = Discard(T, [TransformKind, "$id", "required"]);
    const R = CloneType(RequiredResolve(T), options);
    return { ...D, ...R };
  }
}

// node_modules/@sinclair/typebox/build/esm/type/required/required-from-mapped-result.mjs
function FromProperties19(P, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Required(P[K2], options);
  return Acc;
}
function FromMappedResult12(R, options) {
  return FromProperties19(R.properties, options);
}
function RequiredFromMappedResult(R, options) {
  const P = FromMappedResult12(R, options);
  return MappedResult(P);
}
// node_modules/@sinclair/typebox/build/esm/type/rest/rest.mjs
function RestResolve(T) {
  return IsIntersect(T) ? CloneRest(T.allOf) : IsUnion(T) ? CloneRest(T.anyOf) : IsTuple(T) ? CloneRest(T.items ?? []) : [];
}
function Rest(T) {
  return CloneRest(RestResolve(T));
}
// node_modules/@sinclair/typebox/build/esm/type/return-type/return-type.mjs
function ReturnType(schema, options = {}) {
  return CloneType(schema.returns, options);
}
// node_modules/@sinclair/typebox/build/esm/type/strict/strict.mjs
function Strict(schema2) {
  return JSON.parse(JSON.stringify(schema2));
}
// node_modules/@sinclair/typebox/build/esm/type/transform/transform.mjs
class TransformDecodeBuilder {
  constructor(schema2) {
    this.schema = schema2;
  }
  Decode(decode2) {
    return new TransformEncodeBuilder(this.schema, decode2);
  }
}

class TransformEncodeBuilder {
  constructor(schema2, decode2) {
    this.schema = schema2;
    this.decode = decode2;
  }
  EncodeTransform(encode2, schema2) {
    const Encode2 = (value2) => schema2[TransformKind].Encode(encode2(value2));
    const Decode2 = (value2) => this.decode(schema2[TransformKind].Decode(value2));
    const Codec = { Encode: Encode2, Decode: Decode2 };
    return { ...schema2, [TransformKind]: Codec };
  }
  EncodeSchema(encode2, schema2) {
    const Codec = { Decode: this.decode, Encode: encode2 };
    return { ...schema2, [TransformKind]: Codec };
  }
  Encode(encode2) {
    const schema2 = CloneType(this.schema);
    return IsTransform(schema2) ? this.EncodeTransform(encode2, schema2) : this.EncodeSchema(encode2, schema2);
  }
}
function Transform(schema2) {
  return new TransformDecodeBuilder(schema2);
}
// node_modules/@sinclair/typebox/build/esm/type/void/void.mjs
function Void(options = {}) {
  return {
    ...options,
    [Kind]: "Void",
    type: "void"
  };
}
// node_modules/@sinclair/typebox/build/esm/type/type/type.mjs
var exports_type3 = {};
__export(exports_type3, {
  Void: () => Void,
  Uppercase: () => Uppercase,
  Unsafe: () => Unsafe,
  Unknown: () => Unknown,
  Union: () => Union,
  Undefined: () => Undefined,
  Uncapitalize: () => Uncapitalize,
  Uint8Array: () => Uint8Array2,
  Tuple: () => Tuple,
  Transform: () => Transform,
  TemplateLiteral: () => TemplateLiteral,
  Symbol: () => Symbol2,
  String: () => String2,
  Strict: () => Strict,
  ReturnType: () => ReturnType,
  Rest: () => Rest,
  Required: () => Required,
  RegExp: () => RegExp2,
  Ref: () => Ref,
  Recursive: () => Recursive,
  Record: () => Record,
  ReadonlyOptional: () => ReadonlyOptional,
  Readonly: () => Readonly,
  Promise: () => Promise2,
  Pick: () => Pick,
  Partial: () => Partial,
  Parameters: () => Parameters,
  Optional: () => Optional,
  Omit: () => Omit,
  Object: () => Object2,
  Number: () => Number2,
  Null: () => Null,
  Not: () => Not2,
  Never: () => Never,
  Mapped: () => Mapped,
  Lowercase: () => Lowercase,
  Literal: () => Literal,
  KeyOf: () => KeyOf,
  Iterator: () => Iterator,
  Intersect: () => Intersect,
  Integer: () => Integer,
  InstanceType: () => InstanceType,
  Index: () => Index,
  Function: () => Function2,
  Extract: () => Extract,
  Extends: () => Extends,
  Exclude: () => Exclude,
  Enum: () => Enum,
  Deref: () => Deref2,
  Date: () => Date2,
  ConstructorParameters: () => ConstructorParameters,
  Constructor: () => Constructor,
  Const: () => Const,
  Composite: () => Composite,
  Capitalize: () => Capitalize,
  Boolean: () => Boolean2,
  BigInt: () => BigInt2,
  Awaited: () => Awaited,
  AsyncIterator: () => AsyncIterator,
  Array: () => Array2,
  Any: () => Any
});

// node_modules/@sinclair/typebox/build/esm/type/type/index.mjs
var Type = exports_type3;
// node_modules/@sinclair/typebox/build/esm/compiler/compiler.mjs
class TypeCheck {
  constructor(schema3, references, checkFunc, code) {
    this.schema = schema3;
    this.references = references;
    this.checkFunc = checkFunc;
    this.code = code;
    this.hasTransform = HasTransform(schema3, references);
  }
  Code() {
    return this.code;
  }
  Errors(value2) {
    return Errors(this.schema, this.references, value2);
  }
  Check(value2) {
    return this.checkFunc(value2);
  }
  Decode(value2) {
    if (!this.checkFunc(value2))
      throw new TransformDecodeCheckError(this.schema, value2, this.Errors(value2).First());
    return this.hasTransform ? TransformDecode(this.schema, this.references, value2) : value2;
  }
  Encode(value2) {
    const encoded = this.hasTransform ? TransformEncode(this.schema, this.references, value2) : value2;
    if (!this.checkFunc(encoded))
      throw new TransformEncodeCheckError(this.schema, value2, this.Errors(value2).First());
    return encoded;
  }
}
var Character;
(function(Character2) {
  function DollarSign(code) {
    return code === 36;
  }
  Character2.DollarSign = DollarSign;
  function IsUnderscore(code) {
    return code === 95;
  }
  Character2.IsUnderscore = IsUnderscore;
  function IsAlpha(code) {
    return code >= 65 && code <= 90 || code >= 97 && code <= 122;
  }
  Character2.IsAlpha = IsAlpha;
  function IsNumeric(code) {
    return code >= 48 && code <= 57;
  }
  Character2.IsNumeric = IsNumeric;
})(Character || (Character = {}));
var MemberExpression;
(function(MemberExpression2) {
  function IsFirstCharacterNumeric(value2) {
    if (value2.length === 0)
      return false;
    return Character.IsNumeric(value2.charCodeAt(0));
  }
  function IsAccessor(value2) {
    if (IsFirstCharacterNumeric(value2))
      return false;
    for (let i = 0;i < value2.length; i++) {
      const code = value2.charCodeAt(i);
      const check3 = Character.IsAlpha(code) || Character.IsNumeric(code) || Character.DollarSign(code) || Character.IsUnderscore(code);
      if (!check3)
        return false;
    }
    return true;
  }
  function EscapeHyphen(key) {
    return key.replace(/'/g, "\\'");
  }
  function Encode2(object3, key) {
    return IsAccessor(key) ? `${object3}.${key}` : `${object3}['${EscapeHyphen(key)}']`;
  }
  MemberExpression2.Encode = Encode2;
})(MemberExpression || (MemberExpression = {}));
var Identifier;
(function(Identifier2) {
  function Encode2($id) {
    const buffer = [];
    for (let i = 0;i < $id.length; i++) {
      const code = $id.charCodeAt(i);
      if (Character.IsNumeric(code) || Character.IsAlpha(code)) {
        buffer.push($id.charAt(i));
      } else {
        buffer.push(`_${code}_`);
      }
    }
    return buffer.join("").replace(/__/g, "_");
  }
  Identifier2.Encode = Encode2;
})(Identifier || (Identifier = {}));
var LiteralString;
(function(LiteralString2) {
  function Escape3(content) {
    return content.replace(/'/g, "\\'");
  }
  LiteralString2.Escape = Escape3;
})(LiteralString || (LiteralString = {}));

class TypeCompilerUnknownTypeError extends TypeBoxError {
  constructor(schema3) {
    super("Unknown type");
    this.schema = schema3;
  }
}

class TypeCompilerTypeGuardError extends TypeBoxError {
  constructor(schema3) {
    super("Preflight validation check failed to guard for the given schema");
    this.schema = schema3;
  }
}
var Policy;
(function(Policy2) {
  function IsExactOptionalProperty(value2, key, expression) {
    return TypeSystemPolicy.ExactOptionalPropertyTypes ? `('${key}' in ${value2} ? ${expression} : true)` : `(${MemberExpression.Encode(value2, key)} !== undefined ? ${expression} : true)`;
  }
  Policy2.IsExactOptionalProperty = IsExactOptionalProperty;
  function IsObjectLike(value2) {
    return !TypeSystemPolicy.AllowArrayObject ? `(typeof ${value2} === 'object' && ${value2} !== null && !Array.isArray(${value2}))` : `(typeof ${value2} === 'object' && ${value2} !== null)`;
  }
  Policy2.IsObjectLike = IsObjectLike;
  function IsRecordLike(value2) {
    return !TypeSystemPolicy.AllowArrayObject ? `(typeof ${value2} === 'object' && ${value2} !== null && !Array.isArray(${value2}) && !(${value2} instanceof Date) && !(${value2} instanceof Uint8Array))` : `(typeof ${value2} === 'object' && ${value2} !== null && !(${value2} instanceof Date) && !(${value2} instanceof Uint8Array))`;
  }
  Policy2.IsRecordLike = IsRecordLike;
  function IsNumberLike(value2) {
    return TypeSystemPolicy.AllowNaN ? `typeof ${value2} === 'number'` : `Number.isFinite(${value2})`;
  }
  Policy2.IsNumberLike = IsNumberLike;
  function IsVoidLike(value2) {
    return TypeSystemPolicy.AllowNullVoid ? `(${value2} === undefined || ${value2} === null)` : `${value2} === undefined`;
  }
  Policy2.IsVoidLike = IsVoidLike;
})(Policy || (Policy = {}));
var TypeCompiler;
(function(TypeCompiler2) {
  function IsAnyOrUnknown2(schema3) {
    return schema3[Kind] === "Any" || schema3[Kind] === "Unknown";
  }
  function* FromAny5(schema3, references, value2) {
    yield "true";
  }
  function* FromArray16(schema3, references, value2) {
    yield `Array.isArray(${value2})`;
    const [parameter, accumulator] = [CreateParameter("value", "any"), CreateParameter("acc", "number")];
    if (IsNumber(schema3.maxItems))
      yield `${value2}.length <= ${schema3.maxItems}`;
    if (IsNumber(schema3.minItems))
      yield `${value2}.length >= ${schema3.minItems}`;
    const elementExpression = CreateExpression(schema3.items, references, "value");
    yield `${value2}.every((${parameter}) => ${elementExpression})`;
    if (IsSchema2(schema3.contains) || IsNumber(schema3.minContains) || IsNumber(schema3.maxContains)) {
      const containsSchema = IsSchema2(schema3.contains) ? schema3.contains : Never();
      const checkExpression = CreateExpression(containsSchema, references, "value");
      const checkMinContains = IsNumber(schema3.minContains) ? [`(count >= ${schema3.minContains})`] : [];
      const checkMaxContains = IsNumber(schema3.maxContains) ? [`(count <= ${schema3.maxContains})`] : [];
      const checkCount = `const count = value.reduce((${accumulator}, ${parameter}) => ${checkExpression} ? acc + 1 : acc, 0)`;
      const check3 = [`(count > 0)`, ...checkMinContains, ...checkMaxContains].join(" && ");
      yield `((${parameter}) => { ${checkCount}; return ${check3}})(${value2})`;
    }
    if (schema3.uniqueItems === true) {
      const check3 = `const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true`;
      const block = `const set = new Set(); for(const element of value) { ${check3} }`;
      yield `((${parameter}) => { ${block} )(${value2})`;
    }
  }
  function* FromAsyncIterator7(schema3, references, value2) {
    yield `(typeof value === 'object' && Symbol.asyncIterator in ${value2})`;
  }
  function* FromBigInt6(schema3, references, value2) {
    yield `(typeof ${value2} === 'bigint')`;
    if (IsBigInt(schema3.exclusiveMaximum))
      yield `${value2} < BigInt(${schema3.exclusiveMaximum})`;
    if (IsBigInt(schema3.exclusiveMinimum))
      yield `${value2} > BigInt(${schema3.exclusiveMinimum})`;
    if (IsBigInt(schema3.maximum))
      yield `${value2} <= BigInt(${schema3.maximum})`;
    if (IsBigInt(schema3.minimum))
      yield `${value2} >= BigInt(${schema3.minimum})`;
    if (IsBigInt(schema3.multipleOf))
      yield `(${value2} % BigInt(${schema3.multipleOf})) === 0`;
  }
  function* FromBoolean6(schema3, references, value2) {
    yield `(typeof ${value2} === 'boolean')`;
  }
  function* FromConstructor8(schema3, references, value2) {
    yield* Visit17(schema3.returns, references, `${value2}.prototype`);
  }
  function* FromDate6(schema3, references, value2) {
    yield `(${value2} instanceof Date) && Number.isFinite(${value2}.getTime())`;
    if (IsNumber(schema3.exclusiveMaximumTimestamp))
      yield `${value2}.getTime() < ${schema3.exclusiveMaximumTimestamp}`;
    if (IsNumber(schema3.exclusiveMinimumTimestamp))
      yield `${value2}.getTime() > ${schema3.exclusiveMinimumTimestamp}`;
    if (IsNumber(schema3.maximumTimestamp))
      yield `${value2}.getTime() <= ${schema3.maximumTimestamp}`;
    if (IsNumber(schema3.minimumTimestamp))
      yield `${value2}.getTime() >= ${schema3.minimumTimestamp}`;
    if (IsNumber(schema3.multipleOfTimestamp))
      yield `(${value2}.getTime() % ${schema3.multipleOfTimestamp}) === 0`;
  }
  function* FromFunction7(schema3, references, value2) {
    yield `(typeof ${value2} === 'function')`;
  }
  function* FromInteger6(schema3, references, value2) {
    yield `Number.isInteger(${value2})`;
    if (IsNumber(schema3.exclusiveMaximum))
      yield `${value2} < ${schema3.exclusiveMaximum}`;
    if (IsNumber(schema3.exclusiveMinimum))
      yield `${value2} > ${schema3.exclusiveMinimum}`;
    if (IsNumber(schema3.maximum))
      yield `${value2} <= ${schema3.maximum}`;
    if (IsNumber(schema3.minimum))
      yield `${value2} >= ${schema3.minimum}`;
    if (IsNumber(schema3.multipleOf))
      yield `(${value2} % ${schema3.multipleOf}) === 0`;
  }
  function* FromIntersect18(schema3, references, value2) {
    const check1 = schema3.allOf.map((schema4) => CreateExpression(schema4, references, value2)).join(" && ");
    if (schema3.unevaluatedProperties === false) {
      const keyCheck = CreateVariable(`${new RegExp(KeyOfPattern(schema3))};`);
      const check22 = `Object.getOwnPropertyNames(${value2}).every(key => ${keyCheck}.test(key))`;
      yield `(${check1} && ${check22})`;
    } else if (IsSchema2(schema3.unevaluatedProperties)) {
      const keyCheck = CreateVariable(`${new RegExp(KeyOfPattern(schema3))};`);
      const check22 = `Object.getOwnPropertyNames(${value2}).every(key => ${keyCheck}.test(key) || ${CreateExpression(schema3.unevaluatedProperties, references, `${value2}[key]`)})`;
      yield `(${check1} && ${check22})`;
    } else {
      yield `(${check1})`;
    }
  }
  function* FromIterator7(schema3, references, value2) {
    yield `(typeof value === 'object' && Symbol.iterator in ${value2})`;
  }
  function* FromLiteral7(schema3, references, value2) {
    if (typeof schema3.const === "number" || typeof schema3.const === "boolean") {
      yield `(${value2} === ${schema3.const})`;
    } else {
      yield `(${value2} === '${LiteralString.Escape(schema3.const)}')`;
    }
  }
  function* FromNever6(schema3, references, value2) {
    yield `false`;
  }
  function* FromNot8(schema3, references, value2) {
    const expression = CreateExpression(schema3.not, references, value2);
    yield `(!${expression})`;
  }
  function* FromNull6(schema3, references, value2) {
    yield `(${value2} === null)`;
  }
  function* FromNumber6(schema3, references, value2) {
    yield Policy.IsNumberLike(value2);
    if (IsNumber(schema3.exclusiveMaximum))
      yield `${value2} < ${schema3.exclusiveMaximum}`;
    if (IsNumber(schema3.exclusiveMinimum))
      yield `${value2} > ${schema3.exclusiveMinimum}`;
    if (IsNumber(schema3.maximum))
      yield `${value2} <= ${schema3.maximum}`;
    if (IsNumber(schema3.minimum))
      yield `${value2} >= ${schema3.minimum}`;
    if (IsNumber(schema3.multipleOf))
      yield `(${value2} % ${schema3.multipleOf}) === 0`;
  }
  function* FromObject13(schema3, references, value2) {
    yield Policy.IsObjectLike(value2);
    if (IsNumber(schema3.minProperties))
      yield `Object.getOwnPropertyNames(${value2}).length >= ${schema3.minProperties}`;
    if (IsNumber(schema3.maxProperties))
      yield `Object.getOwnPropertyNames(${value2}).length <= ${schema3.maxProperties}`;
    const knownKeys = Object.getOwnPropertyNames(schema3.properties);
    for (const knownKey of knownKeys) {
      const memberExpression = MemberExpression.Encode(value2, knownKey);
      const property = schema3.properties[knownKey];
      if (schema3.required && schema3.required.includes(knownKey)) {
        yield* Visit17(property, references, memberExpression);
        if (ExtendsUndefinedCheck(property) || IsAnyOrUnknown2(property))
          yield `('${knownKey}' in ${value2})`;
      } else {
        const expression = CreateExpression(property, references, memberExpression);
        yield Policy.IsExactOptionalProperty(value2, knownKey, expression);
      }
    }
    if (schema3.additionalProperties === false) {
      if (schema3.required && schema3.required.length === knownKeys.length) {
        yield `Object.getOwnPropertyNames(${value2}).length === ${knownKeys.length}`;
      } else {
        const keys = `[${knownKeys.map((key) => `'${key}'`).join(", ")}]`;
        yield `Object.getOwnPropertyNames(${value2}).every(key => ${keys}.includes(key))`;
      }
    }
    if (typeof schema3.additionalProperties === "object") {
      const expression = CreateExpression(schema3.additionalProperties, references, `${value2}[key]`);
      const keys = `[${knownKeys.map((key) => `'${key}'`).join(", ")}]`;
      yield `(Object.getOwnPropertyNames(${value2}).every(key => ${keys}.includes(key) || ${expression}))`;
    }
  }
  function* FromPromise8(schema3, references, value2) {
    yield `(typeof value === 'object' && typeof ${value2}.then === 'function')`;
  }
  function* FromRecord12(schema3, references, value2) {
    yield Policy.IsRecordLike(value2);
    if (IsNumber(schema3.minProperties))
      yield `Object.getOwnPropertyNames(${value2}).length >= ${schema3.minProperties}`;
    if (IsNumber(schema3.maxProperties))
      yield `Object.getOwnPropertyNames(${value2}).length <= ${schema3.maxProperties}`;
    const [patternKey, patternSchema] = Object.entries(schema3.patternProperties)[0];
    const variable = CreateVariable(`${new RegExp(patternKey)}`);
    const check1 = CreateExpression(patternSchema, references, "value");
    const check22 = IsSchema2(schema3.additionalProperties) ? CreateExpression(schema3.additionalProperties, references, value2) : schema3.additionalProperties === false ? "false" : "true";
    const expression = `(${variable}.test(key) ? ${check1} : ${check22})`;
    yield `(Object.entries(${value2}).every(([key, value]) => ${expression}))`;
  }
  function* FromRef12(schema3, references, value2) {
    const target = Deref(schema3, references);
    if (state.functions.has(schema3.$ref))
      return yield `${CreateFunctionName(schema3.$ref)}(${value2})`;
    yield* Visit17(target, references, value2);
  }
  function* FromRegExp5(schema3, references, value2) {
    const variable = CreateVariable(`${new RegExp(schema3.source, schema3.flags)};`);
    yield `(typeof ${value2} === 'string')`;
    if (IsNumber(schema3.maxLength))
      yield `${value2}.length <= ${schema3.maxLength}`;
    if (IsNumber(schema3.minLength))
      yield `${value2}.length >= ${schema3.minLength}`;
    yield `${variable}.test(${value2})`;
  }
  function* FromString6(schema3, references, value2) {
    yield `(typeof ${value2} === 'string')`;
    if (IsNumber(schema3.maxLength))
      yield `${value2}.length <= ${schema3.maxLength}`;
    if (IsNumber(schema3.minLength))
      yield `${value2}.length >= ${schema3.minLength}`;
    if (schema3.pattern !== undefined) {
      const variable = CreateVariable(`${new RegExp(schema3.pattern)};`);
      yield `${variable}.test(${value2})`;
    }
    if (schema3.format !== undefined) {
      yield `format('${schema3.format}', ${value2})`;
    }
  }
  function* FromSymbol6(schema3, references, value2) {
    yield `(typeof ${value2} === 'symbol')`;
  }
  function* FromTemplateLiteral7(schema3, references, value2) {
    yield `(typeof ${value2} === 'string')`;
    const variable = CreateVariable(`${new RegExp(schema3.pattern)};`);
    yield `${variable}.test(${value2})`;
  }
  function* FromThis11(schema3, references, value2) {
    yield `${CreateFunctionName(schema3.$ref)}(${value2})`;
  }
  function* FromTuple15(schema3, references, value2) {
    yield `Array.isArray(${value2})`;
    if (schema3.items === undefined)
      return yield `${value2}.length === 0`;
    yield `(${value2}.length === ${schema3.maxItems})`;
    for (let i = 0;i < schema3.items.length; i++) {
      const expression = CreateExpression(schema3.items[i], references, `${value2}[${i}]`);
      yield `${expression}`;
    }
  }
  function* FromUndefined6(schema3, references, value2) {
    yield `${value2} === undefined`;
  }
  function* FromUnion20(schema3, references, value2) {
    const expressions = schema3.anyOf.map((schema4) => CreateExpression(schema4, references, value2));
    yield `(${expressions.join(" || ")})`;
  }
  function* FromUint8Array5(schema3, references, value2) {
    yield `${value2} instanceof Uint8Array`;
    if (IsNumber(schema3.maxByteLength))
      yield `(${value2}.length <= ${schema3.maxByteLength})`;
    if (IsNumber(schema3.minByteLength))
      yield `(${value2}.length >= ${schema3.minByteLength})`;
  }
  function* FromUnknown5(schema3, references, value2) {
    yield "true";
  }
  function* FromVoid5(schema3, references, value2) {
    yield Policy.IsVoidLike(value2);
  }
  function* FromKind4(schema3, references, value2) {
    const instance = state.instances.size;
    state.instances.set(instance, schema3);
    yield `kind('${schema3[Kind]}', ${instance}, ${value2})`;
  }
  function* Visit17(schema3, references, value2, useHoisting = true) {
    const references_ = IsString(schema3.$id) ? [...references, schema3] : references;
    const schema_ = schema3;
    if (useHoisting && IsString(schema3.$id)) {
      const functionName = CreateFunctionName(schema3.$id);
      if (state.functions.has(functionName)) {
        return yield `${functionName}(${value2})`;
      } else {
        const functionCode = CreateFunction(functionName, schema3, references, "value", false);
        state.functions.set(functionName, functionCode);
        return yield `${functionName}(${value2})`;
      }
    }
    switch (schema_[Kind]) {
      case "Any":
        return yield* FromAny5(schema_, references_, value2);
      case "Array":
        return yield* FromArray16(schema_, references_, value2);
      case "AsyncIterator":
        return yield* FromAsyncIterator7(schema_, references_, value2);
      case "BigInt":
        return yield* FromBigInt6(schema_, references_, value2);
      case "Boolean":
        return yield* FromBoolean6(schema_, references_, value2);
      case "Constructor":
        return yield* FromConstructor8(schema_, references_, value2);
      case "Date":
        return yield* FromDate6(schema_, references_, value2);
      case "Function":
        return yield* FromFunction7(schema_, references_, value2);
      case "Integer":
        return yield* FromInteger6(schema_, references_, value2);
      case "Intersect":
        return yield* FromIntersect18(schema_, references_, value2);
      case "Iterator":
        return yield* FromIterator7(schema_, references_, value2);
      case "Literal":
        return yield* FromLiteral7(schema_, references_, value2);
      case "Never":
        return yield* FromNever6(schema_, references_, value2);
      case "Not":
        return yield* FromNot8(schema_, references_, value2);
      case "Null":
        return yield* FromNull6(schema_, references_, value2);
      case "Number":
        return yield* FromNumber6(schema_, references_, value2);
      case "Object":
        return yield* FromObject13(schema_, references_, value2);
      case "Promise":
        return yield* FromPromise8(schema_, references_, value2);
      case "Record":
        return yield* FromRecord12(schema_, references_, value2);
      case "Ref":
        return yield* FromRef12(schema_, references_, value2);
      case "RegExp":
        return yield* FromRegExp5(schema_, references_, value2);
      case "String":
        return yield* FromString6(schema_, references_, value2);
      case "Symbol":
        return yield* FromSymbol6(schema_, references_, value2);
      case "TemplateLiteral":
        return yield* FromTemplateLiteral7(schema_, references_, value2);
      case "This":
        return yield* FromThis11(schema_, references_, value2);
      case "Tuple":
        return yield* FromTuple15(schema_, references_, value2);
      case "Undefined":
        return yield* FromUndefined6(schema_, references_, value2);
      case "Union":
        return yield* FromUnion20(schema_, references_, value2);
      case "Uint8Array":
        return yield* FromUint8Array5(schema_, references_, value2);
      case "Unknown":
        return yield* FromUnknown5(schema_, references_, value2);
      case "Void":
        return yield* FromVoid5(schema_, references_, value2);
      default:
        if (!exports_type.Has(schema_[Kind]))
          throw new TypeCompilerUnknownTypeError(schema3);
        return yield* FromKind4(schema_, references_, value2);
    }
  }
  const state = {
    language: "javascript",
    functions: new Map,
    variables: new Map,
    instances: new Map
  };
  function CreateExpression(schema3, references, value2, useHoisting = true) {
    return `(${[...Visit17(schema3, references, value2, useHoisting)].join(" && ")})`;
  }
  function CreateFunctionName($id) {
    return `check_${Identifier.Encode($id)}`;
  }
  function CreateVariable(expression) {
    const variableName = `local_${state.variables.size}`;
    state.variables.set(variableName, `const ${variableName} = ${expression}`);
    return variableName;
  }
  function CreateFunction(name, schema3, references, value2, useHoisting = true) {
    const [newline, pad] = ["\n", (length) => "".padStart(length, " ")];
    const parameter = CreateParameter("value", "any");
    const returns = CreateReturns("boolean");
    const expression = [...Visit17(schema3, references, value2, useHoisting)].map((expression2) => `${pad(4)}${expression2}`).join(` &&${newline}`);
    return `function ${name}(${parameter})${returns} {${newline}${pad(2)}return (${newline}${expression}${newline}${pad(2)})\n}`;
  }
  function CreateParameter(name, type3) {
    const annotation = state.language === "typescript" ? `: ${type3}` : "";
    return `${name}${annotation}`;
  }
  function CreateReturns(type3) {
    return state.language === "typescript" ? `: ${type3}` : "";
  }
  function Build(schema3, references, options) {
    const functionCode = CreateFunction("check", schema3, references, "value");
    const parameter = CreateParameter("value", "any");
    const returns = CreateReturns("boolean");
    const functions = [...state.functions.values()];
    const variables = [...state.variables.values()];
    const checkFunction = IsString(schema3.$id) ? `return function check(${parameter})${returns} {\n  return ${CreateFunctionName(schema3.$id)}(value)\n}` : `return ${functionCode}`;
    return [...variables, ...functions, checkFunction].join("\n");
  }
  function Code(...args) {
    const defaults = { language: "javascript" };
    const [schema3, references, options] = args.length === 2 && IsArray(args[1]) ? [args[0], args[1], defaults] : args.length === 2 && !IsArray(args[1]) ? [args[0], [], args[1]] : args.length === 3 ? [args[0], args[1], args[2]] : args.length === 1 ? [args[0], [], defaults] : [null, [], defaults];
    state.language = options.language;
    state.variables.clear();
    state.functions.clear();
    state.instances.clear();
    if (!IsSchema2(schema3))
      throw new TypeCompilerTypeGuardError(schema3);
    for (const schema4 of references)
      if (!IsSchema2(schema4))
        throw new TypeCompilerTypeGuardError(schema4);
    return Build(schema3, references, options);
  }
  TypeCompiler2.Code = Code;
  function Compile(schema3, references = []) {
    const generatedCode = Code(schema3, references, { language: "javascript" });
    const compiledFunction = globalThis.Function("kind", "format", "hash", generatedCode);
    const instances = new Map(state.instances);
    function typeRegistryFunction(kind, instance, value2) {
      if (!exports_type.Has(kind) || !instances.has(instance))
        return false;
      const checkFunc = exports_type.Get(kind);
      const schema4 = instances.get(instance);
      return checkFunc(schema4, value2);
    }
    function formatRegistryFunction(format, value2) {
      if (!exports_format.Has(format))
        return false;
      const checkFunc = exports_format.Get(format);
      return checkFunc(value2);
    }
    function hashFunction(value2) {
      return Hash(value2);
    }
    const checkFunction = compiledFunction(typeRegistryFunction, formatRegistryFunction, hashFunction);
    return new TypeCheck(schema3, references, checkFunction, generatedCode);
  }
  TypeCompiler2.Compile = Compile;
})(TypeCompiler || (TypeCompiler = {}));
// node_modules/elysia/dist/bun/index.js
var L1 = Object.create;
var { getPrototypeOf: T1, defineProperty: k2, getOwnPropertyNames: E1 } = Object;
var q1 = Object.prototype.hasOwnProperty;
var U2 = ($, W, X) => {
  X = $ != null ? L1(T1($)) : {};
  let Z = W || !$ || !$.__esModule ? k2(X, "default", { value: $, enumerable: true }) : X;
  for (let j of E1($))
    if (!q1.call(Z, j))
      k2(Z, j, { get: () => $[j], enumerable: true });
  return Z;
};
var H1 = ($, W) => () => (W || $((W = { exports: {} }).exports, W), W.exports);
var o0 = H1((G8, $1) => {
  var o2 = 12, w3 = 0, N2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 7, 7, 10, 9, 9, 9, 11, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 24, 36, 48, 60, 72, 84, 96, 0, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 127, 63, 63, 63, 0, 31, 15, 15, 15, 7, 7, 7];
  function _3($) {
    var W = $.indexOf("%");
    if (W === -1)
      return $;
    var X = $.length, Z = "", j = 0, J = 0, Y = W, G = o2;
    while (W > -1 && W < X) {
      var K = e2($[W + 1], 4), B = e2($[W + 2], 0), U = K | B, w = N2[U];
      if (G = N2[256 + G + w], J = J << 6 | U & N2[364 + w], G === o2)
        Z += $.slice(j, Y), Z += J <= 65535 ? String.fromCharCode(J) : String.fromCharCode(55232 + (J >> 10), 56320 + (J & 1023)), J = 0, j = W + 3, W = Y = $.indexOf("%", j);
      else if (G === w3)
        return null;
      else {
        if (W += 3, W < X && $.charCodeAt(W) === 37)
          continue;
        return null;
      }
    }
    return Z + $.slice(j);
  }
  var F3 = { "0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, a: 10, A: 10, b: 11, B: 11, c: 12, C: 12, d: 13, D: 13, e: 14, E: 14, f: 15, F: 15 };
  function e2($, W) {
    var X = F3[$];
    return X === undefined ? 255 : X << W;
  }
  $1.exports = _3;
});
var T0 = ($, W) => {
  let X = W?.length ? {} : null;
  if (X)
    for (let Z of W)
      X[Z.part.charCodeAt(0)] = Z;
  return { part: $, store: null, inert: X, params: null, wildcardStore: null };
};
var v2 = ($, W) => ({ ...$, part: W });
var u2 = ($) => ({ name: $, store: null, inert: null });

class M0 {
  root = {};
  history = [];
  static regex = { static: /:.+?(?=\/|$)/, params: /:.+?(?=\/|$)/g, optionalParams: /:.+?\?(?=\/|$)/g };
  add($, W, X, { ignoreError: Z = false, ignoreHistory: j = false } = {}) {
    if (typeof W !== "string")
      throw new TypeError("Route path must be a string");
    if (W === "")
      W = "/";
    else if (W[0] !== "/")
      W = `/${W}`;
    let J = W[W.length - 1] === "*", Y = W.match(M0.regex.optionalParams);
    if (Y) {
      let w = W.replaceAll("?", "");
      this.add($, w, X, { ignoreError: Z });
      for (let F = 0;F < Y.length; F++) {
        let Q = W.replace("/" + Y[F], "");
        this.add($, Q, X, { ignoreError: true });
      }
      return X;
    }
    if (Y)
      W = W.replaceAll("?", "");
    if (this.history.find(([w, F, Q]) => w === $ && F === W))
      return X;
    if (J || Y && W.charCodeAt(W.length - 1) === 63)
      W = W.slice(0, -1);
    if (!j)
      this.history.push([$, W, X]);
    let G = W.split(M0.regex.static), K = W.match(M0.regex.params) || [];
    if (G[G.length - 1] === "")
      G.pop();
    let B;
    if (!this.root[$])
      B = this.root[$] = T0("/");
    else
      B = this.root[$];
    let U = 0;
    for (let w = 0;w < G.length; ++w) {
      let F = G[w];
      if (w > 0) {
        let Q = K[U++].slice(1);
        if (B.params === null)
          B.params = u2(Q);
        else if (B.params.name !== Q)
          if (Z)
            return X;
          else
            throw new Error(`Cannot create route "${W}" with parameter "${Q}" because a route already exists with a different parameter name ("${B.params.name}") in the same location`);
        let z = B.params;
        if (z.inert === null) {
          B = z.inert = T0(F);
          continue;
        }
        B = z.inert;
      }
      for (let Q = 0;; ) {
        if (Q === F.length) {
          if (Q < B.part.length) {
            let z = v2(B, B.part.slice(Q));
            Object.assign(B, T0(F, [z]));
          }
          break;
        }
        if (Q === B.part.length) {
          if (B.inert === null)
            B.inert = {};
          let z = B.inert[F.charCodeAt(Q)];
          if (z) {
            B = z, F = F.slice(Q), Q = 0;
            continue;
          }
          let D = T0(F.slice(Q));
          B.inert[F.charCodeAt(Q)] = D, B = D;
          break;
        }
        if (F[Q] !== B.part[Q]) {
          let z = v2(B, B.part.slice(Q)), D = T0(F.slice(Q));
          Object.assign(B, T0(B.part.slice(0, Q), [z, D])), B = D;
          break;
        }
        ++Q;
      }
    }
    if (U < K.length) {
      let w = K[U].slice(1);
      if (B.params === null)
        B.params = u2(w);
      else if (B.params.name !== w)
        if (Z)
          return X;
        else
          throw new Error(`Cannot create route "${W}" with parameter "${w}" because a route already exists with a different parameter name ("${B.params.name}") in the same location`);
      if (B.params.store === null)
        B.params.store = X;
      return B.params.store;
    }
    if (J) {
      if (B.wildcardStore === null)
        B.wildcardStore = X;
      return B.wildcardStore;
    }
    if (B.store === null)
      B.store = X;
    return B.store;
  }
  find($, W) {
    let X = this.root[$];
    if (!X)
      return null;
    return w2(W, W.length, X, 0);
  }
}
var w2 = ($, W, X, Z) => {
  let j = X.part, J = j.length, Y = Z + J;
  if (J > 1) {
    if (Y > W)
      return null;
    if (J < 15) {
      for (let G = 1, K = Z + 1;G < J; ++G, ++K)
        if (j.charCodeAt(G) !== $.charCodeAt(K))
          return null;
    } else if ($.slice(Z, Y) !== j)
      return null;
  }
  if (Y === W) {
    if (X.store !== null)
      return { store: X.store, params: {} };
    if (X.wildcardStore !== null)
      return { store: X.wildcardStore, params: { "*": "" } };
    return null;
  }
  if (X.inert !== null) {
    let G = X.inert[$.charCodeAt(Y)];
    if (G !== undefined) {
      let K = w2($, W, G, Y);
      if (K !== null)
        return K;
    }
  }
  if (X.params !== null) {
    let { store: G, name: K, inert: B } = X.params, U = $.indexOf("/", Y);
    if (U !== Y) {
      if (U === -1 || U >= W) {
        if (G !== null) {
          let w = {};
          return w[K] = $.substring(Y, W), { store: G, params: w };
        }
      } else if (B !== null) {
        let w = w2($, W, B, U);
        if (w !== null)
          return w.params[K] = $.substring(Y, U), w;
      }
    }
  }
  if (X.wildcardStore !== null)
    return { store: X.wildcardStore, params: { "*": $.substring(Y, W) } };
  return null;
};
var E0 = ($) => {
  let W = typeof $ === "object" ? $.fn.toString() : typeof $ === "string" ? $.toString() : $, X = W.indexOf(")");
  if (W.charCodeAt(X + 2) === 61 && W.charCodeAt(X + 5) !== 123)
    return true;
  return W.includes("return");
};
var R1 = ($) => {
  if ($.startsWith("async"))
    $ = $.slice(5);
  $ = $.trimStart();
  let W = -1;
  if ($.charCodeAt(0) === 40) {
    if (W = $.indexOf("=>", $.indexOf(")")), W !== -1) {
      let j = W;
      while (j > 0)
        if ($.charCodeAt(--j) === 41)
          break;
      let J = $.slice(W + 2);
      if (J.charCodeAt(0) === 32)
        J = J.trimStart();
      return [$.slice(1, j), J, { isArrowReturn: J.charCodeAt(0) !== 123 }];
    }
  }
  if ($.startsWith("function")) {
    W = $.indexOf("(");
    let j = $.indexOf(")");
    return [$.slice(W + 1, j), $.slice(j + 2), { isArrowReturn: false }];
  }
  let X = $.indexOf("(");
  if (X !== -1) {
    let j = $.indexOf("\n", 2), J = $.slice(0, j), Y = J.lastIndexOf(")") + 1, G = $.slice(j + 1);
    return [J.slice(X, Y), "{" + G, { isArrowReturn: false }];
  }
  let Z = $.split("\n", 2);
  return [Z[0], Z[1], { isArrowReturn: false }];
};
var b1 = ($) => {
  let W = $.indexOf("{");
  if (W === -1)
    return [-1, 0];
  let X = W + 1, Z = 1;
  for (;X < $.length; X++) {
    let j = $.charCodeAt(X);
    if (j === 123)
      Z++;
    else if (j === 125)
      Z--;
    if (Z === 0)
      break;
  }
  if (Z !== 0)
    return [0, $.length];
  return [W, X + 1];
};
var x1 = ($) => {
  let W = $.lastIndexOf("}");
  if (W === -1)
    return [-1, 0];
  let X = W - 1, Z = 1;
  for (;X >= 0; X--) {
    let j = $.charCodeAt(X);
    if (j === 125)
      Z++;
    else if (j === 123)
      Z--;
    if (Z === 0)
      break;
  }
  if (Z !== 0)
    return [-1, 0];
  return [X, W + 1];
};
var h2 = ($) => {
  while (true) {
    let W = $.indexOf(":");
    if (W === -1)
      break;
    let X = $.indexOf(",", W);
    if (X === -1)
      X = $.indexOf("}", W) - 1;
    if (X === -2)
      X = $.length;
    $ = $.slice(0, W) + $.slice(X);
  }
  return $;
};
var m2 = ($) => {
  let W = false;
  if ($.charCodeAt(0) === 40)
    $ = $.slice(1, -1);
  if ($.charCodeAt(0) === 123)
    W = true, $ = $.slice(1, -1);
  $ = $.replace(/( |\t|\n)/g, "").trim();
  let X = [];
  while (true) {
    let [j, J] = b1($);
    if (j === -1)
      break;
    if (X.push($.slice(0, j - 1)), $.charCodeAt(J) === 44)
      J++;
    $ = $.slice(J);
  }
  if ($ = h2($), $)
    X = X.concat($.split(","));
  let Z = [];
  for (let j of X) {
    if (j.indexOf(",") === -1) {
      Z.push(j);
      continue;
    }
    for (let J of j.split(","))
      Z.push(J.trim());
  }
  return X = Z, { hasParenthesis: W, parameters: X };
};
var g1 = ($, W) => {
  let { parameters: X, hasParenthesis: Z } = m2($);
  if (!W.query && X.includes("query"))
    W.query = true;
  if (!W.headers && X.includes("headers"))
    W.headers = true;
  if (!W.body && X.includes("body"))
    W.body = true;
  if (!W.cookie && X.includes("cookie"))
    W.cookie = true;
  if (!W.set && X.includes("set"))
    W.set = true;
  if (!W.server && X.includes("server"))
    W.server = true;
  if (Z)
    return `{ ${X.join(", ")} }`;
  return X.join(", ");
};
var f1 = ($, W, X) => {
  let Z = W.indexOf($ + "\n", X), j = W.indexOf($ + "\t", X), J = W.indexOf($ + ",", X), Y = W.indexOf($ + ";", X), G = W.indexOf($ + " ", X);
  return [Z, j, J, Y, G].filter((K) => K > 0).sort((K, B) => K - B)[0] || -1;
};
var d2 = ($, W, X = 0) => {
  if (X > 5)
    return [];
  let Z = [], j = W;
  while (true) {
    let J = f1(" = " + $, j);
    if (J === -1) {
      let K = j.indexOf(" = " + $);
      if (K + 3 + $.length !== j.length)
        break;
      J = K;
    }
    let Y = j.slice(0, J), G = Y.slice(Y.lastIndexOf(" ") + 1);
    if (G === "}") {
      let [K, B] = x1(Y);
      Z.push(h2(j.slice(K, B))), j = j.slice(J + 3 + $.length);
      continue;
    }
    while (G.charCodeAt(0) === 44)
      G = G.slice(1);
    while (G.charCodeAt(0) === 9)
      G = G.slice(1);
    if (!G.includes("("))
      Z.push(G);
    j = j.slice(J + 3 + $.length);
  }
  for (let J of Z) {
    if (J.charCodeAt(0) === 123)
      continue;
    let Y = d2(J, W);
    if (Y.length > 0)
      Z.push(...Y);
  }
  return Z;
};
var y1 = ($) => {
  if (!$)
    return;
  if ($.charCodeAt(0) !== 123)
    return $;
  if ($ = $.slice(2, -2), !$.includes(",")) {
    if ($.includes("..."))
      return $.slice($.indexOf("...") + 3);
    return;
  }
  let X = $.indexOf("...");
  if (X === -1)
    return;
  return $.slice(X + 3).trimEnd();
};
var k1 = ($, W, X) => {
  let Z = (j, J) => $.includes(J + "." + j) || $.includes(J + '["' + j + '"]') || $.includes(J + "['" + j + "']");
  for (let j of W) {
    if (!j)
      continue;
    if (j.charCodeAt(0) === 123) {
      let J = m2(j).parameters;
      if (!X.query && J.includes("query"))
        X.query = true;
      if (!X.headers && J.includes("headers"))
        X.headers = true;
      if (!X.body && J.includes("body"))
        X.body = true;
      if (!X.cookie && J.includes("cookie"))
        X.cookie = true;
      if (!X.set && J.includes("set"))
        X.set = true;
      if (!X.query && J.includes("server"))
        X.server = true;
      continue;
    }
    if (!X.query && Z("query", j))
      X.query = true;
    if ($.includes("return " + j) || $.includes("return " + j + ".query"))
      X.query = true;
    if (!X.headers && Z("headers", j))
      X.headers = true;
    if (!X.body && Z("body", j))
      X.body = true;
    if (!X.cookie && Z("cookie", j))
      X.cookie = true;
    if (!X.set && Z("set", j))
      X.set = true;
    if (!X.server && Z("server", j))
      X.server = true;
    if (X.query && X.headers && X.body && X.cookie && X.set && X.server)
      break;
  }
  return W;
};
var v1 = ($, W, X) => {
  try {
    let Z = new RegExp(`(?:\\w)\\((?:.*)?${$}`, "gs");
    Z.test(W);
    let j = W.charCodeAt(Z.lastIndex);
    if (j === 41 || j === 44)
      return X.query = true, X.headers = true, X.body = true, X.cookie = true, X.set = true, X.server = true, true;
    return false;
  } catch (Z) {
    return console.log("[Sucrose] warning: unexpected isContextPassToFunction error, you may continue development as usual but please report the following to maintainers:"), console.log("--- body ---"), console.log(W), console.log("--- context ---"), console.log($), true;
  }
};
var r0 = ($, W = { query: false, headers: false, body: false, cookie: false, set: false, server: false }) => {
  let X = [];
  if ($.handler && typeof $.handler === "function")
    X.push($.handler);
  if ($.request?.length)
    X.push(...$.request);
  if ($.beforeHandle?.length)
    X.push(...$.beforeHandle);
  if ($.parse?.length)
    X.push(...$.parse);
  if ($.error?.length)
    X.push(...$.error);
  if ($.transform?.length)
    X.push(...$.transform);
  if ($.afterHandle?.length)
    X.push(...$.afterHandle);
  if ($.mapResponse?.length)
    X.push(...$.mapResponse);
  if ($.afterResponse?.length)
    X.push(...$.afterResponse);
  for (let Z of X) {
    if (!Z)
      continue;
    let j = "fn" in Z ? Z.fn : Z, [J, Y, { isArrowReturn: G }] = R1(j.toString()), K = g1(J, W), B = y1(K);
    if (B) {
      let U = d2(B, Y);
      if (U.splice(0, -1, B), !v1(B, Y, W))
        k1(Y, U, W);
      if (!W.query && Y.includes("return " + B + ".query"))
        W.query = true;
    }
    if (W.query && W.headers && W.body && W.cookie && W.set && W.server)
      break;
  }
  return W;
};
var s0 = { date: i2, time: _2(true), "date-time": c2(true), "iso-time": _2(false), "iso-date-time": c2(false), duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/, uri: i1, "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i, url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu, email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i, hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/, ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i, regex: e1, uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/, "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/, byte: n1, int32: { type: "number", validate: s1 }, int64: { type: "number", validate: a1 }, float: { type: "number", validate: p2 }, double: { type: "number", validate: p2 }, password: true, binary: true };
function u1($) {
  return $ % 4 === 0 && ($ % 100 !== 0 || $ % 400 === 0);
}
var h1 = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
var m1 = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function i2($) {
  let W = h1.exec($);
  if (!W)
    return false;
  let X = +W[1], Z = +W[2], j = +W[3];
  return Z >= 1 && Z <= 12 && j >= 1 && j <= (Z === 2 && u1(X) ? 29 : m1[Z]);
}
var d1 = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
function _2($) {
  return function W(X) {
    let Z = d1.exec(X);
    if (!Z)
      return false;
    let j = +Z[1], J = +Z[2], Y = +Z[3], G = Z[4], K = Z[5] === "-" ? -1 : 1, B = +(Z[6] || 0), U = +(Z[7] || 0);
    if (B > 23 || U > 59 || $ && !G)
      return false;
    if (j <= 23 && J <= 59 && Y < 60)
      return true;
    let w = J - U * K, F = j - B * K - (w < 0 ? 1 : 0);
    return (F === 23 || F === -1) && (w === 59 || w === -1) && Y < 61;
  };
}
var c1 = /t|\s/i;
function c2($) {
  let W = _2($);
  return function X(Z) {
    let j = Z.split(c1);
    return j.length === 2 && i2(j[0]) && W(j[1]);
  };
}
var l1 = /\/|:/;
var p1 = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
function i1($) {
  return l1.test($) && p1.test($);
}
var l2 = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
function n1($) {
  return l2.lastIndex = 0, l2.test($);
}
var t1 = -2147483648;
var r1 = 2147483647;
function s1($) {
  return Number.isInteger($) && $ <= r1 && $ >= t1;
}
function a1($) {
  return Number.isInteger($);
}
function p2() {
  return true;
}
var o1 = /[^\\]\\Z/;
function e1($) {
  if (o1.test($))
    return false;
  try {
    return new RegExp($), true;
  } catch (W) {
    return false;
  }
}
var r2 = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/;
var s2 = /(?:Sun|Mon|Tue|Wed|Thu|Fri|Sat)\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{2}\s\d{4}\s\d{2}:\d{2}:\d{2}\sGMT(?:\+|-)\d{4}\s\([^)]+\)/;
var a2 = /^(?:(?:(?:(?:0?[1-9]|[12][0-9]|3[01])[/\s-](?:0?[1-9]|1[0-2])[/\s-](?:19|20)\d{2})|(?:(?:19|20)\d{2}[/\s-](?:0?[1-9]|1[0-2])[/\s-](?:0?[1-9]|[12][0-9]|3[01]))))(?:\s(?:1[012]|0?[1-9]):[0-5][0-9](?::[0-5][0-9])?(?:\s[AP]M)?)?$/;
var W3 = s0.date;
var X3 = s0["date-time"];
if (!exports_format.Has("date"))
  TypeSystem.Format("date", ($) => {
    let W = $.replace(/"/g, "");
    if (r2.test(W) || s2.test(W) || a2.test(W) || W3(W)) {
      let X = new Date(W);
      if (!Number.isNaN(X.getTime()))
        return true;
    }
    return false;
  });
if (!exports_format.Has("date-time"))
  TypeSystem.Format("date-time", ($) => {
    let W = $.replace(/"/g, "");
    if (r2.test(W) || s2.test(W) || a2.test(W) || X3(W)) {
      let X = new Date(W);
      if (!Number.isNaN(X.getTime()))
        return true;
    }
    return false;
  });
Object.entries(s0).forEach(($) => {
  let [W, X] = $;
  if (!exports_format.Has(W)) {
    if (X instanceof RegExp)
      TypeSystem.Format(W, (Z) => X.test(Z));
    else if (typeof X === "function")
      TypeSystem.Format(W, X);
  }
});
var V = Object.assign({}, Type);
var t2 = ($) => {
  if (typeof $ === "string")
    switch ($.slice(-1)) {
      case "k":
        return +$.slice(0, $.length - 1) * 1024;
      case "m":
        return +$.slice(0, $.length - 1) * 1048576;
      default:
        return +$;
    }
  return $;
};
var F2 = ($, W) => {
  if (!(W instanceof Blob))
    return false;
  if ($.minSize && W.size < t2($.minSize))
    return false;
  if ($.maxSize && W.size > t2($.maxSize))
    return false;
  if ($.extension)
    if (typeof $.extension === "string") {
      if (!W.type.startsWith($.extension))
        return false;
    } else {
      for (let X = 0;X < $.extension.length; X++)
        if (W.type.startsWith($.extension[X]))
          return true;
      return false;
    }
  return true;
};
var Z3 = exports_type.Get("Files") ?? TypeSystem.Type("File", F2);
var j3 = exports_type.Get("Files") ?? TypeSystem.Type("Files", ($, W) => {
  if (!Array.isArray(W))
    return F2($, W);
  if ($.minItems && W.length < $.minItems)
    return false;
  if ($.maxItems && W.length > $.maxItems)
    return false;
  for (let X = 0;X < W.length; X++)
    if (!F2($, W[X]))
      return false;
  return true;
});
if (!exports_format.Has("numeric"))
  exports_format.Set("numeric", ($) => !!$ && !isNaN(+$));
if (!exports_format.Has("boolean"))
  exports_format.Set("boolean", ($) => $ === "true" || $ === "false");
if (!exports_format.Has("ObjectString"))
  exports_format.Set("ObjectString", ($) => {
    let W = $.charCodeAt(0);
    if (W === 9 || W === 10 || W === 32)
      W = $.trimStart().charCodeAt(0);
    if (W !== 123 && W !== 91)
      return false;
    try {
      return JSON.parse($), true;
    } catch {
      return false;
    }
  });
if (!exports_format.Has("ArrayString"))
  exports_format.Set("ArrayString", ($) => {
    let W = $.charCodeAt(0);
    if (W === 9 || W === 10 || W === 32)
      W = $.trimStart().charCodeAt(0);
    if (W !== 123 && W !== 91)
      return false;
    try {
      return JSON.parse($), true;
    } catch {
      return false;
    }
  });
exports_type.Set("UnionEnum", ($, W) => {
  return (typeof W === "number" || typeof W === "string" || W === null) && $.enum.includes(W);
});
var X0 = { Numeric: ($) => {
  let W = Type.Number($);
  return V.Transform(V.Union([V.String({ format: "numeric", default: 0 }), V.Number($)], $)).Decode((X) => {
    let Z = +X;
    if (isNaN(Z))
      return X;
    if ($ && !exports_value2.Check(W, Z))
      throw new q("property", W, Z);
    return Z;
  }).Encode((X) => X);
}, Date: ($) => {
  let W = Type.Date($);
  return V.Transform(V.Union([Type.Date($), V.String({ format: "date", default: new Date().toISOString() }), V.String({ format: "date-time", default: new Date().toISOString() })], $)).Decode((X) => {
    if (X instanceof Date)
      return X;
    let Z = new Date(X);
    if (!exports_value2.Check(W, Z))
      throw new q("property", W, Z);
    return Z;
  }).Encode((X) => {
    if (typeof X === "string")
      return new Date(X);
    return X;
  });
}, BooleanString: ($) => {
  let W = Type.Boolean($);
  return V.Transform(V.Union([V.String({ format: "boolean", default: false }), V.Boolean($)], $)).Decode((X) => {
    if (typeof X === "string")
      return X === "true";
    if ($ && !exports_value2.Check(W, X))
      throw new q("property", W, X);
    return X;
  }).Encode((X) => X);
}, ObjectString: ($, W) => {
  let X = V.Object($, W), Z = JSON.stringify(exports_value2.Create(X)), j;
  try {
    j = TypeCompiler.Compile(X);
  } catch {
  }
  return V.Transform(V.Union([V.String({ format: "ObjectString", default: Z }), X])).Decode((J) => {
    if (typeof J === "string") {
      if (J.charCodeAt(0) !== 123)
        throw new q("property", X, J);
      try {
        J = JSON.parse(J);
      } catch {
        throw new q("property", X, J);
      }
      if (j) {
        if (!j.Check(J))
          throw new q("property", X, J);
        return j.Decode(J);
      }
      if (!exports_value2.Check(X, J))
        throw new q("property", X, J);
      return exports_value2.Decode(X, J);
    }
    return J;
  }).Encode((J) => {
    if (typeof J === "string")
      try {
        J = JSON.parse(J);
      } catch {
        throw new q("property", X, J);
      }
    if (!exports_value2.Check(X, J))
      throw new q("property", X, J);
    return JSON.stringify(J);
  });
}, ArrayString: ($ = {}, W) => {
  let X = V.Array($, W), Z = JSON.stringify(exports_value2.Create(X)), j;
  try {
    j = TypeCompiler.Compile(X);
  } catch {
  }
  return V.Transform(V.Union([V.String({ format: "ArrayString", default: Z }), X])).Decode((J) => {
    if (typeof J === "string") {
      if (J.charCodeAt(0) !== 91)
        throw new q("property", X, J);
      try {
        J = JSON.parse(J);
      } catch {
        throw new q("property", X, J);
      }
      if (j) {
        if (!j.Check(J))
          throw new q("property", X, J);
        return j.Decode(J);
      }
      if (!exports_value2.Check(X, J))
        throw new q("property", X, J);
      return exports_value2.Decode(X, J);
    }
    return J;
  }).Encode((J) => {
    if (typeof J === "string")
      try {
        J = JSON.parse(J);
      } catch {
        throw new q("property", X, J);
      }
    if (!exports_value2.Check(X, J))
      throw new q("property", X, J);
    return JSON.stringify(J);
  });
}, File: Z3, Files: ($ = {}) => V.Transform(j3($)).Decode((W) => {
  if (Array.isArray(W))
    return W;
  return [W];
}).Encode((W) => W), Nullable: ($) => V.Union([$, V.Null()]), MaybeEmpty: ($) => V.Union([$, V.Null(), V.Undefined()]), Cookie: ($, { domain: W, expires: X, httpOnly: Z, maxAge: j, path: J, priority: Y, sameSite: G, secure: K, secrets: B, sign: U, ...w } = {}) => {
  let F = V.Object($, w);
  return F.config = { domain: W, expires: X, httpOnly: Z, maxAge: j, path: J, priority: Y, sameSite: G, secure: K, secrets: B, sign: U }, F;
}, UnionEnum: ($, W = {}) => {
  let X = $.every((Z) => typeof Z === "string") ? { type: "string" } : $.every((Z) => typeof Z === "number") ? { type: "number" } : $.every((Z) => Z === null) ? { type: "null" } : {};
  if ($.some((Z) => typeof Z === "object" && Z !== null))
    throw new Error("This type does not support objects or arrays");
  return { default: $[0], ...W, [Kind]: "UnionEnum", ...X, enum: $ };
} };
V.BooleanString = X0.BooleanString;
V.ObjectString = X0.ObjectString;
V.ArrayString = X0.ArrayString;
V.Numeric = X0.Numeric;
V.File = ($ = {}) => X0.File({ default: "File", ...$, extension: $?.type, type: "string", format: "binary" });
V.Files = ($ = {}) => X0.Files({ ...$, elysiaMeta: "Files", default: "Files", extension: $?.type, type: "array", items: { ...$, default: "Files", type: "string", format: "binary" } });
V.Nullable = ($) => X0.Nullable($);
V.MaybeEmpty = X0.MaybeEmpty;
V.Cookie = X0.Cookie;
V.Date = X0.Date;
V.UnionEnum = X0.UnionEnum;
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
var z2 = Q3;
var D2 = Y3;
var J3 = Object.prototype.toString;
var a0 = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function Q3($, W) {
  if (typeof $ !== "string")
    throw new TypeError("argument str must be a string");
  var X = {}, Z = W || {}, j = Z.decode || G3, J = 0;
  while (J < $.length) {
    var Y = $.indexOf("=", J);
    if (Y === -1)
      break;
    var G = $.indexOf(";", J);
    if (G === -1)
      G = $.length;
    else if (G < Y) {
      J = $.lastIndexOf(";", Y - 1) + 1;
      continue;
    }
    var K = $.slice(J, Y).trim();
    if (X[K] === undefined) {
      var B = $.slice(Y + 1, G).trim();
      if (B.charCodeAt(0) === 34)
        B = B.slice(1, -1);
      X[K] = U3(B, j);
    }
    J = G + 1;
  }
  return X;
}
function Y3($, W, X) {
  var Z = X || {}, j = Z.encode || B3;
  if (typeof j !== "function")
    throw new TypeError("option encode is invalid");
  if (!a0.test($))
    throw new TypeError("argument name is invalid");
  var J = j(W);
  if (J && !a0.test(J))
    throw new TypeError("argument val is invalid");
  var Y = $ + "=" + J;
  if (Z.maxAge != null) {
    var G = Z.maxAge - 0;
    if (isNaN(G) || !isFinite(G))
      throw new TypeError("option maxAge is invalid");
    Y += "; Max-Age=" + Math.floor(G);
  }
  if (Z.domain) {
    if (!a0.test(Z.domain))
      throw new TypeError("option domain is invalid");
    Y += "; Domain=" + Z.domain;
  }
  if (Z.path) {
    if (!a0.test(Z.path))
      throw new TypeError("option path is invalid");
    Y += "; Path=" + Z.path;
  }
  if (Z.expires) {
    var K = Z.expires;
    if (!K3(K) || isNaN(K.valueOf()))
      throw new TypeError("option expires is invalid");
    Y += "; Expires=" + K.toUTCString();
  }
  if (Z.httpOnly)
    Y += "; HttpOnly";
  if (Z.secure)
    Y += "; Secure";
  if (Z.partitioned)
    Y += "; Partitioned";
  if (Z.priority) {
    var B = typeof Z.priority === "string" ? Z.priority.toLowerCase() : Z.priority;
    switch (B) {
      case "low":
        Y += "; Priority=Low";
        break;
      case "medium":
        Y += "; Priority=Medium";
        break;
      case "high":
        Y += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (Z.sameSite) {
    var U = typeof Z.sameSite === "string" ? Z.sameSite.toLowerCase() : Z.sameSite;
    switch (U) {
      case true:
        Y += "; SameSite=Strict";
        break;
      case "lax":
        Y += "; SameSite=Lax";
        break;
      case "strict":
        Y += "; SameSite=Strict";
        break;
      case "none":
        Y += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return Y;
}
function G3($) {
  return $.indexOf("%") !== -1 ? decodeURIComponent($) : $;
}
function B3($) {
  return encodeURIComponent($);
}
function K3($) {
  return J3.call($) === "[object Date]" || $ instanceof Date;
}
function U3($, W) {
  try {
    return W($);
  } catch (X) {
    return $;
  }
}
var X1 = U2(o0(), 1);

class w0 {
  $;
  W;
  X;
  constructor($, W, X = {}) {
    this.name = $;
    this.jar = W;
    this.initial = X;
  }
  get cookie() {
    return this.jar[this.name] ?? this.initial;
  }
  set cookie($) {
    if (!(this.name in this.jar))
      this.jar[this.name] = this.initial;
    this.jar[this.name] = $;
  }
  get setCookie() {
    if (!(this.name in this.jar))
      this.jar[this.name] = this.initial;
    return this.jar[this.name];
  }
  set setCookie($) {
    this.cookie = $;
  }
  get value() {
    return this.cookie.value;
  }
  set value($) {
    this.setCookie.value = $;
  }
  get expires() {
    return this.cookie.expires;
  }
  set expires($) {
    this.setCookie.expires = $;
  }
  get maxAge() {
    return this.cookie.maxAge;
  }
  set maxAge($) {
    this.setCookie.maxAge = $;
  }
  get domain() {
    return this.cookie.domain;
  }
  set domain($) {
    this.setCookie.domain = $;
  }
  get path() {
    return this.cookie.path;
  }
  set path($) {
    this.setCookie.path = $;
  }
  get secure() {
    return this.cookie.secure;
  }
  set secure($) {
    this.setCookie.secure = $;
  }
  get httpOnly() {
    return this.cookie.httpOnly;
  }
  set httpOnly($) {
    this.setCookie.httpOnly = $;
  }
  get sameSite() {
    return this.cookie.sameSite;
  }
  set sameSite($) {
    this.setCookie.sameSite = $;
  }
  get priority() {
    return this.cookie.priority;
  }
  set priority($) {
    this.setCookie.priority = $;
  }
  get partitioned() {
    return this.cookie.partitioned;
  }
  set partitioned($) {
    this.setCookie.partitioned = $;
  }
  get secrets() {
    return this.cookie.secrets;
  }
  set secrets($) {
    this.setCookie.secrets = $;
  }
  update($) {
    return this.setCookie = Object.assign(this.cookie, typeof $ === "function" ? $(this.cookie) : $), this;
  }
  set($) {
    return this.setCookie = Object.assign({ ...this.initial, value: this.value }, typeof $ === "function" ? $(this.cookie) : $), this;
  }
  remove() {
    if (this.value === undefined)
      return;
    return this.set({ expires: new Date(0), maxAge: 0, value: "" }), this;
  }
  toString() {
    return typeof this.value === "object" ? JSON.stringify(this.value) : this.value?.toString() ?? "";
  }
}
var W1 = ($, W, X) => {
  if (!$.cookie)
    $.cookie = {};
  return new Proxy(W, { get(Z, j) {
    if (j in W)
      return new w0(j, $.cookie, Object.assign({}, X ?? {}, W[j]));
    return new w0(j, $.cookie, Object.assign({}, X));
  } });
};
var e0 = async ($, W, { secrets: X, sign: Z, ...j } = {}) => {
  if (!W)
    return W1($, {}, j);
  let J = typeof X === "string";
  if (Z && Z !== true && !Array.isArray(Z))
    Z = [Z];
  let Y = {}, G = z2(W);
  for (let [K, B] of Object.entries(G)) {
    let U = X1.default(B);
    if (Z === true || Z?.includes(K)) {
      if (!X)
        throw new Error("No secret is provided to cookie plugin");
      if (J) {
        let w = await P2(U, X);
        if (w === false)
          throw new v0(K);
        U = w;
      } else {
        let w = true;
        for (let F = 0;F < X.length; F++) {
          let Q = await P2(U, X[F]);
          if (Q !== false) {
            w = true, U = Q;
            break;
          }
        }
        if (!w)
          throw new v0(K);
      }
    }
    Y[K] = { value: U };
  }
  return W1($, Y, j);
};
var Z1 = "toJSON" in new Headers;
var c = ($) => {
  if (!$)
    return false;
  for (let W in $)
    return true;
  return false;
};
var u0 = ($, W) => {
  let X = $.size;
  if (!W && X || X && W && W.status !== 206 && W.status !== 304 && W.status !== 412 && W.status !== 416) {
    if (W && c(W.headers)) {
      if (W.headers instanceof Headers) {
        if (Z1)
          W.headers = W.headers.toJSON();
        else
          for (let [Z, j] of W.headers.entries())
            if (Z in W.headers)
              W.headers[Z] = j;
      }
      return new Response($, { status: W.status, headers: Object.assign({ "accept-ranges": "bytes", "content-range": `bytes 0-${X - 1}/${X}` }, W.headers) });
    }
    return new Response($, { headers: { "accept-ranges": "bytes", "content-range": `bytes 0-${X - 1}/${X}`, "transfer-encoding": "chunked" } });
  }
  return new Response($);
};
var j1 = ($, W) => {
  if (!$)
    return $;
  $.delete("set-cookie");
  for (let X = 0;X < W.length; X++) {
    let Z = W[X].indexOf("=");
    $.append("set-cookie", `${W[X].slice(0, Z)}=${W[X].slice(Z + 1) || ""}`);
  }
  return $;
};
var J1 = ($) => {
  if (!$ || !c($))
    return;
  let W = [];
  for (let [X, Z] of Object.entries($)) {
    if (!X || !Z)
      continue;
    let j = Z.value;
    if (j === undefined || j === null)
      continue;
    W.push(D2(X, typeof j === "object" ? JSON.stringify(j) : j + "", Z));
  }
  if (W.length === 0)
    return;
  if (W.length === 1)
    return W[0];
  return W;
};
var B0 = async ($, W, X) => {
  let Z = $.next();
  if (Z instanceof Promise)
    Z = await Z;
  if (Z.done) {
    if (W)
      return x(Z.value, W, X);
    return Z0(Z.value, X);
  }
  return new Response(new ReadableStream({ async start(j) {
    let J = false;
    if (X?.signal.addEventListener("abort", () => {
      J = true;
      try {
        j.close();
      } catch {
      }
    }), Z.value !== undefined && Z.value !== null)
      if (typeof Z.value === "object")
        try {
          j.enqueue(Buffer.from(JSON.stringify(Z.value)));
        } catch {
          j.enqueue(Buffer.from(Z.value.toString()));
        }
      else
        j.enqueue(Buffer.from(Z.value.toString()));
    for await (let Y of $) {
      if (J)
        break;
      if (Y === undefined || Y === null)
        continue;
      if (typeof Y === "object")
        try {
          j.enqueue(Buffer.from(JSON.stringify(Y)));
        } catch {
          j.enqueue(Buffer.from(Y.toString()));
        }
      else
        j.enqueue(Buffer.from(Y.toString()));
      await new Promise((G) => setTimeout(() => G(), 0));
    }
    try {
      j.close();
    } catch {
    }
  } }), { ...W, headers: { "transfer-encoding": "chunked", "content-type": "text/event-stream; charset=utf-8", ...W?.headers } });
};
async function* h0($) {
  let W = $.body;
  if (!W)
    return;
  let X = W.getReader(), Z = new TextDecoder;
  try {
    while (true) {
      let { done: j, value: J } = await X.read();
      if (j)
        break;
      yield Z.decode(J);
    }
  } finally {
    X.releaseLock();
  }
}
var x = ($, W, X) => {
  if (c(W.headers) || W.status !== 200 || W.redirect || W.cookie) {
    if (typeof W.status === "string")
      W.status = _0[W.status];
    if (W.redirect) {
      if (W.headers.Location = W.redirect, !W.status || W.status < 300 || W.status >= 400)
        W.status = 302;
    }
    if (W.cookie && c(W.cookie)) {
      let Z = J1(W.cookie);
      if (Z)
        W.headers["set-cookie"] = Z;
    }
    if (W.headers["set-cookie"] && Array.isArray(W.headers["set-cookie"]))
      W.headers = j1(new Headers(W.headers), W.headers["set-cookie"]);
    switch ($?.constructor?.name) {
      case "String":
        return new Response($, W);
      case "Blob":
        return u0($, W);
      case "Array":
        return Response.json($, W);
      case "Object":
        return Response.json($, W);
      case "ElysiaCustomStatusResponse":
        return W.status = $.code, x($.response, W, X);
      case "ReadableStream":
        if (!W.headers["content-type"]?.startsWith("text/event-stream"))
          W.headers["content-type"] = "text/event-stream; charset=utf-8";
        return X?.signal.addEventListener("abort", { handleEvent() {
          if (!X?.signal.aborted)
            $.cancel(X);
        } }, { once: true }), new Response($, W);
      case undefined:
        if (!$)
          return new Response("", W);
        return Response.json($, W);
      case "Response":
        let Z = false;
        if (W.headers instanceof Headers)
          for (let j of W.headers.keys())
            if (j === "set-cookie") {
              if (Z)
                continue;
              Z = true;
              for (let J of W.headers.getSetCookie())
                $.headers.append("set-cookie", J);
            } else
              $.headers.append(j, W.headers?.get(j) ?? "");
        else
          for (let j in W.headers)
            $.headers.append(j, W.headers[j]);
        if ($.status !== W.status)
          W.status = $.status;
        if ($.headers.get("transfer-encoding") === "chunked")
          return B0(h0($), W, X);
        return $;
      case "Error":
        return K0($, W);
      case "Promise":
        return $.then((j) => x(j, W));
      case "Function":
        return x($(), W);
      case "Number":
      case "Boolean":
        return new Response($.toString(), W);
      case "Cookie":
        if ($ instanceof w0)
          return new Response($.value, W);
        return new Response($?.toString(), W);
      case "FormData":
        return new Response($, W);
      default:
        if ($ instanceof Response) {
          let j = false;
          if (W.headers instanceof Headers)
            for (let J of W.headers.keys())
              if (J === "set-cookie") {
                if (j)
                  continue;
                j = true;
                for (let Y of W.headers.getSetCookie())
                  $.headers.append("set-cookie", Y);
              } else
                $.headers.append(J, W.headers?.get(J) ?? "");
          else
            for (let J in W.headers)
              $.headers.append(J, W.headers[J]);
          if (Z1)
            W.headers = $.headers.toJSON();
          else
            for (let [J, Y] of $.headers.entries())
              if (J in W.headers)
                W.headers[J] = Y;
          return $;
        }
        if ($ instanceof Promise)
          return $.then((j) => x(j, W));
        if ($ instanceof Error)
          return K0($, W);
        if ($ instanceof l)
          return W.status = $.code, x($.response, W, X);
        if (typeof $?.next === "function")
          return B0($, W, X);
        if (typeof $?.then === "function")
          return $.then((j) => x(j, W));
        if (typeof $?.toResponse === "function")
          return x($.toResponse(), W);
        if ("charCodeAt" in $) {
          let j = $.charCodeAt(0);
          if (j === 123 || j === 91) {
            if (!W.headers["Content-Type"])
              W.headers["Content-Type"] = "application/json";
            return new Response(JSON.stringify($), W);
          }
        }
        return new Response($, W);
    }
  } else
    switch ($?.constructor?.name) {
      case "String":
        return new Response($);
      case "Blob":
        return u0($, W);
      case "Array":
        return Response.json($);
      case "Object":
        return Response.json($, W);
      case "ElysiaCustomStatusResponse":
        return W.status = $.code, x($.response, W, X);
      case "ReadableStream":
        return X?.signal.addEventListener("abort", { handleEvent() {
          if (!X?.signal.aborted)
            $.cancel(X);
        } }, { once: true }), new Response($, { headers: { "Content-Type": "text/event-stream; charset=utf-8" } });
      case undefined:
        if (!$)
          return new Response("");
        return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
      case "Response":
        if ($.headers.get("transfer-encoding") === "chunked")
          return B0(h0($), W, X);
        return $;
      case "Error":
        return K0($, W);
      case "Promise":
        return $.then((Z) => {
          let j = Z0(Z, X);
          if (j !== undefined)
            return j;
          return new Response("");
        });
      case "Function":
        return Z0($(), X);
      case "Number":
      case "Boolean":
        return new Response($.toString());
      case "Cookie":
        if ($ instanceof w0)
          return new Response($.value, W);
        return new Response($?.toString(), W);
      case "FormData":
        return new Response($, W);
      default:
        if ($ instanceof Response)
          return $;
        if ($ instanceof Promise)
          return $.then((Z) => x(Z, W));
        if ($ instanceof Error)
          return K0($, W);
        if ($ instanceof l)
          return W.status = $.code, x($.response, W, X);
        if (typeof $?.next === "function")
          return B0($, W, X);
        if (typeof $?.then === "function")
          return $.then((Z) => x(Z, W));
        if (typeof $?.toResponse === "function")
          return x($.toResponse(), W);
        if ("charCodeAt" in $) {
          let Z = $.charCodeAt(0);
          if (Z === 123 || Z === 91) {
            if (!W.headers["Content-Type"])
              W.headers["Content-Type"] = "application/json";
            return new Response(JSON.stringify($), W);
          }
        }
        return new Response($);
    }
};
var g = ($, W, X) => {
  if ($ === undefined || $ === null)
    return;
  if (c(W.headers) || W.status !== 200 || W.redirect || W.cookie) {
    if (typeof W.status === "string")
      W.status = _0[W.status];
    if (W.redirect) {
      if (W.headers.Location = W.redirect, !W.status || W.status < 300 || W.status >= 400)
        W.status = 302;
    }
    if (W.cookie && c(W.cookie)) {
      let Z = J1(W.cookie);
      if (Z)
        W.headers["set-cookie"] = Z;
    }
    if (W.headers["set-cookie"] && Array.isArray(W.headers["set-cookie"]))
      W.headers = j1(new Headers(W.headers), W.headers["set-cookie"]);
    switch ($?.constructor?.name) {
      case "String":
        return new Response($, W);
      case "Blob":
        return u0($, W);
      case "Array":
        return Response.json($, W);
      case "Object":
        return Response.json($, W);
      case "ElysiaCustomStatusResponse":
        return W.status = $.code, g($.response, W, X);
      case "ReadableStream":
        if (!W.headers["content-type"]?.startsWith("text/event-stream"))
          W.headers["content-type"] = "text/event-stream; charset=utf-8";
        return X?.signal.addEventListener("abort", { handleEvent() {
          if (!X?.signal.aborted)
            $.cancel(X);
        } }, { once: true }), new Response($, W);
      case undefined:
        if (!$)
          return;
        return Response.json($, W);
      case "Response":
        let Z = false;
        if (W.headers instanceof Headers)
          for (let j of W.headers.keys())
            if (j === "set-cookie") {
              if (Z)
                continue;
              Z = true;
              for (let J of W.headers.getSetCookie())
                $.headers.append("set-cookie", J);
            } else
              $.headers.append(j, W.headers?.get(j) ?? "");
        else
          for (let j in W.headers)
            $.headers.append(j, W.headers[j]);
        if ($.status !== W.status)
          W.status = $.status;
        if ($.headers.get("transfer-encoding") === "chunked")
          return B0(h0($), W, X);
        return $;
      case "Promise":
        return $.then((j) => {
          let J = g(j, W);
          if (J !== undefined)
            return J;
        });
      case "Error":
        return K0($, W);
      case "Function":
        return g($(), W);
      case "Number":
      case "Boolean":
        return new Response($.toString(), W);
      case "FormData":
        return new Response($);
      case "Cookie":
        if ($ instanceof w0)
          return new Response($.value, W);
        return new Response($?.toString(), W);
      default:
        if ($ instanceof Response) {
          let j = false;
          if (W.headers instanceof Headers)
            for (let J of W.headers.keys())
              if (J === "set-cookie") {
                if (j)
                  continue;
                j = true;
                for (let Y of W.headers.getSetCookie())
                  $.headers.append("set-cookie", Y);
              } else
                $.headers.append(J, W.headers?.get(J) ?? "");
          else
            for (let J in W.headers)
              $.headers.append(J, W.headers[J]);
          if ($.status !== W.status)
            W.status = $.status;
          return $;
        }
        if ($ instanceof Promise)
          return $.then((j) => g(j, W));
        if ($ instanceof Error)
          return K0($, W);
        if ($ instanceof l)
          return W.status = $.code, g($.response, W, X);
        if (typeof $?.next === "function")
          return B0($, W, X);
        if (typeof $?.then === "function")
          return $.then((j) => g(j, W));
        if (typeof $?.toResponse === "function")
          return g($.toResponse(), W);
        if ("charCodeAt" in $) {
          let j = $.charCodeAt(0);
          if (j === 123 || j === 91) {
            if (!W.headers["Content-Type"])
              W.headers["Content-Type"] = "application/json";
            return new Response(JSON.stringify($), W);
          }
        }
        return new Response($, W);
    }
  } else
    switch ($?.constructor?.name) {
      case "String":
        return new Response($);
      case "Blob":
        return u0($, W);
      case "Array":
        return Response.json($);
      case "Object":
        return Response.json($, W);
      case "ElysiaCustomStatusResponse":
        return W.status = $.code, g($.response, W, X);
      case "ReadableStream":
        return X?.signal.addEventListener("abort", { handleEvent() {
          if (!X?.signal.aborted)
            $.cancel(X);
        } }, { once: true }), new Response($, { headers: { "Content-Type": "text/event-stream; charset=utf-8" } });
      case undefined:
        if (!$)
          return new Response("");
        return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
      case "Response":
        if ($.headers.get("transfer-encoding") === "chunked")
          return B0(h0($));
        return $;
      case "Promise":
        return $.then((Z) => {
          let j = g(Z, W);
          if (j !== undefined)
            return j;
        });
      case "Error":
        return K0($, W);
      case "Function":
        return Z0($(), X);
      case "Number":
      case "Boolean":
        return new Response($.toString());
      case "Cookie":
        if ($ instanceof w0)
          return new Response($.value, W);
        return new Response($?.toString(), W);
      case "FormData":
        return new Response($);
      default:
        if ($ instanceof Response)
          return $;
        if ($ instanceof Promise)
          return $.then((Z) => g(Z, W));
        if ($ instanceof Error)
          return K0($, W);
        if ($ instanceof l)
          return W.status = $.code, g($.response, W, X);
        if (typeof $?.next === "function")
          return B0($, W, X);
        if (typeof $?.then === "function")
          return $.then((Z) => g(Z, W));
        if (typeof $?.toResponse === "function")
          return g($.toResponse(), W);
        if ("charCodeAt" in $) {
          let Z = $.charCodeAt(0);
          if (Z === 123 || Z === 91) {
            if (!W.headers["Content-Type"])
              W.headers["Content-Type"] = "application/json";
            return new Response(JSON.stringify($), W);
          }
        }
        return new Response($);
    }
};
var Z0 = ($, W) => {
  switch ($?.constructor?.name) {
    case "String":
      return new Response($);
    case "Blob":
      return u0($);
    case "Array":
      return Response.json($);
    case "Object":
      return Response.json($);
    case "ElysiaCustomStatusResponse":
      return x($.response, { status: $.code, headers: {} });
    case "ReadableStream":
      return W?.signal.addEventListener("abort", { handleEvent() {
        if (!W?.signal.aborted)
          $.cancel(W);
      } }, { once: true }), new Response($, { headers: { "Content-Type": "text/event-stream; charset=utf-8" } });
    case undefined:
      if (!$)
        return new Response("");
      return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
    case "Response":
      if ($.headers.get("transfer-encoding") === "chunked")
        return B0(h0($));
      return $;
    case "Error":
      return K0($);
    case "Promise":
      return $.then((X) => Z0(X, W));
    case "Function":
      return Z0($(), W);
    case "Number":
    case "Boolean":
      return new Response($.toString());
    case "FormData":
      return new Response($);
    default:
      if ($ instanceof Response)
        return $;
      if ($ instanceof Promise)
        return $.then((X) => Z0(X, W));
      if ($ instanceof Error)
        return K0($);
      if ($ instanceof l)
        return x($.response, { status: $.code, headers: {} });
      if (typeof $?.next === "function")
        return B0($, undefined, W);
      if (typeof $?.then === "function")
        return $.then((X) => x(X, set));
      if (typeof $?.toResponse === "function")
        return Z0($.toResponse());
      if ("charCodeAt" in $) {
        let X = $.charCodeAt(0);
        if (X === 123 || X === 91)
          return new Response(JSON.stringify($), { headers: { "Content-Type": "application/json" } });
      }
      return new Response($);
  }
};
var K0 = ($, W) => new Response(JSON.stringify({ name: $?.name, message: $?.message, cause: $?.cause }), { status: W?.status !== 200 ? W?.status ?? 500 : 500, headers: W?.headers });
var Q1 = ($, W, X = {}) => {
  if (typeof $ === "function")
    return;
  let Z = x($, { headers: X });
  if (W.parse.length === 0 && W.transform.length === 0 && W.beforeHandle.length === 0 && W.afterHandle.length === 0)
    return Z.clone.bind(Z);
};
var Y1 = ($, W, X = {}) => {
  if (typeof $ === "function" || $ instanceof Blob)
    return;
  let Z = x($, { headers: X });
  if (W.parse.length === 0 && W.transform.length === 0 && W.beforeHandle.length === 0 && W.afterHandle.length === 0) {
    if (!Z.headers.has("content-type"))
      Z.headers.append("content-type", "text/plain;charset=utf-8");
    return Z.clone.bind(Z);
  }
};
var R0 = ($, W) => {
  let X = new URL($);
  return X.pathname = W, X.toString();
};
var M3 = ($) => typeof $ === "function" && /^\s*class\s+/.test($.toString()) || $.toString().startsWith("[object ") && $.toString() !== "[object Object]" || c(Object.getPrototypeOf($));
var I2 = ($) => $ && typeof $ === "object" && !Array.isArray($);
var d = ($, W, { skipKeys: X, override: Z = true } = {}) => {
  if (!I2($) || !I2(W))
    return $;
  for (let [j, J] of Object.entries(W)) {
    if (X?.includes(j))
      continue;
    if (!I2(J) || !(j in $) || M3(J)) {
      if (Z || !(j in $))
        $[j] = J;
      continue;
    }
    $[j] = d($[j], J, { skipKeys: X, override: Z });
  }
  return $;
};
var z3 = ($, W) => {
  let { properties: X, ...Z } = $ ?? {}, { properties: j, ...J } = W ?? {};
  return d(Z, J);
};
var y = ($ = [], W = []) => {
  if (!$)
    return [];
  if (!W)
    return $;
  let X = [], Z = [];
  if (!Array.isArray($))
    $ = [$];
  if (!Array.isArray(W))
    W = [W];
  for (let j of $)
    if (X.push(j), j.checksum)
      Z.push(j.checksum);
  for (let j of W)
    if (!Z.includes(j.checksum))
      X.push(j);
  return X;
};
var D3 = ["start", "request", "parse", "transform", "resolve", "beforeHandle", "afterHandle", "mapResponse", "afterResponse", "trace", "error", "stop", "body", "headers", "params", "query", "response", "type", "detail"];
var N3 = D3.reduce(($, W) => ($[W] = true, $), {});
var U1 = ($, W) => {
  let X = (Z) => typeof Z === "object" && Object.keys(Z).every(Z2);
  if (X($) && X(W))
    return { ...$, ...W };
  else if ($ && !X($) && X(W))
    return { 200: $, ...W };
  return W ?? $;
};
var b0 = ($, W) => {
  return { body: W?.body ?? $?.body, headers: W?.headers ?? $?.headers, params: W?.params ?? $?.params, query: W?.query ?? $?.query, cookie: W?.cookie ?? $?.cookie, response: U1($?.response, W?.response) };
};
var i = ($, W) => {
  return { ...$, ...W, body: W?.body ?? $?.body, headers: W?.headers ?? $?.headers, params: W?.params ?? $?.params, query: W?.query ?? $?.query, cookie: W?.cookie ?? $?.cookie, response: U1($?.response, W?.response), type: $?.type || W?.type, detail: d(W?.detail ?? {}, $?.detail ?? {}), parse: y($?.parse, W?.parse), transform: y($?.transform, W?.transform), beforeHandle: y($?.beforeHandle, W?.beforeHandle), afterHandle: y($?.afterHandle, W?.afterHandle), mapResponse: y($?.mapResponse, W?.mapResponse), afterResponse: y($?.afterResponse, W?.afterResponse), trace: y($?.trace, W?.trace), error: y($?.error, W?.error) };
};
var V2 = ($, W, X = true) => {
  if (!Array.isArray(W))
    return h($, W, X);
  for (let Z of W)
    $ = h($, Z, X);
  return $;
};
var h = ($, W, X = true) => {
  if (!$)
    return $;
  if (W.untilObjectFound && !X && $.type === "object")
    return $;
  let Z = W.from[Kind];
  if ($.oneOf) {
    for (let Y = 0;Y < $.oneOf.length; Y++)
      $.oneOf[Y] = h($.oneOf[Y], W, X);
    return $;
  }
  if ($.anyOf) {
    for (let Y = 0;Y < $.anyOf.length; Y++)
      $.anyOf[Y] = h($.anyOf[Y], W, X);
    return $;
  }
  if ($.allOf) {
    for (let Y = 0;Y < $.allOf.length; Y++)
      $.allOf[Y] = h($.allOf[Y], W, X);
    return $;
  }
  if ($.not) {
    for (let Y = 0;Y < $.not.length; Y++)
      $.not[Y] = h($.not[Y], W, X);
    return $;
  }
  let j = X && !!W.excludeRoot;
  if ($[Kind] === Z) {
    let { anyOf: Y, oneOf: G, allOf: K, not: B, properties: U, items: w, ...F } = $, Q = W.to(F), z, D = (M) => {
      if (U && M.type === "object") {
        let O = {};
        for (let [P, b] of Object.entries(U))
          O[P] = h(b, W, false);
        return { ...F, ...M, properties: O };
      }
      if (w && M.type === "array")
        return { ...F, ...M, items: h(w, W, false) };
      let I = { ...F, ...M };
      if (delete I.required, U && M.type === "string" && M.format === "ObjectString" && M.default === "{}")
        z = V.ObjectString(U, F), I.default = JSON.stringify(exports_value2.Create(V.Object(U))), I.properties = U;
      if (w && M.type === "string" && M.format === "ArrayString" && M.default === "[]")
        z = V.ArrayString(w, F), I.default = JSON.stringify(exports_value2.Create(V.Array(w))), I.items = w;
      return I;
    };
    if (j) {
      if (U) {
        let M = {};
        for (let [I, O] of Object.entries(U))
          M[I] = h(O, W, false);
        return { ...F, properties: M };
      } else if (w?.map)
        return { ...F, items: w.map((M) => h(M, W, false)) };
      return F;
    }
    if (Q.anyOf)
      for (let M = 0;M < Q.anyOf.length; M++)
        Q.anyOf[M] = D(Q.anyOf[M]);
    else if (Q.oneOf)
      for (let M = 0;M < Q.oneOf.length; M++)
        Q.oneOf[M] = D(Q.oneOf[M]);
    else if (Q.allOf)
      for (let M = 0;M < Q.allOf.length; M++)
        Q.allOf[M] = D(Q.allOf[M]);
    else if (Q.not)
      for (let M = 0;M < Q.not.length; M++)
        Q.not[M] = D(Q.not[M]);
    if (z)
      Q[TransformKind] = z[TransformKind];
    if (Q.anyOf || Q.oneOf || Q.allOf || Q.not)
      return Q;
    if (U) {
      let M = {};
      for (let [I, O] of Object.entries(U))
        M[I] = h(O, W, false);
      return { ...F, ...Q, properties: M };
    } else if (w?.map)
      return { ...F, ...Q, items: w.map((M) => h(M, W, false)) };
    return { ...F, ...Q };
  }
  let J = $?.properties;
  if (J && X && W.rootOnly !== true)
    for (let [Y, G] of Object.entries(J))
      switch (G[Kind]) {
        case Z:
          let { anyOf: K, oneOf: B, allOf: U, not: w, type: F, ...Q } = G, z = W.to(Q);
          if (z.anyOf)
            for (let D = 0;D < z.anyOf.length; D++)
              z.anyOf[D] = { ...Q, ...z.anyOf[D] };
          else if (z.oneOf)
            for (let D = 0;D < z.oneOf.length; D++)
              z.oneOf[D] = { ...Q, ...z.oneOf[D] };
          else if (z.allOf)
            for (let D = 0;D < z.allOf.length; D++)
              z.allOf[D] = { ...Q, ...z.allOf[D] };
          else if (z.not)
            for (let D = 0;D < z.not.length; D++)
              z.not[D] = { ...Q, ...z.not[D] };
          J[Y] = { ...Q, ...h(Q, W, false) };
          break;
        case "Object":
        case "Union":
          J[Y] = h(G, W, false);
          break;
        default:
          if (G.items)
            for (let D = 0;D < G.items.length; D++)
              G.items[D] = h(G.items[D], W, false);
          else if (G.anyOf || G.oneOf || G.allOf || G.not)
            J[Y] = h(G, W, false);
          break;
      }
  return $;
};
var m = ($, { models: W = {}, dynamic: X = false, normalize: Z = false, additionalProperties: j = false, coerce: J = false, additionalCoerce: Y = [] } = {}) => {
  if (!$)
    return;
  if (typeof $ === "string" && !($ in W))
    return;
  let G = typeof $ === "string" ? W[$] : $;
  if (J || Y)
    if (J)
      G = V2(G, [{ from: V.Number(), to: (U) => V.Numeric(U), untilObjectFound: true }, { from: V.Boolean(), to: (U) => V.BooleanString(U), untilObjectFound: true }, ...Array.isArray(Y) ? Y : [Y]]);
    else
      G = V2(G, [...Array.isArray(Y) ? Y : [Y]]);
  if (G.type === "object" && "additionalProperties" in G === false)
    G.additionalProperties = j;
  let K = (U) => exports_value2.Clean(G, U);
  if (X) {
    let U = { schema: G, references: "", checkFunc: () => {
    }, code: "", Check: (w) => exports_value2.Check(G, w), Errors: (w) => exports_value2.Errors(G, w), Code: () => "", Clean: K, Decode: (w) => exports_value2.Decode(G, w), Encode: (w) => exports_value2.Encode(G, w) };
    if (Z && G.additionalProperties === false)
      U.Clean = K;
    if (G.config) {
      if (U.config = G.config, U?.schema?.config)
        delete U.schema.config;
    }
    return U.parse = (w) => {
      try {
        return U.Decode(w);
      } catch (F) {
        throw [...U.Errors(w)].map(o);
      }
    }, U.safeParse = (w) => {
      try {
        return { success: true, data: U.Decode(w), error: null };
      } catch (F) {
        let Q = [...B.Errors(w)].map(o);
        return { success: false, data: null, error: Q[0]?.summary, errors: Q };
      }
    }, U;
  }
  let B = TypeCompiler.Compile(G, Object.values(W));
  if (B.Clean = K, G.config) {
    if (B.config = G.config, B?.schema?.config)
      delete B.schema.config;
  }
  return B.parse = (U) => {
    try {
      return B.Decode(U);
    } catch (w) {
      throw [...B.Errors(U)].map(o);
    }
  }, B.safeParse = (U) => {
    try {
      return { success: true, data: B.Decode(U), error: null };
    } catch (w) {
      let F = [...B.Errors(U)].map(o);
      return { success: false, data: null, error: F[0]?.summary, errors: F };
    }
  }, B;
};
var $2 = ($, { models: W = {}, dynamic: X = false, normalize: Z = false, additionalProperties: j = false }) => {
  if (!$)
    return;
  if (typeof $ === "string" && !($ in W))
    return;
  let J = typeof $ === "string" ? W[$] : $, Y = (K, B) => {
    let U = (F) => {
      if (!F || typeof F !== "object")
        return exports_value2.Clean(K, F);
      if (Array.isArray(F))
        F = exports_value2.Clean(K, F);
      else
        F = exports_value2.Clean(K, F);
      return F;
    };
    if (X)
      return { schema: K, references: "", checkFunc: () => {
      }, code: "", Check: (F) => exports_value2.Check(K, F), Errors: (F) => exports_value2.Errors(K, F), Code: () => "", Decode: (F) => exports_value2.Decode(K, F), Encode: (F) => exports_value2.Encode(K, F) };
    let w = TypeCompiler.Compile(K, B);
    if (Z && K.additionalProperties === false)
      w.Clean = U;
    return w;
  };
  if (Kind in J) {
    if ("additionalProperties" in J === false)
      J.additionalProperties = j;
    return { 200: Y(J, Object.values(W)) };
  }
  let G = {};
  return Object.keys(J).forEach((K) => {
    let B = J[+K];
    if (typeof B === "string") {
      if (B in W) {
        let U = W[B];
        U.type === "object" && "additionalProperties" in U, G[+K] = Kind in U ? Y(U, Object.values(W)) : U;
      }
      return;
    }
    if (B.type === "object" && "additionalProperties" in B === false)
      B.additionalProperties = j;
    G[+K] = Kind in B ? Y(B, Object.values(W)) : B;
  }), G;
};
var P3 = typeof Bun !== "undefined";
var I3 = P3 && typeof Bun.hash === "function";
var N0 = ($) => {
  if (I3)
    return Bun.hash($);
  let W = 9;
  for (let X = 0;X < $.length; )
    W = Math.imul(W ^ $.charCodeAt(X++), 387420489);
  return W = W ^ W >>> 9;
};
var A2;
var D0 = () => {
  if (!A2)
    A2 = [{ from: V.Object({}), to: () => V.ObjectString({}), excludeRoot: true }, { from: V.Array(V.Any()), to: () => V.ArrayString(V.Any()) }];
  return A2;
};
var O2;
var S2 = () => {
  if (!O2)
    O2 = [{ from: V.Number(), to: ($) => V.Numeric($), rootOnly: true }, { from: V.Boolean(), to: ($) => V.BooleanString($), rootOnly: true }];
  return O2;
};
var W2 = ({ validator: $, defaultConfig: W = {}, config: X, dynamic: Z, models: j }) => {
  let J = m($, { dynamic: Z, models: j, additionalProperties: true, coerce: true, additionalCoerce: D0() });
  if (c(W))
    if (J)
      J.config = z3(J.config, X);
    else
      J = m(V.Cookie({}), { dynamic: Z, models: j, additionalProperties: true }), J.config = W;
  return J;
};
var j0 = ($, W) => {
  if (!W)
    return;
  if (!Array.isArray(W)) {
    let Z = W;
    if ($ && !Z.checksum)
      Z.checksum = $;
    if (Z.scope === "scoped")
      Z.scope = "local";
    return Z;
  }
  let X = [...W];
  for (let Z of X) {
    if ($ && !Z.checksum)
      Z.checksum = $;
    if (Z.scope === "scoped")
      Z.scope = "local";
  }
  return X;
};
var C2 = ($, W, X) => {
  return { start: y($.start, j0(X, W?.start)), request: y($.request, j0(X, W?.request)), parse: y($.parse, j0(X, W?.parse)), transform: y($.transform, j0(X, W?.transform)), beforeHandle: y($.beforeHandle, j0(X, W?.beforeHandle)), afterHandle: y($.afterHandle, j0(X, W?.afterHandle)), mapResponse: y($.mapResponse, j0(X, W?.mapResponse)), afterResponse: y($.afterResponse, j0(X, W?.afterResponse)), trace: y($.trace, j0(X, W?.trace)), error: y($.error, j0(X, W?.error)), stop: y($.stop, j0(X, W?.stop)) };
};
var w1 = ($, W, { skipIfHasType: X = false } = {}) => {
  if (!$)
    return $;
  if (!Array.isArray($)) {
    if (X)
      $.scope ??= W;
    else
      $.scope = W;
    return $;
  }
  for (let Z of $)
    if (X)
      Z.scope ??= W;
    else
      Z.scope = W;
  return $;
};
var z0 = ($) => {
  if (!$)
    return $;
  if (!Array.isArray($))
    switch ($.scope) {
      case "global":
      case "scoped":
        return { ...$ };
      default:
        return { fn: $ };
    }
  let W = [];
  for (let X of $)
    switch (X.scope) {
      case "global":
      case "scoped":
        W.push({ ...X });
        break;
    }
  return W;
};
var L2 = ($) => {
  return { ...$, type: $?.type, detail: $?.detail, parse: z0($?.parse), transform: z0($?.transform), beforeHandle: z0($?.beforeHandle), afterHandle: z0($?.afterHandle), mapResponse: z0($?.mapResponse), afterResponse: z0($?.afterResponse), error: z0($?.error), trace: z0($?.trace) };
};
var _0 = { Continue: 100, "Switching Protocols": 101, Processing: 102, "Early Hints": 103, OK: 200, Created: 201, Accepted: 202, "Non-Authoritative Information": 203, "No Content": 204, "Reset Content": 205, "Partial Content": 206, "Multi-Status": 207, "Already Reported": 208, "Multiple Choices": 300, "Moved Permanently": 301, Found: 302, "See Other": 303, "Not Modified": 304, "Temporary Redirect": 307, "Permanent Redirect": 308, "Bad Request": 400, Unauthorized: 401, "Payment Required": 402, Forbidden: 403, "Not Found": 404, "Method Not Allowed": 405, "Not Acceptable": 406, "Proxy Authentication Required": 407, "Request Timeout": 408, Conflict: 409, Gone: 410, "Length Required": 411, "Precondition Failed": 412, "Payload Too Large": 413, "URI Too Long": 414, "Unsupported Media Type": 415, "Range Not Satisfiable": 416, "Expectation Failed": 417, "I'm a teapot": 418, "Misdirected Request": 421, "Unprocessable Content": 422, Locked: 423, "Failed Dependency": 424, "Too Early": 425, "Upgrade Required": 426, "Precondition Required": 428, "Too Many Requests": 429, "Request Header Fields Too Large": 431, "Unavailable For Legal Reasons": 451, "Internal Server Error": 500, "Not Implemented": 501, "Bad Gateway": 502, "Service Unavailable": 503, "Gateway Timeout": 504, "HTTP Version Not Supported": 505, "Variant Also Negotiates": 506, "Insufficient Storage": 507, "Loop Detected": 508, "Not Extended": 510, "Network Authentication Required": 511 };
var X2 = Object.fromEntries(Object.entries(_0).map(([$, W]) => [W, $]));
function A3($) {
  let W = $;
  while (W.endsWith("="))
    W = W.slice(0, -1);
  return W;
}
var B1 = new TextEncoder;
var x0 = async ($, W) => {
  if (typeof $ !== "string")
    throw new TypeError("Cookie value must be provided as a string.");
  if (W === null)
    throw new TypeError("Secret key must be provided.");
  let X = await crypto.subtle.importKey("raw", B1.encode(W), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]), Z = await crypto.subtle.sign("HMAC", X, B1.encode($));
  return $ + "." + A3(Buffer.from(Z).toString("base64"));
};
var P2 = async ($, W) => {
  if (typeof $ !== "string")
    throw new TypeError("Signed cookie string must be provided.");
  if (W === null)
    throw new TypeError("Secret key must be provided.");
  let X = $.slice(0, $.lastIndexOf("."));
  return await x0(X, W) === $ ? X : false;
};
var _1 = ($, W) => {
  if (!$ || typeof $ !== "object" || !W)
    return;
  for (let [X, Z] of Object.entries(W)) {
    if (X in N3 || !(X in $))
      continue;
    let j = $[X];
    if (typeof j === "function")
      j(Z), delete W[X];
  }
};
var F1 = ({ globalHook: $, localHook: W }) => (X) => (Z, j) => {
  if (typeof Z === "function")
    Z = { fn: Z };
  if ("fn" in Z || Array.isArray(Z)) {
    if (!W[X])
      W[X] = [];
    if (typeof W[X] === "function")
      W[X] = [W[X]];
    if (Array.isArray(Z))
      W[X] = W[X].concat(Z);
    else
      W[X].push(Z);
    return;
  }
  let { insert: J = "after", stack: Y = "local" } = Z;
  if (typeof j === "function")
    j = { fn: j };
  if (Y === "global")
    if (!Array.isArray(j))
      if (J === "before")
        $[X].unshift(j);
      else
        $[X].push(j);
    else if (J === "before")
      $[X] = j.concat($[X]);
    else
      $[X] = $[X].concat(j);
  else {
    if (!W[X])
      W[X] = [];
    if (typeof W[X] === "function")
      W[X] = [W[X]];
    if (!Array.isArray(j))
      if (J === "before")
        W[X].unshift(j);
      else
        W[X].push(j);
    else if (J === "before")
      W[X] = j.concat(W[X]);
    else
      W[X] = W[X].concat(j);
  }
};
var O3 = ($) => {
  if (typeof $ === "number")
    return $;
  if ($.length < 16) {
    if ($.trim().length === 0)
      return null;
    let W = Number($);
    if (Number.isNaN(W))
      return null;
    return W;
  }
  if ($.length === 16) {
    if ($.trim().length === 0)
      return null;
    let W = Number($);
    if (Number.isNaN(W) || W.toString() !== $)
      return null;
    return W;
  }
  return null;
};
var Z2 = ($) => O3($) !== null;

class T2 {
  $;
  root = null;
  promises = [];
  constructor($ = console.error) {
    this.onError = $;
  }
  get size() {
    return this.promises.length;
  }
  add($) {
    return this.promises.push($), this.root ||= this.drain(), $;
  }
  async drain() {
    while (this.promises.length > 0) {
      try {
        await this.promises[0];
      } catch ($) {
        this.onError($);
      }
      this.promises.shift();
    }
    this.root = null;
  }
  then($, W) {
    return (this.root ?? Promise.resolve()).then($, W);
  }
}
var n = ($) => {
  if (!$)
    return $;
  if (!Array.isArray($)) {
    if (typeof $ === "function")
      return { fn: $ };
    else if ("fn" in $)
      return $;
  }
  let W = [];
  for (let X of $)
    if (typeof X === "function")
      W.push({ fn: X });
    else if ("fn" in X)
      W.push(X);
  return W;
};
var M1 = ($) => {
  return { ...$, start: n($?.start), request: n($?.request), parse: n($?.parse), transform: n($?.transform), beforeHandle: n($?.beforeHandle), afterHandle: n($?.afterHandle), mapResponse: n($?.mapResponse), afterResponse: n($?.afterResponse), trace: n($?.trace), error: n($?.error), stop: n($?.stop) };
};
var E2 = ($) => {
  return { ...$, start: $.start?.map((W) => W.fn), request: $.request?.map((W) => W.fn), parse: $.parse?.map((W) => W.fn), transform: $.transform?.map((W) => W.fn), beforeHandle: $.beforeHandle?.map((W) => W.fn), afterHandle: $.afterHandle?.map((W) => W.fn), afterResponse: $.afterResponse?.map((W) => W.fn), mapResponse: $.mapResponse?.map((W) => W.fn), trace: $.trace?.map((W) => W.fn), error: $.error?.map((W) => W.fn), stop: $.stop?.map((W) => W.fn) };
};
var m0 = ($) => ({ body: $.body, cookie: $.cookie, headers: $.headers, query: $.query, set: $.set, server: $.server });
var d0 = ($, W = 302) => Response.redirect($, W);
var V3 = Symbol("ElysiaFormData");
var P0 = Symbol("ElysiaRequestId");
var j2 = () => crypto.getRandomValues(new Uint32Array(1))[0];
var J2 = ($) => {
  let W = [];
  for (let X = 0;X < $.length; X++) {
    let Z = $[X];
    if (Z.checksum) {
      if (W.includes(Z.checksum))
        $.splice(X, 1), X--;
      W.push(Z.checksum);
    }
  }
  return $;
};
var v = ($, W = "scoped") => {
  if (W === "scoped") {
    for (let X of $)
      if ("scope" in X && X.scope === "local")
        X.scope = "scoped";
    return;
  }
  for (let X of $)
    if ("scope" in X)
      X.scope = "global";
};
var z1 = typeof Bun !== "undefined" ? Bun.env : typeof process !== "undefined" ? process?.env : undefined;
var I0 = Symbol("ElysiaErrorCode");
var l0 = (z1?.NODE_ENV ?? z1?.ENV) === "production";

class l {
  code;
  response;
  constructor($, W) {
    let X = W ?? ($ in X2 ? X2[$] : $);
    this.code = _0[$] ?? $, this.response = X;
  }
}
var q2 = ($, W) => new l($, W);

class Q2 extends Error {
  code = "INTERNAL_SERVER_ERROR";
  status = 500;
  constructor($) {
    super($ ?? "INTERNAL_SERVER_ERROR");
  }
}

class A0 extends Error {
  code = "NOT_FOUND";
  status = 404;
  constructor($) {
    super($ ?? "NOT_FOUND");
  }
}

class Y2 extends Error {
  code = "PARSE";
  status = 400;
  constructor() {
    super("Failed to parse body");
  }
}

class v0 extends Error {
  $;
  code = "INVALID_COOKIE_SIGNATURE";
  status = 400;
  constructor($, W) {
    super(W ?? `"${$}" has invalid cookie signature`);
    this.key = $;
  }
}
var o = ($) => {
  if (!$)
    return { summary: undefined };
  let { message: W, path: X, value: Z, type: j } = $, J = X.slice(1).replaceAll("/", "."), Y = X === "";
  switch (j) {
    case 42:
      return { ...$, summary: Y ? "Value should not be provided" : `Property '${J}' should not be provided` };
    case 45:
      return { ...$, summary: Y ? "Value is missing" : `Property '${J}' is missing` };
    case 50:
      let G = W.indexOf("'"), K = W.slice(G + 1, W.indexOf("'", G + 1));
      return { ...$, summary: Y ? "Value should be an email" : `Property '${J}' should be ${K}` };
    case 54:
      return { ...$, summary: `${W.slice(0, 9)} property '${J}' to be ${W.slice(8)} but found: ${Z}` };
    case 62:
      let B = $.schema.anyOf.map((U) => `'${U?.format ?? U.type}'`).join(", ");
      return { ...$, summary: Y ? `Value should be one of ${B}` : `Property '${J}' should be one of: ${B}` };
    default:
      return { summary: W, ...$ };
  }
};

class q extends Error {
  $;
  W;
  X;
  code = "VALIDATION";
  status = 422;
  constructor($, W, X) {
    if (X && typeof X === "object" && X instanceof l)
      X = X.response;
    let Z = l0 ? undefined : ("Errors" in W) ? W.Errors(X).First() : exports_value2.Errors(W, X).First(), j = Z?.schema.error !== undefined ? typeof Z.schema.error === "function" ? Z.schema.error({ type: $, validator: W, value: X, get errors() {
      return [...W.Errors(X)].map(o);
    } }) : Z.schema.error : undefined, J = Z?.path || "root", Y = "";
    if (j !== undefined)
      Y = typeof j === "object" ? JSON.stringify(j) : j + "";
    else if (l0)
      Y = JSON.stringify({ type: "validation", on: $, summary: o(Z).summary, message: Z?.message, found: X });
    else {
      let G = W?.schema ?? W, K = "Errors" in W ? [...W.Errors(X)].map(o) : [...exports_value2.Errors(W, X)].map(o), B;
      try {
        B = exports_value2.Create(G);
      } catch (U) {
        B = { type: "Could not create expected value", message: U?.message, error: U };
      }
      Y = JSON.stringify({ type: "validation", on: $, summary: K[0]?.summary, property: J, message: Z?.message, expected: B, found: X, errors: K }, null, 2);
    }
    super(Y);
    this.type = $;
    this.validator = W;
    this.value = X;
    Object.setPrototypeOf(this, q.prototype);
  }
  get all() {
    return "Errors" in this.validator ? [...this.validator.Errors(this.value)].map(o) : [...exports_value2.Errors(this.validator, this.value)].map(o);
  }
  static simplifyModel($) {
    let W = "schema" in $ ? $.schema : $;
    try {
      return exports_value2.Create(W);
    } catch {
      return W;
    }
  }
  get model() {
    return q.simplifyModel(this.validator);
  }
  toResponse($) {
    return new Response(this.message, { status: 400, headers: { ...$, "content-type": "application/json" } });
  }
}
var H2 = { open($) {
  $.data.open?.($);
}, message($, W) {
  $.data.message?.($, W);
}, drain($) {
  $.data.drain?.($);
}, close($, W, X) {
  $.data.close?.($, W, X);
} };

class g0 {
  $;
  W;
  validator;
  _validator;
  constructor($, W) {
    this.raw = $;
    this.data = W;
    if (this.validator = $.data.validator, $.data.id)
      this.id = $.data.id;
    else
      this.id = j2().toString();
  }
  get id() {
    return this.raw.data.id;
  }
  set id($) {
    this.raw.data.id = $;
  }
  get publish() {
    return ($, W = undefined, X) => {
      if (this.validator?.Check(W) === false)
        throw new q("message", this.validator, W);
      if (typeof W === "object")
        W = JSON.stringify(W);
      return this.raw.publish($, W, X), this;
    };
  }
  get send() {
    return ($) => {
      if (this.validator?.Check($) === false)
        throw new q("message", this.validator, $);
      if (Buffer.isBuffer($))
        return this.raw.send($), this;
      if (typeof $ === "object")
        $ = JSON.stringify($);
      return this.raw.send($), this;
    };
  }
  get subscribe() {
    return ($) => {
      return this.raw.subscribe($), this;
    };
  }
  get unsubscribe() {
    return ($) => {
      return this.raw.unsubscribe($), this;
    };
  }
  get cork() {
    return ($) => {
      return this.raw.cork($), this;
    };
  }
  get close() {
    return () => {
      return this.raw.close(), this;
    };
  }
  get terminate() {
    return this.raw.terminate.bind(this.raw);
  }
  get isSubscribed() {
    return this.raw.isSubscribed.bind(this.raw);
  }
  get remoteAddress() {
    return this.raw.remoteAddress;
  }
}
var R2 = "1.1.23";
var O0 = U2(o0(), 1);
var f0 = /\+/g;
function G2($) {
  let W = {};
  if (typeof $ !== "string")
    return W;
  let X = "", Z = "", j = -1, J = -1, Y = 0, G = $.length;
  for (let K = 0;K < G; K++)
    switch ($.charCodeAt(K)) {
      case 38:
        let B = J > j;
        if (!B)
          J = K;
        if (X = $.slice(j + 1, J), B || X.length > 0) {
          if (Y & 1)
            X = X.replace(f0, " ");
          if (Y & 2)
            X = O0.default(X) || X;
          if (!W[X]) {
            if (B) {
              if (Z = $.slice(J + 1, K), Y & 4)
                Z = Z.replace(f0, " ");
              if (Y & 8)
                Z = O0.default(Z) || Z;
            }
            W[X] = Z;
          }
        }
        X = "", Z = "", j = K, J = K, Y = 0;
        break;
      case 61:
        if (J <= j)
          J = K;
        else
          Y |= 8;
        break;
      case 43:
        if (J > j)
          Y |= 4;
        else
          Y |= 1;
        break;
      case 37:
        if (J > j)
          Y |= 8;
        else
          Y |= 2;
        break;
    }
  if (j < G) {
    let K = J > j;
    if (X = $.slice(j + 1, K ? J : G), K || X.length > 0) {
      if (Y & 1)
        X = X.replace(f0, " ");
      if (Y & 2)
        X = O0.default(X) || X;
      if (!W[X]) {
        if (K) {
          if (Z = $.slice(J + 1, G), Y & 4)
            Z = Z.replace(f0, " ");
          if (Y & 8)
            Z = O0.default(Z) || Z;
        }
        W[X] = Z;
      }
    }
  }
  return W;
}
var p0 = ($) => {
  let W = {};
  if (typeof $ !== "string")
    return W;
  let X = $.length, Z = "", j = "", J = -1, Y = -1, G = false, K = false, B = false, U = false, w = false, F = 0;
  for (let Q = 0;Q < X + 1; Q++) {
    if (Q !== X)
      F = $.charCodeAt(Q);
    else
      F = 38;
    switch (F) {
      case 38: {
        if (w = Y > J, !w)
          Y = Q;
        if (Z = $.slice(J + 1, Y), w || Z.length > 0) {
          if (B)
            Z = Z.replace(f0, " ");
          if (G)
            Z = O0.default(Z) || Z;
          if (w) {
            if (j = $.slice(Y + 1, Q), U)
              j = j.replace(f0, " ");
            if (K)
              j = O0.default(j) || j;
          }
          let z = W[Z];
          if (z === undefined)
            W[Z] = j;
          else if (z.pop)
            z.push(j);
          else
            W[Z] = [z, j];
        }
        j = "", J = Q, Y = Q, G = false, K = false, B = false, U = false;
        break;
      }
      case 61:
        if (Y <= J)
          Y = Q;
        else
          K = true;
        break;
      case 43:
        if (Y > J)
          U = true;
        else
          B = true;
        break;
      case 37:
        if (Y > J)
          K = true;
        else
          G = true;
        break;
    }
  }
  return W;
};
var N1 = U2(o0(), 1);
var i0 = Symbol("ElysiaTrace");
var F0 = () => {
  let { promise: $, resolve: W } = Promise.withResolvers(), { promise: X, resolve: Z } = Promise.withResolvers(), { promise: j, resolve: J } = Promise.withResolvers(), Y = [], G = [];
  return [(K) => {
    if (K)
      Y.push(K);
    return $;
  }, (K) => {
    let B = [], U = [], w = null;
    for (let Q = 0;Q < (K.total ?? 0); Q++) {
      let { promise: z, resolve: D } = Promise.withResolvers(), { promise: M, resolve: I } = Promise.withResolvers(), { promise: O, resolve: P } = Promise.withResolvers(), b = [], T = [];
      B.push((E) => {
        if (E)
          b.push(E);
        return z;
      }), U.push((E) => {
        let r = { ...E, end: M, error: O, index: Q, onStop(L) {
          if (L)
            T.push(L);
          return M;
        } };
        D(r);
        for (let L = 0;L < b.length; L++)
          b[L](r);
        return (L = null) => {
          let f = performance.now();
          if (L)
            w = L;
          let R = { end: f, error: L, get elapsed() {
            return f - E.begin;
          } };
          for (let Y0 = 0;Y0 < T.length; Y0++)
            T[Y0](R);
          I(f), P(L);
        };
      });
    }
    let F = { ...K, end: X, error: j, onEvent(Q) {
      for (let z = 0;z < B.length; z++)
        B[z](Q);
    }, onStop(Q) {
      if (Q)
        G.push(Q);
      return X;
    } };
    W(F);
    for (let Q = 0;Q < Y.length; Q++)
      Y[Q](F);
    return { resolveChild: U, resolve(Q = null) {
      let z = performance.now();
      if (!Q && w)
        Q = w;
      let D = { end: z, error: Q, get elapsed() {
        return z - K.begin;
      } };
      for (let M = 0;M < G.length; M++)
        G[M](D);
      Z(z), J(Q);
    } };
  }];
};
var D1 = ($) => {
  return (W) => {
    let [X, Z] = F0(), [j, J] = F0(), [Y, G] = F0(), [K, B] = F0(), [U, w] = F0(), [F, Q] = F0(), [z, D] = F0(), [M, I] = F0(), [O, P] = F0();
    return $({ id: W[P0], context: W, set: W.set, onRequest: X, onParse: j, onTransform: Y, onBeforeHandle: K, onHandle: U, onAfterHandle: F, onMapResponse: M, onAfterResponse: O, onError: z }), { request: Z, parse: J, transform: G, beforeHandle: B, handle: w, afterHandle: Q, error: D, mapResponse: I, afterResponse: P };
  };
};
var T3 = new Headers().toJSON;
var P1 = { optional: Symbol.for("TypeBox.Optional"), kind: Symbol.for("TypeBox.Kind") };
var t = ($) => {
  if (!$)
    return false;
  let W = $?.schema;
  return !!W && P1.optional in W;
};
var J0 = ($) => {
  if (!$)
    return false;
  let W = $?.schema ?? $;
  if (W.anyOf)
    return W.anyOf.some(J0);
  if (W.someOf)
    return W.someOf.some(J0);
  if (W.allOf)
    return W.allOf.some(J0);
  if (W.not)
    return W.not.some(J0);
  if (W.type === "object") {
    let X = W.properties;
    if ("additionalProperties" in W)
      return W.additionalProperties;
    for (let Z of Object.keys(X)) {
      let j = X[Z];
      if (j.type === "object") {
        if (J0(j))
          return true;
      } else if (j.anyOf) {
        for (let J = 0;J < j.anyOf.length; J++)
          if (J0(j.anyOf[J]))
            return true;
      }
      return j.additionalProperties;
    }
    return false;
  }
  return false;
};
var x2 = ({ context: $ = "c", trace: W, addFn: X }) => {
  if (!W.length)
    return () => {
      return { resolveChild() {
        return () => {
        };
      }, resolve() {
      } };
    };
  for (let Z = 0;Z < W.length; Z++)
    X(`let report${Z}, reportChild${Z}, reportErr${Z}, reportErrChild${Z}; let trace${Z} = ${$}[ELYSIA_TRACE]?.[${Z}] ?? trace[${Z}](${$});\n`);
  return (Z, { name: j, total: J = 0 } = {}) => {
    if (!j)
      j = "anonymous";
    let Y = Z === "error" ? "reportErr" : "report";
    for (let G = 0;G < W.length; G++)
      X(`\n${Y}${G} = trace${G}.${Z}({id,event: '${Z}',name: '${j}',begin: performance.now(),total: ${J}})\n`);
    return { resolve() {
      for (let G = 0;G < W.length; G++)
        X(`\n${Y}${G}.resolve()\n`);
    }, resolveChild(G) {
      for (let K = 0;K < W.length; K++)
        X(`${Y}Child${K} = ${Y}${K}.resolveChild?.shift()?.({id,event: '${Z}',name: '${G}',begin: performance.now()})\n`);
      return (K) => {
        for (let B = 0;B < W.length; B++)
          if (K)
            X(`
                             	if (${K} instanceof Error)
                    				${Y}Child${B}?.(${K})
                           		else
                             		${Y}Child${B}?.()\n`);
          else
            X(`${Y}Child${B}?.()\n`);
      };
    } };
  };
};
var E3 = ({ injectResponse: $ = "", normalize: W = false, validator: X }) => ({ composeValidation: (Z, j = `c.${Z}`) => `c.set.status = 422; throw new ValidationError('${Z}', validator.${Z}, ${j})`, composeResponseValidation: (Z = "r") => {
  let j = "\n" + $ + "\n";
  j += `if(${Z} instanceof ElysiaCustomStatusResponse) {
			c.set.status = ${Z}.code
			${Z} = ${Z}.response
		}

		const isResponse = ${Z} instanceof Response\n\n`, j += "switch(c.set.status) {\n";
  for (let [J, Y] of Object.entries(X.response)) {
    if (j += `\tcase ${J}:
				if (!isResponse) {\n`, W && "Clean" in Y && !J0(Y))
      j += `${Z} = validator.response['${J}'].Clean(${Z})\n`;
    j += `if(validator.response['${J}'].Check(${Z}) === false) {
					c.set.status = 422

					throw new ValidationError('response', validator.response['${J}'], ${Z})
				}

				c.set.status = ${J}
			}

			break\n\n`;
  }
  return j += "\n}\n", j;
} });
var n8 = Symbol.for("TypeBox.Kind");
var V0 = ($, W) => {
  if (!W)
    return;
  if (W.type === "object") {
    let X = W.properties;
    if (!X)
      return false;
    for (let Z of Object.keys(X)) {
      let j = X[Z];
      if ($ in j)
        return true;
      if (j.type === "object") {
        if (V0($, j))
          return true;
      } else if (j.anyOf) {
        for (let J = 0;J < j.anyOf.length; J++)
          if (V0($, j.anyOf[J]))
            return true;
      }
    }
    return false;
  }
  return $ in W;
};
var b2 = Symbol.for("TypeBox.Transform");
var S0 = ($) => {
  if (!$)
    return;
  if ($.type === "object" && $.properties) {
    let W = $.properties;
    for (let X of Object.keys(W)) {
      let Z = W[X];
      if (Z.type === "object") {
        if (S0(Z))
          return true;
      } else if (Z.anyOf) {
        for (let J = 0;J < Z.anyOf.length; J++)
          if (S0(Z.anyOf[J]))
            return true;
      }
      if (b2 in Z)
        return true;
    }
    return false;
  }
  return b2 in $ || $.properties && b2 in $.properties;
};
var q3 = /(?:return|=>) \S+\(/g;
var C0 = ($) => {
  return ($?.fn ?? $).constructor.name === "AsyncFunction";
};
var k = ($) => {
  let W = $?.fn ?? $;
  if (W.constructor.name === "AsyncFunction")
    return true;
  let X = W.toString();
  if (X.includes("=> response.clone("))
    return false;
  if (X.includes("await"))
    return true;
  if (X.includes("async"))
    return true;
  return !!X.match(q3);
};
var B2 = ($) => {
  let W = $?.fn ?? $;
  return W.constructor.name === "AsyncGeneratorFunction" || W.constructor.name === "GeneratorFunction";
};
var I1 = ({ app: $, path: W, method: X, localHook: Z, hooks: j, validator: J, handler: Y, allowMeta: G = false, inference: K }) => {
  let B = typeof Y === "function";
  if (!B) {
    if (Y = x(Y, { headers: $.setHeaders ?? {} }), j.parse.length === 0 && j.transform.length === 0 && j.beforeHandle.length === 0 && j.afterHandle.length === 0)
      return Function("a", "return function () { return a.clone() }")(Y);
  }
  let U = B ? "handler(c)" : "handler", w = j.afterResponse.length > 0, F = j.trace.length > 0, Q = "";
  if (K = r0(Object.assign(Z, { handler: Y }), K), K.server)
    Q += `\nObject.defineProperty(c, 'server', {
			get: function() { return getServer() }
		})\n`;
  if (K.body)
    Q += "let isParsing = false\n";
  J.createBody?.(), J.createQuery?.(), J.createHeaders?.(), J.createParams?.(), J.createCookie?.(), J.createResponse?.();
  let z = K.query || !!J.query, D = X !== "$INTERNALWS" && X !== "GET" && X !== "HEAD" && (K.body || !!J.body || j.parse.length), M = $.setHeaders, I = M && !!Object.keys(M).length, O = K.headers || J.headers, P = K.cookie || !!J.cookie, b = P ? W2({ validator: J.cookie, defaultConfig: $.config.cookie, dynamic: !!$.config.aot, config: J.cookie?.config ?? {}, models: $.definitions.type }) : undefined, T = b?.config, E = "";
  if (T?.sign) {
    if (!T.secrets)
      throw new Error(`t.Cookie required secret which is not set in (${X}) ${W}.`);
    let N = !T.secrets ? undefined : typeof T.secrets === "string" ? T.secrets : T.secrets[0];
    if (E += `const _setCookie = c.set.cookie
		if(_setCookie) {`, T.sign === true)
      E += `for(const [key, cookie] of Object.entries(_setCookie)) {
				c.set.cookie[key].value = await signCookie(cookie.value, '${N}')
			}`;
    else
      for (let _ of T.sign)
        E += `if(_setCookie['${_}']?.value) { c.set.cookie['${_}'].value = await signCookie(_setCookie['${_}'].value, '${N}') }\n`;
    E += "}\n";
  }
  let r = $.config.normalize, { composeValidation: L, composeResponseValidation: f } = E3({ normalize: r, validator: J });
  if (O)
    Q += T3 ? "c.headers = c.request.headers.toJSON()\n" : `c.headers = {}
                for (const [key, value] of c.request.headers.entries())
					c.headers[key] = value
				`;
  if (P) {
    let N = (A, S) => {
      let C = T?.[A] ?? S;
      if (!C)
        return typeof S === "string" ? `${A}: "${S}",` : `${A}: ${S},`;
      if (typeof C === "string")
        return `${A}: '${C}',`;
      if (C instanceof Date)
        return `${A}: new Date(${C.getTime()}),`;
      return `${A}: ${C},`;
    }, _ = T ? `{
			secrets: ${T.secrets !== undefined ? typeof T.secrets === "string" ? `'${T.secrets}'` : "[" + T.secrets.reduce((A, S) => A + `'${S}',`, "") + "]" : "undefined"},
			sign: ${T.sign === true ? true : T.sign !== undefined ? "[" + T.sign.reduce((A, S) => A + `'${S}',`, "") + "]" : "undefined"},
			${N("domain")}
			${N("expires")}
			${N("httpOnly")}
			${N("maxAge")}
			${N("path", "/")}
			${N("priority")}
			${N("sameSite")}
			${N("secure")}
		}` : "undefined";
    if (O)
      Q += `\nc.cookie = await parseCookie(c.set, c.headers.cookie, ${_})\n`;
    else
      Q += `\nc.cookie = await parseCookie(c.set, c.request.headers.get('cookie'), ${_})\n`;
  }
  if (z) {
    let N = [];
    if (J.query && J.query.schema.type === "object") {
      let _ = J.query.schema.properties;
      if (!J0(J.query))
        for (let [A, S] of Object.entries(_)) {
          let C = S;
          if (C && P1.optional in C && C.type === "array" && C.items)
            C = C.items;
          let { type: a, anyOf: H } = C, U0 = a === "array" || H?.some((u) => u.type === "string" && u.format === "ArrayString");
          N.push({ key: A, isArray: U0, isNestedObjectArray: U0 && C.items?.type === "object" || !!C.items?.anyOf?.some((u) => u.type === "object" || u.type === "array"), isObject: a === "object" || H?.some((u) => u.type === "string" && u.format === "ArrayString"), anyOf: !!H });
        }
    }
    if (!N.length)
      Q += `if(c.qi === -1) {
				c.query = {}
			} else {
				c.query = parseQueryFromURL(c.url.slice(c.qi + 1))
			}`;
    else
      Q += `if(c.qi !== -1) {
				let url = '&' + c.url.slice(c.qi + 1)

				${N.map(({ key: _, isArray: A, isObject: S, isNestedObjectArray: C, anyOf: a }, H) => {
        let U0 = `${H === 0 ? "let" : ""} memory = url.indexOf('&${_}=')
							let a${H}\n`;
        if (A)
          return U0 + (C ? `while (memory !== -1) {
											const start = memory + ${_.length + 2}
											memory = url.indexOf('&', start)

											if(a${H} === undefined)
												a${H} = ''
											else
												a${H} += ','

											let temp

											if(memory === -1) temp = decodeURIComponent(url.slice(start).replace(/\\+/g, ' '))
											else temp = decodeURIComponent(url.slice(start, memory).replace(/\\+/g, ' '))

											const charCode = temp.charCodeAt(0)
											if(charCode !== 91 && charCode !== 123)
												temp = '"' + temp + '"'

											a${H} += temp

											if(memory === -1) break

											memory = url.indexOf('&${_}=', memory)
											if(memory === -1) break
										}

										try {
										    if(a${H}.charCodeAt(0) === 91)
												a${H} = JSON.parse(a${H})
											else
												a${H} = JSON.parse('[' + a${H} + ']')
										} catch {}\n` : `while (memory !== -1) {
											const start = memory + ${_.length + 2}
											memory = url.indexOf('&', start)

											if(a${H} === undefined)
												a${H} = []

											if(memory === -1) {
												a${H}.push(decodeURIComponent(url.slice(start)).replace(/\\+/g, ' '))
												break
											}
											else a${H}.push(decodeURIComponent(url.slice(start, memory)).replace(/\\+/g, ' '))

											memory = url.indexOf('&${_}=', memory)
											if(memory === -1) break
										}\n`);
        if (S)
          return U0 + `if (memory !== -1) {
										const start = memory + ${_.length + 2}
										memory = url.indexOf('&', start)

										if(memory === -1) a${H} = decodeURIComponent(url.slice(start).replace(/\\+/g, ' '))
										else a${H} = decodeURIComponent(url.slice(start, memory).replace(/\\+/g, ' '))

										if (a${H} !== undefined) {
											try {
												a${H} = JSON.parse(a${H})
											} catch {}
										}
									}`;
        return U0 + `if (memory !== -1) {
										const start = memory + ${_.length + 2}
										memory = url.indexOf('&', start)

										if(memory === -1) a${H} = decodeURIComponent(url.slice(start).replace(/\\+/g, ' '))
										else {
											a${H} = decodeURIComponent(url.slice(start, memory).replace(/\\+/g, ' '))

											${a ? `
											let deepMemory = url.indexOf('&${_}=', memory)

											if(deepMemory !== -1) {
												a${H} = [a${H}]
												let first = true

												while(true) {
													const start = deepMemory + ${_.length + 2}
													if(first)
														first = false
													else
														deepMemory = url.indexOf('&', start)

													let value
													if(deepMemory === -1) value = decodeURIComponent(url.slice(start).replace(/\\+/g, ' '))
													else value = decodeURIComponent(url.slice(start, deepMemory).replace(/\\+/g, ' '))

													const vStart = value.charCodeAt(0)
													const vEnd = value.charCodeAt(value.length - 1)

													if((vStart === 91 && vEnd === 93) || (vStart === 123 && vEnd === 125))
														try {
															a${H}.push(JSON.parse(value))
														} catch {
														 	a${H}.push(value)
														}

													if(deepMemory === -1) break
												}
											}
												` : ""}
										}
									}`;
      }).join("\n")}

				c.query = {
					${N.map(({ key: _ }, A) => `'${_}': a${A}`).join(", ")}
				}
			} else {
				c.query = {}
			}`;
  }
  if (F)
    Q += "\nconst id = c[ELYSIA_REQUEST_ID]\n";
  let R = x2({ trace: j.trace, addFn: (N) => {
    Q += N;
  } });
  Q += "\ntry {\n";
  let Y0 = typeof Y === "function" && k(Y), e = F || j.afterResponse.length > 0 ? "c.response = " : "", y0 = P || D || Y0 || j.parse.length > 0 || j.afterHandle.some(k) || j.beforeHandle.some(k) || j.transform.some(k) || j.mapResponse.some(k), O1 = (typeof Y === "function" ? B2(Y) : false) || j.beforeHandle.some(B2) || j.afterHandle.some(B2) || j.transform.some(B2), t0 = K.cookie || K.set || O || F || J.response || B && I || O1, s = ", c.request";
  Q += `c.route = \`${W}\`\n`;
  let V1 = R("parse", { total: j.parse.length });
  if (D) {
    let N = j.parse.length || K.body || J.body;
    if (Q += "isParsing = true\n", j.type && !j.parse.length)
      switch (j.type) {
        case "json":
        case "application/json":
          if (t(J.body))
            Q += "try { c.body = await c.request.json() } catch {}";
          else
            Q += "c.body = await c.request.json()";
          break;
        case "text":
        case "text/plain":
          Q += "c.body = await c.request.text()\n";
          break;
        case "urlencoded":
        case "application/x-www-form-urlencoded":
          Q += "c.body = parseQuery(await c.request.text())\n";
          break;
        case "arrayBuffer":
        case "application/octet-stream":
          Q += "c.body = await c.request.arrayBuffer()\n";
          break;
        case "formdata":
        case "multipart/form-data":
          if (Q += "c.body = {}\n", t(J.body))
            Q += "let form; try { form = await c.request.formData() } catch {}";
          else
            Q += "const form = await c.request.formData()";
          Q += `\nif(form)
						for (const key of form.keys()) {
							if (c.body[key])
								continue

							const value = form.getAll(key)
							if (value.length === 1)
								c.body[key] = value[0]
							else c.body[key] = value
						} else form = {}\n`;
          break;
      }
    else if (N) {
      if (Q += "\n", Q += O ? "let contentType = c.headers['content-type']" : "let contentType = c.request.headers.get('content-type')", Q += `
				if (contentType) {
					const index = contentType.indexOf(';')
					if (index !== -1) contentType = contentType.substring(0, index)\n
					c.contentType = contentType\n`, j.parse.length) {
        Q += "let used = false\n";
        let _ = R("parse", { total: j.parse.length });
        for (let A = 0;A < j.parse.length; A++) {
          let S = _.resolveChild(j.parse[A].fn.name), C = `bo${A}`;
          if (A !== 0)
            Q += "if(!used) {\n";
          if (Q += `let ${C} = parse[${A}](c, contentType)\n`, Q += `if(${C} instanceof Promise) ${C} = await ${C}\n`, Q += `if(${C} !== undefined) { c.body = ${C}; used = true }\n`, S(), A !== 0)
            Q += "}";
        }
        _.resolve();
      }
      if (Q += "\ndelete c.contentType\n", j.parse.length)
        Q += "if (!used) {";
      if (j.type && !Array.isArray(j.type))
        switch (j.type) {
          case "json":
          case "application/json":
            if (t(J.body))
              Q += "try { c.body = await c.request.json() } catch {}";
            else
              Q += "c.body = await c.request.json()";
            break;
          case "text":
          case "text/plain":
            Q += "c.body = await c.request.text()\n";
            break;
          case "urlencoded":
          case "application/x-www-form-urlencoded":
            Q += "c.body = parseQuery(await c.request.text())\n";
            break;
          case "arrayBuffer":
          case "application/octet-stream":
            Q += "c.body = await c.request.arrayBuffer()\n";
            break;
          case "formdata":
          case "multipart/form-data":
            Q += `c.body = {}

							const form = await c.request.formData()
							for (const key of form.keys()) {
								if (c.body[key])
									continue

								const value = form.getAll(key)
								if (value.length === 1)
									c.body[key] = value[0]
								else c.body[key] = value
							}\n`;
            break;
        }
      else
        Q += `
					switch (contentType) {
						case 'application/json':
							${t(J.body) ? "try { c.body = await c.request.json() } catch {}" : "c.body = await c.request.json()"}
							break

						case 'text/plain':
							c.body = await c.request.text()
							break

						case 'application/x-www-form-urlencoded':
							c.body = parseQuery(await c.request.text())
							break

						case 'application/octet-stream':
							c.body = await c.request.arrayBuffer();
							break

						case 'multipart/form-data':
							c.body = {}

							const form = await c.request.formData()
							for (const key of form.keys()) {
								if (c.body[key])
									continue

								const value = form.getAll(key)
								if (value.length === 1)
									c.body[key] = value[0]
								else c.body[key] = value
							}

							break
					}`;
      if (j.parse.length)
        Q += "}";
      Q += "}\n";
    }
    Q += "\nisParsing = false\n";
  }
  if (V1.resolve(), j?.transform) {
    let N = R("transform", { total: j.transform.length });
    if (j.transform.length)
      Q += "\nlet transformed\n";
    for (let _ = 0;_ < j.transform.length; _++) {
      let A = j.transform[_], S = N.resolveChild(A.fn.name);
      if (Q += k(A) ? `transformed = await transform[${_}](c)\n` : `transformed = transform[${_}](c)\n`, A.subType === "mapDerive")
        Q += `if(transformed instanceof ElysiaCustomStatusResponse)
					throw transformed
				else {
					transformed.request = c.request
					transformed.store = c.store
					transformed.qi = c.qi
					transformed.path = c.path
					transformed.url = c.url
					transformed.redirect = c.redirect
					transformed.set = c.set
					transformed.error = c.error

					c = transformed
			}`;
      else
        Q += `if(transformed instanceof ElysiaCustomStatusResponse)
					throw transformed
				else
					Object.assign(c, transformed)\n`;
      S();
    }
    N.resolve();
  }
  if (J) {
    if (Q += "\n", J.headers) {
      if (r && "Clean" in J.headers && !J0(J.headers))
        Q += "c.headers = validator.headers.Clean(c.headers);\n";
      if (V0("default", J.headers.schema))
        for (let [N, _] of Object.entries(exports_value2.Default(J.headers.schema, {}))) {
          let A = typeof _ === "object" ? JSON.stringify(_) : typeof _ === "string" ? `'${_}'` : _;
          if (A !== undefined)
            Q += `c.headers['${N}'] ??= ${A}\n`;
        }
      if (t(J.headers))
        Q += "if(isNotEmpty(c.headers)) {";
      if (Q += `if(validator.headers.Check(c.headers) === false) {
				${L("headers")}
			}`, S0(J.headers.schema))
        Q += "c.headers = validator.headers.Decode(c.headers)\n";
      if (t(J.headers))
        Q += "}";
    }
    if (J.params) {
      if (V0("default", J.params.schema))
        for (let [N, _] of Object.entries(exports_value2.Default(J.params.schema, {}))) {
          let A = typeof _ === "object" ? JSON.stringify(_) : typeof _ === "string" ? `'${_}'` : _;
          if (A !== undefined)
            Q += `c.params['${N}'] ??= ${A}\n`;
        }
      if (Q += `if(validator.params.Check(c.params) === false) {
				${L("params")}
			}`, S0(J.params.schema))
        Q += "\nc.params = validator.params.Decode(c.params)\n";
    }
    if (J.query) {
      if (r && "Clean" in J.query && !J0(J.query))
        Q += "c.query = validator.query.Clean(c.query);\n";
      if (V0("default", J.query.schema))
        for (let [N, _] of Object.entries(exports_value2.Default(J.query.schema, {}))) {
          let A = typeof _ === "object" ? JSON.stringify(_) : typeof _ === "string" ? `'${_}'` : _;
          if (A !== undefined)
            Q += `if(c.query['${N}'] === undefined) c.query['${N}'] = ${A}\n`;
        }
      if (t(J.query))
        Q += "if(isNotEmpty(c.query)) {";
      if (Q += `if(validator.query.Check(c.query) === false) {
          		${L("query")}
			}`, S0(J.query.schema))
        Q += "\nc.query = validator.query.Decode(Object.assign({}, c.query))\n";
      if (t(J.query))
        Q += "}";
    }
    if (J.body) {
      if (r && "Clean" in J.body && !J0(J.body))
        Q += "c.body = validator.body.Clean(c.body);\n";
      let N = S0(J.body.schema);
      if (N || t(J.body))
        Q += '\nconst isNotEmptyObject = c.body && (typeof c.body === "object" && isNotEmpty(c.body))\n';
      if (V0("default", J.body.schema)) {
        let _ = exports_value2.Default(J.body.schema, J.body.schema.type === "object" ? {} : undefined), A = typeof _ === "object" ? JSON.stringify(_) : typeof _ === "string" ? `'${_}'` : _;
        if (Q += `if(validator.body.Check(c.body) === false) {
					if (typeof c.body === 'object') {
						c.body = Object.assign(${A}, c.body)
					} else { c.body = ${A} }`, t(J.body))
          Q += `
					    if(isNotEmptyObject && validator.body.Check(c.body) === false) {
            				${L("body")}
             			}
                    }`;
        else
          Q += `
    				if(validator.body.Check(c.body) === false) {
        				${L("body")}
         			}
                }`;
      } else if (t(J.body))
        Q += `if(isNotEmptyObject && validator.body.Check(c.body) === false) {
         			${L("body")}
          		}`;
      else
        Q += `if(validator.body.Check(c.body) === false) {
         			${L("body")}
          		}`;
      if (N)
        Q += "\nif(isNotEmptyObject) c.body = validator.body.Decode(c.body)\n";
    }
    if (c(b?.schema?.properties ?? b?.schema?.schema ?? {})) {
      if (Q += `const cookieValue = {}
    			for(const [key, value] of Object.entries(c.cookie))
    				cookieValue[key] = value.value\n`, V0("default", b.schema))
        for (let [N, _] of Object.entries(exports_value2.Default(b.schema, {})))
          Q += `cookieValue['${N}'] = ${typeof _ === "object" ? JSON.stringify(_) : _}\n`;
      if (t(J.cookie))
        Q += "if(isNotEmpty(c.cookie)) {";
      if (Q += `if(validator.cookie.Check(cookieValue) === false) {
				${L("cookie", "cookieValue")}
			}`, S0(J.cookie.schema))
        Q += `\nfor(const [key, value] of Object.entries(validator.cookie.Decode(cookieValue)))
					c.cookie[key].value = value\n`;
      if (t(J.cookie))
        Q += "}";
    }
  }
  if (j?.beforeHandle) {
    let N = R("beforeHandle", { total: j.beforeHandle.length }), _ = false;
    for (let A = 0;A < j.beforeHandle.length; A++) {
      let S = j.beforeHandle[A], C = N.resolveChild(S.fn.name), a = E0(S);
      if (S.subType === "resolve" || S.subType === "mapResolve") {
        if (!_)
          _ = true, Q += "\nlet resolved\n";
        if (Q += k(S) ? `resolved = await beforeHandle[${A}](c);\n` : `resolved = beforeHandle[${A}](c);\n`, S.subType === "mapResolve")
          Q += `if(resolved instanceof ElysiaCustomStatusResponse)
						throw resolved
					else {
						resolved.request = c.request
						resolved.store = c.store
						resolved.qi = c.qi
						resolved.path = c.path
						resolved.url = c.url
						resolved.redirect = c.redirect
						resolved.set = c.set
						resolved.error = c.error

						c = resolved
					}`;
        else
          Q += `if(resolved instanceof ElysiaCustomStatusResponse)
						throw resolved
					else
						Object.assign(c, resolved)\n`;
      } else if (!a)
        Q += k(S) ? `await beforeHandle[${A}](c);\n` : `beforeHandle[${A}](c);\n`, C();
      else {
        if (Q += k(S) ? `be = await beforeHandle[${A}](c);\n` : `be = beforeHandle[${A}](c);\n`, C("be"), Q += "if(be !== undefined) {\n", N.resolve(), j.afterHandle?.length) {
          R("handle", { name: B ? Y.name : undefined }).resolve();
          let u = R("afterHandle", { total: j.afterHandle.length });
          for (let G0 = 0;G0 < j.afterHandle.length; G0++) {
            let L0 = j.afterHandle[G0], S1 = E0(L0), C1 = u.resolveChild(L0.fn.name);
            if (Q += "c.response = be\n", !S1)
              Q += k(L0.fn) ? `await afterHandle[${G0}](c, be)\n` : `afterHandle[${G0}](c, be)\n`;
            else
              Q += k(L0.fn) ? `af = await afterHandle[${G0}](c)\n` : `af = afterHandle[${G0}](c)\n`, Q += "if(af !== undefined) { c.response = be = af }\n";
            C1("af");
          }
          u.resolve();
        }
        if (J.response)
          Q += f("be");
        let U0 = R("mapResponse", { total: j.mapResponse.length });
        if (j.mapResponse.length) {
          Q += "\nc.response = be\n";
          for (let u = 0;u < j.mapResponse.length; u++) {
            let G0 = j.mapResponse[u], L0 = U0.resolveChild(G0.fn.name);
            Q += `\nif(mr === undefined) {
							mr = ${C0(G0) ? "await" : ""} onMapResponse[${u}](c)
							if(mr !== undefined) be = c.response = mr
						}\n`, L0();
          }
        }
        U0.resolve(), Q += E, Q += `return mapEarlyResponse(${e} be, c.set ${s})}\n`;
      }
    }
    N.resolve();
  }
  if (j?.afterHandle.length) {
    let N = R("handle", { name: B ? Y.name : undefined });
    if (j.afterHandle.length)
      Q += Y0 ? `let r = c.response = await ${U};\n` : `let r = c.response = ${U};\n`;
    else
      Q += Y0 ? `let r = await ${U};\n` : `let r = ${U};\n`;
    N.resolve();
    let _ = R("afterHandle", { total: j.afterHandle.length });
    for (let S = 0;S < j.afterHandle.length; S++) {
      let C = j.afterHandle[S], a = E0(C), H = _.resolveChild(C.fn.name);
      if (!a)
        Q += k(C.fn) ? `await afterHandle[${S}](c)\n` : `afterHandle[${S}](c)\n`, H();
      else if (Q += k(C.fn) ? `af = await afterHandle[${S}](c)\n` : `af = afterHandle[${S}](c)\n`, H("af"), J.response)
        Q += "if(af !== undefined) {", _.resolve(), Q += f("af"), Q += "c.response = af }";
      else
        Q += "if(af !== undefined) {", _.resolve(), Q += "c.response = af}\n";
    }
    if (_.resolve(), Q += "r = c.response\n", J.response)
      Q += f();
    Q += E;
    let A = R("mapResponse", { total: j.mapResponse.length });
    if (j.mapResponse.length)
      for (let S = 0;S < j.mapResponse.length; S++) {
        let C = j.mapResponse[S], a = A.resolveChild(C.fn.name);
        Q += `\nmr = ${C0(C) ? "await" : ""} onMapResponse[${S}](c)
				if(mr !== undefined) r = c.response = mr\n`, a();
      }
    if (A.resolve(), t0)
      Q += `return mapResponse(${e} r, c.set ${s})\n`;
    else
      Q += `return mapCompactResponse(${e} r ${s})\n`;
  } else {
    let N = R("handle", { name: B ? Y.name : undefined });
    if (J.response || j.mapResponse.length) {
      if (Q += Y0 ? `let r = await ${U};\n` : `let r = ${U};\n`, N.resolve(), J.response)
        Q += f();
      R("afterHandle").resolve();
      let _ = R("mapResponse", { total: j.mapResponse.length });
      if (j.mapResponse.length) {
        Q += "\nc.response = r\n";
        for (let A = 0;A < j.mapResponse.length; A++) {
          let S = j.mapResponse[A], C = _.resolveChild(S.fn.name);
          Q += `\nif(mr === undefined) {
						mr = ${C0(S) ? "await" : ""} onMapResponse[${A}](c)
    					if(mr !== undefined) r = c.response = mr
					}\n`, C();
        }
      }
      if (_.resolve(), Q += E, Y instanceof Response)
        Q += K.set ? `if(
					isNotEmpty(c.set.headers) ||
					c.set.status !== 200 ||
					c.set.redirect ||
					c.set.cookie
				)
					return mapResponse(${e} ${U}.clone(), c.set ${s})
				else
					return ${U}.clone()` : `return ${U}.clone()`, Q += "\n";
      else if (t0)
        Q += `return mapResponse(${e} r, c.set ${s})\n`;
      else
        Q += `return mapCompactResponse(${e} r ${s})\n`;
    } else if (P || F) {
      Q += Y0 ? `let r = await ${U};\n` : `let r = ${U};\n`, N.resolve(), R("afterHandle").resolve();
      let _ = R("mapResponse", { total: j.mapResponse.length });
      if (j.mapResponse.length) {
        Q += "\nc.response = r\n";
        for (let A = 0;A < j.mapResponse.length; A++) {
          let S = j.mapResponse[A], C = _.resolveChild(S.fn.name);
          Q += `\nif(mr === undefined) {
							mr = ${C0(S) ? "await" : ""} onMapResponse[${A}](c)
    						if(mr !== undefined) r = c.response = mr
						}\n`, C();
        }
      }
      if (_.resolve(), Q += E, t0)
        Q += `return mapResponse(${e} r, c.set ${s})\n`;
      else
        Q += `return mapCompactResponse(${e} r ${s})\n`;
    } else {
      N.resolve();
      let _ = Y0 ? `await ${U}` : U;
      if (R("afterHandle").resolve(), Y instanceof Response)
        Q += K.set ? `if(
					isNotEmpty(c.set.headers) ||
					c.set.status !== 200 ||
					c.set.redirect ||
					c.set.cookie
				)
					return mapResponse(${e} ${U}.clone(), c.set ${s})
				else
					return ${U}.clone()` : `return ${U}.clone()`, Q += "\n";
      else if (t0)
        Q += `return mapResponse(${e} ${_}, c.set ${s})\n`;
      else
        Q += `return mapCompactResponse(${e} ${_} ${s})\n`;
    }
  }
  if (Q += "\n} catch(error) {", D)
    Q += "\nif(isParsing) error = new ParseError()\n";
  if (!y0)
    Q += "\nreturn (async () => {\n";
  if (Q += "\nconst set = c.set\nif (!set.status || set.status < 300) set.status = error?.status || 500\n", F)
    for (let N = 0;N < j.trace.length; N++)
      Q += `report${N}?.resolve(error);reportChild${N}?.(error);\n`;
  let K2 = R("error", { total: j.error.length });
  if (j.error.length) {
    Q += `
				c.error = error
				if(error instanceof TypeBoxError) {
					c.code = "VALIDATION"
					c.set.status = 422
				} else
					c.code = error.code ?? error[ERROR_CODE] ?? "UNKNOWN"
				let er
			`;
    for (let N = 0;N < j.error.length; N++) {
      let _ = K2.resolveChild(j.error[N].fn.name);
      if (k(j.error[N]))
        Q += `\ner = await handleErrors[${N}](c)\n`;
      else
        Q += `\ner = handleErrors[${N}](c)\nif (er instanceof Promise) er = await er\n`;
      _();
      let A = R("mapResponse", { total: j.mapResponse.length });
      if (j.mapResponse.length)
        for (let S = 0;S < j.mapResponse.length; S++) {
          let C = j.mapResponse[S], a = A.resolveChild(C.fn.name);
          Q += `\nc.response = er\n
							er = ${C0(C) ? "await" : ""} onMapResponse[${S}](c)
							if(er instanceof Promise) er = await er\n`, a();
        }
      if (A.resolve(), Q += `er = mapEarlyResponse(er, set ${s})\n`, Q += "if (er) {", F) {
        for (let S = 0;S < j.trace.length; S++)
          Q += `\nreport${S}.resolve()\n`;
        K2.resolve();
      }
      Q += "return er\n}\n";
    }
  }
  if (K2.resolve(), Q += "return handleError(c, error, true)\n", !y0)
    Q += "})()";
  if (Q += "}", w || F) {
    if (Q += " finally { ", !y0)
      Q += ";(async () => {";
    let N = R("afterResponse", { total: j.afterResponse.length });
    if (w)
      for (let _ = 0;_ < j.afterResponse.length; _++) {
        let A = N.resolveChild(j.afterResponse[_].fn.name);
        Q += `\nawait afterResponse[${_}](c);\n`, A();
      }
    if (N.resolve(), !y0)
      Q += "})();";
    Q += "}";
  }
  Q = `const {
		handler,
		handleError,
		hooks: {
			transform,
			resolve,
			beforeHandle,
			afterHandle,
			mapResponse: onMapResponse,
			parse,
			error: handleErrors,
			afterResponse,
			trace: _trace
		},
		validator,
		utils: {
			mapResponse,
			mapCompactResponse,
			mapEarlyResponse,
			parseQuery,
			parseQueryFromURL,
			isNotEmpty
		},
		error: {
			NotFoundError,
			ValidationError,
			InternalServerError,
			ParseError
		},
		schema,
		definitions,
		ERROR_CODE,
		parseCookie,
		signCookie,
		decodeURIComponent,
		ElysiaCustomStatusResponse,
		ELYSIA_TRACE,
		ELYSIA_REQUEST_ID,
		getServer,
		TypeBoxError
	} = hooks

	const trace = _trace.map(x => typeof x === 'function' ? x : x.fn)

	return ${y0 ? "async" : ""} function handle(c) {
		${j.beforeHandle.length ? "let be" : ""}
		${j.afterHandle.length ? "let af" : ""}
		${j.mapResponse.length ? "let mr" : ""}

		${G ? "c.schema = schema; c.defs = definitions" : ""}
		${Q}
	}`;
  try {
    return Function("hooks", Q)({ handler: Y, hooks: E2(j), validator: J, handleError: $.handleError, utils: { mapResponse: x, mapCompactResponse: Z0, mapEarlyResponse: g, parseQuery: p0, parseQueryFromURL: G2, isNotEmpty: c }, error: { NotFoundError: A0, ValidationError: q, InternalServerError: Q2, ParseError: Y2 }, schema: $.router.history, definitions: $.definitions.type, ERROR_CODE: I0, parseCookie: e0, signCookie: x0, decodeURIComponent: N1.default, ElysiaCustomStatusResponse: l, ELYSIA_TRACE: i0, ELYSIA_REQUEST_ID: P0, getServer: () => $.getServer(), TypeBoxError });
  } catch {
    let N = E2(j);
    console.log("[Composer] failed to generate optimized handler"), console.log("Please report the following to SaltyAom privately as it may include sensitive information about your codebase:"), console.log("---"), console.log({ handler: typeof Y === "function" ? Y.toString() : Y, hooks: { ...N, transform: N?.transform?.map?.((_) => _.toString()), resolve: N?.resolve?.map?.((_) => _.toString()), beforeHandle: N?.beforeHandle?.map?.((_) => _.toString()), afterHandle: N?.afterHandle?.map?.((_) => _.toString()), mapResponse: N?.mapResponse?.map?.((_) => _.toString()), parse: N?.parse?.map?.((_) => _.toString()), error: N?.error?.map?.((_) => _.toString()), afterResponse: N?.afterResponse?.map?.((_) => _.toString()), stop: N?.stop?.map?.((_) => _.toString()) }, validator: J, definitions: $.definitions.type }), console.log("---"), process.exit(1);
  }
};
var g2 = ($) => {
  let W = $.config.handler?.standardHostname ?? true, X = "", Z = "", j = $.setHeaders;
  for (let D of Object.keys($.singleton.decorator))
    X += `,${D}: app.singleton.decorator.${D}`;
  let J = $.router, Y = $.event.trace.length > 0, G = `
	const route = router.find(request.method, path) ${J.http.root.ALL ? '?? router.find("ALL", path)' : ""}

	if (route === null)
		return ${$.event.error.length ? "app.handleError(ctx, notFound)" : $.event.request.length ? `new Response(error404Message, {
					status: ctx.set.status === 200 ? 404 : ctx.set.status,
					headers: ctx.set.headers
				})` : "error404.clone()"}

	ctx.params = route.params\n`;
  G += `if(route.store.handler) return route.store.handler(ctx)
	return (route.store.handler = route.store.compile())(ctx)\n`;
  let K = "";
  for (let [D, { code: M, all: I, static: O }] of Object.entries(J.static.http.map)) {
    if (O)
      K += `case '${D}':\nswitch(request.method) {\n${M}\n${I ?? "default: break map"}}\n\n`;
    K += `case '${D}':\nswitch(request.method) {\n${M}\n${I ?? "default: break map"}}\n\n`;
  }
  let B = $.event.request.some(k);
  if (Z += `const {
		app,
		mapEarlyResponse,
		NotFoundError,
		randomId,
		handleError,
		error,
		redirect,
		ELYSIA_TRACE,
		ELYSIA_REQUEST_ID,
		getServer
	} = data

	const store = app.singleton.store
	const staticRouter = app.router.static.http
	const st = staticRouter.handlers
	const wsRouter = app.router.ws
	const router = app.router.http
	const trace = app.event.trace.map(x => typeof x === 'function' ? x : x.fn)

	const notFound = new NotFoundError()
	const hoc = app.extender.higherOrderFunctions.map(x => x.fn)

	${$.event.request.length ? "const onRequest = app.event.request.map(x => x.fn)" : ""}
	${$.event.error.length ? "" : `\nconst error404Message = notFound.message.toString()
	const error404 = new Response(error404Message, { status: 404 });\n`}

	${$.event.trace.length ? `const ${$.event.trace.map((D, M) => `tr${M} = app.event.trace[${M}].fn`).join(",")}` : ""}

	${B ? "async" : ""} function map(request) {\n`, $.event.request.length)
    Z += "let re";
  if (Z += `\nconst url = request.url
		const s = url.indexOf('/', ${W ? 11 : 7})
		const qi = url.indexOf('?', s + 1)
		let path
		if(qi === -1)
			path = url.substring(s)
		else
			path = url.substring(s, qi)\n`, Z += `${Y ? "const id = randomId()" : ""}
		const ctx = {
			request,
			store,
			qi,
			path,
			url,
			redirect,
			set: {
				headers: ${Object.keys(j ?? {}).length ? "Object.assign({}, app.setHeaders)" : "{}"},
				status: 200
			},
			error
			${$.inference.server ? `, get server() {
							return getServer()
						}` : ""}
			${Y ? ",[ELYSIA_REQUEST_ID]: id" : ""}
			${X}
		}\n`, $.event.trace.length)
    Z += `\nctx[ELYSIA_TRACE] = [${$.event.trace.map((D, M) => `tr${M}(ctx)`).join(",")}]\n`;
  let w = x2({ context: "ctx", trace: $.event.trace, addFn(D) {
    Z += D;
  } })("request", { attribute: "ctx", total: $.event.request.length });
  if ($.event.request.length) {
    Z += "\n try {\n";
    for (let D = 0;D < $.event.request.length; D++) {
      let M = $.event.request[D], I = E0(M), O = k(M), P = w.resolveChild($.event.request[D].fn.name);
      if (I)
        Z += `re = mapEarlyResponse(
					${O ? "await" : ""} onRequest[${D}](ctx),
					ctx.set,
					request
				)\n`, P("re"), Z += "if(re !== undefined) return re\n";
      else
        Z += `${O ? "await" : ""} onRequest[${D}](ctx)\n`, P();
    }
    Z += `} catch (error) {
			return app.handleError(ctx, error)
		}`;
  }
  w.resolve();
  let F = $.router.static.ws, Q = $.router.ws;
  if (Object.keys(F).length || Q.history.length) {
    Z += `
			if(request.method === 'GET') {
				switch(path) {`;
    for (let [D, M] of Object.entries(F))
      Z += `
					case '${D}':
						if(request.headers.get('upgrade') === 'websocket')
							return st[${M}](ctx)

						break`;
    Z += `
				default:
					if(request.headers.get('upgrade') === 'websocket') {
						const route = wsRouter.find('ws', path)

						if(route) {
							ctx.params = route.params

							if(route.store.handler)
							    return route.store.handler(ctx)

							return (route.store.handler = route.store.compile())(ctx)
						}
					}

					break
			}
		}\n`;
  }
  if (Z += `
		map: switch(path) {
			${K}

			default:
				break
		}

		${G}
	}\n`, $.extender.higherOrderFunctions.length) {
    let D = "map";
    for (let M = 0;M < $.extender.higherOrderFunctions.length; M++)
      D = `hoc[${M}](${D}, request)`;
    Z += `return function hocMap(request) { return ${D}(request) }`;
  } else
    Z += "return map";
  let z = f2($);
  return $.handleError = z, Function("data", Z)({ app: $, mapEarlyResponse: g, NotFoundError: A0, randomId: j2, handleError: z, error: q2, redirect: d0, ELYSIA_TRACE: i0, ELYSIA_REQUEST_ID: P0, getServer: () => $.getServer() });
};
var f2 = ($) => {
  let W = $.event, X = "";
  X += `const {
		app: { event: { error: onErrorContainer, afterResponse: resContainer, mapResponse: _onMapResponse, trace: _trace } },
		mapResponse,
		ERROR_CODE,
		ElysiaCustomStatusResponse,
		ELYSIA_TRACE,
		ELYSIA_REQUEST_ID
	} = inject

	const trace = _trace.map(x => typeof x === 'function' ? x : x.fn)
	const onMapResponse = []

	for(let i = 0; i < _onMapResponse.length; i++)
		onMapResponse.push(_onMapResponse[i].fn ?? _onMapResponse[i])

	delete _onMapResponse

	const onError = onErrorContainer.map(x => x.fn)
	const res = resContainer.map(x => x.fn)

	return ${$.event.error.find(k) || $.event.mapResponse.find(k) ? "async" : ""} function(context, error, skipGlobal) {`;
  let Z = $.event.trace.length > 0;
  if (Z)
    X += "\nconst id = context[ELYSIA_REQUEST_ID]\n";
  let j = x2({ context: "context", trace: W.trace, addFn: (G) => {
    X += G;
  } });
  X += `
		const set = context.set
		let r

		if(!context.code)
			context.code = error.code ?? error[ERROR_CODE]

		if(!(context.error instanceof Error))
			context.error = error

		if(error instanceof ElysiaCustomStatusResponse) {
			error.status = error.code
			error.message = error.response
		}\n`;
  let J = Z || W.afterResponse.length > 0 || W.afterResponse.length > 0 ? "context.response = " : "";
  for (let G = 0;G < $.event.error.length; G++) {
    let K = $.event.error[G], B = `${k(K) ? "await " : ""}onError[${G}](context)`;
    if (X += "\nif(skipGlobal !== true) {\n", E0(K)) {
      X += `r = ${B}; if(r !== undefined) {
				if(r instanceof Response) return r

				if(r instanceof ElysiaCustomStatusResponse) {
					error.status = error.code
					error.message = error.response
				}

				if(set.status === 200) set.status = error.status\n`;
      let U = j("mapResponse", { total: W.mapResponse.length, name: "context" });
      if (W.mapResponse.length)
        for (let w = 0;w < W.mapResponse.length; w++) {
          let F = W.mapResponse[w], Q = U.resolveChild(F.fn.name);
          X += `\ncontext.response = r
						r = ${C0(F) ? "await" : ""} onMapResponse[${w}](context)\n`, Q();
        }
      U.resolve(), X += `return mapResponse(${J} r, set, context.request)}\n`;
    } else
      X += B + "\n";
    X += "\n}\n";
  }
  X += `if(error.constructor.name === "ValidationError" || error.constructor.name === "TransformDecodeError") {
		set.status = error.status ?? 422
		return new Response(
			error.message,
			{
				headers: Object.assign(
					{ 'content-type': 'application/json'},
					set.headers
				),
				status: set.status
			}
		)
	} else {
		if(error.code && typeof error.status === "number")
			return new Response(
				error.message,
				{ headers: set.headers, status: error.status }
			)\n`;
  let Y = j("mapResponse", { total: W.mapResponse.length, name: "context" });
  if (W.mapResponse.length)
    for (let G = 0;G < W.mapResponse.length; G++) {
      let K = W.mapResponse[G], B = Y.resolveChild(K.fn.name);
      X += `\ncontext.response = error
			error = ${C0(K) ? "await" : ""} onMapResponse[${G}](context)\n`, B();
    }
  return Y.resolve(), X += `\nreturn mapResponse(${J} error, set, context.request)\n}\n}`, Function("inject", X)({ app: $, mapResponse: x, ERROR_CODE: I0, ElysiaCustomStatusResponse: l, ELYSIA_TRACE: i0, ELYSIA_REQUEST_ID: P0 });
};
var y2 = ($) => async (W) => {
  let X = W.url, Z = X.indexOf("/", 11), j = X.indexOf("?", Z + 1), J = j === -1 ? X.substring(Z) : X.substring(Z, j), Y = { cookie: {}, status: 200, headers: {} }, G = Object.assign({}, $.singleton.decorator, { set: Y, store: $.singleton.store, request: W, path: J, qi: j, redirect: d0 });
  try {
    for (let I = 0;I < $.event.request.length; I++) {
      let O = $.event.request[I].fn, P = O(G);
      if (P instanceof Promise)
        P = await P;
      if (P = g(P, Y), P)
        return G.response = P;
    }
    let K = $.router.dynamic.find(W.method, J) ?? $.router.dynamic.find("ALL", J);
    if (!K)
      throw new A0;
    let { handle: B, hooks: U, validator: w, content: F } = K.store, Q;
    if (W.method !== "GET" && W.method !== "HEAD")
      if (F)
        switch (F) {
          case "application/json":
            Q = await W.json();
            break;
          case "text/plain":
            Q = await W.text();
            break;
          case "application/x-www-form-urlencoded":
            Q = p0(await W.text());
            break;
          case "application/octet-stream":
            Q = await W.arrayBuffer();
            break;
          case "multipart/form-data":
            Q = {};
            let I = await W.formData();
            for (let O of I.keys()) {
              if (Q[O])
                continue;
              let P = I.getAll(O);
              if (P.length === 1)
                Q[O] = P[0];
              else
                Q[O] = P;
            }
            break;
        }
      else {
        let I = W.headers.get("content-type");
        if (I) {
          let O = I.indexOf(";");
          if (O !== -1)
            I = I.slice(0, O);
          G.contentType = I;
          for (let P = 0;P < U.parse.length; P++) {
            let b = U.parse[P].fn, T = b(G, I);
            if (T instanceof Promise)
              T = await T;
            if (T) {
              Q = T;
              break;
            }
          }
          if (delete G.contentType, Q === undefined)
            switch (I) {
              case "application/json":
                Q = await W.json();
                break;
              case "text/plain":
                Q = await W.text();
                break;
              case "application/x-www-form-urlencoded":
                Q = p0(await W.text());
                break;
              case "application/octet-stream":
                Q = await W.arrayBuffer();
                break;
              case "multipart/form-data":
                Q = {};
                let P = await W.formData();
                for (let b of P.keys()) {
                  if (Q[b])
                    continue;
                  let T = P.getAll(b);
                  if (T.length === 1)
                    Q[b] = T[0];
                  else
                    Q[b] = T;
                }
                break;
            }
        }
      }
    G.body = Q, G.params = K?.params || undefined, G.query = j === -1 ? {} : G2(X.substring(j + 1)), G.headers = {};
    for (let [I, O] of W.headers.entries())
      G.headers[I] = O;
    let z = Object.assign({}, $.config?.cookie, w?.cookie?.config), D = W.headers.get("cookie");
    G.cookie = await e0(G.set, D, z ? { secrets: z.secrets !== undefined ? typeof z.secrets === "string" ? z.secrets : z.secrets.join(",") : undefined, sign: z.sign === true ? true : z.sign !== undefined ? typeof z.sign === "string" ? z.sign : z.sign.join(",") : undefined } : undefined);
    for (let I = 0;I < U.transform.length; I++) {
      let O = U.transform[I], P = O.fn(G);
      if (O.subType === "derive")
        if (P instanceof Promise)
          Object.assign(G, await P);
        else
          Object.assign(G, P);
      else if (P instanceof Promise)
        await P;
    }
    if (w) {
      if (w.createHeaders?.()) {
        let I = {};
        for (let O in W.headers)
          I[O] = W.headers.get(O);
        if (w.headers.Check(I) === false)
          throw new q("header", w.headers, I);
      } else if (w.headers?.Decode)
        G.headers = w.headers.Decode(G.headers);
      if (w.createParams?.()?.Check(G.params) === false)
        throw new q("params", w.params, G.params);
      else if (w.params?.Decode)
        G.params = w.params.Decode(G.params);
      if (w.createQuery?.()?.Check(G.query) === false)
        throw new q("query", w.query, G.query);
      else if (w.query?.Decode)
        G.query = w.query.Decode(G.query);
      if (w.createCookie?.()) {
        let I = {};
        for (let [O, P] of Object.entries(G.cookie))
          I[O] = P.value;
        if (w.cookie.Check(I) === false)
          throw new q("cookie", w.cookie, I);
        else if (w.cookie?.Decode)
          I = w.cookie.Decode(I);
      }
      if (w.createBody?.()?.Check(Q) === false)
        throw new q("body", w.body, Q);
      else if (w.body?.Decode)
        G.body = w.body.Decode(Q);
    }
    for (let I = 0;I < U.beforeHandle.length; I++) {
      let O = U.beforeHandle[I], P = O.fn(G);
      if (O.subType === "resolve") {
        if (P instanceof Promise)
          Object.assign(G, await P);
        else
          Object.assign(G, P);
        continue;
      } else if (P instanceof Promise)
        P = await P;
      if (P !== undefined) {
        G.response = P;
        for (let T = 0;T < U.afterHandle.length; T++) {
          let E = U.afterHandle[T].fn(G);
          if (E instanceof Promise)
            E = await E;
          if (E)
            P = E;
        }
        let b = g(P, G.set);
        if (b)
          return G.response = b;
      }
    }
    let M = B(G);
    if (M instanceof Promise)
      M = await M;
    if (!U.afterHandle.length) {
      let I = M instanceof l ? M.code : Y.status ? typeof Y.status === "string" ? _0[Y.status] : Y.status : 200, O = w?.createResponse?.()?.[I];
      if (O?.Check(M) === false)
        throw new q("response", O, M);
      else if (O?.Decode)
        M = O.Decode(M);
    } else {
      G.response = M;
      for (let I = 0;I < U.afterHandle.length; I++) {
        let O = U.afterHandle[I].fn(G);
        if (O instanceof Promise)
          O = await O;
        let P = g(O, G.set);
        if (P !== undefined) {
          let b = w?.response?.[P.status];
          if (b?.Check(P) === false)
            throw new q("response", b, P);
          else if (b?.Decode)
            M = b.Decode(M);
          return G.response = P;
        }
      }
    }
    if (G.set.cookie && z?.sign) {
      let I = !z.secrets ? undefined : typeof z.secrets === "string" ? z.secrets : z.secrets[0];
      if (z.sign === true)
        for (let [O, P] of Object.entries(G.set.cookie))
          G.set.cookie[O].value = await x0(P.value, "${secret}");
      else {
        let O = w?.cookie?.schema?.properties;
        for (let P of z.sign) {
          if (!(P in O))
            continue;
          if (G.set.cookie[P]?.value)
            G.set.cookie[P].value = await x0(G.set.cookie[P].value, I);
        }
      }
    }
    return G.response = x(M, G.set);
  } catch (K) {
    if (K.status)
      Y.status = K.status;
    return $.handleError(G, K);
  } finally {
    for (let K of $.event.afterResponse)
      await K.fn(G);
  }
};
var A1 = ($) => async (W, X) => {
  let Z = Object.assign(W, { error: X, code: X.code });
  Z.set = W.set;
  for (let j = 0;j < $.event.error.length; j++) {
    let Y = $.event.error[j].fn(Z);
    if (Y instanceof Promise)
      Y = await Y;
    if (Y !== undefined && Y !== null)
      return W.response = x(Y, W.set);
  }
  return new Response(typeof X.cause === "string" ? X.cause : X.message, { headers: W.set.headers, status: X.status ?? 500 });
};

class Q0 {
  config;
  server = null;
  dependencies = {};
  _routes = {};
  _types = { Prefix: "", Scoped: false, Singleton: {}, Definitions: {}, Metadata: {} };
  _ephemeral = {};
  _volatile = {};
  static version = R2;
  version = R2;
  singleton = { decorator: {}, store: {}, derive: {}, resolve: {} };
  get store() {
    return this.singleton.store;
  }
  get decorator() {
    return this.singleton.decorator;
  }
  get _scoped() {
    return this.config.scoped;
  }
  definitions = { type: {}, error: {} };
  extender = { macros: [], higherOrderFunctions: [] };
  validator = { global: null, scoped: null, local: null, getCandidate() {
    return b0(b0(this.global, this.scoped), this.local);
  } };
  event = { start: [], request: [], parse: [], transform: [], beforeHandle: [], afterHandle: [], mapResponse: [], afterResponse: [], trace: [], error: [], stop: [] };
  telemetry = { stack: undefined };
  router = { http: new M0, ws: new M0, dynamic: new M0, static: { http: { static: {}, handlers: [], map: {}, all: "" }, ws: {} }, history: [] };
  routeTree = new Map;
  get routes() {
    return this.router.history;
  }
  getGlobalRoutes() {
    return this.router.history;
  }
  inference = { body: false, cookie: false, headers: false, query: false, set: false, server: false };
  getServer() {
    return this.server;
  }
  _promisedModules;
  get promisedModules() {
    if (!this._promisedModules)
      this._promisedModules = new T2;
    return this._promisedModules;
  }
  constructor($ = {}) {
    if ($.tags)
      if (!$.detail)
        $.detail = { tags: $.tags };
      else
        $.detail.tags = $.tags;
    if ($.nativeStaticResponse === undefined)
      $.nativeStaticResponse = true;
    if (this.config = {}, this.applyConfig($ ?? {}), $?.analytic && ($?.name || $?.seed !== undefined))
      this.telemetry.stack = new Error().stack;
  }
  env($, W = Bun?.env ?? process.env) {
    if (m($, { dynamic: true, additionalProperties: true, coerce: true }).Check(W) === false) {
      let Z = new q("env", $, W);
      throw new Error(Z.all.map((j) => j.summary).join("\n"));
    }
    return this;
  }
  wrap($) {
    return this.extender.higherOrderFunctions.push({ checksum: N0(JSON.stringify({ name: this.config.name, seed: this.config.seed, content: $.toString() })), fn: $ }), this;
  }
  applyMacro($) {
    if (this.extender.macros.length) {
      let W = F1({ globalHook: this.event, localHook: $ }), X = { events: { global: this.event, local: $ }, onParse: W("parse"), onTransform: W("transform"), onBeforeHandle: W("beforeHandle"), onAfterHandle: W("afterHandle"), mapResponse: W("mapResponse"), onAfterResponse: W("afterResponse"), onError: W("error") };
      for (let Z of this.extender.macros)
        _1(Z.fn(X), $);
    }
  }
  applyConfig($) {
    return this.config = { prefix: "", aot: true, strictPath: false, global: false, analytic: false, normalize: true, ...$, cookie: { path: "/", ...$?.cookie }, experimental: $?.experimental ?? {}, seed: $?.seed === undefined ? "" : $?.seed }, this;
  }
  get models() {
    let $ = {};
    for (let [W, X] of Object.entries(this.definitions.type))
      $[W] = m(X);
    return $;
  }
  add($, W, X, Z, { allowMeta: j = false, skipPrefix: J = false } = { allowMeta: false, skipPrefix: false }) {
    if (Z = M1(Z), W !== "" && W.charCodeAt(0) !== 47)
      W = "/" + W;
    if (this.config.prefix && !J && !this.config.scoped)
      W = this.config.prefix + W;
    if (Z?.type)
      switch (Z.type) {
        case "text":
          Z.type = "text/plain";
          break;
        case "json":
          Z.type = "application/json";
          break;
        case "formdata":
          Z.type = "multipart/form-data";
          break;
        case "urlencoded":
          Z.type = "application/x-www-form-urlencoded";
          break;
        case "arrayBuffer":
          Z.type = "application/octet-stream";
          break;
        default:
          break;
      }
    let Y = this.definitions.type, G = !this.config.aot, K = { ...this.validator.getCandidate() }, B = { body: Z?.body ?? K?.body, headers: Z?.headers ?? K?.headers, params: Z?.params ?? K?.params, query: Z?.query ?? K?.query, cookie: Z?.cookie ?? K?.cookie, response: Z?.response ?? K?.response }, U = () => B.cookie ? W2({ validator: B.cookie, defaultConfig: this.config.cookie, config: B.cookie?.config ?? {}, dynamic: G, models: Y }) : undefined, w = this.config.normalize, F = this.config.precompile === true || typeof this.config.precompile === "object" && this.config.precompile.schema === true ? { body: m(B.body, { dynamic: G, models: Y, normalize: w, additionalCoerce: S2() }), headers: m(B.headers, { dynamic: G, models: Y, additionalProperties: !this.config.normalize, coerce: true, additionalCoerce: D0() }), params: m(B.params, { dynamic: G, models: Y, coerce: true, additionalCoerce: D0() }), query: m(B.query, { dynamic: G, models: Y, normalize: w, coerce: true, additionalCoerce: D0() }), cookie: U(), response: $2(B.response, { dynamic: G, models: Y, normalize: w }) } : { createBody() {
      if (this.body)
        return this.body;
      return this.body = m(B.body, { dynamic: G, models: Y, normalize: w, additionalCoerce: S2() });
    }, createHeaders() {
      if (this.headers)
        return this.headers;
      return this.headers = m(B.headers, { dynamic: G, models: Y, additionalProperties: !w, coerce: true, additionalCoerce: D0() });
    }, createParams() {
      if (this.params)
        return this.params;
      return this.params = m(B.params, { dynamic: G, models: Y, coerce: true, additionalCoerce: D0() });
    }, createQuery() {
      if (this.query)
        return this.query;
      return this.query = m(B.query, { dynamic: G, models: Y, coerce: true, additionalCoerce: D0() });
    }, createCookie() {
      if (this.cookie)
        return this.cookie;
      return this.cookie = U();
    }, createResponse() {
      if (this.response)
        return this.response;
      return this.response = $2(B.response, { dynamic: G, models: Y, normalize: w });
    } }, Q = W.endsWith("/") ? W.slice(0, W.length - 1) : W + "/";
    if (Z = i(Z, K), Z.tags)
      if (!Z.detail)
        Z.detail = { tags: Z.tags };
      else
        Z.detail.tags = Z.tags;
    if (c(this.config.detail))
      Z.detail = d(Object.assign({}, this.config.detail), Z.detail);
    this.applyMacro(Z);
    let z = i(this.event, Z);
    if (this.config.aot === false) {
      if (this.router.dynamic.add($, W, { validator: F, hooks: z, content: Z?.type, handle: X }), this.config.strictPath === false)
        this.router.dynamic.add($, Q, { validator: F, hooks: z, content: Z?.type, handle: X });
      this.router.history.push({ method: $, path: W, composed: null, handler: X, hooks: z });
      return;
    }
    let D = this.config.precompile === true || typeof this.config.precompile === "object" && this.config.precompile.compose === true, M = m0(this.inference), I = typeof X !== "function" ? Q1(X, z, this.setHeaders) : undefined, O = typeof X !== "function" ? Y1(X, z, this.setHeaders) : undefined;
    if (this.config.nativeStaticResponse === true && O && ($ === "GET" || $ === "ALL"))
      this.router.static.http.static[W] = O();
    let P = () => I1({ app: this, path: W, method: $, localHook: i(Z), hooks: z, validator: F, handler: X, allowMeta: j, inference: M }), b = D ? P() : (L) => {
      return P()(L);
    }, T = this.router.history.length;
    if (this.routeTree.has($ + W))
      for (let L = 0;L < this.router.history.length; L++) {
        let f = this.router.history[L];
        if (f.path === W && f.method === $) {
          let R = this.router.history.splice(L, 1)[0];
          if (R && this.routeTree.has(R?.method + R?.path))
            this.routeTree.delete(R.method + R.path);
        }
      }
    else
      this.routeTree.set($ + W, T);
    this.router.history.push({ method: $, path: W, composed: b, handler: X, hooks: z });
    let E = this.router.static.http, r = { handler: D ? b : undefined, compile: P };
    if ($ === "$INTERNALWS") {
      let L = this.config.strictPath ? undefined : W.endsWith("/") ? W.slice(0, W.length - 1) : W + "/";
      if (W.indexOf(":") === -1 && W.indexOf("*") === -1) {
        let f = E.handlers.length;
        if (E.handlers.push((R) => (E.handlers[f] = P())(R)), this.router.static.ws[W] = f, L)
          this.router.static.ws[L] = f;
      } else if (this.router.ws.add("ws", W, r), L)
        this.router.ws.add("ws", L, r);
      return;
    }
    if (W.indexOf(":") === -1 && W.indexOf("*") === -1) {
      let L = E.handlers.length;
      if (E.handlers.push(I ?? ((R) => (E.handlers[L] = P())(R))), !E.map[W])
        E.map[W] = { code: "" };
      let f = I ? "" : "ctx";
      if ($ === "ALL")
        E.map[W].all = `default: return st[${L}](${f})\n`;
      else
        E.map[W].code = `case '${$}': return st[${L}](${f})\n${E.map[W].code}`;
      if (!this.config.strictPath) {
        if (!E.map[Q])
          E.map[Q] = { code: "" };
        if (this.config.nativeStaticResponse === true && O && ($ === "GET" || $ === "ALL"))
          this.router.static.http.static[Q] = O();
        if ($ === "ALL")
          E.map[Q].all = `default: return st[${L}](${f})\n`;
        else
          E.map[Q].code = `case '${$}': return st[${L}](${f})\n${E.map[Q].code}`;
      }
    } else if (this.router.http.add($, W, r), !this.config.strictPath) {
      let L = W.endsWith("/") ? W.slice(0, W.length - 1) : W + "/";
      if (this.config.nativeStaticResponse === true && I && ($ === "GET" || $ === "ALL"))
        this.router.static.http.static[L] = I();
      this.router.http.add($, L, r);
    }
  }
  setHeaders;
  headers($) {
    if (!$)
      return this;
    if (!this.setHeaders)
      this.setHeaders = {};
    return this.setHeaders = d(this.setHeaders, $), this;
  }
  onStart($) {
    return this.on("start", $), this;
  }
  onRequest($) {
    return this.on("request", $), this;
  }
  onParse($, W) {
    if (!W)
      return this.on("parse", $);
    return this.on($, "parse", W);
  }
  onTransform($, W) {
    if (!W)
      return this.on("transform", $);
    return this.on($, "transform", W);
  }
  resolve($, W) {
    if (!W)
      W = $, $ = { as: "local" };
    let X = { subType: "resolve", fn: W };
    return this.onBeforeHandle($, X);
  }
  mapResolve($, W) {
    if (!W)
      W = $, $ = { as: "local" };
    let X = { subType: "mapResolve", fn: W };
    return this.onBeforeHandle($, X);
  }
  onBeforeHandle($, W) {
    if (!W)
      return this.on("beforeHandle", $);
    return this.on($, "beforeHandle", W);
  }
  onAfterHandle($, W) {
    if (!W)
      return this.on("afterHandle", $);
    return this.on($, "afterHandle", W);
  }
  mapResponse($, W) {
    if (!W)
      return this.on("mapResponse", $);
    return this.on($, "mapResponse", W);
  }
  onAfterResponse($, W) {
    if (!W)
      return this.on("afterResponse", $);
    return this.on($, "afterResponse", W);
  }
  trace($, W) {
    if (!W)
      W = $, $ = { as: "local" };
    if (!Array.isArray(W))
      W = [W];
    for (let X of W)
      this.on($, "trace", D1(X));
    return this;
  }
  error($, W) {
    switch (typeof $) {
      case "string":
        return W.prototype[I0] = $, this.definitions.error[$] = W, this;
      case "function":
        return this.definitions.error = $(this.definitions.error), this;
    }
    for (let [X, Z] of Object.entries($))
      Z.prototype[I0] = X, this.definitions.error[X] = Z;
    return this;
  }
  onError($, W) {
    if (!W)
      return this.on("error", $);
    return this.on($, "error", W);
  }
  onStop($) {
    return this.on("stop", $), this;
  }
  on($, W, X) {
    let Z;
    switch (typeof $) {
      case "string":
        Z = $, X = W;
        break;
      case "object":
        if (Z = W, !Array.isArray(W) && typeof W === "object")
          X = W;
        break;
    }
    if (Array.isArray(X))
      X = n(X);
    else if (typeof X === "function")
      X = [{ fn: X }];
    else
      X = [X];
    let j = X;
    for (let J of j)
      J.scope = typeof $ === "string" ? "local" : $?.as ?? "local";
    if (Z !== "trace")
      r0({ [Z]: j.map((J) => J.fn) }, this.inference);
    for (let J of j) {
      let Y = w1(J, "global", { skipIfHasType: true });
      switch (Z) {
        case "start":
          this.event.start.push(Y);
          break;
        case "request":
          this.event.request.push(Y);
          break;
        case "parse":
          this.event.parse.push(Y);
          break;
        case "transform":
          this.event.transform.push(Y);
          break;
        case "beforeHandle":
          this.event.beforeHandle.push(Y);
          break;
        case "afterHandle":
          this.event.afterHandle.push(Y);
          break;
        case "mapResponse":
          this.event.mapResponse.push(Y);
          break;
        case "afterResponse":
          this.event.afterResponse.push(Y);
          break;
        case "trace":
          this.event.trace.push(Y);
          break;
        case "error":
          this.event.error.push(Y);
          break;
        case "stop":
          this.event.stop.push(Y);
          break;
      }
    }
    return this;
  }
  propagate() {
    return v(this.event.parse), v(this.event.transform), v(this.event.beforeHandle), v(this.event.afterHandle), v(this.event.mapResponse), v(this.event.afterResponse), v(this.event.trace), v(this.event.error), this;
  }
  as($) {
    let W = { plugin: "scoped", global: "global" }[$];
    if (v(this.event.parse, W), v(this.event.transform, W), v(this.event.beforeHandle, W), v(this.event.afterHandle, W), v(this.event.mapResponse, W), v(this.event.afterResponse, W), v(this.event.trace, W), v(this.event.error, W), $ === "plugin")
      this.validator.scoped = b0(this.validator.scoped, this.validator.local), this.validator.local = null;
    else if ($ === "global")
      this.validator.global = b0(this.validator.global, b0(this.validator.scoped, this.validator.local)), this.validator.scoped = null, this.validator.local = null;
    return this;
  }
  group($, W, X) {
    let Z = new Q0({ ...this.config, prefix: "" });
    Z.singleton = { ...this.singleton }, Z.definitions = { ...this.definitions }, Z.getServer = () => this.getServer(), Z.inference = m0(this.inference), Z.extender = { ...this.extender };
    let j = typeof W === "object", J = (j ? X : W)(Z);
    if (this.singleton = d(this.singleton, Z.singleton), this.definitions = d(this.definitions, Z.definitions), J.event.request.length)
      this.event.request = [...this.event.request || [], ...J.event.request || []];
    if (J.event.mapResponse.length)
      this.event.mapResponse = [...this.event.mapResponse || [], ...J.event.mapResponse || []];
    return this.model(J.definitions.type), Object.values(Z.router.history).forEach(({ method: Y, path: G, handler: K, hooks: B }) => {
      if (G = (j ? "" : this.config.prefix) + $ + G, j) {
        let U = W, w = B;
        this.add(Y, G, K, i(U, { ...w || {}, error: !w.error ? J.event.error : Array.isArray(w.error) ? [...w.error || {}, ...J.event.error || {}] : [w.error, ...J.event.error || {}] }));
      } else
        this.add(Y, G, K, i(B, { error: J.event.error }), { skipPrefix: true });
    }), this;
  }
  guard($, W) {
    if (!W) {
      if (typeof $ === "object") {
        this.applyMacro($);
        let j = $.as ?? "local";
        if (this.validator[j] = { body: $.body ?? this.validator[j]?.body, headers: $.headers ?? this.validator[j]?.headers, params: $.params ?? this.validator[j]?.params, query: $.query ?? this.validator[j]?.query, response: $.response ?? this.validator[j]?.response, cookie: $.cookie ?? this.validator[j]?.cookie }, $.parse)
          this.on({ as: j }, "parse", $.parse);
        if ($.transform)
          this.on({ as: j }, "transform", $.transform);
        if ($.beforeHandle)
          this.on({ as: j }, "beforeHandle", $.beforeHandle);
        if ($.afterHandle)
          this.on({ as: j }, "afterHandle", $.afterHandle);
        if ($.mapResponse)
          this.on({ as: j }, "mapResponse", $.mapResponse);
        if ($.afterResponse)
          this.on({ as: j }, "afterResponse", $.afterResponse);
        if ($.error)
          this.on({ as: j }, "error", $.error);
        if ($.detail)
          if (this.config.detail)
            this.config.detail = d(Object.assign({}, this.config.detail), $.detail);
          else
            this.config.detail = $.detail;
        if ($?.tags)
          if (!this.config.detail)
            this.config.detail = { tags: $.tags };
          else
            this.config.detail.tags = $.tags;
        return this;
      }
      return this.guard({}, $);
    }
    let X = new Q0({ ...this.config, prefix: "" });
    X.singleton = { ...this.singleton }, X.definitions = { ...this.definitions }, X.inference = m0(this.inference), X.extender = { ...this.extender };
    let Z = W(X);
    if (this.singleton = d(this.singleton, X.singleton), this.definitions = d(this.definitions, X.definitions), Z.getServer = () => this.server, Z.event.request.length)
      this.event.request = [...this.event.request || [], ...Z.event.request || []];
    if (Z.event.mapResponse.length)
      this.event.mapResponse = [...this.event.mapResponse || [], ...Z.event.mapResponse || []];
    return this.model(Z.definitions.type), Object.values(X.router.history).forEach(({ method: j, path: J, handler: Y, hooks: G }) => {
      this.add(j, J, Y, i($, { ...G || {}, error: !G.error ? Z.event.error : Array.isArray(G.error) ? [...G.error || {}, ...Z.event.error || []] : [G.error, ...Z.event.error || []] }));
    }), this;
  }
  use($, W) {
    if (W?.scoped)
      return this.guard({}, (X) => X.use($));
    if (Array.isArray($)) {
      let X = this;
      for (let Z of $)
        X = this.use(Z);
      return X;
    }
    if ($ instanceof Promise)
      return this.promisedModules.add($.then((X) => {
        if (typeof X === "function")
          return X(this);
        if (X instanceof Q0)
          return this._use(X).compile();
        if (typeof X.default === "function")
          return X.default(this);
        if (X.default instanceof Q0)
          return this._use(X.default);
        throw new Error('Invalid plugin type. Expected Elysia instance, function, or module with "default" as Elysia instance or function that returns Elysia instance.');
      }).then((X) => X.compile())), this;
    return this._use($);
  }
  _use($) {
    if (typeof $ === "function") {
      let j = $(this);
      if (j instanceof Promise)
        return this.promisedModules.add(j.then((J) => {
          if (J instanceof Q0) {
            J.getServer = () => this.getServer(), J.getGlobalRoutes = () => this.getGlobalRoutes(), J.model(this.definitions.type), J.error(this.definitions.error);
            for (let { method: Y, path: G, handler: K, hooks: B } of Object.values(J.router.history))
              this.add(Y, G, K, i(B, { error: J.event.error }));
            return J.compile(), J;
          }
          if (typeof J === "function")
            return J(this);
          if (typeof J.default === "function")
            return J.default(this);
          return this._use(J);
        }).then((J) => J.compile())), this;
      return j;
    }
    let { name: W, seed: X } = $.config;
    $.getServer = () => this.getServer(), $.getGlobalRoutes = () => this.getGlobalRoutes(), $.model(this.definitions.type), $.error(this.definitions.error);
    let Z = $.config.scoped;
    if (Z) {
      if (W) {
        if (!(W in this.dependencies))
          this.dependencies[W] = [];
        let J = X !== undefined ? N0(W + JSON.stringify(X)) : 0;
        if (this.dependencies[W].some(({ checksum: Y }) => J === Y))
          return this;
        this.dependencies[W].push(!this.config?.analytic ? { name: $.config.name, seed: $.config.seed, checksum: J, dependencies: $.dependencies } : { name: $.config.name, seed: $.config.seed, checksum: J, dependencies: $.dependencies, stack: $.telemetry.stack, routes: $.router.history, decorators: $.singleton.decorator, store: $.singleton.store, type: $.definitions.type, error: $.definitions.error, derive: $.event.transform.filter((Y) => Y.subType === "derive").map((Y) => ({ fn: Y.fn.toString(), stack: new Error().stack ?? "" })), resolve: $.event.transform.filter((Y) => Y.subType === "derive").map((Y) => ({ fn: Y.fn.toString(), stack: new Error().stack ?? "" })) });
      }
      $.extender.macros = this.extender.macros.concat($.extender.macros);
      let j = [];
      for (let J = 0;J < $.extender.macros.length; J++) {
        let Y = this.extender.macros[J];
        if (j.includes(Y.checksum))
          $.extender.macros.splice(J, 1), J--;
        j.push(Y.checksum);
      }
      if ($.onRequest((J) => {
        Object.assign(J, this.singleton.decorator), Object.assign(J.store, this.singleton.store);
      }), $.event.trace.length)
        $.event.trace.push(...$.event.trace);
      if (!$.config.prefix)
        console.warn("It's recommended to use scoped instance with a prefix to prevent collision routing with other instance.");
      if ($.event.error.length)
        $.event.error.push(...this.event.error);
      if ($.config.aot)
        $.compile();
      if (Z === true && $.config.prefix) {
        this.mount($.config.prefix + "/", $.fetch);
        for (let J of $.router.history)
          this.routeTree.set(J.method + `${$.config.prefix}${J.path}`, this.router.history.length), this.router.history.push({ ...J, path: `${$.config.prefix}${J.path}`, hooks: i(J.hooks, { error: this.event.error }) });
      } else {
        this.mount($.fetch);
        for (let J of $.router.history)
          this.routeTree.set(J.method + `${$.config.prefix}${J.path}`, this.router.history.length), this.router.history.push({ ...J, path: `${$.config.prefix}${J.path}`, hooks: i(J.hooks, { error: this.event.error }) });
      }
      return this;
    } else {
      if (this.headers($.setHeaders), W) {
        if (!(W in this.dependencies))
          this.dependencies[W] = [];
        let J = X !== undefined ? N0(W + JSON.stringify(X)) : 0;
        if (!this.dependencies[W].some(({ checksum: Y }) => J === Y))
          this.extender.macros = this.extender.macros.concat($.extender.macros), this.extender.higherOrderFunctions = this.extender.higherOrderFunctions.concat($.extender.higherOrderFunctions);
      } else
        this.extender.macros = this.extender.macros.concat($.extender.macros), this.extender.higherOrderFunctions = this.extender.higherOrderFunctions.concat($.extender.higherOrderFunctions);
      J2(this.extender.macros), J2(this.extender.higherOrderFunctions);
      let j = [];
      for (let J = 0;J < this.extender.higherOrderFunctions.length; J++) {
        let Y = this.extender.higherOrderFunctions[J];
        if (Y.checksum) {
          if (j.includes(Y.checksum))
            this.extender.higherOrderFunctions.splice(J, 1), J--;
          j.push(Y.checksum);
        }
      }
      this.inference = { body: this.inference.body || $.inference.body, cookie: this.inference.cookie || $.inference.cookie, headers: this.inference.headers || $.inference.headers, query: this.inference.query || $.inference.query, set: this.inference.set || $.inference.set, server: this.inference.server || $.inference.server };
    }
    this.decorate($.singleton.decorator), this.state($.singleton.store), this.model($.definitions.type), this.error($.definitions.error), $.extender.macros = this.extender.macros.concat($.extender.macros);
    for (let { method: j, path: J, handler: Y, hooks: G } of Object.values($.router.history))
      this.add(j, J, Y, i(G, { error: $.event.error }));
    if (!Z)
      if (W) {
        if (!(W in this.dependencies))
          this.dependencies[W] = [];
        let j = X !== undefined ? N0(W + JSON.stringify(X)) : 0;
        if (this.dependencies[W].some(({ checksum: J }) => j === J))
          return this;
        this.dependencies[W].push(!this.config?.analytic ? { name: $.config.name, seed: $.config.seed, checksum: j, dependencies: $.dependencies } : { name: $.config.name, seed: $.config.seed, checksum: j, dependencies: $.dependencies, stack: $.telemetry.stack, routes: $.router.history, decorators: $.singleton, store: $.singleton.store, type: $.definitions.type, error: $.definitions.error, derive: $.event.transform.filter((J) => J?.subType === "derive").map((J) => ({ fn: J.toString(), stack: new Error().stack ?? "" })), resolve: $.event.transform.filter((J) => J?.subType === "resolve").map((J) => ({ fn: J.toString(), stack: new Error().stack ?? "" })) }), this.event = C2(this.event, L2($.event), j);
      } else
        this.event = C2(this.event, L2($.event));
    return this.validator.global = i(this.validator.global, { ...$.validator.global }), this.validator.local = i(this.validator.local, { ...$.validator.scoped }), this;
  }
  macro($) {
    let W = { checksum: N0(JSON.stringify({ name: this.config.name, seed: this.config.seed, content: $.toString() })), fn: $ };
    return this.extender.macros.push(W), this;
  }
  mount($, W) {
    if ($ instanceof Q0 || typeof $ === "function" || $.length === 0 || $ === "/") {
      let j = typeof $ === "function" ? $ : $ instanceof Q0 ? $.compile().fetch : W instanceof Q0 ? W.compile().fetch : W, J = async ({ request: Y, path: G }) => {
        if (Y.method === "GET" || Y.method === "HEAD" || !Y.headers.get("content-type"))
          return j(new Request(R0(Y.url, G || "/"), Y));
        return j(new Request(R0(Y.url, G || "/"), { ...Y, body: await Y.arrayBuffer() }));
      };
      return this.all("/*", J, { type: "none" }), this;
    }
    let X = $.length;
    if (W instanceof Q0)
      W = W.compile().fetch;
    let Z = async ({ request: j, path: J }) => {
      if (j.method === "GET" || j.method === "HEAD" || !j.headers.get("content-type"))
        return W(new Request(R0(j.url, J.slice(X) || "/"), j));
      return W(new Request(R0(j.url, J.slice(X) || "/"), { ...j, body: await j.arrayBuffer() }));
    };
    return this.all($, Z, { type: "none" }), this.all($ + ($.endsWith("/") ? "*" : "/*"), Z, { type: "none" }), this;
  }
  get($, W, X) {
    return this.add("GET", $, W, X), this;
  }
  post($, W, X) {
    return this.add("POST", $, W, X), this;
  }
  put($, W, X) {
    return this.add("PUT", $, W, X), this;
  }
  patch($, W, X) {
    return this.add("PATCH", $, W, X), this;
  }
  delete($, W, X) {
    return this.add("DELETE", $, W, X), this;
  }
  options($, W, X) {
    return this.add("OPTIONS", $, W, X), this;
  }
  all($, W, X) {
    return this.add("ALL", $, W, X), this;
  }
  head($, W, X) {
    return this.add("HEAD", $, W, X), this;
  }
  connect($, W, X) {
    return this.add("CONNECT", $, W, X), this;
  }
  route($, W, X, Z) {
    return this.add($.toUpperCase(), W, X, Z, Z?.config), this;
  }
  ws($, W) {
    let X = W.transformMessage ? Array.isArray(W.transformMessage) ? W.transformMessage : [W.transformMessage] : undefined, Z = null, j = m(W?.body, { models: this.definitions.type, normalize: this.config.normalize }), J = m(W?.response, { models: this.definitions.type, normalize: this.config.normalize }), Y = (G) => {
      if (typeof G === "string") {
        let K = G?.charCodeAt(0);
        if (K === 47 || K === 123)
          try {
            G = JSON.parse(G);
          } catch {
          }
        else if (Z2(G))
          G = +G;
      }
      if (X?.length)
        for (let K = 0;K < X.length; K++) {
          let B = X[K](G);
          if (B !== undefined)
            G = B;
        }
      return G;
    };
    return this.route("$INTERNALWS", $, (G) => {
      let { set: K, path: B, qi: U, headers: w, query: F, params: Q } = G;
      if (Z === null)
        Z = this.getServer();
      if (Z?.upgrade(G.request, { headers: typeof W.upgrade === "function" ? W.upgrade(G) : W.upgrade, data: { validator: J, open(z) {
        W.open?.(new g0(z, G));
      }, message: (z, D) => {
        let M = Y(D);
        if (j?.Check(M) === false)
          return void z.send(new q("message", j, M).message);
        W.message?.(new g0(z, G), M);
      }, drain(z) {
        W.drain?.(new g0(z, G));
      }, close(z, D, M) {
        W.close?.(new g0(z, G), D, M);
      } } }))
        return;
      return K.status = 400, "Expected a websocket connection";
    }, { beforeHandle: W.beforeHandle, transform: W.transform, headers: W.headers, params: W.params, query: W.query }), this;
  }
  state($, W, X) {
    if (W === undefined)
      X = $, $ = { as: "append" }, W = "";
    else if (X === undefined) {
      if (typeof $ === "string")
        X = W, W = $, $ = { as: "append" };
      else if (typeof $ === "object")
        X = W, W = "";
    }
    let { as: Z } = $;
    if (typeof W !== "string")
      return this;
    switch (typeof X) {
      case "object":
        if (W) {
          if (W in this.singleton.store)
            this.singleton.store[W] = d(this.singleton.store[W], X, { override: Z === "override" });
          else
            this.singleton.store[W] = X;
          return this;
        }
        if (X === null)
          return this;
        return this.singleton.store = d(this.singleton.store, X, { override: Z === "override" }), this;
      case "function":
        if (W) {
          if (Z === "override" || !(W in this.singleton.store))
            this.singleton.store[W] = X;
        } else
          this.singleton.store = X(this.singleton.store);
        return this;
      default:
        if (Z === "override" || !(W in this.singleton.store))
          this.singleton.store[W] = X;
        return this;
    }
  }
  decorate($, W, X) {
    if (W === undefined)
      X = $, $ = { as: "append" }, W = "";
    else if (X === undefined) {
      if (typeof $ === "string")
        X = W, W = $, $ = { as: "append" };
      else if (typeof $ === "object")
        X = W, W = "";
    }
    let { as: Z } = $;
    if (typeof W !== "string")
      return this;
    switch (typeof X) {
      case "object":
        if (W) {
          if (W in this.singleton.decorator)
            this.singleton.decorator[W] = d(this.singleton.decorator[W], X, { override: Z === "override" });
          else
            this.singleton.decorator[W] = X;
          return this;
        }
        if (X === null)
          return this;
        return this.singleton.decorator = d(this.singleton.decorator, X, { override: Z === "override" }), this;
      case "function":
        if (W) {
          if (Z === "override" || !(W in this.singleton.decorator))
            this.singleton.decorator[W] = X;
        } else
          this.singleton.decorator = X(this.singleton.decorator);
        return this;
      default:
        if (Z === "override" || !(W in this.singleton.decorator))
          this.singleton.decorator[W] = X;
        return this;
    }
  }
  derive($, W) {
    if (!W)
      W = $, $ = { as: "local" };
    let X = { subType: "derive", fn: W };
    return this.onTransform($, X);
  }
  model($, W) {
    switch (typeof $) {
      case "object":
        return Object.entries($).forEach(([X, Z]) => {
          if (!(X in this.definitions.type))
            this.definitions.type[X] = Z;
        }), this;
      case "function":
        return this.definitions.type = $(this.definitions.type), this;
    }
    return this.definitions.type[$] = W, this;
  }
  mapDerive($, W) {
    if (!W)
      W = $, $ = { as: "local" };
    let X = { subType: "mapDerive", fn: W };
    return this.onTransform($, X);
  }
  affix($, W, X) {
    if (X === "")
      return this;
    let Z = ["_", "-", " "], j = (K) => K[0].toUpperCase() + K.slice(1), J = $ === "prefix" ? (K, B) => Z.includes(K.at(-1) ?? "") ? K + B : K + j(B) : Z.includes(X.at(-1) ?? "") ? (K, B) => B + K : (K, B) => B + j(K), Y = (K) => {
      let B = {};
      switch (K) {
        case "decorator":
          for (let U in this.singleton.decorator)
            B[J(X, U)] = this.singleton.decorator[U];
          this.singleton.decorator = B;
          break;
        case "state":
          for (let U in this.singleton.store)
            B[J(X, U)] = this.singleton.store[U];
          this.singleton.store = B;
          break;
        case "model":
          for (let U in this.definitions.type)
            B[J(X, U)] = this.definitions.type[U];
          this.definitions.type = B;
          break;
        case "error":
          for (let U in this.definitions.error)
            B[J(X, U)] = this.definitions.error[U];
          this.definitions.error = B;
          break;
      }
    }, G = Array.isArray(W) ? W : [W];
    for (let K of G.some((B) => B === "all") ? ["decorator", "state", "model", "error"] : G)
      Y(K);
    return this;
  }
  prefix($, W) {
    return this.affix("prefix", $, W);
  }
  suffix($, W) {
    return this.affix("suffix", $, W);
  }
  compile() {
    if (this.fetch = this.config.aot ? g2(this) : y2(this), typeof this.server?.reload === "function")
      this.server.reload({ ...this.server || {}, fetch: this.fetch });
    return this;
  }
  handle = async ($) => this.fetch($);
  fetch = ($) => {
    return (this.fetch = this.config.aot ? g2(this) : y2(this))($);
  };
  handleError = async ($, W) => (this.handleError = this.config.aot ? f2(this) : A1(this))($, W);
  outerErrorHandler = ($) => new Response($.message || $.name || "Error", { status: $?.status ?? 500 });
  listen = ($, W) => {
    if (typeof Bun === "undefined")
      throw new Error(".listen() is designed to run on Bun only. If you are running Elysia in other environment please use a dedicated plugin or export the handler via Elysia.fetch");
    if (this.compile(), typeof $ === "string") {
      if (!Z2($))
        throw new Error("Port must be a numeric value");
      $ = parseInt($);
    }
    let X = this.fetch, Z = typeof $ === "object" ? { development: !l0, reusePort: true, ...this.config.serve || {}, ...$ || {}, static: this.router.static.http.static, websocket: { ...this.config.websocket || {}, ...H2 || {} }, fetch: X, error: this.outerErrorHandler } : { development: !l0, reusePort: true, ...this.config.serve || {}, static: this.router.static.http.static, websocket: { ...this.config.websocket || {}, ...H2 || {} }, port: $, fetch: X, error: this.outerErrorHandler };
    this.server = Bun?.serve(Z);
    for (let j = 0;j < this.event.start.length; j++)
      this.event.start[j].fn(this);
    if (W)
      W(this.server);
    return process.on("beforeExit", () => {
      if (this.server) {
        this.server.stop(), this.server = null;
        for (let j = 0;j < this.event.stop.length; j++)
          this.event.stop[j].fn(this);
      }
    }), this.promisedModules.then(() => {
      Bun?.gc(false);
    }), this;
  };
  stop = async ($) => {
    if (!this.server)
      throw new Error("Elysia isn't running. Call `app.listen` to start the server.");
    if (this.server) {
      if (this.server.stop($), this.server = null, this.event.stop.length)
        for (let W = 0;W < this.event.stop.length; W++)
          this.event.stop[W].fn(this);
    }
  };
  get modules() {
    return Promise.all(this.promisedModules.promises);
  }
}

// node_modules/pathe/dist/shared/pathe.ff20891b.mjs
var _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
var _UNC_REGEX = /^[/\\]{2}/;
var _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
var _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
var normalize = function(path) {
  if (path.length === 0) {
    return ".";
  }
  path = normalizeWindowsPath(path);
  const isUNCPath = path.match(_UNC_REGEX);
  const isPathAbsolute = isAbsolute(path);
  const trailingSeparator = path[path.length - 1] === "/";
  path = normalizeString(path, !isPathAbsolute);
  if (path.length === 0) {
    if (isPathAbsolute) {
      return "/";
    }
    return trailingSeparator ? "./" : ".";
  }
  if (trailingSeparator) {
    path += "/";
  }
  if (_DRIVE_LETTER_RE.test(path)) {
    path += "/";
  }
  if (isUNCPath) {
    if (!isPathAbsolute) {
      return `//./${path}`;
    }
    return `//${path}`;
  }
  return isPathAbsolute && !isAbsolute(path) ? `/${path}` : path;
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0;index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1)
        ;
      else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
var isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
// node_modules/@elysiajs/swagger/dist/index.mjs
function isSchemaObject(schema3) {
  return "type" in schema3 || "properties" in schema3 || "items" in schema3;
}
function isDateTimeProperty(key, schema3) {
  return (key === "createdAt" || key === "updatedAt") && "anyOf" in schema3 && Array.isArray(schema3.anyOf);
}
function transformDateProperties(schema3) {
  if (!isSchemaObject(schema3) || typeof schema3 !== "object" || schema3 === null) {
    return schema3;
  }
  const newSchema = { ...schema3 };
  Object.entries(newSchema).forEach(([key, value2]) => {
    if (isSchemaObject(value2)) {
      if (isDateTimeProperty(key, value2)) {
        const dateTimeFormat = value2.anyOf?.find((item) => isSchemaObject(item) && item.format === "date-time");
        if (dateTimeFormat) {
          const dateTimeSchema = {
            type: "string",
            format: "date-time",
            default: dateTimeFormat.default
          };
          newSchema[key] = dateTimeSchema;
        }
      } else {
        newSchema[key] = transformDateProperties(value2);
      }
    }
  });
  return newSchema;
}
var SwaggerUIRender = (info, version, theme, stringifiedSwaggerOptions, autoDarkMode) => {
  const swaggerOptions = JSON.parse(stringifiedSwaggerOptions);
  if (swaggerOptions.components && swaggerOptions.components.schemas) {
    swaggerOptions.components.schemas = Object.fromEntries(Object.entries(swaggerOptions.components.schemas).map(([key, schema3]) => [
      key,
      transformDateProperties(schema3)
    ]));
  }
  const transformedStringifiedSwaggerOptions = JSON.stringify(swaggerOptions);
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${info.title}</title>
    <meta
        name="description"
        content="${info.description}"
    />
    <meta
        name="og:description"
        content="${info.description}"
    />
    ${autoDarkMode && typeof theme === "string" ? `
    <style>
        @media (prefers-color-scheme: dark) {
            body {
                background-color: #222;
                color: #faf9a;
            }
            .swagger-ui {
                filter: invert(92%) hue-rotate(180deg);
            }

            .swagger-ui .microlight {
                filter: invert(100%) hue-rotate(180deg);
            }
        }
    </style>` : ""}
    ${typeof theme === "string" ? `<link rel="stylesheet" href="${theme}" />` : `<link rel="stylesheet" media="(prefers-color-scheme: light)" href="${theme.light}" />
<link rel="stylesheet" media="(prefers-color-scheme: dark)" href="${theme.dark}" />`}
</head>
<body>
    <div id="swagger-ui"></div>
    <script src="https://unpkg.com/swagger-ui-dist@${version}/swagger-ui-bundle.js" crossorigin></script>
    <script>
        window.onload = () => {
            window.ui = SwaggerUIBundle(${transformedStringifiedSwaggerOptions});
        };
    </script>
</body>
</html>`;
};
var theme_default = `
/* basic theme */
.light-mode {
  --theme-color-1: #2a2f45;
  --theme-color-2: #757575;
  --theme-color-3: #8e8e8e;
  --theme-color-accent: #f06292;

  --theme-background-1: #fff;
  --theme-background-2: #f6f6f6;
  --theme-background-3: #e7e7e7;
  --theme-background-accent: #f062921f;

  --theme-border-color: rgba(0, 0, 0, 0.1);
}
.dark-mode {
  --theme-color-1: rgba(255, 255, 255, 0.9);
  --theme-color-2: rgba(156, 163, 175, 1);
  --theme-color-3: rgba(255, 255, 255, 0.44);
  --theme-color-accent: #f06292;

  --theme-background-1: #111728;
  --theme-background-2: #1e293b;
  --theme-background-3: #334155;
  --theme-background-accent: #f062921f;

  --theme-border-color: rgba(255, 255, 255, 0.1);
}
/* Document Sidebar */
.light-mode .sidebar,
.dark-mode .sidebar {
  --sidebar-background-1: var(--theme-background-1);
  --sidebar-item-hover-color: currentColor;
  --sidebar-item-hover-background: var(--theme-background-2);
  --sidebar-item-active-background: var(--theme-background-accent);
  --sidebar-border-color: transparent;
  --sidebar-color-1: var(--theme-color-1);
  --sidebar-color-2: var(--theme-color-2);
  --sidebar-color-active: var(--theme-color-accent);
  --sidebar-search-background: transparent;
  --sidebar-search-border-color: var(--theme-border-color);
  --sidebar-search--color: var(--theme-color-3);
}
/* Document header only shows on mobile*/
.dark-mode .t-doc__header,
.light-mode .t-doc__header {
  --header-background-1: rgba(255, 255, 255, 0.85);
  --header-border-color: transparent;
  --header-color-1: var(--theme-color-1);
  --header-color-2: var(--theme-color-2);
  --header-background-toggle: var(--theme-color-3);
  --header-call-to-action-color: var(--theme-color-accent);
}

.dark-mode .t-doc__header {
  --header-background-1: rgba(17, 23, 40, 0.75);
}

/* advanced */
.light-mode {
  --theme-button-1: rgb(49 53 56);
  --theme-button-1-color: #fff;
  --theme-button-1-hover: rgb(28 31 33);

  --theme-color-green: #069061;
  --theme-color-red: #ef0006;
  --theme-color-yellow: #edbe20;
  --theme-color-blue: #0082d0;
  --theme-color-orange: #fb892c;
  --theme-color-purple: #5203d1;

  --theme-scrollbar-color: rgba(0, 0, 0, 0.18);
  --theme-scrollbar-color-active: rgba(0, 0, 0, 0.36);
}
.dark-mode {
  --theme-button-1: #f6f6f6;
  --theme-button-1-color: #000;
  --theme-button-1-hover: #e7e7e7;

  --theme-color-green: #a3ffa9;
  --theme-color-red: #ffa3a3;
  --theme-color-yellow: #fffca3;
  --theme-color-blue: #a5d6ff;
  --theme-color-orange: #e2ae83;
  --theme-color-purple: #d2a8ff;

  --theme-scrollbar-color: rgba(255, 255, 255, 0.24);
  --theme-scrollbar-color-active: rgba(255, 255, 255, 0.48);
}
/* Elysia Specific */
.scalar-api-client__send-request-button,
.show-api-client-button {
  background: #3c82f6 !important;
}
.show-api-client-button:before {
  display: none;
}

.sidebar-search:hover {
  transition: all 0.15s ease-in-out;
  --sidebar-search-border-color: var(--theme-color-accent) !important;
  color: var(--sidebar-color-1) !important;
}
.scalar-api-client__container .sidebar {
  --sidebar-border-color: var(--theme-border-color);
}
@media (min-width: 1150px) {
  .section-container:has( ~ .footer):before,
  .tag-section-container:before {
    content: "";
    position: absolute;
    top: -5px;
    left: 0;
    width: 100%;
    height: 10px;
    background: linear-gradient(90deg, var(--theme-background-1) 3%,transparent 10%);
  }
}
.section-flare {
  position: absolute;
  width: 100vw;
  height: 300px;
  --stripes: repeating-linear-gradient(
    100deg,
    #fff 0%,
    #fff 7%,
    transparent 10%,
    transparent 12%,
    #fff 16%
  );
  --stripesDark: repeating-linear-gradient(
    100deg,
    #000 0%,
    #000 7%,
    transparent 10%,
    transparent 12%,
    #000 16%
  );
  --rainbow: repeating-linear-gradient(
    100deg,
    #60a5fa 10%,
    #e879f9 16%,
    #5eead4 22%,
    #60a5fa 30%
  );
  background-image: var(--stripes), var(--rainbow);
  background-size: 300%, 200%;
  background-position: 50% 50%, 50% 50%;
  filter: invert(100%);
  -webkit-mask-image: radial-gradient(
    ellipse at 100% 0%,
    black 40%,
    transparent 70%
  );
  mask-image: radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%);
  pointer-events: none;
  opacity: 0.15;
}
.dark-mode .section-flare {
  background-image: var(--stripesDark), var(--rainbow);
  filter: opacity(50%) saturate(200%);
  opacity: 0.25;
}
.section-flare:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: var(--stripes), var(--rainbow);
  background-size: 200%, 100%;
  background-attachment: fixed;
  mix-blend-mode: difference;
}
.dark-mode .section-flare:after {
  background-image: var(--stripesDark), var(--rainbow);
}
@keyframes headerbackground {
  from {
    background: transparent;
    backdrop-filter: none;
  }
  to {
    background: var(--header-background-1);
    backdrop-filter: blur(12px);
  }
}
.light-mode .t-doc__header,
.dark-mode .t-doc__header {
  animation: headerbackground forwards;
  animation-timeline: scroll();
  animation-range: 0px 200px;
  --header-border-color: transparent;
}
`;
var ScalarRender = (info, version, config, cdn) => `<!doctype html>
<html>
  <head>
    <title>${info.title}</title>
    <meta
        name="description"
        content="${info.description}"
    />
    <meta
        name="og:description"
        content="${info.description}"
    />
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1" />
    <style>
      body {
        margin: 0;
      }
    </style>
    <style>
      ${config.customCss ?? theme_default}
    </style>
  </head>
  <body>
    <script
      id="api-reference"
      data-url="${config.spec?.url}"
      data-configuration='${JSON.stringify(config)}'
    >
    </script>
    <script src="${cdn ? cdn : `https://cdn.jsdelivr.net/npm/@scalar/api-reference@${version}/dist/browser/standalone.min.js`}" crossorigin></script>
  </body>
</html>`;
var TransformKind2 = Symbol.for("TypeBox.Transform");
var ReadonlyKind2 = Symbol.for("TypeBox.Readonly");
var OptionalKind2 = Symbol.for("TypeBox.Optional");
var Hint2 = Symbol.for("TypeBox.Hint");
var Kind2 = Symbol.for("TypeBox.Kind");
var PatternBoolean2 = "(true|false)";
var PatternNumber2 = "(0|[1-9][0-9]*)";
var PatternString2 = "(.*)";
var PatternBooleanExact2 = `^${PatternBoolean2}\$`;
var PatternNumberExact2 = `^${PatternNumber2}\$`;
var PatternStringExact2 = `^${PatternString2}\$`;
var ExtendsResult2;
(function(ExtendsResult22) {
  ExtendsResult22[ExtendsResult22["Union"] = 0] = "Union";
  ExtendsResult22[ExtendsResult22["True"] = 1] = "True";
  ExtendsResult22[ExtendsResult22["False"] = 2] = "False";
})(ExtendsResult2 || (ExtendsResult2 = {}));
var toOpenAPIPath = (path2) => path2.split("/").map((x3) => {
  if (x3.startsWith(":")) {
    x3 = x3.slice(1, x3.length);
    if (x3.endsWith("?"))
      x3 = x3.slice(0, -1);
    x3 = `{${x3}}`;
  }
  return x3;
}).join("/");
var mapProperties = (name, schema3, models) => {
  if (schema3 === undefined)
    return [];
  if (typeof schema3 === "string")
    if (schema3 in models)
      schema3 = models[schema3];
    else
      throw new Error(`Can't find model ${schema3}`);
  return Object.entries(schema3?.properties ?? []).map(([key, value2]) => {
    const {
      type: valueType = undefined,
      description,
      examples,
      ...schemaKeywords
    } = value2;
    return {
      description,
      examples,
      schema: { type: valueType, ...schemaKeywords },
      in: name,
      name: key,
      required: schema3.required?.includes(key) ?? false
    };
  });
};
var mapTypesResponse = (types, schema3) => {
  if (typeof schema3 === "object" && ["void", "undefined", "null"].includes(schema3.type))
    return;
  const responses = {};
  for (const type3 of types) {
    responses[type3] = {
      schema: typeof schema3 === "string" ? {
        $ref: `#/components/schemas/${schema3}`
      } : { ...schema3 }
    };
  }
  return responses;
};
var capitalize2 = (word) => word.charAt(0).toUpperCase() + word.slice(1);
var generateOperationId = (method, paths) => {
  let operationId = method.toLowerCase();
  if (paths === "/")
    return operationId + "Index";
  for (const path2 of paths.split("/")) {
    if (path2.charCodeAt(0) === 123) {
      operationId += "By" + capitalize2(path2.slice(1, -1));
    } else {
      operationId += capitalize2(path2);
    }
  }
  return operationId;
};
var cloneHook = (hook) => {
  if (!hook)
    return;
  return { ...hook };
};
var registerSchemaPath = ({
  schema: schema3,
  path: path2,
  method,
  hook,
  models
}) => {
  hook = cloneHook(hook);
  const contentType = hook?.type ?? [
    "application/json",
    "multipart/form-data",
    "text/plain"
  ];
  path2 = toOpenAPIPath(path2);
  const contentTypes = typeof contentType === "string" ? [contentType] : contentType ?? ["application/json"];
  const bodySchema = cloneHook(hook?.body);
  const paramsSchema = cloneHook(hook?.params);
  const headerSchema = cloneHook(hook?.headers);
  const querySchema = cloneHook(hook?.query);
  let responseSchema = cloneHook(hook?.response);
  if (typeof responseSchema === "object") {
    if (Kind2 in responseSchema) {
      const {
        type: type3,
        properties,
        required: required3,
        additionalProperties,
        patternProperties,
        ...rest3
      } = responseSchema;
      responseSchema = {
        "200": {
          ...rest3,
          description: rest3.description,
          content: mapTypesResponse(contentTypes, type3 === "object" || type3 === "array" ? {
            type: type3,
            properties,
            patternProperties,
            items: responseSchema.items,
            required: required3
          } : responseSchema)
        }
      };
    } else {
      Object.entries(responseSchema).forEach(([key, value2]) => {
        if (typeof value2 === "string") {
          if (!models[value2])
            return;
          const {
            type: type3,
            properties,
            required: required3,
            additionalProperties: _12,
            patternProperties: _22,
            ...rest3
          } = models[value2];
          responseSchema[key] = {
            ...rest3,
            description: rest3.description,
            content: mapTypesResponse(contentTypes, value2)
          };
        } else {
          const {
            type: type3,
            properties,
            required: required3,
            additionalProperties,
            patternProperties,
            ...rest3
          } = value2;
          responseSchema[key] = {
            ...rest3,
            description: rest3.description,
            content: mapTypesResponse(contentTypes, type3 === "object" || type3 === "array" ? {
              type: type3,
              properties,
              patternProperties,
              items: value2.items,
              required: required3
            } : value2)
          };
        }
      });
    }
  } else if (typeof responseSchema === "string") {
    if (!(responseSchema in models))
      return;
    const {
      type: type3,
      properties,
      required: required3,
      additionalProperties: _12,
      patternProperties: _22,
      ...rest3
    } = models[responseSchema];
    responseSchema = {
      "200": {
        ...rest3,
        content: mapTypesResponse(contentTypes, responseSchema)
      }
    };
  }
  const parameters3 = [
    ...mapProperties("header", headerSchema, models),
    ...mapProperties("path", paramsSchema, models),
    ...mapProperties("query", querySchema, models)
  ];
  schema3[path2] = {
    ...schema3[path2] ? schema3[path2] : {},
    [method.toLowerCase()]: {
      ...headerSchema || paramsSchema || querySchema || bodySchema ? { parameters: parameters3 } : {},
      ...responseSchema ? {
        responses: responseSchema
      } : {},
      operationId: hook?.detail?.operationId ?? generateOperationId(method, path2),
      ...hook?.detail,
      ...bodySchema ? {
        requestBody: {
          required: true,
          content: mapTypesResponse(contentTypes, typeof bodySchema === "string" ? {
            $ref: `#/components/schemas/${bodySchema}`
          } : bodySchema)
        }
      } : null
    }
  };
};
var filterPaths = (paths, docsPath, {
  excludeStaticFile = true,
  exclude: exclude3 = []
}) => {
  const newPaths = {};
  const excludePaths = [`/${docsPath}`, `/${docsPath}/json`].map((p) => normalize(p));
  for (const [key, value2] of Object.entries(paths))
    if (!exclude3.some((x3) => {
      if (typeof x3 === "string")
        return key === x3;
      return x3.test(key);
    }) && !excludePaths.includes(key) && !key.includes("*") && (excludeStaticFile ? !key.includes(".") : true)) {
      Object.keys(value2).forEach((method) => {
        const schema3 = value2[method];
        if (key.includes("{")) {
          if (!schema3.parameters)
            schema3.parameters = [];
          schema3.parameters = [
            ...key.split("/").filter((x3) => x3.startsWith("{") && !schema3.parameters.find((params) => params.in === "path" && params.name === x3.slice(1, x3.length - 1))).map((x3) => ({
              schema: { type: "string" },
              in: "path",
              name: x3.slice(1, x3.length - 1),
              required: true
            })),
            ...schema3.parameters
          ];
        }
        if (!schema3.responses)
          schema3.responses = {
            200: {}
          };
      });
      newPaths[key] = value2;
    }
  return newPaths;
};
var swagger = async ({
  provider = "scalar",
  scalarVersion = "latest",
  scalarCDN = "",
  scalarConfig = {},
  documentation = {},
  version = "5.9.0",
  excludeStaticFile = true,
  path: path2 = "/swagger",
  exclude: exclude3 = [],
  swaggerOptions = {},
  theme = `https://unpkg.com/swagger-ui-dist@${version}/swagger-ui.css`,
  autoDarkMode = true,
  excludeMethods = ["OPTIONS"],
  excludeTags = []
} = {
  provider: "scalar",
  scalarVersion: "latest",
  scalarCDN: "",
  scalarConfig: {},
  documentation: {},
  version: "5.9.0",
  excludeStaticFile: true,
  path: "/swagger",
  exclude: [],
  swaggerOptions: {},
  autoDarkMode: true,
  excludeMethods: ["OPTIONS"],
  excludeTags: []
}) => {
  const schema3 = {};
  let totalRoutes = 0;
  if (!version)
    version = `https://unpkg.com/swagger-ui-dist@${version}/swagger-ui.css`;
  const info = {
    title: "Elysia Documentation",
    description: "Development documentation",
    version: "0.0.0",
    ...documentation.info
  };
  const relativePath = path2.startsWith("/") ? path2.slice(1) : path2;
  const app = new Q0({ name: "@elysiajs/swagger" });
  app.get(path2, function documentation2() {
    const combinedSwaggerOptions = {
      url: `/${relativePath}/json`,
      dom_id: "#swagger-ui",
      ...swaggerOptions
    };
    const stringifiedSwaggerOptions = JSON.stringify(combinedSwaggerOptions, (key, value2) => {
      if (typeof value2 == "function")
        return;
      return value2;
    });
    const scalarConfiguration = {
      spec: {
        ...scalarConfig.spec,
        url: `/${relativePath}/json`
      },
      ...scalarConfig
    };
    return new Response(provider === "swagger-ui" ? SwaggerUIRender(info, version, theme, stringifiedSwaggerOptions, autoDarkMode) : ScalarRender(info, scalarVersion, scalarConfiguration, scalarCDN), {
      headers: {
        "content-type": "text/html; charset=utf8"
      }
    });
  }).get(path2 === "/" ? "/json" : `${path2}/json`, function openAPISchema() {
    const routes = app.getGlobalRoutes();
    if (routes.length !== totalRoutes) {
      const ALLOWED_METHODS = ["GET", "PUT", "POST", "DELETE", "OPTIONS", "HEAD", "PATCH", "TRACE"];
      totalRoutes = routes.length;
      routes.forEach((route) => {
        if (route.hooks?.detail?.hide === true)
          return;
        if (excludeMethods.includes(route.method))
          return;
        if (ALLOWED_METHODS.includes(route.method) === false && route.method !== "ALL")
          return;
        if (route.method === "ALL") {
          ALLOWED_METHODS.forEach((method) => {
            registerSchemaPath({
              schema: schema3,
              hook: route.hooks,
              method,
              path: route.path,
              models: app.definitions?.type,
              contentType: route.hooks.type
            });
          });
          return;
        }
        registerSchemaPath({
          schema: schema3,
          hook: route.hooks,
          method: route.method,
          path: route.path,
          models: app.definitions?.type,
          contentType: route.hooks.type
        });
      });
    }
    return {
      openapi: "3.0.3",
      ...{
        ...documentation,
        tags: documentation.tags?.filter((tag) => !excludeTags?.includes(tag?.name)),
        info: {
          title: "Elysia Documentation",
          description: "Development documentation",
          version: "0.0.0",
          ...documentation.info
        }
      },
      paths: {
        ...filterPaths(schema3, relativePath, {
          excludeStaticFile,
          exclude: Array.isArray(exclude3) ? exclude3 : [exclude3]
        }),
        ...documentation.paths
      },
      components: {
        ...documentation.components,
        schemas: {
          ...app.definitions?.type,
          ...documentation.components?.schemas
        }
      }
    };
  });
  return app;
};
var src_default = swagger;

// src/index.ts
var import_client = __toESM(require_default2(), 1);
var prisma = new import_client.PrismaClient;
async function getAccount() {
  const account = await prisma.accounts.findMany({});
  return account;
}
async function createAccount() {
  const account = await prisma.accounts.create({
    data: {
      email: "random127",
      password: "password",
      username: "random127",
      created_on: new Date
    }
  });
  return account;
}
var users = new Q0({ prefix: "/users" }).get("/", () => "Users").get("/account", getAccount).get("/create", createAccount).get("/profile", "Profile").get("/settings", "Settings");
var app = new Q0().use(src_default()).use(users).get("/", () => "Hello Elysia").get("/test", "Testing").listen(3000);
console.log(`\uD83E\uDD8A Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
