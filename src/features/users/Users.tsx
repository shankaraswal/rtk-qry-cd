import { UserCard } from "../../components";
import { useGetUserListQuery } from "./userService";

const Users = () => {
  const { data, error, isLoading } = useGetUserListQuery();

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div className="text-red-700">Error</div>}
      {data && data.length > 0 && (
        <>
          <h1 className="text-xl font-bold  text-red-700 mb-6">User List</h1>
          <div className="grid grid-cols-2 gap-10">
            {data?.map((item, i) => (
              <UserCard imgnum={i} data={item} key={i} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Users;
