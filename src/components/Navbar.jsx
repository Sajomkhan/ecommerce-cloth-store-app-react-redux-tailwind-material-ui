import { Badge } from '@mui/material';
import Announce from './Annoucne'
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalQTY, setOpenCart } from '../features/CartSlice.js';
import Carts from '../pages/Carts';

const style =
  'text-[14px], cursor-pointer, ml-[25px] hover:text-blue-700 md:font-bold';

const Navbar = () => {

  const dispatch = useDispatch();
  const totalQTY = useSelector(selectTotalQTY);

  const onCartToggle = () => {
    dispatch(setOpenCart({
      cartState: true
    }))
  }

  return (
    <nav className='relative md:h-[100px] h-[80px]'>
      <div className="shadow-md fixed bg-white md:h-[100px] h-[80px] z-10 w-full">
        <Announce />
        <div className="md:px-[20px] md:py-[10px] flex flex-col md:flex-row justify-around items-center">
          {/* Logo for destop*/}
          <div className="flex text-center">
            <Link to='/'>
              <div className="logo font-bold md:text-3xl cursor-pointer hover:text-blue-700">Ecommerce App</div>
            </Link>
          </div>

          {/* Search Input */}
          <div className="hidden md:flex justify-between my-0.5 lg:w-[500px] border-[2px] border-solid border-lightgrey rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#8a4af3]">
            <input type='text' className="outline-none px-2" placeholder="Search" />
            <Search className="text-[#8a4af3]" style={{ fontSize: '22px' }} />
          </div>

          {/* Right Side */}
          <div className="right flex items-center justify-end">
            <Link to='/'>
              <div className={style}>Home</div>
            </Link>
            <Link to='/register'>
              <div className={style}>Register</div>
            </Link>
            <Link to='/login'>
              <div className={style}>SignIn</div>
            </Link>
            <button type='button' onClick={onCartToggle} className={style}>
              <Badge badgeContent={totalQTY} color='primary'>
                <ShoppingCartOutlined />
              </Badge>
            </button>
          </div>
          <Carts />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

