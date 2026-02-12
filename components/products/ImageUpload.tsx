"use client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import { TbPhotoPlus } from "react-icons/tb";

export default function ImageUpload() {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <CldUploadWidget
      uploadPreset="products_unsigned"
      options={{
        maxFiles: 1,
      }}
      onSuccess={(result, { widget }) => {
        if (result.event === "success") {
          widget.close();
          // @ts-expect-error: property 'secure_url' does exist on 'info' property
          setImageUrl(result.info?.secure_url);
        }
      }}
    >
      {({ open }) => (
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Imagen del Producto
          </label>

          <div
            onClick={() => open?.()}
            className="relative cursor-pointer group"
          >
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-12 
                      flex flex-col items-center justify-center gap-4
                      bg-gray-50 hover:bg-gray-100 hover:border-gray-400 
                      transition-all duration-200 ease-in-out"
            >
              <div className="p-4 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
                <TbPhotoPlus size={40} className="text-blue-600" />
              </div>

              <div className="text-center">
                <p className="text-base font-semibold text-gray-700 mb-1">
                  Agregar Imagen
                </p>
                <p className="text-sm text-gray-500">
                  Haz clic para subir o arrastra aquí
                </p>
              </div>
              {imageUrl && (
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    fill
                    style={{ objectFit: "contain" }}
                    src={imageUrl}
                    alt="Imagen de Producto"
                  />
                </div>
              )}
              <p className="text-xs text-gray-400">PNG, JPG, WEBP hasta 10MB</p>
            </div>
          </div>
          <input type="hidden" name="image" value={imageUrl} />
        </div>
      )}
    </CldUploadWidget>
  );
}
