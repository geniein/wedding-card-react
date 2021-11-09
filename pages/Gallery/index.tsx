import useScrollFadeIn from '@hooks/useScrollFadeIn';
import React, { FC } from 'react';
import ImageGallery from 'react-image-gallery';
import {Row, Col} from 'reactstrap';

interface Props{
    init: any
}

const Gallery:FC<Props> = ({init}) =>{
    const photos = init.photos;
    const animatedItem = useScrollFadeIn('up',1,0.1)
    return (
        <div {...animatedItem}>
        <Row className="bm-5">
            <Col>
            <ImageGallery items={photos}/>
            </Col>
        </Row>
        </div>
    )
}

export default Gallery