/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
import Footer from "../islands/Footer.tsx";
import Filter from "../islands/Filter.tsx";
import { handler as jokeHandler } from "./api/joke.ts";
import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers<string> = {
  async GET(_, ctx) {
    const resp = await jokeHandler(_, ctx);
    if (resp.status === 404) {
      return ctx.render('');
    }
    const joke = await resp.text();
    return ctx.render(joke);
  },
};


export default function Home({ data }: PageProps<string | null>) {
  return (
    <div>
      <div class={tw`p-4 mx-auto max-w-screen-md`}>
        <img
          src="https://lf3-ea.bytetos.com/obj/eaoffice/LogoIcon/Enterprise_Application.svg"
          alt="image test"
        />
        <p class={tw`my-6`}>
          fresh demo
        </p>
        <div class={tw`my-6`}>
          crack some jokes randomly
          <p>{ data }</p>
        </div>
        <Counter start={3} />
        <Filter></Filter>
      </div>
      <Footer text="111"></Footer>
    </div>
  );
}
