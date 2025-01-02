import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-11 text-3xl">
      Github followers: {data.followers}
      <img
        src={data.avatar_url}
        alt="avatar"
        className="mx-auto rounded-full w-32 h-32 mt-4"
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  try {
    const response = await fetch("https://api.github.com/users/divyansh04-dev");
    if (!response.ok) {
      throw new Error("Failed to fetch GitHub data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
  }
};
