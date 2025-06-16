"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "@/components1/Button";

type Movie = {
  id: string;
  title: string;
  thumbnailUrl: string;
};

const PagoClient = ({ movie }: { movie: Movie }) => {
  const router = useRouter();

  const handlePago = () => {
    router.push(`/ticket-digital/${movie.id}`);
  };

  return (
    <div className="min-h-screen px-6 py-8 bg-black text-white flex flex-col gap-6">
      <h1 className="text-2xl font-semibold text-center">Método de pago</h1>

      <div className="flex flex-col gap-4">
        <div className="bg-gray-800 p-4 rounded-xl text-center">Pago con tarjeta</div>
        <div className="bg-gray-800 p-4 rounded-xl text-center">Pago con QR</div>
      </div>

      <div className="mt-auto">
        <Button onClick={handlePago} className="w-full py-4 rounded-full">
          Pagar entradas
        </Button>
      </div>
    </div>
  );
};

export default PagoClient;
