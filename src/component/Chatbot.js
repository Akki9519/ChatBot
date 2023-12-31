import React, { useState, useEffect } from "react";
import Image from "../assets/preview.jpg";
import ClearIcon from "@mui/icons-material/Clear";
const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [show, setShow] = useState(false);

  const questions = [
    "Heyyy!!!, How can i assist You?",
    "For that, You must need to answer some Question....",
    "Tell me your Name?",
    "Tell me Your Email",
    "What is the science?",
    "Can you explain the concept of gravity?",
    "What are the basic principles of evolution?",
    "How does photosynthesis work?",
    "What is the structure of an atom?",
    "Explain the concept of relativity.",
    "What is DNA and its role in genetics?",
    "How does the immune system function?",
    "Describe the process of cellular respiration.",
    "Thanks for Explanation,You just click on this link...."
  ];

  useEffect(() => {
    if (currentQuestionIndex < questions.length) {
      setMessages([{ text: questions[currentQuestionIndex], type: "bot" }]);
    }
  }, [currentQuestionIndex]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setMessages([...messages, { text: inputValue, type: "user" }]);
      setInputValue("");
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    }
  };

  return (
    <>
      <div className="fixed right-0 bottom-0">
        <img
          src={Image}
          alt=""
          className="rounded-full h-20 w-20 mr-10 mb-10 "
          onClick={() => {
            setShow(true);
          }}
        />
      </div>

      {show && (
        <div className="h-56  w-64 rounded-2xl bg-[#ce5858] fixed right-0 bottom-0 m-10">
          <div className="">
            <div className="flex flex-row">
              <div className=" m-5   font-serif font-semibold">
                {messages.map((message, index) => (
                  <div key={index} className={`message ${message.type}`}>
                    {message.text}
                  </div>
                ))}
              </div>
              <div
                className="mr-3 mt-3 cursor-pointer"
                onClick={() => setShow(false)}
              >
                <ClearIcon sx={{ color: "white" }} />
              </div>
            </div>

            {currentQuestionIndex < questions.length && (
              <form onSubmit={handleSubmit} className="chatbot-input">
                <input
                  className="ml-5 h-10 w-56 rounded-md outline-0 pl-3"
                  type="text"
                  placeholder="Type your answer..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                  type="submit"
                  className=" bg-[#25255b]  rounded-md text-white px-4 font-medium ml-40 mt-5"
                >
                  Ok
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
