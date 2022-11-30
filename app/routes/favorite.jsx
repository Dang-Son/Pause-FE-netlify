import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  const playList_url = "http://127.0.0.1:8000/api/song";
  const response = await fetch(playList_url);
  // console.log(response);
  var data = await response.json();
  console.log(data);

  return data;
};

function Favorite() {
  return (
    <>
      <div>Library</div>
      <h1>Testing Library</h1>
      <h2>Testing Library</h2>
    </>
  );
}

export default Favorite;
