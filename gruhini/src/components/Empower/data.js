import React from "react";
import img1 from "../../assets/Bank.png";
import img2 from "../../assets/taxi.png";
import img3 from "../../assets/care.png";
import img4 from  "../../assets/law.png";
import img6 from  "../../assets/schemes.png";
const data={
    cardData: [
        {
            id: 1,
            colorName: "#FFCECA",
            imageUrl: img1,
            question: "Open a Bank Account",
            note: "Start managing your money!",
            buttonColor: "#FA9490"
        },
        {
            id:2,
            colorName: "#BCE6ED",
            imageUrl: img2,
            question: "Book a Cab",
            note: "Blah blah blah",
            buttonColor: "#97C1C8"
        },
        {
            id:3,
            colorName:"#B3C1F0",
            imageUrl:img3,
            question:"The Importance of Sanitation",
            note:"Blah blah blah",
            buttonColor:"#56669D"
        },
        {
            id:4,
            colorName:"#BCE6ED",
            imageUrl:img4,
            question:"Know Your Rights",
            note:"Blah blah blah",
            buttonColor:"97C1C8"
        },
        {
            id:5,
            colorName:"#B3C1F0",
            imageUrl:img1,
            question:"Laws Against Sexual Harassment",
            note:"Blah blah blah",
            buttonColor:"#56669D"
        },
        {
            id:6,
            colorName:"#FFCECA",
            imageUrl:img6,
            question:"Government Schemes for Rural Women in India",
            note:"Blah blah blah",
            buttonColor:"#FA9490"
        }
    ]
}
export default data;