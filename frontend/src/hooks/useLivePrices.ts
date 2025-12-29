"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateTokenPrice } from "@/store/tokenSlice";

export function useLivePrices() {
  const dispatch = useDispatch();

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:4001");

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      dispatch(updateTokenPrice(data));
    };

    return () => ws.close();
  }, [dispatch]);
}