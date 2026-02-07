import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-6">
        <Skeleton className="h-8 w-64 mx-auto mb-2" />
        <Skeleton className="h-4 w-40 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={index}
            className="border border-emerald-900/20 rounded-lg overflow-hidden"
          >
            <div className="bg-emerald-900/10 px-3 py-2">
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-[300px] md:h-[400px] w-full" />
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-4 mt-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton key={index} className="h-14 w-14 rounded-full" />
        ))}
      </div>

      <div className="text-center mt-6 space-y-2">
        <Skeleton className="h-4 w-48 mx-auto" />
        <Skeleton className="h-4 w-72 mx-auto" />
      </div>
    </div>
  );
}
