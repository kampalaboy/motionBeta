import Image from 'next/image';
import styles from './loading.module.css';

export default function LoadingSkeleton() {
  return (
    <div className={styles["loading"]} >
      <Image src="/assets/images/Karibu.gif" width={300} height={300} alt="Loading" />
    </div>
  ) 
}
