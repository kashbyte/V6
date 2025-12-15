type Post = {
  id: string;
  mood: string;
  note: string;
  session_id: string;
  time: number;
};

export default function FeedCard({ post }: { post: Post }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "12px",
        marginBottom: "12px",
      }}
    >
      <div style={{ fontSize: "24px" }}>{post.mood}</div>
      {post.note && <div>{post.note}</div>}
      <div style={{ fontSize: "12px", color: "#666" }}>
        Posted by {post.session_id} at {new Date(post.time).toLocaleString()}
      </div>
    </div>
  );
}
