import Image from "next/image";

type Props = {
  title: string;
  subtitle: string;
  isNew?: boolean;
};

export default function MovieCard({ title, subtitle, isNew }: Props) {
  return (
    <div className="bg-purple-800 rounded-xl overflow-hidden w-40 min-w-[160px] flex-shrink-0 relative">
      <Image
        src="/images/spiderman.jpg"
        alt={title}
        className="w-full h-40 object-cover"
      />
      {isNew && (
        <span className="absolute top-1 left-1 bg-blue-500 text-white text-xs px-2 py-1 rounded">
          NEW
        </span>
      )}
      <div className="p-2">
        <h4 className="text-sm font-bold">{title}</h4>
        <p className="text-xs text-gray-300">{subtitle}</p>
      </div>
    </div>
  );
}
