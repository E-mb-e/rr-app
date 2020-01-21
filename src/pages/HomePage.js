import React from "react";
import Article from "../components/Article";
const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun?",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum corrupti a modi eos in accusantium optio odit necessitatibus? Quia mollitia eligendi tempore ratione accusantium ex veniam corporis quidem enim pariatur?"
  },
  {
    id: 2,
    title: "Czym jest wszechświat?",
    author: "Jan Kowalski",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum corrupti a modi eos in accusantium optio odit necessitatibus? Quia mollitia eligendi tempore ratione accusantium ex veniam corporis quidem enim pariatur?"
  },
  {
    id: 3,
    title: "Ile lat ma kosmos?",
    author: "Nowak Jan",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum corrupti a modi eos in accusantium optio odit necessitatibus? Quia mollitia eligendi tempore ratione accusantium ex veniam corporis quidem enim pariatur?"
  }
];
const HomePage = () => {
  const artList = articles.map(art => <Article key={art.id} {...art} />);
  return <div className="Home"> {artList} </div>;
};

export default HomePage;
