"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <>
      <h2>Something went wrong!</h2>
      <a href="../" style={{ textDecoration: "underline", color: "blue" }}>
        Back to the Dashboard
      </a>
    </>
  );
}
