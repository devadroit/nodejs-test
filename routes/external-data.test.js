const testServer = require("../utils/testServer");
const externalData = require("./external-data");

const request = testServer(externalData);

describe("[ routes / external-data ]", () => {
  it("should return a response with status 200", async () => {
    // Arrange
    const expected = 200;

    // Act
    const { status: result } = await request.get(
      "/api/external-data?city=los mochis"
    );

    // Assert
    expect(result).toEqual(expected);
  });

  it("should return a response with status 403, error param city no provided", async () => {
    // Arrange
    const expected = 403;

    // Act
    const { status: result } = await request.get("/api/external-data?");

    // Assert
    expect(result).toEqual(expected);
  });

  it("should return weather from los mochis city", async () => {
    // Arrange
    const expected = {
      city: "Los Mochis",
      temperature: "3.1",
      weather: "Clear",
    };

    // Act
    const { body: result } = await request.get(
      "/api/external-data?city=los mochis"
    );

    // Assert
    expect(result).toEqual(
      expect.objectContaining({
        city: expect.any(String),
        temperature: expect.any(String),
        weather: expect.any(String),
      })
    );
  });
});
