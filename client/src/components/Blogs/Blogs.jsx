import "./Blogs.css";

const blogs = [
  {
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
    title: "5 Tips for Better Health",
    date: "June 16, 2026",
    description:
      "Simple lifestyle changes that can improve your overall health and well-being.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800",
    title: "How to Store Medicines Safely",
    date: "June 14, 2026",
    description:
      "Learn the proper way to store medications to maintain effectiveness.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800",
    title: "Importance of Regular Checkups",
    date: "June 12, 2026",
    description:
      "Preventive healthcare can save lives. Here's why regular checkups matter.",
  },
];

function Blogs() {
  return (
    <section className="blogs">
      <div className="blogs-container">

        <div className="section-title">
          <span>LATEST BLOGS</span>

          <h2>
            Health News & Tips
          </h2>
        </div>

        <div className="blogs-grid">

          {blogs.map((blog, index) => (
            <div className="blog-card" key={index}>

              <div className="blog-image">
                <img
                  src={blog.image}
                  alt={blog.title}
                />
              </div>

              <div className="blog-content">

                <span className="blog-date">
                  {blog.date}
                </span>

                <h3>{blog.title}</h3>

                <p>{blog.description}</p>

                <button>
                  Read More
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Blogs;