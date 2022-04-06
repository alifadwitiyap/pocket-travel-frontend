import Post from '../../components/Post';

function HomePage() {
  return (
    <div className="flex flex-col items-center mt-6">
      <div className="relative border-2 border-gray-300 p-5 w-4/5 sm:w-2/3 md:w-1/2 lg:w-1/3 mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Home</h1>
        </div>
      </div>
      <Post />
    </div>
  );
}

export default HomePage;
