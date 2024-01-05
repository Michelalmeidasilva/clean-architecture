import { MongoClient, Collection, ObjectId } from "mongodb";

type MongoDriverType = {
  client: null | MongoClient;
  dbName: "galileu";
  uri: null | string;
  connect: (uri: string) => Promise<void>;
  disconnect: () => Promise<void>;
  getCollection: (name: string) => Collection | null;
  mapCollection: (collection: Record<string | number, unknown>[]) => unknown[];
  map: (data: Record<string | number, unknown>) => unknown;
};

export const MongoHelper: MongoDriverType = {
  client: null,
  uri: null,
  dbName: "galileu",

  async connect(uri: string): Promise<void> {
    this.uri = uri;
    this.client = await MongoClient.connect(uri);
  },

  async disconnect(): Promise<void> {
    await this?.client?.close();
    this.client = null;
  },

  getCollection(name: string): Collection | null {
    if (this?.client?.db()) {
      return this.client.db(this.dbName).collection(name);
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
