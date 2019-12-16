import User from "./User";
import Tag from "./Tag";

export default interface Article {
    articleId: number,
    title: string,
    author: User,
    tag: Tag | null,
    createdAt: string,
    updatedAt: string,
    contents: Array<ArticleContent>,
    isVisible: boolean
}

export const TITLE = "TITLE";

export type TitleVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export interface Title {
    type: "TITLE"
    titleText: string,
    titleVariant: TitleVariant
}

export const PARAGRAPH = "PARAGRAPH";

export interface Paragraph {
    type: "PARAGRAPH"
    paragraphContent: string
}

export const IMAGE = "IMAGE";

export interface Image {
    type: "IMAGE"
    imageUrl: string
    imageCaption: string
    imageLink: string
}

export const IMAGE_GROUP = "IMAGE_GROUP";

export interface ImageGroup {
    type: "IMAGE_GROUP"
    imageGroupTitle: null | string
    images: Array<Image>,
}

export type ArticleContent = Title | Paragraph | Image | ImageGroup