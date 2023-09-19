import { Button } from "@mui/joy";
import React from "react";

export default function loading() {
  return (
    <div className="text-center my-32">
      <Button 
        loading 
        variant="plain"
        size="xl"
        color="success"
        >
        Plain
      </Button>
    </div>
  );
}
