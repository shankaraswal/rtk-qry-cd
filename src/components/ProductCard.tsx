import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ProductType } from "../features/products/productService";
import Rating from "../components/Rating.js";
import { addItem } from "../features/cart/cartActions";

const ProductCard = ({ data }: { data: ProductType }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddItem = () => {
    const itemWithQuantity = Object.assign({ ...data, qty: 1 });
    dispatch(addItem(itemWithQuantity));
  };

  return (
    <div className="block border-2 border-neutral-300 p-4">
      <h3 className="mb-2 w-full text-lg font-bold text-neutral-900  text-ellipsis line-clamp-1">
        {data.title}
      </h3>
      <figure
        style={{
          backgroundImage: `url(${data.image})`,
        }}
        className="h-48 w-full bg-cover bg-center bg-no-repeat"
      ></figure>
      <div className="space-y-1 px-0 pt-3 flex flex-col">
        <p className="text-sm font-bold my-5">
          Price:{" "}
          <span className="text-2xl text-red-800 ">
            £{data.price.toFixed(2)}
          </span>
        </p>
        <p className="text-ellipsis text-sm line-clamp-2">{data.description}</p>
        <div className="flex justify-between items-end pt-4">
          <p className="text-red-800 text-sm py-2 font-semibold capitalize">
            {data.category}
          </p>
          <Rating prodRating={data?.rating} />
        </div>
        <div className="btn-group pt-6 flex justify-end gap-6 items-center">
          <button
            type="button"
            onClick={() => navigate(`/productdetail/${data.id}`)}
            className="bg-neutral-800 text-white py-2 px-8 rounded hover:bg-neutral-600 "
          >
            Detail
          </button>
          <button
            onClick={handleAddItem}
            type="button"
            className="bg-red-800 text-white py-2 px-8 rounded hover:bg-red-600 "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
