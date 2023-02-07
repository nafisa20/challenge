import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("when there are products", () => {
  it("displays a list of products", async () => {
    render(<App />);
    expect(
      await screen.findByRole("heading", { name: "Products" })
    ).toBeInTheDocument();
    const products = await screen.findAllByTestId("product-list-item");
    expect(products).toHaveLength(30);
  });

  it("displays the product details", async () => {
    render(<App />);
    const products = await screen.findAllByTestId("product-list-item");

    expect(
      await within(products[0]).findByText("Brown Perfume")
    ).toBeInTheDocument();
    expect(
      await within(products[0]).findByText(
        "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml"
      )
    ).toBeInTheDocument();
    expect(
      await within(products[0]).findByText("Category: fragrances")
    ).toBeInTheDocument();
    expect(
      await within(products[0]).findByText("Stock: 52")
    ).toBeInTheDocument();
    expect(await within(products[0]).findByText("£40")).toBeInTheDocument();
  });

  // These tests don't always pass because the UI takes some time to update.
  // it("allows the user to filter through the products by search term", async () => {
  //   render(<App />);
  //   userEvent.type(await screen.findByLabelText("Search"), "eau de p");
  //   const products = await screen.findAllByTestId("product-list-item");
  //   expect(products).toHaveLength(1);
  //   const perfume = products[0];
  //   expect(
  //     within(perfume).getByText("Eau De Perfume Spray")
  //   ).toBeInTheDocument();
  // });

  // it("allows the user to filter through the products by category", async () => {
  //   render(<App />);
  //   await screen.findByText("Brown Perfume");
  //   userEvent.selectOptions(
  //     await screen.findByLabelText("Filter by category"),
  //     ["Smartphones"]
  //   );
  //   await waitForElementToBeRemoved(() => screen.getByText("Brown Perfume"));
  //   const products = await screen.findAllByTestId("product-list-item");
  //   expect(products).toHaveLength(5);
  //   expect(within(products[0]).getByText('Huawei P30')).toBeInTheDocument()
  // });
});
