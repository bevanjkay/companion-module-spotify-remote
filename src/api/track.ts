import type { SearchParameters } from 'got'
import { Response, doGetRequest, RequestOptionsBase } from './util.js'

export interface GetTrackOptions {
	market?: string
}

export async function getTrack(
	reqOptions: RequestOptionsBase,
	trackId: string,
	options?: GetTrackOptions,
): Promise<Response<SpotifyApi.SingleTrackResponse | undefined>> {
	const params: SearchParameters = {}
	if (options?.market) params.market = options.market

	return doGetRequest(reqOptions, `/v1/tracks/${encodeURIComponent(trackId)}`, params)
}
