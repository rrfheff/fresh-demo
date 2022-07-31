import { HandlerContext } from "$fresh/server.ts";

const OPTIONS = [
  "Jack",
	"Tom",
	"Jerry",
	"Neo",
	"Marry",
	"Jane",
	"John",
	"Bob",
	"Alice",
];

export const handler = (query: string) => {
  return OPTIONS.filter(i => i.includes(query));
};
