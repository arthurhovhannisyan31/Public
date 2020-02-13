// external libraries
import React from 'react'
import PropTypes from 'prop-types'
// local services & data store
// local containers
// local components
// local constants
// local styles
import './spinner.style.scss'

const Spinner = ({width, height}) => {

  return (
    <div
      className='spinner'
      style={{
        width: `${width}px`,
        height: `${height}px`
      }}
    >
       <div className="container">
         <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0 200,200">
           <defs>
             {/* Ring shape centred on 100, 100 with inner radius 90px, outer radius 100px and a 12 degree gap at 348. */}
             <clipPath id="ring">
               <path d="M 200, 100
                     A 100, 100, 0, 1, 1, 198, 80.1
                     L 164.61, 86.9
                     A 66, 66, 0, 1, 0, 165.94, 99.9
                     z"
               />
             </clipPath>

             {/* Very simple Gaussian blur, used to visually merge sectors. */}
             <filter id="blur" x="0" y="0">
               <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
             </filter>

             {/* A 12 degree sector extending to 150px. */}
             <path id="p" d="M 250, 100
                        A 150, 150, 0, 0, 1, 246.72, 131.19
                        L 100, 100
                        A 0, 0, 0, 0, 0, 100, 100 z" fill="rgba(255,255,255,0.99)"/>
           </defs>

           {/* Clip the blurred sectors to the ring shape. */}
           <g clipPath="url(#ring)">

             {/* Blur the sectors together to make a smooth shape and rotate */}
             {/*     them anti-clockwise by 6 degrees to hide the seam where the */}
             {/*     fully opaque sector blurs with the fully transparent one. */}
             <g filter="url(#blur)" transform="rotate(-6 100 100)">

               {/* Each successive sector increases in opacity and is rotated */}
               {/*    by a further 12 degrees. */}
               <use xlinkHref="#p" fillOpacity="0.011"    transform="rotate(  0 100 100)"/>
               <use xlinkHref="#p" fillOpacity="0.0342" transform="rotate( 12 100 100)"/>
               <use xlinkHref="#p" fillOpacity="0.0684" transform="rotate( 24 100 100)"/>
               <use xlinkHref="#p" fillOpacity="0.1026"  transform="rotate( 36 100 100)"/>
               <use xlinkHref="#p" fillOpacity="0.1368" transform="rotate( 48 100 100)"/>
               <use xlinkHref="#p" fillOpacity="0.171" transform="rotate( 60 100 100)"/>
               <use xlinkHref="#p" fillOpacity="0.2052"  transform="rotate( 72 100 100)"/>
               <use xlinkHref="#p" fillOpacity="0.2394" transform="rotate( 84 100 100)"/>
               <use xlinkHref="#p" fillOpacity="0.2736" transform="rotate( 96 100 100)"/>
               <use xlinkHref="#p" fillOpacity="0.3078" transform="rotate(108 100 100)"/>
               <use xlinkHref="#p" fillOpacity="0.342" transform="rotate(120 100 100)"/>
               <use xlinkHref="#p" fillOpacity="0.3762" transform="rotate(132 100 100)"/>
               <use xlinkHref="#p" fillOpacity="0.4104" transform="rotate(144 100 100)"/>
               <use xlinkHref="#p" fillOpacity="0.4446" transform="rotate(156 100 100)"/>
               <use xlinkHref="#p" fillOpacity="0.4788" transform="rotate(168 100 100)"/>
               <use xlinkHref="#p" fillOpacity="0.513" transform="rotate(180 100 100)"/>
               <use xlinkHref="#p" fillOpacity="0.5472" transform="rotate(192 100 100)"/>
               <use xlinkHref="#p" fillOpacity="0.5814" transform="rotate(204 100 100)"/>
               <use xlinkHref="#p" fillOpacity="0.6156" transform="rotate(216 100 100)"/>
               <use xlinkHref="#p" fillOpacity="0.6498" transform="rotate(228 100 100)"/>
               <use xlinkHref="#p" fillOpacity="0.684" transform="rotate(240 100 100)"/>
               <use xlinkHref="#p" fillOpacity="0.7182"  transform="rotate(252 100 100)"/>
               <use xlinkHref="#p" fillOpacity="0.7524" transform="rotate(264 100 100)"/>
               <use xlinkHref="#p" fillOpacity="0.7866" transform="rotate(276 100 100)"/>
               <use xlinkHref="#p" fillOpacity="0.8208" transform="rotate(288 100 100)"/>
               <use xlinkHref="#p" fillOpacity="0.855" transform="rotate(300 100 100)"/>
               <use xlinkHref="#p" fillOpacity="0.8892" transform="rotate(312 100 100)"/>
               <use xlinkHref="#p" fillOpacity="0.9234" transform="rotate(324 100 100)"/>
               <use xlinkHref="#p" fillOpacity="0.9576" transform="rotate(336 100 100)"/>
               <use xlinkHref="#p" fillOpacity="1"    transform="rotate(348 100 100)"/>
             </g>
           </g>
         </svg>
       </div>
    </div>
  )
};

Spinner.defaultProps = {
  width: 200,
  height: 200
};

Spinner.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

export default Spinner

