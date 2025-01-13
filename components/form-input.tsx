interface IFormInput {
  type: string;
  placeholder: string;
  required: boolean;
  label: string;
  name: string;
}

export default function FormInput({
  type,
  placeholder,
  required,
  label,
  name,
}: IFormInput) {
  return (
    <div>
      <label
        htmlFor={type}
        className="block text-xs font-semibold text-gray-700"
      >
        {label}
      </label>
      <input
        id={type}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="mt-1 w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-jindo-blue focus:border-jindo-blue transition"
      />
    </div>
  );
}
