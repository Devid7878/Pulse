import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Array.from({ length: 2 }).map((_, index) => (
        <div
          key={index}
          className="border border-emerald-900/20 rounded-lg p-6 flex flex-col items-center text-center"
        >
          <Skeleton className="h-12 w-12 rounded-full mb-4" />
          <Skeleton className="h-6 w-48 mb-2" />
          <Skeleton className="h-4 w-72 mb-2" />
          <Skeleton className="h-4 w-64 mb-4" />
          <Skeleton className="h-10 w-full" />
        </div>
      ))}
    </div>
  );
}
