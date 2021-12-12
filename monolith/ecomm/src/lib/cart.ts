import create from "zustand";

import type { Product } from "./products";

export interface CartItem extends Product {
  quantity: number;
}

export interface Cart {
  cartItems: CartItem[];
}

const API_SERVER = "http://localhost:8080";

const cartFetch = <T>(method: string, body: unknown): Promise<T> =>
  fetch(`${API_SERVER}/cart`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useStore.getState().jwt}`,
    },
    body: body ? JSON.stringify(body) : undefined,
  }).then((res) => res.json());

const authPost = <T>(body: unknown): Promise<T> =>
  fetch(`${API_SERVER}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());

export const useStore = create<{
  jwt: string;
  cart?: Cart;
  addToCart: (id: number) => Promise<void>;
  clearCart: () => Promise<void>;
  updateCart: () => Promise<void>;
  login: (username: string, password: string) => Promise<void>;
}>((set, get) => ({
  jwt: "",
  cart: null,

  updateCart: async (): Promise<void> => {
    const res = await cartFetch<Cart>("GET", null);
    set((state) => ({ ...state, cart: res }));
  },

  addToCart: async (id): Promise<void> => {
    await cartFetch<void>("POST", { id });
    get().updateCart();
  },

  clearCart: async (): Promise<void> => {
    await cartFetch<void>("DELETE", null);
    get().updateCart();
  },

  login: async (username: string, password: string): Promise<void> => {
    const { access_token } = await authPost<{ access_token: string }>({
      username,
      password,
    });
    set((state) => ({ ...state, jwt: access_token }));
    get().updateCart();
  },
}));
