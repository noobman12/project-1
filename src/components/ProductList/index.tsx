import React from "react";
import { useQuery } from "@tanstack/react-query";
import useCartStore from "../../hooks/useCartStore";

const ProductList: React.FC = () => {
  const addProduct = useCartStore((state) => state.addProduct);

  const handleAddProduct = () => {
    addProduct();
  };

  interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    images: Array<string>;
    category: { id: number; name: string; image: string };
  }

  // Sử dụng useQuery để fetch data từ API
  const { data, isLoading, isError, error } = useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: () =>
      fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=4").then(
        (res) => res.json()
      ),
  });

  // Nếu đang loading, hiển thị một thông báo
  if (isLoading) return <div>Đang tải...</div>;

  // Nếu có lỗi, hiển thị một thông báo
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  // Nếu thành công, hiển thị danh sách sản phẩm
  return (
    <section className='sections'>
      <h2 className='section_title text-center'>Danh sách sản phẩm</h2>

      <div className='product_wrapper flex'>
        {data?.map((product: Product) => (
          <div
            key={product.id}
            className={
              "product_item " +
              "product_id_" +
              product.id +
              " category_id_" +
              product.category.id
            }
          >
            <img
              src={product.images[0]}
              alt=''
              style={{ cursor: "pointer" }}
              onClick={handleAddProduct}
            />

            <h3>{product.title}</h3>
            <div className='flex'>
              <span>{product.category.name}</span>
              <img
                src={product.category.image}
                alt=''
                style={{ width: "30px", height: "30px" }}
              />
            </div>
            <div className='price'>
              <strong>{product.price}$</strong>
            </div>
            <div className='description'>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
