import { useState } from 'react'
import Form from './Form/index'
import List from './List/index'
import "./styles.css";

function Index() {
  const [articles, setArticles] = useState([])

  return (
    <div id='container'>
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