import React from "react";
import styled from "styled-components";

const Welcome = () => {
  return (
    <>
      <WelcomeNav>
        <a
          target="_blank"
          href="https://www.socialwell.net"
          className="welcome__goto-btn"
          rel="noreferrer"
        >
          <img src="/socialwell-logo.png" alt="Go to Socialwell Website" />
        </a>
      </WelcomeNav>
      <WelcomeWrapper>
        <div className="welcome__content">
          <h1 className="welcome__content__title">
            Welcome to the Socialwell Design System
          </h1>
          <p className="welcome__content__text">
            This is a comprehensive set of design guidelines and tools that help
            us create a consistent, cohesive, and user-friendly experience
            across all of our digital products. From typography to color
            palette, layout to iconography, our design system has it all.
          </p>
          <p className="welcome__content__text">
            By following these guidelines and using the tools provided, we can
            ensure that our products are easy to use and navigate for our users.
            We believe that by creating a consistent look and feel, we can
            improve the user experience and strengthen our brand identity.
          </p>
          <p className="welcome__content__text">
            Thank you for taking the time to learn about the Socialwell Design
            System. We hope you find it useful in creating beautiful and
            functional designs for our products.
          </p>
        </div>
      </WelcomeWrapper>
    </>
  );
};

const WelcomeNav = styled.div`
  width: 100%;

  img {
    width: 150px;
    cursor: pointer;
  }
`;

const WelcomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;

  .welcome__content {
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 16px;

    &__title {
      text-align: center;
    }

    &__text {
    }
  }

  .welcome__goto-btn {
    button {
      padding: 8px 16px;
      background-color: #fe9737;
      border: none;
      border-radius: 5px;
      color: white;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;

export default Welcome;
