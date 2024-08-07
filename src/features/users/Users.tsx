import { UserCard } from "../../components";
import { useGetUserListQuery } from "./userService";

const Users = () => {
  const { data, error, isLoading } = useGetUserListQuery();

  return (
    <>
      <h2 className="font-bold text-3xl text-red-900  mb-6">User List</h2>
      {isLoading && <div>Loading...</div>}
      {error && <div className="text-red-700">Error</div>}
      {data && data.length > 0 && (
        <>
          <div className="grid grid-cols-2 gap-10">
            {data?.map((item, i) => (
              <UserCard data={item} key={i} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Users;
