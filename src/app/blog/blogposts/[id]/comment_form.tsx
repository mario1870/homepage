"use client"
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function CommentForm(){

    const addComment = async (e: React.FormEvent<HTMLFormElement>) => {
    
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
    
        const body = {
          comment: formData.get('comment'),
          authorId: 3,
        };
    
        const res = await fetch('/api/add_comments', {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
              Referer: window.location.href
          },
        });
        
        await res.json();
      };
    
    return(
      <form onSubmit={addComment} method="POST" style={{ display: "flex", flexDirection: "column", padding: "2rem"}}>
        <textarea name="comment" className="comment_textbox" placeholder="Write here..." style={{width: "100%"}} />
        <Button variant="contained" endIcon={<SendIcon />} style={{ marginTop: "0rem", width: "100%", borderRadius: "0 0 2rem 2rem" }}>
          Send
        </Button>
      </form>

    )
}