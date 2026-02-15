import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className="flex justify-center mt-5">
  <Image 
    width={250}
    height={250}
    alt="Logotipo de Restaurante" 
    src="/logo.png"
    className="object-contain rounded-md shadow-2xl"
    
  />
</div>
  );
}
