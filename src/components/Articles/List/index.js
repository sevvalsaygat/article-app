import { useEffect } from 'react'
import axios from 'axios'

function Index({ articles, setArticles }) {

  useEffect(() => {
    axios
      .get('https://fe-article-api.herokuapp.com/articles')
      .then((res) => {
        setArticles(res.data)
      })
  }, [])

  return (
    <div>
      <ul className='list'>
        {articles.map((article, i) => (
          <li key={i}>
            <span>{article.title}</span>
            <span>{article.content}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Index