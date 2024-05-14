"use client";

import { collection, getDocs } from "firebase/firestore";
import { Accordion } from "flowbite-react";
import { useEffect, useState } from "react";
import { db } from "../../firebase";

export default function FAQ() {
  const [allPosts, allPostsSet] = useState({});
  const [todos, setTodos] = useState([]);

  /*async function getPosts() {
    try {
      const ref = collection(db, "faq");
      const docs = await getDocs(ref);

      let sample = [];
      for (let x of docs.docs) {
        if (!x.exists()) return;
        sample.push(x.data());
      }
      allPostsSet(sample);
    } catch (error) {
      console.log(error);
    }
  }*/

  const fetchPost = async () => {
    await getDocs(collection(db, "faq"))
    .then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodos(newData);
      console.log(todos, newData);
    });
  };
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="w-fit xl:w-[653px] flex flex-col gap-[50px]">
        <h1 className="text-[36px] sm:text-[40px] font-semibold text-[#00A9D9]">Do You Have Question?</h1>
      <Accordion>
        {todos?.map((item, i) => (
          <Accordion.Panel key={item.id}>
            <Accordion.Title>{item?.title}</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {item?.answer}
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        ))}
      </Accordion>
    </div>
  );
}
