import React from "react";
import {FaCheckSquare} from "react-icons/fa";
import {FaPenSquare} from "react-icons/fa";
import {FaStar} from "react-icons/fa";


function Features() {
    return (
        <section className="features">
            <div className="homepage-features">
                <p className="features-p">
                    {" "}
                    <span>
                        <FaCheckSquare className="features-check"/>
                    </span>
                    Create your grocery list for each categories
                </p>
                <p className="features-p">
                    <span>
                        <FaPenSquare  className="features-update"/>
                    </span>
                    Create notes update price and weight to your each gorcery item's categories
                </p>
                <p className="features-p">
                    <span>
                        <FaStar className="features-start" />
                    </span>
                    View your gorcery list over time and see how much you spend for each category's item. you can also use same grocery list for future shopping. 

                </p>

            </div>
        </section>
    )
}



export default Features;