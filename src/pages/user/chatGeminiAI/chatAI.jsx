import { useState } from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import { prompt } from "../../../helper/constant";
export default function CHATAI() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  // const [combine, setCombine] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();

    const combinedMessage = prompt + question;
    setAnswer("Loading your answer... \n It might take upto 10 seconds");
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
          import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT
        }`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: combinedMessage }] }],
        },
      });

      setAnswer(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      );
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }
  return (
    <section className="flex gap-4 px-2 mx-auto mt-20">
      <div className="container mx-auto">
        <form className="w-full mx-auto grid gap-4" onSubmit={generateAnswer}>
          <label
            htmlFor="message"
            className="block mb-2 text-xl font-medium text-[#00A9D9] dark:text-white"
          >
            Suds Laundry Ready To Answer Your Question
          </label>
          <textarea
            id="message"
            rows="3"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ask anything..."
          ></textarea>
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={generatingAnswer}
              className=" w-fit text-white bg-[#00A9D9] hover:bg-[#008AB1] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Generate Your Answer
            </button>
          </div>
        </form>
        <div className="w-full text-justify mt-8">
          {answer ? (
            
            <ReactMarkdown className="mx-auto  block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {answer}
            </ReactMarkdown>
          ) : (
            console.log(answer)
          )}
        </div>
      </div>
    </section>
  );
}
