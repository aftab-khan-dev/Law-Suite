import React from "react";

const Card = ({ title, subtitle, description, img }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img src={img} alt={title} className="w-full h-70 object-cover" />
    <div className="p-5">
      <span className="text-sm bg-[#FFF9F1] px-2 py-1 mb-1 border rounded-md">
        {subtitle}
      </span>
      <h3 className="text-lg font-bold text-gray-800 mt-2 mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <button className="px-4 py-2 bg-gold hover:bg-yellow-600 text-white font-medium rounded">
        Read More
      </button>
    </div>
  </div>
);

const WhatsNew = () => {
  // Directly define the array within the component
  const cards = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur.",
      subtitle: "Reading Services",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eget leo justo at mauris egestas facilisi. Mattis imperdiet dignissim adipiscing vulputate vel in ultrices nullam.",
      img: "https://via.placeholder.com/300x200/7ec8e3/fff?text=Image+2",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur.",
      subtitle: "Reading Services",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eget leo justo at mauris egestas facilisi. Mattis imperdiet dignissim adipiscing vulputate vel in ultrices nullam.",
      img: "https://via.placeholder.com/300x200/7ec8e3/fff?text=Image+2",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur.",
      subtitle: "Reading Services",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eget leo justo at mauris egestas facilisi. Mattis imperdiet dignissim adipiscing vulputate vel in ultrices nullam.",
      img: "https://via.placeholder.com/300x200/ff9f66/fff?text=Image+3",
    },
  ];

  return (
    <section className="py-10 bg-[#FFF9F1]">
      <div className="max-w-[90rem] mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">What's New?</h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet consectetur. Pellentesque sapien in eu
            id.
          </p>
          <button className="mt-4 px-4 py-2 bg-primary hover:bg-gold text-white font-semibold rounded">
            Visit Knowledge Base
          </button>
        </div>

        <div className="container mx-auto grid md:grid-cols-3 gap-6 px-4">
          {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              img={card.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;
