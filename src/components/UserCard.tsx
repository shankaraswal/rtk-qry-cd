import { useNavigate } from "react-router-dom";

// src={`https://tecdn.b-cdn.net/img/new/standard/nature/${imgnum}.jpg`}
// src={`https://tecdn.b-cdn.net/img/new/slides/${imgnum}.jpg`}
// src={`https://tecdn.b-cdn.net/img/new/standard/city/${imgnum}.webp`}

const UserCard = ({ imgnum, data }: { imgnum: any; data: any }) => {
  const navigate = useNavigate();
  if (imgnum >= 0 && imgnum < 10) {
    imgnum = "10" + imgnum;
  }
  return (
    <div className="flex flex-row gap-x-12 p-5 rounded-lg bg-white  hover:bg-neutral-300 cursor-pointer">
      <figure className="w-fit  text-center">
        <img
          className="h-40 w-40 rounded-full ring-2 ring-red-400 p-1"
          src={`https://tecdn.b-cdn.net/img/new/slides/${imgnum}.jpg`}
          alt=""
        />
      </figure>
      <div className="">
        <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50 capitalize">
          {`${data.name.firstname} ${data.name.lastname}`}
        </h5>
        <p className="text-base text-neutral-600 dark:text-neutral-200">
          {data.email}
        </p>
        <p className="text-base text-neutral-600 dark:text-neutral-200">
          {data.phone}
        </p>
        <p className="text-base text-neutral-600 dark:text-neutral-200">
          {data.username}
        </p>
        <p className="text-base text-neutral-600 dark:text-neutral-200">
          {`${data.address.number}, ${data.address.street}, ${data.address.city} - ${data.address.zipcode}`}
        </p>
        <div className="flex pt-4">
          <button
            type="button"
            onClick={() => navigate(`/userdetail/${data.id}`)}
            className="bg-red-800 text-white py-2 px-8 rounded hover:bg-red-600"
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
