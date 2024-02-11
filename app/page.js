import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center ">
        Explore a world of
        <br className="max-md:hidden" />
        <span className="violet_gradient text-center"> AI-powered prompts</span>
      </h1>
      <p className="desc text-center">
        Fuel your creativity,discover and share Prompts with promptEx, the
        AI-driven tool that elevates your writing experience.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
