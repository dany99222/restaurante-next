import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className="flex justify-center mt-5">
  <Image 
    width={160}
    height={160}
    alt="Logotipo de Restaurante" 
    src="/logo.svg"
    className="object-contain"
    
  />
</div>
  );
}
