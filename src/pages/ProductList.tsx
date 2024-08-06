import Products from "../features/products/Products";

function ProductList() {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center w-full">
        <Products />
      </div>
    </>
  );
}

export default ProductList;
