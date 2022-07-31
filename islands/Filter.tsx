/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useState, useEffect } from "preact/hooks";
import { handler as filterHandler } from "../routes/api/filter.ts";

export default function Filter() {
	const [inputValue, setInputValue] = useState('');
	const [options, setOptions] = useState<string[]>([]);
	useEffect(() => {
		setOptions(filterHandler(inputValue));
	}, [inputValue])
  return (
    <div>
			filter demo
    	<input class={tw`border`} type="text" value={inputValue} onInput={e => {
				setInputValue((e.target as HTMLInputElement).value)
			}} />
			{options.map(i => <div>{i}</div>)}
    </div>
  );
}
