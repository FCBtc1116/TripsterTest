import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faWifi,
  faPlaneUp,
  faCertificate,
  faClock,
  faBusinessTime,
  faShower,
} from "@fortawesome/free-solid-svg-icons";

import Card from "../Components/Card";
import CustomProgress from "../Components/CustomProgress";

import firstImg from "../Assets/1.jpg";
import secondImg from "../Assets/2.jpg";
import thirdImg from "../Assets/3.jpg";
import forthImg from "../Assets/4.jpg";
import fifthImg from "../Assets/5.jpg";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const data = [
    {
      label: "Overview",
      value: "overview",
      topic: "Perperty overview",
      services: [
        {
          icon: faWifi,
          service: "Free Wifi",
        },
        {
          icon: faPlaneUp,
          service: "Air conditioning",
        },
        {
          icon: faShower,
          service: "Private bathroom",
        },
        {
          icon: faCertificate,
          service: "Key card access",
        },
        {
          icon: faBusinessTime,
          service: "Free parking",
        },
        {
          icon: faClock,
          service: "24-hour front desk",
        },
      ],
      image: firstImg,
    },
    {
      label: "Rooms",
      value: "rooms",
      topic: "Rooms overview",
      services: [
        {
          icon: faWifi,
          service: "Free Wifi",
        },
        {
          icon: faCertificate,
          service: "Key card access",
        },
        {
          icon: faBusinessTime,
          service: "Free parking",
        },
        {
          icon: faClock,
          service: "24-hour front desk",
        },
        {
          icon: faPlaneUp,
          service: "Air conditioning",
        },
        {
          icon: faShower,
          service: "Private bathroom",
        },
      ],
      image: secondImg,
    },
    {
      label: "Amenities",
      value: "amenities",
      topic: "Amenities overview",
      services: [
        {
          icon: faWifi,
          service: "Free Wifi",
        },
        {
          icon: faBusinessTime,
          service: "Free parking",
        },
        {
          icon: faClock,
          service: "24-hour front desk",
        },
        {
          icon: faPlaneUp,
          service: "Air conditioning",
        },
        {
          icon: faShower,
          service: "Private bathroom",
        },
        {
          icon: faCertificate,
          service: "Key card access",
        },
      ],
      image: thirdImg,
    },
    {
      label: "Policies",
      value: "policies",
      topic: "Policies overview",
      services: [
        {
          icon: faBusinessTime,
          service: "Free parking",
        },
        {
          icon: faClock,
          service: "24-hour front desk",
        },
        {
          icon: faWifi,
          service: "Free Wifi",
        },
        {
          icon: faPlaneUp,
          service: "Air conditioning",
        },
        {
          icon: faShower,
          service: "Private bathroom",
        },
        {
          icon: faCertificate,
          service: "Key card access",
        },
      ],
      image: forthImg,
    },
  ];

  return (
    <div className="text-start">
      <div className="px-4 lg:px-8 container mx-auto text-start mt-4 cursor-pointer">
        <FontAwesomeIcon icon={faArrowLeft} className="text-xl" />
      </div>
      <div className="px-4 lg:px-8 container mx-auto grid gap-4 grid-cols-1 lg:grid-cols-2 mt-4">
        <div className="w-full h-full">
          <img
            src={firstImg}
            alt="first"
            className="rounded-3xl w-full md:h-full h-[200px]"
          />
        </div>
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2 w-full h-full">
          <img
            src={secondImg}
            alt="second"
            className="rounded-2xl w-full md:h-full h-[200px]"
          />
          <img
            src={thirdImg}
            alt="third"
            className="rounded-2xl w-full md:h-full h-[200px]"
          />
          <img
            src={forthImg}
            alt="forth"
            className="rounded-2xl w-full md:h-full h-[200px]"
          />
          <img
            src={fifthImg}
            alt="fifth"
            className="rounded-2xl w-full md:h-full h-[200px]"
          />
        </div>
      </div>
      <div className="px-4 lg:px-8 container mx-auto mt-4 block md:flex justify-between">
        <div className="text-start">
          <p className="text-2xl text-black font-bold">Hotel Norrebro</p>
          <p className="text-base text-customFontColor">
            3-star hotel located in the heart of Copenhagen
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl text-customGreen font-bold">Excellent</p>
            <p className="text-sm text-customFontColor">1,920 reviews</p>
          </div>
          <div className="bg-customLightGreen rounded-2xl h-[35px] flex items-center justify-center w-[60px] ml-[10px]">
            <p className="text-xl text-customGreen">9.6</p>
          </div>
        </div>
      </div>
      <div className="px-4 lg:px-8 container mx-auto mt-8">
        <Tabs value={activeTab}>
          <TabsHeader
            className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
            indicatorProps={{
              className:
                "bg-transparent border-b-2 border-blue-500 shadow-none rounded-none",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={`max-w-[100px] ${
                  activeTab === value
                    ? "text-blue-500"
                    : "text-customLightFontColor"
                }`}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map((item) => (
              <TabPanel key={item.value} value={item.value}>
                <div className="flex justify-between flex-col-reverse md:flex-row">
                  <div>
                    <p className="text-black text-xl font-bold text-center md:text-start mt-[10px] md:mt-0 mb-[10px] md:mb-[20px]">
                      {item.topic}
                    </p>
                    <div className="grid md:gap-y-2 md:gap-x-8 lg:gap-y-4 lg:gap-x-16 grid-rows-4 grid-flow-col">
                      {item.services.map((eachItem) => {
                        return (
                          <div
                            className="flex items-center"
                            key={eachItem.service}
                          >
                            <FontAwesomeIcon
                              icon={eachItem.icon}
                              color="black"
                            />
                            <p className="text-base text-customFontColor ml-[10px]">
                              {eachItem.service}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex w-[300px] mx-auto h-[200px] md:h-auto md:mx-0">
                    <img
                      src={item.image}
                      alt="tabs"
                      className="w-full h-full rounded-xl"
                    />
                  </div>
                </div>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
      <div className="bg-[#F9F9F9]">
        <div className="px-4 lg:px-8 container mx-auto pb-8">
          <p className="text-2xl text-black font-bold py-8">Rooms</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <Card
              img={firstImg}
              topic="Double Standard room"
              sqm={18}
              people={2}
              bedSize="1 queen bed or 2 sepwnate beds"
              price={180}
            />
            <Card
              img={secondImg}
              topic="Comfot Standard room"
              sqm={12}
              people={2}
              bedSize="1 king size bed"
              price={220}
            />
            <Card
              img={thirdImg}
              topic="Double Standard room"
              sqm={25}
              people={2}
              bedSize="1 king size bed"
              price={250}
            />
            <Card
              img={forthImg}
              topic="Double fancy room"
              sqm={35}
              people={2}
              bedSize="1 king size bed and couch"
              price={280}
            />
          </div>
        </div>
      </div>
      <div className="px-4 lg:px-8 container mx-auto mt-8 mb-10">
        <p className="text-2xl text-black font-bold">Reviews</p>
        <div className="block md:flex mt-[20px]">
          <div className="w-full md:w-[30%]">
            <p className="text-3xl text-[#5086F1]">9.6/10</p>
            <CustomProgress topic="Cleanliness" mark={10} />
            <CustomProgress topic="Amenties" mark={7} />
            <CustomProgress topic="Location" mark={9} />
          </div>
          <div className="md:w-[10%]"></div>
          <div className="w-full mt-[50px] md:mt-0 md:w-[60%]">
            <div className="flex justify-between">
              <div>
                <p className="font-bold">Excellent Value for the price!</p>
                <p className="text-customLightFontColor text-sm">Mark M</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xl text-customGreen font-bold">Excellent</p>
                <div className="bg-customLightGreen rounded-2xl h-[35px] flex items-center justify-center w-[60px] ml-[10px]">
                  <p className="text-xl text-customGreen">10</p>
                </div>
              </div>
            </div>
            <p className="text-customFontColor">
              We enjoyed our stay at this hotel. We will definitely come back!
            </p>
            <div className="flex justify-between mt-[20px]">
              <div>
                <p className="text-sm text-customFontColor">
                  <span className="text-customGreen font-bold mr-[10px]">
                    +
                  </span>
                  Breat location!
                </p>
                <p className="text-sm text-customFontColor">
                  <span className="text-customGreen font-bold mr-[10px]">
                    +
                  </span>
                  Service
                </p>
                <p className="text-sm text-customFontColor">
                  <span className="text-customGreen font-bold mr-[10px]">
                    +
                  </span>
                  Bottle of champagne in the room!
                </p>
              </div>
              <div className="flex flex-row-reverse items-end">
                <p className="text-customLightFontColor text-end text-sm">
                  Reviewed on
                  <br />
                  20 September 2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
