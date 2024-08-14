import { useParams } from "react-router-dom";
import { ProductCard } from "../../components";
import ProductCategories from "./ProductCategories";
import {
  ProductType,
  useGetProductByCategoryQuery,
  useGetProductListQuery,
} from "./productService";

const Products = () => {
  const { cat } = useParams();
  const {
    data: productList,
    error: listError,
    isLoading: listIsLoading,
  } = useGetProductListQuery();
  const {
    data: categoryList,
    error: catError,
    isLoading: catIsLoading,
  } = useGetProductByCategoryQuery(cat!, { skip: !cat });

  const data = cat ? categoryList : productList;
  const error = cat ? catError : listError;
  const isLoading = cat ? catIsLoading : listIsLoading;

  return (
    <>
      {isLoading && <div>Product list loading...</div>}
      {error && <div className="text-red-700">Product list error</div>}
      {data && data.length > 0 && (
        <>
          <h2 className="font-bold text-3xl text-red-900  mb-6">
            Product List
          </h2>
          <ProductCategories />
          <div className="grid grid-cols-2 gap-4 gap-y-8 mt-2">
            {data?.map((item: ProductType, i: number) => (
              <ProductCard data={item} key={i} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Products;
