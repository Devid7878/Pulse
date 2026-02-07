import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="border border-emerald-900/20 rounded-lg p-6">
          <div className="flex flex-col items-center text-center">
            <Skeleton className="h-16 w-16 rounded-full mb-4" />
            <Skeleton className="h-6 w-56 mb-2" />
            <Skeleton className="h-4 w-72 mb-6" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-2/3" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-40" />
          </div>
        </div>
      </div>
    </div>
  );
}
