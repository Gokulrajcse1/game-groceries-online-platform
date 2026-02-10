import { Suspense } from "react";
import ShopClient from "./ShopClient";

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen py-24" />}>
      <ShopClient />
    </Suspense>
  );
}
