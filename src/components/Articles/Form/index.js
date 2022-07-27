import { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialFormValues = { title: "", content: "" };

function Index({ setArticles, articles }) {
  const [articleForm, setArticleForm] = useState(initialFormValues)

  const errorNotify = () => toast.error("Your reseurce can not creating")

  const onChangeInput = (e) => {
    setArticleForm({ ...articleForm, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios.post('https://fe-article-api.herokuapp.com/articles', {
      article: {
        title: articleForm.title,
        content: articleForm.content
      }
    }).then((res) => {
      setArticleForm(initialFormValues)
      setArticles([...articles, res.data])
    }).catch((e) => {
      e.response.data.forEach((errorMessage) => {
        toast.error(errorMessage)
      })
    })
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            name='title'
            placeholder='Title'
            value={articleForm.title}
            onChange={onChangeInput}
          />
        </div>

        <div>
          <textarea
            rows={5}
            name='content'
            placeholder='Content'
            value={articleForm.content}
            onChange={onChangeInput}
          ></textarea>
        </div>

        <br />
        <div className='btn'>
          <button>Add</button>
        </div>
      </form>
      <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar={false}
        pauseOnHover
        closeOnClick
        rtl={false}
        draggable
      />
    </div>
  )
}

export default Index