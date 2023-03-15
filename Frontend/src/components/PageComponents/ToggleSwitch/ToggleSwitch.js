import React from 'react';

export function ToggleSwitch() {
    const [checked, setChecked] = React.useState(true);
    const toggle = () => setChecked((prev) => !prev);

    return (
        <div class="form-check form-switch">
            <input class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                style={{ backgroundColor: "var(--clr-accent)"}}
                checked> 
            </input>
        </div>
    )
}
