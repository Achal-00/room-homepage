import { useState } from "react";
function GridTwo() {
  // eslint-disable-next-line no-restricted-globals
  const size = screen.width;
  const [carouselState, setCarouselState] = useState(1);

  function leftSlide() {
    if (carouselState === 1) {
      setCarouselState(3);
    } else {
      setCarouselState(carouselState - 1);
    }
  }

  function rightSlide() {
    if (carouselState === 3) {
      setCarouselState(1);
    } else {
      setCarouselState(carouselState + 1);
    }
  }

  if (size >= 280 && size <= 1024) {
    return (
      <div className="grid-two">
        <h1>Discover innovative ways to decorate</h1>
        <p>
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <div>
          <h4>SHOP NOW</h4>
          <img src="./images/icon-arrow.svg" alt="arrow icon" />
        </div>
      </div>
    );
  } else {
    setTimeout(() => {
      if (carouselState === 1) {
        document.querySelector(
          ".grid-one"
        ).style.backgroundImage = `url("./images/desktop-image-hero-1.jpg")`;
        document.querySelector(".grid-two h1").textContent =
          "Discover innovative ways to decorate";
        document.querySelector(
          ".grid-two p"
        ).textContent = `We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our collection
          and make your property a reflection of you and what you love.`;
      } else if (carouselState === 2) {
        document.querySelector(
          ".grid-one"
        ).style.backgroundImage = `url("./images/desktop-image-hero-2.jpg")`;
        document.querySelector(".grid-two h1").textContent =
          "We are available all across the globe";
        document.querySelector(
          ".grid-two p"
        ).textContent = `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`;
      } else {
        document.querySelector(
          ".grid-one"
        ).style.backgroundImage = `url("./images/desktop-image-hero-3.jpg")`;
        document.querySelector(".grid-two h1").textContent =
          "Manufactured with the best materials";
        document.querySelector(
          ".grid-two p"
        ).textContent = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`;
      }
    }, 500);

    return (
      <div className="grid-two">
      <span className="carousel">
          <img
            src="images/icon-angle-left.svg"
            alt="left slide"
            onClick={leftSlide}
          />
          <img
            src="images/icon-angle-right.svg"
            alt="right slide"
            onClick={rightSlide}
          />
        </span>
        <h1>Discover innovative ways to decorate</h1>
        <p>
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <div>
          <h4>SHOP NOW</h4>
          <img src="./images/icon-arrow.svg" alt="arrow icon" />
        </div>
      </div>
    );
  }
}

export default GridTwo;
