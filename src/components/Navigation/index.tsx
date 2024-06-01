import { navigations } from "../../data/navigation";
import { Link, useLocation } from "react-router-dom";

import useCartStore from "../../hooks/useCartStore";

const Navigation = () => {
  const balance = useCartStore((state) => state.balance);
  const removeProduct = useCartStore((state) => state.removeProduct);

  const location = useLocation();
  const currentUrl = location.pathname;
  return (
    <nav className='header-nav inline-flex items-center'>
      <ul className='flex items-center'>
        {navigations.map((item) => {
          return (
            <li
              className={
                " group relative text-white" +
                (item.url == currentUrl ? " actived" : null) +
                (item.childs && " has-child")
              }
              key={item.id}
            >
              <Link to={item.url}>{item.name}</Link>
              {item.childs && item.childs.length > 0 ? (
                <div className='z-50 sub_child hidden group-hover:flex group-hover:flex-col text-slate-900 absolute bg-white py-3 px-2 min-w-[200px] leading-[2.4] left-[15px]'>
                  {item.childs.map((child) => {
                    return (
                      <Link
                        key={child.id}
                        to={item.url + child.url}
                        className='hover:bg-gray-300'
                      >
                        {child.name}
                      </Link>
                    );
                  })}
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
      <div className='flex gap-5'>
        <div className='header-cart'>
          <i className='fa fa-shopping-cart'></i>
          <span>{balance}</span>
        </div>
        {/* <div className='flex'>
          {balance == 0 ? (
            <button className='p-3 bg-slate-400 w-[60px] text-center' disabled>
              -
            </button>
          ) : (
            <button
              className='p-3 bg-red-500 w-[60px] text-center'
              onClick={removeProduct}
            >
              -
            </button>
          )}
        </div> */}
      </div>
    </nav>
  );
};

export default Navigation;
