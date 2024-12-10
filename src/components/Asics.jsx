import React from 'react';

const Asics = () => {
  return (
    <main className="asics">
      {/* Main Content */}
      <div className="asics-content">
        <h1>LITE-SHOW™ COLLECTION</h1>
        <p>
          ADD REFLECTIVITY TO EVERY STEP.<br/>
          MOVE FROM FEELING VISIBLE TO VIBRANT<br/>
          AND MOVE YOUR MIND WITH ASICS.
        </p>

        <div className='asics-btn'>
            <button> Shop Now</button>
            <button className='s-btn'>Category</button>
        </div>

        <div className='shopping'>
         <p>Also Available On</p>
        </div>

        <div className="shopping-links">
          <img
            src="https://i.pinimg.com/736x/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.jpg"
            alt="Flipkart"
            width="90"
            height="90"
          />
          <img
            src="https://i.pinimg.com/originals/0a/06/60/0a06600cc3cedeb49280b54114c88ce6.png"
            alt="Amazon"
            width="100"
            height="80"
          />
       
        </div>
      </div>

      {/* Shoe Image */}
      <div className="img">
        <img
          src="https://runpacers.com/cdn/shop/files/Mens-ASICS-GEL-Nimbus-25_d34b719e-e72c-4a90-b768-0003e90d1cf5.jpg?v=1683816245"
          alt="ASICS Shoes"
          width="750"
          height="800" 
        />
      </div>
    </main>
  );
};

export default Asics;
