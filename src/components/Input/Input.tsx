import React, { ChangeEvent } from "react";

interface Props {
	giveValue: (data: string) => void;
	inputValue: string;
}

export const Input = (props: Props) => {
	const { giveValue, inputValue } = props;
	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		giveValue(e.target.value);
	};
	return (
		<div>
			<input value={inputValue} onChange={handleOnChange} />
		</div>
	);
};
