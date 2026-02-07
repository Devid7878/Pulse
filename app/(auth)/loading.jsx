import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-full max-w-md">
      <div className="border border-emerald-900/20 rounded-lg p-8 space-y-4">
        <div className="text-center space-y-2">
          <Skeleton className="h-7 w-40 mx-auto" />
          <Skeleton className="h-4 w-56 mx-auto" />
        </div>
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-4 w-32 mx-auto" />
      </div>
    </div>
  );
}
