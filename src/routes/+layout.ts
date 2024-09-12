// export const prerender = true

export async function load({ url }: {url:any}) {
	return {
		url: url.pathname
	}
}