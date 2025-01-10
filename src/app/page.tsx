"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full h-screen grid place-items-center">
      {!show && (
        <Button type="button" onClick={() => setShow(true)}>
          Click tombol ini
        </Button>
      )}
      {show && <h1 className="font-pacifico text-4xl">HBD Atul Sayang ❤️</h1>}
    </div>
  );
}
