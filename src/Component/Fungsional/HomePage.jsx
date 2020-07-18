import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
const items = [
    {
      src: 'https://scontent.fjog3-1.fna.fbcdn.net/v/t1.0-9/108136506_3359700284060938_514794203390377651_n.jpg?_nc_cat=108&_nc_sid=730e14&_nc_eui2=AeEn8QMxspTi27zLQ6rMTs-Ta0CgcKYgnrtrQKBwpiCeuxNDp3Fac-S2VD7tJGiO-AT7BcAUupAMsO-kiP3rH6bw&_nc_ohc=ZmxsQEGq_E4AX9y_jKv&_nc_ht=scontent.fjog3-1.fna&oh=07406a17a3f54c597204263fc0a1b954&oe=5F34CD19',
      altText: " ",
      caption: ''
    },
    {
      src: 'https://wallpapercave.com/wp/wc1728920.jpg',
      altText: '',
      caption: ''
    },
    {
      src: 'https://s3-ap-southeast-1.amazonaws.com/moladin.assets/blog/wp-content/uploads/2018/10/12182540/Jangan-abaikan-Ini-3-Tanda-Rantai-Motor-harus-Diganti.jpg',
      altText: '',
      caption: ''
    }
  ];

  const HomePage = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    } 
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
      }
    
      const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
      }
    
      const slides = items.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
          >
            <img src={item.src} alt={item.altText} />
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });
    

    return (
        <div>
           <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
        </div>
    )
}

export default HomePage