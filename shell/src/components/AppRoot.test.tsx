import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import { AppRoot } from "./AppRoot";
import { setToken, getToken } from "../stores/sessionStore";

jest.mock("../stores/sessionStore");
jest.mock("mfangular/app", () => {
  // mocking for remote app routes
},
{ virtual: true });

describe("AppRoot", () => {
  const setTokenMock = jest.mocked(setToken);
  const getTokenMock = jest.mocked(getToken);

  it("renders authenticated app when token is present", async () => {
    getTokenMock.mockReturnValue("abc123");

    const { getByTestId } = render(
      <AppRoot />
    );

    await waitFor(() => {
      expect(getByTestId("navbar")).toBeInTheDocument();
      expect(getByTestId("home")).toBeInTheDocument();
    });
  });

  it("renders unauthenticated app when token is not present in session store but present in localStorage", async () => {
    getTokenMock.mockReturnValue("")

    const { getByTestId } = render(
      <AppRoot />
    );

    await waitFor(() => {
      expect(getByTestId("login")).toBeInTheDocument();
    });
  });
});
