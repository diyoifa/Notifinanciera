import sanityClient from "@sanity/client";
import ImageUrlBuilder  from "@sanity/image-url";

export const clientConfig = {
    projectId: 'jhsqecl6',
    dataset: 'production',
}


export const client = sanityClient({
    projectId: clientConfig.projectId,
    dataset: clientConfig.dataset,
    apiVersion: '2023-07-15',
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    useCdn: true
})

const builder = ImageUrlBuilder(client)

export const urlFor = (source)=> builder.image(source)
  