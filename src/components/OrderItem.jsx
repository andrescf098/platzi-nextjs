import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import styles from '@styles/OrderItem.module.scss';
import close from '@icons/icon_close.png';
const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <div className={styles.OrderItem}>
      <figure>
        <Image
          loader={() => {
            product?.images[0];
          }}
          src={product?.images[0]}
          width={50}
          height={50}
          alt={product?.title}
        />
      </figure>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <Image className={`${styles['pointer']} ${styles['more-clickable-area']}`} src={close} alt="close" onClick={() => handleRemove(product)} />
    </div>
  );
};

export default OrderItem;
