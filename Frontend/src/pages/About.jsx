import React from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Card } from "@/components/ui/card";


import { FaFacebook } from "react-icons/fa6";


const About = () => {
  const [rating, setRating] = useState([
    {
      heading: "15K ",
      desc: "Happy Customer",
      id: "1",
    },
    {
      heading: "150K",
      desc: "Monthly Visitors",
      id: "2",
    },
    {
      heading: "15",
      desc: "Countries Worldwide",
      id: "3",
    },
    {
      heading: "100+",
      desc: "Top Partners",
      id: "4",
    },
  ]);
  const [cards, setCards] = useState([
    {
        id:"one",
        name:"Fahad",
        profession:"Developer",
        Image:"data:image/jpeg;base64,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"
    },
    {
        id:"two",
        name:"Fahad",
        profession:"Developer",
        Image:""
    },
    {
        id:"three",
        name:"Fahad",
        profession:"Developer",
        Image:""
    },
  ])
  return (
    <>
      <section className="w-full h-auto  px-50  ">
        {/* Hero section Container */}
        <div className="flex justify-between my-20 gap-5    items-center">
          <div className="flex flex-col gap-10 max-w-92">
            <div>
              <p className="font-semibold mb-5">ABOUT COMPANY</p>
            </div>
            <div>
              <h1 className="text-5xl font-bold">ABOUT US</h1>
            </div>
            <div>
              <p className="text-gray-600 font-light">
                We know how large objects will act , But things on a small scale
              </p>
            </div>
            <div>
              <Button className="bg-blue-900 text-white py-4 text-sm font-light">
                Get quote now
              </Button>
            </div>
          </div>
          <div>
            <img
              className="rounded-lg"
              width={600}
              height={300}
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
        </div>
        <hr />
        {/* Hero section Container */}
        {/* Below Hero Section */}

        <div className="flex flex-col  my-20 gap-15">
          <div className="flex  gap-20 ">
            <div className="flex flex-col gap-5 max-w-sm">
              <span>
                <h3 className="text-red-500">Problems trying</h3>
              </span>
              <span>
                <p className="font-bold text-2xl">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent.
                </p>
              </span>
            </div>
            <div className=" text-left">
              <p className="text-gray-600 font-light text-lg pt-13">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics and this
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            {rating.map((ratings) => {
              return (
                <div key={ratings.id} className="text-center">
                  <h1 className="text-5xl font-bold">{ratings.heading}</h1>
                  <p className="text-xl text-gray-600">{ratings.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
        <hr />
        {/* Below Hero Section */}

        {/* Team Section */}
        <div className="flex flex-col my-20 text-center  justify-center gap-10  ">
          <div className="text-center flex flex-col max-w-xl mx-auto">
            <h1 className="text-4xl font-bold  ">Meet Our Team</h1>
            <p className="text-gray-600">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>

          <div className="flex justify-around">
            {cards.map((card)=>{
                return (  <Card key={card.id} className="h-92 w-80 py-0 rounded-lg ">
                    <div>
                      <img
                        className="rounded-lg h-50 w-full"
                        src="womenIcon"
                        alt=""
                      />
                    </div>
                    <div>
                      <span>
                        <h1>{card.name}</h1>
                      </span>
                      <span>
                        {" "}
                        <p className="text-gray-600 text-sm">{card.profession}</p>
                      </span>
                      <div className="flex justify-center items-center gap-3 mt-5">
                      <FaFacebook className="h-5  " />
                      <FaFacebook className="h-5 " />
                      <FaFacebook className="h-5 " />
                      </div>
                    </div>
                  </Card>)
            })}
          
          </div>
        </div>
        {/* Team Section */}
      </section>
    </>
  );
};

export default About;
