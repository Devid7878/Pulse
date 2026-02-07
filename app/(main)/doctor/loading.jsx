import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="md:col-span-1 border border-emerald-900/20 rounded-md p-2 space-y-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton key={index} className="h-10 w-full" />
        ))}
      </div>

      <div className="md:col-span-3 space-y-4">
        {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={index}
            className="border border-emerald-900/20 rounded-lg p-6 space-y-3"
          >
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ))}
      </div>
    </div>
  );
}
