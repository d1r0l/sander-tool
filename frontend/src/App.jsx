import React, { useEffect, useState } from "react";
import axios from "axios";
import Hero from "./components/Hero";
import { Results } from "./components";
import Loading from "./components/Loading";

const App = () => {
  const [profileInfo, setProfileInfo] = useState([]);
  const [username, setUsername] = useState("");
  const [similarProfiles, setSimilarProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [foundData, setFoundData] = useState(false);

  const fetchUserData = async () => {
    setLoading(true); // Start loading
    try {
      const response = await axios.get(
        `https://sander-0-tool.onrender.com/user-info/${username}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      setProfileInfo(response.data.userInfo);
      setSimilarProfiles(
        response.data.similarUsers.data.user.edge_chaining.edges.map(
          (user) => user.node
        )
      );
      setFoundData(true); // Data fetched successfully
      console.log("Successfully fetched the data alhamdullah");
    } catch (error) {
      console.error("Error fetching similar accounts:", error);
      setFoundData(false); // No data found
    } finally {
      setLoading(false); // Stop loading
      setUsername("");
    }
  };

  const TestBackend = async () => {
    setLoading(true); // Start loading
    try {
      const response = await axios.get(
        "https://sander-0-tool.onrender.com/test-endpoint/",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      setFoundData(true); // Data fetched successfully
      console.log("Successfully fetched the data alhamdullah", response.data);
    } catch (error) {
      console.error("Error fetching similar accounts:", error);
      setFoundData(false); // No data found
    } finally {
      setLoading(false); // Stop loading
    }
  };
  /*
  is_new_to_instagram = Yes/No
Has highlights = Yes/No
is_eligible_for_meta_verified_label = Yes/No
has profile picture = Yes/No
Is business account = Yes/No
phonenumber
mail  
islamique__page
  */

  const userInfoData = [
    {
      title: "Full Name",
      value: profileInfo?.full_name,
    },
    {
      title: "Has highlight reels",
      value: profileInfo?.has_highlight_reels?.toString(),
    },
    {
      title: "Is eligible for meta verified label",
      value: profileInfo?.is_eligible_for_meta_verified_label?.toString(),
    },
    {
      title: "Is business",
      value: profileInfo?.is_business?.toString(),
    },
    {
      title: "Contact phone number",
      value: profileInfo?.contact_phone_number,
    },
    {
      title: "Public email",
      value: profileInfo?.public_email,
    },
    {
      title: "Is new to instagram",
      value: profileInfo?.is_new_to_instagram?.toString(),
    },
    {
      title: "Profile Pic",
      value: profileInfo?.profile_pic_url,
    },
    {
      title: "Profile ID",
      value: profileInfo?.id,
    },
    {
      title: "Follower Count",
      value: profileInfo?.follower_count,
    },
    {
      title: "Following Count",
      value: profileInfo?.following_count,
    },
    {
      title: "Username",
      value: profileInfo?.username,
    },
    {
      title: "Media Count",
      value: profileInfo?.media_count,
    },
    {
      title: "Biography",
      value: profileInfo?.biography,
    },
    {
      title: "External URL",
      value: profileInfo?.external_url,
    },
    {
      title: "Category",
      value: profileInfo?.category,
    },
  ]; 

  return (
    <main className="px-2 w-full overflow-y-hidden overflow-clip">
      <Hero
        fetchUserData={fetchUserData}
        username={username}
        setUsername={setUsername}
      />
      {loading ? (
        <Loading /> // Show loading component while fetching
      ) : foundData ? (
        <div className="flex max-lg:flex-col">
          <Results data={userInfoData} similarProfiles={similarProfiles} />
        </div>
      ) : (
        <div className="text-xl w-full h-full flex items-center justify-center">
          <h1>Start Searching for user to get his data</h1>
        </div>
      )}
    </main>
  );
};

export default App;
