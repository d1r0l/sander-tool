const Results = ({ data }) => {
  return (
    <div className="pt-9 w-full">
      <h1 className="head-text text-center py-3">Results</h1>
      {data && (
        <div>
          <div className="flex item-center justify-around">
            <h2 className="text-md font-bold">{data.full_name}</h2>
            <p>@{data.username}</p>
            <img
              src={data.profile_picture}
              alt={data.full_name}
              className="mb-4 rounded-full w-12 h-12"
            />
          </div>

          <table className="table-auto w-full border-collapse border border-gray-300">
            <tbody>
              <tr>
                <td className="border px-4 py-2 font-bold">Private Account</td>
                <td className="border px-4 py-2">
                  {data.private_account ? "Yes" : "No"}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-bold">Verified Account</td>
                <td className="border px-4 py-2">
                  {" "}
                  {data.verified_account ? "Yes ✔️" : " NO ‼️‼️"}{" "}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-bold">Biography</td>
                <td className="border px-4 py-2">{data.bio}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-bold">Website</td>
                <td className="border px-4 py-2">
                  <a
                    href={data.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.website}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-bold">Media Count</td>
                <td className="border px-4 py-2">{data.counts.media}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-bold">Followers</td>
                <td className="border px-4 py-2">{data.counts.followed_by}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-bold">Following</td>
                <td className="border px-4 py-2">{data.counts.follows}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-bold">Account Type</td>
                <td className="border px-4 py-2">{data.account_type}</td>
              </tr>

              {data.business && (
                <>
                  <tr>
                    <td
                      colSpan="2"
                      className="bg-BLACK-3 text-lg font-bold px-4 py-2"
                    >
                      Business Info
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-bold">
                      Business Account
                    </td>
                    <td className="border px-4 py-2">
                      {data.business.is_business_account ? "Yes" : "No"}
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-bold">Public Email</td>
                    <td className="border px-4 py-2">
                      {data.business.public_email || "N/A"}
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-bold">
                      Contact Phone
                    </td>
                    <td className="border px-4 py-2">
                      {data.business.public_phone_country_code}{" "}
                      {data.business.public_phone_number}
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-bold">
                      Business Contact Method
                    </td>
                    <td className="border px-4 py-2">
                      {data.business.business_contact_method}
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-bold">
                      Category Name
                    </td>
                    <td className="border px-4 py-2">
                      {data.business.category_name}
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-bold">Category</td>
                    <td className="border px-4 py-2">
                      {data.business.category}
                    </td>
                  </tr>
                </>
              )}

              {data.address && (
                <>
                  <tr>
                    <td
                      colSpan="2"
                      className="bg-BLACK-3 text-lg font-bold px-4 py-2"
                    >
                      Address Info
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-bold">Street</td>
                    <td className="border px-4 py-2">{data.address.street}</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-bold">City</td>
                    <td className="border px-4 py-2">
                      {data.address.city_name}
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-bold">Zip</td>
                    <td className="border px-4 py-2">{data.address.zip}</td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Results;
