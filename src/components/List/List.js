import React, { useState, useEffect, useRef, useCallback } from "react";
import Arrows from "../Arrows/Arrows";
import "./List.css";



function List({
  Component,
 
}) {
  
  let ref = useRef();
  let scrollLeftValue = 0;
  const [scrollSize, setScrollSize] = useState(0);
  const [isPrevExist, setIsPrevExist] = useState(false);
  const [isNextExist, setIsNextExist] = useState(true);

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);




  useEffect(() => {
    
      let arr = [
       
          {
              id: 1,
              types: 'types__1',
              img: '../../images/img1.png',
              title: 'Как повысить удои коров',
              date: '12 февраля 2024',
              classname:"img1",
              clas:"image1",
              titleClass:"title-class1"
          },
          {
              id: 2,
              types: 'types__2',
              img: '../../images/img2.png',
              title: 'Как повысить удои коров',
              date: '12 февраля 2024',
              classname:"img2",
              clas:"image1",
              titleClass:"title-class1"
          },
          {
              id: 3,
              types: 'types__3',
              img: '../../images/img3.png',
              title: 'Как повысить удои коров: факторы, от которых зависит молочная продуктивность',
              date: '12 февраля 2024',
              classname:"img3",
              clas:"image3",
              titleClass:"title-class3"
          },
          {
              id: 4,
              types: 'types__4',
              img: '../../images/img4.png',
              title: 'Как повысить удои коров',
              date: '12 февраля 2024',
              classname:"img4",
              clas:"image1",
              titleClass:"title-class1"
          },
          {
              id: 5,
              types: 'types__5',
              img: '../../images/img5.png',
              title: 'Как добиться высокого прироста поросят',
              date: '12 февраля 2024',
              classname:"img5",
              clas:"image1",
              titleClass:"title-class5"
          },
          
      
        
         

      ]
      
       setData(arr)
  }, []);

  useEffect(() => {
    ref.current.style.scrollBehavior = "smooth";

    const elementSize =
      ref.current && ref.current.firstChild && data.length > 0
        ? ref.current.firstChild.offsetWidth
        : 0;
    setScrollSize(elementSize);

    if (ref.current.offsetWidth >= ref.current.scrollWidth) {
      setIsNextExist(false);
      setIsPrevExist(false);
    }
  }, [data]);


  

  const needFetch = () => {
    const rightPart =
      ref.current.scrollWidth -
        ref.current.scrollLeft -
        ref.current.clientWidth <=
      scrollSize;
    if (rightPart) {
      return true;
    } else return false;
  };

  const setScrollLeftValue = (callback) => {
    if (needFetch()) {
    }
    scrollLeftValue = ref.current.scrollLeft;
    scrollLeftValue = callback(scrollLeftValue);
    if (scrollLeftValue > 0) {
      ref.current.scrollLeft = scrollLeftValue;
      setIsPrevExist(true);

      if (
        ref.current.offsetWidth + ref.current.scrollLeft >=
        ref.current.scrollWidth
      ) {
        setIsNextExist(false);
      } else {
        setIsNextExist(true);
      }
    } else {
      scrollLeftValue = 0;
      ref.current.scrollLeft = 0;
      setIsNextExist(true);
    }

    if (ref.current.offsetWidth >= ref.current.scrollWidth) {
      setIsNextExist(false);
      setIsPrevExist(false);
    }

   
  };



  const onScroll = useCallback(() => {

    ref.current.style.scrollBehavior = "smooth";

    const elementSize = ref.current.firstChild.offsetWidth
   
    setScrollSize(elementSize);




    if (ref.current.scrollLeft > 0) {
      setIsPrevExist(true);
      if (
        ref.current.offsetWidth + ref.current.scrollLeft >=
        ref.current.scrollWidth
      ) {
        setIsNextExist(false);
      } else {
        setIsNextExist(true);
      }
    } else {
      setIsPrevExist(false);
      setIsNextExist(true);
    }
    if (needFetch()) {
    }
  }, [ref, page]);

  return (
    <div className="list-container">
      <div
        className={`list-items-container`}
        ref={ref}
        onScroll={onScroll}
       
      >
       
         { data.map((item) => {
              return (
                <div key={item.id} className="slide">
                  <Component cardData={item} />
                </div>
              );
            })
          }
         
      </div>

      {data && data.length ? (
        <div className='list-arrows-container'>
          <Arrows
            isPrevExist={isPrevExist}
            isNextExist={isNextExist}
            handleScroll={setScrollLeftValue}
            scrollSize={scrollSize}
          />
        </div>
      ) : null}
    </div>
  );
}

export default List;
