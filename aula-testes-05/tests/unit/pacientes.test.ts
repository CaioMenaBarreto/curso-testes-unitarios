import { faker } from "@faker-js/faker";
import { generateProtocolForPacient } from "protocols-generator";

jest.mock("uuid", () => {
  return {
    v4: () => {return "123"}
  }
})

describe("protocols tests", () => {
  it("should return a correct object", async () => {
    const name = faker.lorem.word();
    const lastName = faker.lorem.word();
    const priority = faker.datatype.boolean();
    const object = generateProtocolForPacient(name, lastName, priority);
    expect(object.protocol).toBe("123");
  });
});