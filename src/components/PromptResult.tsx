// src/components/ApiResult.tsx
import React from "react";

interface ApiResultProps {
  result: string | null;
}

export const ApiResult: React.FC<ApiResultProps> = ({ result }) => {
  if (!result) {
    return null;
  }

  return (
    <div>
      <h2>Result:</h2>
      <pre>{result}</pre>
    </div>
  );
};
