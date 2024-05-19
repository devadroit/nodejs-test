const testServer = require("../utils/testServer");
const users = require("./user");

const request = testServer(users);

describe("[ routes / user ]", () => {
  it("should return error no user exist", async () => {
    // Arrange
    const expected = 403;

    // Act
    const { status: result } = await request.get("/api/users/2");

    // Assert
    expect(result).toEqual(expected);
  });

  it("should return user got by ID", async () => {
    // Arrange
    const expected = 200;

    // Act
    const result = await fetch(
      `http://localhost:3000/api/users/66483167dd58a2f282335d02`
    )
      .then((resp) => resp.json())
      .then((response) => {
        return response;
      });

    // Assert
    expect(result).toEqual(
      expect.objectContaining({
        _id: expect.any(String),
        name: expect.any(String),
        email: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });

  it("should return 201 and created user ", async () => {
    // Arrange
    const expected = 201;
    // change email everytime when test
    const userToCreate = {
      name: "tony",
      email: "tony@newemail.xyz",
      password: "tony",
    };

    // Act
    const { body, status } = await request
      .post("/api/users/")
      .set("Content-Type", "application/json")
      .send(userToCreate);

    // Assert
    expect(status).toEqual(expected);
  });
});
