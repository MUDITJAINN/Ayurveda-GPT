import React from "react";
import styles from "../styles/App.module.css";
function AyurvedaBooks() {
  const data = [
    {
      title: "Ayurveda and the Mind by",
      author: "Dr. David Frawley",
      img: "ayuim1.jpg",
      description:
        "After Vasant Lad, David Frawley is seen as one of the most knowledgeable Western experts on Ayurveda. This book takes a more in-depth look at Ayurveda and focuses on the physical, mental and emotional elements of it.",
      link: "https://www.amazon.in/Ayurveda-Mind-Consciousness-David-Frawley/dp/812082010X",
    },
    {
      title: "Ayurveda and Marma Therapy",
      author: "Dr. David Frawley, Dr. Subhash Ranade and Dr. Avinash Lele",
      img: "ayuimg2.jpg",
      description:
        "For those who have a background in massage or acupuncture, or a strong interest in how the body responds to physical touch, this is a wonderful book to use for self-care and also when helping others",
      link: "https://www.amazon.in/Ayurveda-Marma-Therapy-Energy-Healing/dp/0940985594",
    },
    {
      title: "The Everyday Ayurveda Cookbook ",
      author: "Kate O’Donnell",
      img: "ayuim3.jpg",
      description:
        "There are a growing number of Ayurvedic recipe books available these days, and this one is particularly easy to follow and understand, as it has a strong Western influence.",
      link: "https://www.amazon.in/Everyday-Ayurveda-Cookbook-Seasonal-Eating/dp/1611802296",
    },
    {
      title: "The Complete Book of Ayurvedic Home Remedies:",
      author: "Vasant Lad",
      img: "ayuim4.jpg",
      description:
        "A detailed and thorough book, including diet and lifestyle guidelines, as well as seasonal advice. Tips are given to suit each person’s dosha (mind and body type), and a large portion of the book is dedicated to the Illnesses and Remedies A-Z section",
      link: "https://www.amazon.in/Complete-Book-Ayurvedic-Home-Remedies/dp/0749927658",
    },
    {
      title: "Practical Ayurveda ",
      author: " Sivananda Yoga Vedanta Centre",
      img: "ayuim5.jpg",
      description:
        "Discover your Ayurvedic body type through a simple self-assessment questionnaire, and how to apply ayurvedic practises to elements of any lifestyle. Whether it's adjusting your diet to suit your body type; energising your body through yoga; or relaxing your mind with meditation and positive thinking exercises, this all-encompassing health book has something for everyone to love.",
      link: "https://www.amazon.in/Practical-Ayurveda-Find-Bring-Balance/dp/0241302129",
    },
    {
      title: "Everyday Ayurveda  ",
      author: " Dr Bhaswati Bhattacharya",
      img: "ayuim6.jpg",
      description:
        "Taking us through a day in the life of Ayurveda living, Dr Bhaswati Bhattacharya illustrates the core principles of Ayurveda and shows us how to incorporate these in our routine. She explains the logic behind the changes she recommends and how they benefit us. Informative and accessible, Everyday Ayurveda is the perfect lifestyle",
      link: "https://www.amazon.in/Everyday-Ayurveda-Daily-Habits-Change/dp/8184004575",
    },
  ];
  return (
    <div>
      <div className={styles["books-container"]}>
        {data.map((book) => (
          <div className={styles["book-container"]}>
            <div>
              <h1>{book.title}</h1>
              <img src={book.img} alt="book" width={100} height={100} />
              <h2>Author:{book.author}</h2>
              <p>{book.description}</p>
            </div>
            <div>
              <button className={styles["book-button"]}>
                <a href={book.link} target="_blank" rel="noreferrer">
                  Explore
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AyurvedaBooks;
