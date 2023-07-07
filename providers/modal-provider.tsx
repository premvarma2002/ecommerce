"use cliet";

import { StoreModal } from "@/components/modals/store-modal";

import { useEffect, useState } from "react";

export const Modalprovider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <StoreModal />
    </>
  );
};
