const Results = ({ data, similarProfiles }) => {
  return (
    <div className="pt-9 mx-24 max-2xl:mx-0 w-full">
      <h1 className="head-text text-center py-3">Profile Information:</h1>
      {data && (
        <div>
          <div className="flex items-center py-3 gap-x-9 justify-center">
            {/* Full name */}
            <h2 className="text-md font-bold">{data[0]?.value}</h2>
            {/* Profile picture */}
            <a
              href={data[1]?.value}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-300"
            >
              <p> Show Profile Image</p>
            </a>
            {/* Username */}
            <p>@{data[5]?.value}</p>
          </div>

          <table className="table-auto w-full border-collapse border border-gray-300">
            <tbody>
              {data
                ?.filter((item) => item.title !== "profile_pic") // Filter out profile_pic
                .map((item, index) => (
                  <tr
                    key={index}
                    className="odd:bg-BLACK-3 odd:text-white even:bg-BLACK-3/20"
                  >
                    <td className="border px-4 py-2 font-bold">{item.title}</td>
                    <td className="border px-4 py-2">{item.value}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="">
            <h1 className="head-text text-center py-5">Similar Profiles:</h1>
            <table className="table-auto w-full border-collapse border border-gray-300">
              <tbody>
                <tr className="bg-zinc-500">
                  <td className="border px-4 text-lg  py-2 font-bold">
                    Profile Picture
                  </td>
                  <td className="border text-lg font-bold px-4 py-2 ">
                    Full Name
                  </td>
                  <td className="border text-lg font-bold px-4 py-2">
                    Username
                  </td>
                  <td className="border text-lg font-bold px-4 py-2">
                    Profile ID
                  </td>
                  <td className="border text-lg font-bold px-4 py-2">
                    Followed by Viewers
                  </td>
                </tr>
              </tbody>
              <tbody>
                {similarProfiles.map((item, index) => (
                  <tr
                    key={index}
                    className="odd:bg-BLACK-3 odd:text-white even:bg-BLACK-3/20"
                  >
                    <a
                      href={item.profile_pic_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-300"
                    >
                      Show{" "}
                      <span className="border-blue-50 border-b">
                        {item.username}{" "}
                      </span>{" "}
                      Image
                    </a>
                    <td className="border px-4 py-2 font-bold">
                      {item.full_name}
                    </td>
                    <td className="border px-4 py-2">
                      <a
                        href={`https://www.instagram.com/${item.username}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-300"
                      >
                        @{item.username}
                      </a>
                    </td>
                    <td className="border px-4 py-2">{item.id}</td>
                    <td className="border px-4 py-2">
                      {item.followed_by_viewer.toString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Results;

const similarUsersInfo = [
  {
    // similarProfiles
    followed_by_viewer: "similarProfiles",
    full_name: "",
    id: "",
    profile_pic_url: "",
    username: "",
  },
];
// https://scontent-hbe1-1.cdninstagram.com/v/t51.2885-19/20066944_1689245494716869_9027978693066096640_a.jpg?stp=dst-jpg_e0_s150x150&_nc_ht=scontent-hbe1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=cVP-Q9qVnMsQ7kNvgGtG5JP&_nc_gid=d5c3d97fe1764763ac6ccea6fdb66f35&edm=AEF8tYYBAAAA&ccb=7-5&oh=00_AYDK6_n0lV1otQ4bahFtyR4fltjd2Myi2B0xZffHuJaBoQ&oe=670CB78B&_nc_sid=1e20d2
