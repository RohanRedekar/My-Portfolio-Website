import "./blogs.css";
import kohls_img from "../images/kohls landing page.png";
import internshala_img from "../images/internshala landing page.png";
import masai_img from "../images/masai img.png";
export const Blogs = () => {
  return (
    <div id='blogs' className='blogs_container'>
      <div className='blog_title'>
        <h1>Blogs</h1>
      </div>
      <div className='blogs'>
        <div>
          <a
            href='https://medium.com/@rohan_fw15_333/cloning-kohls-ecommerce-website-dda5c1fa0726'
            target='_blank'
          >
            <img src={kohls_img} alt='kohls_img' />
          </a>
        </div>
        <div>
          <a
            href='https://medium.com/@rohan_fw15_333/clone-of-internshala-website-d058ed71f4dd'
            target='_blank'
          >
            <img src={internshala_img} alt='internshala_img' />
          </a>
        </div>
        <div>
          <a
            href='https://medium.com/@rohan_fw15_333/my-four-weeks-journey-at-masai-school-18e52eea0627'
            target='_blank'
          >
            <img src={masai_img} alt='masai_img' />
          </a>
        </div>
      </div>
    </div>
  );
};
