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

export interface Projects {
    name: string,
    description: string,
    image: string,
    allurls: Project
}

export interface Company {
    name: string,
    url: string
}
