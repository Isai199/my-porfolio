export interface Project {
    title: string,
    description: string,
    properties: {
        type: string,
        lenguage: string,
        tools: string,
        country: string,
        company?: string,
        liveUrl?: string
    },
    imagesUrl: string[]
}
