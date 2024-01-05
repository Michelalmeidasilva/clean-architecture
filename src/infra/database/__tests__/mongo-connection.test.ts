import { MongoHelper } from "@infra/database/mongo/mongo-helper";
import env from "@main/config/env";

import { describe, it, expect } from "bun:test";

describe("DbConnection", () => {
  // beforeAll(async () => {
  //   await new DbConnection().connect(env.mongoUrl);
  // });

  // afterAll(async () => {
  //   await new DbConnection().disconnect();
  // });

  it("should reconnect if mongodb is down", async () => {
    await MongoHelper.connect(env.mongoUrl);
    const collection = MongoHelper.getCollection("ingredients");
    expect(collection).toBeTruthy();
  });
});
