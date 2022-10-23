import React from "react";
import { Button } from "react-bootstrap";
import Particle from "./Particle";
import SwiperCore, { EffectCreative, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([EffectCreative, Pagination, Navigation]);

const Projects = () => {
  return (
    <>
      <div>
        <div
          className="paragraph"
          style={{ marginBottom: "-10px", fontSize: "32px" }}
        >
          Top Eats
        </div>
        <Swiper
          effect={"creative"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[EffectCreative]}
          navigation={true}
          loop={true}
          className="swiper"
        >
          <SwiperSlide className="swiper-slide">
            <img className="swiper-image" src="/Images/top_eats_2.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img className="swiper-image" src="Images/top_eats_3.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img className="swiper-image" src="Images/top_eats_4.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img className="swiper-image" src="Images/top_eats_5.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img className="swiper-image" src="Images/top_eats_6.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img className="swiper-image" src="Images/top_eats_7.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img className="swiper-image" src="Images/top_eats_8.png" alt="" />
          </SwiperSlide>
        </Swiper>
        <div
          className="paragraph"
          style={{ marginTop: "10px", fontSize: "24px", marginBottom: "10px" }}
        >
          React/CSS/Node.js/Express/MongoDB
        </div>
        <div
          className="paragraph"
          style={{
            fontSize: "18px",
            width: "750px",
            margin: "auto",
            marginBottom: "10px",
          }}
        >
          Top Eats is a full-stack application that allows the user to discover
          their new favorite restaurants! This application will show you
          restaurants that match your cuisine preferences and location, as well
          as reviews and ratings left by other users. If the user creates an
          account (not required), reviews and ratings can be left for others to
          view. This application utilizes the Yelp API to get the list of
          restaurants based on the user's search parameters. The application
          utilizes local storage so that if a user closes the tab or window and
          returns, the user will still remain logged into their account. There
          are email and password requirements that the user must follow in order
          for an account to be created using form validation.
        </div>
        <Button variant="success" href="http://18.233.97.130/">
          Visit Website
        </Button>
        <div
          className="paragraph"
          style={{
            marginBottom: "-20px",
            marginTop: "50px",
            fontSize: "32px",
          }}
        >
          Online Store
        </div>
        <Swiper
          effect={"creative"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[EffectCreative]}
          navigation={true}
          loop={true}
          className="swiper"
        >
          <SwiperSlide className="swiper-slide">
            <img
              className="swiper-image"
              src="Images/online_store_9.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              className="swiper-image"
              src="Images/online_store_4.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              className="swiper-image"
              src="Images/online_store_3.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              className="swiper-image"
              src="Images/online_store_5.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              className="swiper-image"
              src="Images/online_store_1.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              className="swiper-image"
              src="Images/online_store_8.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              className="swiper-image"
              src="Images/online_store_7.png"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
        <div
          className="paragraph"
          style={{ marginTop: "10px", fontSize: "24px", marginBottom: "10px" }}
        >
          React/CSS/Node.js/Express/MongoDB
        </div>
        <div
          className="paragraph"
          style={{
            fontSize: "18px",
            width: "750px",
            margin: "auto",
            marginBottom: "10px",
          }}
        >
          This React built online store allows the user to shop for items, add
          the items to their cart, and checkout just like you would on Amazon or
          any other online store. This application uses form validation for the
          order forms and once the order has been place, it gets sent to the
          database and gives the user a confirmation of their order. Users are
          also able to filter by category or sort the items by price from high
          to low or low to high. Users can also utilize the search feature if
          they would like to search for a particular item in the store.
          International users are able to swap the currency of the entire store
          to Euros for an enhanced user experience!
        </div>
        <Button
          variant="success"
          href="https://github.com/KenzieAcademy-Students/kenziecart-app-jbarone96"
        >
          View Code on GitHub
        </Button>
        <div
          className="paragraph"
          style={{
            marginBottom: "-20px",
            marginTop: "50px",
            fontSize: "32px",
          }}
        >
          Connect Four
        </div>
        <Swiper
          effect={"creative"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[EffectCreative]}
          navigation={true}
          loop={true}
          className="swiper"
        >
          <SwiperSlide className="swiper-slide">
            <img
              className="swiper-image"
              style={{
                scale: "0.6",
                height: "650px",
                width: "600px",
                marginTop: "-125px",
              }}
              src="Images/connect_four_1.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              className="swiper-image"
              style={{
                scale: "0.6",
                height: "650px",
                width: "600px",
                marginTop: "-125px",
              }}
              src="Images/connect_four_3.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              className="swiper-image"
              style={{
                scale: "0.6",
                height: "650px",
                width: "600px",
                marginTop: "-125px",
              }}
              src="Images/connect_four_2.png"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
        <div
          className="paragraph"
          style={{ marginTop: "10px", fontSize: "24px", marginBottom: "10px" }}
        >
          JavaScript/CSS/HTML
        </div>
        <div
          className="paragraph"
          style={{
            fontSize: "18px",
            width: "750px",
            margin: "auto",
            marginBottom: "10px",
          }}
        >
          A classic game of Connect Four! Built exclusively using JavaScript and
          HTML/CSS to create a replica of the game Connect Four. Created logical
          functions to determine when a game has been won or tied as well as
          allowing the play disks to stack instead of overlapping when placed
          into a column.
        </div>
        <Button
          variant="success"
          href="https://github.com/KenzieAcademy-Students/teamwork-assessment-connect-four-jbarone96"
          style={{ marginBottom: "100px" }}
        >
          View Code on Github
        </Button>
        <Particle />
      </div>
    </>
  );
};

export default Projects;
