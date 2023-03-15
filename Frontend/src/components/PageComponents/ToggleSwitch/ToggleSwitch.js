import React from 'react';

export function ToggleSwitch() {
    const [checked, setChecked] = React.useState(true);
    const toggle = (checked) => {
        setChecked((prev) => !prev);
    };

    return (
        <div class="form-check form-switch">
            {checked ? ( 
            <input class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                style={{ backgroundColor: "var(--clr-accent)",
                backgroundImage: "url('data:image/svg+xml,%3csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%22-4 -4 8 8%22%3e%3ccircle r=%223%22 fill=%22%23FFFFFF%22/%3e%3c/svg%3e')",
                }}
                checked={checked}
                onChange={() => toggle(!checked)}
            />
            ) : (
            <input class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                style={{ backgroundColor: "#1E1E1E",
                backgroundImage: "url('data:image/svg+xml,%3csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%22-4 -4 8 8%22%3e%3ccircle r=%223%22 fill=%22%23FFFFFF%22/%3e%3c/svg%3e')",
                border: "1px solid grey",
                }}
                checked={checked}
                onChange={() => toggle(!checked)}
            />
            )}
        </div>
    )
}
