import { useNavigate } from "react-router-dom";
import { UserType } from "../features/users/userService";

const UserCard = ({ data }: { data: UserType }) => {
  const navigate = useNavigate();
  let imgNum = `10${data.id}`;
  if (data.id === 10) {
    imgNum = `1${data.id}`;
  }
  return (
    <div className="flex flex-row gap-x-12 p-5 rounded-lg bg-white  hover:bg-neutral-300">
      <img
        className=" lg:w-40 lg:h-40 md:w-24 md:h-24 rounded-full  ring-2 ring-red-400 p-1"
        src={`https://tecdn.b-cdn.net/img/new/standard/nature/${imgNum}.jpg`}
        alt=""
      />
      <div className="w-full">
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
