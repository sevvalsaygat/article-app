import { useState } from 'react'
import Form from './Form/index'
import List from './List/index'

function Index() {
  const [articles, setArticles] = useState([])

  return (
    <div>
      <List
        articles={articles}
        setArticles={setArticles}
      />
      <Form
        setArticles={setArticles}
        articles={articles}
      />
    </div>
  )
}

export default Index