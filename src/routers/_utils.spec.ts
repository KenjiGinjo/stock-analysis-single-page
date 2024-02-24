import { checkDuplicatePaths, createRouter } from "./_utils";

describe("_utils", () => {
  describe("createRouter", () => {
    it("should return the router object when valid", () => {
      const validRouter = { path: "/home", name: "Home" };
      expect(createRouter(validRouter)).toBe(validRouter);
    });

    it("should throw an error when the router object is invalid", () => {
      const invalidRouters = [
        { name: "NoPath" }, // Missing path
        { path: "/noName" }, // Missing name
        "NotAnObject", // Not an object
      ];

      invalidRouters.forEach((router) => {
        expect(() => createRouter(router as any)).toThrow(
          "Invalid router object"
        );
      });
    });
  });
});
describe("checkDuplicatePaths", () => {
  it("should not throw an error for a valid router configuration", () => {
    const routerConfig = {
      path: "contact",
      name: "Contact",
      children: {
        form: { path: "form", name: "Contact Form" },
        form2: { path: "form2", name: "Contact Form" },
      },
    };

    expect(() => checkDuplicatePaths(routerConfig)).not.toThrow();
  });

  it("should throw an error for a router configuration with duplicate paths", () => {
    const routerConfigWithDuplicates = {
      path: "contact",
      name: "Contact",
      children: {
        form: { path: "form", name: "Contact Form" },
        formDuplicate: { path: "form", name: "Contact Form Duplicate" }, // Duplicate path in children
      },
    };

    expect(() => checkDuplicatePaths(routerConfigWithDuplicates)).toThrow();
  });
});
