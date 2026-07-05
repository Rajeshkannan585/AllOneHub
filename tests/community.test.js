import { describe, test, expect } from "@jest/globals";

describe("communities", () => {
  test("community name length", () => {
    expect("AllOneHub".length).toBeGreaterThan(3);
  });
});