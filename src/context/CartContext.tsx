"use client";

import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from "react";
import { Book, CartItem } from "@/types";

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  totalCount: number;
  subtotal: number;
  freeShippingThreshold: number;
  freeShippingRemaining: number;
  freeShippingProgress: number;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (book: Book, quantity?: number, openDrawer?: boolean) => void;
  removeItem: (bookId: string) => void;
  updateQuantity: (bookId: string, quantity: number) => void;
  clearCart: () => void;
}

const FREE_SHIPPING_THRESHOLD = 500;
const STORAGE_KEY = "sahityayatra_cart_v1";

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {
      console.warn("Failed to read cart from localStorage:", e);
    }
    return [];
  });
  const [isOpen, setIsOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn("Failed to write cart to localStorage:", e);
    }
  }, [items]);

  // Lock background scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen((prev) => !prev);

  const addItem = (book: Book, quantity: number = 1, openDrawer: boolean = true) => {
    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.book.id === book.id);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      }
      return [...prevItems, { book, quantity }];
    });

    if (openDrawer) {
      setIsOpen(true);
    }
  };

  const removeItem = (bookId: string) => {
    setItems((prev) => prev.filter((item) => item.book.id !== bookId));
  };

  const updateQuantity = (bookId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(bookId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.book.id === bookId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setItems([]);

  const totalCount = useMemo(
    () => items.reduce((acc, item) => acc + item.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((acc, item) => acc + item.book.price * item.quantity, 0),
    [items]
  );

  const freeShippingRemaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShippingProgress = Math.min(
    100,
    Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100)
  );

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        totalCount,
        subtotal,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        freeShippingRemaining,
        freeShippingProgress,
        openCart,
        closeCart,
        toggleCart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
