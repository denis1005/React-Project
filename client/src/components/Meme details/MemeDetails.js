/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import * as memeServices from "../../Service/memeServices"
import { useNavigate } from 'react-router-dom';
import { MemeContext } from '../../context/Memecontext';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export const MemeDetails=()=>{
    const { user } = useContext(AuthContext);
    const { memeDelete,memeEdit } = useContext(MemeContext);
    const navigate = useNavigate();
    const { memeId } = useParams();
    const [selected, setSelected] = useState({});
    
  
    useEffect(() => {
      memeServices.getOne(memeId)
        .then(result => {
          setSelected(result);
          
        });
    }, [])
  
  

    const OnDeleteHandler=(e)=>{
      memeServices.deleteOne(memeId)
      .then((res)=>{
        memeDelete(memeId)
        navigate('/memes')
      })
      .catch((err)=>{
        console.log(err)
      })
    }

    const OnLikeHandler=(e)=>{
      selected.likes++
      memeServices
      .updateOne(memeId,selected)
      .then(res=>{
         memeEdit(memeId,selected)
         navigate(`/memes/details/${memeId}`)
      })
      .catch((err)=>{
          console.log(err)
      })
    }

   

    

    return(
    <section className="u-align-center u-clearfix u-section-1" id="sec-fff7">
  <div className="u-clearfix u-sheet u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-sheet-1">
    {/*post_details*/}
    {/*post_details_options_json*/}
    {/*{"source":""}*/}
    {/*/post_details_options_json*/}
    {/*blog_post*/}
    <div className="u-container-style u-expanded-width u-post-details u-post-details-1">
      <div className="u-container-layout u-container-layout-1">
        {/*blog_post_image*/}
        <img
          alt=""
          className="u-blog-control u-expanded-width u-hover-feature u-image u-image-default u-image-1"
          src={selected.imgUrl}
        />
        {/*/blog_post_image*/}
        {/*blog_post_header*/}
        <h2 className="u-blog-control u-text u-text-1">
          <a className="u-post-header-link" href="blog/post-5.html">
            {/*blog_post_header_content*/}{selected.title}
            {/*/blog_post_header_content*/}
          </a>
        </h2>
        {/*/blog_post_header*/}
        <h3
          className="u-text u-text-2"
          data-animation-name="counter"
          data-animation-event="scroll"
          data-animation-duration={3000}
        >
          Likes:{selected.likes}
        </h3>
        {user.email
          ?   <div className="btn-group">
                 {user._id==selected._ownerId
                    ? <>
                          <Link
                    to={`/memes/edit/${memeId}`}
                    className="u-btn u-btn-round u-button-style u-hover-palette-1-light-1 u-palette-1-base u-radius-50 u-btn-2"
                  >
                    Edit
                         </Link>
                         <button onClick={OnDeleteHandler}
                    href="https://nicepage.com/website-mockup"
                    className="u-btn u-btn-round u-button-style u-hover-palette-1-light-1 u-palette-1-base u-radius-50 u-btn-3"
                  >
                    Delete
                         </button>
                      </>
                     : <>
                         <button onClick={OnLikeHandler}
            className="u-btn u-btn-round u-button-style u-hover-palette-1-light-1 u-palette-1-base u-radius-50 u-btn-3"
          >
            Like
                         </button>
                     </>
                 }
    
         
              </div>

          : <div style={{display: 'flex', alignItems:'center',justifyContent:'center'}}>
            <h1>You need to be log in to like the meme</h1>
            </div>
        }
       
      </div>
    </div>
    {/*/blog_post*/}
    {/*/post_details*/}
  </div>
</section>
    )

}