import { getErrorMessage } from "../js/error-handler.js";

test("maps firebase errors", () => {
  expect(
    getErrorMessage({ code: "auth/user-not-found" })
  ).toBe("Account not found.");
});