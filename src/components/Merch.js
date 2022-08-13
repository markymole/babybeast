// import renderHTML from 'react-render-html';
import merchlogo from '../assets/logos/Hanger BB.png';
import tshirt from '../assets/tshirt.png';
import logo from '../assets/logos/BB.png';
import ScrollAnimation from 'react-animate-on-scroll';
// import axios from 'axios';
import './Merch.css';
import { useEffect, useState } from 'react';


const Merch = () => {

  const [hovered, setHovered] = useState(true);
  const [ishover, setIsHovered ] = useState(false);
  const [anotherbool, setbool] = useState(false)

  const isHovered = () => setHovered(false)
  const notHovered = () => setHovered(true)

  const isHover = () => setIsHovered(true);
  const isnotHover = () => setIsHovered(false);

  const istrue = () => setbool(true);
  const isfalse = () => setbool(false);

  const [hovered2, setHovered2] = useState(true);
  const [ishover2, setIsHovered2 ] = useState(false);
  const [anotherbool2, setbool2] = useState(false)

  const isHovered2 = () => setHovered2(false)
  const notHovered2 = () => setHovered2(true)

  const isHover2 = () => setIsHovered2(true);
  const isnotHover2 = () => setIsHovered2(false);

  const istrue2 = () => setbool2(true);
  const isfalse2 = () => setbool2(false);

  // useEffect(() => {
  //   isHover();
  // }, [])
  return (
    <>
      <div className='merch'>
          <div className='headings'>
            <div>
              <ScrollAnimation animateIn="fadeIn">
              <h1 className='head'>MERCH DROPS</h1>
              <img src={merchlogo} alt="BB Merch Logo" className='merchlogo'/>  
              </ScrollAnimation>
            </div>
          </div>
          <div className='shirts-container'>
            <ScrollAnimation animateIn="fadeIn">
            <div className="shirts">
              <div className='shirt'>
                  <div className={anotherbool? 'hovered' : 'not-hovered'}>
                    <a role="link" aria-disabled="true" className='merch-link'><img src={tshirt} alt='shirt-name' onMouseEnter={() => {istrue(); isHovered();}} onMouseLeave={() => {isfalse(); notHovered();}} className='merch-image' id=''/></a>  
                  </div>
              </div>
              <div className='shirt' id='mid-shirt'>
                  <div className={hovered? 'hovered' : 'not-hovered'}>
                    <a role="link" aria-disabled="true" className='merch-link'><img src={tshirt} alt='shirt-name' onMouseEnter={notHovered} className='merch-image' id=''/></a>  
                  </div>
              </div>
              <div className='shirt'>
                  <div className={ishover? 'hovered' : 'not-hovered'}>
                    <a role="link" aria-disabled="true" className='merch-link'><img src={tshirt} alt='shirt-name' onMouseEnter={() => {isHover(); isHovered();}} onMouseLeave={() => {isnotHover(); notHovered();}} className='merch-image' id=''/></a>  
                  </div>
              </div>
            </div>
            </ScrollAnimation>
            <div className='shirt-center-text'>
                <p className='shirt-text'>Find out how to get your BABYBEAST on our Apparels! Stay tuned on our Discord</p>
            </div>
            <ScrollAnimation animateIn="fadeIn">
            <div className="shirts" id='second-shirts'>
              <div className='shirt'>
                  <div className={anotherbool2? 'hovered' : 'not-hovered'}>
                    <a role="link" aria-disabled="true" className='merch-link'><img src={tshirt} alt='shirt-name' onMouseEnter={() => {istrue2(); isHovered2();}} onMouseLeave={() => {isfalse2(); notHovered2();}} className='merch-image' id=''/></a>  
                  </div>
              </div>
              <div className='shirt' id='mid-shirt'>
                  <div className={hovered2? 'hovered' : 'not-hovered'}>
                    <a role="link" aria-disabled="true" className='merch-link'><img src={tshirt} alt='shirt-name' onMouseEnter={notHovered2} className='merch-image' id=''/></a>  
                  </div>
              </div>
              <div className='shirt'>
                  <div className={ishover2? 'hovered' : 'not-hovered'}>
                    <a role="link" aria-disabled="true" className='merch-link'><img src={tshirt} alt='shirt-name' onMouseEnter={() => {isHover2(); isHovered2();}} onMouseLeave={() => {isnotHover2(); notHovered2();}} className='merch-image' id=''/></a>  
                  </div>
              </div>
            </div>
            </ScrollAnimation>
            <div className='shirt-center-text-mobile'>
                <p className='shirt-text-mobile'>Find out how to get your BABYBEAST on our Apparels! Stay tuned on our Discord</p>
            </div>
          </div>
      </div>
    </>
  )
}

export default Merch

// class Merch extends React.Component {

  
//   constructor( props ) {
//       super( props );

//       this.state = {
//           loading: false,
//           hovered: false,
//           posts: [],
//           error: ''
//       }
//   }

//   componentDidMount() {
//       const wordPressSiteUrl =  'http://localhost/babybeast/';
//       this.setState ( { loading: true }, () => {
//         axios.get ( `${wordPressSiteUrl}wp-json/wp/v2/posts` )
//             .then( res => {
//                 this.setState({loading: false, posts: res.data})
//             })
//             .catch( error => {
//                 this.setState({loading: false, error: error.response.data})
//             })
//       });
//   }

//   notHovered = () => {
//     this.setState({hovered: false});
//   }

//   isHovered = () => {
//     this.setState({hovered: true});
//   }



//   render() {

//     const { posts } = this.state;
//     const hovered = this.state.hovered;
    
//     return (
//         <>
//           <div className='merch'>
//               <div className='headings'>
//                 <div>
//                   <h1 className='head'>MERCH DROPS</h1>
//                   <img src={merchlogo} alt="BB Merch Logo" className='merchlogo'/>  
//                 </div>
//               </div>
//               <div className='shirts-container'>
//                   {posts.length ? (
//                       <div className='shirts'>
//                           {posts.map(post => (
//                               <div key={post.id}>
//                                   <div className={hovered? 'hovered' : 'not-hovered'}>
//                                     <a href="/" className='merch-link'><img src={tshirt} alt={post.slug} onMouseEnter={this.isHovered} onMouseLeave={this.notHovered} className='merch-image' id=''/></a>  
//                                   </div>
//                                   <div className='merch-name'>
//                                     <img src={logo} alt="BabyBeast Logo" className='logo'/>
//                                     <h1>{post.title.rendered}</h1>
//                                   </div>
//                               </div>
//                           ))}
//                       </div>
//                   ): ''}

//               </div>
//               <div className='shirts-container-2'>
//                   {posts.length ? (
//                       <div className='shirts'>
//                           {posts.map(post => (
//                               <div key={post.id}>
//                                   <div className={hovered? 'hovered' : 'not-hovered'}>
//                                     <a href="/" className='merch-link-2'><img src={tshirt} alt={post.slug} onMouseEnter={this.isHovered} onMouseLeave={this.notHovered} className='merch-image-2' id=''/></a>  
//                                   </div>
//                                   <div className='merch-name'>
//                                     <img src={logo} alt="BabyBeast Logo" className='logo'/>
//                                     <h1>{post.title.rendered}</h1>
//                                   </div>
//                               </div>
//                           ))}
//                       </div>
//                   ): ''}

//               </div>
//           </div>
//         </>
//       )
//   }
 
// }