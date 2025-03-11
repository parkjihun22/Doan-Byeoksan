// import { useRef, useState } from "react";
// import { useMediaQuery } from "react-responsive";
// import styles from "./UrlContainer.module.scss"; // ✅ 확장자 scss로 수정!
// import urlList from "../../UrlList"; // ✅ 경로 수정 (상위 폴더)

// const UrlContainer = () => {
//     const containerRef = useRef(null);
//     const isMobile = useMediaQuery({ query: "(max-width: 900px)" });
//     const [scrollIndex, setScrollIndex] = useState(0);

//     const visibleItems = isMobile ? 3 : 5;
//     const itemWidth = isMobile ? 27 : 16;

//     const handleScroll = (direction) => {
//         if (!containerRef.current) return;

//         let newIndex = scrollIndex + (direction === "left" ? -visibleItems : visibleItems);

//         if (newIndex < 0) newIndex = 0;
//         else if (newIndex > urlList.length - visibleItems) newIndex = urlList.length - visibleItems;

//         setScrollIndex(newIndex);

//         containerRef.current.scrollTo({
//             left: newIndex * ((itemWidth * window.innerWidth) / 100),
//             behavior: "smooth",
//         });
//     };

//     return (
//         <div className={styles.container}>
//             <div className={styles.title}>전국 주요 분양 단지</div>
//             <div className={styles.wrapper}>
//                 <button className={styles.btn} onClick={() => handleScroll("left")}>◀</button>
//                 <div className={styles.scrollBox} ref={containerRef}>
//                     {urlList.map((item, index) => (
//                         <a
//                             key={index}
//                             href={item.url}
//                             target="_blank"
//                             rel="nofollow noopener noreferrer"
//                             className={styles.item}
//                         >
//                             <img src={item.image} alt={item.image_alt} className={styles.image} />
//                             <span className={styles.name}>{item.name}</span>
//                         </a>
//                     ))}
//                 </div>
//                 <button className={styles.btn} onClick={() => handleScroll("right")}>
//                     ▶
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default UrlContainer;
