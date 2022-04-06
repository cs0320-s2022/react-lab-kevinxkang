interface TextBoxProp {
    label: string;
    change: (value: string) => void;
}

function TextBox(props: TextBoxProp) {
    return (
        <div>
            <input type="text" onChange={event => props.change(event.target.value)}></input>
        </div>
    );
}

export default TextBox