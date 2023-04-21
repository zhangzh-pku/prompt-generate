import React from "react";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface SidebarProps {
  onSelectApi: (api: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onSelectApi }) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    onSelectApi(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <Select label="Select API" defaultValue="" onChange={handleChange}>
        <MenuItem value="">
          <em>please choose a application</em>
        </MenuItem>
        <MenuItem value="Image API">Mid Jounery</MenuItem>
        <MenuItem value="Chat API">ChatGPT</MenuItem>
      </Select>
    </FormControl>
  );
};
