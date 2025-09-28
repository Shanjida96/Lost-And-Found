import React, { Suspense } from "react";
import Post from "./Post";
import Banner from "./Banner";
import { motion } from "motion/react";
import image1 from "../../assets/Images/image 1.png";
import image2 from "../../assets/Images/image 2.png";
const Home = () => {
  const postPromise = fetch("http://localhost:3000/items").then((res) =>
    res.json()
  );
  return (
    <div className="mt-14">
      <div className="flex flex-col-reverse items-center gap-6 bg-amber-100 min-h-96 p-9 lg:flex-row-reverse lg:gap-12">
        {/* Text Section */}
        <div className="text-4xl lg:text-6xl lg:w-1/2 text-center lg:text-left">
          <h1 className="text-gray-800">
            Find And Recover With{" "}
            <motion.span
              animate={{ color: ["#fbbf24", "#f59e0b", "#d97706"] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Ease
            </motion.span>
          </h1>
        </div>
        <div className="flex justify-center gap-6 lg:w-1/2">
          <motion.img
            className="w-50 h-50"
            src={image1}
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          ></motion.img>{" "}
          <motion.img
            className="w-50 h-50"
            src={image2}
            animate={{ x: [0, -50, 0] }}
            transition={{ duration: 10, delay: 2, repeat: Infinity }}
          ></motion.img>
        </div>
      </div>

      <motion.h2 className="text-center my-6 text-4xl font-bold">
        What's {" "}
        <motion.span
          animate={{
            color: ["#ff5733", "#33ff33", "#8a33ff"],
            transition: { duration: 2, repeat: Infinity },
          }}
        >
          New
        </motion.span>
        ?
      </motion.h2>
      <Suspense fallback={"Loading Latest Post"}>
        <Banner postPromise={postPromise}></Banner>
        <Post postPromise={postPromise}></Post>
      </Suspense>
    </div>
  );
};

export default Home;
