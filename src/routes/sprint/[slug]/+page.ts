import { error } from "@sveltejs/kit"

export async function load({params} : {params:any}) {
  try {
    const post = await import(`../../../sprints/${params.slug}.md`)
    
    return {
      content: post.default,
      meta: post.metadata
    }
  } catch (e) {
    throw error(404, `Could not find ${params.slug}`)
  }
}