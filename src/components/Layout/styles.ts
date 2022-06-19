import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  flex-wrap: wrap;
  position: absolute;

  section {
    min-height: 100vh;
    width: 100vw;
  }

  .wrapper-menu {
    width: 40px;
    height: 40px;
    display: none;
    position: absolute;
    z-index: 2;
    top: 1%;
    right: 20px;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: transform 330ms ease-out;

    @media screen and (max-width: 900px) {
      display: flex;
    }
  }

  .wrapper-menu.open {
    transform: rotate(-45deg);
  }

  .line-menu {
    background-color: var(--primary);
    border-radius: 5px;
    width: 100%;
    height: 6px;
  }

  .line-menu.half {
    width: 50%;
  }

  .line-menu.start {
    transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: right;
  }

  .open .line-menu.start {
    transform: rotate(-90deg) translateX(3px);
  }

  .line-menu.end {
    align-self: flex-end;
    transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: left;
  }

  .open .line-menu.end {
    transform: rotate(-90deg) translateX(-3px);
  }

  a.LogoMobile {
    position: absolute;
    top: 1%;
    left: 20px;
    display: none;

    @media screen and (max-width: 900px) {
      display: block;
    }
  }
`;
