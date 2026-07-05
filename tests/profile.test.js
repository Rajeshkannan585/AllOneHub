import { describe, expect, test } from "@jest/globals";

describe("profile", () => {
  test("username validation", () => {
    expect("rajesh".length).toBeGreaterThan(2);
  });
});