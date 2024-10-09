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
  account_type: "Personal", // Example value: Personal, Business, Creator
  business: {
    is_business_account: true,
    public_email: "contact@snoopdogg.com",
    contact_phone_number: "+1 800 555 1234",
    public_phone_country_code: "+1",
    public_phone_number: "8005551234",
    business_contact_method: "email", // Options: email, phone, none
    category_name: "Musician/Band",
    category: "Entertainment",
  },
  address: {
    street: "123 Dogg Lane",
    city_name: "Los Angeles",
    zip: "90001",
  },
};

const App = () => {
  const [profileData, setProfileData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const url = "http://localhost:4000/profile-info";
  //     try {
  //       const response = await axios.get(url, {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Accept: "application/json",
  //         },
  //       });
  //       setProfileData(response.data); // Save data to state
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <main className="px-2 overflow-y-hidden overflow-clip">
      <Hero />
      <div className="flex max-lg:flex-col">
        <Filters />
        <Results data={profileData || userData} /> 
      </div>
    </main>
  );
};  

export default App;


