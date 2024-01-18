import React from "react";

const Prize = () => {
  return (
    <section className="mx-auto">
      <div className="bg-bg_color_2 text-white py-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center my-8 md:my-16">
          <div className="flex flex-col w-full lg:w-4/5 justify-center items-start p-8 border-white border-2 rounded-md">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow">
              🚀 Unleash Your Potential: Prize Pool ₹200,000 🏆
            </h2>
            <div className="prize-animation"></div>
            <p className="text-lg text-text_col_1 md:text-xl font-medium mb-6 leading-tight md:leading-tight">
              Step into the dynamic world of HackToFuture! Our prize pool of
              ₹200,000 is not just a reward; it's an experience. Imagine a
              virtual galaxy where lines of code dance and form constellations
              of innovation.
            </p>
            <p className="text-lg text-text_col_1 md:text-xl font-medium mb-6 leading-tight md:leading-tight">
              Picture your ideas soaring high like paper planes, weaving through
              a digital tapestry. The journey is not just about coding; it's
              about creating a symphony of technological marvels.
            </p>
            <p className="text-lg text-text_col_1 md:text-xl font-medium leading-tight md:leading-tight">
              Embrace the challenge, script the future, and let your creativity
              unfold. Register now and embark on an odyssey of innovation!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prize;
