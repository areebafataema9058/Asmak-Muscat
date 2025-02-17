import img1 from "../assets/images/Homeimg1.jpg";
import img2 from "../assets/images/homeimg2.jpg";
import img3 from "../assets/images/Homeimg3.jpg";
import img4 from "../assets/images/Homeimg4.jpg";
import '../css/AdvantageCards.css'
const AdvantageCards = () => {
  const data = [
    {
      id: 1,
      image: img1,
      title: "Responsibly Sourced",
      description:
        "Responsibly-sourced seafood is the key to the modern, safe and profitable seafood industry.",
    },
    {
      id: 2,
      image: img2,
      title: "Environment",
      description:
        "The seafood industry has a concern over climate impact, and takes responsibility in any case.",
    },
    {
      id: 3,
      image: img3,
      title: "Staff",
      description:
        "Our experts work hard to maintain the quality seafood for our dear customers exclusively.",
    },
    {
      id: 4,
      image: img4,
      title: "Marketplace",
      description:
        "Your business becomes beneficial by providing the customers with the best.",
    },
  ];

  return (
    <>
      {/* Heading Section */}
      <div className="heading-section">
        <h1>Our Advantages</h1>
      </div>

      {/* Cards Section */}
      <div className="main-cards container">
        {data.map((card) => {
          return (
            <div className="card" key={card.id}>
              <img src={card.image} className="card-img-top" alt={card.title} />
              <div className="card-body">
                <h4 className="card-title">{card.title}</h4>
                <p className="card-text">{card.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Paragraph Section */}
      <div className="description-section container mt-5">
        <div className="paragraph-heading">
          <h1>Seafood Excellence Since Inception</h1>
        </div>
        <p className="description-text">
          At our company, we take immense pride in offering the best seafood
          products that combine quality, sustainability, and exceptional taste.
          Our dedicated team ensures every product is responsibly sourced,
          environmentally friendly, and crafted to perfection. Whether you’re a
          customer seeking premium seafood or a business looking to enhance your
          offerings, our commitment to excellence guarantees satisfaction every
          step of the way. Our decades-long expertise has established us as a
          trusted name in the industry, delivering only the finest to our
          clients.
        </p>
        <p className="description-text">
          From ocean to table, every step is meticulously monitored to meet our
          rigorous quality standards. We value innovation, which is why we
          constantly adapt to new technologies and practices for sustainable
          fishing. Our passion for seafood transcends business—it’s a
          responsibility to the environment and the communities we serve. By
          choosing us, you’re not just selecting superior products; you’re
          supporting a vision of sustainability and excellence. Together, we aim
          to create a healthier, more sustainable future for seafood lovers
          everywhere.
        </p>
        <img
          src="https://www.asmakmct.com/assets/aboutnew-Bj6uKGXw.jpg"
          alt=""
        />
      </div>
    </>
  );
};

export default AdvantageCards;
