import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-4 mb-8">
        <Skeleton className="h-8 w-40" />
        <Skeleton className="h-10 w-64" />
      </div>

      <div className="border border-emerald-900/20 rounded-lg p-6 space-y-4">
        <Skeleton className="h-6 w-72" />
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="border border-emerald-900/20 rounded-lg p-4"
          >
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex items-start gap-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-40" />
                  <Skeleton className="h-4 w-56" />
                  <Skeleton className="h-4 w-48" />
                </div>
              </div>
              <div className="flex flex-col gap-2 self-end md:self-start">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-9 w-32" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
