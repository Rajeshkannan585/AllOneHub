import { describe, test, expect } from "@jest/globals";

describe("settings", () => {
  test("language options", () => {
    expect(["en","ta","hi"]).toContain("ta");
  });
});