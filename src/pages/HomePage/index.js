import axios from "axios";
import { useEffect, useState } from "react";
import Post from "../../components/Post";

function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [publicDiaries, setPublicDiaries] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${process.env.REACT_APP_BASE_URL}/public`).then((res) => {
      setPublicDiaries(res.data.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="relative border-2 bg-white border-gray-300 p-5 w-4/5 sm:w-2/3 md:w-1/2 lg:w-1/3 mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Home</h1>
        </div>
      </div>
      {isLoading
        ? "loading..."
        : publicDiaries.map((diary) => <Post key={diary._id} data={diary} />)}
    </div>
  );
}

export default HomePage;
