import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("https://b7a12-summer-camp-server-side-rionelx-slovesky.vercel.app/classes/popular")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  },[classes]);
  return (
    <div className="py-24">
      <h1 className="text-center text-2xl mb-8">Popular Classes</h1>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {classes.map((c) => (
          <div key={c._id} className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <motion.img
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                src={c.classImage}
                alt="Shoes"
                className="rounded-xl w-52 h-52 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{c.className}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
