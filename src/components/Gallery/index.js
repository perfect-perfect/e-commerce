import React from 'react';
import productImage1 from '../../assets/images/procuct-image-1.webp';
import { Card, GalleryWrapper } from './style';

function Gallery() {
  return (
    <GalleryWrapper>
        <Card> 
            <div>
                <img src={productImage1} alt='product'></img>
            </div>
            <div>
                {/* brand */}
                <span>GR10K</span>
            </div>
            <div>
                {/* product name */}
                <span>Black Aimless Sweater</span>
            </div>
            <div>
                {/* price */}
                <span>$585</span>
            </div>
        </Card>
        <Card> 
            <div>
                <img src={productImage1} alt='product'></img>
            </div>
            <div>
                {/* brand */}
                <span>GR10K</span>
            </div>
            <div>
                {/* product name */}
                <span>Black Aimless Sweater</span>
            </div>
            <div>
                {/* price */}
                <span>$585</span>
            </div>
        </Card>
        <Card> 
            <div>
                <img src={productImage1} alt='product'></img>
            </div>
            <div>
                {/* brand */}
                <span>GR10K</span>
            </div>
            <div>
                {/* product name */}
                <span>Black Aimless Sweater</span>
            </div>
            <div>
                {/* price */}
                <span>$585</span>
            </div>
        </Card>
    </GalleryWrapper>

  )
}

export default Gallery