import { Component } from "../typescript/component";
import { Image } from "../typescript/action";
import { Entry, HeaderProps ,FooterProps } from "./layout";

type AdditionalParam = {
  title: string;
  title_h2: string;
  title_h3: string;
  description: string;
  banner_title: string;
  banner_description: string;
  designation: string;
  name: string;
  html_code: string;
  body: string;
  date: string;
  uid:string;
  related_post: [];
  copyright: string;
  announcement_text: string;
  label: {};
  url: string;
}

type Post = {
  url: string;
  is_archived: boolean;
  body: string;
  featured_image: Image;
  title: string;
  date: string;
  author: [Author];
  $: AdditionalParam;
}

type Author = {
  title: string;
  $: AdditionalParam;
}

type PageProps = {
  page: Page;
  posts: [];
  archivePost: []; 
  blogPost: BlogPosts;
}

type Seo = {
  enable_search_indexing: boolean
}

type Blog = {
  url: string;
  body: string;
  title: string;
  $: AdditionalParam;
}

export type Props = {
  page: Page;
  entryUrl: string;
  Component: any;
  entries: Entry;
  pageProps: PageProps;
  header: HeaderProps;
  footer: FooterProps;
}

export type Page ={
  fields: any;
  page_components: Component[];
  uid: string;
  locale: string;
  url: string;
  seo: Seo;
  title: string;
}

export type Context = {
  resolvedUrl: string;
  setHeader: Function;
  write: Function;
  end: Function;
}

export type Pages = [
  page: Page
]

export type PostPage = [
  post: Post
]

export type PageUrl = string;

export type BlogPosts = {
  title: string;
  date: string;
  body: string;
  author: [Author];
  related_post: [Blog];
  locale: string;
  featured_image: Image;
  is_archived: boolean;
  seo: Seo;
  uid:string;
  url: string;
  _owner: string;
  $: AdditionalParam;
}