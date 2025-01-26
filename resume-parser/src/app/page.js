"use client";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      console.log("File uploaded:", file);
      // Add your file upload logic here
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start sm:items-center">
        <h1 className="text-2xl font-bold">RESUME PARSER</h1>
        <h1 className="text-2xl font-bold">Upload a PDF or DOCX file</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
          <input
            type="file"
            accept=".pdf,.docx"
            onChange={handleFileChange}
            className="border border-gray-300 p-2 rounded"
          />
          <button
            type="submit"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Upload
          </button>
        </form>
      </main>
    </div>
  );
}