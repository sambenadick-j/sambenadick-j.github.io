function Home() {
  return (
    <div className="flex justify-center items-center animation-spin">
      <div className="rounded-lg bg-yellow-300 text-white max-w-80 h-15">
        <div className="bg-red-400 w-50 hover:scale-125 delay-300 duration-300">Container1</div>
        <div className="bg-blue-400 w-50 hover:scale-125 delay-300 duration-300">Container2</div>
        <div className="bg-black w-50 hover:scale-125 delay-300 duration-300">Container 3</div>
        <div className="bg-400 w-50 hover:scale-125 delay-300 duration-300">Container 4</div>
        <div className="bg-yellow-400 w-50 hover:scale-125 delay-300 duration-300">Container 5</div>
      </div>
    </div>
  );
}

export default Home;
