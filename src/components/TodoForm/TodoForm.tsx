import React, { useState } from 'react';

const SetIputValue = (initialValue: string) => {
	const [value, setValue] = useState(initialValue);
	return {
		value,
		onChange: (e: { target: { value: React.SetStateAction<string> } }) =>
			setValue(e.target.value),
		// resetValue: () => setValue("")
		resetValue: () => setValue(''),
	};
};

export const Input = ({ onSubmit }: { onSubmit: any }) => {
	const { resetValue, ...text } = SetIputValue('');

	const handleSubmit = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		onSubmit(text.value);
		resetValue();
	};
	return (
		<div className="todo-container">
			<h3>To do List</h3>
			<form action="" onSubmit={handleSubmit}>
				<input {...text} placeholder="Enter your todays task" />
			</form>
		</div>
	);
};
