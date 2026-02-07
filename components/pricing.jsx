"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
import { PricingTable } from "@clerk/nextjs";

const Pricing = ({ canPurchase = true }) => {
  if (!canPurchase) {
    return (
      <Card className="border-emerald-900/30 shadow-lg bg-gradient-to-b from-emerald-950/30 to-transparent">
        <CardContent className="p-6 md:p-8 text-center space-y-2">
          <h3 className="text-xl font-semibold text-white">
            Plans are for patients only
          </h3>
          <p className="text-muted-foreground">
            Doctor accounts can’t purchase consultation plans. If you need
            patient credits, please sign in with a patient account.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-emerald-900/30 shadow-lg bg-gradient-to-b from-emerald-950/30 to-transparent">
      <CardContent className="p-6 md:p-8">
        <PricingTable
          checkoutProps={{
            appearance: {
              elements: {
                drawerRoot: {
                  zIndex: 2000,
                },
              },
            },
          }}
        />
      </CardContent>
    </Card>
  );
};

export default Pricing;
