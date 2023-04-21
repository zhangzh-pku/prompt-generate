// src/App.tsx
import React, { useState } from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import { Sidebar } from "./components/Sidebar";
import { ApiInput } from "./components/PromptInput";
import { ApiResult } from "./components/PromptResult";
import "./App.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  const [selectedApi, setSelectedApi] = useState("");
  const [apiResult, setApiResult] = useState<string | null>(null);

  const handleApiSubmit = async (input: string) => {
    // 根据选择的 API 调用对应的函数
    let result: string | null = null;
    if (selectedApi === "Image API") {
      result = await fetchImage(input);
    } else if (selectedApi === "Chat API") {
      result = await fetchChat(input);
    }
    setApiResult(result);
  };

  const fetchImage = async (input: string) => {
    // 在这里调用 Image API，将结果返回
    return `Image API result for input: ${input}`;
  };

  const fetchChat = async (input: string) => {
    // 在这里调用 Chat API，将结果返回
    return `Chat API result for input: ${input}`;
  };
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h2" component="h1" gutterBottom>
        PROMPT GENERATOR
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Sidebar onSelectApi={setSelectedApi} />
          </Grid>
          <Grid item xs={12} md={9}>
            <h1>{selectedApi}</h1>
            <ApiInput onSubmit={handleApiSubmit} />
            <ApiResult result={apiResult} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
