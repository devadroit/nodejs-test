const testServer = require("../utils/testServer");
const health = require("./health");

const request = testServer(health);

describe("[ routes / health ]", () => {
  it("should return a response with status 200", async () => {
    // Arrange
    const expected = 200;

    // Act
    const { status: result } = await request.get("/api/health");

    // Assert
    expect(result).toEqual(expected);
  });

  it("should return health of server", async () => {
    // Arrange
    const expected = {
      status: "ok",
      timestamp: "2024-05-18T22:45:40.551Z",
    };

    // Act
    const { body: result } = await request.get("/api/health");

    // Assert
    expect(result).toEqual(
      expect.objectContaining({
        status: expect.any(String),
        timestamp: expect.any(String),
      })
    );
  });
});
