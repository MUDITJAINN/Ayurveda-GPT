import React from "react";
import styles from "../styles/App.module.css";
function AyurvedaBooks() {
  const data = [
    {
      title: "The Ayurvedic Pharmacopoeia Of INDIA",
      author: "Ministry of Family Health And Welfare ,New Delhi",
      img: "book1.png",
      description:
        "Though Ayurveda has under gone many changes in the course of its long history, it still remains the mainstay of medical relief to a large section of population of the nation. Due to urbanization and dwindling of forests, the Vaidya by and large is no longer a self contained unit collecting and preparing his own medicines as before.",
      link: "https://drive.google.com/file/d/1Nt1DNaKjI214ml918b2hrHbYoCrj4dog/view?usp=sharing",
    },
    {
      title: "Materia Medica of Ayurveda",
      author: "Vaidhya Bhagwan Dash",
      img: "book2.png",
      description:
        "This book explains the Every details of Ayurveda in 20 different chapters written by Vaidhya Bhagwan Dash available in English ",
      link: "https://drive.google.com/file/d/1CzHx_IvvNJup6NImp7VqKupbvY4Ctzai/view?usp=sharing",
    },
    {
      title: "Ayurveda Ancient Wisdom for a Modern Lifestyle ",
      author: "Dr. Suhas Kshirsagar",
      img: "book3.png",
      description:
        "In this Book, we’ll delve into the principles of Ayurveda, a Sanskrit word that translates to “the science of life.” We’ll also look at imbalances in the body/mind/spirit and how to use natural methods to gently move them back into balance..",
      link: "https://drive.google.com/file/d/1zN84MeER-BQITMvgP-pDyXLlUXsah3Oz/view?usp=sharing",
    },
    {
      title: "Classical Ayurvedic Prescriptions For Common Diseases",
      author: "Dr M.M Padhi",
      img: "book4.png",
      description:
        "This hand book enriched with multiple prescription option from classical texts, which are freely available in the market being manufactured by various companies and easily adopted by general practitioners in rural and urban India",
      link: "https://lib.iim.cmb.ac.lk/wp-content/uploads/2019/04/Classical-Ayurvedic-Prescriptions-for-common-diseases.pdf",
    },
    {
      title: "Ayurvedic Science Of Food and Nutrition ",
      author: " Sanjeev Rastogi ",
      img: "book5.png",
      description:
        "For centuries Ayurveda has emphasized the role of food in health and disease. Modern medicine started out by basing all its treatments on drug-based principles and focused on specifi c problems rather than on individuals and the food they ate. This book satisfies a long-felt need of many physicians and nutritionists who were aware of the immense knowledge that existed but never knew how to access that information",
      link: "https://lib.iim.cmb.ac.lk/wp-content/uploads/2019/04/Ayurvedic-Science-of-Food-and-Nutrition-PDFDrive.com-.pdf",
    },
    {
      title: "Everyday Ayurveda   ",
      author: " Danny Cavanagh & Carol Willis",
      img: "book6.png",
      description:
        "This book has been compiled to provide a practical help guide to those interested in following a healthy Ayurvedic lifestyle. With complementary therapies and esoteric philosophies becoming much more widely accepted and available in the west many people are interested in finding out more. ",
      link: "https://www.ayurveda.uk.com/s/Ch-1-10-Everyday-Ayurveda-book.pdf",
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
