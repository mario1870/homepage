import "./blog_singlepage.scss"
import { useSelector, useDispatch } from 'react-redux';
import CommentForm from "./comment_form";

interface Post {
    id: number;
    title: string;
    content: string;
    published: boolean;
    authorId: number;
  }
  
  interface Props {
    params: { id: number };
  }


  export default async function Page({ params }: Props) {
    const blogposts: Post[] = await fetch("http://localhost:3000/api/get_blogposts").then(
      (res) => res.json()
    );

    console.log(blogposts)
  
    const blogpost = blogposts.find((post) => post.id === Number(params.id));

  
    return (
      <>
      <div className="page">
        {blogpost ? (
          <div className="blogpost_box">

            <div>
              <h1 className="blogpost_title">{blogpost.title}</h1>
              <p className="blogpost_content">{blogpost.content}</p>              
            </div>

            <div className="comment_section">
              <div>
                <h2 className="add_comment_label">Kommentar hinzufügen</h2>
                <CommentForm />
              </div>
            </div>

          </div>
        ) : (
          <h1 style={{ color: "white"}}>Blogpost nicht gefunden: {blogpost}</h1>
        )}

      </div>
      </>
    );
  }
  