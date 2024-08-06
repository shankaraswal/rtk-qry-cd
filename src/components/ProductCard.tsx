import { useNavigate } from "react-router-dom";
import { ProductType } from "../features/products/productService";

// src={`https://tecdn.b-cdn.net/img/new/standard/nature/${imgnum}.jpg`}
// src={`https://tecdn.b-cdn.net/img/new/slides/${imgnum}.jpg`}
// src={`https://tecdn.b-cdn.net/img/new/standard/city/${imgnum}.webp`}

const ProductCard = ({ data }: { data: ProductType }) => {
  const navigate = useNavigate();
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
        <p className="text-sm font-bold">
          Price: <span className="text-xl text-red-800 ">£{data.price}</span>
        </p>
        <p className="text-ellipsis line-clamp-2">{data.description}</p>
        <p className="text-neutral-800 text-sm mt-10 font-semibold capitalize">
          {data.category}
        </p>

        <div className="pt-4">
          <button
            type="button"
            onClick={() => navigate(`/productdetail/${data.id}`)}
            className="bg-red-800 text-white py-2 px-8 rounded hover:bg-red-600"
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
