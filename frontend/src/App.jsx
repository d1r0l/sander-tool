import React, { useEffect, useState } from "react";
import axios from "axios";
import Hero from "./components/Hero";
import { Filters, InputProfile, Results } from "./components";
import InstagramUser from "./InstagramUser";

const userData = {
  id: "1574083",
  username: "snoopdogg",
  full_name: "Snoop Dogg",
  profile_picture:
    "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg",
  private_account: false,
  verified_account: true,
  bio: "This is my bio",
  website: "http://snoopdogg.com",
  counts: {
    media: 1320,
    follows: 420,
    followed_by: 3410,
  },
  account_type: "Personal", 
  business: {
    is_business_account: true,
    public_email: "contact@snoopdogg.com",
    contact_phone_number: "+1 800 555 1234",
    public_phone_country_code: "+1",
    public_phone_number: "8005551234",
    business_contact_method: "email", 
    category_name: "Musician/Band",
    category: "Entertainment",
  },
  address: {
    street: "123 Dogg Lane",
    city_name: "Los Angeles",
    zip: "90001",
  },
};

const getSimilarUsersURL = (userId) => {
  const SIMILAR_USERS_BASE_URL = "https://www.instagram.com/graphql/query/?query_id=17845312237175864&variables=";
  return `${SIMILAR_USERS_BASE_URL}%7B%22id%22%3A%22${userId}%22%7D`;
};

const App = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchSimilarAccounts = async () => {
      try {
        const userId = '210412485' // Use the ID from your existing userData
        const requestUrl = getSimilarUsersURL(userId);

        const response = await axios.get(requestUrl);
        // Assuming the API returns a list of similar accounts
        setProfileData(response.data);
        console.log(response.data);
        
      } catch (error) {
        console.error("Error fetching similar accounts:", error);
      }
    };

    fetchSimilarAccounts();
  }, []);

  return (
    <main className="px-2 overflow-y-hidden overflow-clip">
      <Hero />
      <div className="flex max-lg:flex-col">
        {/* <Filters /> */}
        {/* <Results data={profileData || userData} /> */}
      </div>
    </main>
  );
};

export default App;
