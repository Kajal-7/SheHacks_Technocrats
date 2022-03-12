import React from "react";
import img1 from "../../assets/Bank.png";
import img2 from "../../assets/taxi.png";
import img3 from "../../assets/care.png";
import img4 from "../../assets/law.png";
import img6 from "../../assets/schemes.png";
const data = {
  cardData: [
    {
      id: 1,
      colorName: "#FFCECA",
      imageUrl: img1,
      question: "Open a Bank Account",
      note: "Start managing your money!",
      buttonColor: "#FA9490",
      instructions: [
        {
          subheading: "Choose a bank:",
          text: "You can choose a bank based on the services they offer which other banks might not provide.",
        },
        {
          subheading: "Visit the bank or its website:",
          text: "Once you have decided upon the bank, you may visit the bank during the banking hours along with your identification documents and initial deposit, to open the account. However, you can also open your account online by visiting the bank’s website, which you can do at any time and from anywhere.",
        },
        {
          subheading: "Choose your banking product:",
          text: "A bank account offers various types of accounts and services which you can choose to suit your needs. For example, you may choose a savings bank account for the basic banking need or a current account in case you have a business.",
        },
        {
          subheading: " Documents required:",
          text: "To fill up the form, you will need to submit the following documents.",
        },
      ],

      //  - Photograph
      //  - KYC (Know Your Customer) details:
      //  -- Identity proof: PAN Card/ Passport/ Aadhar Card
      //  -- Address proof: Passport/ Ration Card/ Voter ID Card/ Aadhar Card
      //   Agree to terms and conditions: Before you put your signature, it’s very important to read all the terms and conditions very carefully and you can contact the concerned person in case of any doubt. Most of the banks fill the entire form on your behalf and you just need to submit your documents and put in your signature after reading all the terms and conditions.
      //   `,
      video: "https://www.youtube.com/embed/uGs6CSlkc8Q",
    },
    {
      id: 2,
      colorName: "#BCE6ED",
      imageUrl: img2,
      question: "Book a Cab",
      note: "Blah blah blah",
      buttonColor: "#97C1C8",
      instructions: [
        {
          subheading: "Choose a bank:",
          text: "You can choose a bank based on the services they offer which other banks might not provide.",
        },
        {
          subheading: "Visit the bank or its website:",
          text: "Once you have decided upon the bank, you may visit the bank during the banking hours along with your identification documents and initial deposit, to open the account. However, you can also open your account online by visiting the bank’s website, which you can do at any time and from anywhere.",
        },
        {
          subheading: "Choose your banking product:",
          text: "A bank account offers various types of accounts and services which you can choose to suit your needs. For example, you may choose a savings bank account for the basic banking need or a current account in case you have a business.",
        },
        {
          subheading: " Documents required:",
          text: "To fill up the form, you will need to submit the following documents.",
        },
      ],
      video: "https://www.youtube.com/embed/xyQgptuIcpw",
    },
    {
      id: 3,
      colorName: "#B3C1F0",
      imageUrl: img3,
      question: "The Importance of Sanitation",
      note: "Blah blah blah",
      buttonColor: "#56669D",
      instructions: [
        {
          subheading: "Choose a bank:",
          text: "You can choose a bank based on the services they offer which other banks might not provide.",
        },
        {
          subheading: "Visit the bank or its website:",
          text: "Once you have decided upon the bank, you may visit the bank during the banking hours along with your identification documents and initial deposit, to open the account. However, you can also open your account online by visiting the bank’s website, which you can do at any time and from anywhere.",
        },
        {
          subheading: "Choose your banking product:",
          text: "A bank account offers various types of accounts and services which you can choose to suit your needs. For example, you may choose a savings bank account for the basic banking need or a current account in case you have a business.",
        },
        {
          subheading: " Documents required:",
          text: "To fill up the form, you will need to submit the following documents.",
        },
      ],
      video: "https://www.youtube.com/embed/enwFDCW18Eg",
    },
    {
      id: 4,
      colorName: "#BCE6ED",
      imageUrl: img4,
      question: "Know Your Rights",
      note: "Blah blah blah",
      buttonColor: "#97C1C8",
      instructions: [
        {
          subheading: "Choose a bank:",
          text: "You can choose a bank based on the services they offer which other banks might not provide.",
        },
        {
          subheading: "Visit the bank or its website:",
          text: "Once you have decided upon the bank, you may visit the bank during the banking hours along with your identification documents and initial deposit, to open the account. However, you can also open your account online by visiting the bank’s website, which you can do at any time and from anywhere.",
        },
        {
          subheading: "Choose your banking product:",
          text: "A bank account offers various types of accounts and services which you can choose to suit your needs. For example, you may choose a savings bank account for the basic banking need or a current account in case you have a business.",
        },
        {
          subheading: " Documents required:",
          text: "To fill up the form, you will need to submit the following documents.",
        },
      ],
      video: "https://www.youtube.com/embed/ftOITIQLL8k",
    },
    {
      id: 5,
      colorName: "#B3C1F0",
      imageUrl: img1,
      question: "Laws Against Sexual Harassment",
      note: "Blah blah blah",
      buttonColor: "#56669D",
      instructions: [
        {
          subheading: "Choose a bank:",
          text: "You can choose a bank based on the services they offer which other banks might not provide.",
        },
        {
          subheading: "Visit the bank or its website:",
          text: "Once you have decided upon the bank, you may visit the bank during the banking hours along with your identification documents and initial deposit, to open the account. However, you can also open your account online by visiting the bank’s website, which you can do at any time and from anywhere.",
        },
        {
          subheading: "Choose your banking product:",
          text: "A bank account offers various types of accounts and services which you can choose to suit your needs. For example, you may choose a savings bank account for the basic banking need or a current account in case you have a business.",
        },
        {
          subheading: " Documents required:",
          text: "To fill up the form, you will need to submit the following documents.",
        },
      ],
      video: "https://www.youtube.com/embed/Us1yUlAkatY?start=27",
    },
    {
      id: 6,
      colorName: "#FFCECA",
      imageUrl: img6,
      question: "Government Schemes for Rural Women in India",
      note: "Blah blah blah",
      buttonColor: "#FA9490",
      instructions: [
        {
          subheading: "Choose a bank:",
          text: "You can choose a bank based on the services they offer which other banks might not provide.",
        },
        {
          subheading: "Visit the bank or its website:",
          text: "Once you have decided upon the bank, you may visit the bank during the banking hours along with your identification documents and initial deposit, to open the account. However, you can also open your account online by visiting the bank’s website, which you can do at any time and from anywhere.",
        },
        {
          subheading: "Choose your banking product:",
          text: "A bank account offers various types of accounts and services which you can choose to suit your needs. For example, you may choose a savings bank account for the basic banking need or a current account in case you have a business.",
        },
        {
          subheading: " Documents required:",
          text: "To fill up the form, you will need to submit the following documents.",
        },
      ],
      video: "https://www.youtube.com/embed/OsoRhfIB-jI",
    },
  ],
};
export default data;
