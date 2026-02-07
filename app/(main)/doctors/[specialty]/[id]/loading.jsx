import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1">
        <div className="border border-emerald-900/20 rounded-lg p-6">
          <div className="flex flex-col items-center text-center">
            <Skeleton className="h-32 w-32 rounded-full mb-4" />
            <Skeleton className="h-5 w-40 mb-2" />
            <Skeleton className="h-4 w-28 mb-4" />
            <Skeleton className="h-4 w-36 mb-6" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      </div>

      <div className="md:col-span-2 space-y-6">
        <div className="border border-emerald-900/20 rounded-lg p-6 space-y-4">
          <Skeleton className="h-6 w-56" />
          <Skeleton className="h-4 w-72" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-2/3" />
        </div>

        <div className="border border-emerald-900/20 rounded-lg p-6 space-y-4">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-64" />
          <div className="grid grid-cols-2 gap-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} className="h-10 w-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
