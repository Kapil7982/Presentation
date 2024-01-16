
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model lectures
 * 
 */
export type lectures = $Result.DefaultSelection<Prisma.$lecturesPayload>
/**
 * Model scenes
 * 
 */
export type scenes = $Result.DefaultSelection<Prisma.$scenesPayload>
/**
 * Model segments
 * 
 */
export type segments = $Result.DefaultSelection<Prisma.$segmentsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Lectures
 * const lectures = await prisma.lectures.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Lectures
   * const lectures = await prisma.lectures.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.lectures`: Exposes CRUD operations for the **lectures** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lectures
    * const lectures = await prisma.lectures.findMany()
    * ```
    */
  get lectures(): Prisma.lecturesDelegate<ExtArgs>;

  /**
   * `prisma.scenes`: Exposes CRUD operations for the **scenes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scenes
    * const scenes = await prisma.scenes.findMany()
    * ```
    */
  get scenes(): Prisma.scenesDelegate<ExtArgs>;

  /**
   * `prisma.segments`: Exposes CRUD operations for the **segments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Segments
    * const segments = await prisma.segments.findMany()
    * ```
    */
  get segments(): Prisma.segmentsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.8.1
   * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    lectures: 'lectures',
    scenes: 'scenes',
    segments: 'segments'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'lectures' | 'scenes' | 'segments'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      lectures: {
        payload: Prisma.$lecturesPayload<ExtArgs>
        fields: Prisma.lecturesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.lecturesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$lecturesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.lecturesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$lecturesPayload>
          }
          findFirst: {
            args: Prisma.lecturesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$lecturesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.lecturesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$lecturesPayload>
          }
          findMany: {
            args: Prisma.lecturesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$lecturesPayload>[]
          }
          create: {
            args: Prisma.lecturesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$lecturesPayload>
          }
          createMany: {
            args: Prisma.lecturesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.lecturesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$lecturesPayload>
          }
          update: {
            args: Prisma.lecturesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$lecturesPayload>
          }
          deleteMany: {
            args: Prisma.lecturesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.lecturesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.lecturesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$lecturesPayload>
          }
          aggregate: {
            args: Prisma.LecturesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLectures>
          }
          groupBy: {
            args: Prisma.lecturesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LecturesGroupByOutputType>[]
          }
          count: {
            args: Prisma.lecturesCountArgs<ExtArgs>,
            result: $Utils.Optional<LecturesCountAggregateOutputType> | number
          }
        }
      }
      scenes: {
        payload: Prisma.$scenesPayload<ExtArgs>
        fields: Prisma.scenesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.scenesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$scenesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.scenesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$scenesPayload>
          }
          findFirst: {
            args: Prisma.scenesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$scenesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.scenesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$scenesPayload>
          }
          findMany: {
            args: Prisma.scenesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$scenesPayload>[]
          }
          create: {
            args: Prisma.scenesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$scenesPayload>
          }
          createMany: {
            args: Prisma.scenesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.scenesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$scenesPayload>
          }
          update: {
            args: Prisma.scenesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$scenesPayload>
          }
          deleteMany: {
            args: Prisma.scenesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.scenesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.scenesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$scenesPayload>
          }
          aggregate: {
            args: Prisma.ScenesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateScenes>
          }
          groupBy: {
            args: Prisma.scenesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ScenesGroupByOutputType>[]
          }
          count: {
            args: Prisma.scenesCountArgs<ExtArgs>,
            result: $Utils.Optional<ScenesCountAggregateOutputType> | number
          }
        }
      }
      segments: {
        payload: Prisma.$segmentsPayload<ExtArgs>
        fields: Prisma.segmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.segmentsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$segmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.segmentsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$segmentsPayload>
          }
          findFirst: {
            args: Prisma.segmentsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$segmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.segmentsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$segmentsPayload>
          }
          findMany: {
            args: Prisma.segmentsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$segmentsPayload>[]
          }
          create: {
            args: Prisma.segmentsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$segmentsPayload>
          }
          createMany: {
            args: Prisma.segmentsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.segmentsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$segmentsPayload>
          }
          update: {
            args: Prisma.segmentsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$segmentsPayload>
          }
          deleteMany: {
            args: Prisma.segmentsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.segmentsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.segmentsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$segmentsPayload>
          }
          aggregate: {
            args: Prisma.SegmentsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSegments>
          }
          groupBy: {
            args: Prisma.segmentsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SegmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.segmentsCountArgs<ExtArgs>,
            result: $Utils.Optional<SegmentsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type LecturesCountOutputType
   */

  export type LecturesCountOutputType = {
    scenes: number
  }

  export type LecturesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scenes?: boolean | LecturesCountOutputTypeCountScenesArgs
  }

  // Custom InputTypes

  /**
   * LecturesCountOutputType without action
   */
  export type LecturesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturesCountOutputType
     */
    select?: LecturesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * LecturesCountOutputType without action
   */
  export type LecturesCountOutputTypeCountScenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: scenesWhereInput
  }



  /**
   * Count Type ScenesCountOutputType
   */

  export type ScenesCountOutputType = {
    segments: number
  }

  export type ScenesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    segments?: boolean | ScenesCountOutputTypeCountSegmentsArgs
  }

  // Custom InputTypes

  /**
   * ScenesCountOutputType without action
   */
  export type ScenesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScenesCountOutputType
     */
    select?: ScenesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ScenesCountOutputType without action
   */
  export type ScenesCountOutputTypeCountSegmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: segmentsWhereInput
  }



  /**
   * Models
   */

  /**
   * Model lectures
   */

  export type AggregateLectures = {
    _count: LecturesCountAggregateOutputType | null
    _avg: LecturesAvgAggregateOutputType | null
    _sum: LecturesSumAggregateOutputType | null
    _min: LecturesMinAggregateOutputType | null
    _max: LecturesMaxAggregateOutputType | null
  }

  export type LecturesAvgAggregateOutputType = {
    id: number | null
  }

  export type LecturesSumAggregateOutputType = {
    id: number | null
  }

  export type LecturesMinAggregateOutputType = {
    id: number | null
    title: string | null
    category: string | null
    type: string | null
  }

  export type LecturesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    category: string | null
    type: string | null
  }

  export type LecturesCountAggregateOutputType = {
    id: number
    title: number
    category: number
    type: number
    _all: number
  }


  export type LecturesAvgAggregateInputType = {
    id?: true
  }

  export type LecturesSumAggregateInputType = {
    id?: true
  }

  export type LecturesMinAggregateInputType = {
    id?: true
    title?: true
    category?: true
    type?: true
  }

  export type LecturesMaxAggregateInputType = {
    id?: true
    title?: true
    category?: true
    type?: true
  }

  export type LecturesCountAggregateInputType = {
    id?: true
    title?: true
    category?: true
    type?: true
    _all?: true
  }

  export type LecturesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lectures to aggregate.
     */
    where?: lecturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lectures to fetch.
     */
    orderBy?: lecturesOrderByWithRelationInput | lecturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: lecturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lectures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lectures
    **/
    _count?: true | LecturesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LecturesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LecturesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LecturesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LecturesMaxAggregateInputType
  }

  export type GetLecturesAggregateType<T extends LecturesAggregateArgs> = {
        [P in keyof T & keyof AggregateLectures]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLectures[P]>
      : GetScalarType<T[P], AggregateLectures[P]>
  }




  export type lecturesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lecturesWhereInput
    orderBy?: lecturesOrderByWithAggregationInput | lecturesOrderByWithAggregationInput[]
    by: LecturesScalarFieldEnum[] | LecturesScalarFieldEnum
    having?: lecturesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LecturesCountAggregateInputType | true
    _avg?: LecturesAvgAggregateInputType
    _sum?: LecturesSumAggregateInputType
    _min?: LecturesMinAggregateInputType
    _max?: LecturesMaxAggregateInputType
  }

  export type LecturesGroupByOutputType = {
    id: number
    title: string
    category: string
    type: string
    _count: LecturesCountAggregateOutputType | null
    _avg: LecturesAvgAggregateOutputType | null
    _sum: LecturesSumAggregateOutputType | null
    _min: LecturesMinAggregateOutputType | null
    _max: LecturesMaxAggregateOutputType | null
  }

  type GetLecturesGroupByPayload<T extends lecturesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LecturesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LecturesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LecturesGroupByOutputType[P]>
            : GetScalarType<T[P], LecturesGroupByOutputType[P]>
        }
      >
    >


  export type lecturesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    type?: boolean
    scenes?: boolean | lectures$scenesArgs<ExtArgs>
    _count?: boolean | LecturesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lectures"]>

  export type lecturesSelectScalar = {
    id?: boolean
    title?: boolean
    category?: boolean
    type?: boolean
  }

  export type lecturesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scenes?: boolean | lectures$scenesArgs<ExtArgs>
    _count?: boolean | LecturesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $lecturesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "lectures"
    objects: {
      scenes: Prisma.$scenesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      category: string
      type: string
    }, ExtArgs["result"]["lectures"]>
    composites: {}
  }


  type lecturesGetPayload<S extends boolean | null | undefined | lecturesDefaultArgs> = $Result.GetResult<Prisma.$lecturesPayload, S>

  type lecturesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<lecturesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LecturesCountAggregateInputType | true
    }

  export interface lecturesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lectures'], meta: { name: 'lectures' } }
    /**
     * Find zero or one Lectures that matches the filter.
     * @param {lecturesFindUniqueArgs} args - Arguments to find a Lectures
     * @example
     * // Get one Lectures
     * const lectures = await prisma.lectures.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends lecturesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, lecturesFindUniqueArgs<ExtArgs>>
    ): Prisma__lecturesClient<$Result.GetResult<Prisma.$lecturesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Lectures that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {lecturesFindUniqueOrThrowArgs} args - Arguments to find a Lectures
     * @example
     * // Get one Lectures
     * const lectures = await prisma.lectures.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends lecturesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, lecturesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__lecturesClient<$Result.GetResult<Prisma.$lecturesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Lectures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lecturesFindFirstArgs} args - Arguments to find a Lectures
     * @example
     * // Get one Lectures
     * const lectures = await prisma.lectures.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends lecturesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, lecturesFindFirstArgs<ExtArgs>>
    ): Prisma__lecturesClient<$Result.GetResult<Prisma.$lecturesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Lectures that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lecturesFindFirstOrThrowArgs} args - Arguments to find a Lectures
     * @example
     * // Get one Lectures
     * const lectures = await prisma.lectures.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends lecturesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, lecturesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__lecturesClient<$Result.GetResult<Prisma.$lecturesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Lectures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lecturesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lectures
     * const lectures = await prisma.lectures.findMany()
     * 
     * // Get first 10 Lectures
     * const lectures = await prisma.lectures.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lecturesWithIdOnly = await prisma.lectures.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends lecturesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, lecturesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lecturesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Lectures.
     * @param {lecturesCreateArgs} args - Arguments to create a Lectures.
     * @example
     * // Create one Lectures
     * const Lectures = await prisma.lectures.create({
     *   data: {
     *     // ... data to create a Lectures
     *   }
     * })
     * 
    **/
    create<T extends lecturesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, lecturesCreateArgs<ExtArgs>>
    ): Prisma__lecturesClient<$Result.GetResult<Prisma.$lecturesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Lectures.
     *     @param {lecturesCreateManyArgs} args - Arguments to create many Lectures.
     *     @example
     *     // Create many Lectures
     *     const lectures = await prisma.lectures.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends lecturesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, lecturesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Lectures.
     * @param {lecturesDeleteArgs} args - Arguments to delete one Lectures.
     * @example
     * // Delete one Lectures
     * const Lectures = await prisma.lectures.delete({
     *   where: {
     *     // ... filter to delete one Lectures
     *   }
     * })
     * 
    **/
    delete<T extends lecturesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, lecturesDeleteArgs<ExtArgs>>
    ): Prisma__lecturesClient<$Result.GetResult<Prisma.$lecturesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Lectures.
     * @param {lecturesUpdateArgs} args - Arguments to update one Lectures.
     * @example
     * // Update one Lectures
     * const lectures = await prisma.lectures.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends lecturesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, lecturesUpdateArgs<ExtArgs>>
    ): Prisma__lecturesClient<$Result.GetResult<Prisma.$lecturesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Lectures.
     * @param {lecturesDeleteManyArgs} args - Arguments to filter Lectures to delete.
     * @example
     * // Delete a few Lectures
     * const { count } = await prisma.lectures.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends lecturesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, lecturesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lectures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lecturesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lectures
     * const lectures = await prisma.lectures.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends lecturesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, lecturesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lectures.
     * @param {lecturesUpsertArgs} args - Arguments to update or create a Lectures.
     * @example
     * // Update or create a Lectures
     * const lectures = await prisma.lectures.upsert({
     *   create: {
     *     // ... data to create a Lectures
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lectures we want to update
     *   }
     * })
    **/
    upsert<T extends lecturesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, lecturesUpsertArgs<ExtArgs>>
    ): Prisma__lecturesClient<$Result.GetResult<Prisma.$lecturesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Lectures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lecturesCountArgs} args - Arguments to filter Lectures to count.
     * @example
     * // Count the number of Lectures
     * const count = await prisma.lectures.count({
     *   where: {
     *     // ... the filter for the Lectures we want to count
     *   }
     * })
    **/
    count<T extends lecturesCountArgs>(
      args?: Subset<T, lecturesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LecturesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lectures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LecturesAggregateArgs>(args: Subset<T, LecturesAggregateArgs>): Prisma.PrismaPromise<GetLecturesAggregateType<T>>

    /**
     * Group by Lectures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lecturesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends lecturesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lecturesGroupByArgs['orderBy'] }
        : { orderBy?: lecturesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, lecturesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLecturesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the lectures model
   */
  readonly fields: lecturesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lectures.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lecturesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    scenes<T extends lectures$scenesArgs<ExtArgs> = {}>(args?: Subset<T, lectures$scenesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$scenesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the lectures model
   */ 
  interface lecturesFieldRefs {
    readonly id: FieldRef<"lectures", 'Int'>
    readonly title: FieldRef<"lectures", 'String'>
    readonly category: FieldRef<"lectures", 'String'>
    readonly type: FieldRef<"lectures", 'String'>
  }
    

  // Custom InputTypes

  /**
   * lectures findUnique
   */
  export type lecturesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lectures
     */
    select?: lecturesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lecturesInclude<ExtArgs> | null
    /**
     * Filter, which lectures to fetch.
     */
    where: lecturesWhereUniqueInput
  }


  /**
   * lectures findUniqueOrThrow
   */
  export type lecturesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lectures
     */
    select?: lecturesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lecturesInclude<ExtArgs> | null
    /**
     * Filter, which lectures to fetch.
     */
    where: lecturesWhereUniqueInput
  }


  /**
   * lectures findFirst
   */
  export type lecturesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lectures
     */
    select?: lecturesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lecturesInclude<ExtArgs> | null
    /**
     * Filter, which lectures to fetch.
     */
    where?: lecturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lectures to fetch.
     */
    orderBy?: lecturesOrderByWithRelationInput | lecturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lectures.
     */
    cursor?: lecturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lectures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lectures.
     */
    distinct?: LecturesScalarFieldEnum | LecturesScalarFieldEnum[]
  }


  /**
   * lectures findFirstOrThrow
   */
  export type lecturesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lectures
     */
    select?: lecturesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lecturesInclude<ExtArgs> | null
    /**
     * Filter, which lectures to fetch.
     */
    where?: lecturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lectures to fetch.
     */
    orderBy?: lecturesOrderByWithRelationInput | lecturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lectures.
     */
    cursor?: lecturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lectures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lectures.
     */
    distinct?: LecturesScalarFieldEnum | LecturesScalarFieldEnum[]
  }


  /**
   * lectures findMany
   */
  export type lecturesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lectures
     */
    select?: lecturesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lecturesInclude<ExtArgs> | null
    /**
     * Filter, which lectures to fetch.
     */
    where?: lecturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lectures to fetch.
     */
    orderBy?: lecturesOrderByWithRelationInput | lecturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lectures.
     */
    cursor?: lecturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lectures.
     */
    skip?: number
    distinct?: LecturesScalarFieldEnum | LecturesScalarFieldEnum[]
  }


  /**
   * lectures create
   */
  export type lecturesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lectures
     */
    select?: lecturesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lecturesInclude<ExtArgs> | null
    /**
     * The data needed to create a lectures.
     */
    data: XOR<lecturesCreateInput, lecturesUncheckedCreateInput>
  }


  /**
   * lectures createMany
   */
  export type lecturesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lectures.
     */
    data: lecturesCreateManyInput | lecturesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * lectures update
   */
  export type lecturesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lectures
     */
    select?: lecturesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lecturesInclude<ExtArgs> | null
    /**
     * The data needed to update a lectures.
     */
    data: XOR<lecturesUpdateInput, lecturesUncheckedUpdateInput>
    /**
     * Choose, which lectures to update.
     */
    where: lecturesWhereUniqueInput
  }


  /**
   * lectures updateMany
   */
  export type lecturesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lectures.
     */
    data: XOR<lecturesUpdateManyMutationInput, lecturesUncheckedUpdateManyInput>
    /**
     * Filter which lectures to update
     */
    where?: lecturesWhereInput
  }


  /**
   * lectures upsert
   */
  export type lecturesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lectures
     */
    select?: lecturesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lecturesInclude<ExtArgs> | null
    /**
     * The filter to search for the lectures to update in case it exists.
     */
    where: lecturesWhereUniqueInput
    /**
     * In case the lectures found by the `where` argument doesn't exist, create a new lectures with this data.
     */
    create: XOR<lecturesCreateInput, lecturesUncheckedCreateInput>
    /**
     * In case the lectures was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lecturesUpdateInput, lecturesUncheckedUpdateInput>
  }


  /**
   * lectures delete
   */
  export type lecturesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lectures
     */
    select?: lecturesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lecturesInclude<ExtArgs> | null
    /**
     * Filter which lectures to delete.
     */
    where: lecturesWhereUniqueInput
  }


  /**
   * lectures deleteMany
   */
  export type lecturesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lectures to delete
     */
    where?: lecturesWhereInput
  }


  /**
   * lectures.scenes
   */
  export type lectures$scenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scenes
     */
    select?: scenesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: scenesInclude<ExtArgs> | null
    where?: scenesWhereInput
    orderBy?: scenesOrderByWithRelationInput | scenesOrderByWithRelationInput[]
    cursor?: scenesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScenesScalarFieldEnum | ScenesScalarFieldEnum[]
  }


  /**
   * lectures without action
   */
  export type lecturesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lectures
     */
    select?: lecturesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lecturesInclude<ExtArgs> | null
  }



  /**
   * Model scenes
   */

  export type AggregateScenes = {
    _count: ScenesCountAggregateOutputType | null
    _avg: ScenesAvgAggregateOutputType | null
    _sum: ScenesSumAggregateOutputType | null
    _min: ScenesMinAggregateOutputType | null
    _max: ScenesMaxAggregateOutputType | null
  }

  export type ScenesAvgAggregateOutputType = {
    id: number | null
    lecture_id: number | null
    order: number | null
    successSceneId: number | null
    failureSceneId: number | null
  }

  export type ScenesSumAggregateOutputType = {
    id: number | null
    lecture_id: number | null
    order: number | null
    successSceneId: number | null
    failureSceneId: number | null
  }

  export type ScenesMinAggregateOutputType = {
    id: number | null
    lecture_id: number | null
    order: number | null
    archived: boolean | null
    successSceneId: number | null
    failureSceneId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ScenesMaxAggregateOutputType = {
    id: number | null
    lecture_id: number | null
    order: number | null
    archived: boolean | null
    successSceneId: number | null
    failureSceneId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ScenesCountAggregateOutputType = {
    id: number
    lecture_id: number
    order: number
    archived: number
    successSceneId: number
    failureSceneId: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ScenesAvgAggregateInputType = {
    id?: true
    lecture_id?: true
    order?: true
    successSceneId?: true
    failureSceneId?: true
  }

  export type ScenesSumAggregateInputType = {
    id?: true
    lecture_id?: true
    order?: true
    successSceneId?: true
    failureSceneId?: true
  }

  export type ScenesMinAggregateInputType = {
    id?: true
    lecture_id?: true
    order?: true
    archived?: true
    successSceneId?: true
    failureSceneId?: true
    created_at?: true
    updated_at?: true
  }

  export type ScenesMaxAggregateInputType = {
    id?: true
    lecture_id?: true
    order?: true
    archived?: true
    successSceneId?: true
    failureSceneId?: true
    created_at?: true
    updated_at?: true
  }

  export type ScenesCountAggregateInputType = {
    id?: true
    lecture_id?: true
    order?: true
    archived?: true
    successSceneId?: true
    failureSceneId?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ScenesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which scenes to aggregate.
     */
    where?: scenesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of scenes to fetch.
     */
    orderBy?: scenesOrderByWithRelationInput | scenesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: scenesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` scenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` scenes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned scenes
    **/
    _count?: true | ScenesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScenesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScenesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScenesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScenesMaxAggregateInputType
  }

  export type GetScenesAggregateType<T extends ScenesAggregateArgs> = {
        [P in keyof T & keyof AggregateScenes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScenes[P]>
      : GetScalarType<T[P], AggregateScenes[P]>
  }




  export type scenesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: scenesWhereInput
    orderBy?: scenesOrderByWithAggregationInput | scenesOrderByWithAggregationInput[]
    by: ScenesScalarFieldEnum[] | ScenesScalarFieldEnum
    having?: scenesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScenesCountAggregateInputType | true
    _avg?: ScenesAvgAggregateInputType
    _sum?: ScenesSumAggregateInputType
    _min?: ScenesMinAggregateInputType
    _max?: ScenesMaxAggregateInputType
  }

  export type ScenesGroupByOutputType = {
    id: number
    lecture_id: number
    order: number
    archived: boolean
    successSceneId: number | null
    failureSceneId: number | null
    created_at: Date
    updated_at: Date
    _count: ScenesCountAggregateOutputType | null
    _avg: ScenesAvgAggregateOutputType | null
    _sum: ScenesSumAggregateOutputType | null
    _min: ScenesMinAggregateOutputType | null
    _max: ScenesMaxAggregateOutputType | null
  }

  type GetScenesGroupByPayload<T extends scenesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScenesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScenesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScenesGroupByOutputType[P]>
            : GetScalarType<T[P], ScenesGroupByOutputType[P]>
        }
      >
    >


  export type scenesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lecture_id?: boolean
    order?: boolean
    archived?: boolean
    successSceneId?: boolean
    failureSceneId?: boolean
    created_at?: boolean
    updated_at?: boolean
    segments?: boolean | scenes$segmentsArgs<ExtArgs>
    lectures?: boolean | lecturesDefaultArgs<ExtArgs>
    _count?: boolean | ScenesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scenes"]>

  export type scenesSelectScalar = {
    id?: boolean
    lecture_id?: boolean
    order?: boolean
    archived?: boolean
    successSceneId?: boolean
    failureSceneId?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type scenesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    segments?: boolean | scenes$segmentsArgs<ExtArgs>
    lectures?: boolean | lecturesDefaultArgs<ExtArgs>
    _count?: boolean | ScenesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $scenesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "scenes"
    objects: {
      segments: Prisma.$segmentsPayload<ExtArgs>[]
      lectures: Prisma.$lecturesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      lecture_id: number
      order: number
      archived: boolean
      successSceneId: number | null
      failureSceneId: number | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["scenes"]>
    composites: {}
  }


  type scenesGetPayload<S extends boolean | null | undefined | scenesDefaultArgs> = $Result.GetResult<Prisma.$scenesPayload, S>

  type scenesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<scenesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ScenesCountAggregateInputType | true
    }

  export interface scenesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['scenes'], meta: { name: 'scenes' } }
    /**
     * Find zero or one Scenes that matches the filter.
     * @param {scenesFindUniqueArgs} args - Arguments to find a Scenes
     * @example
     * // Get one Scenes
     * const scenes = await prisma.scenes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends scenesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, scenesFindUniqueArgs<ExtArgs>>
    ): Prisma__scenesClient<$Result.GetResult<Prisma.$scenesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Scenes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {scenesFindUniqueOrThrowArgs} args - Arguments to find a Scenes
     * @example
     * // Get one Scenes
     * const scenes = await prisma.scenes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends scenesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, scenesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__scenesClient<$Result.GetResult<Prisma.$scenesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Scenes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scenesFindFirstArgs} args - Arguments to find a Scenes
     * @example
     * // Get one Scenes
     * const scenes = await prisma.scenes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends scenesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, scenesFindFirstArgs<ExtArgs>>
    ): Prisma__scenesClient<$Result.GetResult<Prisma.$scenesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Scenes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scenesFindFirstOrThrowArgs} args - Arguments to find a Scenes
     * @example
     * // Get one Scenes
     * const scenes = await prisma.scenes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends scenesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, scenesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__scenesClient<$Result.GetResult<Prisma.$scenesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Scenes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scenesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scenes
     * const scenes = await prisma.scenes.findMany()
     * 
     * // Get first 10 Scenes
     * const scenes = await prisma.scenes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scenesWithIdOnly = await prisma.scenes.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends scenesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, scenesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$scenesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Scenes.
     * @param {scenesCreateArgs} args - Arguments to create a Scenes.
     * @example
     * // Create one Scenes
     * const Scenes = await prisma.scenes.create({
     *   data: {
     *     // ... data to create a Scenes
     *   }
     * })
     * 
    **/
    create<T extends scenesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, scenesCreateArgs<ExtArgs>>
    ): Prisma__scenesClient<$Result.GetResult<Prisma.$scenesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Scenes.
     *     @param {scenesCreateManyArgs} args - Arguments to create many Scenes.
     *     @example
     *     // Create many Scenes
     *     const scenes = await prisma.scenes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends scenesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, scenesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Scenes.
     * @param {scenesDeleteArgs} args - Arguments to delete one Scenes.
     * @example
     * // Delete one Scenes
     * const Scenes = await prisma.scenes.delete({
     *   where: {
     *     // ... filter to delete one Scenes
     *   }
     * })
     * 
    **/
    delete<T extends scenesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, scenesDeleteArgs<ExtArgs>>
    ): Prisma__scenesClient<$Result.GetResult<Prisma.$scenesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Scenes.
     * @param {scenesUpdateArgs} args - Arguments to update one Scenes.
     * @example
     * // Update one Scenes
     * const scenes = await prisma.scenes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends scenesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, scenesUpdateArgs<ExtArgs>>
    ): Prisma__scenesClient<$Result.GetResult<Prisma.$scenesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Scenes.
     * @param {scenesDeleteManyArgs} args - Arguments to filter Scenes to delete.
     * @example
     * // Delete a few Scenes
     * const { count } = await prisma.scenes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends scenesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, scenesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scenes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scenesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scenes
     * const scenes = await prisma.scenes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends scenesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, scenesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Scenes.
     * @param {scenesUpsertArgs} args - Arguments to update or create a Scenes.
     * @example
     * // Update or create a Scenes
     * const scenes = await prisma.scenes.upsert({
     *   create: {
     *     // ... data to create a Scenes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scenes we want to update
     *   }
     * })
    **/
    upsert<T extends scenesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, scenesUpsertArgs<ExtArgs>>
    ): Prisma__scenesClient<$Result.GetResult<Prisma.$scenesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Scenes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scenesCountArgs} args - Arguments to filter Scenes to count.
     * @example
     * // Count the number of Scenes
     * const count = await prisma.scenes.count({
     *   where: {
     *     // ... the filter for the Scenes we want to count
     *   }
     * })
    **/
    count<T extends scenesCountArgs>(
      args?: Subset<T, scenesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScenesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scenes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScenesAggregateArgs>(args: Subset<T, ScenesAggregateArgs>): Prisma.PrismaPromise<GetScenesAggregateType<T>>

    /**
     * Group by Scenes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scenesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends scenesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: scenesGroupByArgs['orderBy'] }
        : { orderBy?: scenesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, scenesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScenesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the scenes model
   */
  readonly fields: scenesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for scenes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__scenesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    segments<T extends scenes$segmentsArgs<ExtArgs> = {}>(args?: Subset<T, scenes$segmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$segmentsPayload<ExtArgs>, T, 'findMany'> | Null>;

    lectures<T extends lecturesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, lecturesDefaultArgs<ExtArgs>>): Prisma__lecturesClient<$Result.GetResult<Prisma.$lecturesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the scenes model
   */ 
  interface scenesFieldRefs {
    readonly id: FieldRef<"scenes", 'Int'>
    readonly lecture_id: FieldRef<"scenes", 'Int'>
    readonly order: FieldRef<"scenes", 'Int'>
    readonly archived: FieldRef<"scenes", 'Boolean'>
    readonly successSceneId: FieldRef<"scenes", 'Int'>
    readonly failureSceneId: FieldRef<"scenes", 'Int'>
    readonly created_at: FieldRef<"scenes", 'DateTime'>
    readonly updated_at: FieldRef<"scenes", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * scenes findUnique
   */
  export type scenesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scenes
     */
    select?: scenesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: scenesInclude<ExtArgs> | null
    /**
     * Filter, which scenes to fetch.
     */
    where: scenesWhereUniqueInput
  }


  /**
   * scenes findUniqueOrThrow
   */
  export type scenesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scenes
     */
    select?: scenesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: scenesInclude<ExtArgs> | null
    /**
     * Filter, which scenes to fetch.
     */
    where: scenesWhereUniqueInput
  }


  /**
   * scenes findFirst
   */
  export type scenesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scenes
     */
    select?: scenesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: scenesInclude<ExtArgs> | null
    /**
     * Filter, which scenes to fetch.
     */
    where?: scenesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of scenes to fetch.
     */
    orderBy?: scenesOrderByWithRelationInput | scenesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for scenes.
     */
    cursor?: scenesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` scenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` scenes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of scenes.
     */
    distinct?: ScenesScalarFieldEnum | ScenesScalarFieldEnum[]
  }


  /**
   * scenes findFirstOrThrow
   */
  export type scenesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scenes
     */
    select?: scenesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: scenesInclude<ExtArgs> | null
    /**
     * Filter, which scenes to fetch.
     */
    where?: scenesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of scenes to fetch.
     */
    orderBy?: scenesOrderByWithRelationInput | scenesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for scenes.
     */
    cursor?: scenesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` scenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` scenes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of scenes.
     */
    distinct?: ScenesScalarFieldEnum | ScenesScalarFieldEnum[]
  }


  /**
   * scenes findMany
   */
  export type scenesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scenes
     */
    select?: scenesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: scenesInclude<ExtArgs> | null
    /**
     * Filter, which scenes to fetch.
     */
    where?: scenesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of scenes to fetch.
     */
    orderBy?: scenesOrderByWithRelationInput | scenesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing scenes.
     */
    cursor?: scenesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` scenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` scenes.
     */
    skip?: number
    distinct?: ScenesScalarFieldEnum | ScenesScalarFieldEnum[]
  }


  /**
   * scenes create
   */
  export type scenesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scenes
     */
    select?: scenesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: scenesInclude<ExtArgs> | null
    /**
     * The data needed to create a scenes.
     */
    data: XOR<scenesCreateInput, scenesUncheckedCreateInput>
  }


  /**
   * scenes createMany
   */
  export type scenesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many scenes.
     */
    data: scenesCreateManyInput | scenesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * scenes update
   */
  export type scenesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scenes
     */
    select?: scenesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: scenesInclude<ExtArgs> | null
    /**
     * The data needed to update a scenes.
     */
    data: XOR<scenesUpdateInput, scenesUncheckedUpdateInput>
    /**
     * Choose, which scenes to update.
     */
    where: scenesWhereUniqueInput
  }


  /**
   * scenes updateMany
   */
  export type scenesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update scenes.
     */
    data: XOR<scenesUpdateManyMutationInput, scenesUncheckedUpdateManyInput>
    /**
     * Filter which scenes to update
     */
    where?: scenesWhereInput
  }


  /**
   * scenes upsert
   */
  export type scenesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scenes
     */
    select?: scenesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: scenesInclude<ExtArgs> | null
    /**
     * The filter to search for the scenes to update in case it exists.
     */
    where: scenesWhereUniqueInput
    /**
     * In case the scenes found by the `where` argument doesn't exist, create a new scenes with this data.
     */
    create: XOR<scenesCreateInput, scenesUncheckedCreateInput>
    /**
     * In case the scenes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<scenesUpdateInput, scenesUncheckedUpdateInput>
  }


  /**
   * scenes delete
   */
  export type scenesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scenes
     */
    select?: scenesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: scenesInclude<ExtArgs> | null
    /**
     * Filter which scenes to delete.
     */
    where: scenesWhereUniqueInput
  }


  /**
   * scenes deleteMany
   */
  export type scenesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which scenes to delete
     */
    where?: scenesWhereInput
  }


  /**
   * scenes.segments
   */
  export type scenes$segmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the segments
     */
    select?: segmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: segmentsInclude<ExtArgs> | null
    where?: segmentsWhereInput
    orderBy?: segmentsOrderByWithRelationInput | segmentsOrderByWithRelationInput[]
    cursor?: segmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SegmentsScalarFieldEnum | SegmentsScalarFieldEnum[]
  }


  /**
   * scenes without action
   */
  export type scenesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scenes
     */
    select?: scenesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: scenesInclude<ExtArgs> | null
  }



  /**
   * Model segments
   */

  export type AggregateSegments = {
    _count: SegmentsCountAggregateOutputType | null
    _avg: SegmentsAvgAggregateOutputType | null
    _sum: SegmentsSumAggregateOutputType | null
    _min: SegmentsMinAggregateOutputType | null
    _max: SegmentsMaxAggregateOutputType | null
  }

  export type SegmentsAvgAggregateOutputType = {
    id: number | null
    scene_id: number | null
    order: number | null
    nextSegmentId: number | null
  }

  export type SegmentsSumAggregateOutputType = {
    id: number | null
    scene_id: number | null
    order: number | null
    nextSegmentId: number | null
  }

  export type SegmentsMinAggregateOutputType = {
    id: number | null
    scene_id: number | null
    video: string | null
    order: number | null
    archived: boolean | null
    type: string | null
    nextSegmentId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SegmentsMaxAggregateOutputType = {
    id: number | null
    scene_id: number | null
    video: string | null
    order: number | null
    archived: boolean | null
    type: string | null
    nextSegmentId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SegmentsCountAggregateOutputType = {
    id: number
    scene_id: number
    video: number
    slide: number
    order: number
    archived: number
    type: number
    nextSegmentId: number
    data: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SegmentsAvgAggregateInputType = {
    id?: true
    scene_id?: true
    order?: true
    nextSegmentId?: true
  }

  export type SegmentsSumAggregateInputType = {
    id?: true
    scene_id?: true
    order?: true
    nextSegmentId?: true
  }

  export type SegmentsMinAggregateInputType = {
    id?: true
    scene_id?: true
    video?: true
    order?: true
    archived?: true
    type?: true
    nextSegmentId?: true
    created_at?: true
    updated_at?: true
  }

  export type SegmentsMaxAggregateInputType = {
    id?: true
    scene_id?: true
    video?: true
    order?: true
    archived?: true
    type?: true
    nextSegmentId?: true
    created_at?: true
    updated_at?: true
  }

  export type SegmentsCountAggregateInputType = {
    id?: true
    scene_id?: true
    video?: true
    slide?: true
    order?: true
    archived?: true
    type?: true
    nextSegmentId?: true
    data?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SegmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which segments to aggregate.
     */
    where?: segmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of segments to fetch.
     */
    orderBy?: segmentsOrderByWithRelationInput | segmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: segmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` segments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` segments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned segments
    **/
    _count?: true | SegmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SegmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SegmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SegmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SegmentsMaxAggregateInputType
  }

  export type GetSegmentsAggregateType<T extends SegmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateSegments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSegments[P]>
      : GetScalarType<T[P], AggregateSegments[P]>
  }




  export type segmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: segmentsWhereInput
    orderBy?: segmentsOrderByWithAggregationInput | segmentsOrderByWithAggregationInput[]
    by: SegmentsScalarFieldEnum[] | SegmentsScalarFieldEnum
    having?: segmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SegmentsCountAggregateInputType | true
    _avg?: SegmentsAvgAggregateInputType
    _sum?: SegmentsSumAggregateInputType
    _min?: SegmentsMinAggregateInputType
    _max?: SegmentsMaxAggregateInputType
  }

  export type SegmentsGroupByOutputType = {
    id: number
    scene_id: number
    video: string | null
    slide: JsonValue
    order: number
    archived: boolean
    type: string
    nextSegmentId: number | null
    data: JsonValue | null
    created_at: Date
    updated_at: Date
    _count: SegmentsCountAggregateOutputType | null
    _avg: SegmentsAvgAggregateOutputType | null
    _sum: SegmentsSumAggregateOutputType | null
    _min: SegmentsMinAggregateOutputType | null
    _max: SegmentsMaxAggregateOutputType | null
  }

  type GetSegmentsGroupByPayload<T extends segmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SegmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SegmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SegmentsGroupByOutputType[P]>
            : GetScalarType<T[P], SegmentsGroupByOutputType[P]>
        }
      >
    >


  export type segmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scene_id?: boolean
    video?: boolean
    slide?: boolean
    order?: boolean
    archived?: boolean
    type?: boolean
    nextSegmentId?: boolean
    data?: boolean
    created_at?: boolean
    updated_at?: boolean
    scenes?: boolean | scenesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["segments"]>

  export type segmentsSelectScalar = {
    id?: boolean
    scene_id?: boolean
    video?: boolean
    slide?: boolean
    order?: boolean
    archived?: boolean
    type?: boolean
    nextSegmentId?: boolean
    data?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type segmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scenes?: boolean | scenesDefaultArgs<ExtArgs>
  }


  export type $segmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "segments"
    objects: {
      scenes: Prisma.$scenesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      scene_id: number
      video: string | null
      slide: Prisma.JsonValue
      order: number
      archived: boolean
      type: string
      nextSegmentId: number | null
      data: Prisma.JsonValue | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["segments"]>
    composites: {}
  }


  type segmentsGetPayload<S extends boolean | null | undefined | segmentsDefaultArgs> = $Result.GetResult<Prisma.$segmentsPayload, S>

  type segmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<segmentsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SegmentsCountAggregateInputType | true
    }

  export interface segmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['segments'], meta: { name: 'segments' } }
    /**
     * Find zero or one Segments that matches the filter.
     * @param {segmentsFindUniqueArgs} args - Arguments to find a Segments
     * @example
     * // Get one Segments
     * const segments = await prisma.segments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends segmentsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, segmentsFindUniqueArgs<ExtArgs>>
    ): Prisma__segmentsClient<$Result.GetResult<Prisma.$segmentsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Segments that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {segmentsFindUniqueOrThrowArgs} args - Arguments to find a Segments
     * @example
     * // Get one Segments
     * const segments = await prisma.segments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends segmentsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, segmentsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__segmentsClient<$Result.GetResult<Prisma.$segmentsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Segments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {segmentsFindFirstArgs} args - Arguments to find a Segments
     * @example
     * // Get one Segments
     * const segments = await prisma.segments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends segmentsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, segmentsFindFirstArgs<ExtArgs>>
    ): Prisma__segmentsClient<$Result.GetResult<Prisma.$segmentsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Segments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {segmentsFindFirstOrThrowArgs} args - Arguments to find a Segments
     * @example
     * // Get one Segments
     * const segments = await prisma.segments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends segmentsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, segmentsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__segmentsClient<$Result.GetResult<Prisma.$segmentsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Segments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {segmentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Segments
     * const segments = await prisma.segments.findMany()
     * 
     * // Get first 10 Segments
     * const segments = await prisma.segments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const segmentsWithIdOnly = await prisma.segments.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends segmentsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, segmentsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$segmentsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Segments.
     * @param {segmentsCreateArgs} args - Arguments to create a Segments.
     * @example
     * // Create one Segments
     * const Segments = await prisma.segments.create({
     *   data: {
     *     // ... data to create a Segments
     *   }
     * })
     * 
    **/
    create<T extends segmentsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, segmentsCreateArgs<ExtArgs>>
    ): Prisma__segmentsClient<$Result.GetResult<Prisma.$segmentsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Segments.
     *     @param {segmentsCreateManyArgs} args - Arguments to create many Segments.
     *     @example
     *     // Create many Segments
     *     const segments = await prisma.segments.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends segmentsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, segmentsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Segments.
     * @param {segmentsDeleteArgs} args - Arguments to delete one Segments.
     * @example
     * // Delete one Segments
     * const Segments = await prisma.segments.delete({
     *   where: {
     *     // ... filter to delete one Segments
     *   }
     * })
     * 
    **/
    delete<T extends segmentsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, segmentsDeleteArgs<ExtArgs>>
    ): Prisma__segmentsClient<$Result.GetResult<Prisma.$segmentsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Segments.
     * @param {segmentsUpdateArgs} args - Arguments to update one Segments.
     * @example
     * // Update one Segments
     * const segments = await prisma.segments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends segmentsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, segmentsUpdateArgs<ExtArgs>>
    ): Prisma__segmentsClient<$Result.GetResult<Prisma.$segmentsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Segments.
     * @param {segmentsDeleteManyArgs} args - Arguments to filter Segments to delete.
     * @example
     * // Delete a few Segments
     * const { count } = await prisma.segments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends segmentsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, segmentsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Segments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {segmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Segments
     * const segments = await prisma.segments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends segmentsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, segmentsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Segments.
     * @param {segmentsUpsertArgs} args - Arguments to update or create a Segments.
     * @example
     * // Update or create a Segments
     * const segments = await prisma.segments.upsert({
     *   create: {
     *     // ... data to create a Segments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Segments we want to update
     *   }
     * })
    **/
    upsert<T extends segmentsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, segmentsUpsertArgs<ExtArgs>>
    ): Prisma__segmentsClient<$Result.GetResult<Prisma.$segmentsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Segments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {segmentsCountArgs} args - Arguments to filter Segments to count.
     * @example
     * // Count the number of Segments
     * const count = await prisma.segments.count({
     *   where: {
     *     // ... the filter for the Segments we want to count
     *   }
     * })
    **/
    count<T extends segmentsCountArgs>(
      args?: Subset<T, segmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SegmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Segments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SegmentsAggregateArgs>(args: Subset<T, SegmentsAggregateArgs>): Prisma.PrismaPromise<GetSegmentsAggregateType<T>>

    /**
     * Group by Segments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {segmentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends segmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: segmentsGroupByArgs['orderBy'] }
        : { orderBy?: segmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, segmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSegmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the segments model
   */
  readonly fields: segmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for segments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__segmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    scenes<T extends scenesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, scenesDefaultArgs<ExtArgs>>): Prisma__scenesClient<$Result.GetResult<Prisma.$scenesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the segments model
   */ 
  interface segmentsFieldRefs {
    readonly id: FieldRef<"segments", 'Int'>
    readonly scene_id: FieldRef<"segments", 'Int'>
    readonly video: FieldRef<"segments", 'String'>
    readonly slide: FieldRef<"segments", 'Json'>
    readonly order: FieldRef<"segments", 'Int'>
    readonly archived: FieldRef<"segments", 'Boolean'>
    readonly type: FieldRef<"segments", 'String'>
    readonly nextSegmentId: FieldRef<"segments", 'Int'>
    readonly data: FieldRef<"segments", 'Json'>
    readonly created_at: FieldRef<"segments", 'DateTime'>
    readonly updated_at: FieldRef<"segments", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * segments findUnique
   */
  export type segmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the segments
     */
    select?: segmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: segmentsInclude<ExtArgs> | null
    /**
     * Filter, which segments to fetch.
     */
    where: segmentsWhereUniqueInput
  }


  /**
   * segments findUniqueOrThrow
   */
  export type segmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the segments
     */
    select?: segmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: segmentsInclude<ExtArgs> | null
    /**
     * Filter, which segments to fetch.
     */
    where: segmentsWhereUniqueInput
  }


  /**
   * segments findFirst
   */
  export type segmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the segments
     */
    select?: segmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: segmentsInclude<ExtArgs> | null
    /**
     * Filter, which segments to fetch.
     */
    where?: segmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of segments to fetch.
     */
    orderBy?: segmentsOrderByWithRelationInput | segmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for segments.
     */
    cursor?: segmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` segments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` segments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of segments.
     */
    distinct?: SegmentsScalarFieldEnum | SegmentsScalarFieldEnum[]
  }


  /**
   * segments findFirstOrThrow
   */
  export type segmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the segments
     */
    select?: segmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: segmentsInclude<ExtArgs> | null
    /**
     * Filter, which segments to fetch.
     */
    where?: segmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of segments to fetch.
     */
    orderBy?: segmentsOrderByWithRelationInput | segmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for segments.
     */
    cursor?: segmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` segments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` segments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of segments.
     */
    distinct?: SegmentsScalarFieldEnum | SegmentsScalarFieldEnum[]
  }


  /**
   * segments findMany
   */
  export type segmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the segments
     */
    select?: segmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: segmentsInclude<ExtArgs> | null
    /**
     * Filter, which segments to fetch.
     */
    where?: segmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of segments to fetch.
     */
    orderBy?: segmentsOrderByWithRelationInput | segmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing segments.
     */
    cursor?: segmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` segments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` segments.
     */
    skip?: number
    distinct?: SegmentsScalarFieldEnum | SegmentsScalarFieldEnum[]
  }


  /**
   * segments create
   */
  export type segmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the segments
     */
    select?: segmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: segmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a segments.
     */
    data: XOR<segmentsCreateInput, segmentsUncheckedCreateInput>
  }


  /**
   * segments createMany
   */
  export type segmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many segments.
     */
    data: segmentsCreateManyInput | segmentsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * segments update
   */
  export type segmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the segments
     */
    select?: segmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: segmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a segments.
     */
    data: XOR<segmentsUpdateInput, segmentsUncheckedUpdateInput>
    /**
     * Choose, which segments to update.
     */
    where: segmentsWhereUniqueInput
  }


  /**
   * segments updateMany
   */
  export type segmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update segments.
     */
    data: XOR<segmentsUpdateManyMutationInput, segmentsUncheckedUpdateManyInput>
    /**
     * Filter which segments to update
     */
    where?: segmentsWhereInput
  }


  /**
   * segments upsert
   */
  export type segmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the segments
     */
    select?: segmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: segmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the segments to update in case it exists.
     */
    where: segmentsWhereUniqueInput
    /**
     * In case the segments found by the `where` argument doesn't exist, create a new segments with this data.
     */
    create: XOR<segmentsCreateInput, segmentsUncheckedCreateInput>
    /**
     * In case the segments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<segmentsUpdateInput, segmentsUncheckedUpdateInput>
  }


  /**
   * segments delete
   */
  export type segmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the segments
     */
    select?: segmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: segmentsInclude<ExtArgs> | null
    /**
     * Filter which segments to delete.
     */
    where: segmentsWhereUniqueInput
  }


  /**
   * segments deleteMany
   */
  export type segmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which segments to delete
     */
    where?: segmentsWhereInput
  }


  /**
   * segments without action
   */
  export type segmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the segments
     */
    select?: segmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: segmentsInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LecturesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    category: 'category',
    type: 'type'
  };

  export type LecturesScalarFieldEnum = (typeof LecturesScalarFieldEnum)[keyof typeof LecturesScalarFieldEnum]


  export const ScenesScalarFieldEnum: {
    id: 'id',
    lecture_id: 'lecture_id',
    order: 'order',
    archived: 'archived',
    successSceneId: 'successSceneId',
    failureSceneId: 'failureSceneId',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ScenesScalarFieldEnum = (typeof ScenesScalarFieldEnum)[keyof typeof ScenesScalarFieldEnum]


  export const SegmentsScalarFieldEnum: {
    id: 'id',
    scene_id: 'scene_id',
    video: 'video',
    slide: 'slide',
    order: 'order',
    archived: 'archived',
    type: 'type',
    nextSegmentId: 'nextSegmentId',
    data: 'data',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SegmentsScalarFieldEnum = (typeof SegmentsScalarFieldEnum)[keyof typeof SegmentsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type lecturesWhereInput = {
    AND?: lecturesWhereInput | lecturesWhereInput[]
    OR?: lecturesWhereInput[]
    NOT?: lecturesWhereInput | lecturesWhereInput[]
    id?: IntFilter<"lectures"> | number
    title?: StringFilter<"lectures"> | string
    category?: StringFilter<"lectures"> | string
    type?: StringFilter<"lectures"> | string
    scenes?: ScenesListRelationFilter
  }

  export type lecturesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    type?: SortOrder
    scenes?: scenesOrderByRelationAggregateInput
  }

  export type lecturesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: lecturesWhereInput | lecturesWhereInput[]
    OR?: lecturesWhereInput[]
    NOT?: lecturesWhereInput | lecturesWhereInput[]
    title?: StringFilter<"lectures"> | string
    category?: StringFilter<"lectures"> | string
    type?: StringFilter<"lectures"> | string
    scenes?: ScenesListRelationFilter
  }, "id">

  export type lecturesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    type?: SortOrder
    _count?: lecturesCountOrderByAggregateInput
    _avg?: lecturesAvgOrderByAggregateInput
    _max?: lecturesMaxOrderByAggregateInput
    _min?: lecturesMinOrderByAggregateInput
    _sum?: lecturesSumOrderByAggregateInput
  }

  export type lecturesScalarWhereWithAggregatesInput = {
    AND?: lecturesScalarWhereWithAggregatesInput | lecturesScalarWhereWithAggregatesInput[]
    OR?: lecturesScalarWhereWithAggregatesInput[]
    NOT?: lecturesScalarWhereWithAggregatesInput | lecturesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"lectures"> | number
    title?: StringWithAggregatesFilter<"lectures"> | string
    category?: StringWithAggregatesFilter<"lectures"> | string
    type?: StringWithAggregatesFilter<"lectures"> | string
  }

  export type scenesWhereInput = {
    AND?: scenesWhereInput | scenesWhereInput[]
    OR?: scenesWhereInput[]
    NOT?: scenesWhereInput | scenesWhereInput[]
    id?: IntFilter<"scenes"> | number
    lecture_id?: IntFilter<"scenes"> | number
    order?: IntFilter<"scenes"> | number
    archived?: BoolFilter<"scenes"> | boolean
    successSceneId?: IntNullableFilter<"scenes"> | number | null
    failureSceneId?: IntNullableFilter<"scenes"> | number | null
    created_at?: DateTimeFilter<"scenes"> | Date | string
    updated_at?: DateTimeFilter<"scenes"> | Date | string
    segments?: SegmentsListRelationFilter
    lectures?: XOR<LecturesRelationFilter, lecturesWhereInput>
  }

  export type scenesOrderByWithRelationInput = {
    id?: SortOrder
    lecture_id?: SortOrder
    order?: SortOrder
    archived?: SortOrder
    successSceneId?: SortOrderInput | SortOrder
    failureSceneId?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    segments?: segmentsOrderByRelationAggregateInput
    lectures?: lecturesOrderByWithRelationInput
  }

  export type scenesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: scenesWhereInput | scenesWhereInput[]
    OR?: scenesWhereInput[]
    NOT?: scenesWhereInput | scenesWhereInput[]
    lecture_id?: IntFilter<"scenes"> | number
    order?: IntFilter<"scenes"> | number
    archived?: BoolFilter<"scenes"> | boolean
    successSceneId?: IntNullableFilter<"scenes"> | number | null
    failureSceneId?: IntNullableFilter<"scenes"> | number | null
    created_at?: DateTimeFilter<"scenes"> | Date | string
    updated_at?: DateTimeFilter<"scenes"> | Date | string
    segments?: SegmentsListRelationFilter
    lectures?: XOR<LecturesRelationFilter, lecturesWhereInput>
  }, "id">

  export type scenesOrderByWithAggregationInput = {
    id?: SortOrder
    lecture_id?: SortOrder
    order?: SortOrder
    archived?: SortOrder
    successSceneId?: SortOrderInput | SortOrder
    failureSceneId?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: scenesCountOrderByAggregateInput
    _avg?: scenesAvgOrderByAggregateInput
    _max?: scenesMaxOrderByAggregateInput
    _min?: scenesMinOrderByAggregateInput
    _sum?: scenesSumOrderByAggregateInput
  }

  export type scenesScalarWhereWithAggregatesInput = {
    AND?: scenesScalarWhereWithAggregatesInput | scenesScalarWhereWithAggregatesInput[]
    OR?: scenesScalarWhereWithAggregatesInput[]
    NOT?: scenesScalarWhereWithAggregatesInput | scenesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"scenes"> | number
    lecture_id?: IntWithAggregatesFilter<"scenes"> | number
    order?: IntWithAggregatesFilter<"scenes"> | number
    archived?: BoolWithAggregatesFilter<"scenes"> | boolean
    successSceneId?: IntNullableWithAggregatesFilter<"scenes"> | number | null
    failureSceneId?: IntNullableWithAggregatesFilter<"scenes"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"scenes"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"scenes"> | Date | string
  }

  export type segmentsWhereInput = {
    AND?: segmentsWhereInput | segmentsWhereInput[]
    OR?: segmentsWhereInput[]
    NOT?: segmentsWhereInput | segmentsWhereInput[]
    id?: IntFilter<"segments"> | number
    scene_id?: IntFilter<"segments"> | number
    video?: StringNullableFilter<"segments"> | string | null
    slide?: JsonFilter<"segments">
    order?: IntFilter<"segments"> | number
    archived?: BoolFilter<"segments"> | boolean
    type?: StringFilter<"segments"> | string
    nextSegmentId?: IntNullableFilter<"segments"> | number | null
    data?: JsonNullableFilter<"segments">
    created_at?: DateTimeFilter<"segments"> | Date | string
    updated_at?: DateTimeFilter<"segments"> | Date | string
    scenes?: XOR<ScenesRelationFilter, scenesWhereInput>
  }

  export type segmentsOrderByWithRelationInput = {
    id?: SortOrder
    scene_id?: SortOrder
    video?: SortOrderInput | SortOrder
    slide?: SortOrder
    order?: SortOrder
    archived?: SortOrder
    type?: SortOrder
    nextSegmentId?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    scenes?: scenesOrderByWithRelationInput
  }

  export type segmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: segmentsWhereInput | segmentsWhereInput[]
    OR?: segmentsWhereInput[]
    NOT?: segmentsWhereInput | segmentsWhereInput[]
    scene_id?: IntFilter<"segments"> | number
    video?: StringNullableFilter<"segments"> | string | null
    slide?: JsonFilter<"segments">
    order?: IntFilter<"segments"> | number
    archived?: BoolFilter<"segments"> | boolean
    type?: StringFilter<"segments"> | string
    nextSegmentId?: IntNullableFilter<"segments"> | number | null
    data?: JsonNullableFilter<"segments">
    created_at?: DateTimeFilter<"segments"> | Date | string
    updated_at?: DateTimeFilter<"segments"> | Date | string
    scenes?: XOR<ScenesRelationFilter, scenesWhereInput>
  }, "id">

  export type segmentsOrderByWithAggregationInput = {
    id?: SortOrder
    scene_id?: SortOrder
    video?: SortOrderInput | SortOrder
    slide?: SortOrder
    order?: SortOrder
    archived?: SortOrder
    type?: SortOrder
    nextSegmentId?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: segmentsCountOrderByAggregateInput
    _avg?: segmentsAvgOrderByAggregateInput
    _max?: segmentsMaxOrderByAggregateInput
    _min?: segmentsMinOrderByAggregateInput
    _sum?: segmentsSumOrderByAggregateInput
  }

  export type segmentsScalarWhereWithAggregatesInput = {
    AND?: segmentsScalarWhereWithAggregatesInput | segmentsScalarWhereWithAggregatesInput[]
    OR?: segmentsScalarWhereWithAggregatesInput[]
    NOT?: segmentsScalarWhereWithAggregatesInput | segmentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"segments"> | number
    scene_id?: IntWithAggregatesFilter<"segments"> | number
    video?: StringNullableWithAggregatesFilter<"segments"> | string | null
    slide?: JsonWithAggregatesFilter<"segments">
    order?: IntWithAggregatesFilter<"segments"> | number
    archived?: BoolWithAggregatesFilter<"segments"> | boolean
    type?: StringWithAggregatesFilter<"segments"> | string
    nextSegmentId?: IntNullableWithAggregatesFilter<"segments"> | number | null
    data?: JsonNullableWithAggregatesFilter<"segments">
    created_at?: DateTimeWithAggregatesFilter<"segments"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"segments"> | Date | string
  }

  export type lecturesCreateInput = {
    title: string
    category: string
    type: string
    scenes?: scenesCreateNestedManyWithoutLecturesInput
  }

  export type lecturesUncheckedCreateInput = {
    id?: number
    title: string
    category: string
    type: string
    scenes?: scenesUncheckedCreateNestedManyWithoutLecturesInput
  }

  export type lecturesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    scenes?: scenesUpdateManyWithoutLecturesNestedInput
  }

  export type lecturesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    scenes?: scenesUncheckedUpdateManyWithoutLecturesNestedInput
  }

  export type lecturesCreateManyInput = {
    id?: number
    title: string
    category: string
    type: string
  }

  export type lecturesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type lecturesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type scenesCreateInput = {
    order: number
    archived?: boolean
    successSceneId?: number | null
    failureSceneId?: number | null
    created_at: Date | string
    updated_at: Date | string
    segments?: segmentsCreateNestedManyWithoutScenesInput
    lectures: lecturesCreateNestedOneWithoutScenesInput
  }

  export type scenesUncheckedCreateInput = {
    id?: number
    lecture_id: number
    order: number
    archived?: boolean
    successSceneId?: number | null
    failureSceneId?: number | null
    created_at: Date | string
    updated_at: Date | string
    segments?: segmentsUncheckedCreateNestedManyWithoutScenesInput
  }

  export type scenesUpdateInput = {
    order?: IntFieldUpdateOperationsInput | number
    archived?: BoolFieldUpdateOperationsInput | boolean
    successSceneId?: NullableIntFieldUpdateOperationsInput | number | null
    failureSceneId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    segments?: segmentsUpdateManyWithoutScenesNestedInput
    lectures?: lecturesUpdateOneRequiredWithoutScenesNestedInput
  }

  export type scenesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    lecture_id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    archived?: BoolFieldUpdateOperationsInput | boolean
    successSceneId?: NullableIntFieldUpdateOperationsInput | number | null
    failureSceneId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    segments?: segmentsUncheckedUpdateManyWithoutScenesNestedInput
  }

  export type scenesCreateManyInput = {
    id?: number
    lecture_id: number
    order: number
    archived?: boolean
    successSceneId?: number | null
    failureSceneId?: number | null
    created_at: Date | string
    updated_at: Date | string
  }

  export type scenesUpdateManyMutationInput = {
    order?: IntFieldUpdateOperationsInput | number
    archived?: BoolFieldUpdateOperationsInput | boolean
    successSceneId?: NullableIntFieldUpdateOperationsInput | number | null
    failureSceneId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type scenesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    lecture_id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    archived?: BoolFieldUpdateOperationsInput | boolean
    successSceneId?: NullableIntFieldUpdateOperationsInput | number | null
    failureSceneId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type segmentsCreateInput = {
    video?: string | null
    slide: JsonNullValueInput | InputJsonValue
    order: number
    archived?: boolean
    type: string
    nextSegmentId?: number | null
    data?: NullableJsonNullValueInput | InputJsonValue
    created_at: Date | string
    updated_at: Date | string
    scenes: scenesCreateNestedOneWithoutSegmentsInput
  }

  export type segmentsUncheckedCreateInput = {
    id?: number
    scene_id: number
    video?: string | null
    slide: JsonNullValueInput | InputJsonValue
    order: number
    archived?: boolean
    type: string
    nextSegmentId?: number | null
    data?: NullableJsonNullValueInput | InputJsonValue
    created_at: Date | string
    updated_at: Date | string
  }

  export type segmentsUpdateInput = {
    video?: NullableStringFieldUpdateOperationsInput | string | null
    slide?: JsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    archived?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    nextSegmentId?: NullableIntFieldUpdateOperationsInput | number | null
    data?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    scenes?: scenesUpdateOneRequiredWithoutSegmentsNestedInput
  }

  export type segmentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    scene_id?: IntFieldUpdateOperationsInput | number
    video?: NullableStringFieldUpdateOperationsInput | string | null
    slide?: JsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    archived?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    nextSegmentId?: NullableIntFieldUpdateOperationsInput | number | null
    data?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type segmentsCreateManyInput = {
    id?: number
    scene_id: number
    video?: string | null
    slide: JsonNullValueInput | InputJsonValue
    order: number
    archived?: boolean
    type: string
    nextSegmentId?: number | null
    data?: NullableJsonNullValueInput | InputJsonValue
    created_at: Date | string
    updated_at: Date | string
  }

  export type segmentsUpdateManyMutationInput = {
    video?: NullableStringFieldUpdateOperationsInput | string | null
    slide?: JsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    archived?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    nextSegmentId?: NullableIntFieldUpdateOperationsInput | number | null
    data?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type segmentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    scene_id?: IntFieldUpdateOperationsInput | number
    video?: NullableStringFieldUpdateOperationsInput | string | null
    slide?: JsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    archived?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    nextSegmentId?: NullableIntFieldUpdateOperationsInput | number | null
    data?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ScenesListRelationFilter = {
    every?: scenesWhereInput
    some?: scenesWhereInput
    none?: scenesWhereInput
  }

  export type scenesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type lecturesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    type?: SortOrder
  }

  export type lecturesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type lecturesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    type?: SortOrder
  }

  export type lecturesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    type?: SortOrder
  }

  export type lecturesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SegmentsListRelationFilter = {
    every?: segmentsWhereInput
    some?: segmentsWhereInput
    none?: segmentsWhereInput
  }

  export type LecturesRelationFilter = {
    is?: lecturesWhereInput
    isNot?: lecturesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type segmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type scenesCountOrderByAggregateInput = {
    id?: SortOrder
    lecture_id?: SortOrder
    order?: SortOrder
    archived?: SortOrder
    successSceneId?: SortOrder
    failureSceneId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type scenesAvgOrderByAggregateInput = {
    id?: SortOrder
    lecture_id?: SortOrder
    order?: SortOrder
    successSceneId?: SortOrder
    failureSceneId?: SortOrder
  }

  export type scenesMaxOrderByAggregateInput = {
    id?: SortOrder
    lecture_id?: SortOrder
    order?: SortOrder
    archived?: SortOrder
    successSceneId?: SortOrder
    failureSceneId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type scenesMinOrderByAggregateInput = {
    id?: SortOrder
    lecture_id?: SortOrder
    order?: SortOrder
    archived?: SortOrder
    successSceneId?: SortOrder
    failureSceneId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type scenesSumOrderByAggregateInput = {
    id?: SortOrder
    lecture_id?: SortOrder
    order?: SortOrder
    successSceneId?: SortOrder
    failureSceneId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ScenesRelationFilter = {
    is?: scenesWhereInput
    isNot?: scenesWhereInput
  }

  export type segmentsCountOrderByAggregateInput = {
    id?: SortOrder
    scene_id?: SortOrder
    video?: SortOrder
    slide?: SortOrder
    order?: SortOrder
    archived?: SortOrder
    type?: SortOrder
    nextSegmentId?: SortOrder
    data?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type segmentsAvgOrderByAggregateInput = {
    id?: SortOrder
    scene_id?: SortOrder
    order?: SortOrder
    nextSegmentId?: SortOrder
  }

  export type segmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    scene_id?: SortOrder
    video?: SortOrder
    order?: SortOrder
    archived?: SortOrder
    type?: SortOrder
    nextSegmentId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type segmentsMinOrderByAggregateInput = {
    id?: SortOrder
    scene_id?: SortOrder
    video?: SortOrder
    order?: SortOrder
    archived?: SortOrder
    type?: SortOrder
    nextSegmentId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type segmentsSumOrderByAggregateInput = {
    id?: SortOrder
    scene_id?: SortOrder
    order?: SortOrder
    nextSegmentId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type scenesCreateNestedManyWithoutLecturesInput = {
    create?: XOR<scenesCreateWithoutLecturesInput, scenesUncheckedCreateWithoutLecturesInput> | scenesCreateWithoutLecturesInput[] | scenesUncheckedCreateWithoutLecturesInput[]
    connectOrCreate?: scenesCreateOrConnectWithoutLecturesInput | scenesCreateOrConnectWithoutLecturesInput[]
    createMany?: scenesCreateManyLecturesInputEnvelope
    connect?: scenesWhereUniqueInput | scenesWhereUniqueInput[]
  }

  export type scenesUncheckedCreateNestedManyWithoutLecturesInput = {
    create?: XOR<scenesCreateWithoutLecturesInput, scenesUncheckedCreateWithoutLecturesInput> | scenesCreateWithoutLecturesInput[] | scenesUncheckedCreateWithoutLecturesInput[]
    connectOrCreate?: scenesCreateOrConnectWithoutLecturesInput | scenesCreateOrConnectWithoutLecturesInput[]
    createMany?: scenesCreateManyLecturesInputEnvelope
    connect?: scenesWhereUniqueInput | scenesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type scenesUpdateManyWithoutLecturesNestedInput = {
    create?: XOR<scenesCreateWithoutLecturesInput, scenesUncheckedCreateWithoutLecturesInput> | scenesCreateWithoutLecturesInput[] | scenesUncheckedCreateWithoutLecturesInput[]
    connectOrCreate?: scenesCreateOrConnectWithoutLecturesInput | scenesCreateOrConnectWithoutLecturesInput[]
    upsert?: scenesUpsertWithWhereUniqueWithoutLecturesInput | scenesUpsertWithWhereUniqueWithoutLecturesInput[]
    createMany?: scenesCreateManyLecturesInputEnvelope
    set?: scenesWhereUniqueInput | scenesWhereUniqueInput[]
    disconnect?: scenesWhereUniqueInput | scenesWhereUniqueInput[]
    delete?: scenesWhereUniqueInput | scenesWhereUniqueInput[]
    connect?: scenesWhereUniqueInput | scenesWhereUniqueInput[]
    update?: scenesUpdateWithWhereUniqueWithoutLecturesInput | scenesUpdateWithWhereUniqueWithoutLecturesInput[]
    updateMany?: scenesUpdateManyWithWhereWithoutLecturesInput | scenesUpdateManyWithWhereWithoutLecturesInput[]
    deleteMany?: scenesScalarWhereInput | scenesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type scenesUncheckedUpdateManyWithoutLecturesNestedInput = {
    create?: XOR<scenesCreateWithoutLecturesInput, scenesUncheckedCreateWithoutLecturesInput> | scenesCreateWithoutLecturesInput[] | scenesUncheckedCreateWithoutLecturesInput[]
    connectOrCreate?: scenesCreateOrConnectWithoutLecturesInput | scenesCreateOrConnectWithoutLecturesInput[]
    upsert?: scenesUpsertWithWhereUniqueWithoutLecturesInput | scenesUpsertWithWhereUniqueWithoutLecturesInput[]
    createMany?: scenesCreateManyLecturesInputEnvelope
    set?: scenesWhereUniqueInput | scenesWhereUniqueInput[]
    disconnect?: scenesWhereUniqueInput | scenesWhereUniqueInput[]
    delete?: scenesWhereUniqueInput | scenesWhereUniqueInput[]
    connect?: scenesWhereUniqueInput | scenesWhereUniqueInput[]
    update?: scenesUpdateWithWhereUniqueWithoutLecturesInput | scenesUpdateWithWhereUniqueWithoutLecturesInput[]
    updateMany?: scenesUpdateManyWithWhereWithoutLecturesInput | scenesUpdateManyWithWhereWithoutLecturesInput[]
    deleteMany?: scenesScalarWhereInput | scenesScalarWhereInput[]
  }

  export type segmentsCreateNestedManyWithoutScenesInput = {
    create?: XOR<segmentsCreateWithoutScenesInput, segmentsUncheckedCreateWithoutScenesInput> | segmentsCreateWithoutScenesInput[] | segmentsUncheckedCreateWithoutScenesInput[]
    connectOrCreate?: segmentsCreateOrConnectWithoutScenesInput | segmentsCreateOrConnectWithoutScenesInput[]
    createMany?: segmentsCreateManyScenesInputEnvelope
    connect?: segmentsWhereUniqueInput | segmentsWhereUniqueInput[]
  }

  export type lecturesCreateNestedOneWithoutScenesInput = {
    create?: XOR<lecturesCreateWithoutScenesInput, lecturesUncheckedCreateWithoutScenesInput>
    connectOrCreate?: lecturesCreateOrConnectWithoutScenesInput
    connect?: lecturesWhereUniqueInput
  }

  export type segmentsUncheckedCreateNestedManyWithoutScenesInput = {
    create?: XOR<segmentsCreateWithoutScenesInput, segmentsUncheckedCreateWithoutScenesInput> | segmentsCreateWithoutScenesInput[] | segmentsUncheckedCreateWithoutScenesInput[]
    connectOrCreate?: segmentsCreateOrConnectWithoutScenesInput | segmentsCreateOrConnectWithoutScenesInput[]
    createMany?: segmentsCreateManyScenesInputEnvelope
    connect?: segmentsWhereUniqueInput | segmentsWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type segmentsUpdateManyWithoutScenesNestedInput = {
    create?: XOR<segmentsCreateWithoutScenesInput, segmentsUncheckedCreateWithoutScenesInput> | segmentsCreateWithoutScenesInput[] | segmentsUncheckedCreateWithoutScenesInput[]
    connectOrCreate?: segmentsCreateOrConnectWithoutScenesInput | segmentsCreateOrConnectWithoutScenesInput[]
    upsert?: segmentsUpsertWithWhereUniqueWithoutScenesInput | segmentsUpsertWithWhereUniqueWithoutScenesInput[]
    createMany?: segmentsCreateManyScenesInputEnvelope
    set?: segmentsWhereUniqueInput | segmentsWhereUniqueInput[]
    disconnect?: segmentsWhereUniqueInput | segmentsWhereUniqueInput[]
    delete?: segmentsWhereUniqueInput | segmentsWhereUniqueInput[]
    connect?: segmentsWhereUniqueInput | segmentsWhereUniqueInput[]
    update?: segmentsUpdateWithWhereUniqueWithoutScenesInput | segmentsUpdateWithWhereUniqueWithoutScenesInput[]
    updateMany?: segmentsUpdateManyWithWhereWithoutScenesInput | segmentsUpdateManyWithWhereWithoutScenesInput[]
    deleteMany?: segmentsScalarWhereInput | segmentsScalarWhereInput[]
  }

  export type lecturesUpdateOneRequiredWithoutScenesNestedInput = {
    create?: XOR<lecturesCreateWithoutScenesInput, lecturesUncheckedCreateWithoutScenesInput>
    connectOrCreate?: lecturesCreateOrConnectWithoutScenesInput
    upsert?: lecturesUpsertWithoutScenesInput
    connect?: lecturesWhereUniqueInput
    update?: XOR<XOR<lecturesUpdateToOneWithWhereWithoutScenesInput, lecturesUpdateWithoutScenesInput>, lecturesUncheckedUpdateWithoutScenesInput>
  }

  export type segmentsUncheckedUpdateManyWithoutScenesNestedInput = {
    create?: XOR<segmentsCreateWithoutScenesInput, segmentsUncheckedCreateWithoutScenesInput> | segmentsCreateWithoutScenesInput[] | segmentsUncheckedCreateWithoutScenesInput[]
    connectOrCreate?: segmentsCreateOrConnectWithoutScenesInput | segmentsCreateOrConnectWithoutScenesInput[]
    upsert?: segmentsUpsertWithWhereUniqueWithoutScenesInput | segmentsUpsertWithWhereUniqueWithoutScenesInput[]
    createMany?: segmentsCreateManyScenesInputEnvelope
    set?: segmentsWhereUniqueInput | segmentsWhereUniqueInput[]
    disconnect?: segmentsWhereUniqueInput | segmentsWhereUniqueInput[]
    delete?: segmentsWhereUniqueInput | segmentsWhereUniqueInput[]
    connect?: segmentsWhereUniqueInput | segmentsWhereUniqueInput[]
    update?: segmentsUpdateWithWhereUniqueWithoutScenesInput | segmentsUpdateWithWhereUniqueWithoutScenesInput[]
    updateMany?: segmentsUpdateManyWithWhereWithoutScenesInput | segmentsUpdateManyWithWhereWithoutScenesInput[]
    deleteMany?: segmentsScalarWhereInput | segmentsScalarWhereInput[]
  }

  export type scenesCreateNestedOneWithoutSegmentsInput = {
    create?: XOR<scenesCreateWithoutSegmentsInput, scenesUncheckedCreateWithoutSegmentsInput>
    connectOrCreate?: scenesCreateOrConnectWithoutSegmentsInput
    connect?: scenesWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type scenesUpdateOneRequiredWithoutSegmentsNestedInput = {
    create?: XOR<scenesCreateWithoutSegmentsInput, scenesUncheckedCreateWithoutSegmentsInput>
    connectOrCreate?: scenesCreateOrConnectWithoutSegmentsInput
    upsert?: scenesUpsertWithoutSegmentsInput
    connect?: scenesWhereUniqueInput
    update?: XOR<XOR<scenesUpdateToOneWithWhereWithoutSegmentsInput, scenesUpdateWithoutSegmentsInput>, scenesUncheckedUpdateWithoutSegmentsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type scenesCreateWithoutLecturesInput = {
    order: number
    archived?: boolean
    successSceneId?: number | null
    failureSceneId?: number | null
    created_at: Date | string
    updated_at: Date | string
    segments?: segmentsCreateNestedManyWithoutScenesInput
  }

  export type scenesUncheckedCreateWithoutLecturesInput = {
    id?: number
    order: number
    archived?: boolean
    successSceneId?: number | null
    failureSceneId?: number | null
    created_at: Date | string
    updated_at: Date | string
    segments?: segmentsUncheckedCreateNestedManyWithoutScenesInput
  }

  export type scenesCreateOrConnectWithoutLecturesInput = {
    where: scenesWhereUniqueInput
    create: XOR<scenesCreateWithoutLecturesInput, scenesUncheckedCreateWithoutLecturesInput>
  }

  export type scenesCreateManyLecturesInputEnvelope = {
    data: scenesCreateManyLecturesInput | scenesCreateManyLecturesInput[]
    skipDuplicates?: boolean
  }

  export type scenesUpsertWithWhereUniqueWithoutLecturesInput = {
    where: scenesWhereUniqueInput
    update: XOR<scenesUpdateWithoutLecturesInput, scenesUncheckedUpdateWithoutLecturesInput>
    create: XOR<scenesCreateWithoutLecturesInput, scenesUncheckedCreateWithoutLecturesInput>
  }

  export type scenesUpdateWithWhereUniqueWithoutLecturesInput = {
    where: scenesWhereUniqueInput
    data: XOR<scenesUpdateWithoutLecturesInput, scenesUncheckedUpdateWithoutLecturesInput>
  }

  export type scenesUpdateManyWithWhereWithoutLecturesInput = {
    where: scenesScalarWhereInput
    data: XOR<scenesUpdateManyMutationInput, scenesUncheckedUpdateManyWithoutLecturesInput>
  }

  export type scenesScalarWhereInput = {
    AND?: scenesScalarWhereInput | scenesScalarWhereInput[]
    OR?: scenesScalarWhereInput[]
    NOT?: scenesScalarWhereInput | scenesScalarWhereInput[]
    id?: IntFilter<"scenes"> | number
    lecture_id?: IntFilter<"scenes"> | number
    order?: IntFilter<"scenes"> | number
    archived?: BoolFilter<"scenes"> | boolean
    successSceneId?: IntNullableFilter<"scenes"> | number | null
    failureSceneId?: IntNullableFilter<"scenes"> | number | null
    created_at?: DateTimeFilter<"scenes"> | Date | string
    updated_at?: DateTimeFilter<"scenes"> | Date | string
  }

  export type segmentsCreateWithoutScenesInput = {
    video?: string | null
    slide: JsonNullValueInput | InputJsonValue
    order: number
    archived?: boolean
    type: string
    nextSegmentId?: number | null
    data?: NullableJsonNullValueInput | InputJsonValue
    created_at: Date | string
    updated_at: Date | string
  }

  export type segmentsUncheckedCreateWithoutScenesInput = {
    id?: number
    video?: string | null
    slide: JsonNullValueInput | InputJsonValue
    order: number
    archived?: boolean
    type: string
    nextSegmentId?: number | null
    data?: NullableJsonNullValueInput | InputJsonValue
    created_at: Date | string
    updated_at: Date | string
  }

  export type segmentsCreateOrConnectWithoutScenesInput = {
    where: segmentsWhereUniqueInput
    create: XOR<segmentsCreateWithoutScenesInput, segmentsUncheckedCreateWithoutScenesInput>
  }

  export type segmentsCreateManyScenesInputEnvelope = {
    data: segmentsCreateManyScenesInput | segmentsCreateManyScenesInput[]
    skipDuplicates?: boolean
  }

  export type lecturesCreateWithoutScenesInput = {
    title: string
    category: string
    type: string
  }

  export type lecturesUncheckedCreateWithoutScenesInput = {
    id?: number
    title: string
    category: string
    type: string
  }

  export type lecturesCreateOrConnectWithoutScenesInput = {
    where: lecturesWhereUniqueInput
    create: XOR<lecturesCreateWithoutScenesInput, lecturesUncheckedCreateWithoutScenesInput>
  }

  export type segmentsUpsertWithWhereUniqueWithoutScenesInput = {
    where: segmentsWhereUniqueInput
    update: XOR<segmentsUpdateWithoutScenesInput, segmentsUncheckedUpdateWithoutScenesInput>
    create: XOR<segmentsCreateWithoutScenesInput, segmentsUncheckedCreateWithoutScenesInput>
  }

  export type segmentsUpdateWithWhereUniqueWithoutScenesInput = {
    where: segmentsWhereUniqueInput
    data: XOR<segmentsUpdateWithoutScenesInput, segmentsUncheckedUpdateWithoutScenesInput>
  }

  export type segmentsUpdateManyWithWhereWithoutScenesInput = {
    where: segmentsScalarWhereInput
    data: XOR<segmentsUpdateManyMutationInput, segmentsUncheckedUpdateManyWithoutScenesInput>
  }

  export type segmentsScalarWhereInput = {
    AND?: segmentsScalarWhereInput | segmentsScalarWhereInput[]
    OR?: segmentsScalarWhereInput[]
    NOT?: segmentsScalarWhereInput | segmentsScalarWhereInput[]
    id?: IntFilter<"segments"> | number
    scene_id?: IntFilter<"segments"> | number
    video?: StringNullableFilter<"segments"> | string | null
    slide?: JsonFilter<"segments">
    order?: IntFilter<"segments"> | number
    archived?: BoolFilter<"segments"> | boolean
    type?: StringFilter<"segments"> | string
    nextSegmentId?: IntNullableFilter<"segments"> | number | null
    data?: JsonNullableFilter<"segments">
    created_at?: DateTimeFilter<"segments"> | Date | string
    updated_at?: DateTimeFilter<"segments"> | Date | string
  }

  export type lecturesUpsertWithoutScenesInput = {
    update: XOR<lecturesUpdateWithoutScenesInput, lecturesUncheckedUpdateWithoutScenesInput>
    create: XOR<lecturesCreateWithoutScenesInput, lecturesUncheckedCreateWithoutScenesInput>
    where?: lecturesWhereInput
  }

  export type lecturesUpdateToOneWithWhereWithoutScenesInput = {
    where?: lecturesWhereInput
    data: XOR<lecturesUpdateWithoutScenesInput, lecturesUncheckedUpdateWithoutScenesInput>
  }

  export type lecturesUpdateWithoutScenesInput = {
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type lecturesUncheckedUpdateWithoutScenesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type scenesCreateWithoutSegmentsInput = {
    order: number
    archived?: boolean
    successSceneId?: number | null
    failureSceneId?: number | null
    created_at: Date | string
    updated_at: Date | string
    lectures: lecturesCreateNestedOneWithoutScenesInput
  }

  export type scenesUncheckedCreateWithoutSegmentsInput = {
    id?: number
    lecture_id: number
    order: number
    archived?: boolean
    successSceneId?: number | null
    failureSceneId?: number | null
    created_at: Date | string
    updated_at: Date | string
  }

  export type scenesCreateOrConnectWithoutSegmentsInput = {
    where: scenesWhereUniqueInput
    create: XOR<scenesCreateWithoutSegmentsInput, scenesUncheckedCreateWithoutSegmentsInput>
  }

  export type scenesUpsertWithoutSegmentsInput = {
    update: XOR<scenesUpdateWithoutSegmentsInput, scenesUncheckedUpdateWithoutSegmentsInput>
    create: XOR<scenesCreateWithoutSegmentsInput, scenesUncheckedCreateWithoutSegmentsInput>
    where?: scenesWhereInput
  }

  export type scenesUpdateToOneWithWhereWithoutSegmentsInput = {
    where?: scenesWhereInput
    data: XOR<scenesUpdateWithoutSegmentsInput, scenesUncheckedUpdateWithoutSegmentsInput>
  }

  export type scenesUpdateWithoutSegmentsInput = {
    order?: IntFieldUpdateOperationsInput | number
    archived?: BoolFieldUpdateOperationsInput | boolean
    successSceneId?: NullableIntFieldUpdateOperationsInput | number | null
    failureSceneId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lectures?: lecturesUpdateOneRequiredWithoutScenesNestedInput
  }

  export type scenesUncheckedUpdateWithoutSegmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    lecture_id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    archived?: BoolFieldUpdateOperationsInput | boolean
    successSceneId?: NullableIntFieldUpdateOperationsInput | number | null
    failureSceneId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type scenesCreateManyLecturesInput = {
    id?: number
    order: number
    archived?: boolean
    successSceneId?: number | null
    failureSceneId?: number | null
    created_at: Date | string
    updated_at: Date | string
  }

  export type scenesUpdateWithoutLecturesInput = {
    order?: IntFieldUpdateOperationsInput | number
    archived?: BoolFieldUpdateOperationsInput | boolean
    successSceneId?: NullableIntFieldUpdateOperationsInput | number | null
    failureSceneId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    segments?: segmentsUpdateManyWithoutScenesNestedInput
  }

  export type scenesUncheckedUpdateWithoutLecturesInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    archived?: BoolFieldUpdateOperationsInput | boolean
    successSceneId?: NullableIntFieldUpdateOperationsInput | number | null
    failureSceneId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    segments?: segmentsUncheckedUpdateManyWithoutScenesNestedInput
  }

  export type scenesUncheckedUpdateManyWithoutLecturesInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    archived?: BoolFieldUpdateOperationsInput | boolean
    successSceneId?: NullableIntFieldUpdateOperationsInput | number | null
    failureSceneId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type segmentsCreateManyScenesInput = {
    id?: number
    video?: string | null
    slide: JsonNullValueInput | InputJsonValue
    order: number
    archived?: boolean
    type: string
    nextSegmentId?: number | null
    data?: NullableJsonNullValueInput | InputJsonValue
    created_at: Date | string
    updated_at: Date | string
  }

  export type segmentsUpdateWithoutScenesInput = {
    video?: NullableStringFieldUpdateOperationsInput | string | null
    slide?: JsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    archived?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    nextSegmentId?: NullableIntFieldUpdateOperationsInput | number | null
    data?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type segmentsUncheckedUpdateWithoutScenesInput = {
    id?: IntFieldUpdateOperationsInput | number
    video?: NullableStringFieldUpdateOperationsInput | string | null
    slide?: JsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    archived?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    nextSegmentId?: NullableIntFieldUpdateOperationsInput | number | null
    data?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type segmentsUncheckedUpdateManyWithoutScenesInput = {
    id?: IntFieldUpdateOperationsInput | number
    video?: NullableStringFieldUpdateOperationsInput | string | null
    slide?: JsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    archived?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    nextSegmentId?: NullableIntFieldUpdateOperationsInput | number | null
    data?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use LecturesCountOutputTypeDefaultArgs instead
     */
    export type LecturesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LecturesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ScenesCountOutputTypeDefaultArgs instead
     */
    export type ScenesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ScenesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use lecturesDefaultArgs instead
     */
    export type lecturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = lecturesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use scenesDefaultArgs instead
     */
    export type scenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = scenesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use segmentsDefaultArgs instead
     */
    export type segmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = segmentsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}