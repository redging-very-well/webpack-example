import {
  getToken,
  setToken,
  clearToken,
  LocalStorageSessionKeys,
} from "./sessionStore";

describe("SessionStore", () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it("should set token in state and localStorage", () => {
    const testToken = "testToken";

    setToken(testToken);

    expect(getToken()).toBe(testToken);
    expect(localStorage.getItem(LocalStorageSessionKeys.userSessionToken)).toBe(
      testToken
    );
  });

  it("should clear token from state and localStorage", () => {
    const testToken = "testToken";

    setToken(testToken);
    clearToken();

    expect(getToken()).toBe("");
    expect(
      localStorage.getItem(LocalStorageSessionKeys.userSessionToken)
    ).toBeNull();
  });
});
