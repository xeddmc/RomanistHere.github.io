import { useEffect, useState } from "preact/hooks"
import { Link } from 'preact-router/match'

import LinkBack from '../../components/LinkBack/LinkBack'

import posts from '../../static/posts'
import content from '../../static/content'
import { importAll } from '../../static/functions'

import './Posts.css'

const images = importAll(require.context('../../assets/posts/', false, /\.(png|jpe?g|svg)$/))

const tags = [...new Set(posts.flatMap(item => item.tags))]

const createItem = ({
    title,
    slug,
    posted,
    image,
    desc
}, index) =>
    <article key={index} className="posts__item">
        <Link className="posts__link" href={`/posts/${slug}/`}>
            <img className="posts__img" src={images[image].default} alt={title} loading="lazy"/>
            <h1 className="posts__title">{title}</h1>
            <p className="posts__text">{desc}</p>
            <span className="posts__capt">{posted}</span>
            <span className="posts__mob">Read more</span>
        </Link>
    </article>

const postsByTags = tag =>
    posts.filter(obj => obj.tags.includes(tag))


// const allItems = postsByTags('other').map(createItem)
const allItems = posts.map(createItem)

const Posts = () => {
    const [curTag, setTag] = useState(tags[tags.length - 1])
    let items = postsByTags(curTag).map(createItem)

    const changeTag = (newItem, e) => {
        e.preventDefault()
        setTag(newItem)
        return false
    }

    useEffect(() => {
        if (typeof window !== 'undefined')
            document.title = content.titles.posts

        items = postsByTags(curTag).map(createItem)
    }, [curTag])

  	return 	<section className="main posts">
                <div className="posts__wrap">
                    <div className="posts__nav">
                        <span className="posts__nav_item">All articles:</span>
                    </div>
                    {allItems}
                </div>

                <div className="posts__wrap posts__wrap-filter">
                    <nav className="posts__nav">
                        { tags.map((item, i) =>
                            <a
                                key={item}
                                href="#"
                                onClick={e => changeTag.call(null, item, e)}
                                className={`posts__nav_item ${curTag === item && 'posts__nav_item-active'}`}>{item}</a>) }
                    </nav>

                    {items}
                </div>

                <LinkBack className="posts__back" />
            </section>
}

export default Posts
