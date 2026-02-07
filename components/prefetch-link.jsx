"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PrefetchLink = React.forwardRef(
  (
    {
      href,
      prefetch = true,
      onMouseEnter,
      onFocus,
      onTouchStart,
      ...props
    },
    ref
  ) => {
    const router = useRouter();

    const hrefString = React.useMemo(() => {
      if (typeof href === "string") return href;
      if (href && typeof href === "object" && "pathname" in href) {
        return href.pathname;
      }
      return null;
    }, [href]);

    const shouldPrefetch =
      prefetch &&
      hrefString &&
      !hrefString.startsWith("#") &&
      !hrefString.startsWith("mailto:") &&
      !hrefString.startsWith("tel:") &&
      !hrefString.startsWith("http");

    const triggerPrefetch = React.useCallback(() => {
      if (!shouldPrefetch) return;
      router.prefetch(hrefString);
    }, [router, shouldPrefetch, hrefString]);

    return (
      <Link
        ref={ref}
        href={href}
        prefetch={false}
        onMouseEnter={(event) => {
          onMouseEnter?.(event);
          triggerPrefetch();
        }}
        onFocus={(event) => {
          onFocus?.(event);
          triggerPrefetch();
        }}
        onTouchStart={(event) => {
          onTouchStart?.(event);
          triggerPrefetch();
        }}
        {...props}
      />
    );
  }
);

PrefetchLink.displayName = "PrefetchLink";

export default PrefetchLink;
