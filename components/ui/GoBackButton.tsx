"use client"
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";

export default function GoBackButton() {
  const router = useRouter();
  return (
    <button
      className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
      onClick={() => router.back()}
    >
      <ArrowLeftIcon className="w-5 h-5" />
      Volver
    </button>
  );
}

