import User from "../features/users/Users";

function UserList() {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center w-full">
        <User />
      </div>
    </>
  );
}

export default UserList;
