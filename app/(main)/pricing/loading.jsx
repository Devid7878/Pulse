import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-start mb-2">
        <Skeleton className="h-4 w-32" />
      </div>

      <div className="max-w-full mx-auto mb-12 text-center">
        <Skeleton className="h-6 w-48 mx-auto mb-4" />
        <Skeleton className="h-10 w-3/4 mx-auto mb-4" />
        <Skeleton className="h-4 w-2/3 mx-auto" />
      </div>

      <div className="border border-emerald-900/20 rounded-lg p-6">
        <Skeleton className="h-64 w-full" />
      </div>

      <div className="max-w-3xl mx-auto mt-16 text-center">
        <Skeleton className="h-6 w-64 mx-auto mb-2" />
        <Skeleton className="h-4 w-72 mx-auto" />
      </div>
    </div>
  );
}
