import imgAbout from "../../../assets/img-about.png";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase";
import { useEffect, useState } from "react";

export default function AboutSection() {
  const [todos, setTodos] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, "about")).then((querySnapshot) => {
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
    <section className="px-2 mx-auto">
      <div className="container mx-auto">
        <div className="grid place-content-center lg:flex lg:justify-between lg:items-center">
          {todos?.map((item, i) => (
            <div key={item.id} className="grid gap-[30px] w-fit sm:w-[605px] md:w-[605px]">
              <h1 className="text-[60px] font-semibold text-[#00A9D9]">
                {item?.title}
              </h1>
              <div className="grid gap-5">
                <p className="text-[20px] font-medium text-[#00334C] text-justify">
                  {item.paragraf1}
                </p>
                <p className="text-[20px] font-medium text-[#00334C] text-justify">
                  {item.paragraf2}
                </p>
              </div>
            </div>
          ))}
          <div>
            <img src={imgAbout} width={600} height={600} alt="about" />
          </div>
        </div>
      </div>
    </section>
  );
}
