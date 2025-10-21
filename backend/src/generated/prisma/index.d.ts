
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
 * Model Module
 * 
 */
export type Module = $Result.DefaultSelection<Prisma.$ModulePayload>
/**
 * Model UserModuleProgress
 * 
 */
export type UserModuleProgress = $Result.DefaultSelection<Prisma.$UserModuleProgressPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Answer
 * 
 */
export type Answer = $Result.DefaultSelection<Prisma.$AnswerPayload>
/**
 * Model UserQuizAttempt
 * 
 */
export type UserQuizAttempt = $Result.DefaultSelection<Prisma.$UserQuizAttemptPayload>
/**
 * Model UserQuizResponse
 * 
 */
export type UserQuizResponse = $Result.DefaultSelection<Prisma.$UserQuizResponsePayload>
/**
 * Model Certificate
 * 
 */
export type Certificate = $Result.DefaultSelection<Prisma.$CertificatePayload>
/**
 * Model ModuleFeedback
 * 
 */
export type ModuleFeedback = $Result.DefaultSelection<Prisma.$ModuleFeedbackPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ModuleStatus: {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED'
};

export type ModuleStatus = (typeof ModuleStatus)[keyof typeof ModuleStatus]

}

export type ModuleStatus = $Enums.ModuleStatus

export const ModuleStatus: typeof $Enums.ModuleStatus

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
   * `prisma.module`: Exposes CRUD operations for the **Module** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modules
    * const modules = await prisma.module.findMany()
    * ```
    */
  get module(): Prisma.ModuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userModuleProgress`: Exposes CRUD operations for the **UserModuleProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserModuleProgresses
    * const userModuleProgresses = await prisma.userModuleProgress.findMany()
    * ```
    */
  get userModuleProgress(): Prisma.UserModuleProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.answer`: Exposes CRUD operations for the **Answer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answer.findMany()
    * ```
    */
  get answer(): Prisma.AnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userQuizAttempt`: Exposes CRUD operations for the **UserQuizAttempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserQuizAttempts
    * const userQuizAttempts = await prisma.userQuizAttempt.findMany()
    * ```
    */
  get userQuizAttempt(): Prisma.UserQuizAttemptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userQuizResponse`: Exposes CRUD operations for the **UserQuizResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserQuizResponses
    * const userQuizResponses = await prisma.userQuizResponse.findMany()
    * ```
    */
  get userQuizResponse(): Prisma.UserQuizResponseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.certificate`: Exposes CRUD operations for the **Certificate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Certificates
    * const certificates = await prisma.certificate.findMany()
    * ```
    */
  get certificate(): Prisma.CertificateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.moduleFeedback`: Exposes CRUD operations for the **ModuleFeedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModuleFeedbacks
    * const moduleFeedbacks = await prisma.moduleFeedback.findMany()
    * ```
    */
  get moduleFeedback(): Prisma.ModuleFeedbackDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
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
    Module: 'Module',
    UserModuleProgress: 'UserModuleProgress',
    Question: 'Question',
    Answer: 'Answer',
    UserQuizAttempt: 'UserQuizAttempt',
    UserQuizResponse: 'UserQuizResponse',
    Certificate: 'Certificate',
    ModuleFeedback: 'ModuleFeedback'
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
      modelProps: "user" | "module" | "userModuleProgress" | "question" | "answer" | "userQuizAttempt" | "userQuizResponse" | "certificate" | "moduleFeedback"
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
      Module: {
        payload: Prisma.$ModulePayload<ExtArgs>
        fields: Prisma.ModuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findFirst: {
            args: Prisma.ModuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findMany: {
            args: Prisma.ModuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          create: {
            args: Prisma.ModuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          createMany: {
            args: Prisma.ModuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          delete: {
            args: Prisma.ModuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          update: {
            args: Prisma.ModuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          deleteMany: {
            args: Prisma.ModuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          upsert: {
            args: Prisma.ModuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          aggregate: {
            args: Prisma.ModuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModule>
          }
          groupBy: {
            args: Prisma.ModuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModuleCountArgs<ExtArgs>
            result: $Utils.Optional<ModuleCountAggregateOutputType> | number
          }
        }
      }
      UserModuleProgress: {
        payload: Prisma.$UserModuleProgressPayload<ExtArgs>
        fields: Prisma.UserModuleProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserModuleProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModuleProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserModuleProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModuleProgressPayload>
          }
          findFirst: {
            args: Prisma.UserModuleProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModuleProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserModuleProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModuleProgressPayload>
          }
          findMany: {
            args: Prisma.UserModuleProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModuleProgressPayload>[]
          }
          create: {
            args: Prisma.UserModuleProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModuleProgressPayload>
          }
          createMany: {
            args: Prisma.UserModuleProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserModuleProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModuleProgressPayload>[]
          }
          delete: {
            args: Prisma.UserModuleProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModuleProgressPayload>
          }
          update: {
            args: Prisma.UserModuleProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModuleProgressPayload>
          }
          deleteMany: {
            args: Prisma.UserModuleProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserModuleProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserModuleProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModuleProgressPayload>[]
          }
          upsert: {
            args: Prisma.UserModuleProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModuleProgressPayload>
          }
          aggregate: {
            args: Prisma.UserModuleProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserModuleProgress>
          }
          groupBy: {
            args: Prisma.UserModuleProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserModuleProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserModuleProgressCountArgs<ExtArgs>
            result: $Utils.Optional<UserModuleProgressCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Answer: {
        payload: Prisma.$AnswerPayload<ExtArgs>
        fields: Prisma.AnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findFirst: {
            args: Prisma.AnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findMany: {
            args: Prisma.AnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          create: {
            args: Prisma.AnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          createMany: {
            args: Prisma.AnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          delete: {
            args: Prisma.AnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          update: {
            args: Prisma.AnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          deleteMany: {
            args: Prisma.AnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          upsert: {
            args: Prisma.AnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          aggregate: {
            args: Prisma.AnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswer>
          }
          groupBy: {
            args: Prisma.AnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnswerCountArgs<ExtArgs>
            result: $Utils.Optional<AnswerCountAggregateOutputType> | number
          }
        }
      }
      UserQuizAttempt: {
        payload: Prisma.$UserQuizAttemptPayload<ExtArgs>
        fields: Prisma.UserQuizAttemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserQuizAttemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuizAttemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserQuizAttemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuizAttemptPayload>
          }
          findFirst: {
            args: Prisma.UserQuizAttemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuizAttemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserQuizAttemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuizAttemptPayload>
          }
          findMany: {
            args: Prisma.UserQuizAttemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuizAttemptPayload>[]
          }
          create: {
            args: Prisma.UserQuizAttemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuizAttemptPayload>
          }
          createMany: {
            args: Prisma.UserQuizAttemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserQuizAttemptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuizAttemptPayload>[]
          }
          delete: {
            args: Prisma.UserQuizAttemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuizAttemptPayload>
          }
          update: {
            args: Prisma.UserQuizAttemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuizAttemptPayload>
          }
          deleteMany: {
            args: Prisma.UserQuizAttemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserQuizAttemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserQuizAttemptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuizAttemptPayload>[]
          }
          upsert: {
            args: Prisma.UserQuizAttemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuizAttemptPayload>
          }
          aggregate: {
            args: Prisma.UserQuizAttemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserQuizAttempt>
          }
          groupBy: {
            args: Prisma.UserQuizAttemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserQuizAttemptGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserQuizAttemptCountArgs<ExtArgs>
            result: $Utils.Optional<UserQuizAttemptCountAggregateOutputType> | number
          }
        }
      }
      UserQuizResponse: {
        payload: Prisma.$UserQuizResponsePayload<ExtArgs>
        fields: Prisma.UserQuizResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserQuizResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuizResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserQuizResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuizResponsePayload>
          }
          findFirst: {
            args: Prisma.UserQuizResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuizResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserQuizResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuizResponsePayload>
          }
          findMany: {
            args: Prisma.UserQuizResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuizResponsePayload>[]
          }
          create: {
            args: Prisma.UserQuizResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuizResponsePayload>
          }
          createMany: {
            args: Prisma.UserQuizResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserQuizResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuizResponsePayload>[]
          }
          delete: {
            args: Prisma.UserQuizResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuizResponsePayload>
          }
          update: {
            args: Prisma.UserQuizResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuizResponsePayload>
          }
          deleteMany: {
            args: Prisma.UserQuizResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserQuizResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserQuizResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuizResponsePayload>[]
          }
          upsert: {
            args: Prisma.UserQuizResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuizResponsePayload>
          }
          aggregate: {
            args: Prisma.UserQuizResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserQuizResponse>
          }
          groupBy: {
            args: Prisma.UserQuizResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserQuizResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserQuizResponseCountArgs<ExtArgs>
            result: $Utils.Optional<UserQuizResponseCountAggregateOutputType> | number
          }
        }
      }
      Certificate: {
        payload: Prisma.$CertificatePayload<ExtArgs>
        fields: Prisma.CertificateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CertificateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CertificateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          findFirst: {
            args: Prisma.CertificateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CertificateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          findMany: {
            args: Prisma.CertificateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          create: {
            args: Prisma.CertificateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          createMany: {
            args: Prisma.CertificateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CertificateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          delete: {
            args: Prisma.CertificateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          update: {
            args: Prisma.CertificateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          deleteMany: {
            args: Prisma.CertificateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CertificateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CertificateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          upsert: {
            args: Prisma.CertificateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          aggregate: {
            args: Prisma.CertificateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCertificate>
          }
          groupBy: {
            args: Prisma.CertificateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CertificateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CertificateCountArgs<ExtArgs>
            result: $Utils.Optional<CertificateCountAggregateOutputType> | number
          }
        }
      }
      ModuleFeedback: {
        payload: Prisma.$ModuleFeedbackPayload<ExtArgs>
        fields: Prisma.ModuleFeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModuleFeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleFeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModuleFeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleFeedbackPayload>
          }
          findFirst: {
            args: Prisma.ModuleFeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleFeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModuleFeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleFeedbackPayload>
          }
          findMany: {
            args: Prisma.ModuleFeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleFeedbackPayload>[]
          }
          create: {
            args: Prisma.ModuleFeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleFeedbackPayload>
          }
          createMany: {
            args: Prisma.ModuleFeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModuleFeedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleFeedbackPayload>[]
          }
          delete: {
            args: Prisma.ModuleFeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleFeedbackPayload>
          }
          update: {
            args: Prisma.ModuleFeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleFeedbackPayload>
          }
          deleteMany: {
            args: Prisma.ModuleFeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModuleFeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModuleFeedbackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleFeedbackPayload>[]
          }
          upsert: {
            args: Prisma.ModuleFeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleFeedbackPayload>
          }
          aggregate: {
            args: Prisma.ModuleFeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModuleFeedback>
          }
          groupBy: {
            args: Prisma.ModuleFeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModuleFeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModuleFeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<ModuleFeedbackCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    module?: ModuleOmit
    userModuleProgress?: UserModuleProgressOmit
    question?: QuestionOmit
    answer?: AnswerOmit
    userQuizAttempt?: UserQuizAttemptOmit
    userQuizResponse?: UserQuizResponseOmit
    certificate?: CertificateOmit
    moduleFeedback?: ModuleFeedbackOmit
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
    moduleProgress: number
    quizAttempts: number
    certificates: number
    moduleFeedback: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    moduleProgress?: boolean | UserCountOutputTypeCountModuleProgressArgs
    quizAttempts?: boolean | UserCountOutputTypeCountQuizAttemptsArgs
    certificates?: boolean | UserCountOutputTypeCountCertificatesArgs
    moduleFeedback?: boolean | UserCountOutputTypeCountModuleFeedbackArgs
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
  export type UserCountOutputTypeCountModuleProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserModuleProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuizAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserQuizAttemptWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCertificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountModuleFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleFeedbackWhereInput
  }


  /**
   * Count Type ModuleCountOutputType
   */

  export type ModuleCountOutputType = {
    userProgress: number
    questions: number
    moduleFeedback: number
  }

  export type ModuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userProgress?: boolean | ModuleCountOutputTypeCountUserProgressArgs
    questions?: boolean | ModuleCountOutputTypeCountQuestionsArgs
    moduleFeedback?: boolean | ModuleCountOutputTypeCountModuleFeedbackArgs
  }

  // Custom InputTypes
  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleCountOutputType
     */
    select?: ModuleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountUserProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserModuleProgressWhereInput
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountModuleFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleFeedbackWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    answers: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | QuestionCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }


  /**
   * Count Type AnswerCountOutputType
   */

  export type AnswerCountOutputType = {
    userQuizResponses: number
  }

  export type AnswerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userQuizResponses?: boolean | AnswerCountOutputTypeCountUserQuizResponsesArgs
  }

  // Custom InputTypes
  /**
   * AnswerCountOutputType without action
   */
  export type AnswerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerCountOutputType
     */
    select?: AnswerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnswerCountOutputType without action
   */
  export type AnswerCountOutputTypeCountUserQuizResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserQuizResponseWhereInput
  }


  /**
   * Count Type UserQuizAttemptCountOutputType
   */

  export type UserQuizAttemptCountOutputType = {
    responses: number
  }

  export type UserQuizAttemptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | UserQuizAttemptCountOutputTypeCountResponsesArgs
  }

  // Custom InputTypes
  /**
   * UserQuizAttemptCountOutputType without action
   */
  export type UserQuizAttemptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizAttemptCountOutputType
     */
    select?: UserQuizAttemptCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserQuizAttemptCountOutputType without action
   */
  export type UserQuizAttemptCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserQuizResponseWhereInput
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
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
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
    email: string
    password: string
    firstName: string
    lastName: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
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
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    moduleProgress?: boolean | User$moduleProgressArgs<ExtArgs>
    quizAttempts?: boolean | User$quizAttemptsArgs<ExtArgs>
    certificates?: boolean | User$certificatesArgs<ExtArgs>
    moduleFeedback?: boolean | User$moduleFeedbackArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    moduleProgress?: boolean | User$moduleProgressArgs<ExtArgs>
    quizAttempts?: boolean | User$quizAttemptsArgs<ExtArgs>
    certificates?: boolean | User$certificatesArgs<ExtArgs>
    moduleFeedback?: boolean | User$moduleFeedbackArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      moduleProgress: Prisma.$UserModuleProgressPayload<ExtArgs>[]
      quizAttempts: Prisma.$UserQuizAttemptPayload<ExtArgs>[]
      certificates: Prisma.$CertificatePayload<ExtArgs>[]
      moduleFeedback: Prisma.$ModuleFeedbackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      firstName: string
      lastName: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
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
    moduleProgress<T extends User$moduleProgressArgs<ExtArgs> = {}>(args?: Subset<T, User$moduleProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quizAttempts<T extends User$quizAttemptsArgs<ExtArgs> = {}>(args?: Subset<T, User$quizAttemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuizAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    certificates<T extends User$certificatesArgs<ExtArgs> = {}>(args?: Subset<T, User$certificatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    moduleFeedback<T extends User$moduleFeedbackArgs<ExtArgs> = {}>(args?: Subset<T, User$moduleFeedbackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuleFeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.moduleProgress
   */
  export type User$moduleProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleProgress
     */
    select?: UserModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModuleProgress
     */
    omit?: UserModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleProgressInclude<ExtArgs> | null
    where?: UserModuleProgressWhereInput
    orderBy?: UserModuleProgressOrderByWithRelationInput | UserModuleProgressOrderByWithRelationInput[]
    cursor?: UserModuleProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserModuleProgressScalarFieldEnum | UserModuleProgressScalarFieldEnum[]
  }

  /**
   * User.quizAttempts
   */
  export type User$quizAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizAttempt
     */
    select?: UserQuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizAttempt
     */
    omit?: UserQuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizAttemptInclude<ExtArgs> | null
    where?: UserQuizAttemptWhereInput
    orderBy?: UserQuizAttemptOrderByWithRelationInput | UserQuizAttemptOrderByWithRelationInput[]
    cursor?: UserQuizAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserQuizAttemptScalarFieldEnum | UserQuizAttemptScalarFieldEnum[]
  }

  /**
   * User.certificates
   */
  export type User$certificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    cursor?: CertificateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * User.moduleFeedback
   */
  export type User$moduleFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleFeedback
     */
    select?: ModuleFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleFeedback
     */
    omit?: ModuleFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleFeedbackInclude<ExtArgs> | null
    where?: ModuleFeedbackWhereInput
    orderBy?: ModuleFeedbackOrderByWithRelationInput | ModuleFeedbackOrderByWithRelationInput[]
    cursor?: ModuleFeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuleFeedbackScalarFieldEnum | ModuleFeedbackScalarFieldEnum[]
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
   * Model Module
   */

  export type AggregateModule = {
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  export type ModuleAvgAggregateOutputType = {
    order: number | null
  }

  export type ModuleSumAggregateOutputType = {
    order: number | null
  }

  export type ModuleMinAggregateOutputType = {
    id: string | null
    title: string | null
    videoUrl: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModuleMaxAggregateOutputType = {
    id: string | null
    title: string | null
    videoUrl: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModuleCountAggregateOutputType = {
    id: number
    title: number
    videoUrl: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ModuleAvgAggregateInputType = {
    order?: true
  }

  export type ModuleSumAggregateInputType = {
    order?: true
  }

  export type ModuleMinAggregateInputType = {
    id?: true
    title?: true
    videoUrl?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModuleMaxAggregateInputType = {
    id?: true
    title?: true
    videoUrl?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModuleCountAggregateInputType = {
    id?: true
    title?: true
    videoUrl?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Module to aggregate.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Modules
    **/
    _count?: true | ModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuleMaxAggregateInputType
  }

  export type GetModuleAggregateType<T extends ModuleAggregateArgs> = {
        [P in keyof T & keyof AggregateModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModule[P]>
      : GetScalarType<T[P], AggregateModule[P]>
  }




  export type ModuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleWhereInput
    orderBy?: ModuleOrderByWithAggregationInput | ModuleOrderByWithAggregationInput[]
    by: ModuleScalarFieldEnum[] | ModuleScalarFieldEnum
    having?: ModuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuleCountAggregateInputType | true
    _avg?: ModuleAvgAggregateInputType
    _sum?: ModuleSumAggregateInputType
    _min?: ModuleMinAggregateInputType
    _max?: ModuleMaxAggregateInputType
  }

  export type ModuleGroupByOutputType = {
    id: string
    title: string
    videoUrl: string
    order: number
    createdAt: Date
    updatedAt: Date
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  type GetModuleGroupByPayload<T extends ModuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuleGroupByOutputType[P]>
            : GetScalarType<T[P], ModuleGroupByOutputType[P]>
        }
      >
    >


  export type ModuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    videoUrl?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userProgress?: boolean | Module$userProgressArgs<ExtArgs>
    questions?: boolean | Module$questionsArgs<ExtArgs>
    moduleFeedback?: boolean | Module$moduleFeedbackArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    videoUrl?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    videoUrl?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectScalar = {
    id?: boolean
    title?: boolean
    videoUrl?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ModuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "videoUrl" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["module"]>
  export type ModuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userProgress?: boolean | Module$userProgressArgs<ExtArgs>
    questions?: boolean | Module$questionsArgs<ExtArgs>
    moduleFeedback?: boolean | Module$moduleFeedbackArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ModuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ModulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Module"
    objects: {
      userProgress: Prisma.$UserModuleProgressPayload<ExtArgs>[]
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      moduleFeedback: Prisma.$ModuleFeedbackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      videoUrl: string
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["module"]>
    composites: {}
  }

  type ModuleGetPayload<S extends boolean | null | undefined | ModuleDefaultArgs> = $Result.GetResult<Prisma.$ModulePayload, S>

  type ModuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModuleCountAggregateInputType | true
    }

  export interface ModuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Module'], meta: { name: 'Module' } }
    /**
     * Find zero or one Module that matches the filter.
     * @param {ModuleFindUniqueArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModuleFindUniqueArgs>(args: SelectSubset<T, ModuleFindUniqueArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Module that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModuleFindUniqueOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModuleFindUniqueOrThrowArgs>(args: SelectSubset<T, ModuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModuleFindFirstArgs>(args?: SelectSubset<T, ModuleFindFirstArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModuleFindFirstOrThrowArgs>(args?: SelectSubset<T, ModuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Modules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modules
     * const modules = await prisma.module.findMany()
     * 
     * // Get first 10 Modules
     * const modules = await prisma.module.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moduleWithIdOnly = await prisma.module.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModuleFindManyArgs>(args?: SelectSubset<T, ModuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Module.
     * @param {ModuleCreateArgs} args - Arguments to create a Module.
     * @example
     * // Create one Module
     * const Module = await prisma.module.create({
     *   data: {
     *     // ... data to create a Module
     *   }
     * })
     * 
     */
    create<T extends ModuleCreateArgs>(args: SelectSubset<T, ModuleCreateArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Modules.
     * @param {ModuleCreateManyArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModuleCreateManyArgs>(args?: SelectSubset<T, ModuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Modules and returns the data saved in the database.
     * @param {ModuleCreateManyAndReturnArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Modules and only return the `id`
     * const moduleWithIdOnly = await prisma.module.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModuleCreateManyAndReturnArgs>(args?: SelectSubset<T, ModuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Module.
     * @param {ModuleDeleteArgs} args - Arguments to delete one Module.
     * @example
     * // Delete one Module
     * const Module = await prisma.module.delete({
     *   where: {
     *     // ... filter to delete one Module
     *   }
     * })
     * 
     */
    delete<T extends ModuleDeleteArgs>(args: SelectSubset<T, ModuleDeleteArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Module.
     * @param {ModuleUpdateArgs} args - Arguments to update one Module.
     * @example
     * // Update one Module
     * const module = await prisma.module.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModuleUpdateArgs>(args: SelectSubset<T, ModuleUpdateArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Modules.
     * @param {ModuleDeleteManyArgs} args - Arguments to filter Modules to delete.
     * @example
     * // Delete a few Modules
     * const { count } = await prisma.module.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModuleDeleteManyArgs>(args?: SelectSubset<T, ModuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModuleUpdateManyArgs>(args: SelectSubset<T, ModuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules and returns the data updated in the database.
     * @param {ModuleUpdateManyAndReturnArgs} args - Arguments to update many Modules.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Modules and only return the `id`
     * const moduleWithIdOnly = await prisma.module.updateManyAndReturn({
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
    updateManyAndReturn<T extends ModuleUpdateManyAndReturnArgs>(args: SelectSubset<T, ModuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Module.
     * @param {ModuleUpsertArgs} args - Arguments to update or create a Module.
     * @example
     * // Update or create a Module
     * const module = await prisma.module.upsert({
     *   create: {
     *     // ... data to create a Module
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Module we want to update
     *   }
     * })
     */
    upsert<T extends ModuleUpsertArgs>(args: SelectSubset<T, ModuleUpsertArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleCountArgs} args - Arguments to filter Modules to count.
     * @example
     * // Count the number of Modules
     * const count = await prisma.module.count({
     *   where: {
     *     // ... the filter for the Modules we want to count
     *   }
     * })
    **/
    count<T extends ModuleCountArgs>(
      args?: Subset<T, ModuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModuleAggregateArgs>(args: Subset<T, ModuleAggregateArgs>): Prisma.PrismaPromise<GetModuleAggregateType<T>>

    /**
     * Group by Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleGroupByArgs} args - Group by arguments.
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
      T extends ModuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModuleGroupByArgs['orderBy'] }
        : { orderBy?: ModuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Module model
   */
  readonly fields: ModuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Module.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userProgress<T extends Module$userProgressArgs<ExtArgs> = {}>(args?: Subset<T, Module$userProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questions<T extends Module$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Module$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    moduleFeedback<T extends Module$moduleFeedbackArgs<ExtArgs> = {}>(args?: Subset<T, Module$moduleFeedbackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuleFeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Module model
   */
  interface ModuleFieldRefs {
    readonly id: FieldRef<"Module", 'String'>
    readonly title: FieldRef<"Module", 'String'>
    readonly videoUrl: FieldRef<"Module", 'String'>
    readonly order: FieldRef<"Module", 'Int'>
    readonly createdAt: FieldRef<"Module", 'DateTime'>
    readonly updatedAt: FieldRef<"Module", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Module findUnique
   */
  export type ModuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module findUniqueOrThrow
   */
  export type ModuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module findFirst
   */
  export type ModuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module findFirstOrThrow
   */
  export type ModuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module findMany
   */
  export type ModuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Modules to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module create
   */
  export type ModuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to create a Module.
     */
    data: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
  }

  /**
   * Module createMany
   */
  export type ModuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Modules.
     */
    data: ModuleCreateManyInput | ModuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Module createManyAndReturn
   */
  export type ModuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * The data used to create many Modules.
     */
    data: ModuleCreateManyInput | ModuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Module update
   */
  export type ModuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to update a Module.
     */
    data: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
    /**
     * Choose, which Module to update.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module updateMany
   */
  export type ModuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Modules.
     */
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyInput>
    /**
     * Filter which Modules to update
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to update.
     */
    limit?: number
  }

  /**
   * Module updateManyAndReturn
   */
  export type ModuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * The data used to update Modules.
     */
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyInput>
    /**
     * Filter which Modules to update
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to update.
     */
    limit?: number
  }

  /**
   * Module upsert
   */
  export type ModuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The filter to search for the Module to update in case it exists.
     */
    where: ModuleWhereUniqueInput
    /**
     * In case the Module found by the `where` argument doesn't exist, create a new Module with this data.
     */
    create: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
    /**
     * In case the Module was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
  }

  /**
   * Module delete
   */
  export type ModuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter which Module to delete.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module deleteMany
   */
  export type ModuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modules to delete
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to delete.
     */
    limit?: number
  }

  /**
   * Module.userProgress
   */
  export type Module$userProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleProgress
     */
    select?: UserModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModuleProgress
     */
    omit?: UserModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleProgressInclude<ExtArgs> | null
    where?: UserModuleProgressWhereInput
    orderBy?: UserModuleProgressOrderByWithRelationInput | UserModuleProgressOrderByWithRelationInput[]
    cursor?: UserModuleProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserModuleProgressScalarFieldEnum | UserModuleProgressScalarFieldEnum[]
  }

  /**
   * Module.questions
   */
  export type Module$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Module.moduleFeedback
   */
  export type Module$moduleFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleFeedback
     */
    select?: ModuleFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleFeedback
     */
    omit?: ModuleFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleFeedbackInclude<ExtArgs> | null
    where?: ModuleFeedbackWhereInput
    orderBy?: ModuleFeedbackOrderByWithRelationInput | ModuleFeedbackOrderByWithRelationInput[]
    cursor?: ModuleFeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuleFeedbackScalarFieldEnum | ModuleFeedbackScalarFieldEnum[]
  }

  /**
   * Module without action
   */
  export type ModuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
  }


  /**
   * Model UserModuleProgress
   */

  export type AggregateUserModuleProgress = {
    _count: UserModuleProgressCountAggregateOutputType | null
    _min: UserModuleProgressMinAggregateOutputType | null
    _max: UserModuleProgressMaxAggregateOutputType | null
  }

  export type UserModuleProgressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    moduleId: string | null
    status: $Enums.ModuleStatus | null
    isUnlocked: boolean | null
    quizPassed: boolean | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserModuleProgressMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    moduleId: string | null
    status: $Enums.ModuleStatus | null
    isUnlocked: boolean | null
    quizPassed: boolean | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserModuleProgressCountAggregateOutputType = {
    id: number
    userId: number
    moduleId: number
    status: number
    isUnlocked: number
    quizPassed: number
    startedAt: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserModuleProgressMinAggregateInputType = {
    id?: true
    userId?: true
    moduleId?: true
    status?: true
    isUnlocked?: true
    quizPassed?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserModuleProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    moduleId?: true
    status?: true
    isUnlocked?: true
    quizPassed?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserModuleProgressCountAggregateInputType = {
    id?: true
    userId?: true
    moduleId?: true
    status?: true
    isUnlocked?: true
    quizPassed?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserModuleProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserModuleProgress to aggregate.
     */
    where?: UserModuleProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModuleProgresses to fetch.
     */
    orderBy?: UserModuleProgressOrderByWithRelationInput | UserModuleProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserModuleProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModuleProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModuleProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserModuleProgresses
    **/
    _count?: true | UserModuleProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserModuleProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserModuleProgressMaxAggregateInputType
  }

  export type GetUserModuleProgressAggregateType<T extends UserModuleProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateUserModuleProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserModuleProgress[P]>
      : GetScalarType<T[P], AggregateUserModuleProgress[P]>
  }




  export type UserModuleProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserModuleProgressWhereInput
    orderBy?: UserModuleProgressOrderByWithAggregationInput | UserModuleProgressOrderByWithAggregationInput[]
    by: UserModuleProgressScalarFieldEnum[] | UserModuleProgressScalarFieldEnum
    having?: UserModuleProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserModuleProgressCountAggregateInputType | true
    _min?: UserModuleProgressMinAggregateInputType
    _max?: UserModuleProgressMaxAggregateInputType
  }

  export type UserModuleProgressGroupByOutputType = {
    id: string
    userId: string
    moduleId: string
    status: $Enums.ModuleStatus
    isUnlocked: boolean
    quizPassed: boolean
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserModuleProgressCountAggregateOutputType | null
    _min: UserModuleProgressMinAggregateOutputType | null
    _max: UserModuleProgressMaxAggregateOutputType | null
  }

  type GetUserModuleProgressGroupByPayload<T extends UserModuleProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserModuleProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserModuleProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserModuleProgressGroupByOutputType[P]>
            : GetScalarType<T[P], UserModuleProgressGroupByOutputType[P]>
        }
      >
    >


  export type UserModuleProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    moduleId?: boolean
    status?: boolean
    isUnlocked?: boolean
    quizPassed?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userModuleProgress"]>

  export type UserModuleProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    moduleId?: boolean
    status?: boolean
    isUnlocked?: boolean
    quizPassed?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userModuleProgress"]>

  export type UserModuleProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    moduleId?: boolean
    status?: boolean
    isUnlocked?: boolean
    quizPassed?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userModuleProgress"]>

  export type UserModuleProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    moduleId?: boolean
    status?: boolean
    isUnlocked?: boolean
    quizPassed?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserModuleProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "moduleId" | "status" | "isUnlocked" | "quizPassed" | "startedAt" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["userModuleProgress"]>
  export type UserModuleProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }
  export type UserModuleProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }
  export type UserModuleProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }

  export type $UserModuleProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserModuleProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      module: Prisma.$ModulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      moduleId: string
      status: $Enums.ModuleStatus
      isUnlocked: boolean
      quizPassed: boolean
      startedAt: Date | null
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userModuleProgress"]>
    composites: {}
  }

  type UserModuleProgressGetPayload<S extends boolean | null | undefined | UserModuleProgressDefaultArgs> = $Result.GetResult<Prisma.$UserModuleProgressPayload, S>

  type UserModuleProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserModuleProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserModuleProgressCountAggregateInputType | true
    }

  export interface UserModuleProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserModuleProgress'], meta: { name: 'UserModuleProgress' } }
    /**
     * Find zero or one UserModuleProgress that matches the filter.
     * @param {UserModuleProgressFindUniqueArgs} args - Arguments to find a UserModuleProgress
     * @example
     * // Get one UserModuleProgress
     * const userModuleProgress = await prisma.userModuleProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserModuleProgressFindUniqueArgs>(args: SelectSubset<T, UserModuleProgressFindUniqueArgs<ExtArgs>>): Prisma__UserModuleProgressClient<$Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserModuleProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserModuleProgressFindUniqueOrThrowArgs} args - Arguments to find a UserModuleProgress
     * @example
     * // Get one UserModuleProgress
     * const userModuleProgress = await prisma.userModuleProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserModuleProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, UserModuleProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserModuleProgressClient<$Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserModuleProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModuleProgressFindFirstArgs} args - Arguments to find a UserModuleProgress
     * @example
     * // Get one UserModuleProgress
     * const userModuleProgress = await prisma.userModuleProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserModuleProgressFindFirstArgs>(args?: SelectSubset<T, UserModuleProgressFindFirstArgs<ExtArgs>>): Prisma__UserModuleProgressClient<$Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserModuleProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModuleProgressFindFirstOrThrowArgs} args - Arguments to find a UserModuleProgress
     * @example
     * // Get one UserModuleProgress
     * const userModuleProgress = await prisma.userModuleProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserModuleProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, UserModuleProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserModuleProgressClient<$Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserModuleProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModuleProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserModuleProgresses
     * const userModuleProgresses = await prisma.userModuleProgress.findMany()
     * 
     * // Get first 10 UserModuleProgresses
     * const userModuleProgresses = await prisma.userModuleProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userModuleProgressWithIdOnly = await prisma.userModuleProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserModuleProgressFindManyArgs>(args?: SelectSubset<T, UserModuleProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserModuleProgress.
     * @param {UserModuleProgressCreateArgs} args - Arguments to create a UserModuleProgress.
     * @example
     * // Create one UserModuleProgress
     * const UserModuleProgress = await prisma.userModuleProgress.create({
     *   data: {
     *     // ... data to create a UserModuleProgress
     *   }
     * })
     * 
     */
    create<T extends UserModuleProgressCreateArgs>(args: SelectSubset<T, UserModuleProgressCreateArgs<ExtArgs>>): Prisma__UserModuleProgressClient<$Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserModuleProgresses.
     * @param {UserModuleProgressCreateManyArgs} args - Arguments to create many UserModuleProgresses.
     * @example
     * // Create many UserModuleProgresses
     * const userModuleProgress = await prisma.userModuleProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserModuleProgressCreateManyArgs>(args?: SelectSubset<T, UserModuleProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserModuleProgresses and returns the data saved in the database.
     * @param {UserModuleProgressCreateManyAndReturnArgs} args - Arguments to create many UserModuleProgresses.
     * @example
     * // Create many UserModuleProgresses
     * const userModuleProgress = await prisma.userModuleProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserModuleProgresses and only return the `id`
     * const userModuleProgressWithIdOnly = await prisma.userModuleProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserModuleProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, UserModuleProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserModuleProgress.
     * @param {UserModuleProgressDeleteArgs} args - Arguments to delete one UserModuleProgress.
     * @example
     * // Delete one UserModuleProgress
     * const UserModuleProgress = await prisma.userModuleProgress.delete({
     *   where: {
     *     // ... filter to delete one UserModuleProgress
     *   }
     * })
     * 
     */
    delete<T extends UserModuleProgressDeleteArgs>(args: SelectSubset<T, UserModuleProgressDeleteArgs<ExtArgs>>): Prisma__UserModuleProgressClient<$Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserModuleProgress.
     * @param {UserModuleProgressUpdateArgs} args - Arguments to update one UserModuleProgress.
     * @example
     * // Update one UserModuleProgress
     * const userModuleProgress = await prisma.userModuleProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserModuleProgressUpdateArgs>(args: SelectSubset<T, UserModuleProgressUpdateArgs<ExtArgs>>): Prisma__UserModuleProgressClient<$Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserModuleProgresses.
     * @param {UserModuleProgressDeleteManyArgs} args - Arguments to filter UserModuleProgresses to delete.
     * @example
     * // Delete a few UserModuleProgresses
     * const { count } = await prisma.userModuleProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserModuleProgressDeleteManyArgs>(args?: SelectSubset<T, UserModuleProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserModuleProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModuleProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserModuleProgresses
     * const userModuleProgress = await prisma.userModuleProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserModuleProgressUpdateManyArgs>(args: SelectSubset<T, UserModuleProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserModuleProgresses and returns the data updated in the database.
     * @param {UserModuleProgressUpdateManyAndReturnArgs} args - Arguments to update many UserModuleProgresses.
     * @example
     * // Update many UserModuleProgresses
     * const userModuleProgress = await prisma.userModuleProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserModuleProgresses and only return the `id`
     * const userModuleProgressWithIdOnly = await prisma.userModuleProgress.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserModuleProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, UserModuleProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserModuleProgress.
     * @param {UserModuleProgressUpsertArgs} args - Arguments to update or create a UserModuleProgress.
     * @example
     * // Update or create a UserModuleProgress
     * const userModuleProgress = await prisma.userModuleProgress.upsert({
     *   create: {
     *     // ... data to create a UserModuleProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserModuleProgress we want to update
     *   }
     * })
     */
    upsert<T extends UserModuleProgressUpsertArgs>(args: SelectSubset<T, UserModuleProgressUpsertArgs<ExtArgs>>): Prisma__UserModuleProgressClient<$Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserModuleProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModuleProgressCountArgs} args - Arguments to filter UserModuleProgresses to count.
     * @example
     * // Count the number of UserModuleProgresses
     * const count = await prisma.userModuleProgress.count({
     *   where: {
     *     // ... the filter for the UserModuleProgresses we want to count
     *   }
     * })
    **/
    count<T extends UserModuleProgressCountArgs>(
      args?: Subset<T, UserModuleProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserModuleProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserModuleProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModuleProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserModuleProgressAggregateArgs>(args: Subset<T, UserModuleProgressAggregateArgs>): Prisma.PrismaPromise<GetUserModuleProgressAggregateType<T>>

    /**
     * Group by UserModuleProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModuleProgressGroupByArgs} args - Group by arguments.
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
      T extends UserModuleProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserModuleProgressGroupByArgs['orderBy'] }
        : { orderBy?: UserModuleProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserModuleProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserModuleProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserModuleProgress model
   */
  readonly fields: UserModuleProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserModuleProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserModuleProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    module<T extends ModuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuleDefaultArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserModuleProgress model
   */
  interface UserModuleProgressFieldRefs {
    readonly id: FieldRef<"UserModuleProgress", 'String'>
    readonly userId: FieldRef<"UserModuleProgress", 'String'>
    readonly moduleId: FieldRef<"UserModuleProgress", 'String'>
    readonly status: FieldRef<"UserModuleProgress", 'ModuleStatus'>
    readonly isUnlocked: FieldRef<"UserModuleProgress", 'Boolean'>
    readonly quizPassed: FieldRef<"UserModuleProgress", 'Boolean'>
    readonly startedAt: FieldRef<"UserModuleProgress", 'DateTime'>
    readonly completedAt: FieldRef<"UserModuleProgress", 'DateTime'>
    readonly createdAt: FieldRef<"UserModuleProgress", 'DateTime'>
    readonly updatedAt: FieldRef<"UserModuleProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserModuleProgress findUnique
   */
  export type UserModuleProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleProgress
     */
    select?: UserModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModuleProgress
     */
    omit?: UserModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserModuleProgress to fetch.
     */
    where: UserModuleProgressWhereUniqueInput
  }

  /**
   * UserModuleProgress findUniqueOrThrow
   */
  export type UserModuleProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleProgress
     */
    select?: UserModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModuleProgress
     */
    omit?: UserModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserModuleProgress to fetch.
     */
    where: UserModuleProgressWhereUniqueInput
  }

  /**
   * UserModuleProgress findFirst
   */
  export type UserModuleProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleProgress
     */
    select?: UserModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModuleProgress
     */
    omit?: UserModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserModuleProgress to fetch.
     */
    where?: UserModuleProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModuleProgresses to fetch.
     */
    orderBy?: UserModuleProgressOrderByWithRelationInput | UserModuleProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserModuleProgresses.
     */
    cursor?: UserModuleProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModuleProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModuleProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserModuleProgresses.
     */
    distinct?: UserModuleProgressScalarFieldEnum | UserModuleProgressScalarFieldEnum[]
  }

  /**
   * UserModuleProgress findFirstOrThrow
   */
  export type UserModuleProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleProgress
     */
    select?: UserModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModuleProgress
     */
    omit?: UserModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserModuleProgress to fetch.
     */
    where?: UserModuleProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModuleProgresses to fetch.
     */
    orderBy?: UserModuleProgressOrderByWithRelationInput | UserModuleProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserModuleProgresses.
     */
    cursor?: UserModuleProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModuleProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModuleProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserModuleProgresses.
     */
    distinct?: UserModuleProgressScalarFieldEnum | UserModuleProgressScalarFieldEnum[]
  }

  /**
   * UserModuleProgress findMany
   */
  export type UserModuleProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleProgress
     */
    select?: UserModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModuleProgress
     */
    omit?: UserModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserModuleProgresses to fetch.
     */
    where?: UserModuleProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModuleProgresses to fetch.
     */
    orderBy?: UserModuleProgressOrderByWithRelationInput | UserModuleProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserModuleProgresses.
     */
    cursor?: UserModuleProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModuleProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModuleProgresses.
     */
    skip?: number
    distinct?: UserModuleProgressScalarFieldEnum | UserModuleProgressScalarFieldEnum[]
  }

  /**
   * UserModuleProgress create
   */
  export type UserModuleProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleProgress
     */
    select?: UserModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModuleProgress
     */
    omit?: UserModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a UserModuleProgress.
     */
    data: XOR<UserModuleProgressCreateInput, UserModuleProgressUncheckedCreateInput>
  }

  /**
   * UserModuleProgress createMany
   */
  export type UserModuleProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserModuleProgresses.
     */
    data: UserModuleProgressCreateManyInput | UserModuleProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserModuleProgress createManyAndReturn
   */
  export type UserModuleProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleProgress
     */
    select?: UserModuleProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserModuleProgress
     */
    omit?: UserModuleProgressOmit<ExtArgs> | null
    /**
     * The data used to create many UserModuleProgresses.
     */
    data: UserModuleProgressCreateManyInput | UserModuleProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserModuleProgress update
   */
  export type UserModuleProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleProgress
     */
    select?: UserModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModuleProgress
     */
    omit?: UserModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a UserModuleProgress.
     */
    data: XOR<UserModuleProgressUpdateInput, UserModuleProgressUncheckedUpdateInput>
    /**
     * Choose, which UserModuleProgress to update.
     */
    where: UserModuleProgressWhereUniqueInput
  }

  /**
   * UserModuleProgress updateMany
   */
  export type UserModuleProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserModuleProgresses.
     */
    data: XOR<UserModuleProgressUpdateManyMutationInput, UserModuleProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserModuleProgresses to update
     */
    where?: UserModuleProgressWhereInput
    /**
     * Limit how many UserModuleProgresses to update.
     */
    limit?: number
  }

  /**
   * UserModuleProgress updateManyAndReturn
   */
  export type UserModuleProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleProgress
     */
    select?: UserModuleProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserModuleProgress
     */
    omit?: UserModuleProgressOmit<ExtArgs> | null
    /**
     * The data used to update UserModuleProgresses.
     */
    data: XOR<UserModuleProgressUpdateManyMutationInput, UserModuleProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserModuleProgresses to update
     */
    where?: UserModuleProgressWhereInput
    /**
     * Limit how many UserModuleProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserModuleProgress upsert
   */
  export type UserModuleProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleProgress
     */
    select?: UserModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModuleProgress
     */
    omit?: UserModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the UserModuleProgress to update in case it exists.
     */
    where: UserModuleProgressWhereUniqueInput
    /**
     * In case the UserModuleProgress found by the `where` argument doesn't exist, create a new UserModuleProgress with this data.
     */
    create: XOR<UserModuleProgressCreateInput, UserModuleProgressUncheckedCreateInput>
    /**
     * In case the UserModuleProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserModuleProgressUpdateInput, UserModuleProgressUncheckedUpdateInput>
  }

  /**
   * UserModuleProgress delete
   */
  export type UserModuleProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleProgress
     */
    select?: UserModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModuleProgress
     */
    omit?: UserModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleProgressInclude<ExtArgs> | null
    /**
     * Filter which UserModuleProgress to delete.
     */
    where: UserModuleProgressWhereUniqueInput
  }

  /**
   * UserModuleProgress deleteMany
   */
  export type UserModuleProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserModuleProgresses to delete
     */
    where?: UserModuleProgressWhereInput
    /**
     * Limit how many UserModuleProgresses to delete.
     */
    limit?: number
  }

  /**
   * UserModuleProgress without action
   */
  export type UserModuleProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleProgress
     */
    select?: UserModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModuleProgress
     */
    omit?: UserModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleProgressInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    order: number | null
  }

  export type QuestionSumAggregateOutputType = {
    order: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    moduleId: string | null
    questionText: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    moduleId: string | null
    questionText: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    moduleId: number
    questionText: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    order?: true
  }

  export type QuestionSumAggregateInputType = {
    order?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    moduleId?: true
    questionText?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    moduleId?: true
    questionText?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    moduleId?: true
    questionText?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    moduleId: string
    questionText: string
    order: number
    createdAt: Date
    updatedAt: Date
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    moduleId?: boolean
    questionText?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    moduleId?: boolean
    questionText?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    moduleId?: boolean
    questionText?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    moduleId?: boolean
    questionText?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "moduleId" | "questionText" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      module: Prisma.$ModulePayload<ExtArgs>
      answers: Prisma.$AnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      moduleId: string
      questionText: string
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    module<T extends ModuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuleDefaultArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends Question$answersArgs<ExtArgs> = {}>(args?: Subset<T, Question$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly moduleId: FieldRef<"Question", 'String'>
    readonly questionText: FieldRef<"Question", 'String'>
    readonly order: FieldRef<"Question", 'Int'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
    readonly updatedAt: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.answers
   */
  export type Question$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Answer
   */

  export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  export type AnswerAvgAggregateOutputType = {
    order: number | null
  }

  export type AnswerSumAggregateOutputType = {
    order: number | null
  }

  export type AnswerMinAggregateOutputType = {
    id: string | null
    questionId: string | null
    answerText: string | null
    isCorrect: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnswerMaxAggregateOutputType = {
    id: string | null
    questionId: string | null
    answerText: string | null
    isCorrect: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnswerCountAggregateOutputType = {
    id: number
    questionId: number
    answerText: number
    isCorrect: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnswerAvgAggregateInputType = {
    order?: true
  }

  export type AnswerSumAggregateInputType = {
    order?: true
  }

  export type AnswerMinAggregateInputType = {
    id?: true
    questionId?: true
    answerText?: true
    isCorrect?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnswerMaxAggregateInputType = {
    id?: true
    questionId?: true
    answerText?: true
    isCorrect?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnswerCountAggregateInputType = {
    id?: true
    questionId?: true
    answerText?: true
    isCorrect?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answer to aggregate.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Answers
    **/
    _count?: true | AnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerMaxAggregateInputType
  }

  export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer[P]>
      : GetScalarType<T[P], AggregateAnswer[P]>
  }




  export type AnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithAggregationInput | AnswerOrderByWithAggregationInput[]
    by: AnswerScalarFieldEnum[] | AnswerScalarFieldEnum
    having?: AnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerCountAggregateInputType | true
    _avg?: AnswerAvgAggregateInputType
    _sum?: AnswerSumAggregateInputType
    _min?: AnswerMinAggregateInputType
    _max?: AnswerMaxAggregateInputType
  }

  export type AnswerGroupByOutputType = {
    id: string
    questionId: string
    answerText: string
    isCorrect: boolean
    order: number
    createdAt: Date
    updatedAt: Date
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  type GetAnswerGroupByPayload<T extends AnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerGroupByOutputType[P]>
        }
      >
    >


  export type AnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    answerText?: boolean
    isCorrect?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    userQuizResponses?: boolean | Answer$userQuizResponsesArgs<ExtArgs>
    _count?: boolean | AnswerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    answerText?: boolean
    isCorrect?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    answerText?: boolean
    isCorrect?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectScalar = {
    id?: boolean
    questionId?: boolean
    answerText?: boolean
    isCorrect?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "questionId" | "answerText" | "isCorrect" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["answer"]>
  export type AnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    userQuizResponses?: boolean | Answer$userQuizResponsesArgs<ExtArgs>
    _count?: boolean | AnswerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $AnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Answer"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
      userQuizResponses: Prisma.$UserQuizResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      questionId: string
      answerText: string
      isCorrect: boolean
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["answer"]>
    composites: {}
  }

  type AnswerGetPayload<S extends boolean | null | undefined | AnswerDefaultArgs> = $Result.GetResult<Prisma.$AnswerPayload, S>

  type AnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswerCountAggregateInputType | true
    }

  export interface AnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Answer'], meta: { name: 'Answer' } }
    /**
     * Find zero or one Answer that matches the filter.
     * @param {AnswerFindUniqueArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswerFindUniqueArgs>(args: SelectSubset<T, AnswerFindUniqueArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Answer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnswerFindUniqueOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, AnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswerFindFirstArgs>(args?: SelectSubset<T, AnswerFindFirstArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, AnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answer.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answerWithIdOnly = await prisma.answer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnswerFindManyArgs>(args?: SelectSubset<T, AnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Answer.
     * @param {AnswerCreateArgs} args - Arguments to create a Answer.
     * @example
     * // Create one Answer
     * const Answer = await prisma.answer.create({
     *   data: {
     *     // ... data to create a Answer
     *   }
     * })
     * 
     */
    create<T extends AnswerCreateArgs>(args: SelectSubset<T, AnswerCreateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Answers.
     * @param {AnswerCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnswerCreateManyArgs>(args?: SelectSubset<T, AnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Answers and returns the data saved in the database.
     * @param {AnswerCreateManyAndReturnArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, AnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Answer.
     * @param {AnswerDeleteArgs} args - Arguments to delete one Answer.
     * @example
     * // Delete one Answer
     * const Answer = await prisma.answer.delete({
     *   where: {
     *     // ... filter to delete one Answer
     *   }
     * })
     * 
     */
    delete<T extends AnswerDeleteArgs>(args: SelectSubset<T, AnswerDeleteArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Answer.
     * @param {AnswerUpdateArgs} args - Arguments to update one Answer.
     * @example
     * // Update one Answer
     * const answer = await prisma.answer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnswerUpdateArgs>(args: SelectSubset<T, AnswerUpdateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Answers.
     * @param {AnswerDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnswerDeleteManyArgs>(args?: SelectSubset<T, AnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnswerUpdateManyArgs>(args: SelectSubset<T, AnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers and returns the data updated in the database.
     * @param {AnswerUpdateManyAndReturnArgs} args - Arguments to update many Answers.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, AnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Answer.
     * @param {AnswerUpsertArgs} args - Arguments to update or create a Answer.
     * @example
     * // Update or create a Answer
     * const answer = await prisma.answer.upsert({
     *   create: {
     *     // ... data to create a Answer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer we want to update
     *   }
     * })
     */
    upsert<T extends AnswerUpsertArgs>(args: SelectSubset<T, AnswerUpsertArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answer.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends AnswerCountArgs>(
      args?: Subset<T, AnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnswerAggregateArgs>(args: Subset<T, AnswerAggregateArgs>): Prisma.PrismaPromise<GetAnswerAggregateType<T>>

    /**
     * Group by Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerGroupByArgs} args - Group by arguments.
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
      T extends AnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerGroupByArgs['orderBy'] }
        : { orderBy?: AnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Answer model
   */
  readonly fields: AnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Answer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userQuizResponses<T extends Answer$userQuizResponsesArgs<ExtArgs> = {}>(args?: Subset<T, Answer$userQuizResponsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuizResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Answer model
   */
  interface AnswerFieldRefs {
    readonly id: FieldRef<"Answer", 'String'>
    readonly questionId: FieldRef<"Answer", 'String'>
    readonly answerText: FieldRef<"Answer", 'String'>
    readonly isCorrect: FieldRef<"Answer", 'Boolean'>
    readonly order: FieldRef<"Answer", 'Int'>
    readonly createdAt: FieldRef<"Answer", 'DateTime'>
    readonly updatedAt: FieldRef<"Answer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Answer findUnique
   */
  export type AnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findUniqueOrThrow
   */
  export type AnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findFirst
   */
  export type AnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findFirstOrThrow
   */
  export type AnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findMany
   */
  export type AnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer create
   */
  export type AnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a Answer.
     */
    data: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
  }

  /**
   * Answer createMany
   */
  export type AnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Answer createManyAndReturn
   */
  export type AnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer update
   */
  export type AnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a Answer.
     */
    data: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
    /**
     * Choose, which Answer to update.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer updateMany
   */
  export type AnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
  }

  /**
   * Answer updateManyAndReturn
   */
  export type AnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer upsert
   */
  export type AnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the Answer to update in case it exists.
     */
    where: AnswerWhereUniqueInput
    /**
     * In case the Answer found by the `where` argument doesn't exist, create a new Answer with this data.
     */
    create: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
    /**
     * In case the Answer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
  }

  /**
   * Answer delete
   */
  export type AnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter which Answer to delete.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer deleteMany
   */
  export type AnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answers to delete
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to delete.
     */
    limit?: number
  }

  /**
   * Answer.userQuizResponses
   */
  export type Answer$userQuizResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizResponse
     */
    select?: UserQuizResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizResponse
     */
    omit?: UserQuizResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizResponseInclude<ExtArgs> | null
    where?: UserQuizResponseWhereInput
    orderBy?: UserQuizResponseOrderByWithRelationInput | UserQuizResponseOrderByWithRelationInput[]
    cursor?: UserQuizResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserQuizResponseScalarFieldEnum | UserQuizResponseScalarFieldEnum[]
  }

  /**
   * Answer without action
   */
  export type AnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
  }


  /**
   * Model UserQuizAttempt
   */

  export type AggregateUserQuizAttempt = {
    _count: UserQuizAttemptCountAggregateOutputType | null
    _avg: UserQuizAttemptAvgAggregateOutputType | null
    _sum: UserQuizAttemptSumAggregateOutputType | null
    _min: UserQuizAttemptMinAggregateOutputType | null
    _max: UserQuizAttemptMaxAggregateOutputType | null
  }

  export type UserQuizAttemptAvgAggregateOutputType = {
    score: number | null
  }

  export type UserQuizAttemptSumAggregateOutputType = {
    score: number | null
  }

  export type UserQuizAttemptMinAggregateOutputType = {
    id: string | null
    userId: string | null
    moduleId: string | null
    score: number | null
    passed: boolean | null
    attemptedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserQuizAttemptMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    moduleId: string | null
    score: number | null
    passed: boolean | null
    attemptedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserQuizAttemptCountAggregateOutputType = {
    id: number
    userId: number
    moduleId: number
    score: number
    passed: number
    attemptedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserQuizAttemptAvgAggregateInputType = {
    score?: true
  }

  export type UserQuizAttemptSumAggregateInputType = {
    score?: true
  }

  export type UserQuizAttemptMinAggregateInputType = {
    id?: true
    userId?: true
    moduleId?: true
    score?: true
    passed?: true
    attemptedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserQuizAttemptMaxAggregateInputType = {
    id?: true
    userId?: true
    moduleId?: true
    score?: true
    passed?: true
    attemptedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserQuizAttemptCountAggregateInputType = {
    id?: true
    userId?: true
    moduleId?: true
    score?: true
    passed?: true
    attemptedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserQuizAttemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserQuizAttempt to aggregate.
     */
    where?: UserQuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuizAttempts to fetch.
     */
    orderBy?: UserQuizAttemptOrderByWithRelationInput | UserQuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserQuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuizAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserQuizAttempts
    **/
    _count?: true | UserQuizAttemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserQuizAttemptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserQuizAttemptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserQuizAttemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserQuizAttemptMaxAggregateInputType
  }

  export type GetUserQuizAttemptAggregateType<T extends UserQuizAttemptAggregateArgs> = {
        [P in keyof T & keyof AggregateUserQuizAttempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserQuizAttempt[P]>
      : GetScalarType<T[P], AggregateUserQuizAttempt[P]>
  }




  export type UserQuizAttemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserQuizAttemptWhereInput
    orderBy?: UserQuizAttemptOrderByWithAggregationInput | UserQuizAttemptOrderByWithAggregationInput[]
    by: UserQuizAttemptScalarFieldEnum[] | UserQuizAttemptScalarFieldEnum
    having?: UserQuizAttemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserQuizAttemptCountAggregateInputType | true
    _avg?: UserQuizAttemptAvgAggregateInputType
    _sum?: UserQuizAttemptSumAggregateInputType
    _min?: UserQuizAttemptMinAggregateInputType
    _max?: UserQuizAttemptMaxAggregateInputType
  }

  export type UserQuizAttemptGroupByOutputType = {
    id: string
    userId: string
    moduleId: string
    score: number
    passed: boolean
    attemptedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: UserQuizAttemptCountAggregateOutputType | null
    _avg: UserQuizAttemptAvgAggregateOutputType | null
    _sum: UserQuizAttemptSumAggregateOutputType | null
    _min: UserQuizAttemptMinAggregateOutputType | null
    _max: UserQuizAttemptMaxAggregateOutputType | null
  }

  type GetUserQuizAttemptGroupByPayload<T extends UserQuizAttemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserQuizAttemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserQuizAttemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserQuizAttemptGroupByOutputType[P]>
            : GetScalarType<T[P], UserQuizAttemptGroupByOutputType[P]>
        }
      >
    >


  export type UserQuizAttemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    moduleId?: boolean
    score?: boolean
    passed?: boolean
    attemptedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    responses?: boolean | UserQuizAttempt$responsesArgs<ExtArgs>
    _count?: boolean | UserQuizAttemptCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userQuizAttempt"]>

  export type UserQuizAttemptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    moduleId?: boolean
    score?: boolean
    passed?: boolean
    attemptedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userQuizAttempt"]>

  export type UserQuizAttemptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    moduleId?: boolean
    score?: boolean
    passed?: boolean
    attemptedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userQuizAttempt"]>

  export type UserQuizAttemptSelectScalar = {
    id?: boolean
    userId?: boolean
    moduleId?: boolean
    score?: boolean
    passed?: boolean
    attemptedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserQuizAttemptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "moduleId" | "score" | "passed" | "attemptedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["userQuizAttempt"]>
  export type UserQuizAttemptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    responses?: boolean | UserQuizAttempt$responsesArgs<ExtArgs>
    _count?: boolean | UserQuizAttemptCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserQuizAttemptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserQuizAttemptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserQuizAttemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserQuizAttempt"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      responses: Prisma.$UserQuizResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      moduleId: string
      score: number
      passed: boolean
      attemptedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userQuizAttempt"]>
    composites: {}
  }

  type UserQuizAttemptGetPayload<S extends boolean | null | undefined | UserQuizAttemptDefaultArgs> = $Result.GetResult<Prisma.$UserQuizAttemptPayload, S>

  type UserQuizAttemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserQuizAttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserQuizAttemptCountAggregateInputType | true
    }

  export interface UserQuizAttemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserQuizAttempt'], meta: { name: 'UserQuizAttempt' } }
    /**
     * Find zero or one UserQuizAttempt that matches the filter.
     * @param {UserQuizAttemptFindUniqueArgs} args - Arguments to find a UserQuizAttempt
     * @example
     * // Get one UserQuizAttempt
     * const userQuizAttempt = await prisma.userQuizAttempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserQuizAttemptFindUniqueArgs>(args: SelectSubset<T, UserQuizAttemptFindUniqueArgs<ExtArgs>>): Prisma__UserQuizAttemptClient<$Result.GetResult<Prisma.$UserQuizAttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserQuizAttempt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserQuizAttemptFindUniqueOrThrowArgs} args - Arguments to find a UserQuizAttempt
     * @example
     * // Get one UserQuizAttempt
     * const userQuizAttempt = await prisma.userQuizAttempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserQuizAttemptFindUniqueOrThrowArgs>(args: SelectSubset<T, UserQuizAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserQuizAttemptClient<$Result.GetResult<Prisma.$UserQuizAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserQuizAttempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuizAttemptFindFirstArgs} args - Arguments to find a UserQuizAttempt
     * @example
     * // Get one UserQuizAttempt
     * const userQuizAttempt = await prisma.userQuizAttempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserQuizAttemptFindFirstArgs>(args?: SelectSubset<T, UserQuizAttemptFindFirstArgs<ExtArgs>>): Prisma__UserQuizAttemptClient<$Result.GetResult<Prisma.$UserQuizAttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserQuizAttempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuizAttemptFindFirstOrThrowArgs} args - Arguments to find a UserQuizAttempt
     * @example
     * // Get one UserQuizAttempt
     * const userQuizAttempt = await prisma.userQuizAttempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserQuizAttemptFindFirstOrThrowArgs>(args?: SelectSubset<T, UserQuizAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserQuizAttemptClient<$Result.GetResult<Prisma.$UserQuizAttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserQuizAttempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuizAttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserQuizAttempts
     * const userQuizAttempts = await prisma.userQuizAttempt.findMany()
     * 
     * // Get first 10 UserQuizAttempts
     * const userQuizAttempts = await prisma.userQuizAttempt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userQuizAttemptWithIdOnly = await prisma.userQuizAttempt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserQuizAttemptFindManyArgs>(args?: SelectSubset<T, UserQuizAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuizAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserQuizAttempt.
     * @param {UserQuizAttemptCreateArgs} args - Arguments to create a UserQuizAttempt.
     * @example
     * // Create one UserQuizAttempt
     * const UserQuizAttempt = await prisma.userQuizAttempt.create({
     *   data: {
     *     // ... data to create a UserQuizAttempt
     *   }
     * })
     * 
     */
    create<T extends UserQuizAttemptCreateArgs>(args: SelectSubset<T, UserQuizAttemptCreateArgs<ExtArgs>>): Prisma__UserQuizAttemptClient<$Result.GetResult<Prisma.$UserQuizAttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserQuizAttempts.
     * @param {UserQuizAttemptCreateManyArgs} args - Arguments to create many UserQuizAttempts.
     * @example
     * // Create many UserQuizAttempts
     * const userQuizAttempt = await prisma.userQuizAttempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserQuizAttemptCreateManyArgs>(args?: SelectSubset<T, UserQuizAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserQuizAttempts and returns the data saved in the database.
     * @param {UserQuizAttemptCreateManyAndReturnArgs} args - Arguments to create many UserQuizAttempts.
     * @example
     * // Create many UserQuizAttempts
     * const userQuizAttempt = await prisma.userQuizAttempt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserQuizAttempts and only return the `id`
     * const userQuizAttemptWithIdOnly = await prisma.userQuizAttempt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserQuizAttemptCreateManyAndReturnArgs>(args?: SelectSubset<T, UserQuizAttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuizAttemptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserQuizAttempt.
     * @param {UserQuizAttemptDeleteArgs} args - Arguments to delete one UserQuizAttempt.
     * @example
     * // Delete one UserQuizAttempt
     * const UserQuizAttempt = await prisma.userQuizAttempt.delete({
     *   where: {
     *     // ... filter to delete one UserQuizAttempt
     *   }
     * })
     * 
     */
    delete<T extends UserQuizAttemptDeleteArgs>(args: SelectSubset<T, UserQuizAttemptDeleteArgs<ExtArgs>>): Prisma__UserQuizAttemptClient<$Result.GetResult<Prisma.$UserQuizAttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserQuizAttempt.
     * @param {UserQuizAttemptUpdateArgs} args - Arguments to update one UserQuizAttempt.
     * @example
     * // Update one UserQuizAttempt
     * const userQuizAttempt = await prisma.userQuizAttempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserQuizAttemptUpdateArgs>(args: SelectSubset<T, UserQuizAttemptUpdateArgs<ExtArgs>>): Prisma__UserQuizAttemptClient<$Result.GetResult<Prisma.$UserQuizAttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserQuizAttempts.
     * @param {UserQuizAttemptDeleteManyArgs} args - Arguments to filter UserQuizAttempts to delete.
     * @example
     * // Delete a few UserQuizAttempts
     * const { count } = await prisma.userQuizAttempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserQuizAttemptDeleteManyArgs>(args?: SelectSubset<T, UserQuizAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserQuizAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuizAttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserQuizAttempts
     * const userQuizAttempt = await prisma.userQuizAttempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserQuizAttemptUpdateManyArgs>(args: SelectSubset<T, UserQuizAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserQuizAttempts and returns the data updated in the database.
     * @param {UserQuizAttemptUpdateManyAndReturnArgs} args - Arguments to update many UserQuizAttempts.
     * @example
     * // Update many UserQuizAttempts
     * const userQuizAttempt = await prisma.userQuizAttempt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserQuizAttempts and only return the `id`
     * const userQuizAttemptWithIdOnly = await prisma.userQuizAttempt.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserQuizAttemptUpdateManyAndReturnArgs>(args: SelectSubset<T, UserQuizAttemptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuizAttemptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserQuizAttempt.
     * @param {UserQuizAttemptUpsertArgs} args - Arguments to update or create a UserQuizAttempt.
     * @example
     * // Update or create a UserQuizAttempt
     * const userQuizAttempt = await prisma.userQuizAttempt.upsert({
     *   create: {
     *     // ... data to create a UserQuizAttempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserQuizAttempt we want to update
     *   }
     * })
     */
    upsert<T extends UserQuizAttemptUpsertArgs>(args: SelectSubset<T, UserQuizAttemptUpsertArgs<ExtArgs>>): Prisma__UserQuizAttemptClient<$Result.GetResult<Prisma.$UserQuizAttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserQuizAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuizAttemptCountArgs} args - Arguments to filter UserQuizAttempts to count.
     * @example
     * // Count the number of UserQuizAttempts
     * const count = await prisma.userQuizAttempt.count({
     *   where: {
     *     // ... the filter for the UserQuizAttempts we want to count
     *   }
     * })
    **/
    count<T extends UserQuizAttemptCountArgs>(
      args?: Subset<T, UserQuizAttemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserQuizAttemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserQuizAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuizAttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserQuizAttemptAggregateArgs>(args: Subset<T, UserQuizAttemptAggregateArgs>): Prisma.PrismaPromise<GetUserQuizAttemptAggregateType<T>>

    /**
     * Group by UserQuizAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuizAttemptGroupByArgs} args - Group by arguments.
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
      T extends UserQuizAttemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserQuizAttemptGroupByArgs['orderBy'] }
        : { orderBy?: UserQuizAttemptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserQuizAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserQuizAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserQuizAttempt model
   */
  readonly fields: UserQuizAttemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserQuizAttempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserQuizAttemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    responses<T extends UserQuizAttempt$responsesArgs<ExtArgs> = {}>(args?: Subset<T, UserQuizAttempt$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuizResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UserQuizAttempt model
   */
  interface UserQuizAttemptFieldRefs {
    readonly id: FieldRef<"UserQuizAttempt", 'String'>
    readonly userId: FieldRef<"UserQuizAttempt", 'String'>
    readonly moduleId: FieldRef<"UserQuizAttempt", 'String'>
    readonly score: FieldRef<"UserQuizAttempt", 'Int'>
    readonly passed: FieldRef<"UserQuizAttempt", 'Boolean'>
    readonly attemptedAt: FieldRef<"UserQuizAttempt", 'DateTime'>
    readonly createdAt: FieldRef<"UserQuizAttempt", 'DateTime'>
    readonly updatedAt: FieldRef<"UserQuizAttempt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserQuizAttempt findUnique
   */
  export type UserQuizAttemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizAttempt
     */
    select?: UserQuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizAttempt
     */
    omit?: UserQuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which UserQuizAttempt to fetch.
     */
    where: UserQuizAttemptWhereUniqueInput
  }

  /**
   * UserQuizAttempt findUniqueOrThrow
   */
  export type UserQuizAttemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizAttempt
     */
    select?: UserQuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizAttempt
     */
    omit?: UserQuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which UserQuizAttempt to fetch.
     */
    where: UserQuizAttemptWhereUniqueInput
  }

  /**
   * UserQuizAttempt findFirst
   */
  export type UserQuizAttemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizAttempt
     */
    select?: UserQuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizAttempt
     */
    omit?: UserQuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which UserQuizAttempt to fetch.
     */
    where?: UserQuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuizAttempts to fetch.
     */
    orderBy?: UserQuizAttemptOrderByWithRelationInput | UserQuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserQuizAttempts.
     */
    cursor?: UserQuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuizAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserQuizAttempts.
     */
    distinct?: UserQuizAttemptScalarFieldEnum | UserQuizAttemptScalarFieldEnum[]
  }

  /**
   * UserQuizAttempt findFirstOrThrow
   */
  export type UserQuizAttemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizAttempt
     */
    select?: UserQuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizAttempt
     */
    omit?: UserQuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which UserQuizAttempt to fetch.
     */
    where?: UserQuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuizAttempts to fetch.
     */
    orderBy?: UserQuizAttemptOrderByWithRelationInput | UserQuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserQuizAttempts.
     */
    cursor?: UserQuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuizAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserQuizAttempts.
     */
    distinct?: UserQuizAttemptScalarFieldEnum | UserQuizAttemptScalarFieldEnum[]
  }

  /**
   * UserQuizAttempt findMany
   */
  export type UserQuizAttemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizAttempt
     */
    select?: UserQuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizAttempt
     */
    omit?: UserQuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which UserQuizAttempts to fetch.
     */
    where?: UserQuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuizAttempts to fetch.
     */
    orderBy?: UserQuizAttemptOrderByWithRelationInput | UserQuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserQuizAttempts.
     */
    cursor?: UserQuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuizAttempts.
     */
    skip?: number
    distinct?: UserQuizAttemptScalarFieldEnum | UserQuizAttemptScalarFieldEnum[]
  }

  /**
   * UserQuizAttempt create
   */
  export type UserQuizAttemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizAttempt
     */
    select?: UserQuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizAttempt
     */
    omit?: UserQuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizAttemptInclude<ExtArgs> | null
    /**
     * The data needed to create a UserQuizAttempt.
     */
    data: XOR<UserQuizAttemptCreateInput, UserQuizAttemptUncheckedCreateInput>
  }

  /**
   * UserQuizAttempt createMany
   */
  export type UserQuizAttemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserQuizAttempts.
     */
    data: UserQuizAttemptCreateManyInput | UserQuizAttemptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserQuizAttempt createManyAndReturn
   */
  export type UserQuizAttemptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizAttempt
     */
    select?: UserQuizAttemptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizAttempt
     */
    omit?: UserQuizAttemptOmit<ExtArgs> | null
    /**
     * The data used to create many UserQuizAttempts.
     */
    data: UserQuizAttemptCreateManyInput | UserQuizAttemptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizAttemptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserQuizAttempt update
   */
  export type UserQuizAttemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizAttempt
     */
    select?: UserQuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizAttempt
     */
    omit?: UserQuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizAttemptInclude<ExtArgs> | null
    /**
     * The data needed to update a UserQuizAttempt.
     */
    data: XOR<UserQuizAttemptUpdateInput, UserQuizAttemptUncheckedUpdateInput>
    /**
     * Choose, which UserQuizAttempt to update.
     */
    where: UserQuizAttemptWhereUniqueInput
  }

  /**
   * UserQuizAttempt updateMany
   */
  export type UserQuizAttemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserQuizAttempts.
     */
    data: XOR<UserQuizAttemptUpdateManyMutationInput, UserQuizAttemptUncheckedUpdateManyInput>
    /**
     * Filter which UserQuizAttempts to update
     */
    where?: UserQuizAttemptWhereInput
    /**
     * Limit how many UserQuizAttempts to update.
     */
    limit?: number
  }

  /**
   * UserQuizAttempt updateManyAndReturn
   */
  export type UserQuizAttemptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizAttempt
     */
    select?: UserQuizAttemptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizAttempt
     */
    omit?: UserQuizAttemptOmit<ExtArgs> | null
    /**
     * The data used to update UserQuizAttempts.
     */
    data: XOR<UserQuizAttemptUpdateManyMutationInput, UserQuizAttemptUncheckedUpdateManyInput>
    /**
     * Filter which UserQuizAttempts to update
     */
    where?: UserQuizAttemptWhereInput
    /**
     * Limit how many UserQuizAttempts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizAttemptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserQuizAttempt upsert
   */
  export type UserQuizAttemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizAttempt
     */
    select?: UserQuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizAttempt
     */
    omit?: UserQuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizAttemptInclude<ExtArgs> | null
    /**
     * The filter to search for the UserQuizAttempt to update in case it exists.
     */
    where: UserQuizAttemptWhereUniqueInput
    /**
     * In case the UserQuizAttempt found by the `where` argument doesn't exist, create a new UserQuizAttempt with this data.
     */
    create: XOR<UserQuizAttemptCreateInput, UserQuizAttemptUncheckedCreateInput>
    /**
     * In case the UserQuizAttempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserQuizAttemptUpdateInput, UserQuizAttemptUncheckedUpdateInput>
  }

  /**
   * UserQuizAttempt delete
   */
  export type UserQuizAttemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizAttempt
     */
    select?: UserQuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizAttempt
     */
    omit?: UserQuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizAttemptInclude<ExtArgs> | null
    /**
     * Filter which UserQuizAttempt to delete.
     */
    where: UserQuizAttemptWhereUniqueInput
  }

  /**
   * UserQuizAttempt deleteMany
   */
  export type UserQuizAttemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserQuizAttempts to delete
     */
    where?: UserQuizAttemptWhereInput
    /**
     * Limit how many UserQuizAttempts to delete.
     */
    limit?: number
  }

  /**
   * UserQuizAttempt.responses
   */
  export type UserQuizAttempt$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizResponse
     */
    select?: UserQuizResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizResponse
     */
    omit?: UserQuizResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizResponseInclude<ExtArgs> | null
    where?: UserQuizResponseWhereInput
    orderBy?: UserQuizResponseOrderByWithRelationInput | UserQuizResponseOrderByWithRelationInput[]
    cursor?: UserQuizResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserQuizResponseScalarFieldEnum | UserQuizResponseScalarFieldEnum[]
  }

  /**
   * UserQuizAttempt without action
   */
  export type UserQuizAttemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizAttempt
     */
    select?: UserQuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizAttempt
     */
    omit?: UserQuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizAttemptInclude<ExtArgs> | null
  }


  /**
   * Model UserQuizResponse
   */

  export type AggregateUserQuizResponse = {
    _count: UserQuizResponseCountAggregateOutputType | null
    _min: UserQuizResponseMinAggregateOutputType | null
    _max: UserQuizResponseMaxAggregateOutputType | null
  }

  export type UserQuizResponseMinAggregateOutputType = {
    id: string | null
    attemptId: string | null
    answerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserQuizResponseMaxAggregateOutputType = {
    id: string | null
    attemptId: string | null
    answerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserQuizResponseCountAggregateOutputType = {
    id: number
    attemptId: number
    answerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserQuizResponseMinAggregateInputType = {
    id?: true
    attemptId?: true
    answerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserQuizResponseMaxAggregateInputType = {
    id?: true
    attemptId?: true
    answerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserQuizResponseCountAggregateInputType = {
    id?: true
    attemptId?: true
    answerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserQuizResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserQuizResponse to aggregate.
     */
    where?: UserQuizResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuizResponses to fetch.
     */
    orderBy?: UserQuizResponseOrderByWithRelationInput | UserQuizResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserQuizResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuizResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuizResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserQuizResponses
    **/
    _count?: true | UserQuizResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserQuizResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserQuizResponseMaxAggregateInputType
  }

  export type GetUserQuizResponseAggregateType<T extends UserQuizResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateUserQuizResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserQuizResponse[P]>
      : GetScalarType<T[P], AggregateUserQuizResponse[P]>
  }




  export type UserQuizResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserQuizResponseWhereInput
    orderBy?: UserQuizResponseOrderByWithAggregationInput | UserQuizResponseOrderByWithAggregationInput[]
    by: UserQuizResponseScalarFieldEnum[] | UserQuizResponseScalarFieldEnum
    having?: UserQuizResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserQuizResponseCountAggregateInputType | true
    _min?: UserQuizResponseMinAggregateInputType
    _max?: UserQuizResponseMaxAggregateInputType
  }

  export type UserQuizResponseGroupByOutputType = {
    id: string
    attemptId: string
    answerId: string
    createdAt: Date
    updatedAt: Date
    _count: UserQuizResponseCountAggregateOutputType | null
    _min: UserQuizResponseMinAggregateOutputType | null
    _max: UserQuizResponseMaxAggregateOutputType | null
  }

  type GetUserQuizResponseGroupByPayload<T extends UserQuizResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserQuizResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserQuizResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserQuizResponseGroupByOutputType[P]>
            : GetScalarType<T[P], UserQuizResponseGroupByOutputType[P]>
        }
      >
    >


  export type UserQuizResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attemptId?: boolean
    answerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attempt?: boolean | UserQuizAttemptDefaultArgs<ExtArgs>
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userQuizResponse"]>

  export type UserQuizResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attemptId?: boolean
    answerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attempt?: boolean | UserQuizAttemptDefaultArgs<ExtArgs>
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userQuizResponse"]>

  export type UserQuizResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attemptId?: boolean
    answerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attempt?: boolean | UserQuizAttemptDefaultArgs<ExtArgs>
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userQuizResponse"]>

  export type UserQuizResponseSelectScalar = {
    id?: boolean
    attemptId?: boolean
    answerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserQuizResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "attemptId" | "answerId" | "createdAt" | "updatedAt", ExtArgs["result"]["userQuizResponse"]>
  export type UserQuizResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempt?: boolean | UserQuizAttemptDefaultArgs<ExtArgs>
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
  }
  export type UserQuizResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempt?: boolean | UserQuizAttemptDefaultArgs<ExtArgs>
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
  }
  export type UserQuizResponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempt?: boolean | UserQuizAttemptDefaultArgs<ExtArgs>
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
  }

  export type $UserQuizResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserQuizResponse"
    objects: {
      attempt: Prisma.$UserQuizAttemptPayload<ExtArgs>
      answer: Prisma.$AnswerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      attemptId: string
      answerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userQuizResponse"]>
    composites: {}
  }

  type UserQuizResponseGetPayload<S extends boolean | null | undefined | UserQuizResponseDefaultArgs> = $Result.GetResult<Prisma.$UserQuizResponsePayload, S>

  type UserQuizResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserQuizResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserQuizResponseCountAggregateInputType | true
    }

  export interface UserQuizResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserQuizResponse'], meta: { name: 'UserQuizResponse' } }
    /**
     * Find zero or one UserQuizResponse that matches the filter.
     * @param {UserQuizResponseFindUniqueArgs} args - Arguments to find a UserQuizResponse
     * @example
     * // Get one UserQuizResponse
     * const userQuizResponse = await prisma.userQuizResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserQuizResponseFindUniqueArgs>(args: SelectSubset<T, UserQuizResponseFindUniqueArgs<ExtArgs>>): Prisma__UserQuizResponseClient<$Result.GetResult<Prisma.$UserQuizResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserQuizResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserQuizResponseFindUniqueOrThrowArgs} args - Arguments to find a UserQuizResponse
     * @example
     * // Get one UserQuizResponse
     * const userQuizResponse = await prisma.userQuizResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserQuizResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, UserQuizResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserQuizResponseClient<$Result.GetResult<Prisma.$UserQuizResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserQuizResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuizResponseFindFirstArgs} args - Arguments to find a UserQuizResponse
     * @example
     * // Get one UserQuizResponse
     * const userQuizResponse = await prisma.userQuizResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserQuizResponseFindFirstArgs>(args?: SelectSubset<T, UserQuizResponseFindFirstArgs<ExtArgs>>): Prisma__UserQuizResponseClient<$Result.GetResult<Prisma.$UserQuizResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserQuizResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuizResponseFindFirstOrThrowArgs} args - Arguments to find a UserQuizResponse
     * @example
     * // Get one UserQuizResponse
     * const userQuizResponse = await prisma.userQuizResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserQuizResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, UserQuizResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserQuizResponseClient<$Result.GetResult<Prisma.$UserQuizResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserQuizResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuizResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserQuizResponses
     * const userQuizResponses = await prisma.userQuizResponse.findMany()
     * 
     * // Get first 10 UserQuizResponses
     * const userQuizResponses = await prisma.userQuizResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userQuizResponseWithIdOnly = await prisma.userQuizResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserQuizResponseFindManyArgs>(args?: SelectSubset<T, UserQuizResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuizResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserQuizResponse.
     * @param {UserQuizResponseCreateArgs} args - Arguments to create a UserQuizResponse.
     * @example
     * // Create one UserQuizResponse
     * const UserQuizResponse = await prisma.userQuizResponse.create({
     *   data: {
     *     // ... data to create a UserQuizResponse
     *   }
     * })
     * 
     */
    create<T extends UserQuizResponseCreateArgs>(args: SelectSubset<T, UserQuizResponseCreateArgs<ExtArgs>>): Prisma__UserQuizResponseClient<$Result.GetResult<Prisma.$UserQuizResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserQuizResponses.
     * @param {UserQuizResponseCreateManyArgs} args - Arguments to create many UserQuizResponses.
     * @example
     * // Create many UserQuizResponses
     * const userQuizResponse = await prisma.userQuizResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserQuizResponseCreateManyArgs>(args?: SelectSubset<T, UserQuizResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserQuizResponses and returns the data saved in the database.
     * @param {UserQuizResponseCreateManyAndReturnArgs} args - Arguments to create many UserQuizResponses.
     * @example
     * // Create many UserQuizResponses
     * const userQuizResponse = await prisma.userQuizResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserQuizResponses and only return the `id`
     * const userQuizResponseWithIdOnly = await prisma.userQuizResponse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserQuizResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, UserQuizResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuizResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserQuizResponse.
     * @param {UserQuizResponseDeleteArgs} args - Arguments to delete one UserQuizResponse.
     * @example
     * // Delete one UserQuizResponse
     * const UserQuizResponse = await prisma.userQuizResponse.delete({
     *   where: {
     *     // ... filter to delete one UserQuizResponse
     *   }
     * })
     * 
     */
    delete<T extends UserQuizResponseDeleteArgs>(args: SelectSubset<T, UserQuizResponseDeleteArgs<ExtArgs>>): Prisma__UserQuizResponseClient<$Result.GetResult<Prisma.$UserQuizResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserQuizResponse.
     * @param {UserQuizResponseUpdateArgs} args - Arguments to update one UserQuizResponse.
     * @example
     * // Update one UserQuizResponse
     * const userQuizResponse = await prisma.userQuizResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserQuizResponseUpdateArgs>(args: SelectSubset<T, UserQuizResponseUpdateArgs<ExtArgs>>): Prisma__UserQuizResponseClient<$Result.GetResult<Prisma.$UserQuizResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserQuizResponses.
     * @param {UserQuizResponseDeleteManyArgs} args - Arguments to filter UserQuizResponses to delete.
     * @example
     * // Delete a few UserQuizResponses
     * const { count } = await prisma.userQuizResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserQuizResponseDeleteManyArgs>(args?: SelectSubset<T, UserQuizResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserQuizResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuizResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserQuizResponses
     * const userQuizResponse = await prisma.userQuizResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserQuizResponseUpdateManyArgs>(args: SelectSubset<T, UserQuizResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserQuizResponses and returns the data updated in the database.
     * @param {UserQuizResponseUpdateManyAndReturnArgs} args - Arguments to update many UserQuizResponses.
     * @example
     * // Update many UserQuizResponses
     * const userQuizResponse = await prisma.userQuizResponse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserQuizResponses and only return the `id`
     * const userQuizResponseWithIdOnly = await prisma.userQuizResponse.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserQuizResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, UserQuizResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuizResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserQuizResponse.
     * @param {UserQuizResponseUpsertArgs} args - Arguments to update or create a UserQuizResponse.
     * @example
     * // Update or create a UserQuizResponse
     * const userQuizResponse = await prisma.userQuizResponse.upsert({
     *   create: {
     *     // ... data to create a UserQuizResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserQuizResponse we want to update
     *   }
     * })
     */
    upsert<T extends UserQuizResponseUpsertArgs>(args: SelectSubset<T, UserQuizResponseUpsertArgs<ExtArgs>>): Prisma__UserQuizResponseClient<$Result.GetResult<Prisma.$UserQuizResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserQuizResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuizResponseCountArgs} args - Arguments to filter UserQuizResponses to count.
     * @example
     * // Count the number of UserQuizResponses
     * const count = await prisma.userQuizResponse.count({
     *   where: {
     *     // ... the filter for the UserQuizResponses we want to count
     *   }
     * })
    **/
    count<T extends UserQuizResponseCountArgs>(
      args?: Subset<T, UserQuizResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserQuizResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserQuizResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuizResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserQuizResponseAggregateArgs>(args: Subset<T, UserQuizResponseAggregateArgs>): Prisma.PrismaPromise<GetUserQuizResponseAggregateType<T>>

    /**
     * Group by UserQuizResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuizResponseGroupByArgs} args - Group by arguments.
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
      T extends UserQuizResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserQuizResponseGroupByArgs['orderBy'] }
        : { orderBy?: UserQuizResponseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserQuizResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserQuizResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserQuizResponse model
   */
  readonly fields: UserQuizResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserQuizResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserQuizResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attempt<T extends UserQuizAttemptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserQuizAttemptDefaultArgs<ExtArgs>>): Prisma__UserQuizAttemptClient<$Result.GetResult<Prisma.$UserQuizAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answer<T extends AnswerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnswerDefaultArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserQuizResponse model
   */
  interface UserQuizResponseFieldRefs {
    readonly id: FieldRef<"UserQuizResponse", 'String'>
    readonly attemptId: FieldRef<"UserQuizResponse", 'String'>
    readonly answerId: FieldRef<"UserQuizResponse", 'String'>
    readonly createdAt: FieldRef<"UserQuizResponse", 'DateTime'>
    readonly updatedAt: FieldRef<"UserQuizResponse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserQuizResponse findUnique
   */
  export type UserQuizResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizResponse
     */
    select?: UserQuizResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizResponse
     */
    omit?: UserQuizResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizResponseInclude<ExtArgs> | null
    /**
     * Filter, which UserQuizResponse to fetch.
     */
    where: UserQuizResponseWhereUniqueInput
  }

  /**
   * UserQuizResponse findUniqueOrThrow
   */
  export type UserQuizResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizResponse
     */
    select?: UserQuizResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizResponse
     */
    omit?: UserQuizResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizResponseInclude<ExtArgs> | null
    /**
     * Filter, which UserQuizResponse to fetch.
     */
    where: UserQuizResponseWhereUniqueInput
  }

  /**
   * UserQuizResponse findFirst
   */
  export type UserQuizResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizResponse
     */
    select?: UserQuizResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizResponse
     */
    omit?: UserQuizResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizResponseInclude<ExtArgs> | null
    /**
     * Filter, which UserQuizResponse to fetch.
     */
    where?: UserQuizResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuizResponses to fetch.
     */
    orderBy?: UserQuizResponseOrderByWithRelationInput | UserQuizResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserQuizResponses.
     */
    cursor?: UserQuizResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuizResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuizResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserQuizResponses.
     */
    distinct?: UserQuizResponseScalarFieldEnum | UserQuizResponseScalarFieldEnum[]
  }

  /**
   * UserQuizResponse findFirstOrThrow
   */
  export type UserQuizResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizResponse
     */
    select?: UserQuizResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizResponse
     */
    omit?: UserQuizResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizResponseInclude<ExtArgs> | null
    /**
     * Filter, which UserQuizResponse to fetch.
     */
    where?: UserQuizResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuizResponses to fetch.
     */
    orderBy?: UserQuizResponseOrderByWithRelationInput | UserQuizResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserQuizResponses.
     */
    cursor?: UserQuizResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuizResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuizResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserQuizResponses.
     */
    distinct?: UserQuizResponseScalarFieldEnum | UserQuizResponseScalarFieldEnum[]
  }

  /**
   * UserQuizResponse findMany
   */
  export type UserQuizResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizResponse
     */
    select?: UserQuizResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizResponse
     */
    omit?: UserQuizResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizResponseInclude<ExtArgs> | null
    /**
     * Filter, which UserQuizResponses to fetch.
     */
    where?: UserQuizResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuizResponses to fetch.
     */
    orderBy?: UserQuizResponseOrderByWithRelationInput | UserQuizResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserQuizResponses.
     */
    cursor?: UserQuizResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuizResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuizResponses.
     */
    skip?: number
    distinct?: UserQuizResponseScalarFieldEnum | UserQuizResponseScalarFieldEnum[]
  }

  /**
   * UserQuizResponse create
   */
  export type UserQuizResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizResponse
     */
    select?: UserQuizResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizResponse
     */
    omit?: UserQuizResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a UserQuizResponse.
     */
    data: XOR<UserQuizResponseCreateInput, UserQuizResponseUncheckedCreateInput>
  }

  /**
   * UserQuizResponse createMany
   */
  export type UserQuizResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserQuizResponses.
     */
    data: UserQuizResponseCreateManyInput | UserQuizResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserQuizResponse createManyAndReturn
   */
  export type UserQuizResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizResponse
     */
    select?: UserQuizResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizResponse
     */
    omit?: UserQuizResponseOmit<ExtArgs> | null
    /**
     * The data used to create many UserQuizResponses.
     */
    data: UserQuizResponseCreateManyInput | UserQuizResponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserQuizResponse update
   */
  export type UserQuizResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizResponse
     */
    select?: UserQuizResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizResponse
     */
    omit?: UserQuizResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a UserQuizResponse.
     */
    data: XOR<UserQuizResponseUpdateInput, UserQuizResponseUncheckedUpdateInput>
    /**
     * Choose, which UserQuizResponse to update.
     */
    where: UserQuizResponseWhereUniqueInput
  }

  /**
   * UserQuizResponse updateMany
   */
  export type UserQuizResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserQuizResponses.
     */
    data: XOR<UserQuizResponseUpdateManyMutationInput, UserQuizResponseUncheckedUpdateManyInput>
    /**
     * Filter which UserQuizResponses to update
     */
    where?: UserQuizResponseWhereInput
    /**
     * Limit how many UserQuizResponses to update.
     */
    limit?: number
  }

  /**
   * UserQuizResponse updateManyAndReturn
   */
  export type UserQuizResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizResponse
     */
    select?: UserQuizResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizResponse
     */
    omit?: UserQuizResponseOmit<ExtArgs> | null
    /**
     * The data used to update UserQuizResponses.
     */
    data: XOR<UserQuizResponseUpdateManyMutationInput, UserQuizResponseUncheckedUpdateManyInput>
    /**
     * Filter which UserQuizResponses to update
     */
    where?: UserQuizResponseWhereInput
    /**
     * Limit how many UserQuizResponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizResponseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserQuizResponse upsert
   */
  export type UserQuizResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizResponse
     */
    select?: UserQuizResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizResponse
     */
    omit?: UserQuizResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the UserQuizResponse to update in case it exists.
     */
    where: UserQuizResponseWhereUniqueInput
    /**
     * In case the UserQuizResponse found by the `where` argument doesn't exist, create a new UserQuizResponse with this data.
     */
    create: XOR<UserQuizResponseCreateInput, UserQuizResponseUncheckedCreateInput>
    /**
     * In case the UserQuizResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserQuizResponseUpdateInput, UserQuizResponseUncheckedUpdateInput>
  }

  /**
   * UserQuizResponse delete
   */
  export type UserQuizResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizResponse
     */
    select?: UserQuizResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizResponse
     */
    omit?: UserQuizResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizResponseInclude<ExtArgs> | null
    /**
     * Filter which UserQuizResponse to delete.
     */
    where: UserQuizResponseWhereUniqueInput
  }

  /**
   * UserQuizResponse deleteMany
   */
  export type UserQuizResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserQuizResponses to delete
     */
    where?: UserQuizResponseWhereInput
    /**
     * Limit how many UserQuizResponses to delete.
     */
    limit?: number
  }

  /**
   * UserQuizResponse without action
   */
  export type UserQuizResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizResponse
     */
    select?: UserQuizResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizResponse
     */
    omit?: UserQuizResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizResponseInclude<ExtArgs> | null
  }


  /**
   * Model Certificate
   */

  export type AggregateCertificate = {
    _count: CertificateCountAggregateOutputType | null
    _min: CertificateMinAggregateOutputType | null
    _max: CertificateMaxAggregateOutputType | null
  }

  export type CertificateMinAggregateOutputType = {
    id: string | null
    userId: string | null
    certificateNumber: string | null
    issuedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CertificateMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    certificateNumber: string | null
    issuedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CertificateCountAggregateOutputType = {
    id: number
    userId: number
    certificateNumber: number
    issuedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CertificateMinAggregateInputType = {
    id?: true
    userId?: true
    certificateNumber?: true
    issuedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CertificateMaxAggregateInputType = {
    id?: true
    userId?: true
    certificateNumber?: true
    issuedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CertificateCountAggregateInputType = {
    id?: true
    userId?: true
    certificateNumber?: true
    issuedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CertificateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificate to aggregate.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Certificates
    **/
    _count?: true | CertificateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CertificateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CertificateMaxAggregateInputType
  }

  export type GetCertificateAggregateType<T extends CertificateAggregateArgs> = {
        [P in keyof T & keyof AggregateCertificate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCertificate[P]>
      : GetScalarType<T[P], AggregateCertificate[P]>
  }




  export type CertificateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithAggregationInput | CertificateOrderByWithAggregationInput[]
    by: CertificateScalarFieldEnum[] | CertificateScalarFieldEnum
    having?: CertificateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CertificateCountAggregateInputType | true
    _min?: CertificateMinAggregateInputType
    _max?: CertificateMaxAggregateInputType
  }

  export type CertificateGroupByOutputType = {
    id: string
    userId: string
    certificateNumber: string
    issuedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: CertificateCountAggregateOutputType | null
    _min: CertificateMinAggregateOutputType | null
    _max: CertificateMaxAggregateOutputType | null
  }

  type GetCertificateGroupByPayload<T extends CertificateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CertificateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CertificateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CertificateGroupByOutputType[P]>
            : GetScalarType<T[P], CertificateGroupByOutputType[P]>
        }
      >
    >


  export type CertificateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    certificateNumber?: boolean
    issuedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificate"]>

  export type CertificateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    certificateNumber?: boolean
    issuedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificate"]>

  export type CertificateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    certificateNumber?: boolean
    issuedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificate"]>

  export type CertificateSelectScalar = {
    id?: boolean
    userId?: boolean
    certificateNumber?: boolean
    issuedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CertificateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "certificateNumber" | "issuedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["certificate"]>
  export type CertificateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CertificateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CertificateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CertificatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Certificate"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      certificateNumber: string
      issuedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["certificate"]>
    composites: {}
  }

  type CertificateGetPayload<S extends boolean | null | undefined | CertificateDefaultArgs> = $Result.GetResult<Prisma.$CertificatePayload, S>

  type CertificateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CertificateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CertificateCountAggregateInputType | true
    }

  export interface CertificateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Certificate'], meta: { name: 'Certificate' } }
    /**
     * Find zero or one Certificate that matches the filter.
     * @param {CertificateFindUniqueArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CertificateFindUniqueArgs>(args: SelectSubset<T, CertificateFindUniqueArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Certificate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CertificateFindUniqueOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CertificateFindUniqueOrThrowArgs>(args: SelectSubset<T, CertificateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindFirstArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CertificateFindFirstArgs>(args?: SelectSubset<T, CertificateFindFirstArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindFirstOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CertificateFindFirstOrThrowArgs>(args?: SelectSubset<T, CertificateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Certificates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Certificates
     * const certificates = await prisma.certificate.findMany()
     * 
     * // Get first 10 Certificates
     * const certificates = await prisma.certificate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const certificateWithIdOnly = await prisma.certificate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CertificateFindManyArgs>(args?: SelectSubset<T, CertificateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Certificate.
     * @param {CertificateCreateArgs} args - Arguments to create a Certificate.
     * @example
     * // Create one Certificate
     * const Certificate = await prisma.certificate.create({
     *   data: {
     *     // ... data to create a Certificate
     *   }
     * })
     * 
     */
    create<T extends CertificateCreateArgs>(args: SelectSubset<T, CertificateCreateArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Certificates.
     * @param {CertificateCreateManyArgs} args - Arguments to create many Certificates.
     * @example
     * // Create many Certificates
     * const certificate = await prisma.certificate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CertificateCreateManyArgs>(args?: SelectSubset<T, CertificateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Certificates and returns the data saved in the database.
     * @param {CertificateCreateManyAndReturnArgs} args - Arguments to create many Certificates.
     * @example
     * // Create many Certificates
     * const certificate = await prisma.certificate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Certificates and only return the `id`
     * const certificateWithIdOnly = await prisma.certificate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CertificateCreateManyAndReturnArgs>(args?: SelectSubset<T, CertificateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Certificate.
     * @param {CertificateDeleteArgs} args - Arguments to delete one Certificate.
     * @example
     * // Delete one Certificate
     * const Certificate = await prisma.certificate.delete({
     *   where: {
     *     // ... filter to delete one Certificate
     *   }
     * })
     * 
     */
    delete<T extends CertificateDeleteArgs>(args: SelectSubset<T, CertificateDeleteArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Certificate.
     * @param {CertificateUpdateArgs} args - Arguments to update one Certificate.
     * @example
     * // Update one Certificate
     * const certificate = await prisma.certificate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CertificateUpdateArgs>(args: SelectSubset<T, CertificateUpdateArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Certificates.
     * @param {CertificateDeleteManyArgs} args - Arguments to filter Certificates to delete.
     * @example
     * // Delete a few Certificates
     * const { count } = await prisma.certificate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CertificateDeleteManyArgs>(args?: SelectSubset<T, CertificateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Certificates
     * const certificate = await prisma.certificate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CertificateUpdateManyArgs>(args: SelectSubset<T, CertificateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificates and returns the data updated in the database.
     * @param {CertificateUpdateManyAndReturnArgs} args - Arguments to update many Certificates.
     * @example
     * // Update many Certificates
     * const certificate = await prisma.certificate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Certificates and only return the `id`
     * const certificateWithIdOnly = await prisma.certificate.updateManyAndReturn({
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
    updateManyAndReturn<T extends CertificateUpdateManyAndReturnArgs>(args: SelectSubset<T, CertificateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Certificate.
     * @param {CertificateUpsertArgs} args - Arguments to update or create a Certificate.
     * @example
     * // Update or create a Certificate
     * const certificate = await prisma.certificate.upsert({
     *   create: {
     *     // ... data to create a Certificate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Certificate we want to update
     *   }
     * })
     */
    upsert<T extends CertificateUpsertArgs>(args: SelectSubset<T, CertificateUpsertArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateCountArgs} args - Arguments to filter Certificates to count.
     * @example
     * // Count the number of Certificates
     * const count = await prisma.certificate.count({
     *   where: {
     *     // ... the filter for the Certificates we want to count
     *   }
     * })
    **/
    count<T extends CertificateCountArgs>(
      args?: Subset<T, CertificateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CertificateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CertificateAggregateArgs>(args: Subset<T, CertificateAggregateArgs>): Prisma.PrismaPromise<GetCertificateAggregateType<T>>

    /**
     * Group by Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateGroupByArgs} args - Group by arguments.
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
      T extends CertificateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CertificateGroupByArgs['orderBy'] }
        : { orderBy?: CertificateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CertificateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCertificateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Certificate model
   */
  readonly fields: CertificateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Certificate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CertificateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Certificate model
   */
  interface CertificateFieldRefs {
    readonly id: FieldRef<"Certificate", 'String'>
    readonly userId: FieldRef<"Certificate", 'String'>
    readonly certificateNumber: FieldRef<"Certificate", 'String'>
    readonly issuedAt: FieldRef<"Certificate", 'DateTime'>
    readonly createdAt: FieldRef<"Certificate", 'DateTime'>
    readonly updatedAt: FieldRef<"Certificate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Certificate findUnique
   */
  export type CertificateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate findUniqueOrThrow
   */
  export type CertificateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate findFirst
   */
  export type CertificateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate findFirstOrThrow
   */
  export type CertificateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate findMany
   */
  export type CertificateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificates to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate create
   */
  export type CertificateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The data needed to create a Certificate.
     */
    data: XOR<CertificateCreateInput, CertificateUncheckedCreateInput>
  }

  /**
   * Certificate createMany
   */
  export type CertificateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Certificates.
     */
    data: CertificateCreateManyInput | CertificateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Certificate createManyAndReturn
   */
  export type CertificateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * The data used to create many Certificates.
     */
    data: CertificateCreateManyInput | CertificateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Certificate update
   */
  export type CertificateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The data needed to update a Certificate.
     */
    data: XOR<CertificateUpdateInput, CertificateUncheckedUpdateInput>
    /**
     * Choose, which Certificate to update.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate updateMany
   */
  export type CertificateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Certificates.
     */
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyInput>
    /**
     * Filter which Certificates to update
     */
    where?: CertificateWhereInput
    /**
     * Limit how many Certificates to update.
     */
    limit?: number
  }

  /**
   * Certificate updateManyAndReturn
   */
  export type CertificateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * The data used to update Certificates.
     */
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyInput>
    /**
     * Filter which Certificates to update
     */
    where?: CertificateWhereInput
    /**
     * Limit how many Certificates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Certificate upsert
   */
  export type CertificateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The filter to search for the Certificate to update in case it exists.
     */
    where: CertificateWhereUniqueInput
    /**
     * In case the Certificate found by the `where` argument doesn't exist, create a new Certificate with this data.
     */
    create: XOR<CertificateCreateInput, CertificateUncheckedCreateInput>
    /**
     * In case the Certificate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CertificateUpdateInput, CertificateUncheckedUpdateInput>
  }

  /**
   * Certificate delete
   */
  export type CertificateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter which Certificate to delete.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate deleteMany
   */
  export type CertificateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificates to delete
     */
    where?: CertificateWhereInput
    /**
     * Limit how many Certificates to delete.
     */
    limit?: number
  }

  /**
   * Certificate without action
   */
  export type CertificateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
  }


  /**
   * Model ModuleFeedback
   */

  export type AggregateModuleFeedback = {
    _count: ModuleFeedbackCountAggregateOutputType | null
    _min: ModuleFeedbackMinAggregateOutputType | null
    _max: ModuleFeedbackMaxAggregateOutputType | null
  }

  export type ModuleFeedbackMinAggregateOutputType = {
    id: string | null
    userId: string | null
    moduleId: string | null
    helpful: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModuleFeedbackMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    moduleId: string | null
    helpful: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModuleFeedbackCountAggregateOutputType = {
    id: number
    userId: number
    moduleId: number
    helpful: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ModuleFeedbackMinAggregateInputType = {
    id?: true
    userId?: true
    moduleId?: true
    helpful?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModuleFeedbackMaxAggregateInputType = {
    id?: true
    userId?: true
    moduleId?: true
    helpful?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModuleFeedbackCountAggregateInputType = {
    id?: true
    userId?: true
    moduleId?: true
    helpful?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ModuleFeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModuleFeedback to aggregate.
     */
    where?: ModuleFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModuleFeedbacks to fetch.
     */
    orderBy?: ModuleFeedbackOrderByWithRelationInput | ModuleFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModuleFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModuleFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModuleFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModuleFeedbacks
    **/
    _count?: true | ModuleFeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuleFeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuleFeedbackMaxAggregateInputType
  }

  export type GetModuleFeedbackAggregateType<T extends ModuleFeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateModuleFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModuleFeedback[P]>
      : GetScalarType<T[P], AggregateModuleFeedback[P]>
  }




  export type ModuleFeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleFeedbackWhereInput
    orderBy?: ModuleFeedbackOrderByWithAggregationInput | ModuleFeedbackOrderByWithAggregationInput[]
    by: ModuleFeedbackScalarFieldEnum[] | ModuleFeedbackScalarFieldEnum
    having?: ModuleFeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuleFeedbackCountAggregateInputType | true
    _min?: ModuleFeedbackMinAggregateInputType
    _max?: ModuleFeedbackMaxAggregateInputType
  }

  export type ModuleFeedbackGroupByOutputType = {
    id: string
    userId: string
    moduleId: string
    helpful: boolean
    createdAt: Date
    updatedAt: Date
    _count: ModuleFeedbackCountAggregateOutputType | null
    _min: ModuleFeedbackMinAggregateOutputType | null
    _max: ModuleFeedbackMaxAggregateOutputType | null
  }

  type GetModuleFeedbackGroupByPayload<T extends ModuleFeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuleFeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuleFeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuleFeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], ModuleFeedbackGroupByOutputType[P]>
        }
      >
    >


  export type ModuleFeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    moduleId?: boolean
    helpful?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moduleFeedback"]>

  export type ModuleFeedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    moduleId?: boolean
    helpful?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moduleFeedback"]>

  export type ModuleFeedbackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    moduleId?: boolean
    helpful?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moduleFeedback"]>

  export type ModuleFeedbackSelectScalar = {
    id?: boolean
    userId?: boolean
    moduleId?: boolean
    helpful?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ModuleFeedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "moduleId" | "helpful" | "createdAt" | "updatedAt", ExtArgs["result"]["moduleFeedback"]>
  export type ModuleFeedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }
  export type ModuleFeedbackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }
  export type ModuleFeedbackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }

  export type $ModuleFeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModuleFeedback"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      module: Prisma.$ModulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      moduleId: string
      helpful: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["moduleFeedback"]>
    composites: {}
  }

  type ModuleFeedbackGetPayload<S extends boolean | null | undefined | ModuleFeedbackDefaultArgs> = $Result.GetResult<Prisma.$ModuleFeedbackPayload, S>

  type ModuleFeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModuleFeedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModuleFeedbackCountAggregateInputType | true
    }

  export interface ModuleFeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModuleFeedback'], meta: { name: 'ModuleFeedback' } }
    /**
     * Find zero or one ModuleFeedback that matches the filter.
     * @param {ModuleFeedbackFindUniqueArgs} args - Arguments to find a ModuleFeedback
     * @example
     * // Get one ModuleFeedback
     * const moduleFeedback = await prisma.moduleFeedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModuleFeedbackFindUniqueArgs>(args: SelectSubset<T, ModuleFeedbackFindUniqueArgs<ExtArgs>>): Prisma__ModuleFeedbackClient<$Result.GetResult<Prisma.$ModuleFeedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ModuleFeedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModuleFeedbackFindUniqueOrThrowArgs} args - Arguments to find a ModuleFeedback
     * @example
     * // Get one ModuleFeedback
     * const moduleFeedback = await prisma.moduleFeedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModuleFeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, ModuleFeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModuleFeedbackClient<$Result.GetResult<Prisma.$ModuleFeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModuleFeedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFeedbackFindFirstArgs} args - Arguments to find a ModuleFeedback
     * @example
     * // Get one ModuleFeedback
     * const moduleFeedback = await prisma.moduleFeedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModuleFeedbackFindFirstArgs>(args?: SelectSubset<T, ModuleFeedbackFindFirstArgs<ExtArgs>>): Prisma__ModuleFeedbackClient<$Result.GetResult<Prisma.$ModuleFeedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModuleFeedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFeedbackFindFirstOrThrowArgs} args - Arguments to find a ModuleFeedback
     * @example
     * // Get one ModuleFeedback
     * const moduleFeedback = await prisma.moduleFeedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModuleFeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, ModuleFeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModuleFeedbackClient<$Result.GetResult<Prisma.$ModuleFeedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ModuleFeedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModuleFeedbacks
     * const moduleFeedbacks = await prisma.moduleFeedback.findMany()
     * 
     * // Get first 10 ModuleFeedbacks
     * const moduleFeedbacks = await prisma.moduleFeedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moduleFeedbackWithIdOnly = await prisma.moduleFeedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModuleFeedbackFindManyArgs>(args?: SelectSubset<T, ModuleFeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuleFeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ModuleFeedback.
     * @param {ModuleFeedbackCreateArgs} args - Arguments to create a ModuleFeedback.
     * @example
     * // Create one ModuleFeedback
     * const ModuleFeedback = await prisma.moduleFeedback.create({
     *   data: {
     *     // ... data to create a ModuleFeedback
     *   }
     * })
     * 
     */
    create<T extends ModuleFeedbackCreateArgs>(args: SelectSubset<T, ModuleFeedbackCreateArgs<ExtArgs>>): Prisma__ModuleFeedbackClient<$Result.GetResult<Prisma.$ModuleFeedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ModuleFeedbacks.
     * @param {ModuleFeedbackCreateManyArgs} args - Arguments to create many ModuleFeedbacks.
     * @example
     * // Create many ModuleFeedbacks
     * const moduleFeedback = await prisma.moduleFeedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModuleFeedbackCreateManyArgs>(args?: SelectSubset<T, ModuleFeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ModuleFeedbacks and returns the data saved in the database.
     * @param {ModuleFeedbackCreateManyAndReturnArgs} args - Arguments to create many ModuleFeedbacks.
     * @example
     * // Create many ModuleFeedbacks
     * const moduleFeedback = await prisma.moduleFeedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ModuleFeedbacks and only return the `id`
     * const moduleFeedbackWithIdOnly = await prisma.moduleFeedback.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModuleFeedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, ModuleFeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuleFeedbackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ModuleFeedback.
     * @param {ModuleFeedbackDeleteArgs} args - Arguments to delete one ModuleFeedback.
     * @example
     * // Delete one ModuleFeedback
     * const ModuleFeedback = await prisma.moduleFeedback.delete({
     *   where: {
     *     // ... filter to delete one ModuleFeedback
     *   }
     * })
     * 
     */
    delete<T extends ModuleFeedbackDeleteArgs>(args: SelectSubset<T, ModuleFeedbackDeleteArgs<ExtArgs>>): Prisma__ModuleFeedbackClient<$Result.GetResult<Prisma.$ModuleFeedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ModuleFeedback.
     * @param {ModuleFeedbackUpdateArgs} args - Arguments to update one ModuleFeedback.
     * @example
     * // Update one ModuleFeedback
     * const moduleFeedback = await prisma.moduleFeedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModuleFeedbackUpdateArgs>(args: SelectSubset<T, ModuleFeedbackUpdateArgs<ExtArgs>>): Prisma__ModuleFeedbackClient<$Result.GetResult<Prisma.$ModuleFeedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ModuleFeedbacks.
     * @param {ModuleFeedbackDeleteManyArgs} args - Arguments to filter ModuleFeedbacks to delete.
     * @example
     * // Delete a few ModuleFeedbacks
     * const { count } = await prisma.moduleFeedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModuleFeedbackDeleteManyArgs>(args?: SelectSubset<T, ModuleFeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModuleFeedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModuleFeedbacks
     * const moduleFeedback = await prisma.moduleFeedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModuleFeedbackUpdateManyArgs>(args: SelectSubset<T, ModuleFeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModuleFeedbacks and returns the data updated in the database.
     * @param {ModuleFeedbackUpdateManyAndReturnArgs} args - Arguments to update many ModuleFeedbacks.
     * @example
     * // Update many ModuleFeedbacks
     * const moduleFeedback = await prisma.moduleFeedback.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ModuleFeedbacks and only return the `id`
     * const moduleFeedbackWithIdOnly = await prisma.moduleFeedback.updateManyAndReturn({
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
    updateManyAndReturn<T extends ModuleFeedbackUpdateManyAndReturnArgs>(args: SelectSubset<T, ModuleFeedbackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuleFeedbackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ModuleFeedback.
     * @param {ModuleFeedbackUpsertArgs} args - Arguments to update or create a ModuleFeedback.
     * @example
     * // Update or create a ModuleFeedback
     * const moduleFeedback = await prisma.moduleFeedback.upsert({
     *   create: {
     *     // ... data to create a ModuleFeedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModuleFeedback we want to update
     *   }
     * })
     */
    upsert<T extends ModuleFeedbackUpsertArgs>(args: SelectSubset<T, ModuleFeedbackUpsertArgs<ExtArgs>>): Prisma__ModuleFeedbackClient<$Result.GetResult<Prisma.$ModuleFeedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ModuleFeedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFeedbackCountArgs} args - Arguments to filter ModuleFeedbacks to count.
     * @example
     * // Count the number of ModuleFeedbacks
     * const count = await prisma.moduleFeedback.count({
     *   where: {
     *     // ... the filter for the ModuleFeedbacks we want to count
     *   }
     * })
    **/
    count<T extends ModuleFeedbackCountArgs>(
      args?: Subset<T, ModuleFeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuleFeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModuleFeedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModuleFeedbackAggregateArgs>(args: Subset<T, ModuleFeedbackAggregateArgs>): Prisma.PrismaPromise<GetModuleFeedbackAggregateType<T>>

    /**
     * Group by ModuleFeedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFeedbackGroupByArgs} args - Group by arguments.
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
      T extends ModuleFeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModuleFeedbackGroupByArgs['orderBy'] }
        : { orderBy?: ModuleFeedbackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModuleFeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuleFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModuleFeedback model
   */
  readonly fields: ModuleFeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModuleFeedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModuleFeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    module<T extends ModuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuleDefaultArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ModuleFeedback model
   */
  interface ModuleFeedbackFieldRefs {
    readonly id: FieldRef<"ModuleFeedback", 'String'>
    readonly userId: FieldRef<"ModuleFeedback", 'String'>
    readonly moduleId: FieldRef<"ModuleFeedback", 'String'>
    readonly helpful: FieldRef<"ModuleFeedback", 'Boolean'>
    readonly createdAt: FieldRef<"ModuleFeedback", 'DateTime'>
    readonly updatedAt: FieldRef<"ModuleFeedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ModuleFeedback findUnique
   */
  export type ModuleFeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleFeedback
     */
    select?: ModuleFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleFeedback
     */
    omit?: ModuleFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which ModuleFeedback to fetch.
     */
    where: ModuleFeedbackWhereUniqueInput
  }

  /**
   * ModuleFeedback findUniqueOrThrow
   */
  export type ModuleFeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleFeedback
     */
    select?: ModuleFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleFeedback
     */
    omit?: ModuleFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which ModuleFeedback to fetch.
     */
    where: ModuleFeedbackWhereUniqueInput
  }

  /**
   * ModuleFeedback findFirst
   */
  export type ModuleFeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleFeedback
     */
    select?: ModuleFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleFeedback
     */
    omit?: ModuleFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which ModuleFeedback to fetch.
     */
    where?: ModuleFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModuleFeedbacks to fetch.
     */
    orderBy?: ModuleFeedbackOrderByWithRelationInput | ModuleFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModuleFeedbacks.
     */
    cursor?: ModuleFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModuleFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModuleFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModuleFeedbacks.
     */
    distinct?: ModuleFeedbackScalarFieldEnum | ModuleFeedbackScalarFieldEnum[]
  }

  /**
   * ModuleFeedback findFirstOrThrow
   */
  export type ModuleFeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleFeedback
     */
    select?: ModuleFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleFeedback
     */
    omit?: ModuleFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which ModuleFeedback to fetch.
     */
    where?: ModuleFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModuleFeedbacks to fetch.
     */
    orderBy?: ModuleFeedbackOrderByWithRelationInput | ModuleFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModuleFeedbacks.
     */
    cursor?: ModuleFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModuleFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModuleFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModuleFeedbacks.
     */
    distinct?: ModuleFeedbackScalarFieldEnum | ModuleFeedbackScalarFieldEnum[]
  }

  /**
   * ModuleFeedback findMany
   */
  export type ModuleFeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleFeedback
     */
    select?: ModuleFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleFeedback
     */
    omit?: ModuleFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which ModuleFeedbacks to fetch.
     */
    where?: ModuleFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModuleFeedbacks to fetch.
     */
    orderBy?: ModuleFeedbackOrderByWithRelationInput | ModuleFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModuleFeedbacks.
     */
    cursor?: ModuleFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModuleFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModuleFeedbacks.
     */
    skip?: number
    distinct?: ModuleFeedbackScalarFieldEnum | ModuleFeedbackScalarFieldEnum[]
  }

  /**
   * ModuleFeedback create
   */
  export type ModuleFeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleFeedback
     */
    select?: ModuleFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleFeedback
     */
    omit?: ModuleFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleFeedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a ModuleFeedback.
     */
    data: XOR<ModuleFeedbackCreateInput, ModuleFeedbackUncheckedCreateInput>
  }

  /**
   * ModuleFeedback createMany
   */
  export type ModuleFeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModuleFeedbacks.
     */
    data: ModuleFeedbackCreateManyInput | ModuleFeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ModuleFeedback createManyAndReturn
   */
  export type ModuleFeedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleFeedback
     */
    select?: ModuleFeedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleFeedback
     */
    omit?: ModuleFeedbackOmit<ExtArgs> | null
    /**
     * The data used to create many ModuleFeedbacks.
     */
    data: ModuleFeedbackCreateManyInput | ModuleFeedbackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleFeedbackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModuleFeedback update
   */
  export type ModuleFeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleFeedback
     */
    select?: ModuleFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleFeedback
     */
    omit?: ModuleFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleFeedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a ModuleFeedback.
     */
    data: XOR<ModuleFeedbackUpdateInput, ModuleFeedbackUncheckedUpdateInput>
    /**
     * Choose, which ModuleFeedback to update.
     */
    where: ModuleFeedbackWhereUniqueInput
  }

  /**
   * ModuleFeedback updateMany
   */
  export type ModuleFeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModuleFeedbacks.
     */
    data: XOR<ModuleFeedbackUpdateManyMutationInput, ModuleFeedbackUncheckedUpdateManyInput>
    /**
     * Filter which ModuleFeedbacks to update
     */
    where?: ModuleFeedbackWhereInput
    /**
     * Limit how many ModuleFeedbacks to update.
     */
    limit?: number
  }

  /**
   * ModuleFeedback updateManyAndReturn
   */
  export type ModuleFeedbackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleFeedback
     */
    select?: ModuleFeedbackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleFeedback
     */
    omit?: ModuleFeedbackOmit<ExtArgs> | null
    /**
     * The data used to update ModuleFeedbacks.
     */
    data: XOR<ModuleFeedbackUpdateManyMutationInput, ModuleFeedbackUncheckedUpdateManyInput>
    /**
     * Filter which ModuleFeedbacks to update
     */
    where?: ModuleFeedbackWhereInput
    /**
     * Limit how many ModuleFeedbacks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleFeedbackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModuleFeedback upsert
   */
  export type ModuleFeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleFeedback
     */
    select?: ModuleFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleFeedback
     */
    omit?: ModuleFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleFeedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the ModuleFeedback to update in case it exists.
     */
    where: ModuleFeedbackWhereUniqueInput
    /**
     * In case the ModuleFeedback found by the `where` argument doesn't exist, create a new ModuleFeedback with this data.
     */
    create: XOR<ModuleFeedbackCreateInput, ModuleFeedbackUncheckedCreateInput>
    /**
     * In case the ModuleFeedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModuleFeedbackUpdateInput, ModuleFeedbackUncheckedUpdateInput>
  }

  /**
   * ModuleFeedback delete
   */
  export type ModuleFeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleFeedback
     */
    select?: ModuleFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleFeedback
     */
    omit?: ModuleFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleFeedbackInclude<ExtArgs> | null
    /**
     * Filter which ModuleFeedback to delete.
     */
    where: ModuleFeedbackWhereUniqueInput
  }

  /**
   * ModuleFeedback deleteMany
   */
  export type ModuleFeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModuleFeedbacks to delete
     */
    where?: ModuleFeedbackWhereInput
    /**
     * Limit how many ModuleFeedbacks to delete.
     */
    limit?: number
  }

  /**
   * ModuleFeedback without action
   */
  export type ModuleFeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleFeedback
     */
    select?: ModuleFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleFeedback
     */
    omit?: ModuleFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleFeedbackInclude<ExtArgs> | null
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
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ModuleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    videoUrl: 'videoUrl',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ModuleScalarFieldEnum = (typeof ModuleScalarFieldEnum)[keyof typeof ModuleScalarFieldEnum]


  export const UserModuleProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    moduleId: 'moduleId',
    status: 'status',
    isUnlocked: 'isUnlocked',
    quizPassed: 'quizPassed',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserModuleProgressScalarFieldEnum = (typeof UserModuleProgressScalarFieldEnum)[keyof typeof UserModuleProgressScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    moduleId: 'moduleId',
    questionText: 'questionText',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const AnswerScalarFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    answerText: 'answerText',
    isCorrect: 'isCorrect',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnswerScalarFieldEnum = (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum]


  export const UserQuizAttemptScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    moduleId: 'moduleId',
    score: 'score',
    passed: 'passed',
    attemptedAt: 'attemptedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserQuizAttemptScalarFieldEnum = (typeof UserQuizAttemptScalarFieldEnum)[keyof typeof UserQuizAttemptScalarFieldEnum]


  export const UserQuizResponseScalarFieldEnum: {
    id: 'id',
    attemptId: 'attemptId',
    answerId: 'answerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserQuizResponseScalarFieldEnum = (typeof UserQuizResponseScalarFieldEnum)[keyof typeof UserQuizResponseScalarFieldEnum]


  export const CertificateScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    certificateNumber: 'certificateNumber',
    issuedAt: 'issuedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CertificateScalarFieldEnum = (typeof CertificateScalarFieldEnum)[keyof typeof CertificateScalarFieldEnum]


  export const ModuleFeedbackScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    moduleId: 'moduleId',
    helpful: 'helpful',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ModuleFeedbackScalarFieldEnum = (typeof ModuleFeedbackScalarFieldEnum)[keyof typeof ModuleFeedbackScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
   * Reference to a field of type 'ModuleStatus'
   */
  export type EnumModuleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModuleStatus'>
    


  /**
   * Reference to a field of type 'ModuleStatus[]'
   */
  export type ListEnumModuleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModuleStatus[]'>
    


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
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    moduleProgress?: UserModuleProgressListRelationFilter
    quizAttempts?: UserQuizAttemptListRelationFilter
    certificates?: CertificateListRelationFilter
    moduleFeedback?: ModuleFeedbackListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    moduleProgress?: UserModuleProgressOrderByRelationAggregateInput
    quizAttempts?: UserQuizAttemptOrderByRelationAggregateInput
    certificates?: CertificateOrderByRelationAggregateInput
    moduleFeedback?: ModuleFeedbackOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    moduleProgress?: UserModuleProgressListRelationFilter
    quizAttempts?: UserQuizAttemptListRelationFilter
    certificates?: CertificateListRelationFilter
    moduleFeedback?: ModuleFeedbackListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ModuleWhereInput = {
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    id?: StringFilter<"Module"> | string
    title?: StringFilter<"Module"> | string
    videoUrl?: StringFilter<"Module"> | string
    order?: IntFilter<"Module"> | number
    createdAt?: DateTimeFilter<"Module"> | Date | string
    updatedAt?: DateTimeFilter<"Module"> | Date | string
    userProgress?: UserModuleProgressListRelationFilter
    questions?: QuestionListRelationFilter
    moduleFeedback?: ModuleFeedbackListRelationFilter
  }

  export type ModuleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    videoUrl?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userProgress?: UserModuleProgressOrderByRelationAggregateInput
    questions?: QuestionOrderByRelationAggregateInput
    moduleFeedback?: ModuleFeedbackOrderByRelationAggregateInput
  }

  export type ModuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    order?: number
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    title?: StringFilter<"Module"> | string
    videoUrl?: StringFilter<"Module"> | string
    createdAt?: DateTimeFilter<"Module"> | Date | string
    updatedAt?: DateTimeFilter<"Module"> | Date | string
    userProgress?: UserModuleProgressListRelationFilter
    questions?: QuestionListRelationFilter
    moduleFeedback?: ModuleFeedbackListRelationFilter
  }, "id" | "order">

  export type ModuleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    videoUrl?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ModuleCountOrderByAggregateInput
    _avg?: ModuleAvgOrderByAggregateInput
    _max?: ModuleMaxOrderByAggregateInput
    _min?: ModuleMinOrderByAggregateInput
    _sum?: ModuleSumOrderByAggregateInput
  }

  export type ModuleScalarWhereWithAggregatesInput = {
    AND?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    OR?: ModuleScalarWhereWithAggregatesInput[]
    NOT?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Module"> | string
    title?: StringWithAggregatesFilter<"Module"> | string
    videoUrl?: StringWithAggregatesFilter<"Module"> | string
    order?: IntWithAggregatesFilter<"Module"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Module"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Module"> | Date | string
  }

  export type UserModuleProgressWhereInput = {
    AND?: UserModuleProgressWhereInput | UserModuleProgressWhereInput[]
    OR?: UserModuleProgressWhereInput[]
    NOT?: UserModuleProgressWhereInput | UserModuleProgressWhereInput[]
    id?: StringFilter<"UserModuleProgress"> | string
    userId?: StringFilter<"UserModuleProgress"> | string
    moduleId?: StringFilter<"UserModuleProgress"> | string
    status?: EnumModuleStatusFilter<"UserModuleProgress"> | $Enums.ModuleStatus
    isUnlocked?: BoolFilter<"UserModuleProgress"> | boolean
    quizPassed?: BoolFilter<"UserModuleProgress"> | boolean
    startedAt?: DateTimeNullableFilter<"UserModuleProgress"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"UserModuleProgress"> | Date | string | null
    createdAt?: DateTimeFilter<"UserModuleProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserModuleProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
  }

  export type UserModuleProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    status?: SortOrder
    isUnlocked?: SortOrder
    quizPassed?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    module?: ModuleOrderByWithRelationInput
  }

  export type UserModuleProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_moduleId?: UserModuleProgressUserIdModuleIdCompoundUniqueInput
    AND?: UserModuleProgressWhereInput | UserModuleProgressWhereInput[]
    OR?: UserModuleProgressWhereInput[]
    NOT?: UserModuleProgressWhereInput | UserModuleProgressWhereInput[]
    userId?: StringFilter<"UserModuleProgress"> | string
    moduleId?: StringFilter<"UserModuleProgress"> | string
    status?: EnumModuleStatusFilter<"UserModuleProgress"> | $Enums.ModuleStatus
    isUnlocked?: BoolFilter<"UserModuleProgress"> | boolean
    quizPassed?: BoolFilter<"UserModuleProgress"> | boolean
    startedAt?: DateTimeNullableFilter<"UserModuleProgress"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"UserModuleProgress"> | Date | string | null
    createdAt?: DateTimeFilter<"UserModuleProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserModuleProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
  }, "id" | "userId_moduleId">

  export type UserModuleProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    status?: SortOrder
    isUnlocked?: SortOrder
    quizPassed?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserModuleProgressCountOrderByAggregateInput
    _max?: UserModuleProgressMaxOrderByAggregateInput
    _min?: UserModuleProgressMinOrderByAggregateInput
  }

  export type UserModuleProgressScalarWhereWithAggregatesInput = {
    AND?: UserModuleProgressScalarWhereWithAggregatesInput | UserModuleProgressScalarWhereWithAggregatesInput[]
    OR?: UserModuleProgressScalarWhereWithAggregatesInput[]
    NOT?: UserModuleProgressScalarWhereWithAggregatesInput | UserModuleProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserModuleProgress"> | string
    userId?: StringWithAggregatesFilter<"UserModuleProgress"> | string
    moduleId?: StringWithAggregatesFilter<"UserModuleProgress"> | string
    status?: EnumModuleStatusWithAggregatesFilter<"UserModuleProgress"> | $Enums.ModuleStatus
    isUnlocked?: BoolWithAggregatesFilter<"UserModuleProgress"> | boolean
    quizPassed?: BoolWithAggregatesFilter<"UserModuleProgress"> | boolean
    startedAt?: DateTimeNullableWithAggregatesFilter<"UserModuleProgress"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"UserModuleProgress"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserModuleProgress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserModuleProgress"> | Date | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    moduleId?: StringFilter<"Question"> | string
    questionText?: StringFilter<"Question"> | string
    order?: IntFilter<"Question"> | number
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
    answers?: AnswerListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    moduleId?: SortOrder
    questionText?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    module?: ModuleOrderByWithRelationInput
    answers?: AnswerOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    moduleId_order?: QuestionModuleIdOrderCompoundUniqueInput
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    moduleId?: StringFilter<"Question"> | string
    questionText?: StringFilter<"Question"> | string
    order?: IntFilter<"Question"> | number
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
    answers?: AnswerListRelationFilter
  }, "id" | "moduleId_order">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    moduleId?: SortOrder
    questionText?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    moduleId?: StringWithAggregatesFilter<"Question"> | string
    questionText?: StringWithAggregatesFilter<"Question"> | string
    order?: IntWithAggregatesFilter<"Question"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type AnswerWhereInput = {
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    id?: StringFilter<"Answer"> | string
    questionId?: StringFilter<"Answer"> | string
    answerText?: StringFilter<"Answer"> | string
    isCorrect?: BoolFilter<"Answer"> | boolean
    order?: IntFilter<"Answer"> | number
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    userQuizResponses?: UserQuizResponseListRelationFilter
  }

  export type AnswerOrderByWithRelationInput = {
    id?: SortOrder
    questionId?: SortOrder
    answerText?: SortOrder
    isCorrect?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    question?: QuestionOrderByWithRelationInput
    userQuizResponses?: UserQuizResponseOrderByRelationAggregateInput
  }

  export type AnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    questionId_order?: AnswerQuestionIdOrderCompoundUniqueInput
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    questionId?: StringFilter<"Answer"> | string
    answerText?: StringFilter<"Answer"> | string
    isCorrect?: BoolFilter<"Answer"> | boolean
    order?: IntFilter<"Answer"> | number
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    userQuizResponses?: UserQuizResponseListRelationFilter
  }, "id" | "questionId_order">

  export type AnswerOrderByWithAggregationInput = {
    id?: SortOrder
    questionId?: SortOrder
    answerText?: SortOrder
    isCorrect?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnswerCountOrderByAggregateInput
    _avg?: AnswerAvgOrderByAggregateInput
    _max?: AnswerMaxOrderByAggregateInput
    _min?: AnswerMinOrderByAggregateInput
    _sum?: AnswerSumOrderByAggregateInput
  }

  export type AnswerScalarWhereWithAggregatesInput = {
    AND?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    OR?: AnswerScalarWhereWithAggregatesInput[]
    NOT?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Answer"> | string
    questionId?: StringWithAggregatesFilter<"Answer"> | string
    answerText?: StringWithAggregatesFilter<"Answer"> | string
    isCorrect?: BoolWithAggregatesFilter<"Answer"> | boolean
    order?: IntWithAggregatesFilter<"Answer"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Answer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Answer"> | Date | string
  }

  export type UserQuizAttemptWhereInput = {
    AND?: UserQuizAttemptWhereInput | UserQuizAttemptWhereInput[]
    OR?: UserQuizAttemptWhereInput[]
    NOT?: UserQuizAttemptWhereInput | UserQuizAttemptWhereInput[]
    id?: StringFilter<"UserQuizAttempt"> | string
    userId?: StringFilter<"UserQuizAttempt"> | string
    moduleId?: StringFilter<"UserQuizAttempt"> | string
    score?: IntFilter<"UserQuizAttempt"> | number
    passed?: BoolFilter<"UserQuizAttempt"> | boolean
    attemptedAt?: DateTimeFilter<"UserQuizAttempt"> | Date | string
    createdAt?: DateTimeFilter<"UserQuizAttempt"> | Date | string
    updatedAt?: DateTimeFilter<"UserQuizAttempt"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    responses?: UserQuizResponseListRelationFilter
  }

  export type UserQuizAttemptOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    score?: SortOrder
    passed?: SortOrder
    attemptedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    responses?: UserQuizResponseOrderByRelationAggregateInput
  }

  export type UserQuizAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserQuizAttemptWhereInput | UserQuizAttemptWhereInput[]
    OR?: UserQuizAttemptWhereInput[]
    NOT?: UserQuizAttemptWhereInput | UserQuizAttemptWhereInput[]
    userId?: StringFilter<"UserQuizAttempt"> | string
    moduleId?: StringFilter<"UserQuizAttempt"> | string
    score?: IntFilter<"UserQuizAttempt"> | number
    passed?: BoolFilter<"UserQuizAttempt"> | boolean
    attemptedAt?: DateTimeFilter<"UserQuizAttempt"> | Date | string
    createdAt?: DateTimeFilter<"UserQuizAttempt"> | Date | string
    updatedAt?: DateTimeFilter<"UserQuizAttempt"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    responses?: UserQuizResponseListRelationFilter
  }, "id">

  export type UserQuizAttemptOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    score?: SortOrder
    passed?: SortOrder
    attemptedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserQuizAttemptCountOrderByAggregateInput
    _avg?: UserQuizAttemptAvgOrderByAggregateInput
    _max?: UserQuizAttemptMaxOrderByAggregateInput
    _min?: UserQuizAttemptMinOrderByAggregateInput
    _sum?: UserQuizAttemptSumOrderByAggregateInput
  }

  export type UserQuizAttemptScalarWhereWithAggregatesInput = {
    AND?: UserQuizAttemptScalarWhereWithAggregatesInput | UserQuizAttemptScalarWhereWithAggregatesInput[]
    OR?: UserQuizAttemptScalarWhereWithAggregatesInput[]
    NOT?: UserQuizAttemptScalarWhereWithAggregatesInput | UserQuizAttemptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserQuizAttempt"> | string
    userId?: StringWithAggregatesFilter<"UserQuizAttempt"> | string
    moduleId?: StringWithAggregatesFilter<"UserQuizAttempt"> | string
    score?: IntWithAggregatesFilter<"UserQuizAttempt"> | number
    passed?: BoolWithAggregatesFilter<"UserQuizAttempt"> | boolean
    attemptedAt?: DateTimeWithAggregatesFilter<"UserQuizAttempt"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"UserQuizAttempt"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserQuizAttempt"> | Date | string
  }

  export type UserQuizResponseWhereInput = {
    AND?: UserQuizResponseWhereInput | UserQuizResponseWhereInput[]
    OR?: UserQuizResponseWhereInput[]
    NOT?: UserQuizResponseWhereInput | UserQuizResponseWhereInput[]
    id?: StringFilter<"UserQuizResponse"> | string
    attemptId?: StringFilter<"UserQuizResponse"> | string
    answerId?: StringFilter<"UserQuizResponse"> | string
    createdAt?: DateTimeFilter<"UserQuizResponse"> | Date | string
    updatedAt?: DateTimeFilter<"UserQuizResponse"> | Date | string
    attempt?: XOR<UserQuizAttemptScalarRelationFilter, UserQuizAttemptWhereInput>
    answer?: XOR<AnswerScalarRelationFilter, AnswerWhereInput>
  }

  export type UserQuizResponseOrderByWithRelationInput = {
    id?: SortOrder
    attemptId?: SortOrder
    answerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attempt?: UserQuizAttemptOrderByWithRelationInput
    answer?: AnswerOrderByWithRelationInput
  }

  export type UserQuizResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserQuizResponseWhereInput | UserQuizResponseWhereInput[]
    OR?: UserQuizResponseWhereInput[]
    NOT?: UserQuizResponseWhereInput | UserQuizResponseWhereInput[]
    attemptId?: StringFilter<"UserQuizResponse"> | string
    answerId?: StringFilter<"UserQuizResponse"> | string
    createdAt?: DateTimeFilter<"UserQuizResponse"> | Date | string
    updatedAt?: DateTimeFilter<"UserQuizResponse"> | Date | string
    attempt?: XOR<UserQuizAttemptScalarRelationFilter, UserQuizAttemptWhereInput>
    answer?: XOR<AnswerScalarRelationFilter, AnswerWhereInput>
  }, "id">

  export type UserQuizResponseOrderByWithAggregationInput = {
    id?: SortOrder
    attemptId?: SortOrder
    answerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserQuizResponseCountOrderByAggregateInput
    _max?: UserQuizResponseMaxOrderByAggregateInput
    _min?: UserQuizResponseMinOrderByAggregateInput
  }

  export type UserQuizResponseScalarWhereWithAggregatesInput = {
    AND?: UserQuizResponseScalarWhereWithAggregatesInput | UserQuizResponseScalarWhereWithAggregatesInput[]
    OR?: UserQuizResponseScalarWhereWithAggregatesInput[]
    NOT?: UserQuizResponseScalarWhereWithAggregatesInput | UserQuizResponseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserQuizResponse"> | string
    attemptId?: StringWithAggregatesFilter<"UserQuizResponse"> | string
    answerId?: StringWithAggregatesFilter<"UserQuizResponse"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserQuizResponse"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserQuizResponse"> | Date | string
  }

  export type CertificateWhereInput = {
    AND?: CertificateWhereInput | CertificateWhereInput[]
    OR?: CertificateWhereInput[]
    NOT?: CertificateWhereInput | CertificateWhereInput[]
    id?: StringFilter<"Certificate"> | string
    userId?: StringFilter<"Certificate"> | string
    certificateNumber?: StringFilter<"Certificate"> | string
    issuedAt?: DateTimeFilter<"Certificate"> | Date | string
    createdAt?: DateTimeFilter<"Certificate"> | Date | string
    updatedAt?: DateTimeFilter<"Certificate"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CertificateOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    certificateNumber?: SortOrder
    issuedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CertificateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    certificateNumber?: string
    AND?: CertificateWhereInput | CertificateWhereInput[]
    OR?: CertificateWhereInput[]
    NOT?: CertificateWhereInput | CertificateWhereInput[]
    userId?: StringFilter<"Certificate"> | string
    issuedAt?: DateTimeFilter<"Certificate"> | Date | string
    createdAt?: DateTimeFilter<"Certificate"> | Date | string
    updatedAt?: DateTimeFilter<"Certificate"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "certificateNumber">

  export type CertificateOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    certificateNumber?: SortOrder
    issuedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CertificateCountOrderByAggregateInput
    _max?: CertificateMaxOrderByAggregateInput
    _min?: CertificateMinOrderByAggregateInput
  }

  export type CertificateScalarWhereWithAggregatesInput = {
    AND?: CertificateScalarWhereWithAggregatesInput | CertificateScalarWhereWithAggregatesInput[]
    OR?: CertificateScalarWhereWithAggregatesInput[]
    NOT?: CertificateScalarWhereWithAggregatesInput | CertificateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Certificate"> | string
    userId?: StringWithAggregatesFilter<"Certificate"> | string
    certificateNumber?: StringWithAggregatesFilter<"Certificate"> | string
    issuedAt?: DateTimeWithAggregatesFilter<"Certificate"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Certificate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Certificate"> | Date | string
  }

  export type ModuleFeedbackWhereInput = {
    AND?: ModuleFeedbackWhereInput | ModuleFeedbackWhereInput[]
    OR?: ModuleFeedbackWhereInput[]
    NOT?: ModuleFeedbackWhereInput | ModuleFeedbackWhereInput[]
    id?: StringFilter<"ModuleFeedback"> | string
    userId?: StringFilter<"ModuleFeedback"> | string
    moduleId?: StringFilter<"ModuleFeedback"> | string
    helpful?: BoolFilter<"ModuleFeedback"> | boolean
    createdAt?: DateTimeFilter<"ModuleFeedback"> | Date | string
    updatedAt?: DateTimeFilter<"ModuleFeedback"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
  }

  export type ModuleFeedbackOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    helpful?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    module?: ModuleOrderByWithRelationInput
  }

  export type ModuleFeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_moduleId?: ModuleFeedbackUserIdModuleIdCompoundUniqueInput
    AND?: ModuleFeedbackWhereInput | ModuleFeedbackWhereInput[]
    OR?: ModuleFeedbackWhereInput[]
    NOT?: ModuleFeedbackWhereInput | ModuleFeedbackWhereInput[]
    userId?: StringFilter<"ModuleFeedback"> | string
    moduleId?: StringFilter<"ModuleFeedback"> | string
    helpful?: BoolFilter<"ModuleFeedback"> | boolean
    createdAt?: DateTimeFilter<"ModuleFeedback"> | Date | string
    updatedAt?: DateTimeFilter<"ModuleFeedback"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
  }, "id" | "userId_moduleId">

  export type ModuleFeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    helpful?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ModuleFeedbackCountOrderByAggregateInput
    _max?: ModuleFeedbackMaxOrderByAggregateInput
    _min?: ModuleFeedbackMinOrderByAggregateInput
  }

  export type ModuleFeedbackScalarWhereWithAggregatesInput = {
    AND?: ModuleFeedbackScalarWhereWithAggregatesInput | ModuleFeedbackScalarWhereWithAggregatesInput[]
    OR?: ModuleFeedbackScalarWhereWithAggregatesInput[]
    NOT?: ModuleFeedbackScalarWhereWithAggregatesInput | ModuleFeedbackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ModuleFeedback"> | string
    userId?: StringWithAggregatesFilter<"ModuleFeedback"> | string
    moduleId?: StringWithAggregatesFilter<"ModuleFeedback"> | string
    helpful?: BoolWithAggregatesFilter<"ModuleFeedback"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ModuleFeedback"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ModuleFeedback"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    moduleProgress?: UserModuleProgressCreateNestedManyWithoutUserInput
    quizAttempts?: UserQuizAttemptCreateNestedManyWithoutUserInput
    certificates?: CertificateCreateNestedManyWithoutUserInput
    moduleFeedback?: ModuleFeedbackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    moduleProgress?: UserModuleProgressUncheckedCreateNestedManyWithoutUserInput
    quizAttempts?: UserQuizAttemptUncheckedCreateNestedManyWithoutUserInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput
    moduleFeedback?: ModuleFeedbackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moduleProgress?: UserModuleProgressUpdateManyWithoutUserNestedInput
    quizAttempts?: UserQuizAttemptUpdateManyWithoutUserNestedInput
    certificates?: CertificateUpdateManyWithoutUserNestedInput
    moduleFeedback?: ModuleFeedbackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moduleProgress?: UserModuleProgressUncheckedUpdateManyWithoutUserNestedInput
    quizAttempts?: UserQuizAttemptUncheckedUpdateManyWithoutUserNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput
    moduleFeedback?: ModuleFeedbackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleCreateInput = {
    id?: string
    title: string
    videoUrl: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userProgress?: UserModuleProgressCreateNestedManyWithoutModuleInput
    questions?: QuestionCreateNestedManyWithoutModuleInput
    moduleFeedback?: ModuleFeedbackCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateInput = {
    id?: string
    title: string
    videoUrl: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userProgress?: UserModuleProgressUncheckedCreateNestedManyWithoutModuleInput
    questions?: QuestionUncheckedCreateNestedManyWithoutModuleInput
    moduleFeedback?: ModuleFeedbackUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProgress?: UserModuleProgressUpdateManyWithoutModuleNestedInput
    questions?: QuestionUpdateManyWithoutModuleNestedInput
    moduleFeedback?: ModuleFeedbackUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProgress?: UserModuleProgressUncheckedUpdateManyWithoutModuleNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutModuleNestedInput
    moduleFeedback?: ModuleFeedbackUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleCreateManyInput = {
    id?: string
    title: string
    videoUrl: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserModuleProgressCreateInput = {
    id?: string
    status?: $Enums.ModuleStatus
    isUnlocked?: boolean
    quizPassed?: boolean
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutModuleProgressInput
    module: ModuleCreateNestedOneWithoutUserProgressInput
  }

  export type UserModuleProgressUncheckedCreateInput = {
    id?: string
    userId: string
    moduleId: string
    status?: $Enums.ModuleStatus
    isUnlocked?: boolean
    quizPassed?: boolean
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserModuleProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumModuleStatusFieldUpdateOperationsInput | $Enums.ModuleStatus
    isUnlocked?: BoolFieldUpdateOperationsInput | boolean
    quizPassed?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutModuleProgressNestedInput
    module?: ModuleUpdateOneRequiredWithoutUserProgressNestedInput
  }

  export type UserModuleProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    status?: EnumModuleStatusFieldUpdateOperationsInput | $Enums.ModuleStatus
    isUnlocked?: BoolFieldUpdateOperationsInput | boolean
    quizPassed?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserModuleProgressCreateManyInput = {
    id?: string
    userId: string
    moduleId: string
    status?: $Enums.ModuleStatus
    isUnlocked?: boolean
    quizPassed?: boolean
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserModuleProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumModuleStatusFieldUpdateOperationsInput | $Enums.ModuleStatus
    isUnlocked?: BoolFieldUpdateOperationsInput | boolean
    quizPassed?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserModuleProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    status?: EnumModuleStatusFieldUpdateOperationsInput | $Enums.ModuleStatus
    isUnlocked?: BoolFieldUpdateOperationsInput | boolean
    quizPassed?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    id?: string
    questionText: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    module: ModuleCreateNestedOneWithoutQuestionsInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    moduleId: string
    questionText: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: ModuleUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: string
    moduleId: string
    questionText: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateInput = {
    id?: string
    answerText: string
    isCorrect: boolean
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    question: QuestionCreateNestedOneWithoutAnswersInput
    userQuizResponses?: UserQuizResponseCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateInput = {
    id?: string
    questionId: string
    answerText: string
    isCorrect: boolean
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userQuizResponses?: UserQuizResponseUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerText?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    userQuizResponses?: UserQuizResponseUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    answerText?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userQuizResponses?: UserQuizResponseUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerCreateManyInput = {
    id?: string
    questionId: string
    answerText: string
    isCorrect: boolean
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerText?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    answerText?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuizAttemptCreateInput = {
    id?: string
    moduleId: string
    score: number
    passed: boolean
    attemptedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutQuizAttemptsInput
    responses?: UserQuizResponseCreateNestedManyWithoutAttemptInput
  }

  export type UserQuizAttemptUncheckedCreateInput = {
    id?: string
    userId: string
    moduleId: string
    score: number
    passed: boolean
    attemptedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: UserQuizResponseUncheckedCreateNestedManyWithoutAttemptInput
  }

  export type UserQuizAttemptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutQuizAttemptsNestedInput
    responses?: UserQuizResponseUpdateManyWithoutAttemptNestedInput
  }

  export type UserQuizAttemptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: UserQuizResponseUncheckedUpdateManyWithoutAttemptNestedInput
  }

  export type UserQuizAttemptCreateManyInput = {
    id?: string
    userId: string
    moduleId: string
    score: number
    passed: boolean
    attemptedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserQuizAttemptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuizAttemptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuizResponseCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attempt: UserQuizAttemptCreateNestedOneWithoutResponsesInput
    answer: AnswerCreateNestedOneWithoutUserQuizResponsesInput
  }

  export type UserQuizResponseUncheckedCreateInput = {
    id?: string
    attemptId: string
    answerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserQuizResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempt?: UserQuizAttemptUpdateOneRequiredWithoutResponsesNestedInput
    answer?: AnswerUpdateOneRequiredWithoutUserQuizResponsesNestedInput
  }

  export type UserQuizResponseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    attemptId?: StringFieldUpdateOperationsInput | string
    answerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuizResponseCreateManyInput = {
    id?: string
    attemptId: string
    answerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserQuizResponseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuizResponseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    attemptId?: StringFieldUpdateOperationsInput | string
    answerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateCreateInput = {
    id?: string
    certificateNumber: string
    issuedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCertificatesInput
  }

  export type CertificateUncheckedCreateInput = {
    id?: string
    userId: string
    certificateNumber: string
    issuedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateNumber?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCertificatesNestedInput
  }

  export type CertificateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    certificateNumber?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateCreateManyInput = {
    id?: string
    userId: string
    certificateNumber: string
    issuedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateNumber?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    certificateNumber?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleFeedbackCreateInput = {
    id?: string
    helpful: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutModuleFeedbackInput
    module: ModuleCreateNestedOneWithoutModuleFeedbackInput
  }

  export type ModuleFeedbackUncheckedCreateInput = {
    id?: string
    userId: string
    moduleId: string
    helpful: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModuleFeedbackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    helpful?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutModuleFeedbackNestedInput
    module?: ModuleUpdateOneRequiredWithoutModuleFeedbackNestedInput
  }

  export type ModuleFeedbackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    helpful?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleFeedbackCreateManyInput = {
    id?: string
    userId: string
    moduleId: string
    helpful: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModuleFeedbackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    helpful?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleFeedbackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    helpful?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type UserModuleProgressListRelationFilter = {
    every?: UserModuleProgressWhereInput
    some?: UserModuleProgressWhereInput
    none?: UserModuleProgressWhereInput
  }

  export type UserQuizAttemptListRelationFilter = {
    every?: UserQuizAttemptWhereInput
    some?: UserQuizAttemptWhereInput
    none?: UserQuizAttemptWhereInput
  }

  export type CertificateListRelationFilter = {
    every?: CertificateWhereInput
    some?: CertificateWhereInput
    none?: CertificateWhereInput
  }

  export type ModuleFeedbackListRelationFilter = {
    every?: ModuleFeedbackWhereInput
    some?: ModuleFeedbackWhereInput
    none?: ModuleFeedbackWhereInput
  }

  export type UserModuleProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserQuizAttemptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CertificateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModuleFeedbackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModuleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    videoUrl?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModuleAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ModuleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    videoUrl?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModuleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    videoUrl?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModuleSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type EnumModuleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ModuleStatus | EnumModuleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ModuleStatus[] | ListEnumModuleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModuleStatus[] | ListEnumModuleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumModuleStatusFilter<$PrismaModel> | $Enums.ModuleStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ModuleScalarRelationFilter = {
    is?: ModuleWhereInput
    isNot?: ModuleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserModuleProgressUserIdModuleIdCompoundUniqueInput = {
    userId: string
    moduleId: string
  }

  export type UserModuleProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    status?: SortOrder
    isUnlocked?: SortOrder
    quizPassed?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserModuleProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    status?: SortOrder
    isUnlocked?: SortOrder
    quizPassed?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserModuleProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    status?: SortOrder
    isUnlocked?: SortOrder
    quizPassed?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumModuleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModuleStatus | EnumModuleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ModuleStatus[] | ListEnumModuleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModuleStatus[] | ListEnumModuleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumModuleStatusWithAggregatesFilter<$PrismaModel> | $Enums.ModuleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModuleStatusFilter<$PrismaModel>
    _max?: NestedEnumModuleStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AnswerListRelationFilter = {
    every?: AnswerWhereInput
    some?: AnswerWhereInput
    none?: AnswerWhereInput
  }

  export type AnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionModuleIdOrderCompoundUniqueInput = {
    moduleId: string
    order: number
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    moduleId?: SortOrder
    questionText?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    moduleId?: SortOrder
    questionText?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    moduleId?: SortOrder
    questionText?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type UserQuizResponseListRelationFilter = {
    every?: UserQuizResponseWhereInput
    some?: UserQuizResponseWhereInput
    none?: UserQuizResponseWhereInput
  }

  export type UserQuizResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnswerQuestionIdOrderCompoundUniqueInput = {
    questionId: string
    order: number
  }

  export type AnswerCountOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    answerText?: SortOrder
    isCorrect?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnswerAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type AnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    answerText?: SortOrder
    isCorrect?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnswerMinOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    answerText?: SortOrder
    isCorrect?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnswerSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type UserQuizAttemptCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    score?: SortOrder
    passed?: SortOrder
    attemptedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserQuizAttemptAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type UserQuizAttemptMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    score?: SortOrder
    passed?: SortOrder
    attemptedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserQuizAttemptMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    score?: SortOrder
    passed?: SortOrder
    attemptedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserQuizAttemptSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type UserQuizAttemptScalarRelationFilter = {
    is?: UserQuizAttemptWhereInput
    isNot?: UserQuizAttemptWhereInput
  }

  export type AnswerScalarRelationFilter = {
    is?: AnswerWhereInput
    isNot?: AnswerWhereInput
  }

  export type UserQuizResponseCountOrderByAggregateInput = {
    id?: SortOrder
    attemptId?: SortOrder
    answerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserQuizResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    attemptId?: SortOrder
    answerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserQuizResponseMinOrderByAggregateInput = {
    id?: SortOrder
    attemptId?: SortOrder
    answerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CertificateCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    certificateNumber?: SortOrder
    issuedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CertificateMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    certificateNumber?: SortOrder
    issuedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CertificateMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    certificateNumber?: SortOrder
    issuedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModuleFeedbackUserIdModuleIdCompoundUniqueInput = {
    userId: string
    moduleId: string
  }

  export type ModuleFeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    helpful?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModuleFeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    helpful?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModuleFeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    helpful?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserModuleProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<UserModuleProgressCreateWithoutUserInput, UserModuleProgressUncheckedCreateWithoutUserInput> | UserModuleProgressCreateWithoutUserInput[] | UserModuleProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserModuleProgressCreateOrConnectWithoutUserInput | UserModuleProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserModuleProgressCreateManyUserInputEnvelope
    connect?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
  }

  export type UserQuizAttemptCreateNestedManyWithoutUserInput = {
    create?: XOR<UserQuizAttemptCreateWithoutUserInput, UserQuizAttemptUncheckedCreateWithoutUserInput> | UserQuizAttemptCreateWithoutUserInput[] | UserQuizAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserQuizAttemptCreateOrConnectWithoutUserInput | UserQuizAttemptCreateOrConnectWithoutUserInput[]
    createMany?: UserQuizAttemptCreateManyUserInputEnvelope
    connect?: UserQuizAttemptWhereUniqueInput | UserQuizAttemptWhereUniqueInput[]
  }

  export type CertificateCreateNestedManyWithoutUserInput = {
    create?: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput> | CertificateCreateWithoutUserInput[] | CertificateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutUserInput | CertificateCreateOrConnectWithoutUserInput[]
    createMany?: CertificateCreateManyUserInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type ModuleFeedbackCreateNestedManyWithoutUserInput = {
    create?: XOR<ModuleFeedbackCreateWithoutUserInput, ModuleFeedbackUncheckedCreateWithoutUserInput> | ModuleFeedbackCreateWithoutUserInput[] | ModuleFeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ModuleFeedbackCreateOrConnectWithoutUserInput | ModuleFeedbackCreateOrConnectWithoutUserInput[]
    createMany?: ModuleFeedbackCreateManyUserInputEnvelope
    connect?: ModuleFeedbackWhereUniqueInput | ModuleFeedbackWhereUniqueInput[]
  }

  export type UserModuleProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserModuleProgressCreateWithoutUserInput, UserModuleProgressUncheckedCreateWithoutUserInput> | UserModuleProgressCreateWithoutUserInput[] | UserModuleProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserModuleProgressCreateOrConnectWithoutUserInput | UserModuleProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserModuleProgressCreateManyUserInputEnvelope
    connect?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
  }

  export type UserQuizAttemptUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserQuizAttemptCreateWithoutUserInput, UserQuizAttemptUncheckedCreateWithoutUserInput> | UserQuizAttemptCreateWithoutUserInput[] | UserQuizAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserQuizAttemptCreateOrConnectWithoutUserInput | UserQuizAttemptCreateOrConnectWithoutUserInput[]
    createMany?: UserQuizAttemptCreateManyUserInputEnvelope
    connect?: UserQuizAttemptWhereUniqueInput | UserQuizAttemptWhereUniqueInput[]
  }

  export type CertificateUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput> | CertificateCreateWithoutUserInput[] | CertificateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutUserInput | CertificateCreateOrConnectWithoutUserInput[]
    createMany?: CertificateCreateManyUserInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type ModuleFeedbackUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ModuleFeedbackCreateWithoutUserInput, ModuleFeedbackUncheckedCreateWithoutUserInput> | ModuleFeedbackCreateWithoutUserInput[] | ModuleFeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ModuleFeedbackCreateOrConnectWithoutUserInput | ModuleFeedbackCreateOrConnectWithoutUserInput[]
    createMany?: ModuleFeedbackCreateManyUserInputEnvelope
    connect?: ModuleFeedbackWhereUniqueInput | ModuleFeedbackWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserModuleProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserModuleProgressCreateWithoutUserInput, UserModuleProgressUncheckedCreateWithoutUserInput> | UserModuleProgressCreateWithoutUserInput[] | UserModuleProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserModuleProgressCreateOrConnectWithoutUserInput | UserModuleProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserModuleProgressUpsertWithWhereUniqueWithoutUserInput | UserModuleProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserModuleProgressCreateManyUserInputEnvelope
    set?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
    disconnect?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
    delete?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
    connect?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
    update?: UserModuleProgressUpdateWithWhereUniqueWithoutUserInput | UserModuleProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserModuleProgressUpdateManyWithWhereWithoutUserInput | UserModuleProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserModuleProgressScalarWhereInput | UserModuleProgressScalarWhereInput[]
  }

  export type UserQuizAttemptUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserQuizAttemptCreateWithoutUserInput, UserQuizAttemptUncheckedCreateWithoutUserInput> | UserQuizAttemptCreateWithoutUserInput[] | UserQuizAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserQuizAttemptCreateOrConnectWithoutUserInput | UserQuizAttemptCreateOrConnectWithoutUserInput[]
    upsert?: UserQuizAttemptUpsertWithWhereUniqueWithoutUserInput | UserQuizAttemptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserQuizAttemptCreateManyUserInputEnvelope
    set?: UserQuizAttemptWhereUniqueInput | UserQuizAttemptWhereUniqueInput[]
    disconnect?: UserQuizAttemptWhereUniqueInput | UserQuizAttemptWhereUniqueInput[]
    delete?: UserQuizAttemptWhereUniqueInput | UserQuizAttemptWhereUniqueInput[]
    connect?: UserQuizAttemptWhereUniqueInput | UserQuizAttemptWhereUniqueInput[]
    update?: UserQuizAttemptUpdateWithWhereUniqueWithoutUserInput | UserQuizAttemptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserQuizAttemptUpdateManyWithWhereWithoutUserInput | UserQuizAttemptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserQuizAttemptScalarWhereInput | UserQuizAttemptScalarWhereInput[]
  }

  export type CertificateUpdateManyWithoutUserNestedInput = {
    create?: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput> | CertificateCreateWithoutUserInput[] | CertificateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutUserInput | CertificateCreateOrConnectWithoutUserInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutUserInput | CertificateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CertificateCreateManyUserInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutUserInput | CertificateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutUserInput | CertificateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type ModuleFeedbackUpdateManyWithoutUserNestedInput = {
    create?: XOR<ModuleFeedbackCreateWithoutUserInput, ModuleFeedbackUncheckedCreateWithoutUserInput> | ModuleFeedbackCreateWithoutUserInput[] | ModuleFeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ModuleFeedbackCreateOrConnectWithoutUserInput | ModuleFeedbackCreateOrConnectWithoutUserInput[]
    upsert?: ModuleFeedbackUpsertWithWhereUniqueWithoutUserInput | ModuleFeedbackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ModuleFeedbackCreateManyUserInputEnvelope
    set?: ModuleFeedbackWhereUniqueInput | ModuleFeedbackWhereUniqueInput[]
    disconnect?: ModuleFeedbackWhereUniqueInput | ModuleFeedbackWhereUniqueInput[]
    delete?: ModuleFeedbackWhereUniqueInput | ModuleFeedbackWhereUniqueInput[]
    connect?: ModuleFeedbackWhereUniqueInput | ModuleFeedbackWhereUniqueInput[]
    update?: ModuleFeedbackUpdateWithWhereUniqueWithoutUserInput | ModuleFeedbackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ModuleFeedbackUpdateManyWithWhereWithoutUserInput | ModuleFeedbackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ModuleFeedbackScalarWhereInput | ModuleFeedbackScalarWhereInput[]
  }

  export type UserModuleProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserModuleProgressCreateWithoutUserInput, UserModuleProgressUncheckedCreateWithoutUserInput> | UserModuleProgressCreateWithoutUserInput[] | UserModuleProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserModuleProgressCreateOrConnectWithoutUserInput | UserModuleProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserModuleProgressUpsertWithWhereUniqueWithoutUserInput | UserModuleProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserModuleProgressCreateManyUserInputEnvelope
    set?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
    disconnect?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
    delete?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
    connect?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
    update?: UserModuleProgressUpdateWithWhereUniqueWithoutUserInput | UserModuleProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserModuleProgressUpdateManyWithWhereWithoutUserInput | UserModuleProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserModuleProgressScalarWhereInput | UserModuleProgressScalarWhereInput[]
  }

  export type UserQuizAttemptUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserQuizAttemptCreateWithoutUserInput, UserQuizAttemptUncheckedCreateWithoutUserInput> | UserQuizAttemptCreateWithoutUserInput[] | UserQuizAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserQuizAttemptCreateOrConnectWithoutUserInput | UserQuizAttemptCreateOrConnectWithoutUserInput[]
    upsert?: UserQuizAttemptUpsertWithWhereUniqueWithoutUserInput | UserQuizAttemptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserQuizAttemptCreateManyUserInputEnvelope
    set?: UserQuizAttemptWhereUniqueInput | UserQuizAttemptWhereUniqueInput[]
    disconnect?: UserQuizAttemptWhereUniqueInput | UserQuizAttemptWhereUniqueInput[]
    delete?: UserQuizAttemptWhereUniqueInput | UserQuizAttemptWhereUniqueInput[]
    connect?: UserQuizAttemptWhereUniqueInput | UserQuizAttemptWhereUniqueInput[]
    update?: UserQuizAttemptUpdateWithWhereUniqueWithoutUserInput | UserQuizAttemptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserQuizAttemptUpdateManyWithWhereWithoutUserInput | UserQuizAttemptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserQuizAttemptScalarWhereInput | UserQuizAttemptScalarWhereInput[]
  }

  export type CertificateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput> | CertificateCreateWithoutUserInput[] | CertificateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutUserInput | CertificateCreateOrConnectWithoutUserInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutUserInput | CertificateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CertificateCreateManyUserInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutUserInput | CertificateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutUserInput | CertificateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type ModuleFeedbackUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ModuleFeedbackCreateWithoutUserInput, ModuleFeedbackUncheckedCreateWithoutUserInput> | ModuleFeedbackCreateWithoutUserInput[] | ModuleFeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ModuleFeedbackCreateOrConnectWithoutUserInput | ModuleFeedbackCreateOrConnectWithoutUserInput[]
    upsert?: ModuleFeedbackUpsertWithWhereUniqueWithoutUserInput | ModuleFeedbackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ModuleFeedbackCreateManyUserInputEnvelope
    set?: ModuleFeedbackWhereUniqueInput | ModuleFeedbackWhereUniqueInput[]
    disconnect?: ModuleFeedbackWhereUniqueInput | ModuleFeedbackWhereUniqueInput[]
    delete?: ModuleFeedbackWhereUniqueInput | ModuleFeedbackWhereUniqueInput[]
    connect?: ModuleFeedbackWhereUniqueInput | ModuleFeedbackWhereUniqueInput[]
    update?: ModuleFeedbackUpdateWithWhereUniqueWithoutUserInput | ModuleFeedbackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ModuleFeedbackUpdateManyWithWhereWithoutUserInput | ModuleFeedbackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ModuleFeedbackScalarWhereInput | ModuleFeedbackScalarWhereInput[]
  }

  export type UserModuleProgressCreateNestedManyWithoutModuleInput = {
    create?: XOR<UserModuleProgressCreateWithoutModuleInput, UserModuleProgressUncheckedCreateWithoutModuleInput> | UserModuleProgressCreateWithoutModuleInput[] | UserModuleProgressUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: UserModuleProgressCreateOrConnectWithoutModuleInput | UserModuleProgressCreateOrConnectWithoutModuleInput[]
    createMany?: UserModuleProgressCreateManyModuleInputEnvelope
    connect?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
  }

  export type QuestionCreateNestedManyWithoutModuleInput = {
    create?: XOR<QuestionCreateWithoutModuleInput, QuestionUncheckedCreateWithoutModuleInput> | QuestionCreateWithoutModuleInput[] | QuestionUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutModuleInput | QuestionCreateOrConnectWithoutModuleInput[]
    createMany?: QuestionCreateManyModuleInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type ModuleFeedbackCreateNestedManyWithoutModuleInput = {
    create?: XOR<ModuleFeedbackCreateWithoutModuleInput, ModuleFeedbackUncheckedCreateWithoutModuleInput> | ModuleFeedbackCreateWithoutModuleInput[] | ModuleFeedbackUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ModuleFeedbackCreateOrConnectWithoutModuleInput | ModuleFeedbackCreateOrConnectWithoutModuleInput[]
    createMany?: ModuleFeedbackCreateManyModuleInputEnvelope
    connect?: ModuleFeedbackWhereUniqueInput | ModuleFeedbackWhereUniqueInput[]
  }

  export type UserModuleProgressUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<UserModuleProgressCreateWithoutModuleInput, UserModuleProgressUncheckedCreateWithoutModuleInput> | UserModuleProgressCreateWithoutModuleInput[] | UserModuleProgressUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: UserModuleProgressCreateOrConnectWithoutModuleInput | UserModuleProgressCreateOrConnectWithoutModuleInput[]
    createMany?: UserModuleProgressCreateManyModuleInputEnvelope
    connect?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<QuestionCreateWithoutModuleInput, QuestionUncheckedCreateWithoutModuleInput> | QuestionCreateWithoutModuleInput[] | QuestionUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutModuleInput | QuestionCreateOrConnectWithoutModuleInput[]
    createMany?: QuestionCreateManyModuleInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type ModuleFeedbackUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<ModuleFeedbackCreateWithoutModuleInput, ModuleFeedbackUncheckedCreateWithoutModuleInput> | ModuleFeedbackCreateWithoutModuleInput[] | ModuleFeedbackUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ModuleFeedbackCreateOrConnectWithoutModuleInput | ModuleFeedbackCreateOrConnectWithoutModuleInput[]
    createMany?: ModuleFeedbackCreateManyModuleInputEnvelope
    connect?: ModuleFeedbackWhereUniqueInput | ModuleFeedbackWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserModuleProgressUpdateManyWithoutModuleNestedInput = {
    create?: XOR<UserModuleProgressCreateWithoutModuleInput, UserModuleProgressUncheckedCreateWithoutModuleInput> | UserModuleProgressCreateWithoutModuleInput[] | UserModuleProgressUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: UserModuleProgressCreateOrConnectWithoutModuleInput | UserModuleProgressCreateOrConnectWithoutModuleInput[]
    upsert?: UserModuleProgressUpsertWithWhereUniqueWithoutModuleInput | UserModuleProgressUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: UserModuleProgressCreateManyModuleInputEnvelope
    set?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
    disconnect?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
    delete?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
    connect?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
    update?: UserModuleProgressUpdateWithWhereUniqueWithoutModuleInput | UserModuleProgressUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: UserModuleProgressUpdateManyWithWhereWithoutModuleInput | UserModuleProgressUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: UserModuleProgressScalarWhereInput | UserModuleProgressScalarWhereInput[]
  }

  export type QuestionUpdateManyWithoutModuleNestedInput = {
    create?: XOR<QuestionCreateWithoutModuleInput, QuestionUncheckedCreateWithoutModuleInput> | QuestionCreateWithoutModuleInput[] | QuestionUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutModuleInput | QuestionCreateOrConnectWithoutModuleInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutModuleInput | QuestionUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: QuestionCreateManyModuleInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutModuleInput | QuestionUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutModuleInput | QuestionUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type ModuleFeedbackUpdateManyWithoutModuleNestedInput = {
    create?: XOR<ModuleFeedbackCreateWithoutModuleInput, ModuleFeedbackUncheckedCreateWithoutModuleInput> | ModuleFeedbackCreateWithoutModuleInput[] | ModuleFeedbackUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ModuleFeedbackCreateOrConnectWithoutModuleInput | ModuleFeedbackCreateOrConnectWithoutModuleInput[]
    upsert?: ModuleFeedbackUpsertWithWhereUniqueWithoutModuleInput | ModuleFeedbackUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: ModuleFeedbackCreateManyModuleInputEnvelope
    set?: ModuleFeedbackWhereUniqueInput | ModuleFeedbackWhereUniqueInput[]
    disconnect?: ModuleFeedbackWhereUniqueInput | ModuleFeedbackWhereUniqueInput[]
    delete?: ModuleFeedbackWhereUniqueInput | ModuleFeedbackWhereUniqueInput[]
    connect?: ModuleFeedbackWhereUniqueInput | ModuleFeedbackWhereUniqueInput[]
    update?: ModuleFeedbackUpdateWithWhereUniqueWithoutModuleInput | ModuleFeedbackUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: ModuleFeedbackUpdateManyWithWhereWithoutModuleInput | ModuleFeedbackUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: ModuleFeedbackScalarWhereInput | ModuleFeedbackScalarWhereInput[]
  }

  export type UserModuleProgressUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<UserModuleProgressCreateWithoutModuleInput, UserModuleProgressUncheckedCreateWithoutModuleInput> | UserModuleProgressCreateWithoutModuleInput[] | UserModuleProgressUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: UserModuleProgressCreateOrConnectWithoutModuleInput | UserModuleProgressCreateOrConnectWithoutModuleInput[]
    upsert?: UserModuleProgressUpsertWithWhereUniqueWithoutModuleInput | UserModuleProgressUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: UserModuleProgressCreateManyModuleInputEnvelope
    set?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
    disconnect?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
    delete?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
    connect?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
    update?: UserModuleProgressUpdateWithWhereUniqueWithoutModuleInput | UserModuleProgressUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: UserModuleProgressUpdateManyWithWhereWithoutModuleInput | UserModuleProgressUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: UserModuleProgressScalarWhereInput | UserModuleProgressScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<QuestionCreateWithoutModuleInput, QuestionUncheckedCreateWithoutModuleInput> | QuestionCreateWithoutModuleInput[] | QuestionUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutModuleInput | QuestionCreateOrConnectWithoutModuleInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutModuleInput | QuestionUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: QuestionCreateManyModuleInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutModuleInput | QuestionUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutModuleInput | QuestionUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type ModuleFeedbackUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<ModuleFeedbackCreateWithoutModuleInput, ModuleFeedbackUncheckedCreateWithoutModuleInput> | ModuleFeedbackCreateWithoutModuleInput[] | ModuleFeedbackUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ModuleFeedbackCreateOrConnectWithoutModuleInput | ModuleFeedbackCreateOrConnectWithoutModuleInput[]
    upsert?: ModuleFeedbackUpsertWithWhereUniqueWithoutModuleInput | ModuleFeedbackUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: ModuleFeedbackCreateManyModuleInputEnvelope
    set?: ModuleFeedbackWhereUniqueInput | ModuleFeedbackWhereUniqueInput[]
    disconnect?: ModuleFeedbackWhereUniqueInput | ModuleFeedbackWhereUniqueInput[]
    delete?: ModuleFeedbackWhereUniqueInput | ModuleFeedbackWhereUniqueInput[]
    connect?: ModuleFeedbackWhereUniqueInput | ModuleFeedbackWhereUniqueInput[]
    update?: ModuleFeedbackUpdateWithWhereUniqueWithoutModuleInput | ModuleFeedbackUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: ModuleFeedbackUpdateManyWithWhereWithoutModuleInput | ModuleFeedbackUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: ModuleFeedbackScalarWhereInput | ModuleFeedbackScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutModuleProgressInput = {
    create?: XOR<UserCreateWithoutModuleProgressInput, UserUncheckedCreateWithoutModuleProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutModuleProgressInput
    connect?: UserWhereUniqueInput
  }

  export type ModuleCreateNestedOneWithoutUserProgressInput = {
    create?: XOR<ModuleCreateWithoutUserProgressInput, ModuleUncheckedCreateWithoutUserProgressInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutUserProgressInput
    connect?: ModuleWhereUniqueInput
  }

  export type EnumModuleStatusFieldUpdateOperationsInput = {
    set?: $Enums.ModuleStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutModuleProgressNestedInput = {
    create?: XOR<UserCreateWithoutModuleProgressInput, UserUncheckedCreateWithoutModuleProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutModuleProgressInput
    upsert?: UserUpsertWithoutModuleProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutModuleProgressInput, UserUpdateWithoutModuleProgressInput>, UserUncheckedUpdateWithoutModuleProgressInput>
  }

  export type ModuleUpdateOneRequiredWithoutUserProgressNestedInput = {
    create?: XOR<ModuleCreateWithoutUserProgressInput, ModuleUncheckedCreateWithoutUserProgressInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutUserProgressInput
    upsert?: ModuleUpsertWithoutUserProgressInput
    connect?: ModuleWhereUniqueInput
    update?: XOR<XOR<ModuleUpdateToOneWithWhereWithoutUserProgressInput, ModuleUpdateWithoutUserProgressInput>, ModuleUncheckedUpdateWithoutUserProgressInput>
  }

  export type ModuleCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<ModuleCreateWithoutQuestionsInput, ModuleUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutQuestionsInput
    connect?: ModuleWhereUniqueInput
  }

  export type AnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type ModuleUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<ModuleCreateWithoutQuestionsInput, ModuleUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutQuestionsInput
    upsert?: ModuleUpsertWithoutQuestionsInput
    connect?: ModuleWhereUniqueInput
    update?: XOR<XOR<ModuleUpdateToOneWithWhereWithoutQuestionsInput, ModuleUpdateWithoutQuestionsInput>, ModuleUncheckedUpdateWithoutQuestionsInput>
  }

  export type AnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
  }

  export type UserQuizResponseCreateNestedManyWithoutAnswerInput = {
    create?: XOR<UserQuizResponseCreateWithoutAnswerInput, UserQuizResponseUncheckedCreateWithoutAnswerInput> | UserQuizResponseCreateWithoutAnswerInput[] | UserQuizResponseUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: UserQuizResponseCreateOrConnectWithoutAnswerInput | UserQuizResponseCreateOrConnectWithoutAnswerInput[]
    createMany?: UserQuizResponseCreateManyAnswerInputEnvelope
    connect?: UserQuizResponseWhereUniqueInput | UserQuizResponseWhereUniqueInput[]
  }

  export type UserQuizResponseUncheckedCreateNestedManyWithoutAnswerInput = {
    create?: XOR<UserQuizResponseCreateWithoutAnswerInput, UserQuizResponseUncheckedCreateWithoutAnswerInput> | UserQuizResponseCreateWithoutAnswerInput[] | UserQuizResponseUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: UserQuizResponseCreateOrConnectWithoutAnswerInput | UserQuizResponseCreateOrConnectWithoutAnswerInput[]
    createMany?: UserQuizResponseCreateManyAnswerInputEnvelope
    connect?: UserQuizResponseWhereUniqueInput | UserQuizResponseWhereUniqueInput[]
  }

  export type QuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    upsert?: QuestionUpsertWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAnswersInput, QuestionUpdateWithoutAnswersInput>, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type UserQuizResponseUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<UserQuizResponseCreateWithoutAnswerInput, UserQuizResponseUncheckedCreateWithoutAnswerInput> | UserQuizResponseCreateWithoutAnswerInput[] | UserQuizResponseUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: UserQuizResponseCreateOrConnectWithoutAnswerInput | UserQuizResponseCreateOrConnectWithoutAnswerInput[]
    upsert?: UserQuizResponseUpsertWithWhereUniqueWithoutAnswerInput | UserQuizResponseUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: UserQuizResponseCreateManyAnswerInputEnvelope
    set?: UserQuizResponseWhereUniqueInput | UserQuizResponseWhereUniqueInput[]
    disconnect?: UserQuizResponseWhereUniqueInput | UserQuizResponseWhereUniqueInput[]
    delete?: UserQuizResponseWhereUniqueInput | UserQuizResponseWhereUniqueInput[]
    connect?: UserQuizResponseWhereUniqueInput | UserQuizResponseWhereUniqueInput[]
    update?: UserQuizResponseUpdateWithWhereUniqueWithoutAnswerInput | UserQuizResponseUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: UserQuizResponseUpdateManyWithWhereWithoutAnswerInput | UserQuizResponseUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: UserQuizResponseScalarWhereInput | UserQuizResponseScalarWhereInput[]
  }

  export type UserQuizResponseUncheckedUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<UserQuizResponseCreateWithoutAnswerInput, UserQuizResponseUncheckedCreateWithoutAnswerInput> | UserQuizResponseCreateWithoutAnswerInput[] | UserQuizResponseUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: UserQuizResponseCreateOrConnectWithoutAnswerInput | UserQuizResponseCreateOrConnectWithoutAnswerInput[]
    upsert?: UserQuizResponseUpsertWithWhereUniqueWithoutAnswerInput | UserQuizResponseUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: UserQuizResponseCreateManyAnswerInputEnvelope
    set?: UserQuizResponseWhereUniqueInput | UserQuizResponseWhereUniqueInput[]
    disconnect?: UserQuizResponseWhereUniqueInput | UserQuizResponseWhereUniqueInput[]
    delete?: UserQuizResponseWhereUniqueInput | UserQuizResponseWhereUniqueInput[]
    connect?: UserQuizResponseWhereUniqueInput | UserQuizResponseWhereUniqueInput[]
    update?: UserQuizResponseUpdateWithWhereUniqueWithoutAnswerInput | UserQuizResponseUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: UserQuizResponseUpdateManyWithWhereWithoutAnswerInput | UserQuizResponseUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: UserQuizResponseScalarWhereInput | UserQuizResponseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutQuizAttemptsInput = {
    create?: XOR<UserCreateWithoutQuizAttemptsInput, UserUncheckedCreateWithoutQuizAttemptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuizAttemptsInput
    connect?: UserWhereUniqueInput
  }

  export type UserQuizResponseCreateNestedManyWithoutAttemptInput = {
    create?: XOR<UserQuizResponseCreateWithoutAttemptInput, UserQuizResponseUncheckedCreateWithoutAttemptInput> | UserQuizResponseCreateWithoutAttemptInput[] | UserQuizResponseUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: UserQuizResponseCreateOrConnectWithoutAttemptInput | UserQuizResponseCreateOrConnectWithoutAttemptInput[]
    createMany?: UserQuizResponseCreateManyAttemptInputEnvelope
    connect?: UserQuizResponseWhereUniqueInput | UserQuizResponseWhereUniqueInput[]
  }

  export type UserQuizResponseUncheckedCreateNestedManyWithoutAttemptInput = {
    create?: XOR<UserQuizResponseCreateWithoutAttemptInput, UserQuizResponseUncheckedCreateWithoutAttemptInput> | UserQuizResponseCreateWithoutAttemptInput[] | UserQuizResponseUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: UserQuizResponseCreateOrConnectWithoutAttemptInput | UserQuizResponseCreateOrConnectWithoutAttemptInput[]
    createMany?: UserQuizResponseCreateManyAttemptInputEnvelope
    connect?: UserQuizResponseWhereUniqueInput | UserQuizResponseWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutQuizAttemptsNestedInput = {
    create?: XOR<UserCreateWithoutQuizAttemptsInput, UserUncheckedCreateWithoutQuizAttemptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuizAttemptsInput
    upsert?: UserUpsertWithoutQuizAttemptsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuizAttemptsInput, UserUpdateWithoutQuizAttemptsInput>, UserUncheckedUpdateWithoutQuizAttemptsInput>
  }

  export type UserQuizResponseUpdateManyWithoutAttemptNestedInput = {
    create?: XOR<UserQuizResponseCreateWithoutAttemptInput, UserQuizResponseUncheckedCreateWithoutAttemptInput> | UserQuizResponseCreateWithoutAttemptInput[] | UserQuizResponseUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: UserQuizResponseCreateOrConnectWithoutAttemptInput | UserQuizResponseCreateOrConnectWithoutAttemptInput[]
    upsert?: UserQuizResponseUpsertWithWhereUniqueWithoutAttemptInput | UserQuizResponseUpsertWithWhereUniqueWithoutAttemptInput[]
    createMany?: UserQuizResponseCreateManyAttemptInputEnvelope
    set?: UserQuizResponseWhereUniqueInput | UserQuizResponseWhereUniqueInput[]
    disconnect?: UserQuizResponseWhereUniqueInput | UserQuizResponseWhereUniqueInput[]
    delete?: UserQuizResponseWhereUniqueInput | UserQuizResponseWhereUniqueInput[]
    connect?: UserQuizResponseWhereUniqueInput | UserQuizResponseWhereUniqueInput[]
    update?: UserQuizResponseUpdateWithWhereUniqueWithoutAttemptInput | UserQuizResponseUpdateWithWhereUniqueWithoutAttemptInput[]
    updateMany?: UserQuizResponseUpdateManyWithWhereWithoutAttemptInput | UserQuizResponseUpdateManyWithWhereWithoutAttemptInput[]
    deleteMany?: UserQuizResponseScalarWhereInput | UserQuizResponseScalarWhereInput[]
  }

  export type UserQuizResponseUncheckedUpdateManyWithoutAttemptNestedInput = {
    create?: XOR<UserQuizResponseCreateWithoutAttemptInput, UserQuizResponseUncheckedCreateWithoutAttemptInput> | UserQuizResponseCreateWithoutAttemptInput[] | UserQuizResponseUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: UserQuizResponseCreateOrConnectWithoutAttemptInput | UserQuizResponseCreateOrConnectWithoutAttemptInput[]
    upsert?: UserQuizResponseUpsertWithWhereUniqueWithoutAttemptInput | UserQuizResponseUpsertWithWhereUniqueWithoutAttemptInput[]
    createMany?: UserQuizResponseCreateManyAttemptInputEnvelope
    set?: UserQuizResponseWhereUniqueInput | UserQuizResponseWhereUniqueInput[]
    disconnect?: UserQuizResponseWhereUniqueInput | UserQuizResponseWhereUniqueInput[]
    delete?: UserQuizResponseWhereUniqueInput | UserQuizResponseWhereUniqueInput[]
    connect?: UserQuizResponseWhereUniqueInput | UserQuizResponseWhereUniqueInput[]
    update?: UserQuizResponseUpdateWithWhereUniqueWithoutAttemptInput | UserQuizResponseUpdateWithWhereUniqueWithoutAttemptInput[]
    updateMany?: UserQuizResponseUpdateManyWithWhereWithoutAttemptInput | UserQuizResponseUpdateManyWithWhereWithoutAttemptInput[]
    deleteMany?: UserQuizResponseScalarWhereInput | UserQuizResponseScalarWhereInput[]
  }

  export type UserQuizAttemptCreateNestedOneWithoutResponsesInput = {
    create?: XOR<UserQuizAttemptCreateWithoutResponsesInput, UserQuizAttemptUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: UserQuizAttemptCreateOrConnectWithoutResponsesInput
    connect?: UserQuizAttemptWhereUniqueInput
  }

  export type AnswerCreateNestedOneWithoutUserQuizResponsesInput = {
    create?: XOR<AnswerCreateWithoutUserQuizResponsesInput, AnswerUncheckedCreateWithoutUserQuizResponsesInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutUserQuizResponsesInput
    connect?: AnswerWhereUniqueInput
  }

  export type UserQuizAttemptUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<UserQuizAttemptCreateWithoutResponsesInput, UserQuizAttemptUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: UserQuizAttemptCreateOrConnectWithoutResponsesInput
    upsert?: UserQuizAttemptUpsertWithoutResponsesInput
    connect?: UserQuizAttemptWhereUniqueInput
    update?: XOR<XOR<UserQuizAttemptUpdateToOneWithWhereWithoutResponsesInput, UserQuizAttemptUpdateWithoutResponsesInput>, UserQuizAttemptUncheckedUpdateWithoutResponsesInput>
  }

  export type AnswerUpdateOneRequiredWithoutUserQuizResponsesNestedInput = {
    create?: XOR<AnswerCreateWithoutUserQuizResponsesInput, AnswerUncheckedCreateWithoutUserQuizResponsesInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutUserQuizResponsesInput
    upsert?: AnswerUpsertWithoutUserQuizResponsesInput
    connect?: AnswerWhereUniqueInput
    update?: XOR<XOR<AnswerUpdateToOneWithWhereWithoutUserQuizResponsesInput, AnswerUpdateWithoutUserQuizResponsesInput>, AnswerUncheckedUpdateWithoutUserQuizResponsesInput>
  }

  export type UserCreateNestedOneWithoutCertificatesInput = {
    create?: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCertificatesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCertificatesNestedInput = {
    create?: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCertificatesInput
    upsert?: UserUpsertWithoutCertificatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCertificatesInput, UserUpdateWithoutCertificatesInput>, UserUncheckedUpdateWithoutCertificatesInput>
  }

  export type UserCreateNestedOneWithoutModuleFeedbackInput = {
    create?: XOR<UserCreateWithoutModuleFeedbackInput, UserUncheckedCreateWithoutModuleFeedbackInput>
    connectOrCreate?: UserCreateOrConnectWithoutModuleFeedbackInput
    connect?: UserWhereUniqueInput
  }

  export type ModuleCreateNestedOneWithoutModuleFeedbackInput = {
    create?: XOR<ModuleCreateWithoutModuleFeedbackInput, ModuleUncheckedCreateWithoutModuleFeedbackInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutModuleFeedbackInput
    connect?: ModuleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutModuleFeedbackNestedInput = {
    create?: XOR<UserCreateWithoutModuleFeedbackInput, UserUncheckedCreateWithoutModuleFeedbackInput>
    connectOrCreate?: UserCreateOrConnectWithoutModuleFeedbackInput
    upsert?: UserUpsertWithoutModuleFeedbackInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutModuleFeedbackInput, UserUpdateWithoutModuleFeedbackInput>, UserUncheckedUpdateWithoutModuleFeedbackInput>
  }

  export type ModuleUpdateOneRequiredWithoutModuleFeedbackNestedInput = {
    create?: XOR<ModuleCreateWithoutModuleFeedbackInput, ModuleUncheckedCreateWithoutModuleFeedbackInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutModuleFeedbackInput
    upsert?: ModuleUpsertWithoutModuleFeedbackInput
    connect?: ModuleWhereUniqueInput
    update?: XOR<XOR<ModuleUpdateToOneWithWhereWithoutModuleFeedbackInput, ModuleUpdateWithoutModuleFeedbackInput>, ModuleUncheckedUpdateWithoutModuleFeedbackInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumModuleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ModuleStatus | EnumModuleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ModuleStatus[] | ListEnumModuleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModuleStatus[] | ListEnumModuleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumModuleStatusFilter<$PrismaModel> | $Enums.ModuleStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumModuleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModuleStatus | EnumModuleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ModuleStatus[] | ListEnumModuleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModuleStatus[] | ListEnumModuleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumModuleStatusWithAggregatesFilter<$PrismaModel> | $Enums.ModuleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModuleStatusFilter<$PrismaModel>
    _max?: NestedEnumModuleStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type UserModuleProgressCreateWithoutUserInput = {
    id?: string
    status?: $Enums.ModuleStatus
    isUnlocked?: boolean
    quizPassed?: boolean
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    module: ModuleCreateNestedOneWithoutUserProgressInput
  }

  export type UserModuleProgressUncheckedCreateWithoutUserInput = {
    id?: string
    moduleId: string
    status?: $Enums.ModuleStatus
    isUnlocked?: boolean
    quizPassed?: boolean
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserModuleProgressCreateOrConnectWithoutUserInput = {
    where: UserModuleProgressWhereUniqueInput
    create: XOR<UserModuleProgressCreateWithoutUserInput, UserModuleProgressUncheckedCreateWithoutUserInput>
  }

  export type UserModuleProgressCreateManyUserInputEnvelope = {
    data: UserModuleProgressCreateManyUserInput | UserModuleProgressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserQuizAttemptCreateWithoutUserInput = {
    id?: string
    moduleId: string
    score: number
    passed: boolean
    attemptedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: UserQuizResponseCreateNestedManyWithoutAttemptInput
  }

  export type UserQuizAttemptUncheckedCreateWithoutUserInput = {
    id?: string
    moduleId: string
    score: number
    passed: boolean
    attemptedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: UserQuizResponseUncheckedCreateNestedManyWithoutAttemptInput
  }

  export type UserQuizAttemptCreateOrConnectWithoutUserInput = {
    where: UserQuizAttemptWhereUniqueInput
    create: XOR<UserQuizAttemptCreateWithoutUserInput, UserQuizAttemptUncheckedCreateWithoutUserInput>
  }

  export type UserQuizAttemptCreateManyUserInputEnvelope = {
    data: UserQuizAttemptCreateManyUserInput | UserQuizAttemptCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CertificateCreateWithoutUserInput = {
    id?: string
    certificateNumber: string
    issuedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificateUncheckedCreateWithoutUserInput = {
    id?: string
    certificateNumber: string
    issuedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificateCreateOrConnectWithoutUserInput = {
    where: CertificateWhereUniqueInput
    create: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput>
  }

  export type CertificateCreateManyUserInputEnvelope = {
    data: CertificateCreateManyUserInput | CertificateCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ModuleFeedbackCreateWithoutUserInput = {
    id?: string
    helpful: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    module: ModuleCreateNestedOneWithoutModuleFeedbackInput
  }

  export type ModuleFeedbackUncheckedCreateWithoutUserInput = {
    id?: string
    moduleId: string
    helpful: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModuleFeedbackCreateOrConnectWithoutUserInput = {
    where: ModuleFeedbackWhereUniqueInput
    create: XOR<ModuleFeedbackCreateWithoutUserInput, ModuleFeedbackUncheckedCreateWithoutUserInput>
  }

  export type ModuleFeedbackCreateManyUserInputEnvelope = {
    data: ModuleFeedbackCreateManyUserInput | ModuleFeedbackCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserModuleProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: UserModuleProgressWhereUniqueInput
    update: XOR<UserModuleProgressUpdateWithoutUserInput, UserModuleProgressUncheckedUpdateWithoutUserInput>
    create: XOR<UserModuleProgressCreateWithoutUserInput, UserModuleProgressUncheckedCreateWithoutUserInput>
  }

  export type UserModuleProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: UserModuleProgressWhereUniqueInput
    data: XOR<UserModuleProgressUpdateWithoutUserInput, UserModuleProgressUncheckedUpdateWithoutUserInput>
  }

  export type UserModuleProgressUpdateManyWithWhereWithoutUserInput = {
    where: UserModuleProgressScalarWhereInput
    data: XOR<UserModuleProgressUpdateManyMutationInput, UserModuleProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type UserModuleProgressScalarWhereInput = {
    AND?: UserModuleProgressScalarWhereInput | UserModuleProgressScalarWhereInput[]
    OR?: UserModuleProgressScalarWhereInput[]
    NOT?: UserModuleProgressScalarWhereInput | UserModuleProgressScalarWhereInput[]
    id?: StringFilter<"UserModuleProgress"> | string
    userId?: StringFilter<"UserModuleProgress"> | string
    moduleId?: StringFilter<"UserModuleProgress"> | string
    status?: EnumModuleStatusFilter<"UserModuleProgress"> | $Enums.ModuleStatus
    isUnlocked?: BoolFilter<"UserModuleProgress"> | boolean
    quizPassed?: BoolFilter<"UserModuleProgress"> | boolean
    startedAt?: DateTimeNullableFilter<"UserModuleProgress"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"UserModuleProgress"> | Date | string | null
    createdAt?: DateTimeFilter<"UserModuleProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserModuleProgress"> | Date | string
  }

  export type UserQuizAttemptUpsertWithWhereUniqueWithoutUserInput = {
    where: UserQuizAttemptWhereUniqueInput
    update: XOR<UserQuizAttemptUpdateWithoutUserInput, UserQuizAttemptUncheckedUpdateWithoutUserInput>
    create: XOR<UserQuizAttemptCreateWithoutUserInput, UserQuizAttemptUncheckedCreateWithoutUserInput>
  }

  export type UserQuizAttemptUpdateWithWhereUniqueWithoutUserInput = {
    where: UserQuizAttemptWhereUniqueInput
    data: XOR<UserQuizAttemptUpdateWithoutUserInput, UserQuizAttemptUncheckedUpdateWithoutUserInput>
  }

  export type UserQuizAttemptUpdateManyWithWhereWithoutUserInput = {
    where: UserQuizAttemptScalarWhereInput
    data: XOR<UserQuizAttemptUpdateManyMutationInput, UserQuizAttemptUncheckedUpdateManyWithoutUserInput>
  }

  export type UserQuizAttemptScalarWhereInput = {
    AND?: UserQuizAttemptScalarWhereInput | UserQuizAttemptScalarWhereInput[]
    OR?: UserQuizAttemptScalarWhereInput[]
    NOT?: UserQuizAttemptScalarWhereInput | UserQuizAttemptScalarWhereInput[]
    id?: StringFilter<"UserQuizAttempt"> | string
    userId?: StringFilter<"UserQuizAttempt"> | string
    moduleId?: StringFilter<"UserQuizAttempt"> | string
    score?: IntFilter<"UserQuizAttempt"> | number
    passed?: BoolFilter<"UserQuizAttempt"> | boolean
    attemptedAt?: DateTimeFilter<"UserQuizAttempt"> | Date | string
    createdAt?: DateTimeFilter<"UserQuizAttempt"> | Date | string
    updatedAt?: DateTimeFilter<"UserQuizAttempt"> | Date | string
  }

  export type CertificateUpsertWithWhereUniqueWithoutUserInput = {
    where: CertificateWhereUniqueInput
    update: XOR<CertificateUpdateWithoutUserInput, CertificateUncheckedUpdateWithoutUserInput>
    create: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput>
  }

  export type CertificateUpdateWithWhereUniqueWithoutUserInput = {
    where: CertificateWhereUniqueInput
    data: XOR<CertificateUpdateWithoutUserInput, CertificateUncheckedUpdateWithoutUserInput>
  }

  export type CertificateUpdateManyWithWhereWithoutUserInput = {
    where: CertificateScalarWhereInput
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyWithoutUserInput>
  }

  export type CertificateScalarWhereInput = {
    AND?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
    OR?: CertificateScalarWhereInput[]
    NOT?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
    id?: StringFilter<"Certificate"> | string
    userId?: StringFilter<"Certificate"> | string
    certificateNumber?: StringFilter<"Certificate"> | string
    issuedAt?: DateTimeFilter<"Certificate"> | Date | string
    createdAt?: DateTimeFilter<"Certificate"> | Date | string
    updatedAt?: DateTimeFilter<"Certificate"> | Date | string
  }

  export type ModuleFeedbackUpsertWithWhereUniqueWithoutUserInput = {
    where: ModuleFeedbackWhereUniqueInput
    update: XOR<ModuleFeedbackUpdateWithoutUserInput, ModuleFeedbackUncheckedUpdateWithoutUserInput>
    create: XOR<ModuleFeedbackCreateWithoutUserInput, ModuleFeedbackUncheckedCreateWithoutUserInput>
  }

  export type ModuleFeedbackUpdateWithWhereUniqueWithoutUserInput = {
    where: ModuleFeedbackWhereUniqueInput
    data: XOR<ModuleFeedbackUpdateWithoutUserInput, ModuleFeedbackUncheckedUpdateWithoutUserInput>
  }

  export type ModuleFeedbackUpdateManyWithWhereWithoutUserInput = {
    where: ModuleFeedbackScalarWhereInput
    data: XOR<ModuleFeedbackUpdateManyMutationInput, ModuleFeedbackUncheckedUpdateManyWithoutUserInput>
  }

  export type ModuleFeedbackScalarWhereInput = {
    AND?: ModuleFeedbackScalarWhereInput | ModuleFeedbackScalarWhereInput[]
    OR?: ModuleFeedbackScalarWhereInput[]
    NOT?: ModuleFeedbackScalarWhereInput | ModuleFeedbackScalarWhereInput[]
    id?: StringFilter<"ModuleFeedback"> | string
    userId?: StringFilter<"ModuleFeedback"> | string
    moduleId?: StringFilter<"ModuleFeedback"> | string
    helpful?: BoolFilter<"ModuleFeedback"> | boolean
    createdAt?: DateTimeFilter<"ModuleFeedback"> | Date | string
    updatedAt?: DateTimeFilter<"ModuleFeedback"> | Date | string
  }

  export type UserModuleProgressCreateWithoutModuleInput = {
    id?: string
    status?: $Enums.ModuleStatus
    isUnlocked?: boolean
    quizPassed?: boolean
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutModuleProgressInput
  }

  export type UserModuleProgressUncheckedCreateWithoutModuleInput = {
    id?: string
    userId: string
    status?: $Enums.ModuleStatus
    isUnlocked?: boolean
    quizPassed?: boolean
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserModuleProgressCreateOrConnectWithoutModuleInput = {
    where: UserModuleProgressWhereUniqueInput
    create: XOR<UserModuleProgressCreateWithoutModuleInput, UserModuleProgressUncheckedCreateWithoutModuleInput>
  }

  export type UserModuleProgressCreateManyModuleInputEnvelope = {
    data: UserModuleProgressCreateManyModuleInput | UserModuleProgressCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type QuestionCreateWithoutModuleInput = {
    id?: string
    questionText: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutModuleInput = {
    id?: string
    questionText: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutModuleInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutModuleInput, QuestionUncheckedCreateWithoutModuleInput>
  }

  export type QuestionCreateManyModuleInputEnvelope = {
    data: QuestionCreateManyModuleInput | QuestionCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type ModuleFeedbackCreateWithoutModuleInput = {
    id?: string
    helpful: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutModuleFeedbackInput
  }

  export type ModuleFeedbackUncheckedCreateWithoutModuleInput = {
    id?: string
    userId: string
    helpful: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModuleFeedbackCreateOrConnectWithoutModuleInput = {
    where: ModuleFeedbackWhereUniqueInput
    create: XOR<ModuleFeedbackCreateWithoutModuleInput, ModuleFeedbackUncheckedCreateWithoutModuleInput>
  }

  export type ModuleFeedbackCreateManyModuleInputEnvelope = {
    data: ModuleFeedbackCreateManyModuleInput | ModuleFeedbackCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type UserModuleProgressUpsertWithWhereUniqueWithoutModuleInput = {
    where: UserModuleProgressWhereUniqueInput
    update: XOR<UserModuleProgressUpdateWithoutModuleInput, UserModuleProgressUncheckedUpdateWithoutModuleInput>
    create: XOR<UserModuleProgressCreateWithoutModuleInput, UserModuleProgressUncheckedCreateWithoutModuleInput>
  }

  export type UserModuleProgressUpdateWithWhereUniqueWithoutModuleInput = {
    where: UserModuleProgressWhereUniqueInput
    data: XOR<UserModuleProgressUpdateWithoutModuleInput, UserModuleProgressUncheckedUpdateWithoutModuleInput>
  }

  export type UserModuleProgressUpdateManyWithWhereWithoutModuleInput = {
    where: UserModuleProgressScalarWhereInput
    data: XOR<UserModuleProgressUpdateManyMutationInput, UserModuleProgressUncheckedUpdateManyWithoutModuleInput>
  }

  export type QuestionUpsertWithWhereUniqueWithoutModuleInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutModuleInput, QuestionUncheckedUpdateWithoutModuleInput>
    create: XOR<QuestionCreateWithoutModuleInput, QuestionUncheckedCreateWithoutModuleInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutModuleInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutModuleInput, QuestionUncheckedUpdateWithoutModuleInput>
  }

  export type QuestionUpdateManyWithWhereWithoutModuleInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutModuleInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    moduleId?: StringFilter<"Question"> | string
    questionText?: StringFilter<"Question"> | string
    order?: IntFilter<"Question"> | number
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
  }

  export type ModuleFeedbackUpsertWithWhereUniqueWithoutModuleInput = {
    where: ModuleFeedbackWhereUniqueInput
    update: XOR<ModuleFeedbackUpdateWithoutModuleInput, ModuleFeedbackUncheckedUpdateWithoutModuleInput>
    create: XOR<ModuleFeedbackCreateWithoutModuleInput, ModuleFeedbackUncheckedCreateWithoutModuleInput>
  }

  export type ModuleFeedbackUpdateWithWhereUniqueWithoutModuleInput = {
    where: ModuleFeedbackWhereUniqueInput
    data: XOR<ModuleFeedbackUpdateWithoutModuleInput, ModuleFeedbackUncheckedUpdateWithoutModuleInput>
  }

  export type ModuleFeedbackUpdateManyWithWhereWithoutModuleInput = {
    where: ModuleFeedbackScalarWhereInput
    data: XOR<ModuleFeedbackUpdateManyMutationInput, ModuleFeedbackUncheckedUpdateManyWithoutModuleInput>
  }

  export type UserCreateWithoutModuleProgressInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quizAttempts?: UserQuizAttemptCreateNestedManyWithoutUserInput
    certificates?: CertificateCreateNestedManyWithoutUserInput
    moduleFeedback?: ModuleFeedbackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutModuleProgressInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quizAttempts?: UserQuizAttemptUncheckedCreateNestedManyWithoutUserInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput
    moduleFeedback?: ModuleFeedbackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutModuleProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutModuleProgressInput, UserUncheckedCreateWithoutModuleProgressInput>
  }

  export type ModuleCreateWithoutUserProgressInput = {
    id?: string
    title: string
    videoUrl: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutModuleInput
    moduleFeedback?: ModuleFeedbackCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutUserProgressInput = {
    id?: string
    title: string
    videoUrl: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutModuleInput
    moduleFeedback?: ModuleFeedbackUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutUserProgressInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutUserProgressInput, ModuleUncheckedCreateWithoutUserProgressInput>
  }

  export type UserUpsertWithoutModuleProgressInput = {
    update: XOR<UserUpdateWithoutModuleProgressInput, UserUncheckedUpdateWithoutModuleProgressInput>
    create: XOR<UserCreateWithoutModuleProgressInput, UserUncheckedCreateWithoutModuleProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutModuleProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutModuleProgressInput, UserUncheckedUpdateWithoutModuleProgressInput>
  }

  export type UserUpdateWithoutModuleProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizAttempts?: UserQuizAttemptUpdateManyWithoutUserNestedInput
    certificates?: CertificateUpdateManyWithoutUserNestedInput
    moduleFeedback?: ModuleFeedbackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutModuleProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizAttempts?: UserQuizAttemptUncheckedUpdateManyWithoutUserNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput
    moduleFeedback?: ModuleFeedbackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ModuleUpsertWithoutUserProgressInput = {
    update: XOR<ModuleUpdateWithoutUserProgressInput, ModuleUncheckedUpdateWithoutUserProgressInput>
    create: XOR<ModuleCreateWithoutUserProgressInput, ModuleUncheckedCreateWithoutUserProgressInput>
    where?: ModuleWhereInput
  }

  export type ModuleUpdateToOneWithWhereWithoutUserProgressInput = {
    where?: ModuleWhereInput
    data: XOR<ModuleUpdateWithoutUserProgressInput, ModuleUncheckedUpdateWithoutUserProgressInput>
  }

  export type ModuleUpdateWithoutUserProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutModuleNestedInput
    moduleFeedback?: ModuleFeedbackUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutUserProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutModuleNestedInput
    moduleFeedback?: ModuleFeedbackUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleCreateWithoutQuestionsInput = {
    id?: string
    title: string
    videoUrl: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userProgress?: UserModuleProgressCreateNestedManyWithoutModuleInput
    moduleFeedback?: ModuleFeedbackCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutQuestionsInput = {
    id?: string
    title: string
    videoUrl: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userProgress?: UserModuleProgressUncheckedCreateNestedManyWithoutModuleInput
    moduleFeedback?: ModuleFeedbackUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutQuestionsInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutQuestionsInput, ModuleUncheckedCreateWithoutQuestionsInput>
  }

  export type AnswerCreateWithoutQuestionInput = {
    id?: string
    answerText: string
    isCorrect: boolean
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userQuizResponses?: UserQuizResponseCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutQuestionInput = {
    id?: string
    answerText: string
    isCorrect: boolean
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userQuizResponses?: UserQuizResponseUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerCreateOrConnectWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerCreateManyQuestionInputEnvelope = {
    data: AnswerCreateManyQuestionInput | AnswerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type ModuleUpsertWithoutQuestionsInput = {
    update: XOR<ModuleUpdateWithoutQuestionsInput, ModuleUncheckedUpdateWithoutQuestionsInput>
    create: XOR<ModuleCreateWithoutQuestionsInput, ModuleUncheckedCreateWithoutQuestionsInput>
    where?: ModuleWhereInput
  }

  export type ModuleUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: ModuleWhereInput
    data: XOR<ModuleUpdateWithoutQuestionsInput, ModuleUncheckedUpdateWithoutQuestionsInput>
  }

  export type ModuleUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProgress?: UserModuleProgressUpdateManyWithoutModuleNestedInput
    moduleFeedback?: ModuleFeedbackUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProgress?: UserModuleProgressUncheckedUpdateManyWithoutModuleNestedInput
    moduleFeedback?: ModuleFeedbackUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type AnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type AnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type AnswerScalarWhereInput = {
    AND?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    OR?: AnswerScalarWhereInput[]
    NOT?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    id?: StringFilter<"Answer"> | string
    questionId?: StringFilter<"Answer"> | string
    answerText?: StringFilter<"Answer"> | string
    isCorrect?: BoolFilter<"Answer"> | boolean
    order?: IntFilter<"Answer"> | number
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
  }

  export type QuestionCreateWithoutAnswersInput = {
    id?: string
    questionText: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    module: ModuleCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateWithoutAnswersInput = {
    id?: string
    moduleId: string
    questionText: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionCreateOrConnectWithoutAnswersInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
  }

  export type UserQuizResponseCreateWithoutAnswerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attempt: UserQuizAttemptCreateNestedOneWithoutResponsesInput
  }

  export type UserQuizResponseUncheckedCreateWithoutAnswerInput = {
    id?: string
    attemptId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserQuizResponseCreateOrConnectWithoutAnswerInput = {
    where: UserQuizResponseWhereUniqueInput
    create: XOR<UserQuizResponseCreateWithoutAnswerInput, UserQuizResponseUncheckedCreateWithoutAnswerInput>
  }

  export type UserQuizResponseCreateManyAnswerInputEnvelope = {
    data: UserQuizResponseCreateManyAnswerInput | UserQuizResponseCreateManyAnswerInput[]
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithoutAnswersInput = {
    update: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: ModuleUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuizResponseUpsertWithWhereUniqueWithoutAnswerInput = {
    where: UserQuizResponseWhereUniqueInput
    update: XOR<UserQuizResponseUpdateWithoutAnswerInput, UserQuizResponseUncheckedUpdateWithoutAnswerInput>
    create: XOR<UserQuizResponseCreateWithoutAnswerInput, UserQuizResponseUncheckedCreateWithoutAnswerInput>
  }

  export type UserQuizResponseUpdateWithWhereUniqueWithoutAnswerInput = {
    where: UserQuizResponseWhereUniqueInput
    data: XOR<UserQuizResponseUpdateWithoutAnswerInput, UserQuizResponseUncheckedUpdateWithoutAnswerInput>
  }

  export type UserQuizResponseUpdateManyWithWhereWithoutAnswerInput = {
    where: UserQuizResponseScalarWhereInput
    data: XOR<UserQuizResponseUpdateManyMutationInput, UserQuizResponseUncheckedUpdateManyWithoutAnswerInput>
  }

  export type UserQuizResponseScalarWhereInput = {
    AND?: UserQuizResponseScalarWhereInput | UserQuizResponseScalarWhereInput[]
    OR?: UserQuizResponseScalarWhereInput[]
    NOT?: UserQuizResponseScalarWhereInput | UserQuizResponseScalarWhereInput[]
    id?: StringFilter<"UserQuizResponse"> | string
    attemptId?: StringFilter<"UserQuizResponse"> | string
    answerId?: StringFilter<"UserQuizResponse"> | string
    createdAt?: DateTimeFilter<"UserQuizResponse"> | Date | string
    updatedAt?: DateTimeFilter<"UserQuizResponse"> | Date | string
  }

  export type UserCreateWithoutQuizAttemptsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    moduleProgress?: UserModuleProgressCreateNestedManyWithoutUserInput
    certificates?: CertificateCreateNestedManyWithoutUserInput
    moduleFeedback?: ModuleFeedbackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQuizAttemptsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    moduleProgress?: UserModuleProgressUncheckedCreateNestedManyWithoutUserInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput
    moduleFeedback?: ModuleFeedbackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQuizAttemptsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuizAttemptsInput, UserUncheckedCreateWithoutQuizAttemptsInput>
  }

  export type UserQuizResponseCreateWithoutAttemptInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    answer: AnswerCreateNestedOneWithoutUserQuizResponsesInput
  }

  export type UserQuizResponseUncheckedCreateWithoutAttemptInput = {
    id?: string
    answerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserQuizResponseCreateOrConnectWithoutAttemptInput = {
    where: UserQuizResponseWhereUniqueInput
    create: XOR<UserQuizResponseCreateWithoutAttemptInput, UserQuizResponseUncheckedCreateWithoutAttemptInput>
  }

  export type UserQuizResponseCreateManyAttemptInputEnvelope = {
    data: UserQuizResponseCreateManyAttemptInput | UserQuizResponseCreateManyAttemptInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutQuizAttemptsInput = {
    update: XOR<UserUpdateWithoutQuizAttemptsInput, UserUncheckedUpdateWithoutQuizAttemptsInput>
    create: XOR<UserCreateWithoutQuizAttemptsInput, UserUncheckedCreateWithoutQuizAttemptsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuizAttemptsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuizAttemptsInput, UserUncheckedUpdateWithoutQuizAttemptsInput>
  }

  export type UserUpdateWithoutQuizAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moduleProgress?: UserModuleProgressUpdateManyWithoutUserNestedInput
    certificates?: CertificateUpdateManyWithoutUserNestedInput
    moduleFeedback?: ModuleFeedbackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQuizAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moduleProgress?: UserModuleProgressUncheckedUpdateManyWithoutUserNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput
    moduleFeedback?: ModuleFeedbackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserQuizResponseUpsertWithWhereUniqueWithoutAttemptInput = {
    where: UserQuizResponseWhereUniqueInput
    update: XOR<UserQuizResponseUpdateWithoutAttemptInput, UserQuizResponseUncheckedUpdateWithoutAttemptInput>
    create: XOR<UserQuizResponseCreateWithoutAttemptInput, UserQuizResponseUncheckedCreateWithoutAttemptInput>
  }

  export type UserQuizResponseUpdateWithWhereUniqueWithoutAttemptInput = {
    where: UserQuizResponseWhereUniqueInput
    data: XOR<UserQuizResponseUpdateWithoutAttemptInput, UserQuizResponseUncheckedUpdateWithoutAttemptInput>
  }

  export type UserQuizResponseUpdateManyWithWhereWithoutAttemptInput = {
    where: UserQuizResponseScalarWhereInput
    data: XOR<UserQuizResponseUpdateManyMutationInput, UserQuizResponseUncheckedUpdateManyWithoutAttemptInput>
  }

  export type UserQuizAttemptCreateWithoutResponsesInput = {
    id?: string
    moduleId: string
    score: number
    passed: boolean
    attemptedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutQuizAttemptsInput
  }

  export type UserQuizAttemptUncheckedCreateWithoutResponsesInput = {
    id?: string
    userId: string
    moduleId: string
    score: number
    passed: boolean
    attemptedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserQuizAttemptCreateOrConnectWithoutResponsesInput = {
    where: UserQuizAttemptWhereUniqueInput
    create: XOR<UserQuizAttemptCreateWithoutResponsesInput, UserQuizAttemptUncheckedCreateWithoutResponsesInput>
  }

  export type AnswerCreateWithoutUserQuizResponsesInput = {
    id?: string
    answerText: string
    isCorrect: boolean
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    question: QuestionCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateWithoutUserQuizResponsesInput = {
    id?: string
    questionId: string
    answerText: string
    isCorrect: boolean
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerCreateOrConnectWithoutUserQuizResponsesInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutUserQuizResponsesInput, AnswerUncheckedCreateWithoutUserQuizResponsesInput>
  }

  export type UserQuizAttemptUpsertWithoutResponsesInput = {
    update: XOR<UserQuizAttemptUpdateWithoutResponsesInput, UserQuizAttemptUncheckedUpdateWithoutResponsesInput>
    create: XOR<UserQuizAttemptCreateWithoutResponsesInput, UserQuizAttemptUncheckedCreateWithoutResponsesInput>
    where?: UserQuizAttemptWhereInput
  }

  export type UserQuizAttemptUpdateToOneWithWhereWithoutResponsesInput = {
    where?: UserQuizAttemptWhereInput
    data: XOR<UserQuizAttemptUpdateWithoutResponsesInput, UserQuizAttemptUncheckedUpdateWithoutResponsesInput>
  }

  export type UserQuizAttemptUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutQuizAttemptsNestedInput
  }

  export type UserQuizAttemptUncheckedUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUpsertWithoutUserQuizResponsesInput = {
    update: XOR<AnswerUpdateWithoutUserQuizResponsesInput, AnswerUncheckedUpdateWithoutUserQuizResponsesInput>
    create: XOR<AnswerCreateWithoutUserQuizResponsesInput, AnswerUncheckedCreateWithoutUserQuizResponsesInput>
    where?: AnswerWhereInput
  }

  export type AnswerUpdateToOneWithWhereWithoutUserQuizResponsesInput = {
    where?: AnswerWhereInput
    data: XOR<AnswerUpdateWithoutUserQuizResponsesInput, AnswerUncheckedUpdateWithoutUserQuizResponsesInput>
  }

  export type AnswerUpdateWithoutUserQuizResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerText?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateWithoutUserQuizResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    answerText?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutCertificatesInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    moduleProgress?: UserModuleProgressCreateNestedManyWithoutUserInput
    quizAttempts?: UserQuizAttemptCreateNestedManyWithoutUserInput
    moduleFeedback?: ModuleFeedbackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCertificatesInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    moduleProgress?: UserModuleProgressUncheckedCreateNestedManyWithoutUserInput
    quizAttempts?: UserQuizAttemptUncheckedCreateNestedManyWithoutUserInput
    moduleFeedback?: ModuleFeedbackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCertificatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
  }

  export type UserUpsertWithoutCertificatesInput = {
    update: XOR<UserUpdateWithoutCertificatesInput, UserUncheckedUpdateWithoutCertificatesInput>
    create: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCertificatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCertificatesInput, UserUncheckedUpdateWithoutCertificatesInput>
  }

  export type UserUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moduleProgress?: UserModuleProgressUpdateManyWithoutUserNestedInput
    quizAttempts?: UserQuizAttemptUpdateManyWithoutUserNestedInput
    moduleFeedback?: ModuleFeedbackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moduleProgress?: UserModuleProgressUncheckedUpdateManyWithoutUserNestedInput
    quizAttempts?: UserQuizAttemptUncheckedUpdateManyWithoutUserNestedInput
    moduleFeedback?: ModuleFeedbackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutModuleFeedbackInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    moduleProgress?: UserModuleProgressCreateNestedManyWithoutUserInput
    quizAttempts?: UserQuizAttemptCreateNestedManyWithoutUserInput
    certificates?: CertificateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutModuleFeedbackInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    moduleProgress?: UserModuleProgressUncheckedCreateNestedManyWithoutUserInput
    quizAttempts?: UserQuizAttemptUncheckedCreateNestedManyWithoutUserInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutModuleFeedbackInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutModuleFeedbackInput, UserUncheckedCreateWithoutModuleFeedbackInput>
  }

  export type ModuleCreateWithoutModuleFeedbackInput = {
    id?: string
    title: string
    videoUrl: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userProgress?: UserModuleProgressCreateNestedManyWithoutModuleInput
    questions?: QuestionCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutModuleFeedbackInput = {
    id?: string
    title: string
    videoUrl: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userProgress?: UserModuleProgressUncheckedCreateNestedManyWithoutModuleInput
    questions?: QuestionUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutModuleFeedbackInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutModuleFeedbackInput, ModuleUncheckedCreateWithoutModuleFeedbackInput>
  }

  export type UserUpsertWithoutModuleFeedbackInput = {
    update: XOR<UserUpdateWithoutModuleFeedbackInput, UserUncheckedUpdateWithoutModuleFeedbackInput>
    create: XOR<UserCreateWithoutModuleFeedbackInput, UserUncheckedCreateWithoutModuleFeedbackInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutModuleFeedbackInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutModuleFeedbackInput, UserUncheckedUpdateWithoutModuleFeedbackInput>
  }

  export type UserUpdateWithoutModuleFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moduleProgress?: UserModuleProgressUpdateManyWithoutUserNestedInput
    quizAttempts?: UserQuizAttemptUpdateManyWithoutUserNestedInput
    certificates?: CertificateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutModuleFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moduleProgress?: UserModuleProgressUncheckedUpdateManyWithoutUserNestedInput
    quizAttempts?: UserQuizAttemptUncheckedUpdateManyWithoutUserNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ModuleUpsertWithoutModuleFeedbackInput = {
    update: XOR<ModuleUpdateWithoutModuleFeedbackInput, ModuleUncheckedUpdateWithoutModuleFeedbackInput>
    create: XOR<ModuleCreateWithoutModuleFeedbackInput, ModuleUncheckedCreateWithoutModuleFeedbackInput>
    where?: ModuleWhereInput
  }

  export type ModuleUpdateToOneWithWhereWithoutModuleFeedbackInput = {
    where?: ModuleWhereInput
    data: XOR<ModuleUpdateWithoutModuleFeedbackInput, ModuleUncheckedUpdateWithoutModuleFeedbackInput>
  }

  export type ModuleUpdateWithoutModuleFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProgress?: UserModuleProgressUpdateManyWithoutModuleNestedInput
    questions?: QuestionUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutModuleFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProgress?: UserModuleProgressUncheckedUpdateManyWithoutModuleNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type UserModuleProgressCreateManyUserInput = {
    id?: string
    moduleId: string
    status?: $Enums.ModuleStatus
    isUnlocked?: boolean
    quizPassed?: boolean
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserQuizAttemptCreateManyUserInput = {
    id?: string
    moduleId: string
    score: number
    passed: boolean
    attemptedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificateCreateManyUserInput = {
    id?: string
    certificateNumber: string
    issuedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModuleFeedbackCreateManyUserInput = {
    id?: string
    moduleId: string
    helpful: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserModuleProgressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumModuleStatusFieldUpdateOperationsInput | $Enums.ModuleStatus
    isUnlocked?: BoolFieldUpdateOperationsInput | boolean
    quizPassed?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: ModuleUpdateOneRequiredWithoutUserProgressNestedInput
  }

  export type UserModuleProgressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    status?: EnumModuleStatusFieldUpdateOperationsInput | $Enums.ModuleStatus
    isUnlocked?: BoolFieldUpdateOperationsInput | boolean
    quizPassed?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserModuleProgressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    status?: EnumModuleStatusFieldUpdateOperationsInput | $Enums.ModuleStatus
    isUnlocked?: BoolFieldUpdateOperationsInput | boolean
    quizPassed?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuizAttemptUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: UserQuizResponseUpdateManyWithoutAttemptNestedInput
  }

  export type UserQuizAttemptUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: UserQuizResponseUncheckedUpdateManyWithoutAttemptNestedInput
  }

  export type UserQuizAttemptUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateNumber?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateNumber?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateNumber?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleFeedbackUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    helpful?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: ModuleUpdateOneRequiredWithoutModuleFeedbackNestedInput
  }

  export type ModuleFeedbackUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    helpful?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleFeedbackUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    helpful?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserModuleProgressCreateManyModuleInput = {
    id?: string
    userId: string
    status?: $Enums.ModuleStatus
    isUnlocked?: boolean
    quizPassed?: boolean
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionCreateManyModuleInput = {
    id?: string
    questionText: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModuleFeedbackCreateManyModuleInput = {
    id?: string
    userId: string
    helpful: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserModuleProgressUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumModuleStatusFieldUpdateOperationsInput | $Enums.ModuleStatus
    isUnlocked?: BoolFieldUpdateOperationsInput | boolean
    quizPassed?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutModuleProgressNestedInput
  }

  export type UserModuleProgressUncheckedUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumModuleStatusFieldUpdateOperationsInput | $Enums.ModuleStatus
    isUnlocked?: BoolFieldUpdateOperationsInput | boolean
    quizPassed?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserModuleProgressUncheckedUpdateManyWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumModuleStatusFieldUpdateOperationsInput | $Enums.ModuleStatus
    isUnlocked?: BoolFieldUpdateOperationsInput | boolean
    quizPassed?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleFeedbackUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    helpful?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutModuleFeedbackNestedInput
  }

  export type ModuleFeedbackUncheckedUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    helpful?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleFeedbackUncheckedUpdateManyWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    helpful?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateManyQuestionInput = {
    id?: string
    answerText: string
    isCorrect: boolean
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerText?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userQuizResponses?: UserQuizResponseUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerText?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userQuizResponses?: UserQuizResponseUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerText?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuizResponseCreateManyAnswerInput = {
    id?: string
    attemptId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserQuizResponseUpdateWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempt?: UserQuizAttemptUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type UserQuizResponseUncheckedUpdateWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    attemptId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuizResponseUncheckedUpdateManyWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    attemptId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuizResponseCreateManyAttemptInput = {
    id?: string
    answerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserQuizResponseUpdateWithoutAttemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answer?: AnswerUpdateOneRequiredWithoutUserQuizResponsesNestedInput
  }

  export type UserQuizResponseUncheckedUpdateWithoutAttemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuizResponseUncheckedUpdateManyWithoutAttemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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