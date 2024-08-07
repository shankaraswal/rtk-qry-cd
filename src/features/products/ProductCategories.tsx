import { useNavigate, useParams } from "react-router-dom";
import { useGetProductCategoriesQuery } from "./productService";
import { useEffect, useState } from "react";

const ProductCategories = () => {
  const navigate = useNavigate();
  const { data } = useGetProductCategoriesQuery();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { cat } = useParams();

  const handleCategoryClick = (category?: string) => {
    if (category) {
      setActiveCategory(category);
      navigate(`/products/category/${category}`);
    } else {
      setActiveCategory("");
      navigate(`/products`);
    }
  };

  useEffect(() => {
    if (!cat) setActiveCategory("");
  }, [cat]);

  return (
    <>
      {data && (
        <>
          <div className="grid grid-flow-col justify-end gap-2">
            <span className=" text-md p-2">Categories: </span>
            {data?.map((item: string) => (
              <button
                key={item}
                onClick={() => handleCategoryClick(item)}
                disabled={activeCategory === item}
                className={`capitalize text-md p-2 w-48 text-white hover:bg-neutral-700 disabled:bg-red-800 ${
                  activeCategory === item ? "bg-neutral-400" : "bg-neutral-600"
                }`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => handleCategoryClick()}
              disabled={activeCategory === ""}
              className={`capitalize text-md p-2 w-48 text-white hover:bg-neutral-700 disabled:bg-red-800 ${
                !activeCategory ? "bg-neutral-400" : "bg-neutral-600"
              }`}
            >
              All Products
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default ProductCategories;
