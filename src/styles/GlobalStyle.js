import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    /**  COLORS  **/
    --black: #000000;
    --background: #fafafa;
    --white: #f1f1f1;

    --body-color: --black;
    --pink: #ce4c6e;
    --blue: #3c80a3;
    --blue-rgb: 60, 128, 163;
    --purple: #784970;
    --purple-rgb: 120, 73, 112;
    --green: #51a689;
    --green-rgb: 81, 166, 137;

    --body-font-size: 1.5rem;
    --body-font-size-mobile: 1.25rem;
    --body-font: 'Josefin Sans', sans-serif;
    --header-font: 'Spirax', cursive;
  }

  * {
    box-sizing: border-box;
    margin: 0;
  }

  html {
    /* width: 100vw;
    position: relative;
    overflow-x: hidden; */
    background-color: var(--background);
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: var(--blue) var(--background);
  }

  body {
    font-family: var(--body-font);
    font-size: var(--body-font-size);
    background-color: var(--background);
    @media (max-width: 575px) {
      font-size: var(--body-font-size-mobile)
    }
  }

  /* Scrollbar Styles */
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: var(--background);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--blue) ;
    border-radius: 6px;
    border: 3px solid var(--background);
  }
  img {
    max-width: 100%;
  }
  input, textarea {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  }
  [type="checkbox"], [type="radio"] {
    box-shadow: none;
  }
  .link {
    cursor: pointer;
  }

  p { 
    margin: 10px 0;
    line-height: 2rem;
  }
  ul {
    display: block;
    list-style-type: none;
    padding: 0;
    li { 
      padding: 5px 0; 
      line-height: 2rem;
    }
  }

  a, a:hover, a:active, a:focus {    
    text-decoration: none; 
    color: inherit;
    overflow-wrap: anywhere;
  }
  a.slide-in {
    box-shadow: inset 0 0 0 0 var(--green);
    padding: 0 .25rem;
    margin: 0 -.25rem;
    transition: color .35s ease-in-out, box-shadow .35s ease-in-out;
    
    &:hover {
      color: var(--white);
      box-shadow: inset 100vw 0 0 0 var(--green);
      &.green {
        color: var(--white);
      }
    }
  }

  .pink { color: var(--pink); }
  .blue { color: var(--blue); }
  .purple { color: var(--purple); }
  .green { color: var(--green); }
  
  /* Container for flexboxes */
  section { 
    /******************/
    /*     HEADER     */
    /******************/
    /* Style the header */
    .section-header {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      /* font-family: 'Spirax', cursive; */
      font-family: var(--header-font);
      font-size: var(--body-font-size);
      color: var(--white);
      padding: 15px 20px 0;
      margin-bottom: 0;
      @media (max-width: 575px) {
        font-size: var(--body-font-size-mobile);
      }

      h2 { margin: 0; }
      .icon {
        margin: 0 1rem 0 0;
        width: 2.5rem;
        font-size: 2.5rem;
      }
    }
    /* Header colours */
    .section-1 { background-color: var(--pink); }
    .section-2 { background-color: var(--blue); }
    .section-3 { background-color: var(--purple); }
    .section-4 { background-color: var(--green); }

    /* Slanted Divs */
    .slanted {
      padding-top: 0;
      margin-top: 0;
      border-bottom: 70px solid transparent;
    }
    .slanted-1 { border-left: 98vw solid var(--pink); }
    .slanted-2 { border-right: 98vw solid var(--blue); }
    .slanted-3 { border-left: 98vw solid var(--purple); }
    .slanted-4 { border-right: 98vw solid var(--green); }

    .section-wrapper {
      margin: 0 auto;
      max-width: 1200px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      /* Style the content */
      > div {
        width: 100%;
        padding: 20px 50px;
        p { 
          display: flex;
          align-items: center;
        }
        .icon-marker { 
          padding-right: 10px; 
          font-size: 1.25rem;
          margin: 0;
          min-width: fit-content;
        }
        .social-links {
          color: var(--green);
          font-weight: bold;
        }
      }

     /* BUTTONS */
    .btn-holder {
      display: flex;
      justify-content: center;
      align-items: center;
    }
.btn {
  margin: 0;
  padding: 12px 16px;
  height: 2em;
  font-family: inherit;
  font-size: 1em;
  letter-spacing: 1px;
  font-weight: 400;
  border: none;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;
  position: relative;
  &.blue-btn { 
    color: var(--white);
    background-color: rgba(var(--blue-rgb), 0.9); 
  }
  &.green-btn {
    color: var(--white);
    background-color: rgba(var(--green-rgb), 0.9);

  }
  &:hover {
    /* box-shadow: inset 100vw 0 0 0 var(--white); */
  }


  &.icon-btn {
    align-self: center; 
    /*text-align: center;*/
    margin: 10px 0 15px 0; 
    border-radius: .5em;

    text-align: center;
    display: inline-block;
    position: relative;
    text-decoration: none;
    overflow: hidden;
    min-width: 200px;
    max-width: fit-content;

    transition: all 0.2s linear 0s;
  
    &:before {
      content: "";
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      right: -30px;
      width: 20px;
      height: 100%;
      transition: all 0.2s linear 0s;
      text-align: center;
    }
    
    &:hover {
      text-indent: -40px;
      
      &:before {
        right: 18px;
        text-indent: 0px;
      }
    }


  }
}





.hide {
  display: none;
}

    }
  }
`;

export default GlobalStyle;
