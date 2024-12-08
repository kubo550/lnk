import type {FC} from "react";
import {useState} from "react";
import {z} from "zod";

interface UrlInputProps {
    url: string;
    setUrl: (url: string) => void;
}


const urlValidation = z.string().url();
export const UrlInput: FC<UrlInputProps> = ({url, setUrl}) => {
    const [validationError, setValidationError] = useState('');



    return (
        <div className="flex gap-4 items-center flex-col sm:flex-row w-full">
            {validationError && <p className="text-red-500">{validationError}</p>}
            <input
                className="w-full p-2 text-sm bg-gray-100 dark:bg-gray-800 dark:text-gray-100 rounded-md"
                placeholder="Enter URL"
                value={url}
                onChange={(e) => {
                    setValidationError('');
                    setUrl(e.target.value)
                    try {
                        urlValidation.parse(e.target.value);
                    } catch (e) {
                        console.log(e.errors);
                        setValidationError('Invalid URL');
                    }
                }}
                autoFocus
            />
        </div>
    );
}