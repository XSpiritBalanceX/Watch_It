
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model WatchedItem
 * 
 */
export type WatchedItem = $Result.DefaultSelection<Prisma.$WatchedItemPayload>
/**
 * Model ToWatchItem
 * 
 */
export type ToWatchItem = $Result.DefaultSelection<Prisma.$ToWatchItemPayload>
/**
 * Model WatchingItem
 * 
 */
export type WatchingItem = $Result.DefaultSelection<Prisma.$WatchingItemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.watchedItem`: Exposes CRUD operations for the **WatchedItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WatchedItems
    * const watchedItems = await prisma.watchedItem.findMany()
    * ```
    */
  get watchedItem(): Prisma.WatchedItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.toWatchItem`: Exposes CRUD operations for the **ToWatchItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ToWatchItems
    * const toWatchItems = await prisma.toWatchItem.findMany()
    * ```
    */
  get toWatchItem(): Prisma.ToWatchItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.watchingItem`: Exposes CRUD operations for the **WatchingItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WatchingItems
    * const watchingItems = await prisma.watchingItem.findMany()
    * ```
    */
  get watchingItem(): Prisma.WatchingItemDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    WatchedItem: 'WatchedItem',
    ToWatchItem: 'ToWatchItem',
    WatchingItem: 'WatchingItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "watchedItem" | "toWatchItem" | "watchingItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      WatchedItem: {
        payload: Prisma.$WatchedItemPayload<ExtArgs>
        fields: Prisma.WatchedItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WatchedItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WatchedItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedItemPayload>
          }
          findFirst: {
            args: Prisma.WatchedItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WatchedItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedItemPayload>
          }
          findMany: {
            args: Prisma.WatchedItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedItemPayload>[]
          }
          create: {
            args: Prisma.WatchedItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedItemPayload>
          }
          createMany: {
            args: Prisma.WatchedItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WatchedItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedItemPayload>[]
          }
          delete: {
            args: Prisma.WatchedItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedItemPayload>
          }
          update: {
            args: Prisma.WatchedItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedItemPayload>
          }
          deleteMany: {
            args: Prisma.WatchedItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WatchedItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WatchedItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedItemPayload>[]
          }
          upsert: {
            args: Prisma.WatchedItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedItemPayload>
          }
          aggregate: {
            args: Prisma.WatchedItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWatchedItem>
          }
          groupBy: {
            args: Prisma.WatchedItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<WatchedItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.WatchedItemCountArgs<ExtArgs>
            result: $Utils.Optional<WatchedItemCountAggregateOutputType> | number
          }
        }
      }
      ToWatchItem: {
        payload: Prisma.$ToWatchItemPayload<ExtArgs>
        fields: Prisma.ToWatchItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ToWatchItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToWatchItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ToWatchItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToWatchItemPayload>
          }
          findFirst: {
            args: Prisma.ToWatchItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToWatchItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ToWatchItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToWatchItemPayload>
          }
          findMany: {
            args: Prisma.ToWatchItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToWatchItemPayload>[]
          }
          create: {
            args: Prisma.ToWatchItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToWatchItemPayload>
          }
          createMany: {
            args: Prisma.ToWatchItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ToWatchItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToWatchItemPayload>[]
          }
          delete: {
            args: Prisma.ToWatchItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToWatchItemPayload>
          }
          update: {
            args: Prisma.ToWatchItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToWatchItemPayload>
          }
          deleteMany: {
            args: Prisma.ToWatchItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ToWatchItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ToWatchItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToWatchItemPayload>[]
          }
          upsert: {
            args: Prisma.ToWatchItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToWatchItemPayload>
          }
          aggregate: {
            args: Prisma.ToWatchItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToWatchItem>
          }
          groupBy: {
            args: Prisma.ToWatchItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ToWatchItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ToWatchItemCountArgs<ExtArgs>
            result: $Utils.Optional<ToWatchItemCountAggregateOutputType> | number
          }
        }
      }
      WatchingItem: {
        payload: Prisma.$WatchingItemPayload<ExtArgs>
        fields: Prisma.WatchingItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WatchingItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchingItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WatchingItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchingItemPayload>
          }
          findFirst: {
            args: Prisma.WatchingItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchingItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WatchingItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchingItemPayload>
          }
          findMany: {
            args: Prisma.WatchingItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchingItemPayload>[]
          }
          create: {
            args: Prisma.WatchingItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchingItemPayload>
          }
          createMany: {
            args: Prisma.WatchingItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WatchingItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchingItemPayload>[]
          }
          delete: {
            args: Prisma.WatchingItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchingItemPayload>
          }
          update: {
            args: Prisma.WatchingItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchingItemPayload>
          }
          deleteMany: {
            args: Prisma.WatchingItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WatchingItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WatchingItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchingItemPayload>[]
          }
          upsert: {
            args: Prisma.WatchingItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchingItemPayload>
          }
          aggregate: {
            args: Prisma.WatchingItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWatchingItem>
          }
          groupBy: {
            args: Prisma.WatchingItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<WatchingItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.WatchingItemCountArgs<ExtArgs>
            result: $Utils.Optional<WatchingItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    watchedItem?: WatchedItemOmit
    toWatchItem?: ToWatchItemOmit
    watchingItem?: WatchingItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    watchedItems: number
    toWatchItems: number
    watchingItems: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watchedItems?: boolean | UserCountOutputTypeCountWatchedItemsArgs
    toWatchItems?: boolean | UserCountOutputTypeCountToWatchItemsArgs
    watchingItems?: boolean | UserCountOutputTypeCountWatchingItemsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWatchedItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchedItemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountToWatchItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToWatchItemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWatchingItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchingItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    name: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    name: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    email: number
    name: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    email: string
    name: string | null
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    watchedItems?: boolean | User$watchedItemsArgs<ExtArgs>
    toWatchItems?: boolean | User$toWatchItemsArgs<ExtArgs>
    watchingItems?: boolean | User$watchingItemsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "email" | "name" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watchedItems?: boolean | User$watchedItemsArgs<ExtArgs>
    toWatchItems?: boolean | User$toWatchItemsArgs<ExtArgs>
    watchingItems?: boolean | User$watchingItemsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      watchedItems: Prisma.$WatchedItemPayload<ExtArgs>[]
      toWatchItems: Prisma.$ToWatchItemPayload<ExtArgs>[]
      watchingItems: Prisma.$WatchingItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      email: string
      name: string | null
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    watchedItems<T extends User$watchedItemsArgs<ExtArgs> = {}>(args?: Subset<T, User$watchedItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchedItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    toWatchItems<T extends User$toWatchItemsArgs<ExtArgs> = {}>(args?: Subset<T, User$toWatchItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToWatchItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    watchingItems<T extends User$watchingItemsArgs<ExtArgs> = {}>(args?: Subset<T, User$watchingItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchingItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.watchedItems
   */
  export type User$watchedItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchedItem
     */
    select?: WatchedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchedItem
     */
    omit?: WatchedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedItemInclude<ExtArgs> | null
    where?: WatchedItemWhereInput
    orderBy?: WatchedItemOrderByWithRelationInput | WatchedItemOrderByWithRelationInput[]
    cursor?: WatchedItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchedItemScalarFieldEnum | WatchedItemScalarFieldEnum[]
  }

  /**
   * User.toWatchItems
   */
  export type User$toWatchItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToWatchItem
     */
    select?: ToWatchItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToWatchItem
     */
    omit?: ToWatchItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToWatchItemInclude<ExtArgs> | null
    where?: ToWatchItemWhereInput
    orderBy?: ToWatchItemOrderByWithRelationInput | ToWatchItemOrderByWithRelationInput[]
    cursor?: ToWatchItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ToWatchItemScalarFieldEnum | ToWatchItemScalarFieldEnum[]
  }

  /**
   * User.watchingItems
   */
  export type User$watchingItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchingItem
     */
    select?: WatchingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchingItem
     */
    omit?: WatchingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchingItemInclude<ExtArgs> | null
    where?: WatchingItemWhereInput
    orderBy?: WatchingItemOrderByWithRelationInput | WatchingItemOrderByWithRelationInput[]
    cursor?: WatchingItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchingItemScalarFieldEnum | WatchingItemScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model WatchedItem
   */

  export type AggregateWatchedItem = {
    _count: WatchedItemCountAggregateOutputType | null
    _avg: WatchedItemAvgAggregateOutputType | null
    _sum: WatchedItemSumAggregateOutputType | null
    _min: WatchedItemMinAggregateOutputType | null
    _max: WatchedItemMaxAggregateOutputType | null
  }

  export type WatchedItemAvgAggregateOutputType = {
    releaseYear: number | null
  }

  export type WatchedItemSumAggregateOutputType = {
    releaseYear: number | null
  }

  export type WatchedItemMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    title: string | null
    type: string | null
    director: string | null
    releaseYear: number | null
    userId: string | null
  }

  export type WatchedItemMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    title: string | null
    type: string | null
    director: string | null
    releaseYear: number | null
    userId: string | null
  }

  export type WatchedItemCountAggregateOutputType = {
    id: number
    createdAt: number
    title: number
    type: number
    director: number
    releaseYear: number
    userId: number
    _all: number
  }


  export type WatchedItemAvgAggregateInputType = {
    releaseYear?: true
  }

  export type WatchedItemSumAggregateInputType = {
    releaseYear?: true
  }

  export type WatchedItemMinAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    type?: true
    director?: true
    releaseYear?: true
    userId?: true
  }

  export type WatchedItemMaxAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    type?: true
    director?: true
    releaseYear?: true
    userId?: true
  }

  export type WatchedItemCountAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    type?: true
    director?: true
    releaseYear?: true
    userId?: true
    _all?: true
  }

  export type WatchedItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WatchedItem to aggregate.
     */
    where?: WatchedItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchedItems to fetch.
     */
    orderBy?: WatchedItemOrderByWithRelationInput | WatchedItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WatchedItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WatchedItems
    **/
    _count?: true | WatchedItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WatchedItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WatchedItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WatchedItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WatchedItemMaxAggregateInputType
  }

  export type GetWatchedItemAggregateType<T extends WatchedItemAggregateArgs> = {
        [P in keyof T & keyof AggregateWatchedItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWatchedItem[P]>
      : GetScalarType<T[P], AggregateWatchedItem[P]>
  }




  export type WatchedItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchedItemWhereInput
    orderBy?: WatchedItemOrderByWithAggregationInput | WatchedItemOrderByWithAggregationInput[]
    by: WatchedItemScalarFieldEnum[] | WatchedItemScalarFieldEnum
    having?: WatchedItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WatchedItemCountAggregateInputType | true
    _avg?: WatchedItemAvgAggregateInputType
    _sum?: WatchedItemSumAggregateInputType
    _min?: WatchedItemMinAggregateInputType
    _max?: WatchedItemMaxAggregateInputType
  }

  export type WatchedItemGroupByOutputType = {
    id: string
    createdAt: Date
    title: string
    type: string
    director: string | null
    releaseYear: number | null
    userId: string
    _count: WatchedItemCountAggregateOutputType | null
    _avg: WatchedItemAvgAggregateOutputType | null
    _sum: WatchedItemSumAggregateOutputType | null
    _min: WatchedItemMinAggregateOutputType | null
    _max: WatchedItemMaxAggregateOutputType | null
  }

  type GetWatchedItemGroupByPayload<T extends WatchedItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WatchedItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WatchedItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WatchedItemGroupByOutputType[P]>
            : GetScalarType<T[P], WatchedItemGroupByOutputType[P]>
        }
      >
    >


  export type WatchedItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    title?: boolean
    type?: boolean
    director?: boolean
    releaseYear?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchedItem"]>

  export type WatchedItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    title?: boolean
    type?: boolean
    director?: boolean
    releaseYear?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchedItem"]>

  export type WatchedItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    title?: boolean
    type?: boolean
    director?: boolean
    releaseYear?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchedItem"]>

  export type WatchedItemSelectScalar = {
    id?: boolean
    createdAt?: boolean
    title?: boolean
    type?: boolean
    director?: boolean
    releaseYear?: boolean
    userId?: boolean
  }

  export type WatchedItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "title" | "type" | "director" | "releaseYear" | "userId", ExtArgs["result"]["watchedItem"]>
  export type WatchedItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WatchedItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WatchedItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WatchedItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WatchedItem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      title: string
      type: string
      director: string | null
      releaseYear: number | null
      userId: string
    }, ExtArgs["result"]["watchedItem"]>
    composites: {}
  }

  type WatchedItemGetPayload<S extends boolean | null | undefined | WatchedItemDefaultArgs> = $Result.GetResult<Prisma.$WatchedItemPayload, S>

  type WatchedItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WatchedItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WatchedItemCountAggregateInputType | true
    }

  export interface WatchedItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WatchedItem'], meta: { name: 'WatchedItem' } }
    /**
     * Find zero or one WatchedItem that matches the filter.
     * @param {WatchedItemFindUniqueArgs} args - Arguments to find a WatchedItem
     * @example
     * // Get one WatchedItem
     * const watchedItem = await prisma.watchedItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WatchedItemFindUniqueArgs>(args: SelectSubset<T, WatchedItemFindUniqueArgs<ExtArgs>>): Prisma__WatchedItemClient<$Result.GetResult<Prisma.$WatchedItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WatchedItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WatchedItemFindUniqueOrThrowArgs} args - Arguments to find a WatchedItem
     * @example
     * // Get one WatchedItem
     * const watchedItem = await prisma.watchedItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WatchedItemFindUniqueOrThrowArgs>(args: SelectSubset<T, WatchedItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WatchedItemClient<$Result.GetResult<Prisma.$WatchedItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WatchedItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchedItemFindFirstArgs} args - Arguments to find a WatchedItem
     * @example
     * // Get one WatchedItem
     * const watchedItem = await prisma.watchedItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WatchedItemFindFirstArgs>(args?: SelectSubset<T, WatchedItemFindFirstArgs<ExtArgs>>): Prisma__WatchedItemClient<$Result.GetResult<Prisma.$WatchedItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WatchedItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchedItemFindFirstOrThrowArgs} args - Arguments to find a WatchedItem
     * @example
     * // Get one WatchedItem
     * const watchedItem = await prisma.watchedItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WatchedItemFindFirstOrThrowArgs>(args?: SelectSubset<T, WatchedItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__WatchedItemClient<$Result.GetResult<Prisma.$WatchedItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WatchedItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchedItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WatchedItems
     * const watchedItems = await prisma.watchedItem.findMany()
     * 
     * // Get first 10 WatchedItems
     * const watchedItems = await prisma.watchedItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const watchedItemWithIdOnly = await prisma.watchedItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WatchedItemFindManyArgs>(args?: SelectSubset<T, WatchedItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchedItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WatchedItem.
     * @param {WatchedItemCreateArgs} args - Arguments to create a WatchedItem.
     * @example
     * // Create one WatchedItem
     * const WatchedItem = await prisma.watchedItem.create({
     *   data: {
     *     // ... data to create a WatchedItem
     *   }
     * })
     * 
     */
    create<T extends WatchedItemCreateArgs>(args: SelectSubset<T, WatchedItemCreateArgs<ExtArgs>>): Prisma__WatchedItemClient<$Result.GetResult<Prisma.$WatchedItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WatchedItems.
     * @param {WatchedItemCreateManyArgs} args - Arguments to create many WatchedItems.
     * @example
     * // Create many WatchedItems
     * const watchedItem = await prisma.watchedItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WatchedItemCreateManyArgs>(args?: SelectSubset<T, WatchedItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WatchedItems and returns the data saved in the database.
     * @param {WatchedItemCreateManyAndReturnArgs} args - Arguments to create many WatchedItems.
     * @example
     * // Create many WatchedItems
     * const watchedItem = await prisma.watchedItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WatchedItems and only return the `id`
     * const watchedItemWithIdOnly = await prisma.watchedItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WatchedItemCreateManyAndReturnArgs>(args?: SelectSubset<T, WatchedItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchedItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WatchedItem.
     * @param {WatchedItemDeleteArgs} args - Arguments to delete one WatchedItem.
     * @example
     * // Delete one WatchedItem
     * const WatchedItem = await prisma.watchedItem.delete({
     *   where: {
     *     // ... filter to delete one WatchedItem
     *   }
     * })
     * 
     */
    delete<T extends WatchedItemDeleteArgs>(args: SelectSubset<T, WatchedItemDeleteArgs<ExtArgs>>): Prisma__WatchedItemClient<$Result.GetResult<Prisma.$WatchedItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WatchedItem.
     * @param {WatchedItemUpdateArgs} args - Arguments to update one WatchedItem.
     * @example
     * // Update one WatchedItem
     * const watchedItem = await prisma.watchedItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WatchedItemUpdateArgs>(args: SelectSubset<T, WatchedItemUpdateArgs<ExtArgs>>): Prisma__WatchedItemClient<$Result.GetResult<Prisma.$WatchedItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WatchedItems.
     * @param {WatchedItemDeleteManyArgs} args - Arguments to filter WatchedItems to delete.
     * @example
     * // Delete a few WatchedItems
     * const { count } = await prisma.watchedItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WatchedItemDeleteManyArgs>(args?: SelectSubset<T, WatchedItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WatchedItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchedItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WatchedItems
     * const watchedItem = await prisma.watchedItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WatchedItemUpdateManyArgs>(args: SelectSubset<T, WatchedItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WatchedItems and returns the data updated in the database.
     * @param {WatchedItemUpdateManyAndReturnArgs} args - Arguments to update many WatchedItems.
     * @example
     * // Update many WatchedItems
     * const watchedItem = await prisma.watchedItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WatchedItems and only return the `id`
     * const watchedItemWithIdOnly = await prisma.watchedItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WatchedItemUpdateManyAndReturnArgs>(args: SelectSubset<T, WatchedItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchedItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WatchedItem.
     * @param {WatchedItemUpsertArgs} args - Arguments to update or create a WatchedItem.
     * @example
     * // Update or create a WatchedItem
     * const watchedItem = await prisma.watchedItem.upsert({
     *   create: {
     *     // ... data to create a WatchedItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WatchedItem we want to update
     *   }
     * })
     */
    upsert<T extends WatchedItemUpsertArgs>(args: SelectSubset<T, WatchedItemUpsertArgs<ExtArgs>>): Prisma__WatchedItemClient<$Result.GetResult<Prisma.$WatchedItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WatchedItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchedItemCountArgs} args - Arguments to filter WatchedItems to count.
     * @example
     * // Count the number of WatchedItems
     * const count = await prisma.watchedItem.count({
     *   where: {
     *     // ... the filter for the WatchedItems we want to count
     *   }
     * })
    **/
    count<T extends WatchedItemCountArgs>(
      args?: Subset<T, WatchedItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WatchedItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WatchedItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchedItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WatchedItemAggregateArgs>(args: Subset<T, WatchedItemAggregateArgs>): Prisma.PrismaPromise<GetWatchedItemAggregateType<T>>

    /**
     * Group by WatchedItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchedItemGroupByArgs} args - Group by arguments.
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
      T extends WatchedItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WatchedItemGroupByArgs['orderBy'] }
        : { orderBy?: WatchedItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WatchedItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatchedItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WatchedItem model
   */
  readonly fields: WatchedItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WatchedItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WatchedItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WatchedItem model
   */
  interface WatchedItemFieldRefs {
    readonly id: FieldRef<"WatchedItem", 'String'>
    readonly createdAt: FieldRef<"WatchedItem", 'DateTime'>
    readonly title: FieldRef<"WatchedItem", 'String'>
    readonly type: FieldRef<"WatchedItem", 'String'>
    readonly director: FieldRef<"WatchedItem", 'String'>
    readonly releaseYear: FieldRef<"WatchedItem", 'Int'>
    readonly userId: FieldRef<"WatchedItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WatchedItem findUnique
   */
  export type WatchedItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchedItem
     */
    select?: WatchedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchedItem
     */
    omit?: WatchedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedItemInclude<ExtArgs> | null
    /**
     * Filter, which WatchedItem to fetch.
     */
    where: WatchedItemWhereUniqueInput
  }

  /**
   * WatchedItem findUniqueOrThrow
   */
  export type WatchedItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchedItem
     */
    select?: WatchedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchedItem
     */
    omit?: WatchedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedItemInclude<ExtArgs> | null
    /**
     * Filter, which WatchedItem to fetch.
     */
    where: WatchedItemWhereUniqueInput
  }

  /**
   * WatchedItem findFirst
   */
  export type WatchedItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchedItem
     */
    select?: WatchedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchedItem
     */
    omit?: WatchedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedItemInclude<ExtArgs> | null
    /**
     * Filter, which WatchedItem to fetch.
     */
    where?: WatchedItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchedItems to fetch.
     */
    orderBy?: WatchedItemOrderByWithRelationInput | WatchedItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WatchedItems.
     */
    cursor?: WatchedItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WatchedItems.
     */
    distinct?: WatchedItemScalarFieldEnum | WatchedItemScalarFieldEnum[]
  }

  /**
   * WatchedItem findFirstOrThrow
   */
  export type WatchedItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchedItem
     */
    select?: WatchedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchedItem
     */
    omit?: WatchedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedItemInclude<ExtArgs> | null
    /**
     * Filter, which WatchedItem to fetch.
     */
    where?: WatchedItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchedItems to fetch.
     */
    orderBy?: WatchedItemOrderByWithRelationInput | WatchedItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WatchedItems.
     */
    cursor?: WatchedItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WatchedItems.
     */
    distinct?: WatchedItemScalarFieldEnum | WatchedItemScalarFieldEnum[]
  }

  /**
   * WatchedItem findMany
   */
  export type WatchedItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchedItem
     */
    select?: WatchedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchedItem
     */
    omit?: WatchedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedItemInclude<ExtArgs> | null
    /**
     * Filter, which WatchedItems to fetch.
     */
    where?: WatchedItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchedItems to fetch.
     */
    orderBy?: WatchedItemOrderByWithRelationInput | WatchedItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WatchedItems.
     */
    cursor?: WatchedItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchedItems.
     */
    skip?: number
    distinct?: WatchedItemScalarFieldEnum | WatchedItemScalarFieldEnum[]
  }

  /**
   * WatchedItem create
   */
  export type WatchedItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchedItem
     */
    select?: WatchedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchedItem
     */
    omit?: WatchedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedItemInclude<ExtArgs> | null
    /**
     * The data needed to create a WatchedItem.
     */
    data: XOR<WatchedItemCreateInput, WatchedItemUncheckedCreateInput>
  }

  /**
   * WatchedItem createMany
   */
  export type WatchedItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WatchedItems.
     */
    data: WatchedItemCreateManyInput | WatchedItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WatchedItem createManyAndReturn
   */
  export type WatchedItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchedItem
     */
    select?: WatchedItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WatchedItem
     */
    omit?: WatchedItemOmit<ExtArgs> | null
    /**
     * The data used to create many WatchedItems.
     */
    data: WatchedItemCreateManyInput | WatchedItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WatchedItem update
   */
  export type WatchedItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchedItem
     */
    select?: WatchedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchedItem
     */
    omit?: WatchedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedItemInclude<ExtArgs> | null
    /**
     * The data needed to update a WatchedItem.
     */
    data: XOR<WatchedItemUpdateInput, WatchedItemUncheckedUpdateInput>
    /**
     * Choose, which WatchedItem to update.
     */
    where: WatchedItemWhereUniqueInput
  }

  /**
   * WatchedItem updateMany
   */
  export type WatchedItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WatchedItems.
     */
    data: XOR<WatchedItemUpdateManyMutationInput, WatchedItemUncheckedUpdateManyInput>
    /**
     * Filter which WatchedItems to update
     */
    where?: WatchedItemWhereInput
  }

  /**
   * WatchedItem updateManyAndReturn
   */
  export type WatchedItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchedItem
     */
    select?: WatchedItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WatchedItem
     */
    omit?: WatchedItemOmit<ExtArgs> | null
    /**
     * The data used to update WatchedItems.
     */
    data: XOR<WatchedItemUpdateManyMutationInput, WatchedItemUncheckedUpdateManyInput>
    /**
     * Filter which WatchedItems to update
     */
    where?: WatchedItemWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WatchedItem upsert
   */
  export type WatchedItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchedItem
     */
    select?: WatchedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchedItem
     */
    omit?: WatchedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedItemInclude<ExtArgs> | null
    /**
     * The filter to search for the WatchedItem to update in case it exists.
     */
    where: WatchedItemWhereUniqueInput
    /**
     * In case the WatchedItem found by the `where` argument doesn't exist, create a new WatchedItem with this data.
     */
    create: XOR<WatchedItemCreateInput, WatchedItemUncheckedCreateInput>
    /**
     * In case the WatchedItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WatchedItemUpdateInput, WatchedItemUncheckedUpdateInput>
  }

  /**
   * WatchedItem delete
   */
  export type WatchedItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchedItem
     */
    select?: WatchedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchedItem
     */
    omit?: WatchedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedItemInclude<ExtArgs> | null
    /**
     * Filter which WatchedItem to delete.
     */
    where: WatchedItemWhereUniqueInput
  }

  /**
   * WatchedItem deleteMany
   */
  export type WatchedItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WatchedItems to delete
     */
    where?: WatchedItemWhereInput
  }

  /**
   * WatchedItem without action
   */
  export type WatchedItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchedItem
     */
    select?: WatchedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchedItem
     */
    omit?: WatchedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedItemInclude<ExtArgs> | null
  }


  /**
   * Model ToWatchItem
   */

  export type AggregateToWatchItem = {
    _count: ToWatchItemCountAggregateOutputType | null
    _avg: ToWatchItemAvgAggregateOutputType | null
    _sum: ToWatchItemSumAggregateOutputType | null
    _min: ToWatchItemMinAggregateOutputType | null
    _max: ToWatchItemMaxAggregateOutputType | null
  }

  export type ToWatchItemAvgAggregateOutputType = {
    releaseYear: number | null
  }

  export type ToWatchItemSumAggregateOutputType = {
    releaseYear: number | null
  }

  export type ToWatchItemMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    title: string | null
    type: string | null
    director: string | null
    releaseYear: number | null
    userId: string | null
  }

  export type ToWatchItemMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    title: string | null
    type: string | null
    director: string | null
    releaseYear: number | null
    userId: string | null
  }

  export type ToWatchItemCountAggregateOutputType = {
    id: number
    createdAt: number
    title: number
    type: number
    director: number
    releaseYear: number
    userId: number
    _all: number
  }


  export type ToWatchItemAvgAggregateInputType = {
    releaseYear?: true
  }

  export type ToWatchItemSumAggregateInputType = {
    releaseYear?: true
  }

  export type ToWatchItemMinAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    type?: true
    director?: true
    releaseYear?: true
    userId?: true
  }

  export type ToWatchItemMaxAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    type?: true
    director?: true
    releaseYear?: true
    userId?: true
  }

  export type ToWatchItemCountAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    type?: true
    director?: true
    releaseYear?: true
    userId?: true
    _all?: true
  }

  export type ToWatchItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ToWatchItem to aggregate.
     */
    where?: ToWatchItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToWatchItems to fetch.
     */
    orderBy?: ToWatchItemOrderByWithRelationInput | ToWatchItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ToWatchItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToWatchItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToWatchItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ToWatchItems
    **/
    _count?: true | ToWatchItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ToWatchItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ToWatchItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ToWatchItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ToWatchItemMaxAggregateInputType
  }

  export type GetToWatchItemAggregateType<T extends ToWatchItemAggregateArgs> = {
        [P in keyof T & keyof AggregateToWatchItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToWatchItem[P]>
      : GetScalarType<T[P], AggregateToWatchItem[P]>
  }




  export type ToWatchItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToWatchItemWhereInput
    orderBy?: ToWatchItemOrderByWithAggregationInput | ToWatchItemOrderByWithAggregationInput[]
    by: ToWatchItemScalarFieldEnum[] | ToWatchItemScalarFieldEnum
    having?: ToWatchItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ToWatchItemCountAggregateInputType | true
    _avg?: ToWatchItemAvgAggregateInputType
    _sum?: ToWatchItemSumAggregateInputType
    _min?: ToWatchItemMinAggregateInputType
    _max?: ToWatchItemMaxAggregateInputType
  }

  export type ToWatchItemGroupByOutputType = {
    id: string
    createdAt: Date
    title: string
    type: string
    director: string | null
    releaseYear: number | null
    userId: string
    _count: ToWatchItemCountAggregateOutputType | null
    _avg: ToWatchItemAvgAggregateOutputType | null
    _sum: ToWatchItemSumAggregateOutputType | null
    _min: ToWatchItemMinAggregateOutputType | null
    _max: ToWatchItemMaxAggregateOutputType | null
  }

  type GetToWatchItemGroupByPayload<T extends ToWatchItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ToWatchItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ToWatchItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ToWatchItemGroupByOutputType[P]>
            : GetScalarType<T[P], ToWatchItemGroupByOutputType[P]>
        }
      >
    >


  export type ToWatchItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    title?: boolean
    type?: boolean
    director?: boolean
    releaseYear?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toWatchItem"]>

  export type ToWatchItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    title?: boolean
    type?: boolean
    director?: boolean
    releaseYear?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toWatchItem"]>

  export type ToWatchItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    title?: boolean
    type?: boolean
    director?: boolean
    releaseYear?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toWatchItem"]>

  export type ToWatchItemSelectScalar = {
    id?: boolean
    createdAt?: boolean
    title?: boolean
    type?: boolean
    director?: boolean
    releaseYear?: boolean
    userId?: boolean
  }

  export type ToWatchItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "title" | "type" | "director" | "releaseYear" | "userId", ExtArgs["result"]["toWatchItem"]>
  export type ToWatchItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ToWatchItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ToWatchItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ToWatchItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ToWatchItem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      title: string
      type: string
      director: string | null
      releaseYear: number | null
      userId: string
    }, ExtArgs["result"]["toWatchItem"]>
    composites: {}
  }

  type ToWatchItemGetPayload<S extends boolean | null | undefined | ToWatchItemDefaultArgs> = $Result.GetResult<Prisma.$ToWatchItemPayload, S>

  type ToWatchItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ToWatchItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ToWatchItemCountAggregateInputType | true
    }

  export interface ToWatchItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ToWatchItem'], meta: { name: 'ToWatchItem' } }
    /**
     * Find zero or one ToWatchItem that matches the filter.
     * @param {ToWatchItemFindUniqueArgs} args - Arguments to find a ToWatchItem
     * @example
     * // Get one ToWatchItem
     * const toWatchItem = await prisma.toWatchItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ToWatchItemFindUniqueArgs>(args: SelectSubset<T, ToWatchItemFindUniqueArgs<ExtArgs>>): Prisma__ToWatchItemClient<$Result.GetResult<Prisma.$ToWatchItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ToWatchItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ToWatchItemFindUniqueOrThrowArgs} args - Arguments to find a ToWatchItem
     * @example
     * // Get one ToWatchItem
     * const toWatchItem = await prisma.toWatchItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ToWatchItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ToWatchItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ToWatchItemClient<$Result.GetResult<Prisma.$ToWatchItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ToWatchItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToWatchItemFindFirstArgs} args - Arguments to find a ToWatchItem
     * @example
     * // Get one ToWatchItem
     * const toWatchItem = await prisma.toWatchItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ToWatchItemFindFirstArgs>(args?: SelectSubset<T, ToWatchItemFindFirstArgs<ExtArgs>>): Prisma__ToWatchItemClient<$Result.GetResult<Prisma.$ToWatchItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ToWatchItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToWatchItemFindFirstOrThrowArgs} args - Arguments to find a ToWatchItem
     * @example
     * // Get one ToWatchItem
     * const toWatchItem = await prisma.toWatchItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ToWatchItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ToWatchItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ToWatchItemClient<$Result.GetResult<Prisma.$ToWatchItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ToWatchItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToWatchItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ToWatchItems
     * const toWatchItems = await prisma.toWatchItem.findMany()
     * 
     * // Get first 10 ToWatchItems
     * const toWatchItems = await prisma.toWatchItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const toWatchItemWithIdOnly = await prisma.toWatchItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ToWatchItemFindManyArgs>(args?: SelectSubset<T, ToWatchItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToWatchItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ToWatchItem.
     * @param {ToWatchItemCreateArgs} args - Arguments to create a ToWatchItem.
     * @example
     * // Create one ToWatchItem
     * const ToWatchItem = await prisma.toWatchItem.create({
     *   data: {
     *     // ... data to create a ToWatchItem
     *   }
     * })
     * 
     */
    create<T extends ToWatchItemCreateArgs>(args: SelectSubset<T, ToWatchItemCreateArgs<ExtArgs>>): Prisma__ToWatchItemClient<$Result.GetResult<Prisma.$ToWatchItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ToWatchItems.
     * @param {ToWatchItemCreateManyArgs} args - Arguments to create many ToWatchItems.
     * @example
     * // Create many ToWatchItems
     * const toWatchItem = await prisma.toWatchItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ToWatchItemCreateManyArgs>(args?: SelectSubset<T, ToWatchItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ToWatchItems and returns the data saved in the database.
     * @param {ToWatchItemCreateManyAndReturnArgs} args - Arguments to create many ToWatchItems.
     * @example
     * // Create many ToWatchItems
     * const toWatchItem = await prisma.toWatchItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ToWatchItems and only return the `id`
     * const toWatchItemWithIdOnly = await prisma.toWatchItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ToWatchItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ToWatchItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToWatchItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ToWatchItem.
     * @param {ToWatchItemDeleteArgs} args - Arguments to delete one ToWatchItem.
     * @example
     * // Delete one ToWatchItem
     * const ToWatchItem = await prisma.toWatchItem.delete({
     *   where: {
     *     // ... filter to delete one ToWatchItem
     *   }
     * })
     * 
     */
    delete<T extends ToWatchItemDeleteArgs>(args: SelectSubset<T, ToWatchItemDeleteArgs<ExtArgs>>): Prisma__ToWatchItemClient<$Result.GetResult<Prisma.$ToWatchItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ToWatchItem.
     * @param {ToWatchItemUpdateArgs} args - Arguments to update one ToWatchItem.
     * @example
     * // Update one ToWatchItem
     * const toWatchItem = await prisma.toWatchItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ToWatchItemUpdateArgs>(args: SelectSubset<T, ToWatchItemUpdateArgs<ExtArgs>>): Prisma__ToWatchItemClient<$Result.GetResult<Prisma.$ToWatchItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ToWatchItems.
     * @param {ToWatchItemDeleteManyArgs} args - Arguments to filter ToWatchItems to delete.
     * @example
     * // Delete a few ToWatchItems
     * const { count } = await prisma.toWatchItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ToWatchItemDeleteManyArgs>(args?: SelectSubset<T, ToWatchItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ToWatchItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToWatchItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ToWatchItems
     * const toWatchItem = await prisma.toWatchItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ToWatchItemUpdateManyArgs>(args: SelectSubset<T, ToWatchItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ToWatchItems and returns the data updated in the database.
     * @param {ToWatchItemUpdateManyAndReturnArgs} args - Arguments to update many ToWatchItems.
     * @example
     * // Update many ToWatchItems
     * const toWatchItem = await prisma.toWatchItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ToWatchItems and only return the `id`
     * const toWatchItemWithIdOnly = await prisma.toWatchItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ToWatchItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ToWatchItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToWatchItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ToWatchItem.
     * @param {ToWatchItemUpsertArgs} args - Arguments to update or create a ToWatchItem.
     * @example
     * // Update or create a ToWatchItem
     * const toWatchItem = await prisma.toWatchItem.upsert({
     *   create: {
     *     // ... data to create a ToWatchItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ToWatchItem we want to update
     *   }
     * })
     */
    upsert<T extends ToWatchItemUpsertArgs>(args: SelectSubset<T, ToWatchItemUpsertArgs<ExtArgs>>): Prisma__ToWatchItemClient<$Result.GetResult<Prisma.$ToWatchItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ToWatchItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToWatchItemCountArgs} args - Arguments to filter ToWatchItems to count.
     * @example
     * // Count the number of ToWatchItems
     * const count = await prisma.toWatchItem.count({
     *   where: {
     *     // ... the filter for the ToWatchItems we want to count
     *   }
     * })
    **/
    count<T extends ToWatchItemCountArgs>(
      args?: Subset<T, ToWatchItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ToWatchItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ToWatchItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToWatchItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ToWatchItemAggregateArgs>(args: Subset<T, ToWatchItemAggregateArgs>): Prisma.PrismaPromise<GetToWatchItemAggregateType<T>>

    /**
     * Group by ToWatchItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToWatchItemGroupByArgs} args - Group by arguments.
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
      T extends ToWatchItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ToWatchItemGroupByArgs['orderBy'] }
        : { orderBy?: ToWatchItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ToWatchItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToWatchItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ToWatchItem model
   */
  readonly fields: ToWatchItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ToWatchItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ToWatchItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ToWatchItem model
   */
  interface ToWatchItemFieldRefs {
    readonly id: FieldRef<"ToWatchItem", 'String'>
    readonly createdAt: FieldRef<"ToWatchItem", 'DateTime'>
    readonly title: FieldRef<"ToWatchItem", 'String'>
    readonly type: FieldRef<"ToWatchItem", 'String'>
    readonly director: FieldRef<"ToWatchItem", 'String'>
    readonly releaseYear: FieldRef<"ToWatchItem", 'Int'>
    readonly userId: FieldRef<"ToWatchItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ToWatchItem findUnique
   */
  export type ToWatchItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToWatchItem
     */
    select?: ToWatchItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToWatchItem
     */
    omit?: ToWatchItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToWatchItemInclude<ExtArgs> | null
    /**
     * Filter, which ToWatchItem to fetch.
     */
    where: ToWatchItemWhereUniqueInput
  }

  /**
   * ToWatchItem findUniqueOrThrow
   */
  export type ToWatchItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToWatchItem
     */
    select?: ToWatchItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToWatchItem
     */
    omit?: ToWatchItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToWatchItemInclude<ExtArgs> | null
    /**
     * Filter, which ToWatchItem to fetch.
     */
    where: ToWatchItemWhereUniqueInput
  }

  /**
   * ToWatchItem findFirst
   */
  export type ToWatchItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToWatchItem
     */
    select?: ToWatchItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToWatchItem
     */
    omit?: ToWatchItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToWatchItemInclude<ExtArgs> | null
    /**
     * Filter, which ToWatchItem to fetch.
     */
    where?: ToWatchItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToWatchItems to fetch.
     */
    orderBy?: ToWatchItemOrderByWithRelationInput | ToWatchItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ToWatchItems.
     */
    cursor?: ToWatchItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToWatchItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToWatchItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToWatchItems.
     */
    distinct?: ToWatchItemScalarFieldEnum | ToWatchItemScalarFieldEnum[]
  }

  /**
   * ToWatchItem findFirstOrThrow
   */
  export type ToWatchItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToWatchItem
     */
    select?: ToWatchItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToWatchItem
     */
    omit?: ToWatchItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToWatchItemInclude<ExtArgs> | null
    /**
     * Filter, which ToWatchItem to fetch.
     */
    where?: ToWatchItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToWatchItems to fetch.
     */
    orderBy?: ToWatchItemOrderByWithRelationInput | ToWatchItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ToWatchItems.
     */
    cursor?: ToWatchItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToWatchItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToWatchItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToWatchItems.
     */
    distinct?: ToWatchItemScalarFieldEnum | ToWatchItemScalarFieldEnum[]
  }

  /**
   * ToWatchItem findMany
   */
  export type ToWatchItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToWatchItem
     */
    select?: ToWatchItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToWatchItem
     */
    omit?: ToWatchItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToWatchItemInclude<ExtArgs> | null
    /**
     * Filter, which ToWatchItems to fetch.
     */
    where?: ToWatchItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToWatchItems to fetch.
     */
    orderBy?: ToWatchItemOrderByWithRelationInput | ToWatchItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ToWatchItems.
     */
    cursor?: ToWatchItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToWatchItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToWatchItems.
     */
    skip?: number
    distinct?: ToWatchItemScalarFieldEnum | ToWatchItemScalarFieldEnum[]
  }

  /**
   * ToWatchItem create
   */
  export type ToWatchItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToWatchItem
     */
    select?: ToWatchItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToWatchItem
     */
    omit?: ToWatchItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToWatchItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ToWatchItem.
     */
    data: XOR<ToWatchItemCreateInput, ToWatchItemUncheckedCreateInput>
  }

  /**
   * ToWatchItem createMany
   */
  export type ToWatchItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ToWatchItems.
     */
    data: ToWatchItemCreateManyInput | ToWatchItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ToWatchItem createManyAndReturn
   */
  export type ToWatchItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToWatchItem
     */
    select?: ToWatchItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ToWatchItem
     */
    omit?: ToWatchItemOmit<ExtArgs> | null
    /**
     * The data used to create many ToWatchItems.
     */
    data: ToWatchItemCreateManyInput | ToWatchItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToWatchItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ToWatchItem update
   */
  export type ToWatchItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToWatchItem
     */
    select?: ToWatchItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToWatchItem
     */
    omit?: ToWatchItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToWatchItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ToWatchItem.
     */
    data: XOR<ToWatchItemUpdateInput, ToWatchItemUncheckedUpdateInput>
    /**
     * Choose, which ToWatchItem to update.
     */
    where: ToWatchItemWhereUniqueInput
  }

  /**
   * ToWatchItem updateMany
   */
  export type ToWatchItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ToWatchItems.
     */
    data: XOR<ToWatchItemUpdateManyMutationInput, ToWatchItemUncheckedUpdateManyInput>
    /**
     * Filter which ToWatchItems to update
     */
    where?: ToWatchItemWhereInput
  }

  /**
   * ToWatchItem updateManyAndReturn
   */
  export type ToWatchItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToWatchItem
     */
    select?: ToWatchItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ToWatchItem
     */
    omit?: ToWatchItemOmit<ExtArgs> | null
    /**
     * The data used to update ToWatchItems.
     */
    data: XOR<ToWatchItemUpdateManyMutationInput, ToWatchItemUncheckedUpdateManyInput>
    /**
     * Filter which ToWatchItems to update
     */
    where?: ToWatchItemWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToWatchItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ToWatchItem upsert
   */
  export type ToWatchItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToWatchItem
     */
    select?: ToWatchItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToWatchItem
     */
    omit?: ToWatchItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToWatchItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ToWatchItem to update in case it exists.
     */
    where: ToWatchItemWhereUniqueInput
    /**
     * In case the ToWatchItem found by the `where` argument doesn't exist, create a new ToWatchItem with this data.
     */
    create: XOR<ToWatchItemCreateInput, ToWatchItemUncheckedCreateInput>
    /**
     * In case the ToWatchItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ToWatchItemUpdateInput, ToWatchItemUncheckedUpdateInput>
  }

  /**
   * ToWatchItem delete
   */
  export type ToWatchItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToWatchItem
     */
    select?: ToWatchItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToWatchItem
     */
    omit?: ToWatchItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToWatchItemInclude<ExtArgs> | null
    /**
     * Filter which ToWatchItem to delete.
     */
    where: ToWatchItemWhereUniqueInput
  }

  /**
   * ToWatchItem deleteMany
   */
  export type ToWatchItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ToWatchItems to delete
     */
    where?: ToWatchItemWhereInput
  }

  /**
   * ToWatchItem without action
   */
  export type ToWatchItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToWatchItem
     */
    select?: ToWatchItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToWatchItem
     */
    omit?: ToWatchItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToWatchItemInclude<ExtArgs> | null
  }


  /**
   * Model WatchingItem
   */

  export type AggregateWatchingItem = {
    _count: WatchingItemCountAggregateOutputType | null
    _avg: WatchingItemAvgAggregateOutputType | null
    _sum: WatchingItemSumAggregateOutputType | null
    _min: WatchingItemMinAggregateOutputType | null
    _max: WatchingItemMaxAggregateOutputType | null
  }

  export type WatchingItemAvgAggregateOutputType = {
    releaseYear: number | null
  }

  export type WatchingItemSumAggregateOutputType = {
    releaseYear: number | null
  }

  export type WatchingItemMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    title: string | null
    type: string | null
    director: string | null
    releaseYear: number | null
    userId: string | null
  }

  export type WatchingItemMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    title: string | null
    type: string | null
    director: string | null
    releaseYear: number | null
    userId: string | null
  }

  export type WatchingItemCountAggregateOutputType = {
    id: number
    createdAt: number
    title: number
    type: number
    director: number
    releaseYear: number
    userId: number
    _all: number
  }


  export type WatchingItemAvgAggregateInputType = {
    releaseYear?: true
  }

  export type WatchingItemSumAggregateInputType = {
    releaseYear?: true
  }

  export type WatchingItemMinAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    type?: true
    director?: true
    releaseYear?: true
    userId?: true
  }

  export type WatchingItemMaxAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    type?: true
    director?: true
    releaseYear?: true
    userId?: true
  }

  export type WatchingItemCountAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    type?: true
    director?: true
    releaseYear?: true
    userId?: true
    _all?: true
  }

  export type WatchingItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WatchingItem to aggregate.
     */
    where?: WatchingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchingItems to fetch.
     */
    orderBy?: WatchingItemOrderByWithRelationInput | WatchingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WatchingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchingItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WatchingItems
    **/
    _count?: true | WatchingItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WatchingItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WatchingItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WatchingItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WatchingItemMaxAggregateInputType
  }

  export type GetWatchingItemAggregateType<T extends WatchingItemAggregateArgs> = {
        [P in keyof T & keyof AggregateWatchingItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWatchingItem[P]>
      : GetScalarType<T[P], AggregateWatchingItem[P]>
  }




  export type WatchingItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchingItemWhereInput
    orderBy?: WatchingItemOrderByWithAggregationInput | WatchingItemOrderByWithAggregationInput[]
    by: WatchingItemScalarFieldEnum[] | WatchingItemScalarFieldEnum
    having?: WatchingItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WatchingItemCountAggregateInputType | true
    _avg?: WatchingItemAvgAggregateInputType
    _sum?: WatchingItemSumAggregateInputType
    _min?: WatchingItemMinAggregateInputType
    _max?: WatchingItemMaxAggregateInputType
  }

  export type WatchingItemGroupByOutputType = {
    id: string
    createdAt: Date
    title: string
    type: string
    director: string | null
    releaseYear: number | null
    userId: string
    _count: WatchingItemCountAggregateOutputType | null
    _avg: WatchingItemAvgAggregateOutputType | null
    _sum: WatchingItemSumAggregateOutputType | null
    _min: WatchingItemMinAggregateOutputType | null
    _max: WatchingItemMaxAggregateOutputType | null
  }

  type GetWatchingItemGroupByPayload<T extends WatchingItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WatchingItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WatchingItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WatchingItemGroupByOutputType[P]>
            : GetScalarType<T[P], WatchingItemGroupByOutputType[P]>
        }
      >
    >


  export type WatchingItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    title?: boolean
    type?: boolean
    director?: boolean
    releaseYear?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchingItem"]>

  export type WatchingItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    title?: boolean
    type?: boolean
    director?: boolean
    releaseYear?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchingItem"]>

  export type WatchingItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    title?: boolean
    type?: boolean
    director?: boolean
    releaseYear?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchingItem"]>

  export type WatchingItemSelectScalar = {
    id?: boolean
    createdAt?: boolean
    title?: boolean
    type?: boolean
    director?: boolean
    releaseYear?: boolean
    userId?: boolean
  }

  export type WatchingItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "title" | "type" | "director" | "releaseYear" | "userId", ExtArgs["result"]["watchingItem"]>
  export type WatchingItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WatchingItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WatchingItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WatchingItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WatchingItem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      title: string
      type: string
      director: string | null
      releaseYear: number | null
      userId: string
    }, ExtArgs["result"]["watchingItem"]>
    composites: {}
  }

  type WatchingItemGetPayload<S extends boolean | null | undefined | WatchingItemDefaultArgs> = $Result.GetResult<Prisma.$WatchingItemPayload, S>

  type WatchingItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WatchingItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WatchingItemCountAggregateInputType | true
    }

  export interface WatchingItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WatchingItem'], meta: { name: 'WatchingItem' } }
    /**
     * Find zero or one WatchingItem that matches the filter.
     * @param {WatchingItemFindUniqueArgs} args - Arguments to find a WatchingItem
     * @example
     * // Get one WatchingItem
     * const watchingItem = await prisma.watchingItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WatchingItemFindUniqueArgs>(args: SelectSubset<T, WatchingItemFindUniqueArgs<ExtArgs>>): Prisma__WatchingItemClient<$Result.GetResult<Prisma.$WatchingItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WatchingItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WatchingItemFindUniqueOrThrowArgs} args - Arguments to find a WatchingItem
     * @example
     * // Get one WatchingItem
     * const watchingItem = await prisma.watchingItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WatchingItemFindUniqueOrThrowArgs>(args: SelectSubset<T, WatchingItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WatchingItemClient<$Result.GetResult<Prisma.$WatchingItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WatchingItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchingItemFindFirstArgs} args - Arguments to find a WatchingItem
     * @example
     * // Get one WatchingItem
     * const watchingItem = await prisma.watchingItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WatchingItemFindFirstArgs>(args?: SelectSubset<T, WatchingItemFindFirstArgs<ExtArgs>>): Prisma__WatchingItemClient<$Result.GetResult<Prisma.$WatchingItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WatchingItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchingItemFindFirstOrThrowArgs} args - Arguments to find a WatchingItem
     * @example
     * // Get one WatchingItem
     * const watchingItem = await prisma.watchingItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WatchingItemFindFirstOrThrowArgs>(args?: SelectSubset<T, WatchingItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__WatchingItemClient<$Result.GetResult<Prisma.$WatchingItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WatchingItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchingItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WatchingItems
     * const watchingItems = await prisma.watchingItem.findMany()
     * 
     * // Get first 10 WatchingItems
     * const watchingItems = await prisma.watchingItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const watchingItemWithIdOnly = await prisma.watchingItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WatchingItemFindManyArgs>(args?: SelectSubset<T, WatchingItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchingItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WatchingItem.
     * @param {WatchingItemCreateArgs} args - Arguments to create a WatchingItem.
     * @example
     * // Create one WatchingItem
     * const WatchingItem = await prisma.watchingItem.create({
     *   data: {
     *     // ... data to create a WatchingItem
     *   }
     * })
     * 
     */
    create<T extends WatchingItemCreateArgs>(args: SelectSubset<T, WatchingItemCreateArgs<ExtArgs>>): Prisma__WatchingItemClient<$Result.GetResult<Prisma.$WatchingItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WatchingItems.
     * @param {WatchingItemCreateManyArgs} args - Arguments to create many WatchingItems.
     * @example
     * // Create many WatchingItems
     * const watchingItem = await prisma.watchingItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WatchingItemCreateManyArgs>(args?: SelectSubset<T, WatchingItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WatchingItems and returns the data saved in the database.
     * @param {WatchingItemCreateManyAndReturnArgs} args - Arguments to create many WatchingItems.
     * @example
     * // Create many WatchingItems
     * const watchingItem = await prisma.watchingItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WatchingItems and only return the `id`
     * const watchingItemWithIdOnly = await prisma.watchingItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WatchingItemCreateManyAndReturnArgs>(args?: SelectSubset<T, WatchingItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchingItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WatchingItem.
     * @param {WatchingItemDeleteArgs} args - Arguments to delete one WatchingItem.
     * @example
     * // Delete one WatchingItem
     * const WatchingItem = await prisma.watchingItem.delete({
     *   where: {
     *     // ... filter to delete one WatchingItem
     *   }
     * })
     * 
     */
    delete<T extends WatchingItemDeleteArgs>(args: SelectSubset<T, WatchingItemDeleteArgs<ExtArgs>>): Prisma__WatchingItemClient<$Result.GetResult<Prisma.$WatchingItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WatchingItem.
     * @param {WatchingItemUpdateArgs} args - Arguments to update one WatchingItem.
     * @example
     * // Update one WatchingItem
     * const watchingItem = await prisma.watchingItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WatchingItemUpdateArgs>(args: SelectSubset<T, WatchingItemUpdateArgs<ExtArgs>>): Prisma__WatchingItemClient<$Result.GetResult<Prisma.$WatchingItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WatchingItems.
     * @param {WatchingItemDeleteManyArgs} args - Arguments to filter WatchingItems to delete.
     * @example
     * // Delete a few WatchingItems
     * const { count } = await prisma.watchingItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WatchingItemDeleteManyArgs>(args?: SelectSubset<T, WatchingItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WatchingItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchingItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WatchingItems
     * const watchingItem = await prisma.watchingItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WatchingItemUpdateManyArgs>(args: SelectSubset<T, WatchingItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WatchingItems and returns the data updated in the database.
     * @param {WatchingItemUpdateManyAndReturnArgs} args - Arguments to update many WatchingItems.
     * @example
     * // Update many WatchingItems
     * const watchingItem = await prisma.watchingItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WatchingItems and only return the `id`
     * const watchingItemWithIdOnly = await prisma.watchingItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WatchingItemUpdateManyAndReturnArgs>(args: SelectSubset<T, WatchingItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchingItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WatchingItem.
     * @param {WatchingItemUpsertArgs} args - Arguments to update or create a WatchingItem.
     * @example
     * // Update or create a WatchingItem
     * const watchingItem = await prisma.watchingItem.upsert({
     *   create: {
     *     // ... data to create a WatchingItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WatchingItem we want to update
     *   }
     * })
     */
    upsert<T extends WatchingItemUpsertArgs>(args: SelectSubset<T, WatchingItemUpsertArgs<ExtArgs>>): Prisma__WatchingItemClient<$Result.GetResult<Prisma.$WatchingItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WatchingItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchingItemCountArgs} args - Arguments to filter WatchingItems to count.
     * @example
     * // Count the number of WatchingItems
     * const count = await prisma.watchingItem.count({
     *   where: {
     *     // ... the filter for the WatchingItems we want to count
     *   }
     * })
    **/
    count<T extends WatchingItemCountArgs>(
      args?: Subset<T, WatchingItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WatchingItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WatchingItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchingItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WatchingItemAggregateArgs>(args: Subset<T, WatchingItemAggregateArgs>): Prisma.PrismaPromise<GetWatchingItemAggregateType<T>>

    /**
     * Group by WatchingItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchingItemGroupByArgs} args - Group by arguments.
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
      T extends WatchingItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WatchingItemGroupByArgs['orderBy'] }
        : { orderBy?: WatchingItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WatchingItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatchingItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WatchingItem model
   */
  readonly fields: WatchingItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WatchingItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WatchingItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WatchingItem model
   */
  interface WatchingItemFieldRefs {
    readonly id: FieldRef<"WatchingItem", 'String'>
    readonly createdAt: FieldRef<"WatchingItem", 'DateTime'>
    readonly title: FieldRef<"WatchingItem", 'String'>
    readonly type: FieldRef<"WatchingItem", 'String'>
    readonly director: FieldRef<"WatchingItem", 'String'>
    readonly releaseYear: FieldRef<"WatchingItem", 'Int'>
    readonly userId: FieldRef<"WatchingItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WatchingItem findUnique
   */
  export type WatchingItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchingItem
     */
    select?: WatchingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchingItem
     */
    omit?: WatchingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchingItemInclude<ExtArgs> | null
    /**
     * Filter, which WatchingItem to fetch.
     */
    where: WatchingItemWhereUniqueInput
  }

  /**
   * WatchingItem findUniqueOrThrow
   */
  export type WatchingItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchingItem
     */
    select?: WatchingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchingItem
     */
    omit?: WatchingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchingItemInclude<ExtArgs> | null
    /**
     * Filter, which WatchingItem to fetch.
     */
    where: WatchingItemWhereUniqueInput
  }

  /**
   * WatchingItem findFirst
   */
  export type WatchingItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchingItem
     */
    select?: WatchingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchingItem
     */
    omit?: WatchingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchingItemInclude<ExtArgs> | null
    /**
     * Filter, which WatchingItem to fetch.
     */
    where?: WatchingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchingItems to fetch.
     */
    orderBy?: WatchingItemOrderByWithRelationInput | WatchingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WatchingItems.
     */
    cursor?: WatchingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchingItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WatchingItems.
     */
    distinct?: WatchingItemScalarFieldEnum | WatchingItemScalarFieldEnum[]
  }

  /**
   * WatchingItem findFirstOrThrow
   */
  export type WatchingItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchingItem
     */
    select?: WatchingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchingItem
     */
    omit?: WatchingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchingItemInclude<ExtArgs> | null
    /**
     * Filter, which WatchingItem to fetch.
     */
    where?: WatchingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchingItems to fetch.
     */
    orderBy?: WatchingItemOrderByWithRelationInput | WatchingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WatchingItems.
     */
    cursor?: WatchingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchingItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WatchingItems.
     */
    distinct?: WatchingItemScalarFieldEnum | WatchingItemScalarFieldEnum[]
  }

  /**
   * WatchingItem findMany
   */
  export type WatchingItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchingItem
     */
    select?: WatchingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchingItem
     */
    omit?: WatchingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchingItemInclude<ExtArgs> | null
    /**
     * Filter, which WatchingItems to fetch.
     */
    where?: WatchingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchingItems to fetch.
     */
    orderBy?: WatchingItemOrderByWithRelationInput | WatchingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WatchingItems.
     */
    cursor?: WatchingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchingItems.
     */
    skip?: number
    distinct?: WatchingItemScalarFieldEnum | WatchingItemScalarFieldEnum[]
  }

  /**
   * WatchingItem create
   */
  export type WatchingItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchingItem
     */
    select?: WatchingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchingItem
     */
    omit?: WatchingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchingItemInclude<ExtArgs> | null
    /**
     * The data needed to create a WatchingItem.
     */
    data: XOR<WatchingItemCreateInput, WatchingItemUncheckedCreateInput>
  }

  /**
   * WatchingItem createMany
   */
  export type WatchingItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WatchingItems.
     */
    data: WatchingItemCreateManyInput | WatchingItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WatchingItem createManyAndReturn
   */
  export type WatchingItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchingItem
     */
    select?: WatchingItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WatchingItem
     */
    omit?: WatchingItemOmit<ExtArgs> | null
    /**
     * The data used to create many WatchingItems.
     */
    data: WatchingItemCreateManyInput | WatchingItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchingItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WatchingItem update
   */
  export type WatchingItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchingItem
     */
    select?: WatchingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchingItem
     */
    omit?: WatchingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchingItemInclude<ExtArgs> | null
    /**
     * The data needed to update a WatchingItem.
     */
    data: XOR<WatchingItemUpdateInput, WatchingItemUncheckedUpdateInput>
    /**
     * Choose, which WatchingItem to update.
     */
    where: WatchingItemWhereUniqueInput
  }

  /**
   * WatchingItem updateMany
   */
  export type WatchingItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WatchingItems.
     */
    data: XOR<WatchingItemUpdateManyMutationInput, WatchingItemUncheckedUpdateManyInput>
    /**
     * Filter which WatchingItems to update
     */
    where?: WatchingItemWhereInput
  }

  /**
   * WatchingItem updateManyAndReturn
   */
  export type WatchingItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchingItem
     */
    select?: WatchingItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WatchingItem
     */
    omit?: WatchingItemOmit<ExtArgs> | null
    /**
     * The data used to update WatchingItems.
     */
    data: XOR<WatchingItemUpdateManyMutationInput, WatchingItemUncheckedUpdateManyInput>
    /**
     * Filter which WatchingItems to update
     */
    where?: WatchingItemWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchingItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WatchingItem upsert
   */
  export type WatchingItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchingItem
     */
    select?: WatchingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchingItem
     */
    omit?: WatchingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchingItemInclude<ExtArgs> | null
    /**
     * The filter to search for the WatchingItem to update in case it exists.
     */
    where: WatchingItemWhereUniqueInput
    /**
     * In case the WatchingItem found by the `where` argument doesn't exist, create a new WatchingItem with this data.
     */
    create: XOR<WatchingItemCreateInput, WatchingItemUncheckedCreateInput>
    /**
     * In case the WatchingItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WatchingItemUpdateInput, WatchingItemUncheckedUpdateInput>
  }

  /**
   * WatchingItem delete
   */
  export type WatchingItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchingItem
     */
    select?: WatchingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchingItem
     */
    omit?: WatchingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchingItemInclude<ExtArgs> | null
    /**
     * Filter which WatchingItem to delete.
     */
    where: WatchingItemWhereUniqueInput
  }

  /**
   * WatchingItem deleteMany
   */
  export type WatchingItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WatchingItems to delete
     */
    where?: WatchingItemWhereInput
  }

  /**
   * WatchingItem without action
   */
  export type WatchingItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchingItem
     */
    select?: WatchingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchingItem
     */
    omit?: WatchingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchingItemInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email',
    name: 'name',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WatchedItemScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    title: 'title',
    type: 'type',
    director: 'director',
    releaseYear: 'releaseYear',
    userId: 'userId'
  };

  export type WatchedItemScalarFieldEnum = (typeof WatchedItemScalarFieldEnum)[keyof typeof WatchedItemScalarFieldEnum]


  export const ToWatchItemScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    title: 'title',
    type: 'type',
    director: 'director',
    releaseYear: 'releaseYear',
    userId: 'userId'
  };

  export type ToWatchItemScalarFieldEnum = (typeof ToWatchItemScalarFieldEnum)[keyof typeof ToWatchItemScalarFieldEnum]


  export const WatchingItemScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    title: 'title',
    type: 'type',
    director: 'director',
    releaseYear: 'releaseYear',
    userId: 'userId'
  };

  export type WatchingItemScalarFieldEnum = (typeof WatchingItemScalarFieldEnum)[keyof typeof WatchingItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    watchedItems?: WatchedItemListRelationFilter
    toWatchItems?: ToWatchItemListRelationFilter
    watchingItems?: WatchingItemListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    watchedItems?: WatchedItemOrderByRelationAggregateInput
    toWatchItems?: ToWatchItemOrderByRelationAggregateInput
    watchingItems?: WatchingItemOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    watchedItems?: WatchedItemListRelationFilter
    toWatchItems?: ToWatchItemListRelationFilter
    watchingItems?: WatchingItemListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type WatchedItemWhereInput = {
    AND?: WatchedItemWhereInput | WatchedItemWhereInput[]
    OR?: WatchedItemWhereInput[]
    NOT?: WatchedItemWhereInput | WatchedItemWhereInput[]
    id?: StringFilter<"WatchedItem"> | string
    createdAt?: DateTimeFilter<"WatchedItem"> | Date | string
    title?: StringFilter<"WatchedItem"> | string
    type?: StringFilter<"WatchedItem"> | string
    director?: StringNullableFilter<"WatchedItem"> | string | null
    releaseYear?: IntNullableFilter<"WatchedItem"> | number | null
    userId?: StringFilter<"WatchedItem"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WatchedItemOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    type?: SortOrder
    director?: SortOrderInput | SortOrder
    releaseYear?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WatchedItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WatchedItemWhereInput | WatchedItemWhereInput[]
    OR?: WatchedItemWhereInput[]
    NOT?: WatchedItemWhereInput | WatchedItemWhereInput[]
    createdAt?: DateTimeFilter<"WatchedItem"> | Date | string
    title?: StringFilter<"WatchedItem"> | string
    type?: StringFilter<"WatchedItem"> | string
    director?: StringNullableFilter<"WatchedItem"> | string | null
    releaseYear?: IntNullableFilter<"WatchedItem"> | number | null
    userId?: StringFilter<"WatchedItem"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type WatchedItemOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    type?: SortOrder
    director?: SortOrderInput | SortOrder
    releaseYear?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: WatchedItemCountOrderByAggregateInput
    _avg?: WatchedItemAvgOrderByAggregateInput
    _max?: WatchedItemMaxOrderByAggregateInput
    _min?: WatchedItemMinOrderByAggregateInput
    _sum?: WatchedItemSumOrderByAggregateInput
  }

  export type WatchedItemScalarWhereWithAggregatesInput = {
    AND?: WatchedItemScalarWhereWithAggregatesInput | WatchedItemScalarWhereWithAggregatesInput[]
    OR?: WatchedItemScalarWhereWithAggregatesInput[]
    NOT?: WatchedItemScalarWhereWithAggregatesInput | WatchedItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WatchedItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WatchedItem"> | Date | string
    title?: StringWithAggregatesFilter<"WatchedItem"> | string
    type?: StringWithAggregatesFilter<"WatchedItem"> | string
    director?: StringNullableWithAggregatesFilter<"WatchedItem"> | string | null
    releaseYear?: IntNullableWithAggregatesFilter<"WatchedItem"> | number | null
    userId?: StringWithAggregatesFilter<"WatchedItem"> | string
  }

  export type ToWatchItemWhereInput = {
    AND?: ToWatchItemWhereInput | ToWatchItemWhereInput[]
    OR?: ToWatchItemWhereInput[]
    NOT?: ToWatchItemWhereInput | ToWatchItemWhereInput[]
    id?: StringFilter<"ToWatchItem"> | string
    createdAt?: DateTimeFilter<"ToWatchItem"> | Date | string
    title?: StringFilter<"ToWatchItem"> | string
    type?: StringFilter<"ToWatchItem"> | string
    director?: StringNullableFilter<"ToWatchItem"> | string | null
    releaseYear?: IntNullableFilter<"ToWatchItem"> | number | null
    userId?: StringFilter<"ToWatchItem"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ToWatchItemOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    type?: SortOrder
    director?: SortOrderInput | SortOrder
    releaseYear?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ToWatchItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ToWatchItemWhereInput | ToWatchItemWhereInput[]
    OR?: ToWatchItemWhereInput[]
    NOT?: ToWatchItemWhereInput | ToWatchItemWhereInput[]
    createdAt?: DateTimeFilter<"ToWatchItem"> | Date | string
    title?: StringFilter<"ToWatchItem"> | string
    type?: StringFilter<"ToWatchItem"> | string
    director?: StringNullableFilter<"ToWatchItem"> | string | null
    releaseYear?: IntNullableFilter<"ToWatchItem"> | number | null
    userId?: StringFilter<"ToWatchItem"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ToWatchItemOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    type?: SortOrder
    director?: SortOrderInput | SortOrder
    releaseYear?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: ToWatchItemCountOrderByAggregateInput
    _avg?: ToWatchItemAvgOrderByAggregateInput
    _max?: ToWatchItemMaxOrderByAggregateInput
    _min?: ToWatchItemMinOrderByAggregateInput
    _sum?: ToWatchItemSumOrderByAggregateInput
  }

  export type ToWatchItemScalarWhereWithAggregatesInput = {
    AND?: ToWatchItemScalarWhereWithAggregatesInput | ToWatchItemScalarWhereWithAggregatesInput[]
    OR?: ToWatchItemScalarWhereWithAggregatesInput[]
    NOT?: ToWatchItemScalarWhereWithAggregatesInput | ToWatchItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ToWatchItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ToWatchItem"> | Date | string
    title?: StringWithAggregatesFilter<"ToWatchItem"> | string
    type?: StringWithAggregatesFilter<"ToWatchItem"> | string
    director?: StringNullableWithAggregatesFilter<"ToWatchItem"> | string | null
    releaseYear?: IntNullableWithAggregatesFilter<"ToWatchItem"> | number | null
    userId?: StringWithAggregatesFilter<"ToWatchItem"> | string
  }

  export type WatchingItemWhereInput = {
    AND?: WatchingItemWhereInput | WatchingItemWhereInput[]
    OR?: WatchingItemWhereInput[]
    NOT?: WatchingItemWhereInput | WatchingItemWhereInput[]
    id?: StringFilter<"WatchingItem"> | string
    createdAt?: DateTimeFilter<"WatchingItem"> | Date | string
    title?: StringFilter<"WatchingItem"> | string
    type?: StringFilter<"WatchingItem"> | string
    director?: StringNullableFilter<"WatchingItem"> | string | null
    releaseYear?: IntNullableFilter<"WatchingItem"> | number | null
    userId?: StringFilter<"WatchingItem"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WatchingItemOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    type?: SortOrder
    director?: SortOrderInput | SortOrder
    releaseYear?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WatchingItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WatchingItemWhereInput | WatchingItemWhereInput[]
    OR?: WatchingItemWhereInput[]
    NOT?: WatchingItemWhereInput | WatchingItemWhereInput[]
    createdAt?: DateTimeFilter<"WatchingItem"> | Date | string
    title?: StringFilter<"WatchingItem"> | string
    type?: StringFilter<"WatchingItem"> | string
    director?: StringNullableFilter<"WatchingItem"> | string | null
    releaseYear?: IntNullableFilter<"WatchingItem"> | number | null
    userId?: StringFilter<"WatchingItem"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type WatchingItemOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    type?: SortOrder
    director?: SortOrderInput | SortOrder
    releaseYear?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: WatchingItemCountOrderByAggregateInput
    _avg?: WatchingItemAvgOrderByAggregateInput
    _max?: WatchingItemMaxOrderByAggregateInput
    _min?: WatchingItemMinOrderByAggregateInput
    _sum?: WatchingItemSumOrderByAggregateInput
  }

  export type WatchingItemScalarWhereWithAggregatesInput = {
    AND?: WatchingItemScalarWhereWithAggregatesInput | WatchingItemScalarWhereWithAggregatesInput[]
    OR?: WatchingItemScalarWhereWithAggregatesInput[]
    NOT?: WatchingItemScalarWhereWithAggregatesInput | WatchingItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WatchingItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WatchingItem"> | Date | string
    title?: StringWithAggregatesFilter<"WatchingItem"> | string
    type?: StringWithAggregatesFilter<"WatchingItem"> | string
    director?: StringNullableWithAggregatesFilter<"WatchingItem"> | string | null
    releaseYear?: IntNullableWithAggregatesFilter<"WatchingItem"> | number | null
    userId?: StringWithAggregatesFilter<"WatchingItem"> | string
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    watchedItems?: WatchedItemCreateNestedManyWithoutUserInput
    toWatchItems?: ToWatchItemCreateNestedManyWithoutUserInput
    watchingItems?: WatchingItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    watchedItems?: WatchedItemUncheckedCreateNestedManyWithoutUserInput
    toWatchItems?: ToWatchItemUncheckedCreateNestedManyWithoutUserInput
    watchingItems?: WatchingItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    watchedItems?: WatchedItemUpdateManyWithoutUserNestedInput
    toWatchItems?: ToWatchItemUpdateManyWithoutUserNestedInput
    watchingItems?: WatchingItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    watchedItems?: WatchedItemUncheckedUpdateManyWithoutUserNestedInput
    toWatchItems?: ToWatchItemUncheckedUpdateManyWithoutUserNestedInput
    watchingItems?: WatchingItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type WatchedItemCreateInput = {
    id?: string
    createdAt?: Date | string
    title: string
    type: string
    director?: string | null
    releaseYear?: number | null
    user: UserCreateNestedOneWithoutWatchedItemsInput
  }

  export type WatchedItemUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    title: string
    type: string
    director?: string | null
    releaseYear?: number | null
    userId: string
  }

  export type WatchedItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutWatchedItemsNestedInput
  }

  export type WatchedItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WatchedItemCreateManyInput = {
    id?: string
    createdAt?: Date | string
    title: string
    type: string
    director?: string | null
    releaseYear?: number | null
    userId: string
  }

  export type WatchedItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WatchedItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ToWatchItemCreateInput = {
    id?: string
    createdAt?: Date | string
    title: string
    type: string
    director?: string | null
    releaseYear?: number | null
    user: UserCreateNestedOneWithoutToWatchItemsInput
  }

  export type ToWatchItemUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    title: string
    type: string
    director?: string | null
    releaseYear?: number | null
    userId: string
  }

  export type ToWatchItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutToWatchItemsNestedInput
  }

  export type ToWatchItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ToWatchItemCreateManyInput = {
    id?: string
    createdAt?: Date | string
    title: string
    type: string
    director?: string | null
    releaseYear?: number | null
    userId: string
  }

  export type ToWatchItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ToWatchItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WatchingItemCreateInput = {
    id?: string
    createdAt?: Date | string
    title: string
    type: string
    director?: string | null
    releaseYear?: number | null
    user: UserCreateNestedOneWithoutWatchingItemsInput
  }

  export type WatchingItemUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    title: string
    type: string
    director?: string | null
    releaseYear?: number | null
    userId: string
  }

  export type WatchingItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutWatchingItemsNestedInput
  }

  export type WatchingItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WatchingItemCreateManyInput = {
    id?: string
    createdAt?: Date | string
    title: string
    type: string
    director?: string | null
    releaseYear?: number | null
    userId: string
  }

  export type WatchingItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WatchingItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type WatchedItemListRelationFilter = {
    every?: WatchedItemWhereInput
    some?: WatchedItemWhereInput
    none?: WatchedItemWhereInput
  }

  export type ToWatchItemListRelationFilter = {
    every?: ToWatchItemWhereInput
    some?: ToWatchItemWhereInput
    none?: ToWatchItemWhereInput
  }

  export type WatchingItemListRelationFilter = {
    every?: WatchingItemWhereInput
    some?: WatchingItemWhereInput
    none?: WatchingItemWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WatchedItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ToWatchItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WatchingItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WatchedItemCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    type?: SortOrder
    director?: SortOrder
    releaseYear?: SortOrder
    userId?: SortOrder
  }

  export type WatchedItemAvgOrderByAggregateInput = {
    releaseYear?: SortOrder
  }

  export type WatchedItemMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    type?: SortOrder
    director?: SortOrder
    releaseYear?: SortOrder
    userId?: SortOrder
  }

  export type WatchedItemMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    type?: SortOrder
    director?: SortOrder
    releaseYear?: SortOrder
    userId?: SortOrder
  }

  export type WatchedItemSumOrderByAggregateInput = {
    releaseYear?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type ToWatchItemCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    type?: SortOrder
    director?: SortOrder
    releaseYear?: SortOrder
    userId?: SortOrder
  }

  export type ToWatchItemAvgOrderByAggregateInput = {
    releaseYear?: SortOrder
  }

  export type ToWatchItemMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    type?: SortOrder
    director?: SortOrder
    releaseYear?: SortOrder
    userId?: SortOrder
  }

  export type ToWatchItemMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    type?: SortOrder
    director?: SortOrder
    releaseYear?: SortOrder
    userId?: SortOrder
  }

  export type ToWatchItemSumOrderByAggregateInput = {
    releaseYear?: SortOrder
  }

  export type WatchingItemCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    type?: SortOrder
    director?: SortOrder
    releaseYear?: SortOrder
    userId?: SortOrder
  }

  export type WatchingItemAvgOrderByAggregateInput = {
    releaseYear?: SortOrder
  }

  export type WatchingItemMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    type?: SortOrder
    director?: SortOrder
    releaseYear?: SortOrder
    userId?: SortOrder
  }

  export type WatchingItemMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    type?: SortOrder
    director?: SortOrder
    releaseYear?: SortOrder
    userId?: SortOrder
  }

  export type WatchingItemSumOrderByAggregateInput = {
    releaseYear?: SortOrder
  }

  export type WatchedItemCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchedItemCreateWithoutUserInput, WatchedItemUncheckedCreateWithoutUserInput> | WatchedItemCreateWithoutUserInput[] | WatchedItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchedItemCreateOrConnectWithoutUserInput | WatchedItemCreateOrConnectWithoutUserInput[]
    createMany?: WatchedItemCreateManyUserInputEnvelope
    connect?: WatchedItemWhereUniqueInput | WatchedItemWhereUniqueInput[]
  }

  export type ToWatchItemCreateNestedManyWithoutUserInput = {
    create?: XOR<ToWatchItemCreateWithoutUserInput, ToWatchItemUncheckedCreateWithoutUserInput> | ToWatchItemCreateWithoutUserInput[] | ToWatchItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ToWatchItemCreateOrConnectWithoutUserInput | ToWatchItemCreateOrConnectWithoutUserInput[]
    createMany?: ToWatchItemCreateManyUserInputEnvelope
    connect?: ToWatchItemWhereUniqueInput | ToWatchItemWhereUniqueInput[]
  }

  export type WatchingItemCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchingItemCreateWithoutUserInput, WatchingItemUncheckedCreateWithoutUserInput> | WatchingItemCreateWithoutUserInput[] | WatchingItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchingItemCreateOrConnectWithoutUserInput | WatchingItemCreateOrConnectWithoutUserInput[]
    createMany?: WatchingItemCreateManyUserInputEnvelope
    connect?: WatchingItemWhereUniqueInput | WatchingItemWhereUniqueInput[]
  }

  export type WatchedItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchedItemCreateWithoutUserInput, WatchedItemUncheckedCreateWithoutUserInput> | WatchedItemCreateWithoutUserInput[] | WatchedItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchedItemCreateOrConnectWithoutUserInput | WatchedItemCreateOrConnectWithoutUserInput[]
    createMany?: WatchedItemCreateManyUserInputEnvelope
    connect?: WatchedItemWhereUniqueInput | WatchedItemWhereUniqueInput[]
  }

  export type ToWatchItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ToWatchItemCreateWithoutUserInput, ToWatchItemUncheckedCreateWithoutUserInput> | ToWatchItemCreateWithoutUserInput[] | ToWatchItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ToWatchItemCreateOrConnectWithoutUserInput | ToWatchItemCreateOrConnectWithoutUserInput[]
    createMany?: ToWatchItemCreateManyUserInputEnvelope
    connect?: ToWatchItemWhereUniqueInput | ToWatchItemWhereUniqueInput[]
  }

  export type WatchingItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchingItemCreateWithoutUserInput, WatchingItemUncheckedCreateWithoutUserInput> | WatchingItemCreateWithoutUserInput[] | WatchingItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchingItemCreateOrConnectWithoutUserInput | WatchingItemCreateOrConnectWithoutUserInput[]
    createMany?: WatchingItemCreateManyUserInputEnvelope
    connect?: WatchingItemWhereUniqueInput | WatchingItemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type WatchedItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchedItemCreateWithoutUserInput, WatchedItemUncheckedCreateWithoutUserInput> | WatchedItemCreateWithoutUserInput[] | WatchedItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchedItemCreateOrConnectWithoutUserInput | WatchedItemCreateOrConnectWithoutUserInput[]
    upsert?: WatchedItemUpsertWithWhereUniqueWithoutUserInput | WatchedItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchedItemCreateManyUserInputEnvelope
    set?: WatchedItemWhereUniqueInput | WatchedItemWhereUniqueInput[]
    disconnect?: WatchedItemWhereUniqueInput | WatchedItemWhereUniqueInput[]
    delete?: WatchedItemWhereUniqueInput | WatchedItemWhereUniqueInput[]
    connect?: WatchedItemWhereUniqueInput | WatchedItemWhereUniqueInput[]
    update?: WatchedItemUpdateWithWhereUniqueWithoutUserInput | WatchedItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchedItemUpdateManyWithWhereWithoutUserInput | WatchedItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchedItemScalarWhereInput | WatchedItemScalarWhereInput[]
  }

  export type ToWatchItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<ToWatchItemCreateWithoutUserInput, ToWatchItemUncheckedCreateWithoutUserInput> | ToWatchItemCreateWithoutUserInput[] | ToWatchItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ToWatchItemCreateOrConnectWithoutUserInput | ToWatchItemCreateOrConnectWithoutUserInput[]
    upsert?: ToWatchItemUpsertWithWhereUniqueWithoutUserInput | ToWatchItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ToWatchItemCreateManyUserInputEnvelope
    set?: ToWatchItemWhereUniqueInput | ToWatchItemWhereUniqueInput[]
    disconnect?: ToWatchItemWhereUniqueInput | ToWatchItemWhereUniqueInput[]
    delete?: ToWatchItemWhereUniqueInput | ToWatchItemWhereUniqueInput[]
    connect?: ToWatchItemWhereUniqueInput | ToWatchItemWhereUniqueInput[]
    update?: ToWatchItemUpdateWithWhereUniqueWithoutUserInput | ToWatchItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ToWatchItemUpdateManyWithWhereWithoutUserInput | ToWatchItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ToWatchItemScalarWhereInput | ToWatchItemScalarWhereInput[]
  }

  export type WatchingItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchingItemCreateWithoutUserInput, WatchingItemUncheckedCreateWithoutUserInput> | WatchingItemCreateWithoutUserInput[] | WatchingItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchingItemCreateOrConnectWithoutUserInput | WatchingItemCreateOrConnectWithoutUserInput[]
    upsert?: WatchingItemUpsertWithWhereUniqueWithoutUserInput | WatchingItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchingItemCreateManyUserInputEnvelope
    set?: WatchingItemWhereUniqueInput | WatchingItemWhereUniqueInput[]
    disconnect?: WatchingItemWhereUniqueInput | WatchingItemWhereUniqueInput[]
    delete?: WatchingItemWhereUniqueInput | WatchingItemWhereUniqueInput[]
    connect?: WatchingItemWhereUniqueInput | WatchingItemWhereUniqueInput[]
    update?: WatchingItemUpdateWithWhereUniqueWithoutUserInput | WatchingItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchingItemUpdateManyWithWhereWithoutUserInput | WatchingItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchingItemScalarWhereInput | WatchingItemScalarWhereInput[]
  }

  export type WatchedItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchedItemCreateWithoutUserInput, WatchedItemUncheckedCreateWithoutUserInput> | WatchedItemCreateWithoutUserInput[] | WatchedItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchedItemCreateOrConnectWithoutUserInput | WatchedItemCreateOrConnectWithoutUserInput[]
    upsert?: WatchedItemUpsertWithWhereUniqueWithoutUserInput | WatchedItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchedItemCreateManyUserInputEnvelope
    set?: WatchedItemWhereUniqueInput | WatchedItemWhereUniqueInput[]
    disconnect?: WatchedItemWhereUniqueInput | WatchedItemWhereUniqueInput[]
    delete?: WatchedItemWhereUniqueInput | WatchedItemWhereUniqueInput[]
    connect?: WatchedItemWhereUniqueInput | WatchedItemWhereUniqueInput[]
    update?: WatchedItemUpdateWithWhereUniqueWithoutUserInput | WatchedItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchedItemUpdateManyWithWhereWithoutUserInput | WatchedItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchedItemScalarWhereInput | WatchedItemScalarWhereInput[]
  }

  export type ToWatchItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ToWatchItemCreateWithoutUserInput, ToWatchItemUncheckedCreateWithoutUserInput> | ToWatchItemCreateWithoutUserInput[] | ToWatchItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ToWatchItemCreateOrConnectWithoutUserInput | ToWatchItemCreateOrConnectWithoutUserInput[]
    upsert?: ToWatchItemUpsertWithWhereUniqueWithoutUserInput | ToWatchItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ToWatchItemCreateManyUserInputEnvelope
    set?: ToWatchItemWhereUniqueInput | ToWatchItemWhereUniqueInput[]
    disconnect?: ToWatchItemWhereUniqueInput | ToWatchItemWhereUniqueInput[]
    delete?: ToWatchItemWhereUniqueInput | ToWatchItemWhereUniqueInput[]
    connect?: ToWatchItemWhereUniqueInput | ToWatchItemWhereUniqueInput[]
    update?: ToWatchItemUpdateWithWhereUniqueWithoutUserInput | ToWatchItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ToWatchItemUpdateManyWithWhereWithoutUserInput | ToWatchItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ToWatchItemScalarWhereInput | ToWatchItemScalarWhereInput[]
  }

  export type WatchingItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchingItemCreateWithoutUserInput, WatchingItemUncheckedCreateWithoutUserInput> | WatchingItemCreateWithoutUserInput[] | WatchingItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchingItemCreateOrConnectWithoutUserInput | WatchingItemCreateOrConnectWithoutUserInput[]
    upsert?: WatchingItemUpsertWithWhereUniqueWithoutUserInput | WatchingItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchingItemCreateManyUserInputEnvelope
    set?: WatchingItemWhereUniqueInput | WatchingItemWhereUniqueInput[]
    disconnect?: WatchingItemWhereUniqueInput | WatchingItemWhereUniqueInput[]
    delete?: WatchingItemWhereUniqueInput | WatchingItemWhereUniqueInput[]
    connect?: WatchingItemWhereUniqueInput | WatchingItemWhereUniqueInput[]
    update?: WatchingItemUpdateWithWhereUniqueWithoutUserInput | WatchingItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchingItemUpdateManyWithWhereWithoutUserInput | WatchingItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchingItemScalarWhereInput | WatchingItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWatchedItemsInput = {
    create?: XOR<UserCreateWithoutWatchedItemsInput, UserUncheckedCreateWithoutWatchedItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchedItemsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutWatchedItemsNestedInput = {
    create?: XOR<UserCreateWithoutWatchedItemsInput, UserUncheckedCreateWithoutWatchedItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchedItemsInput
    upsert?: UserUpsertWithoutWatchedItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWatchedItemsInput, UserUpdateWithoutWatchedItemsInput>, UserUncheckedUpdateWithoutWatchedItemsInput>
  }

  export type UserCreateNestedOneWithoutToWatchItemsInput = {
    create?: XOR<UserCreateWithoutToWatchItemsInput, UserUncheckedCreateWithoutToWatchItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutToWatchItemsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutToWatchItemsNestedInput = {
    create?: XOR<UserCreateWithoutToWatchItemsInput, UserUncheckedCreateWithoutToWatchItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutToWatchItemsInput
    upsert?: UserUpsertWithoutToWatchItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutToWatchItemsInput, UserUpdateWithoutToWatchItemsInput>, UserUncheckedUpdateWithoutToWatchItemsInput>
  }

  export type UserCreateNestedOneWithoutWatchingItemsInput = {
    create?: XOR<UserCreateWithoutWatchingItemsInput, UserUncheckedCreateWithoutWatchingItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchingItemsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWatchingItemsNestedInput = {
    create?: XOR<UserCreateWithoutWatchingItemsInput, UserUncheckedCreateWithoutWatchingItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchingItemsInput
    upsert?: UserUpsertWithoutWatchingItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWatchingItemsInput, UserUpdateWithoutWatchingItemsInput>, UserUncheckedUpdateWithoutWatchingItemsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type WatchedItemCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    title: string
    type: string
    director?: string | null
    releaseYear?: number | null
  }

  export type WatchedItemUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    title: string
    type: string
    director?: string | null
    releaseYear?: number | null
  }

  export type WatchedItemCreateOrConnectWithoutUserInput = {
    where: WatchedItemWhereUniqueInput
    create: XOR<WatchedItemCreateWithoutUserInput, WatchedItemUncheckedCreateWithoutUserInput>
  }

  export type WatchedItemCreateManyUserInputEnvelope = {
    data: WatchedItemCreateManyUserInput | WatchedItemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ToWatchItemCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    title: string
    type: string
    director?: string | null
    releaseYear?: number | null
  }

  export type ToWatchItemUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    title: string
    type: string
    director?: string | null
    releaseYear?: number | null
  }

  export type ToWatchItemCreateOrConnectWithoutUserInput = {
    where: ToWatchItemWhereUniqueInput
    create: XOR<ToWatchItemCreateWithoutUserInput, ToWatchItemUncheckedCreateWithoutUserInput>
  }

  export type ToWatchItemCreateManyUserInputEnvelope = {
    data: ToWatchItemCreateManyUserInput | ToWatchItemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WatchingItemCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    title: string
    type: string
    director?: string | null
    releaseYear?: number | null
  }

  export type WatchingItemUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    title: string
    type: string
    director?: string | null
    releaseYear?: number | null
  }

  export type WatchingItemCreateOrConnectWithoutUserInput = {
    where: WatchingItemWhereUniqueInput
    create: XOR<WatchingItemCreateWithoutUserInput, WatchingItemUncheckedCreateWithoutUserInput>
  }

  export type WatchingItemCreateManyUserInputEnvelope = {
    data: WatchingItemCreateManyUserInput | WatchingItemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WatchedItemUpsertWithWhereUniqueWithoutUserInput = {
    where: WatchedItemWhereUniqueInput
    update: XOR<WatchedItemUpdateWithoutUserInput, WatchedItemUncheckedUpdateWithoutUserInput>
    create: XOR<WatchedItemCreateWithoutUserInput, WatchedItemUncheckedCreateWithoutUserInput>
  }

  export type WatchedItemUpdateWithWhereUniqueWithoutUserInput = {
    where: WatchedItemWhereUniqueInput
    data: XOR<WatchedItemUpdateWithoutUserInput, WatchedItemUncheckedUpdateWithoutUserInput>
  }

  export type WatchedItemUpdateManyWithWhereWithoutUserInput = {
    where: WatchedItemScalarWhereInput
    data: XOR<WatchedItemUpdateManyMutationInput, WatchedItemUncheckedUpdateManyWithoutUserInput>
  }

  export type WatchedItemScalarWhereInput = {
    AND?: WatchedItemScalarWhereInput | WatchedItemScalarWhereInput[]
    OR?: WatchedItemScalarWhereInput[]
    NOT?: WatchedItemScalarWhereInput | WatchedItemScalarWhereInput[]
    id?: StringFilter<"WatchedItem"> | string
    createdAt?: DateTimeFilter<"WatchedItem"> | Date | string
    title?: StringFilter<"WatchedItem"> | string
    type?: StringFilter<"WatchedItem"> | string
    director?: StringNullableFilter<"WatchedItem"> | string | null
    releaseYear?: IntNullableFilter<"WatchedItem"> | number | null
    userId?: StringFilter<"WatchedItem"> | string
  }

  export type ToWatchItemUpsertWithWhereUniqueWithoutUserInput = {
    where: ToWatchItemWhereUniqueInput
    update: XOR<ToWatchItemUpdateWithoutUserInput, ToWatchItemUncheckedUpdateWithoutUserInput>
    create: XOR<ToWatchItemCreateWithoutUserInput, ToWatchItemUncheckedCreateWithoutUserInput>
  }

  export type ToWatchItemUpdateWithWhereUniqueWithoutUserInput = {
    where: ToWatchItemWhereUniqueInput
    data: XOR<ToWatchItemUpdateWithoutUserInput, ToWatchItemUncheckedUpdateWithoutUserInput>
  }

  export type ToWatchItemUpdateManyWithWhereWithoutUserInput = {
    where: ToWatchItemScalarWhereInput
    data: XOR<ToWatchItemUpdateManyMutationInput, ToWatchItemUncheckedUpdateManyWithoutUserInput>
  }

  export type ToWatchItemScalarWhereInput = {
    AND?: ToWatchItemScalarWhereInput | ToWatchItemScalarWhereInput[]
    OR?: ToWatchItemScalarWhereInput[]
    NOT?: ToWatchItemScalarWhereInput | ToWatchItemScalarWhereInput[]
    id?: StringFilter<"ToWatchItem"> | string
    createdAt?: DateTimeFilter<"ToWatchItem"> | Date | string
    title?: StringFilter<"ToWatchItem"> | string
    type?: StringFilter<"ToWatchItem"> | string
    director?: StringNullableFilter<"ToWatchItem"> | string | null
    releaseYear?: IntNullableFilter<"ToWatchItem"> | number | null
    userId?: StringFilter<"ToWatchItem"> | string
  }

  export type WatchingItemUpsertWithWhereUniqueWithoutUserInput = {
    where: WatchingItemWhereUniqueInput
    update: XOR<WatchingItemUpdateWithoutUserInput, WatchingItemUncheckedUpdateWithoutUserInput>
    create: XOR<WatchingItemCreateWithoutUserInput, WatchingItemUncheckedCreateWithoutUserInput>
  }

  export type WatchingItemUpdateWithWhereUniqueWithoutUserInput = {
    where: WatchingItemWhereUniqueInput
    data: XOR<WatchingItemUpdateWithoutUserInput, WatchingItemUncheckedUpdateWithoutUserInput>
  }

  export type WatchingItemUpdateManyWithWhereWithoutUserInput = {
    where: WatchingItemScalarWhereInput
    data: XOR<WatchingItemUpdateManyMutationInput, WatchingItemUncheckedUpdateManyWithoutUserInput>
  }

  export type WatchingItemScalarWhereInput = {
    AND?: WatchingItemScalarWhereInput | WatchingItemScalarWhereInput[]
    OR?: WatchingItemScalarWhereInput[]
    NOT?: WatchingItemScalarWhereInput | WatchingItemScalarWhereInput[]
    id?: StringFilter<"WatchingItem"> | string
    createdAt?: DateTimeFilter<"WatchingItem"> | Date | string
    title?: StringFilter<"WatchingItem"> | string
    type?: StringFilter<"WatchingItem"> | string
    director?: StringNullableFilter<"WatchingItem"> | string | null
    releaseYear?: IntNullableFilter<"WatchingItem"> | number | null
    userId?: StringFilter<"WatchingItem"> | string
  }

  export type UserCreateWithoutWatchedItemsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    toWatchItems?: ToWatchItemCreateNestedManyWithoutUserInput
    watchingItems?: WatchingItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWatchedItemsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    toWatchItems?: ToWatchItemUncheckedCreateNestedManyWithoutUserInput
    watchingItems?: WatchingItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWatchedItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWatchedItemsInput, UserUncheckedCreateWithoutWatchedItemsInput>
  }

  export type UserUpsertWithoutWatchedItemsInput = {
    update: XOR<UserUpdateWithoutWatchedItemsInput, UserUncheckedUpdateWithoutWatchedItemsInput>
    create: XOR<UserCreateWithoutWatchedItemsInput, UserUncheckedCreateWithoutWatchedItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWatchedItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWatchedItemsInput, UserUncheckedUpdateWithoutWatchedItemsInput>
  }

  export type UserUpdateWithoutWatchedItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    toWatchItems?: ToWatchItemUpdateManyWithoutUserNestedInput
    watchingItems?: WatchingItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWatchedItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    toWatchItems?: ToWatchItemUncheckedUpdateManyWithoutUserNestedInput
    watchingItems?: WatchingItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutToWatchItemsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    watchedItems?: WatchedItemCreateNestedManyWithoutUserInput
    watchingItems?: WatchingItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutToWatchItemsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    watchedItems?: WatchedItemUncheckedCreateNestedManyWithoutUserInput
    watchingItems?: WatchingItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutToWatchItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutToWatchItemsInput, UserUncheckedCreateWithoutToWatchItemsInput>
  }

  export type UserUpsertWithoutToWatchItemsInput = {
    update: XOR<UserUpdateWithoutToWatchItemsInput, UserUncheckedUpdateWithoutToWatchItemsInput>
    create: XOR<UserCreateWithoutToWatchItemsInput, UserUncheckedCreateWithoutToWatchItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutToWatchItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutToWatchItemsInput, UserUncheckedUpdateWithoutToWatchItemsInput>
  }

  export type UserUpdateWithoutToWatchItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    watchedItems?: WatchedItemUpdateManyWithoutUserNestedInput
    watchingItems?: WatchingItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutToWatchItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    watchedItems?: WatchedItemUncheckedUpdateManyWithoutUserNestedInput
    watchingItems?: WatchingItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWatchingItemsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    watchedItems?: WatchedItemCreateNestedManyWithoutUserInput
    toWatchItems?: ToWatchItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWatchingItemsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    password: string
    watchedItems?: WatchedItemUncheckedCreateNestedManyWithoutUserInput
    toWatchItems?: ToWatchItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWatchingItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWatchingItemsInput, UserUncheckedCreateWithoutWatchingItemsInput>
  }

  export type UserUpsertWithoutWatchingItemsInput = {
    update: XOR<UserUpdateWithoutWatchingItemsInput, UserUncheckedUpdateWithoutWatchingItemsInput>
    create: XOR<UserCreateWithoutWatchingItemsInput, UserUncheckedCreateWithoutWatchingItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWatchingItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWatchingItemsInput, UserUncheckedUpdateWithoutWatchingItemsInput>
  }

  export type UserUpdateWithoutWatchingItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    watchedItems?: WatchedItemUpdateManyWithoutUserNestedInput
    toWatchItems?: ToWatchItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWatchingItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    watchedItems?: WatchedItemUncheckedUpdateManyWithoutUserNestedInput
    toWatchItems?: ToWatchItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WatchedItemCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    title: string
    type: string
    director?: string | null
    releaseYear?: number | null
  }

  export type ToWatchItemCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    title: string
    type: string
    director?: string | null
    releaseYear?: number | null
  }

  export type WatchingItemCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    title: string
    type: string
    director?: string | null
    releaseYear?: number | null
  }

  export type WatchedItemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WatchedItemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WatchedItemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ToWatchItemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ToWatchItemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ToWatchItemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WatchingItemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WatchingItemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WatchingItemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    director?: NullableStringFieldUpdateOperationsInput | string | null
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
  }



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