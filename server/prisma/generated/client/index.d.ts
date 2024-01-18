
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
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model user_scenes
 * 
 */
export type user_scenes = $Result.DefaultSelection<Prisma.$user_scenesPayload>
/**
 * Model user_segments
 * 
 */
export type user_segments = $Result.DefaultSelection<Prisma.$user_segmentsPayload>

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

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;

  /**
   * `prisma.user_scenes`: Exposes CRUD operations for the **user_scenes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_scenes
    * const user_scenes = await prisma.user_scenes.findMany()
    * ```
    */
  get user_scenes(): Prisma.user_scenesDelegate<ExtArgs>;

  /**
   * `prisma.user_segments`: Exposes CRUD operations for the **user_segments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_segments
    * const user_segments = await prisma.user_segments.findMany()
    * ```
    */
  get user_segments(): Prisma.user_segmentsDelegate<ExtArgs>;
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
    segments: 'segments',
    users: 'users',
    user_scenes: 'user_scenes',
    user_segments: 'user_segments'
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
      modelProps: 'lectures' | 'scenes' | 'segments' | 'users' | 'user_scenes' | 'user_segments'
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
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      user_scenes: {
        payload: Prisma.$user_scenesPayload<ExtArgs>
        fields: Prisma.user_scenesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_scenesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_scenesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_scenesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_scenesPayload>
          }
          findFirst: {
            args: Prisma.user_scenesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_scenesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_scenesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_scenesPayload>
          }
          findMany: {
            args: Prisma.user_scenesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_scenesPayload>[]
          }
          create: {
            args: Prisma.user_scenesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_scenesPayload>
          }
          createMany: {
            args: Prisma.user_scenesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.user_scenesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_scenesPayload>
          }
          update: {
            args: Prisma.user_scenesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_scenesPayload>
          }
          deleteMany: {
            args: Prisma.user_scenesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.user_scenesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.user_scenesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_scenesPayload>
          }
          aggregate: {
            args: Prisma.User_scenesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser_scenes>
          }
          groupBy: {
            args: Prisma.user_scenesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<User_scenesGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_scenesCountArgs<ExtArgs>,
            result: $Utils.Optional<User_scenesCountAggregateOutputType> | number
          }
        }
      }
      user_segments: {
        payload: Prisma.$user_segmentsPayload<ExtArgs>
        fields: Prisma.user_segmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_segmentsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_segmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_segmentsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_segmentsPayload>
          }
          findFirst: {
            args: Prisma.user_segmentsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_segmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_segmentsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_segmentsPayload>
          }
          findMany: {
            args: Prisma.user_segmentsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_segmentsPayload>[]
          }
          create: {
            args: Prisma.user_segmentsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_segmentsPayload>
          }
          createMany: {
            args: Prisma.user_segmentsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.user_segmentsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_segmentsPayload>
          }
          update: {
            args: Prisma.user_segmentsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_segmentsPayload>
          }
          deleteMany: {
            args: Prisma.user_segmentsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.user_segmentsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.user_segmentsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_segmentsPayload>
          }
          aggregate: {
            args: Prisma.User_segmentsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser_segments>
          }
          groupBy: {
            args: Prisma.user_segmentsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<User_segmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_segmentsCountArgs<ExtArgs>,
            result: $Utils.Optional<User_segmentsCountAggregateOutputType> | number
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
    user_scenes: number
  }

  export type ScenesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    segments?: boolean | ScenesCountOutputTypeCountSegmentsArgs
    user_scenes?: boolean | ScenesCountOutputTypeCountUser_scenesArgs
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
   * ScenesCountOutputType without action
   */
  export type ScenesCountOutputTypeCountUser_scenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_scenesWhereInput
  }



  /**
   * Count Type SegmentsCountOutputType
   */

  export type SegmentsCountOutputType = {
    user_segments: number
  }

  export type SegmentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_segments?: boolean | SegmentsCountOutputTypeCountUser_segmentsArgs
  }

  // Custom InputTypes

  /**
   * SegmentsCountOutputType without action
   */
  export type SegmentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SegmentsCountOutputType
     */
    select?: SegmentsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SegmentsCountOutputType without action
   */
  export type SegmentsCountOutputTypeCountUser_segmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_segmentsWhereInput
  }



  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    user_scenes: number
    user_segments: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_scenes?: boolean | UsersCountOutputTypeCountUser_scenesArgs
    user_segments?: boolean | UsersCountOutputTypeCountUser_segmentsArgs
  }

  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_scenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_scenesWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_segmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_segmentsWhereInput
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
    user_scenes?: boolean | scenes$user_scenesArgs<ExtArgs>
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
    user_scenes?: boolean | scenes$user_scenesArgs<ExtArgs>
    lectures?: boolean | lecturesDefaultArgs<ExtArgs>
    _count?: boolean | ScenesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $scenesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "scenes"
    objects: {
      segments: Prisma.$segmentsPayload<ExtArgs>[]
      user_scenes: Prisma.$user_scenesPayload<ExtArgs>[]
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

    user_scenes<T extends scenes$user_scenesArgs<ExtArgs> = {}>(args?: Subset<T, scenes$user_scenesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_scenesPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * scenes.user_scenes
   */
  export type scenes$user_scenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_scenes
     */
    select?: user_scenesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_scenesInclude<ExtArgs> | null
    where?: user_scenesWhereInput
    orderBy?: user_scenesOrderByWithRelationInput | user_scenesOrderByWithRelationInput[]
    cursor?: user_scenesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_scenesScalarFieldEnum | User_scenesScalarFieldEnum[]
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
    user_segments?: boolean | segments$user_segmentsArgs<ExtArgs>
    scenes?: boolean | scenesDefaultArgs<ExtArgs>
    _count?: boolean | SegmentsCountOutputTypeDefaultArgs<ExtArgs>
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
    user_segments?: boolean | segments$user_segmentsArgs<ExtArgs>
    scenes?: boolean | scenesDefaultArgs<ExtArgs>
    _count?: boolean | SegmentsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $segmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "segments"
    objects: {
      user_segments: Prisma.$user_segmentsPayload<ExtArgs>[]
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

    user_segments<T extends segments$user_segmentsArgs<ExtArgs> = {}>(args?: Subset<T, segments$user_segmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_segmentsPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * segments.user_segments
   */
  export type segments$user_segmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_segments
     */
    select?: user_segmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_segmentsInclude<ExtArgs> | null
    where?: user_segmentsWhereInput
    orderBy?: user_segmentsOrderByWithRelationInput | user_segmentsOrderByWithRelationInput[]
    cursor?: user_segmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_segmentsScalarFieldEnum | User_segmentsScalarFieldEnum[]
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
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    created_at: Date | null
    updated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_scenes?: boolean | users$user_scenesArgs<ExtArgs>
    user_segments?: boolean | users$user_segmentsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_scenes?: boolean | users$user_scenesArgs<ExtArgs>
    user_segments?: boolean | users$user_segmentsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      user_scenes: Prisma.$user_scenesPayload<ExtArgs>[]
      user_segments: Prisma.$user_segmentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usersCreateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usersDeleteArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpsertArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user_scenes<T extends users$user_scenesArgs<ExtArgs> = {}>(args?: Subset<T, users$user_scenesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_scenesPayload<ExtArgs>, T, 'findMany'> | Null>;

    user_segments<T extends users$user_segmentsArgs<ExtArgs> = {}>(args?: Subset<T, users$user_segmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_segmentsPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }


  /**
   * users.user_scenes
   */
  export type users$user_scenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_scenes
     */
    select?: user_scenesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_scenesInclude<ExtArgs> | null
    where?: user_scenesWhereInput
    orderBy?: user_scenesOrderByWithRelationInput | user_scenesOrderByWithRelationInput[]
    cursor?: user_scenesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_scenesScalarFieldEnum | User_scenesScalarFieldEnum[]
  }


  /**
   * users.user_segments
   */
  export type users$user_segmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_segments
     */
    select?: user_segmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_segmentsInclude<ExtArgs> | null
    where?: user_segmentsWhereInput
    orderBy?: user_segmentsOrderByWithRelationInput | user_segmentsOrderByWithRelationInput[]
    cursor?: user_segmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_segmentsScalarFieldEnum | User_segmentsScalarFieldEnum[]
  }


  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
  }



  /**
   * Model user_scenes
   */

  export type AggregateUser_scenes = {
    _count: User_scenesCountAggregateOutputType | null
    _avg: User_scenesAvgAggregateOutputType | null
    _sum: User_scenesSumAggregateOutputType | null
    _min: User_scenesMinAggregateOutputType | null
    _max: User_scenesMaxAggregateOutputType | null
  }

  export type User_scenesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    scene_id: number | null
  }

  export type User_scenesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    scene_id: number | null
  }

  export type User_scenesMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    scene_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_scenesMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    scene_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_scenesCountAggregateOutputType = {
    id: number
    user_id: number
    scene_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type User_scenesAvgAggregateInputType = {
    id?: true
    user_id?: true
    scene_id?: true
  }

  export type User_scenesSumAggregateInputType = {
    id?: true
    user_id?: true
    scene_id?: true
  }

  export type User_scenesMinAggregateInputType = {
    id?: true
    user_id?: true
    scene_id?: true
    created_at?: true
    updated_at?: true
  }

  export type User_scenesMaxAggregateInputType = {
    id?: true
    user_id?: true
    scene_id?: true
    created_at?: true
    updated_at?: true
  }

  export type User_scenesCountAggregateInputType = {
    id?: true
    user_id?: true
    scene_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type User_scenesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_scenes to aggregate.
     */
    where?: user_scenesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_scenes to fetch.
     */
    orderBy?: user_scenesOrderByWithRelationInput | user_scenesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_scenesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_scenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_scenes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_scenes
    **/
    _count?: true | User_scenesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_scenesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_scenesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_scenesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_scenesMaxAggregateInputType
  }

  export type GetUser_scenesAggregateType<T extends User_scenesAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_scenes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_scenes[P]>
      : GetScalarType<T[P], AggregateUser_scenes[P]>
  }




  export type user_scenesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_scenesWhereInput
    orderBy?: user_scenesOrderByWithAggregationInput | user_scenesOrderByWithAggregationInput[]
    by: User_scenesScalarFieldEnum[] | User_scenesScalarFieldEnum
    having?: user_scenesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_scenesCountAggregateInputType | true
    _avg?: User_scenesAvgAggregateInputType
    _sum?: User_scenesSumAggregateInputType
    _min?: User_scenesMinAggregateInputType
    _max?: User_scenesMaxAggregateInputType
  }

  export type User_scenesGroupByOutputType = {
    id: number
    user_id: number
    scene_id: number
    created_at: Date
    updated_at: Date
    _count: User_scenesCountAggregateOutputType | null
    _avg: User_scenesAvgAggregateOutputType | null
    _sum: User_scenesSumAggregateOutputType | null
    _min: User_scenesMinAggregateOutputType | null
    _max: User_scenesMaxAggregateOutputType | null
  }

  type GetUser_scenesGroupByPayload<T extends user_scenesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_scenesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_scenesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_scenesGroupByOutputType[P]>
            : GetScalarType<T[P], User_scenesGroupByOutputType[P]>
        }
      >
    >


  export type user_scenesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    scene_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    scenes?: boolean | scenesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_scenes"]>

  export type user_scenesSelectScalar = {
    id?: boolean
    user_id?: boolean
    scene_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type user_scenesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    scenes?: boolean | scenesDefaultArgs<ExtArgs>
  }


  export type $user_scenesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_scenes"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      scenes: Prisma.$scenesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      scene_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user_scenes"]>
    composites: {}
  }


  type user_scenesGetPayload<S extends boolean | null | undefined | user_scenesDefaultArgs> = $Result.GetResult<Prisma.$user_scenesPayload, S>

  type user_scenesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<user_scenesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: User_scenesCountAggregateInputType | true
    }

  export interface user_scenesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_scenes'], meta: { name: 'user_scenes' } }
    /**
     * Find zero or one User_scenes that matches the filter.
     * @param {user_scenesFindUniqueArgs} args - Arguments to find a User_scenes
     * @example
     * // Get one User_scenes
     * const user_scenes = await prisma.user_scenes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends user_scenesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, user_scenesFindUniqueArgs<ExtArgs>>
    ): Prisma__user_scenesClient<$Result.GetResult<Prisma.$user_scenesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User_scenes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {user_scenesFindUniqueOrThrowArgs} args - Arguments to find a User_scenes
     * @example
     * // Get one User_scenes
     * const user_scenes = await prisma.user_scenes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends user_scenesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_scenesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__user_scenesClient<$Result.GetResult<Prisma.$user_scenesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User_scenes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_scenesFindFirstArgs} args - Arguments to find a User_scenes
     * @example
     * // Get one User_scenes
     * const user_scenes = await prisma.user_scenes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends user_scenesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, user_scenesFindFirstArgs<ExtArgs>>
    ): Prisma__user_scenesClient<$Result.GetResult<Prisma.$user_scenesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User_scenes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_scenesFindFirstOrThrowArgs} args - Arguments to find a User_scenes
     * @example
     * // Get one User_scenes
     * const user_scenes = await prisma.user_scenes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends user_scenesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_scenesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__user_scenesClient<$Result.GetResult<Prisma.$user_scenesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more User_scenes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_scenesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_scenes
     * const user_scenes = await prisma.user_scenes.findMany()
     * 
     * // Get first 10 User_scenes
     * const user_scenes = await prisma.user_scenes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_scenesWithIdOnly = await prisma.user_scenes.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends user_scenesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_scenesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_scenesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User_scenes.
     * @param {user_scenesCreateArgs} args - Arguments to create a User_scenes.
     * @example
     * // Create one User_scenes
     * const User_scenes = await prisma.user_scenes.create({
     *   data: {
     *     // ... data to create a User_scenes
     *   }
     * })
     * 
    **/
    create<T extends user_scenesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, user_scenesCreateArgs<ExtArgs>>
    ): Prisma__user_scenesClient<$Result.GetResult<Prisma.$user_scenesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many User_scenes.
     *     @param {user_scenesCreateManyArgs} args - Arguments to create many User_scenes.
     *     @example
     *     // Create many User_scenes
     *     const user_scenes = await prisma.user_scenes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends user_scenesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_scenesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_scenes.
     * @param {user_scenesDeleteArgs} args - Arguments to delete one User_scenes.
     * @example
     * // Delete one User_scenes
     * const User_scenes = await prisma.user_scenes.delete({
     *   where: {
     *     // ... filter to delete one User_scenes
     *   }
     * })
     * 
    **/
    delete<T extends user_scenesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, user_scenesDeleteArgs<ExtArgs>>
    ): Prisma__user_scenesClient<$Result.GetResult<Prisma.$user_scenesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User_scenes.
     * @param {user_scenesUpdateArgs} args - Arguments to update one User_scenes.
     * @example
     * // Update one User_scenes
     * const user_scenes = await prisma.user_scenes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends user_scenesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, user_scenesUpdateArgs<ExtArgs>>
    ): Prisma__user_scenesClient<$Result.GetResult<Prisma.$user_scenesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more User_scenes.
     * @param {user_scenesDeleteManyArgs} args - Arguments to filter User_scenes to delete.
     * @example
     * // Delete a few User_scenes
     * const { count } = await prisma.user_scenes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends user_scenesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_scenesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_scenes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_scenesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_scenes
     * const user_scenes = await prisma.user_scenes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends user_scenesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, user_scenesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_scenes.
     * @param {user_scenesUpsertArgs} args - Arguments to update or create a User_scenes.
     * @example
     * // Update or create a User_scenes
     * const user_scenes = await prisma.user_scenes.upsert({
     *   create: {
     *     // ... data to create a User_scenes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_scenes we want to update
     *   }
     * })
    **/
    upsert<T extends user_scenesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, user_scenesUpsertArgs<ExtArgs>>
    ): Prisma__user_scenesClient<$Result.GetResult<Prisma.$user_scenesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of User_scenes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_scenesCountArgs} args - Arguments to filter User_scenes to count.
     * @example
     * // Count the number of User_scenes
     * const count = await prisma.user_scenes.count({
     *   where: {
     *     // ... the filter for the User_scenes we want to count
     *   }
     * })
    **/
    count<T extends user_scenesCountArgs>(
      args?: Subset<T, user_scenesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_scenesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_scenes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_scenesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_scenesAggregateArgs>(args: Subset<T, User_scenesAggregateArgs>): Prisma.PrismaPromise<GetUser_scenesAggregateType<T>>

    /**
     * Group by User_scenes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_scenesGroupByArgs} args - Group by arguments.
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
      T extends user_scenesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_scenesGroupByArgs['orderBy'] }
        : { orderBy?: user_scenesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_scenesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_scenesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_scenes model
   */
  readonly fields: user_scenesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_scenes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_scenesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the user_scenes model
   */ 
  interface user_scenesFieldRefs {
    readonly id: FieldRef<"user_scenes", 'Int'>
    readonly user_id: FieldRef<"user_scenes", 'Int'>
    readonly scene_id: FieldRef<"user_scenes", 'Int'>
    readonly created_at: FieldRef<"user_scenes", 'DateTime'>
    readonly updated_at: FieldRef<"user_scenes", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * user_scenes findUnique
   */
  export type user_scenesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_scenes
     */
    select?: user_scenesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_scenesInclude<ExtArgs> | null
    /**
     * Filter, which user_scenes to fetch.
     */
    where: user_scenesWhereUniqueInput
  }


  /**
   * user_scenes findUniqueOrThrow
   */
  export type user_scenesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_scenes
     */
    select?: user_scenesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_scenesInclude<ExtArgs> | null
    /**
     * Filter, which user_scenes to fetch.
     */
    where: user_scenesWhereUniqueInput
  }


  /**
   * user_scenes findFirst
   */
  export type user_scenesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_scenes
     */
    select?: user_scenesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_scenesInclude<ExtArgs> | null
    /**
     * Filter, which user_scenes to fetch.
     */
    where?: user_scenesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_scenes to fetch.
     */
    orderBy?: user_scenesOrderByWithRelationInput | user_scenesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_scenes.
     */
    cursor?: user_scenesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_scenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_scenes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_scenes.
     */
    distinct?: User_scenesScalarFieldEnum | User_scenesScalarFieldEnum[]
  }


  /**
   * user_scenes findFirstOrThrow
   */
  export type user_scenesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_scenes
     */
    select?: user_scenesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_scenesInclude<ExtArgs> | null
    /**
     * Filter, which user_scenes to fetch.
     */
    where?: user_scenesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_scenes to fetch.
     */
    orderBy?: user_scenesOrderByWithRelationInput | user_scenesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_scenes.
     */
    cursor?: user_scenesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_scenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_scenes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_scenes.
     */
    distinct?: User_scenesScalarFieldEnum | User_scenesScalarFieldEnum[]
  }


  /**
   * user_scenes findMany
   */
  export type user_scenesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_scenes
     */
    select?: user_scenesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_scenesInclude<ExtArgs> | null
    /**
     * Filter, which user_scenes to fetch.
     */
    where?: user_scenesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_scenes to fetch.
     */
    orderBy?: user_scenesOrderByWithRelationInput | user_scenesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_scenes.
     */
    cursor?: user_scenesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_scenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_scenes.
     */
    skip?: number
    distinct?: User_scenesScalarFieldEnum | User_scenesScalarFieldEnum[]
  }


  /**
   * user_scenes create
   */
  export type user_scenesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_scenes
     */
    select?: user_scenesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_scenesInclude<ExtArgs> | null
    /**
     * The data needed to create a user_scenes.
     */
    data: XOR<user_scenesCreateInput, user_scenesUncheckedCreateInput>
  }


  /**
   * user_scenes createMany
   */
  export type user_scenesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_scenes.
     */
    data: user_scenesCreateManyInput | user_scenesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * user_scenes update
   */
  export type user_scenesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_scenes
     */
    select?: user_scenesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_scenesInclude<ExtArgs> | null
    /**
     * The data needed to update a user_scenes.
     */
    data: XOR<user_scenesUpdateInput, user_scenesUncheckedUpdateInput>
    /**
     * Choose, which user_scenes to update.
     */
    where: user_scenesWhereUniqueInput
  }


  /**
   * user_scenes updateMany
   */
  export type user_scenesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_scenes.
     */
    data: XOR<user_scenesUpdateManyMutationInput, user_scenesUncheckedUpdateManyInput>
    /**
     * Filter which user_scenes to update
     */
    where?: user_scenesWhereInput
  }


  /**
   * user_scenes upsert
   */
  export type user_scenesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_scenes
     */
    select?: user_scenesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_scenesInclude<ExtArgs> | null
    /**
     * The filter to search for the user_scenes to update in case it exists.
     */
    where: user_scenesWhereUniqueInput
    /**
     * In case the user_scenes found by the `where` argument doesn't exist, create a new user_scenes with this data.
     */
    create: XOR<user_scenesCreateInput, user_scenesUncheckedCreateInput>
    /**
     * In case the user_scenes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_scenesUpdateInput, user_scenesUncheckedUpdateInput>
  }


  /**
   * user_scenes delete
   */
  export type user_scenesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_scenes
     */
    select?: user_scenesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_scenesInclude<ExtArgs> | null
    /**
     * Filter which user_scenes to delete.
     */
    where: user_scenesWhereUniqueInput
  }


  /**
   * user_scenes deleteMany
   */
  export type user_scenesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_scenes to delete
     */
    where?: user_scenesWhereInput
  }


  /**
   * user_scenes without action
   */
  export type user_scenesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_scenes
     */
    select?: user_scenesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_scenesInclude<ExtArgs> | null
  }



  /**
   * Model user_segments
   */

  export type AggregateUser_segments = {
    _count: User_segmentsCountAggregateOutputType | null
    _avg: User_segmentsAvgAggregateOutputType | null
    _sum: User_segmentsSumAggregateOutputType | null
    _min: User_segmentsMinAggregateOutputType | null
    _max: User_segmentsMaxAggregateOutputType | null
  }

  export type User_segmentsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    segment_id: number | null
  }

  export type User_segmentsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    segment_id: number | null
  }

  export type User_segmentsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    segment_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_segmentsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    segment_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_segmentsCountAggregateOutputType = {
    id: number
    user_id: number
    segment_id: number
    data: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type User_segmentsAvgAggregateInputType = {
    id?: true
    user_id?: true
    segment_id?: true
  }

  export type User_segmentsSumAggregateInputType = {
    id?: true
    user_id?: true
    segment_id?: true
  }

  export type User_segmentsMinAggregateInputType = {
    id?: true
    user_id?: true
    segment_id?: true
    created_at?: true
    updated_at?: true
  }

  export type User_segmentsMaxAggregateInputType = {
    id?: true
    user_id?: true
    segment_id?: true
    created_at?: true
    updated_at?: true
  }

  export type User_segmentsCountAggregateInputType = {
    id?: true
    user_id?: true
    segment_id?: true
    data?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type User_segmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_segments to aggregate.
     */
    where?: user_segmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_segments to fetch.
     */
    orderBy?: user_segmentsOrderByWithRelationInput | user_segmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_segmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_segments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_segments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_segments
    **/
    _count?: true | User_segmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_segmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_segmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_segmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_segmentsMaxAggregateInputType
  }

  export type GetUser_segmentsAggregateType<T extends User_segmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_segments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_segments[P]>
      : GetScalarType<T[P], AggregateUser_segments[P]>
  }




  export type user_segmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_segmentsWhereInput
    orderBy?: user_segmentsOrderByWithAggregationInput | user_segmentsOrderByWithAggregationInput[]
    by: User_segmentsScalarFieldEnum[] | User_segmentsScalarFieldEnum
    having?: user_segmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_segmentsCountAggregateInputType | true
    _avg?: User_segmentsAvgAggregateInputType
    _sum?: User_segmentsSumAggregateInputType
    _min?: User_segmentsMinAggregateInputType
    _max?: User_segmentsMaxAggregateInputType
  }

  export type User_segmentsGroupByOutputType = {
    id: number
    user_id: number
    segment_id: number
    data: JsonValue | null
    created_at: Date
    updated_at: Date
    _count: User_segmentsCountAggregateOutputType | null
    _avg: User_segmentsAvgAggregateOutputType | null
    _sum: User_segmentsSumAggregateOutputType | null
    _min: User_segmentsMinAggregateOutputType | null
    _max: User_segmentsMaxAggregateOutputType | null
  }

  type GetUser_segmentsGroupByPayload<T extends user_segmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_segmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_segmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_segmentsGroupByOutputType[P]>
            : GetScalarType<T[P], User_segmentsGroupByOutputType[P]>
        }
      >
    >


  export type user_segmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    segment_id?: boolean
    data?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    segments?: boolean | segmentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_segments"]>

  export type user_segmentsSelectScalar = {
    id?: boolean
    user_id?: boolean
    segment_id?: boolean
    data?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type user_segmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    segments?: boolean | segmentsDefaultArgs<ExtArgs>
  }


  export type $user_segmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_segments"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      segments: Prisma.$segmentsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      segment_id: number
      data: Prisma.JsonValue | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user_segments"]>
    composites: {}
  }


  type user_segmentsGetPayload<S extends boolean | null | undefined | user_segmentsDefaultArgs> = $Result.GetResult<Prisma.$user_segmentsPayload, S>

  type user_segmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<user_segmentsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: User_segmentsCountAggregateInputType | true
    }

  export interface user_segmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_segments'], meta: { name: 'user_segments' } }
    /**
     * Find zero or one User_segments that matches the filter.
     * @param {user_segmentsFindUniqueArgs} args - Arguments to find a User_segments
     * @example
     * // Get one User_segments
     * const user_segments = await prisma.user_segments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends user_segmentsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, user_segmentsFindUniqueArgs<ExtArgs>>
    ): Prisma__user_segmentsClient<$Result.GetResult<Prisma.$user_segmentsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User_segments that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {user_segmentsFindUniqueOrThrowArgs} args - Arguments to find a User_segments
     * @example
     * // Get one User_segments
     * const user_segments = await prisma.user_segments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends user_segmentsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_segmentsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__user_segmentsClient<$Result.GetResult<Prisma.$user_segmentsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User_segments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_segmentsFindFirstArgs} args - Arguments to find a User_segments
     * @example
     * // Get one User_segments
     * const user_segments = await prisma.user_segments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends user_segmentsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, user_segmentsFindFirstArgs<ExtArgs>>
    ): Prisma__user_segmentsClient<$Result.GetResult<Prisma.$user_segmentsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User_segments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_segmentsFindFirstOrThrowArgs} args - Arguments to find a User_segments
     * @example
     * // Get one User_segments
     * const user_segments = await prisma.user_segments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends user_segmentsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_segmentsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__user_segmentsClient<$Result.GetResult<Prisma.$user_segmentsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more User_segments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_segmentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_segments
     * const user_segments = await prisma.user_segments.findMany()
     * 
     * // Get first 10 User_segments
     * const user_segments = await prisma.user_segments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_segmentsWithIdOnly = await prisma.user_segments.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends user_segmentsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_segmentsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_segmentsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User_segments.
     * @param {user_segmentsCreateArgs} args - Arguments to create a User_segments.
     * @example
     * // Create one User_segments
     * const User_segments = await prisma.user_segments.create({
     *   data: {
     *     // ... data to create a User_segments
     *   }
     * })
     * 
    **/
    create<T extends user_segmentsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, user_segmentsCreateArgs<ExtArgs>>
    ): Prisma__user_segmentsClient<$Result.GetResult<Prisma.$user_segmentsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many User_segments.
     *     @param {user_segmentsCreateManyArgs} args - Arguments to create many User_segments.
     *     @example
     *     // Create many User_segments
     *     const user_segments = await prisma.user_segments.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends user_segmentsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_segmentsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_segments.
     * @param {user_segmentsDeleteArgs} args - Arguments to delete one User_segments.
     * @example
     * // Delete one User_segments
     * const User_segments = await prisma.user_segments.delete({
     *   where: {
     *     // ... filter to delete one User_segments
     *   }
     * })
     * 
    **/
    delete<T extends user_segmentsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, user_segmentsDeleteArgs<ExtArgs>>
    ): Prisma__user_segmentsClient<$Result.GetResult<Prisma.$user_segmentsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User_segments.
     * @param {user_segmentsUpdateArgs} args - Arguments to update one User_segments.
     * @example
     * // Update one User_segments
     * const user_segments = await prisma.user_segments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends user_segmentsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, user_segmentsUpdateArgs<ExtArgs>>
    ): Prisma__user_segmentsClient<$Result.GetResult<Prisma.$user_segmentsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more User_segments.
     * @param {user_segmentsDeleteManyArgs} args - Arguments to filter User_segments to delete.
     * @example
     * // Delete a few User_segments
     * const { count } = await prisma.user_segments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends user_segmentsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_segmentsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_segments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_segmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_segments
     * const user_segments = await prisma.user_segments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends user_segmentsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, user_segmentsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_segments.
     * @param {user_segmentsUpsertArgs} args - Arguments to update or create a User_segments.
     * @example
     * // Update or create a User_segments
     * const user_segments = await prisma.user_segments.upsert({
     *   create: {
     *     // ... data to create a User_segments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_segments we want to update
     *   }
     * })
    **/
    upsert<T extends user_segmentsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, user_segmentsUpsertArgs<ExtArgs>>
    ): Prisma__user_segmentsClient<$Result.GetResult<Prisma.$user_segmentsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of User_segments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_segmentsCountArgs} args - Arguments to filter User_segments to count.
     * @example
     * // Count the number of User_segments
     * const count = await prisma.user_segments.count({
     *   where: {
     *     // ... the filter for the User_segments we want to count
     *   }
     * })
    **/
    count<T extends user_segmentsCountArgs>(
      args?: Subset<T, user_segmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_segmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_segments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_segmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_segmentsAggregateArgs>(args: Subset<T, User_segmentsAggregateArgs>): Prisma.PrismaPromise<GetUser_segmentsAggregateType<T>>

    /**
     * Group by User_segments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_segmentsGroupByArgs} args - Group by arguments.
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
      T extends user_segmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_segmentsGroupByArgs['orderBy'] }
        : { orderBy?: user_segmentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_segmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_segmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_segments model
   */
  readonly fields: user_segmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_segments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_segmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    segments<T extends segmentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, segmentsDefaultArgs<ExtArgs>>): Prisma__segmentsClient<$Result.GetResult<Prisma.$segmentsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the user_segments model
   */ 
  interface user_segmentsFieldRefs {
    readonly id: FieldRef<"user_segments", 'Int'>
    readonly user_id: FieldRef<"user_segments", 'Int'>
    readonly segment_id: FieldRef<"user_segments", 'Int'>
    readonly data: FieldRef<"user_segments", 'Json'>
    readonly created_at: FieldRef<"user_segments", 'DateTime'>
    readonly updated_at: FieldRef<"user_segments", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * user_segments findUnique
   */
  export type user_segmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_segments
     */
    select?: user_segmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_segmentsInclude<ExtArgs> | null
    /**
     * Filter, which user_segments to fetch.
     */
    where: user_segmentsWhereUniqueInput
  }


  /**
   * user_segments findUniqueOrThrow
   */
  export type user_segmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_segments
     */
    select?: user_segmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_segmentsInclude<ExtArgs> | null
    /**
     * Filter, which user_segments to fetch.
     */
    where: user_segmentsWhereUniqueInput
  }


  /**
   * user_segments findFirst
   */
  export type user_segmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_segments
     */
    select?: user_segmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_segmentsInclude<ExtArgs> | null
    /**
     * Filter, which user_segments to fetch.
     */
    where?: user_segmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_segments to fetch.
     */
    orderBy?: user_segmentsOrderByWithRelationInput | user_segmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_segments.
     */
    cursor?: user_segmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_segments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_segments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_segments.
     */
    distinct?: User_segmentsScalarFieldEnum | User_segmentsScalarFieldEnum[]
  }


  /**
   * user_segments findFirstOrThrow
   */
  export type user_segmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_segments
     */
    select?: user_segmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_segmentsInclude<ExtArgs> | null
    /**
     * Filter, which user_segments to fetch.
     */
    where?: user_segmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_segments to fetch.
     */
    orderBy?: user_segmentsOrderByWithRelationInput | user_segmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_segments.
     */
    cursor?: user_segmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_segments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_segments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_segments.
     */
    distinct?: User_segmentsScalarFieldEnum | User_segmentsScalarFieldEnum[]
  }


  /**
   * user_segments findMany
   */
  export type user_segmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_segments
     */
    select?: user_segmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_segmentsInclude<ExtArgs> | null
    /**
     * Filter, which user_segments to fetch.
     */
    where?: user_segmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_segments to fetch.
     */
    orderBy?: user_segmentsOrderByWithRelationInput | user_segmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_segments.
     */
    cursor?: user_segmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_segments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_segments.
     */
    skip?: number
    distinct?: User_segmentsScalarFieldEnum | User_segmentsScalarFieldEnum[]
  }


  /**
   * user_segments create
   */
  export type user_segmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_segments
     */
    select?: user_segmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_segmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a user_segments.
     */
    data: XOR<user_segmentsCreateInput, user_segmentsUncheckedCreateInput>
  }


  /**
   * user_segments createMany
   */
  export type user_segmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_segments.
     */
    data: user_segmentsCreateManyInput | user_segmentsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * user_segments update
   */
  export type user_segmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_segments
     */
    select?: user_segmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_segmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a user_segments.
     */
    data: XOR<user_segmentsUpdateInput, user_segmentsUncheckedUpdateInput>
    /**
     * Choose, which user_segments to update.
     */
    where: user_segmentsWhereUniqueInput
  }


  /**
   * user_segments updateMany
   */
  export type user_segmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_segments.
     */
    data: XOR<user_segmentsUpdateManyMutationInput, user_segmentsUncheckedUpdateManyInput>
    /**
     * Filter which user_segments to update
     */
    where?: user_segmentsWhereInput
  }


  /**
   * user_segments upsert
   */
  export type user_segmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_segments
     */
    select?: user_segmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_segmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the user_segments to update in case it exists.
     */
    where: user_segmentsWhereUniqueInput
    /**
     * In case the user_segments found by the `where` argument doesn't exist, create a new user_segments with this data.
     */
    create: XOR<user_segmentsCreateInput, user_segmentsUncheckedCreateInput>
    /**
     * In case the user_segments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_segmentsUpdateInput, user_segmentsUncheckedUpdateInput>
  }


  /**
   * user_segments delete
   */
  export type user_segmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_segments
     */
    select?: user_segmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_segmentsInclude<ExtArgs> | null
    /**
     * Filter which user_segments to delete.
     */
    where: user_segmentsWhereUniqueInput
  }


  /**
   * user_segments deleteMany
   */
  export type user_segmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_segments to delete
     */
    where?: user_segmentsWhereInput
  }


  /**
   * user_segments without action
   */
  export type user_segmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_segments
     */
    select?: user_segmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_segmentsInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const User_scenesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    scene_id: 'scene_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type User_scenesScalarFieldEnum = (typeof User_scenesScalarFieldEnum)[keyof typeof User_scenesScalarFieldEnum]


  export const User_segmentsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    segment_id: 'segment_id',
    data: 'data',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type User_segmentsScalarFieldEnum = (typeof User_segmentsScalarFieldEnum)[keyof typeof User_segmentsScalarFieldEnum]


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
    user_scenes?: User_scenesListRelationFilter
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
    user_scenes?: user_scenesOrderByRelationAggregateInput
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
    user_scenes?: User_scenesListRelationFilter
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
    user_segments?: User_segmentsListRelationFilter
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
    user_segments?: user_segmentsOrderByRelationAggregateInput
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
    user_segments?: User_segmentsListRelationFilter
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

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    user_scenes?: User_scenesListRelationFilter
    user_segments?: User_segmentsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    user_scenes?: user_scenesOrderByRelationAggregateInput
    user_segments?: user_segmentsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    user_scenes?: User_scenesListRelationFilter
    user_segments?: User_segmentsListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type user_scenesWhereInput = {
    AND?: user_scenesWhereInput | user_scenesWhereInput[]
    OR?: user_scenesWhereInput[]
    NOT?: user_scenesWhereInput | user_scenesWhereInput[]
    id?: IntFilter<"user_scenes"> | number
    user_id?: IntFilter<"user_scenes"> | number
    scene_id?: IntFilter<"user_scenes"> | number
    created_at?: DateTimeFilter<"user_scenes"> | Date | string
    updated_at?: DateTimeFilter<"user_scenes"> | Date | string
    users?: XOR<UsersRelationFilter, usersWhereInput>
    scenes?: XOR<ScenesRelationFilter, scenesWhereInput>
  }

  export type user_scenesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    scene_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    users?: usersOrderByWithRelationInput
    scenes?: scenesOrderByWithRelationInput
  }

  export type user_scenesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: user_scenesWhereInput | user_scenesWhereInput[]
    OR?: user_scenesWhereInput[]
    NOT?: user_scenesWhereInput | user_scenesWhereInput[]
    user_id?: IntFilter<"user_scenes"> | number
    scene_id?: IntFilter<"user_scenes"> | number
    created_at?: DateTimeFilter<"user_scenes"> | Date | string
    updated_at?: DateTimeFilter<"user_scenes"> | Date | string
    users?: XOR<UsersRelationFilter, usersWhereInput>
    scenes?: XOR<ScenesRelationFilter, scenesWhereInput>
  }, "id">

  export type user_scenesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    scene_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: user_scenesCountOrderByAggregateInput
    _avg?: user_scenesAvgOrderByAggregateInput
    _max?: user_scenesMaxOrderByAggregateInput
    _min?: user_scenesMinOrderByAggregateInput
    _sum?: user_scenesSumOrderByAggregateInput
  }

  export type user_scenesScalarWhereWithAggregatesInput = {
    AND?: user_scenesScalarWhereWithAggregatesInput | user_scenesScalarWhereWithAggregatesInput[]
    OR?: user_scenesScalarWhereWithAggregatesInput[]
    NOT?: user_scenesScalarWhereWithAggregatesInput | user_scenesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user_scenes"> | number
    user_id?: IntWithAggregatesFilter<"user_scenes"> | number
    scene_id?: IntWithAggregatesFilter<"user_scenes"> | number
    created_at?: DateTimeWithAggregatesFilter<"user_scenes"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"user_scenes"> | Date | string
  }

  export type user_segmentsWhereInput = {
    AND?: user_segmentsWhereInput | user_segmentsWhereInput[]
    OR?: user_segmentsWhereInput[]
    NOT?: user_segmentsWhereInput | user_segmentsWhereInput[]
    id?: IntFilter<"user_segments"> | number
    user_id?: IntFilter<"user_segments"> | number
    segment_id?: IntFilter<"user_segments"> | number
    data?: JsonNullableFilter<"user_segments">
    created_at?: DateTimeFilter<"user_segments"> | Date | string
    updated_at?: DateTimeFilter<"user_segments"> | Date | string
    users?: XOR<UsersRelationFilter, usersWhereInput>
    segments?: XOR<SegmentsRelationFilter, segmentsWhereInput>
  }

  export type user_segmentsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    segment_id?: SortOrder
    data?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    users?: usersOrderByWithRelationInput
    segments?: segmentsOrderByWithRelationInput
  }

  export type user_segmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: user_segmentsWhereInput | user_segmentsWhereInput[]
    OR?: user_segmentsWhereInput[]
    NOT?: user_segmentsWhereInput | user_segmentsWhereInput[]
    user_id?: IntFilter<"user_segments"> | number
    segment_id?: IntFilter<"user_segments"> | number
    data?: JsonNullableFilter<"user_segments">
    created_at?: DateTimeFilter<"user_segments"> | Date | string
    updated_at?: DateTimeFilter<"user_segments"> | Date | string
    users?: XOR<UsersRelationFilter, usersWhereInput>
    segments?: XOR<SegmentsRelationFilter, segmentsWhereInput>
  }, "id">

  export type user_segmentsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    segment_id?: SortOrder
    data?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: user_segmentsCountOrderByAggregateInput
    _avg?: user_segmentsAvgOrderByAggregateInput
    _max?: user_segmentsMaxOrderByAggregateInput
    _min?: user_segmentsMinOrderByAggregateInput
    _sum?: user_segmentsSumOrderByAggregateInput
  }

  export type user_segmentsScalarWhereWithAggregatesInput = {
    AND?: user_segmentsScalarWhereWithAggregatesInput | user_segmentsScalarWhereWithAggregatesInput[]
    OR?: user_segmentsScalarWhereWithAggregatesInput[]
    NOT?: user_segmentsScalarWhereWithAggregatesInput | user_segmentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user_segments"> | number
    user_id?: IntWithAggregatesFilter<"user_segments"> | number
    segment_id?: IntWithAggregatesFilter<"user_segments"> | number
    data?: JsonNullableWithAggregatesFilter<"user_segments">
    created_at?: DateTimeWithAggregatesFilter<"user_segments"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"user_segments"> | Date | string
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
    user_scenes?: user_scenesCreateNestedManyWithoutScenesInput
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
    user_scenes?: user_scenesUncheckedCreateNestedManyWithoutScenesInput
  }

  export type scenesUpdateInput = {
    order?: IntFieldUpdateOperationsInput | number
    archived?: BoolFieldUpdateOperationsInput | boolean
    successSceneId?: NullableIntFieldUpdateOperationsInput | number | null
    failureSceneId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    segments?: segmentsUpdateManyWithoutScenesNestedInput
    user_scenes?: user_scenesUpdateManyWithoutScenesNestedInput
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
    user_scenes?: user_scenesUncheckedUpdateManyWithoutScenesNestedInput
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
    user_segments?: user_segmentsCreateNestedManyWithoutSegmentsInput
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
    user_segments?: user_segmentsUncheckedCreateNestedManyWithoutSegmentsInput
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
    user_segments?: user_segmentsUpdateManyWithoutSegmentsNestedInput
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
    user_segments?: user_segmentsUncheckedUpdateManyWithoutSegmentsNestedInput
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

  export type usersCreateInput = {
    name: string
    email: string
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_scenes?: user_scenesCreateNestedManyWithoutUsersInput
    user_segments?: user_segmentsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_scenes?: user_scenesUncheckedCreateNestedManyWithoutUsersInput
    user_segments?: user_segmentsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_scenes?: user_scenesUpdateManyWithoutUsersNestedInput
    user_segments?: user_segmentsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_scenes?: user_scenesUncheckedUpdateManyWithoutUsersNestedInput
    user_segments?: user_segmentsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_scenesCreateInput = {
    created_at: Date | string
    updated_at: Date | string
    users: usersCreateNestedOneWithoutUser_scenesInput
    scenes: scenesCreateNestedOneWithoutUser_scenesInput
  }

  export type user_scenesUncheckedCreateInput = {
    id?: number
    user_id: number
    scene_id: number
    created_at: Date | string
    updated_at: Date | string
  }

  export type user_scenesUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutUser_scenesNestedInput
    scenes?: scenesUpdateOneRequiredWithoutUser_scenesNestedInput
  }

  export type user_scenesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    scene_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_scenesCreateManyInput = {
    id?: number
    user_id: number
    scene_id: number
    created_at: Date | string
    updated_at: Date | string
  }

  export type user_scenesUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_scenesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    scene_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_segmentsCreateInput = {
    data?: NullableJsonNullValueInput | InputJsonValue
    created_at: Date | string
    updated_at: Date | string
    users: usersCreateNestedOneWithoutUser_segmentsInput
    segments: segmentsCreateNestedOneWithoutUser_segmentsInput
  }

  export type user_segmentsUncheckedCreateInput = {
    id?: number
    user_id: number
    segment_id: number
    data?: NullableJsonNullValueInput | InputJsonValue
    created_at: Date | string
    updated_at: Date | string
  }

  export type user_segmentsUpdateInput = {
    data?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutUser_segmentsNestedInput
    segments?: segmentsUpdateOneRequiredWithoutUser_segmentsNestedInput
  }

  export type user_segmentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    segment_id?: IntFieldUpdateOperationsInput | number
    data?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_segmentsCreateManyInput = {
    id?: number
    user_id: number
    segment_id: number
    data?: NullableJsonNullValueInput | InputJsonValue
    created_at: Date | string
    updated_at: Date | string
  }

  export type user_segmentsUpdateManyMutationInput = {
    data?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_segmentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    segment_id?: IntFieldUpdateOperationsInput | number
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

  export type User_scenesListRelationFilter = {
    every?: user_scenesWhereInput
    some?: user_scenesWhereInput
    none?: user_scenesWhereInput
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

  export type user_scenesOrderByRelationAggregateInput = {
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

  export type User_segmentsListRelationFilter = {
    every?: user_segmentsWhereInput
    some?: user_segmentsWhereInput
    none?: user_segmentsWhereInput
  }

  export type ScenesRelationFilter = {
    is?: scenesWhereInput
    isNot?: scenesWhereInput
  }

  export type user_segmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UsersRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type user_scenesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    scene_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_scenesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    scene_id?: SortOrder
  }

  export type user_scenesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    scene_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_scenesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    scene_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_scenesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    scene_id?: SortOrder
  }

  export type SegmentsRelationFilter = {
    is?: segmentsWhereInput
    isNot?: segmentsWhereInput
  }

  export type user_segmentsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    segment_id?: SortOrder
    data?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_segmentsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    segment_id?: SortOrder
  }

  export type user_segmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    segment_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_segmentsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    segment_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_segmentsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    segment_id?: SortOrder
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

  export type user_scenesCreateNestedManyWithoutScenesInput = {
    create?: XOR<user_scenesCreateWithoutScenesInput, user_scenesUncheckedCreateWithoutScenesInput> | user_scenesCreateWithoutScenesInput[] | user_scenesUncheckedCreateWithoutScenesInput[]
    connectOrCreate?: user_scenesCreateOrConnectWithoutScenesInput | user_scenesCreateOrConnectWithoutScenesInput[]
    createMany?: user_scenesCreateManyScenesInputEnvelope
    connect?: user_scenesWhereUniqueInput | user_scenesWhereUniqueInput[]
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

  export type user_scenesUncheckedCreateNestedManyWithoutScenesInput = {
    create?: XOR<user_scenesCreateWithoutScenesInput, user_scenesUncheckedCreateWithoutScenesInput> | user_scenesCreateWithoutScenesInput[] | user_scenesUncheckedCreateWithoutScenesInput[]
    connectOrCreate?: user_scenesCreateOrConnectWithoutScenesInput | user_scenesCreateOrConnectWithoutScenesInput[]
    createMany?: user_scenesCreateManyScenesInputEnvelope
    connect?: user_scenesWhereUniqueInput | user_scenesWhereUniqueInput[]
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

  export type user_scenesUpdateManyWithoutScenesNestedInput = {
    create?: XOR<user_scenesCreateWithoutScenesInput, user_scenesUncheckedCreateWithoutScenesInput> | user_scenesCreateWithoutScenesInput[] | user_scenesUncheckedCreateWithoutScenesInput[]
    connectOrCreate?: user_scenesCreateOrConnectWithoutScenesInput | user_scenesCreateOrConnectWithoutScenesInput[]
    upsert?: user_scenesUpsertWithWhereUniqueWithoutScenesInput | user_scenesUpsertWithWhereUniqueWithoutScenesInput[]
    createMany?: user_scenesCreateManyScenesInputEnvelope
    set?: user_scenesWhereUniqueInput | user_scenesWhereUniqueInput[]
    disconnect?: user_scenesWhereUniqueInput | user_scenesWhereUniqueInput[]
    delete?: user_scenesWhereUniqueInput | user_scenesWhereUniqueInput[]
    connect?: user_scenesWhereUniqueInput | user_scenesWhereUniqueInput[]
    update?: user_scenesUpdateWithWhereUniqueWithoutScenesInput | user_scenesUpdateWithWhereUniqueWithoutScenesInput[]
    updateMany?: user_scenesUpdateManyWithWhereWithoutScenesInput | user_scenesUpdateManyWithWhereWithoutScenesInput[]
    deleteMany?: user_scenesScalarWhereInput | user_scenesScalarWhereInput[]
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

  export type user_scenesUncheckedUpdateManyWithoutScenesNestedInput = {
    create?: XOR<user_scenesCreateWithoutScenesInput, user_scenesUncheckedCreateWithoutScenesInput> | user_scenesCreateWithoutScenesInput[] | user_scenesUncheckedCreateWithoutScenesInput[]
    connectOrCreate?: user_scenesCreateOrConnectWithoutScenesInput | user_scenesCreateOrConnectWithoutScenesInput[]
    upsert?: user_scenesUpsertWithWhereUniqueWithoutScenesInput | user_scenesUpsertWithWhereUniqueWithoutScenesInput[]
    createMany?: user_scenesCreateManyScenesInputEnvelope
    set?: user_scenesWhereUniqueInput | user_scenesWhereUniqueInput[]
    disconnect?: user_scenesWhereUniqueInput | user_scenesWhereUniqueInput[]
    delete?: user_scenesWhereUniqueInput | user_scenesWhereUniqueInput[]
    connect?: user_scenesWhereUniqueInput | user_scenesWhereUniqueInput[]
    update?: user_scenesUpdateWithWhereUniqueWithoutScenesInput | user_scenesUpdateWithWhereUniqueWithoutScenesInput[]
    updateMany?: user_scenesUpdateManyWithWhereWithoutScenesInput | user_scenesUpdateManyWithWhereWithoutScenesInput[]
    deleteMany?: user_scenesScalarWhereInput | user_scenesScalarWhereInput[]
  }

  export type user_segmentsCreateNestedManyWithoutSegmentsInput = {
    create?: XOR<user_segmentsCreateWithoutSegmentsInput, user_segmentsUncheckedCreateWithoutSegmentsInput> | user_segmentsCreateWithoutSegmentsInput[] | user_segmentsUncheckedCreateWithoutSegmentsInput[]
    connectOrCreate?: user_segmentsCreateOrConnectWithoutSegmentsInput | user_segmentsCreateOrConnectWithoutSegmentsInput[]
    createMany?: user_segmentsCreateManySegmentsInputEnvelope
    connect?: user_segmentsWhereUniqueInput | user_segmentsWhereUniqueInput[]
  }

  export type scenesCreateNestedOneWithoutSegmentsInput = {
    create?: XOR<scenesCreateWithoutSegmentsInput, scenesUncheckedCreateWithoutSegmentsInput>
    connectOrCreate?: scenesCreateOrConnectWithoutSegmentsInput
    connect?: scenesWhereUniqueInput
  }

  export type user_segmentsUncheckedCreateNestedManyWithoutSegmentsInput = {
    create?: XOR<user_segmentsCreateWithoutSegmentsInput, user_segmentsUncheckedCreateWithoutSegmentsInput> | user_segmentsCreateWithoutSegmentsInput[] | user_segmentsUncheckedCreateWithoutSegmentsInput[]
    connectOrCreate?: user_segmentsCreateOrConnectWithoutSegmentsInput | user_segmentsCreateOrConnectWithoutSegmentsInput[]
    createMany?: user_segmentsCreateManySegmentsInputEnvelope
    connect?: user_segmentsWhereUniqueInput | user_segmentsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type user_segmentsUpdateManyWithoutSegmentsNestedInput = {
    create?: XOR<user_segmentsCreateWithoutSegmentsInput, user_segmentsUncheckedCreateWithoutSegmentsInput> | user_segmentsCreateWithoutSegmentsInput[] | user_segmentsUncheckedCreateWithoutSegmentsInput[]
    connectOrCreate?: user_segmentsCreateOrConnectWithoutSegmentsInput | user_segmentsCreateOrConnectWithoutSegmentsInput[]
    upsert?: user_segmentsUpsertWithWhereUniqueWithoutSegmentsInput | user_segmentsUpsertWithWhereUniqueWithoutSegmentsInput[]
    createMany?: user_segmentsCreateManySegmentsInputEnvelope
    set?: user_segmentsWhereUniqueInput | user_segmentsWhereUniqueInput[]
    disconnect?: user_segmentsWhereUniqueInput | user_segmentsWhereUniqueInput[]
    delete?: user_segmentsWhereUniqueInput | user_segmentsWhereUniqueInput[]
    connect?: user_segmentsWhereUniqueInput | user_segmentsWhereUniqueInput[]
    update?: user_segmentsUpdateWithWhereUniqueWithoutSegmentsInput | user_segmentsUpdateWithWhereUniqueWithoutSegmentsInput[]
    updateMany?: user_segmentsUpdateManyWithWhereWithoutSegmentsInput | user_segmentsUpdateManyWithWhereWithoutSegmentsInput[]
    deleteMany?: user_segmentsScalarWhereInput | user_segmentsScalarWhereInput[]
  }

  export type scenesUpdateOneRequiredWithoutSegmentsNestedInput = {
    create?: XOR<scenesCreateWithoutSegmentsInput, scenesUncheckedCreateWithoutSegmentsInput>
    connectOrCreate?: scenesCreateOrConnectWithoutSegmentsInput
    upsert?: scenesUpsertWithoutSegmentsInput
    connect?: scenesWhereUniqueInput
    update?: XOR<XOR<scenesUpdateToOneWithWhereWithoutSegmentsInput, scenesUpdateWithoutSegmentsInput>, scenesUncheckedUpdateWithoutSegmentsInput>
  }

  export type user_segmentsUncheckedUpdateManyWithoutSegmentsNestedInput = {
    create?: XOR<user_segmentsCreateWithoutSegmentsInput, user_segmentsUncheckedCreateWithoutSegmentsInput> | user_segmentsCreateWithoutSegmentsInput[] | user_segmentsUncheckedCreateWithoutSegmentsInput[]
    connectOrCreate?: user_segmentsCreateOrConnectWithoutSegmentsInput | user_segmentsCreateOrConnectWithoutSegmentsInput[]
    upsert?: user_segmentsUpsertWithWhereUniqueWithoutSegmentsInput | user_segmentsUpsertWithWhereUniqueWithoutSegmentsInput[]
    createMany?: user_segmentsCreateManySegmentsInputEnvelope
    set?: user_segmentsWhereUniqueInput | user_segmentsWhereUniqueInput[]
    disconnect?: user_segmentsWhereUniqueInput | user_segmentsWhereUniqueInput[]
    delete?: user_segmentsWhereUniqueInput | user_segmentsWhereUniqueInput[]
    connect?: user_segmentsWhereUniqueInput | user_segmentsWhereUniqueInput[]
    update?: user_segmentsUpdateWithWhereUniqueWithoutSegmentsInput | user_segmentsUpdateWithWhereUniqueWithoutSegmentsInput[]
    updateMany?: user_segmentsUpdateManyWithWhereWithoutSegmentsInput | user_segmentsUpdateManyWithWhereWithoutSegmentsInput[]
    deleteMany?: user_segmentsScalarWhereInput | user_segmentsScalarWhereInput[]
  }

  export type user_scenesCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_scenesCreateWithoutUsersInput, user_scenesUncheckedCreateWithoutUsersInput> | user_scenesCreateWithoutUsersInput[] | user_scenesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_scenesCreateOrConnectWithoutUsersInput | user_scenesCreateOrConnectWithoutUsersInput[]
    createMany?: user_scenesCreateManyUsersInputEnvelope
    connect?: user_scenesWhereUniqueInput | user_scenesWhereUniqueInput[]
  }

  export type user_segmentsCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_segmentsCreateWithoutUsersInput, user_segmentsUncheckedCreateWithoutUsersInput> | user_segmentsCreateWithoutUsersInput[] | user_segmentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_segmentsCreateOrConnectWithoutUsersInput | user_segmentsCreateOrConnectWithoutUsersInput[]
    createMany?: user_segmentsCreateManyUsersInputEnvelope
    connect?: user_segmentsWhereUniqueInput | user_segmentsWhereUniqueInput[]
  }

  export type user_scenesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_scenesCreateWithoutUsersInput, user_scenesUncheckedCreateWithoutUsersInput> | user_scenesCreateWithoutUsersInput[] | user_scenesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_scenesCreateOrConnectWithoutUsersInput | user_scenesCreateOrConnectWithoutUsersInput[]
    createMany?: user_scenesCreateManyUsersInputEnvelope
    connect?: user_scenesWhereUniqueInput | user_scenesWhereUniqueInput[]
  }

  export type user_segmentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_segmentsCreateWithoutUsersInput, user_segmentsUncheckedCreateWithoutUsersInput> | user_segmentsCreateWithoutUsersInput[] | user_segmentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_segmentsCreateOrConnectWithoutUsersInput | user_segmentsCreateOrConnectWithoutUsersInput[]
    createMany?: user_segmentsCreateManyUsersInputEnvelope
    connect?: user_segmentsWhereUniqueInput | user_segmentsWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type user_scenesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_scenesCreateWithoutUsersInput, user_scenesUncheckedCreateWithoutUsersInput> | user_scenesCreateWithoutUsersInput[] | user_scenesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_scenesCreateOrConnectWithoutUsersInput | user_scenesCreateOrConnectWithoutUsersInput[]
    upsert?: user_scenesUpsertWithWhereUniqueWithoutUsersInput | user_scenesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_scenesCreateManyUsersInputEnvelope
    set?: user_scenesWhereUniqueInput | user_scenesWhereUniqueInput[]
    disconnect?: user_scenesWhereUniqueInput | user_scenesWhereUniqueInput[]
    delete?: user_scenesWhereUniqueInput | user_scenesWhereUniqueInput[]
    connect?: user_scenesWhereUniqueInput | user_scenesWhereUniqueInput[]
    update?: user_scenesUpdateWithWhereUniqueWithoutUsersInput | user_scenesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_scenesUpdateManyWithWhereWithoutUsersInput | user_scenesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_scenesScalarWhereInput | user_scenesScalarWhereInput[]
  }

  export type user_segmentsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_segmentsCreateWithoutUsersInput, user_segmentsUncheckedCreateWithoutUsersInput> | user_segmentsCreateWithoutUsersInput[] | user_segmentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_segmentsCreateOrConnectWithoutUsersInput | user_segmentsCreateOrConnectWithoutUsersInput[]
    upsert?: user_segmentsUpsertWithWhereUniqueWithoutUsersInput | user_segmentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_segmentsCreateManyUsersInputEnvelope
    set?: user_segmentsWhereUniqueInput | user_segmentsWhereUniqueInput[]
    disconnect?: user_segmentsWhereUniqueInput | user_segmentsWhereUniqueInput[]
    delete?: user_segmentsWhereUniqueInput | user_segmentsWhereUniqueInput[]
    connect?: user_segmentsWhereUniqueInput | user_segmentsWhereUniqueInput[]
    update?: user_segmentsUpdateWithWhereUniqueWithoutUsersInput | user_segmentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_segmentsUpdateManyWithWhereWithoutUsersInput | user_segmentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_segmentsScalarWhereInput | user_segmentsScalarWhereInput[]
  }

  export type user_scenesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_scenesCreateWithoutUsersInput, user_scenesUncheckedCreateWithoutUsersInput> | user_scenesCreateWithoutUsersInput[] | user_scenesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_scenesCreateOrConnectWithoutUsersInput | user_scenesCreateOrConnectWithoutUsersInput[]
    upsert?: user_scenesUpsertWithWhereUniqueWithoutUsersInput | user_scenesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_scenesCreateManyUsersInputEnvelope
    set?: user_scenesWhereUniqueInput | user_scenesWhereUniqueInput[]
    disconnect?: user_scenesWhereUniqueInput | user_scenesWhereUniqueInput[]
    delete?: user_scenesWhereUniqueInput | user_scenesWhereUniqueInput[]
    connect?: user_scenesWhereUniqueInput | user_scenesWhereUniqueInput[]
    update?: user_scenesUpdateWithWhereUniqueWithoutUsersInput | user_scenesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_scenesUpdateManyWithWhereWithoutUsersInput | user_scenesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_scenesScalarWhereInput | user_scenesScalarWhereInput[]
  }

  export type user_segmentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_segmentsCreateWithoutUsersInput, user_segmentsUncheckedCreateWithoutUsersInput> | user_segmentsCreateWithoutUsersInput[] | user_segmentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_segmentsCreateOrConnectWithoutUsersInput | user_segmentsCreateOrConnectWithoutUsersInput[]
    upsert?: user_segmentsUpsertWithWhereUniqueWithoutUsersInput | user_segmentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_segmentsCreateManyUsersInputEnvelope
    set?: user_segmentsWhereUniqueInput | user_segmentsWhereUniqueInput[]
    disconnect?: user_segmentsWhereUniqueInput | user_segmentsWhereUniqueInput[]
    delete?: user_segmentsWhereUniqueInput | user_segmentsWhereUniqueInput[]
    connect?: user_segmentsWhereUniqueInput | user_segmentsWhereUniqueInput[]
    update?: user_segmentsUpdateWithWhereUniqueWithoutUsersInput | user_segmentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_segmentsUpdateManyWithWhereWithoutUsersInput | user_segmentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_segmentsScalarWhereInput | user_segmentsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutUser_scenesInput = {
    create?: XOR<usersCreateWithoutUser_scenesInput, usersUncheckedCreateWithoutUser_scenesInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_scenesInput
    connect?: usersWhereUniqueInput
  }

  export type scenesCreateNestedOneWithoutUser_scenesInput = {
    create?: XOR<scenesCreateWithoutUser_scenesInput, scenesUncheckedCreateWithoutUser_scenesInput>
    connectOrCreate?: scenesCreateOrConnectWithoutUser_scenesInput
    connect?: scenesWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutUser_scenesNestedInput = {
    create?: XOR<usersCreateWithoutUser_scenesInput, usersUncheckedCreateWithoutUser_scenesInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_scenesInput
    upsert?: usersUpsertWithoutUser_scenesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_scenesInput, usersUpdateWithoutUser_scenesInput>, usersUncheckedUpdateWithoutUser_scenesInput>
  }

  export type scenesUpdateOneRequiredWithoutUser_scenesNestedInput = {
    create?: XOR<scenesCreateWithoutUser_scenesInput, scenesUncheckedCreateWithoutUser_scenesInput>
    connectOrCreate?: scenesCreateOrConnectWithoutUser_scenesInput
    upsert?: scenesUpsertWithoutUser_scenesInput
    connect?: scenesWhereUniqueInput
    update?: XOR<XOR<scenesUpdateToOneWithWhereWithoutUser_scenesInput, scenesUpdateWithoutUser_scenesInput>, scenesUncheckedUpdateWithoutUser_scenesInput>
  }

  export type usersCreateNestedOneWithoutUser_segmentsInput = {
    create?: XOR<usersCreateWithoutUser_segmentsInput, usersUncheckedCreateWithoutUser_segmentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_segmentsInput
    connect?: usersWhereUniqueInput
  }

  export type segmentsCreateNestedOneWithoutUser_segmentsInput = {
    create?: XOR<segmentsCreateWithoutUser_segmentsInput, segmentsUncheckedCreateWithoutUser_segmentsInput>
    connectOrCreate?: segmentsCreateOrConnectWithoutUser_segmentsInput
    connect?: segmentsWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutUser_segmentsNestedInput = {
    create?: XOR<usersCreateWithoutUser_segmentsInput, usersUncheckedCreateWithoutUser_segmentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_segmentsInput
    upsert?: usersUpsertWithoutUser_segmentsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_segmentsInput, usersUpdateWithoutUser_segmentsInput>, usersUncheckedUpdateWithoutUser_segmentsInput>
  }

  export type segmentsUpdateOneRequiredWithoutUser_segmentsNestedInput = {
    create?: XOR<segmentsCreateWithoutUser_segmentsInput, segmentsUncheckedCreateWithoutUser_segmentsInput>
    connectOrCreate?: segmentsCreateOrConnectWithoutUser_segmentsInput
    upsert?: segmentsUpsertWithoutUser_segmentsInput
    connect?: segmentsWhereUniqueInput
    update?: XOR<XOR<segmentsUpdateToOneWithWhereWithoutUser_segmentsInput, segmentsUpdateWithoutUser_segmentsInput>, segmentsUncheckedUpdateWithoutUser_segmentsInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type scenesCreateWithoutLecturesInput = {
    order: number
    archived?: boolean
    successSceneId?: number | null
    failureSceneId?: number | null
    created_at: Date | string
    updated_at: Date | string
    segments?: segmentsCreateNestedManyWithoutScenesInput
    user_scenes?: user_scenesCreateNestedManyWithoutScenesInput
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
    user_scenes?: user_scenesUncheckedCreateNestedManyWithoutScenesInput
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
    user_segments?: user_segmentsCreateNestedManyWithoutSegmentsInput
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
    user_segments?: user_segmentsUncheckedCreateNestedManyWithoutSegmentsInput
  }

  export type segmentsCreateOrConnectWithoutScenesInput = {
    where: segmentsWhereUniqueInput
    create: XOR<segmentsCreateWithoutScenesInput, segmentsUncheckedCreateWithoutScenesInput>
  }

  export type segmentsCreateManyScenesInputEnvelope = {
    data: segmentsCreateManyScenesInput | segmentsCreateManyScenesInput[]
    skipDuplicates?: boolean
  }

  export type user_scenesCreateWithoutScenesInput = {
    created_at: Date | string
    updated_at: Date | string
    users: usersCreateNestedOneWithoutUser_scenesInput
  }

  export type user_scenesUncheckedCreateWithoutScenesInput = {
    id?: number
    user_id: number
    created_at: Date | string
    updated_at: Date | string
  }

  export type user_scenesCreateOrConnectWithoutScenesInput = {
    where: user_scenesWhereUniqueInput
    create: XOR<user_scenesCreateWithoutScenesInput, user_scenesUncheckedCreateWithoutScenesInput>
  }

  export type user_scenesCreateManyScenesInputEnvelope = {
    data: user_scenesCreateManyScenesInput | user_scenesCreateManyScenesInput[]
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

  export type user_scenesUpsertWithWhereUniqueWithoutScenesInput = {
    where: user_scenesWhereUniqueInput
    update: XOR<user_scenesUpdateWithoutScenesInput, user_scenesUncheckedUpdateWithoutScenesInput>
    create: XOR<user_scenesCreateWithoutScenesInput, user_scenesUncheckedCreateWithoutScenesInput>
  }

  export type user_scenesUpdateWithWhereUniqueWithoutScenesInput = {
    where: user_scenesWhereUniqueInput
    data: XOR<user_scenesUpdateWithoutScenesInput, user_scenesUncheckedUpdateWithoutScenesInput>
  }

  export type user_scenesUpdateManyWithWhereWithoutScenesInput = {
    where: user_scenesScalarWhereInput
    data: XOR<user_scenesUpdateManyMutationInput, user_scenesUncheckedUpdateManyWithoutScenesInput>
  }

  export type user_scenesScalarWhereInput = {
    AND?: user_scenesScalarWhereInput | user_scenesScalarWhereInput[]
    OR?: user_scenesScalarWhereInput[]
    NOT?: user_scenesScalarWhereInput | user_scenesScalarWhereInput[]
    id?: IntFilter<"user_scenes"> | number
    user_id?: IntFilter<"user_scenes"> | number
    scene_id?: IntFilter<"user_scenes"> | number
    created_at?: DateTimeFilter<"user_scenes"> | Date | string
    updated_at?: DateTimeFilter<"user_scenes"> | Date | string
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

  export type user_segmentsCreateWithoutSegmentsInput = {
    data?: NullableJsonNullValueInput | InputJsonValue
    created_at: Date | string
    updated_at: Date | string
    users: usersCreateNestedOneWithoutUser_segmentsInput
  }

  export type user_segmentsUncheckedCreateWithoutSegmentsInput = {
    id?: number
    user_id: number
    data?: NullableJsonNullValueInput | InputJsonValue
    created_at: Date | string
    updated_at: Date | string
  }

  export type user_segmentsCreateOrConnectWithoutSegmentsInput = {
    where: user_segmentsWhereUniqueInput
    create: XOR<user_segmentsCreateWithoutSegmentsInput, user_segmentsUncheckedCreateWithoutSegmentsInput>
  }

  export type user_segmentsCreateManySegmentsInputEnvelope = {
    data: user_segmentsCreateManySegmentsInput | user_segmentsCreateManySegmentsInput[]
    skipDuplicates?: boolean
  }

  export type scenesCreateWithoutSegmentsInput = {
    order: number
    archived?: boolean
    successSceneId?: number | null
    failureSceneId?: number | null
    created_at: Date | string
    updated_at: Date | string
    user_scenes?: user_scenesCreateNestedManyWithoutScenesInput
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
    user_scenes?: user_scenesUncheckedCreateNestedManyWithoutScenesInput
  }

  export type scenesCreateOrConnectWithoutSegmentsInput = {
    where: scenesWhereUniqueInput
    create: XOR<scenesCreateWithoutSegmentsInput, scenesUncheckedCreateWithoutSegmentsInput>
  }

  export type user_segmentsUpsertWithWhereUniqueWithoutSegmentsInput = {
    where: user_segmentsWhereUniqueInput
    update: XOR<user_segmentsUpdateWithoutSegmentsInput, user_segmentsUncheckedUpdateWithoutSegmentsInput>
    create: XOR<user_segmentsCreateWithoutSegmentsInput, user_segmentsUncheckedCreateWithoutSegmentsInput>
  }

  export type user_segmentsUpdateWithWhereUniqueWithoutSegmentsInput = {
    where: user_segmentsWhereUniqueInput
    data: XOR<user_segmentsUpdateWithoutSegmentsInput, user_segmentsUncheckedUpdateWithoutSegmentsInput>
  }

  export type user_segmentsUpdateManyWithWhereWithoutSegmentsInput = {
    where: user_segmentsScalarWhereInput
    data: XOR<user_segmentsUpdateManyMutationInput, user_segmentsUncheckedUpdateManyWithoutSegmentsInput>
  }

  export type user_segmentsScalarWhereInput = {
    AND?: user_segmentsScalarWhereInput | user_segmentsScalarWhereInput[]
    OR?: user_segmentsScalarWhereInput[]
    NOT?: user_segmentsScalarWhereInput | user_segmentsScalarWhereInput[]
    id?: IntFilter<"user_segments"> | number
    user_id?: IntFilter<"user_segments"> | number
    segment_id?: IntFilter<"user_segments"> | number
    data?: JsonNullableFilter<"user_segments">
    created_at?: DateTimeFilter<"user_segments"> | Date | string
    updated_at?: DateTimeFilter<"user_segments"> | Date | string
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
    user_scenes?: user_scenesUpdateManyWithoutScenesNestedInput
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
    user_scenes?: user_scenesUncheckedUpdateManyWithoutScenesNestedInput
  }

  export type user_scenesCreateWithoutUsersInput = {
    created_at: Date | string
    updated_at: Date | string
    scenes: scenesCreateNestedOneWithoutUser_scenesInput
  }

  export type user_scenesUncheckedCreateWithoutUsersInput = {
    id?: number
    scene_id: number
    created_at: Date | string
    updated_at: Date | string
  }

  export type user_scenesCreateOrConnectWithoutUsersInput = {
    where: user_scenesWhereUniqueInput
    create: XOR<user_scenesCreateWithoutUsersInput, user_scenesUncheckedCreateWithoutUsersInput>
  }

  export type user_scenesCreateManyUsersInputEnvelope = {
    data: user_scenesCreateManyUsersInput | user_scenesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type user_segmentsCreateWithoutUsersInput = {
    data?: NullableJsonNullValueInput | InputJsonValue
    created_at: Date | string
    updated_at: Date | string
    segments: segmentsCreateNestedOneWithoutUser_segmentsInput
  }

  export type user_segmentsUncheckedCreateWithoutUsersInput = {
    id?: number
    segment_id: number
    data?: NullableJsonNullValueInput | InputJsonValue
    created_at: Date | string
    updated_at: Date | string
  }

  export type user_segmentsCreateOrConnectWithoutUsersInput = {
    where: user_segmentsWhereUniqueInput
    create: XOR<user_segmentsCreateWithoutUsersInput, user_segmentsUncheckedCreateWithoutUsersInput>
  }

  export type user_segmentsCreateManyUsersInputEnvelope = {
    data: user_segmentsCreateManyUsersInput | user_segmentsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type user_scenesUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_scenesWhereUniqueInput
    update: XOR<user_scenesUpdateWithoutUsersInput, user_scenesUncheckedUpdateWithoutUsersInput>
    create: XOR<user_scenesCreateWithoutUsersInput, user_scenesUncheckedCreateWithoutUsersInput>
  }

  export type user_scenesUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_scenesWhereUniqueInput
    data: XOR<user_scenesUpdateWithoutUsersInput, user_scenesUncheckedUpdateWithoutUsersInput>
  }

  export type user_scenesUpdateManyWithWhereWithoutUsersInput = {
    where: user_scenesScalarWhereInput
    data: XOR<user_scenesUpdateManyMutationInput, user_scenesUncheckedUpdateManyWithoutUsersInput>
  }

  export type user_segmentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_segmentsWhereUniqueInput
    update: XOR<user_segmentsUpdateWithoutUsersInput, user_segmentsUncheckedUpdateWithoutUsersInput>
    create: XOR<user_segmentsCreateWithoutUsersInput, user_segmentsUncheckedCreateWithoutUsersInput>
  }

  export type user_segmentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_segmentsWhereUniqueInput
    data: XOR<user_segmentsUpdateWithoutUsersInput, user_segmentsUncheckedUpdateWithoutUsersInput>
  }

  export type user_segmentsUpdateManyWithWhereWithoutUsersInput = {
    where: user_segmentsScalarWhereInput
    data: XOR<user_segmentsUpdateManyMutationInput, user_segmentsUncheckedUpdateManyWithoutUsersInput>
  }

  export type usersCreateWithoutUser_scenesInput = {
    name: string
    email: string
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_segments?: user_segmentsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_scenesInput = {
    id?: number
    name: string
    email: string
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_segments?: user_segmentsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_scenesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_scenesInput, usersUncheckedCreateWithoutUser_scenesInput>
  }

  export type scenesCreateWithoutUser_scenesInput = {
    order: number
    archived?: boolean
    successSceneId?: number | null
    failureSceneId?: number | null
    created_at: Date | string
    updated_at: Date | string
    segments?: segmentsCreateNestedManyWithoutScenesInput
    lectures: lecturesCreateNestedOneWithoutScenesInput
  }

  export type scenesUncheckedCreateWithoutUser_scenesInput = {
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

  export type scenesCreateOrConnectWithoutUser_scenesInput = {
    where: scenesWhereUniqueInput
    create: XOR<scenesCreateWithoutUser_scenesInput, scenesUncheckedCreateWithoutUser_scenesInput>
  }

  export type usersUpsertWithoutUser_scenesInput = {
    update: XOR<usersUpdateWithoutUser_scenesInput, usersUncheckedUpdateWithoutUser_scenesInput>
    create: XOR<usersCreateWithoutUser_scenesInput, usersUncheckedCreateWithoutUser_scenesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_scenesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_scenesInput, usersUncheckedUpdateWithoutUser_scenesInput>
  }

  export type usersUpdateWithoutUser_scenesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_segments?: user_segmentsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_scenesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_segments?: user_segmentsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type scenesUpsertWithoutUser_scenesInput = {
    update: XOR<scenesUpdateWithoutUser_scenesInput, scenesUncheckedUpdateWithoutUser_scenesInput>
    create: XOR<scenesCreateWithoutUser_scenesInput, scenesUncheckedCreateWithoutUser_scenesInput>
    where?: scenesWhereInput
  }

  export type scenesUpdateToOneWithWhereWithoutUser_scenesInput = {
    where?: scenesWhereInput
    data: XOR<scenesUpdateWithoutUser_scenesInput, scenesUncheckedUpdateWithoutUser_scenesInput>
  }

  export type scenesUpdateWithoutUser_scenesInput = {
    order?: IntFieldUpdateOperationsInput | number
    archived?: BoolFieldUpdateOperationsInput | boolean
    successSceneId?: NullableIntFieldUpdateOperationsInput | number | null
    failureSceneId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    segments?: segmentsUpdateManyWithoutScenesNestedInput
    lectures?: lecturesUpdateOneRequiredWithoutScenesNestedInput
  }

  export type scenesUncheckedUpdateWithoutUser_scenesInput = {
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

  export type usersCreateWithoutUser_segmentsInput = {
    name: string
    email: string
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_scenes?: user_scenesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_segmentsInput = {
    id?: number
    name: string
    email: string
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_scenes?: user_scenesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_segmentsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_segmentsInput, usersUncheckedCreateWithoutUser_segmentsInput>
  }

  export type segmentsCreateWithoutUser_segmentsInput = {
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

  export type segmentsUncheckedCreateWithoutUser_segmentsInput = {
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

  export type segmentsCreateOrConnectWithoutUser_segmentsInput = {
    where: segmentsWhereUniqueInput
    create: XOR<segmentsCreateWithoutUser_segmentsInput, segmentsUncheckedCreateWithoutUser_segmentsInput>
  }

  export type usersUpsertWithoutUser_segmentsInput = {
    update: XOR<usersUpdateWithoutUser_segmentsInput, usersUncheckedUpdateWithoutUser_segmentsInput>
    create: XOR<usersCreateWithoutUser_segmentsInput, usersUncheckedCreateWithoutUser_segmentsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_segmentsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_segmentsInput, usersUncheckedUpdateWithoutUser_segmentsInput>
  }

  export type usersUpdateWithoutUser_segmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_scenes?: user_scenesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_segmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_scenes?: user_scenesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type segmentsUpsertWithoutUser_segmentsInput = {
    update: XOR<segmentsUpdateWithoutUser_segmentsInput, segmentsUncheckedUpdateWithoutUser_segmentsInput>
    create: XOR<segmentsCreateWithoutUser_segmentsInput, segmentsUncheckedCreateWithoutUser_segmentsInput>
    where?: segmentsWhereInput
  }

  export type segmentsUpdateToOneWithWhereWithoutUser_segmentsInput = {
    where?: segmentsWhereInput
    data: XOR<segmentsUpdateWithoutUser_segmentsInput, segmentsUncheckedUpdateWithoutUser_segmentsInput>
  }

  export type segmentsUpdateWithoutUser_segmentsInput = {
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

  export type segmentsUncheckedUpdateWithoutUser_segmentsInput = {
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
    user_scenes?: user_scenesUpdateManyWithoutScenesNestedInput
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
    user_scenes?: user_scenesUncheckedUpdateManyWithoutScenesNestedInput
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

  export type user_scenesCreateManyScenesInput = {
    id?: number
    user_id: number
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
    user_segments?: user_segmentsUpdateManyWithoutSegmentsNestedInput
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
    user_segments?: user_segmentsUncheckedUpdateManyWithoutSegmentsNestedInput
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

  export type user_scenesUpdateWithoutScenesInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutUser_scenesNestedInput
  }

  export type user_scenesUncheckedUpdateWithoutScenesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_scenesUncheckedUpdateManyWithoutScenesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_segmentsCreateManySegmentsInput = {
    id?: number
    user_id: number
    data?: NullableJsonNullValueInput | InputJsonValue
    created_at: Date | string
    updated_at: Date | string
  }

  export type user_segmentsUpdateWithoutSegmentsInput = {
    data?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutUser_segmentsNestedInput
  }

  export type user_segmentsUncheckedUpdateWithoutSegmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    data?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_segmentsUncheckedUpdateManyWithoutSegmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    data?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_scenesCreateManyUsersInput = {
    id?: number
    scene_id: number
    created_at: Date | string
    updated_at: Date | string
  }

  export type user_segmentsCreateManyUsersInput = {
    id?: number
    segment_id: number
    data?: NullableJsonNullValueInput | InputJsonValue
    created_at: Date | string
    updated_at: Date | string
  }

  export type user_scenesUpdateWithoutUsersInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    scenes?: scenesUpdateOneRequiredWithoutUser_scenesNestedInput
  }

  export type user_scenesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    scene_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_scenesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    scene_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_segmentsUpdateWithoutUsersInput = {
    data?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    segments?: segmentsUpdateOneRequiredWithoutUser_segmentsNestedInput
  }

  export type user_segmentsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    segment_id?: IntFieldUpdateOperationsInput | number
    data?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_segmentsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    segment_id?: IntFieldUpdateOperationsInput | number
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
     * @deprecated Use SegmentsCountOutputTypeDefaultArgs instead
     */
    export type SegmentsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SegmentsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
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
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use user_scenesDefaultArgs instead
     */
    export type user_scenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = user_scenesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use user_segmentsDefaultArgs instead
     */
    export type user_segmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = user_segmentsDefaultArgs<ExtArgs>

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