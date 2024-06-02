import { ProductList } from "../../components/ProductList/ProductList";
import styles from "./Home.module.css"

// Home component is the main landing page that displays the list of products
export function Home() {

    return (
        <>
            <div className={`${styles.banner} row row-cols-md-2`}>
                <div className="col-md-8 bg-dark-grey d-flex justify-content-end">
                    <div className={`${styles.sectionLeft} d-flex flex-column justify-content-center`}>
                        <h1 className={`${styles.heroText} text-white mb-4`}>Shop Smart at <br />
                            The Corner Store
                        </h1>
                        <p className="text-white col-8">Buy everyday essentials at everyday prices. Experience quality and unbeatable value, all in one place. From household staples to unique finds, discover what you need effortlessly at The Corner Store.</p>

                        <img src="/image-1.png" className={`${styles.heroImage} d-none d-md-block`} alt="Man wearing beanie using a laptop" />
                    </div>
                </div>
                <div className="col-md-4 bg-medium-grey d-none d-md-flex justify-content-end">
                    <div className={`${styles.sectionRight} d-none d-md-flex bg-medium-grey d-flex`}>
                        <img src="/snake.png" alt="Abstract shape" />
                    </div>
                </div>
            </div>
            <ProductList />
        </>
    )
}