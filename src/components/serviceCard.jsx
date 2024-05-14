"use client";

import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

export function CardService({ title, price, iron, time, typecloting }) {
  return (
    <Card className="w-[340px] rounded-2xl">
      <h5 className="mb-4 text-2xl font-medium text-gray-500 dark:text-gray-400">
        {title}
      </h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-3xl font-semibold">Rp{price}</span>
        <span className="text-gray-500 text-2xl font-medium">/kg</span>
      </div>
      <ul className="my-7 space-y-5">
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-lg font-normal leading-tight text-gray-500 dark:text-gray-400">
            {time}
          </span>
        </li>
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-lg  font-normal leading-tight text-gray-500 dark:text-gray-400">
            {iron}
          </span>
        </li>
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-lg  font-normal leading-tight text-gray-500 dark:text-gray-400">
            {typecloting}
          </span>
        </li>
      </ul>
      <Link to={"/ordering"}>
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-lg bg-[#00A9D9] hover:bg-[#008AB1] px-5 py-2.5 text-center text-lg font-medium text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
        >
          Choose Package
        </button>
      </Link>
    </Card>
  );
}
