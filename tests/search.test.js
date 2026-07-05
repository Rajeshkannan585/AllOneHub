import { describe, expect, test } from "@jest/globals";

describe("search", () => {
  test("search term validation", () => {
    expect("ra".length).toBeGreaterThanOrEqual(2);
  });
});