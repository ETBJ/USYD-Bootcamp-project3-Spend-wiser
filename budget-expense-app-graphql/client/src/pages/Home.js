import React from "react";
const Home = (props) => {
  return (
    <div className="homePage">
      <div
        className="container-fluid"
        style={{
          backgroundImage: ` url("https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          backgroundSize: "cover",
          height: "98vh",
        }}
      >
        <div class="mind">
          <div class="inner-div">
            <h4>Let's Practice Budgeting</h4>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
