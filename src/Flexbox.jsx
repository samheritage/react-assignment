import React from "react";
import "./Flexbox.css"
function Flexbox ()
    {
        return (
<div className="container_flex">
      {/* <h2>I am learning to use flexbox. This is my first function</h2> */}
     <div className="flex_container">
     <h1 className="tab1">Pursue</h1>
      <h1 className="tab2">Overtake</h1>
      <h1 className="tab3">Recover</h1>
      <h1 className="tab4">All</h1>
     </div>
      
    <div className="grid_container">
      <h1 className="grid1">Love</h1>
      <h1 className="grid2">Joy</h1>
      <h1 className="grid3">Peace</h1>
      <h1 className="grid4">Gentleness</h1>

      <h1 className="grid1">Meekness</h1>
      <h1 className="grid2">Faith</h1>
      <h1 className="grid3">Hope</h1>
      <h1 className="grid4">Kindness</h1>

      <h1 className="grid1">Temperance</h1>
      <h1 className="grid2">Goodness</h1>
      <h1 className="grid3">Wisdom</h1>
      <h1 className="grid4">Understanding</h1>

      <h1 className="grid1">Grace</h1>
      <h1 className="grid2">Mercy</h1>
      <h1 className="grid3">Knowledge</h1>
      <h1 className="grid4">Contentment</h1>
    </div>
</div>
        );
    }

export default Flexbox;