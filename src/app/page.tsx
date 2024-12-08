'use client';
import Image from "next/image";
import {useState} from "react";
import {UrlInput} from "@/app/copmponents/UrlInput";
import {createShortUrl} from "@/app/actions/urlActions";
import dayjs from 'dayjs'


const accessTimeValues = [
  { value: 5 * 60, label: '5 minutes' },
  { value: 60 * 60, label: '1 hour' },
  { value: 24 * 60 * 60, label: '1 day' },
  { value: 30 * 24 * 60 * 60, label: '1 month' },
  { value: 12 * 30 * 24 * 60 * 60, label: '1 year' },
];
export default function Home() {
  const [url, setUrl] = useState('');
  const [accessTime, setAccessTime] = useState(5);

    const handleSubmitUrl = async () => {
        try {
            await createShortUrl(url, {expiration: dayjs().add(accessTime, 'seconds').toISOString()});
        } catch (e) {
            console.error(e);
        }
    };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        Easiest way to shorten your URL. Get super short URL in few seconds.

        <div className="flex gap-4 items-center">
          Access time:
          <select
              className="p-2 text-sm bg-gray-100 dark:bg-gray-800 dark:text-gray-100 rounded-md"
              value={accessTime}
              onChange={(e) => setAccessTime(Number(e.target.value))}
          >
            {accessTimeValues.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
            ))}
          </select>
        </div>

        <UrlInput url={url} setUrl={setUrl} />

        <button
            className="p-2 text-sm font-semibold text-white bg-blue-600 rounded-md"
            onClick={handleSubmitUrl}
        >
          Shorten
        </button>



      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />

          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
