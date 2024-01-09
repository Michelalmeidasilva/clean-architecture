import env from "@main/config/env";
import { MongoClient, Collection, ObjectId, Document } from "mongodb";

type MongoDriverType = {
  client: null | MongoClient;
  dbName: string;
  connect: (uri: string) => Promise<void>;
  disconnect: () => Promise<void>;
  getCollection: <T extends Document>(name: string) => Collection<T> | null;
  mapCollection: (collection: Record<string | number, unknown>[]) => unknown[];
  map: (data: Record<string | number, unknown>) => unknown;
};

export const MongoHelper: MongoDriverType = {
  client: new MongoClient(env.mongoUrl, {
    auth: {
      password: env.mongo_password,
      username: env.mongo_username,
    },
  }),
  dbName: env.mongoDatabase,

  async connect(): Promise<void> {
    this.client?.connect();
  },

  async disconnect(): Promise<void> {
    await this?.client?.close();
    this.client = null;
  },

  getCollection<T extends Document>(name: string): Collection<T> | null {
    const database = this?.client?.db(this.dbName);

    const collection = database?.collection<T>(name) ?? null;

    return collection;
  },

  map: (data: Record<string | number, unknown>): unknown => {
    const { _id, ...rest } = data;

    return { ...rest, id: (_id as ObjectId).toHexString() };
  },

  mapCollection: (
    collection: Record<string | number, unknown>[]
  ): unknown[] => {
    return collection.map((document) => MongoHelper.map(document));
  },
};
