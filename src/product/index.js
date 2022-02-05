import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function () {
    axios
      .get(
        `https://77222c5c-d16c-4c47-980f-3dea13df8ec5.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        setProduct(result.data);
        console.log(result);
      })
      .catch(function (error) {
        console.log("error : ", error);
      });
  }, []);

  if (product === null) {
    return <h1>상품 정보를 준비 중 입니다......</h1>;
  }
  return (
    <div>
      <div>
        <div id="image-box">
          <img src={"/" + product.imageUrl} />
        </div>
        <div id="profile-box">
          <img src="/images/icons/avatar.png" />
          <span>{product.seller}</span>
        </div>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">2022년 2월 5일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}
export default ProductPage;
