import { ProductCard } from "../../components";
import { useGetProductListQuery } from "./productService";

const Products = () => {
  const { data, error, isLoading } = useGetProductListQuery();

  return (
    <>
      {isLoading && <div>Product list loading...</div>}
      {error && <div className="text-red-700">Product list error</div>}
      {data && data.length > 0 && (
        <>
          <h1 className="text-xl font-bold  text-red-700 mb-6">Product List</h1>
          <div className="grid grid-cols-3 gap-x-2 gap-y-10">
            {data?.map((item, i) => (
              <ProductCard data={item} key={i} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Products;
