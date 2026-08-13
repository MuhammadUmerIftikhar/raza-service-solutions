import Image from "next/image";
import type { ClientLogo } from "@/types";

export function ClientLogoWall({ clients }: { clients: ClientLogo[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {clients.map((client) => (
        <div
          key={client.name}
          className="flex h-24 items-center justify-center rounded-xl border border-navy-100 bg-white p-4 transition-colors hover:border-gold-300 hover:shadow-md"
        >
          <div className="relative h-full w-full">
            <Image
              src={client.logo}
              alt={client.name}
              fill
              sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
