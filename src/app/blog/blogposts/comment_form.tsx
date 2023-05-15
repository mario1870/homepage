"use client"


export default function CommentForm(){

    const addComment = async (e: React.FormEvent<HTMLFormElement>) => {
    
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
    
        const body = {
          content: formData.get('comment'),
          authorId: 3,
        };
    
        const res = await fetch('/api/add_comments', {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        await res.json();
      };
    
    return(
      <form onSubmit={addComment} method="POST">
        <textarea name="comment" className="comment_textbox" placeholder="Write here..." />
        <input type="submit" />
      </form>
    )
}