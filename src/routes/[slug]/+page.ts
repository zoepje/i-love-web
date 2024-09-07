import { error } from "@sveltejs/kit"

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	return [
		{ slug: 'Sprint-1' },
		{ slug: 'Sprint-2' }
	];
}

export const prerender = true;

export async function load({params} : {params:any}) {
  try {
    const post = await import(`../../sprints/${params.slug}.md`)

    console.log(params.slug);
    

    return {
      content: post.default,
      meta: post.metadata
    }
  } catch (e) {
    throw error(404, `Could not find ${params.slug}`)
  }
}