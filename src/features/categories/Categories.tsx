import { useGetCategoryListQuery } from "./categoryService";

const CategoryList = () => {
  const { data } = useGetCategoryListQuery();

  return (
    <>
      {data && (
        <>
          <div className="grid grid-flow-col justify-end gap-2">
            <span className=" text-md p-2">Categories: </span>
            {data?.map((item: string) => (
              <button className="bg-stone-600 capitalize text-md p-2 w-48 text-white hover:bg-stone-500">
                {item}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default CategoryList;
