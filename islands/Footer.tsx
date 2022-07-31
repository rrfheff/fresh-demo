/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface FooterProps {
  text: string;
}

export default function Footer({ text }: FooterProps) {
  return (
    <div class={tw`fixed bottom-0 flex gap-2 w-full h-16 items-center justify-center bg-gray-300`}>
      <img
        class={tw`h-8`}
        src="https://lf3-ea.bytetos.com/obj/eaoffice/LogoIcon/Enterprise_Application.svg"
        alt="image test"
      />
      <span>static text</span>
      <span>dynamic text {text} </span>
    </div>
  );
}
