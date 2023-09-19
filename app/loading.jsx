import { Button } from "@mui/joy";
import React from "react";

export default function loading() {
  return (
    <div className='mx-auto sm:min-w-full lg:min-w-[510px] lg:max-w-[560px] sm:border-0 md:border-[1px] border-[var(--border-base-color)] rounded-[16px] text-center sm:px-4 md:px-6 flex justify-center items-center h-[60vh] mb-6'>
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
