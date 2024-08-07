import { useNavigate, useParams } from "react-router-dom";
import { Geolocation } from "../../components";
import { useGetUserQuery } from "./userService";

function Detail() {
  const navigate = useNavigate();
  const { uid } = useParams();
  const { data, error, isLoading } = useGetUserQuery(uid!);
  let imgNum = `10${data?.id}`;
  if (data?.id === 10) {
    imgNum = `1${data?.id}`;
  }

  return (
    <>
      {isLoading && <div>User profile loading...</div>}
      {error && <div className="text-red-700">User profile error</div>}
      {data && (
        <>
          <div className="flex flex-row-reverse text-gray-600 justify-between">
            <div
              className="w-full"
              style={{
                backgroundImage: `url(${`https://tecdn.b-cdn.net/img/new/standard/nature/${imgNum}.jpg`})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="text-2xl w-full">
              <h2 className="text-3xl text-red-900 mb-6 font-semibold capitalize">
                {data.name.firstname} {data.name.lastname}
              </h2>
              <p className="text-lg text-neutral-500">
                Username: {data.username}
              </p>
              <h3 className="mt-10 mb-4 text-2xl font-semibold">
                Contact Information
              </h3>
              <div className="space-y-6 text-xl">
                <p>
                  <strong>Email:</strong> {data.email}
                </p>
                <p>
                  <strong>Phone:</strong> {data.phone}
                </p>
                <p>
                  <strong>Address:</strong>{" "}
                  {`${data.address.number}, ${data.address.street}, ${data.address.city} - ${data.address.zipcode}`}
                </p>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="mt-10 mb-4 text-2xl font-semibold">About</h3>
            <div className="mt-2 text-xl">
              <p>
                John is a seasoned software engineer with over 10 years of
                experience in web development. Throughout his career, he has
                mastered a wide range of technologies and frameworks, enabling
                him to build robust and scalable applications. His expertise
                spans both front-end and back-end development, and he has a
                particular passion for creating seamless user experiences and
                efficient, maintainable code.
              </p>
              <p>
                John's love for coding is matched by his enthusiasm for teaching
                and mentoring. He has led numerous training sessions and
                workshops, helping junior developers hone their skills and grow
                in their careers. His approachable and patient demeanor makes
                him an excellent mentor, and he takes great pride in seeing his
                mentees succeed.
              </p>
              <p>
                Beyond his professional work, John is an avid contributor to
                open-source projects. He believes in the power of collaboration
                and community in advancing technology and solving complex
                problems. His contributions have earned him recognition and
                respect within the developer community.
              </p>
              <p>
                In his free time, John enjoys exploring new technologies,
                attending tech meetups, and sharing his knowledge through blog
                posts and speaking engagements. His dedication to continuous
                learning and passion for the craft of software development make
                him a valuable asset to any team.
              </p>
            </div>
            <h3 className="mt-10 mb-4 text-2xl font-semibold">Location</h3>
            <Geolocation coords={data.address.geolocation} />
          </div>
          <div className="my-4">
            <button
              className="mt-8 bg-gray-400 text-white py-2 px-4 rounded hover:bg-red-600"
              onClick={() => {
                navigate(-1);
              }}
            >
              Back
            </button>
            <button className="ml-4 mt-8 bg-red-700 text-white py-2 px-4 rounded hover:bg-red-600">
              Edit Profile
            </button>

            <button
              onClick={() => navigate("/users")}
              className="ml-4 mt-8 bg-red-700 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              User List
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Detail;
