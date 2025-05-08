import { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, User } from 'lucide-react';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: 'Enrich Your Mind, Envision Your Future: Education for Success',
    author: 'David Smith',
    date: '03 Jun, 2023',
    excerpt: '',
    image: 'https://themeholy.com/html/edura/demo/assets/img/blog/blog-s-1-5.jpg',
  },
  {
    id: 2,
    title: 'University class starting soon while the lovely valley team work',
    author: 'David Smith',
    date: '10 Jul, 2023',
    excerpt: '',
    image: 'https://themeholy.com/html/edura/demo/assets/img/blog/blog_inner_1.jpg',
  },
  {
    id: 3,
    title: 'Educate, Empower, Excel: Discover the Power of Learning!',
    author: 'David Smith',
    date: '05 Jun, 2023',
    excerpt: '',
    image: 'https://weblayout.unicktheme.com/fistudy/main-html/assets/images/blog/blog-1-2.jpg',
  },
  {
    id: 4,
    title: 'The Future of Online Learning',
    author: 'David Smith',
    date: '12 Aug, 2023',
    excerpt: '',
    image: 'https://weblayout.unicktheme.com/fistudy/main-html/assets/images/blog/blog-1-3.jpg',
  },
  {
    id: 5,
    title: 'How Technology is Changing Education Forever',
    author: 'David Smith',
    date: '22 Sep, 2023',
    excerpt: '',
    image: 'https://weblayout.unicktheme.com/fistudy/main-html/assets/images/blog/blog-1-1.jpg',
  }
];

export default function BlogCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  
  const goToPrevious = () => {
    setStartIndex((prevIndex) => 
      prevIndex === 0 ? blogPosts.length - 3 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setStartIndex((prevIndex) => 
      prevIndex === blogPosts.length - 3 ? 0 : prevIndex + 1
    );
  };
  
  // Get the visible posts based on current index
  const visiblePosts = [
    blogPosts[(startIndex) % blogPosts.length],
    blogPosts[(startIndex + 1) % blogPosts.length],
    blogPosts[(startIndex + 2) % blogPosts.length]
  ];

  return (
    <div className='blog-container'>
    <div className="blog-section">
      <div className="blog-header">
        <div className="blog-label">
          {/* <div className="blog-icon"></div> */}
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
            OUR NEWS & BLOGS
          </span>
        </div>
        <h2>Latests News & Blogs</h2>
        <button className="view-all-btn">VIEW ALL POSTS <ChevronRight size={16} /></button>
      </div>

      <div className="blog-carousel">
        <button className="nav-btn prev-btn" onClick={goToPrevious}>
          <ChevronLeft size={24} />
        </button>
        
        <div className="blog-cards">
          {visiblePosts.map((post) => (
            <div className="blog-card" key={post.id}>
              <div className="blog-image" style={{ backgroundImage: `url(${post.image})` }}>
                <div className="overlay"></div>
                <div className="blog-meta">
                  <div className="author-info">
                    <User size={16} />
                    <span>by {post.author}</span>
                  </div>
                  <div className="date-info">
                    <Clock size={16} />
                    <span>{post.date}</span>
                  </div>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                {post.id === 2 && (
                  <div className="read-more">
                    READ MORE DETAILS <ChevronRight size={14} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <button className="nav-btn next-btn" onClick={goToNext}>
          <ChevronRight size={24} />
        </button>
      </div>

     
    </div>

    <style jsx>{`
        .blog-container {
        background-color: rgba(233, 243, 255, 0.54);
        margin: 5rem auto;
        padding: 4rem 2rem;
        }
        .blog-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          font-family: 'Arial', sans-serif;
        //   background-color: #f8f5ff;
        //   border: 2px solid #000;
        }
        
        .blog-header {
          display: flex;
          flex-direction: column;
          margin-bottom: 40px;
          position: relative;
        }
        
        .blog-label {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }
        
        .blog-icon {
          width: 16px;
          height: 16px;
          background-color: #0075ff;
          margin-right: 8px;
        }
        
        .blog-label span {
          color: #0075ff;
          font-size: 14px;
          font-weight: 600;
        }
        
        .blog-header h2 {
          font-size: 36px;
          font-weight: bold;
          color: #0f172a;
          margin: 0;
        }
        
        .view-all-btn {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          background-color: #164276;
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 4px;
        //   font-weight: 600;
        font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .view-all-btn:hover {
          background-color:rgb(15, 43, 78);
        }
        
        .blog-carousel {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }
        
        .nav-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: white;
          border: none;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          color: #0075ff;
        }

        .nav-btn:hover {
          color: #ffffff;
          background-color: #0075ff;
        }
        
        .blog-cards {
          display: flex;
          gap: 20px;
          width: calc(100% - 100px);
          margin: 0 auto;
        }
        
        .blog-card {
          flex: 1;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          background-color: white;
          height: 280px;
        }
        
        .blog-image {
          width: 100%;
          height: 100%;
          position: relative;
          background-size: cover;
          background-position: center;
        }
        
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%);
        }
        
        .blog-meta {
          position: absolute;
          top: 20px;
          left: 20px;
          display: flex;
          gap: 15px;
        }
        
        .author-info, .date-info {
          display: flex;
          align-items: center;
          gap: 5px;
          color: white;
          font-size: 14px;
        }
        
        .blog-title {
          position: absolute;
          bottom: 25px;
          left: 20px;
          right: 20px;
          color: white;
          margin: 0;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
        }
        
        .read-more {
          position: absolute;
          bottom: 20px;
          left: 20px;
          color: white;
          font-size: 14px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 5px;
        }
      `}</style>
    </div>
  );
}