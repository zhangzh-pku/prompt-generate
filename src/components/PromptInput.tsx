// src/components/ApiInput.tsx
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

interface ApiInputProps {
  onSubmit: (input: string) => void;
}

export const ApiInput: React.FC<ApiInputProps> = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  return (
    <div>
      <TextField
        label="Input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button onClick={() => onSubmit(input)}>Submit</Button>
    </div>
  );
};
