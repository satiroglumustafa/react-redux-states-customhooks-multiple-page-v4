import { Swiper, SwiperSlide } from "swiper/react";
import MostLikedProduct from "./MostLikedProduct";
import './MostLikedProducts.css'
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useMemo } from "react";
const MostLikedProducts = ({ loadingDataApi, mostLikedDataApi }) => {
  const filteredItem = useMemo(() => {
  return mostLikedDataApi ? mostLikedDataApi.filter(item => item.price > 50) : [];
}, [mostLikedDataApi]);
  return (
    <>
      <Swiper
        navigation={true}
        spaceBetween={20}
        slidesPerView={4}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1, // mobil
          },
          768: {
            slidesPerView: 2, // tablet
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {filteredItem.map((mostLikedApiItem) => {
          return (
            <SwiperSlide key={mostLikedApiItem.id}>
              <MostLikedProduct
                {...mostLikedApiItem}
                loading={loadingDataApi}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default MostLikedProducts;
