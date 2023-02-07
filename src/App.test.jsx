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
});
