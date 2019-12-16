import Tag from "../types/Tag";
import Article, {IMAGE, IMAGE_GROUP, PARAGRAPH, TITLE} from "../types/Article";

let tags = [
    {tagId: 1, tagName: "stiri"},
    {tagId: 2, tagName: "teatru"},
    {tagId: 3, tagName: "expozitii"},
    {tagId: 4, tagName: "concerte"},
    {tagId: 5, tagName: "diverse"}
];

export function getAllTags(): Promise<Array<Tag>> {
    return new Promise(resolve => setTimeout(() => {
        resolve(tags)
    }, 100))
}

export interface ArticleResponse {
    articles: Array<Article>,
    numberOfPages: number
    pageNumber: number
}

let articles: Array<Article> = [
    {
        articleId: 1,
        title: "First Article",
        tag: {...tags[3]},
        contents: [
            {
                type: IMAGE_GROUP,
                imageGroupTitle: "Image Group",
                images: [
                    {
                        type: IMAGE,
                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Parcul_Rozelor_Timisoara_-_entrance.jpg/1920px-Parcul_Rozelor_Timisoara_-_entrance.jpg",
                        imageCaption: "Parcul Rozelor",
                        imageLink: "https://en.wikipedia.org/wiki/Roses_Park,_Timi%C8%99oara"
                    },
                    {
                        type: IMAGE,
                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Parcul_Rozelor_Timisoara_-_entrance.jpg/1920px-Parcul_Rozelor_Timisoara_-_entrance.jpg",
                        imageCaption: "Parcul Rozelor2",
                        imageLink: "https://en.wikipedia.org/wiki/Roses_Park,_Timi%C8%99oara"
                    },
                ]
            },
            {
                type: TITLE,
                titleText: "First Title",
                titleVariant: "h4"
            },
            {
                type: IMAGE,
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Parcul_Rozelor_Timisoara_-_entrance.jpg/1920px-Parcul_Rozelor_Timisoara_-_entrance.jpg",
                imageCaption: "Parcul Rozelor",
                imageLink: "https://en.wikipedia.org/wiki/Roses_Park,_Timi%C8%99oara"
            },
            {
                type: PARAGRAPH,
                paragraphContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget erat a ligula accumsan cursus. Aenean tincidunt, neque id dignissim bibendum, urna lectus ornare est, a venenatis eros neque vel velit. Integer vitae urna sed odio volutpat vestibulum. Duis imperdiet, justo sed iaculis volutpat, orci nisi cursus velit, ut ullamcorper dolor nisi vel dolor. Maecenas convallis neque ut mauris egestas mollis. Phasellus eget quam id nulla porttitor aliquet. Vestibulum scelerisque ex eu erat ultricies hendrerit. Proin non auctor sapien. Morbi sollicitudin ut nisl pharetra placerat. Vestibulum enim nulla, consectetur sed suscipit eget, ultrices sed metus. Phasellus condimentum diam sed augue commodo, eget iaculis magna semper. Duis ac nisi a arcu interdum scelerisque. Aenean condimentum laoreet sapien at ullamcorper. Sed ac tortor ullamcorper, aliquam enim non, laoreet enim. Fusce molestie elit quis tempor ultrices."
            },
        ],
        createdAt: "29/10/2019",
        updatedAt: "30/10/2019",
        isVisible: false,
        author: {
            userId: 1,
            email: "author1@go-timisoara.ro",
            username: "author1",
            fullName: "Author Name 1"
        }
    }
];

export function getArticlesAtPage(pageNumber: number, tag: string | null = null): Promise<ArticleResponse> {
    return new Promise(resolve => setTimeout(() => {
        resolve({
            articles: articles.filter((article: Article) => article.tag == tag || tag == null),
            numberOfPages: 1,
            pageNumber: pageNumber
        });
    }, 100))
}

export function getArticleById(articleId: number): Promise<Article | null> {
    const foundArticle = articles.find((article: Article) => article.articleId === articleId);
    return new Promise(resolve => setTimeout(() => {
        resolve(foundArticle ? foundArticle : null);
    }, 100))
}