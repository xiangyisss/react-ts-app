import React from "react";
import { ValueType } from "../../Utils/ValueType";

interface Props {
	storedValue: ValueType[];
	optionalString?: string;
}
export const Todo = (props: Props) => {
	const { storedValue, optionalString = "hello" } = props;
	return (
		<div>
			<p>{optionalString.toLocaleLowerCase()}</p>
			{storedValue.map((item: ValueType, index: number) => (
				<li key={item.id}>
					{item.text}:{item.complete}:{item.id}
				</li>
			))}
		</div>
	);
};
