import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Skeleton className="h-8 w-48" />
              <div className="space-y-3">
                <Skeleton className="h-12 w-full max-w-md" />
                <Skeleton className="h-12 w-3/4 max-w-sm" />
              </div>
              <Skeleton className="h-5 w-full max-w-md" />
              <div className="flex flex-col sm:flex-row gap-4">
                <Skeleton className="h-12 w-40" />
                <Skeleton className="h-12 w-36" />
              </div>
            </div>
            <Skeleton className="h-[400px] lg:h-[500px] rounded-xl" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Skeleton className="h-8 w-56 mx-auto" />
            <Skeleton className="h-4 w-80 mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="border border-emerald-900/20 rounded-lg p-6"
              >
                <Skeleton className="h-10 w-10 rounded-lg mb-4" />
                <Skeleton className="h-5 w-40 mb-2" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4 mt-2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Skeleton className="h-7 w-48 mx-auto mb-3" />
            <Skeleton className="h-10 w-72 mx-auto mb-4" />
            <Skeleton className="h-4 w-80 mx-auto" />
          </div>

          <div className="max-w-3xl mx-auto border border-emerald-900/20 rounded-lg p-6">
            <Skeleton className="h-6 w-40 mb-6" />
            <Skeleton className="h-64 w-full" />
          </div>
        </div>
      </section>
    </div>
  );
}
