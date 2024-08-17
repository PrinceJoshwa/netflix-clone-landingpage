import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="border-stone-600 py-4 bg-stone-800 hover:bg-stone-700 transition-colors duration-300 mb-2 px-5"
      onClick={toggleAccordion}
    >
      <div className="flex items-center justify-between cursor-pointer">
        <h3 className="text-2xl text-white">{question}</h3>
        <span className="text-5xl text-white">{isOpen ? "×" : "+"}</span>
      </div>
      {isOpen && (
        <div className="mt-2 text-2xl text-white">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  const faqData = [
    {
      question: "What is Netflix?",
      answer:
        "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!.",
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
    },
    {
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      question: "How do I cancel?",
      answer:
        "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime",
    },
    {
      question: "Is Netflix good for kids?",
      answer:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },

  ];

  return (
    <section className="bg-black py-10 px-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          Frequently Asked Questions
        </h2>
        <div>
          {faqData.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <br />
        <h2 className="text-white text-center text-xl">
          Ready to watch? Enter your email to create or restart your membership.
        </h2>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative w-full md:w-80">
            <input
              type="email"
              placeholder=" "
              className="peer bg-transparent border border-white text-white py-3 px-4 rounded-md w-full text-base placeholder-transparent"
            />
            <label
              className="absolute left-4 top-3 text-base text-white transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-400"
              htmlFor="email"
            >
              Enter your email
            </label>
          </div>
          <button className="bg-red-600 text-white py-3 px-6 rounded-md w-full md:w-auto text-lg flex items-center justify-center">
            Get Started
            <AiOutlineRight className="ml-2 text-xl" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Faq;
