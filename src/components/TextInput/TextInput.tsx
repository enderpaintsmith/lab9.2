
import { useState } from "react";
import type { TextInputProps } from "../../types";

export function TextInput({
    onTextChange,
    placeholder = "Start typing...",
    initialValue = ""
}: TextInputProps) {
    const [text, setText] = useState<string>(initialValue);

    function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        const newText = event.target.value;

        setText(newText);
        onTextChange(newText);
    }

    return (
        <textarea
            className="text-input"
            value={text}
            onChange={handleChange}
            placeholder={placeholder}
            rows={6}
            style={{
                width: "100%",
                padding: "12px",
                boxSizing: "border-box"
            }}
        />
    );
}
