import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAddItemToCart } from "../features/CartSlice";

const iconStyle = 'h-[37px] w-[37px] rounded-full bg-[#894af3]/80 text-white flex items-center justify-center m-3 hover:bg-[#894af3] hover:scale-[1.1] ease-in duration-100 cursor-pointer'

const Product = ({ product }) => {

  const { id, img, title, desc, price } = product

  const dispatch = useDispatch()

  const handleBuyItem =() =>{
    const item = { id, img, title, desc, price } 
    dispatch(setAddItemToCart(item ))
  }



  return (
    <div className="flex-1 flex m-2 mb-6 flex-wrap border-2 justify-center border-gray-200 min-w-[230px] min-h-[230px] md:min-w-[280px] md:min-h-[320px] overflow-hidden rounded-md shadow-lg hover:scale-105 ease-in duration-300"
    >
      <div className='relative flex justify-center items-center'>
        {/* image */}
        <img style={{ width: "100%", height: "100%" }} src={img} alt="product" />

        {/* impression button */}
        <div className={`flex top-[80%] justify-center absolute w-[100%] h-[50%] ease-in duration-100`}>
            <button type="button" className={iconStyle} onClick={handleBuyItem}>
              <ShoppingCartOutlined  />
            </button>
          <Link to="/product" state={{ product }}>
            <div className={iconStyle}>
              <FavoriteBorderOutlined  />
            </div>
          </Link>
          <Link to="/product" state={{ product }}>
            <div className={iconStyle}>
              <SearchOutlined  />
            </div>
          </Link>
        </div>
      </div>

      {/* product details */}
      <div className="bottom-0 w-full ease-in duration-100 rounded-b-md border-2 border-gray-200 bg-[#ECF2FF]">
        <div className="flex flex-col p-2 items-center justify-center ">
          <h1 className="text-center text-lg font-bold text-gray-700">{title}</h1>
          <p className="my-1 text-[16px]">{desc.substring(0, 80)}...</p>
          <div className="flex flex-row w-full mx-11 justify-around items-center">
            <div className="font-bold">
              Price: <span>$</span><span>{price}</span>
            </div>
            <Link to="/product" state={{ product }}>
              <button className=" text-white bg-[#894af3] hover:bg-[#422077] rounded-md shadow-md my-[10px] px-2 p-1">Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

