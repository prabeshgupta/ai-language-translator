"use client"
export const Dropdown = ({ name, value, onChange, options }) => {
    return (
        <select
            name={name}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="rounded-md border focus:ring-blue-200 px-3 py-2 mb-2 w-fit"
        >
            {options.map((option, index) =>
                <option key={`${name}_${index}`} value={option.value}>{option.label}
                </option>
            )}
        </select>
    )
}