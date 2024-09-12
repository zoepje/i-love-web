import fetchJson from "$lib/fetch-json"

export async function load({params} : {params:any}) {
  const url = `https://fdnd.directus.app/items/squad/${params.id}`

  const squad = await fetchJson(url)
  
  return {
    squad: squad.data
  }
}