interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export const Input: React.FC<InputProps> = ({
    type,
    className,
    placeholder,
    ...props
}) => {
    return (
        <input
            type={type}
            className={className}
            placeholder={placeholder}
            {...props}
        />
    )
}