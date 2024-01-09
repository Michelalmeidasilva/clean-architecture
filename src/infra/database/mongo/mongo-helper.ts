import env from "@main/config/env";
import { MongoClient, Collection, ObjectId } from "mongodb";

type MongoDriverType = {
  client: null | MongoClient;
  dbName: string;
  connect: (uri: string) => Promise<void>;
  disconnect: () => Promise<void>;
  getCollection: (name: string) => Collection | null;
  mapCollection: (collection: Record<string | number, unknown>[]) => unknown[];
  map: (data: Record<string | number, unknown>) => unknown;
};

export const MongoHelper: MongoDriverType = {
  client: new MongoClient(env.mongoUrl, {
    auth: {
      password: "root",
      username: "password123",
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

  async getCollection(name: string): Collection | null {
    const database = this?.client?.db(this.dbName);

    console.log({ database });
    if (database) {
      return database.collection(name);
    }

    return null;
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
