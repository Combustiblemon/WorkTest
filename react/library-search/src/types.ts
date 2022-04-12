export interface BookType {
    author: string
    comment_text: string | null
    created_at: string
    created_at_i: number
    num_comments: number
    objectID: string
    parent_id: string | null
    points: number
    story_id: string | null
    story_text: string | null
    story_title: string | null
    story_url: string | null
    title: string
    url: string
    _highlightResult: {
        author: {
            matchLevel: string
            matchedWords: string[]
            value: string
        }
        title: {
            fullyHighlighted: boolean
            matchLevel: string
            matchedWords: string[]
            value: string
        }
        url: {
            matchLevel: string
            matchedWords: string[]
            value: string
        }
    }
    _tags: string[]
    relevancy_score: number
}

export type DropDownValuesType = "relevancy_score" | "points"