import { Api } from './rt.tonapi.generated';

export * from './rt.tonapi.generated';

export const rtTonApiClientBaseURL = import.meta.env.VITE_BASE_URL;

export const rtTonApiClient = new Api({
    baseURL: rtTonApiClientBaseURL + 'streaming-api',
    paramsSerializer: {
        indexes: null
    }
});
