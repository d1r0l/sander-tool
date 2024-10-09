import React from "react";
import FilterItem from "./reusable/FilterItem"; 

const Filters = () => {
  return (
    <div className="h-[76vh] max-lg:w-full max-lg:h-fit w-1/3  ">
      <div className="subhead-text">Filter By </div>
      <div className=" mt-5 flex h-full overflow-y-scroll scrollable gap-5 text-wrap flex-wrap  max-lg:w-full  justify-start  ">
        {filterData.map((item, index) => (
          <FilterItem key={index} label={item.label} />
        ))}
      </div>  
    </div>
  );
};

export default Filters; 


const filterData = [
  {
    label: "Username",
  },
  {
    label: "Full Name",
  },
  {
    label: "Private Account",
  },
  {
    label: "Verified Account",
  },
  {
    label: "profile pic url",
  },
  {
    label: "media count",
  }, 
  {
    label: "follower count",
  }, 
  {
    label: "following count",
  }, 
  {
    label: "biography",
  }, 
  {
    label: "external url",
  }, 
  {
    label: "account type",
  }, 
  {
    label: "business",
  }, 
  {
    label: "public email",
  }, 
  {
    label: "contact phone number",
  }, 
  {
    label: "public phone country code",
  }, 
  {
    label: "public phone number",
  }, 
  {
    label: "business contact method",
  }, 
  {
    label: "category name",
  }, 
  {
    label: "category",
  }, 
  {
    label: "address street",
  }, 
  {
    label: "city name",
  }, 
  {
    label: "zip",
  }, 
  {
    label: "instagram location id",
  },  
];

/*
curl --location --request GET 'http://i.instagram.com/api/v1/users/web_profile_info/?username=webmind1s'
--header 'User-Agent: Instagram 146.0.0.27.125 (iPhone12,1; iOS 13_3; en_US; en-US;scale=2.00; 1656x3584; 190542906'
*/

// Filter Items: 