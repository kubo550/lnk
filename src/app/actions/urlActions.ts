import {HttpClient} from "@/app/utils/httpClient";


type ShortUrlOptions = {
    limitedClicks?: number;
    expiration?: string;
};

export const createShortUrl = async (url: string, body: ShortUrlOptions): Promise<string> => {
    const httpClient = new HttpClient('https://todo-api-url.com');
    const response = await httpClient.post('/shorten', body);
    console.log(response);
}