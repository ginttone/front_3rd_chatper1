/** @jsx createVNode */
import { createVNode } from "../lib";
import { Footer, Header, Post, PostForm } from ".";
import { globalStore } from "../stores";

export const HomePage = () => {
  const { loggedIn, posts } = globalStore.getState();

  retrun();
};
