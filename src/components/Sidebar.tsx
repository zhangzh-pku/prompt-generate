// src/components/Sidebar.tsx
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

interface SidebarProps {
  onSelectApi: (api: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onSelectApi }) => {
  const apiList = ['Image API', 'Chat API'];

  return (
    <List>
      {apiList.map((api, index) => (
        <ListItem button key={index} onClick={() => onSelectApi(api)}>
          <ListItemText primary={api} />
        </ListItem>
      ))}
    </List>
  );
};
