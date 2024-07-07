import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to "Anon E-commerce Shop" – Your Ultimate Destination for Men's Fashion and Lifestyle.At Anon E-commerce Shop, we pride ourselves on being the go-to online destination for all things men's fashion and lifestyle. From the latest trends in clothing to essential accessories and grooming products, we curate a diverse and stylish collection that caters exclusively to the modern man.Whether you're revamping your wardrobe or searching for the perfect gift, Anon E-commerce Shop is your one-stop destination for all things men's fashion. Join us on this style journey and redefine your fashion statement with the latest and finest collections curated exclusively for you.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;