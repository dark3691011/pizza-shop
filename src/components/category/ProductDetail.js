import React,{useState, useEffect} from 'react';
import './ProductDetail.css';
import {Link} from 'react-router-dom';
import '../../config';

function ProductDetail({match}) {
    // const [product, setProduct] = useState();

    // useEffect(() => {
    //     fetchProduct();
    // }, []);

    // const fetchProduct = async () => {try {
    //     let cateParams = '';
    //     if (match.params.id) cateParams = `&categoryId=${match.params.id}`;
    //     const response = await axios.get(
    //       `${config.server.link}/product?page=0&rows=2${cateParams}`,
    //     );
    //     setProduct(response.data.pagingData);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    return (
        <div>
            <div className="go__back">
                <Link to="/category">
                        Trở lại danh sách hàng
                </Link>
            </div>
            <div className="product__detail">
                <div className="detail__left">
                    <div className="description__product">
                        <h3>PIZZA PHỞ</h3>
                        <p>Pizza Phở giữ hương vị nguyên bản của món Phở truyền thống Việt Nam với nguyên liệu đặc trưng: thịt bò thái lát, bò viên, ngò gai, rau quế và hành tây, nước dùng thơm béo được nấu cô đặc tạo nên vị quê hương ai đi xa cũng nhớ. 
                        Nguyên liệu của Phở được đặt trên đế bánh tươi, quyện cùng lớp phô mai Mozzarella thơm béo.</p>
                    </div>
                    <div className="image__product">
                        <img src="https://dominos.vn/Data/Sites/1/Product/830/pizza-pho.png" alt="pizza pho"/>
                        <h1>149.000 ₫</h1>
                    </div>
                </div>
                <form className="detail__right">
                    <div className="detail__item">
                        <h4>Cỡ bánh</h4>
                        <div className="radio__detail">
                            <input type="radio" id="size-m" name="size" value="size-m"/>
                            <label htmlFor="size-m">Cỡ nhỏ</label>
                        </div>
                        <div className="radio__detail">
                            <input type="radio" id="size-l" name="size" value="size-l"/>
                            <label htmlFor="size-l">Cỡ lớn</label>
                        </div>
                    </div>
                    <div className="detail__item">
                        <h4>Đế bánh</h4>
                        <div className="radio__detail">
                            <input type="radio" id="size-m" name="base" value="size-m"/>
                            <label htmlFor="size-m">Cỡ nhỏ</label>
                        </div>
                        <div className="radio__detail">
                            <input type="radio" id="size-l" name="base" value="size-l"/>
                            <label htmlFor="size-l">Cỡ lớn</label>
                        </div>
                    </div>
                    <div className="detail__item">
                        <h4>Tùy chọn thêm</h4>
                        <div className="radio__detail">
                            <input type="radio" id="no_topping" name="topping" value="no_topping"/>
                            <label htmlFor="no_topping">Không thêm</label>
                        </div>
                        <div className="radio__detail">
                            <input type="radio" id="size-m" name="topping" value="size-m"/>
                            <label htmlFor="size-m">Thêm ít</label>
                        </div>
                        <div className="radio__detail">
                            <input type="radio" id="size-l" name="topping" value="size-l"/>
                            <label htmlFor="size-l">Thêm nhiều</label>
                        </div>
                    </div>
                    <button type="submit">Đặt bánh</button>
                </form>
                <ul class="ratings">
                    <li class="star"></li>
                    <li class="star"></li>
                    <li class="star"></li>
                    <li class="star"></li>
                    <li class="star"></li>
                </ul>
            </div>
        </div>
    )
}

export default ProductDetail
