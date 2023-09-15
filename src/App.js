import React from "react";
import Card from '../src/Components/Card'
import Navbar from "../src/Components/Navbar";


function App() {

  const images1 = [
    require('./Images/office1.jpg'), 
    require('./Images/office2.jpg'),
    require('./Images/office3.jpg'),
  ]; 
  const images2 = [
    require('./Images/Python2.jpg'), 
    require('./Images/Python1.jpg'),
    require('./Images/Python3.jpg'),
  ]; 

  return (
    <div className="w-full flex flex-col px-6 gap-8 bg-[#212428]">
      <Navbar/>
      <div className="max-w-[1240px] mx-auto">
        <div className="flex justify-between gap-4 p-4">
          {images1.map((image, index) => (
            <Card key={index} image={image} title={"Social MEdia"} des={"Lorem ipsum dolor sit amet consecetur adipiscing elit. Atque soulta hic consequntur eum repellendus ad"}/>
          ))}
        </div>
        <div className="flex justify-between gap-4 p-4 mt-0">
          {images2.map((image, index) => (
              <Card key={index} image={image} />
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default App;
