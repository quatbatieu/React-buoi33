import React from "react";

const ProductDetails = ({product,  isOpen = false, onClose }) => {
  if (!product) {
    // Không có sản phẩm => không cần render giao diện
    return null;
  }
  console.log(product);
  return (
    <>
      <div
        style={{ display: isOpen ? "block" : "none" }}
        className="modal fade show"
        tabindex="-1"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Chi tiết sản phẩm</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <table className="table">
                <div className="row mt-5">
                  <div className="col-sm-6">
                    <img
                      src={product.image}
                      width="100%"
                      height="500px"
                    />
                  </div>
                  <div className="col-sm-6">
                    <h1>Thông số</h1>
                    <table className="table">
                      <tbody>
                      <tr>
                          <td>Tên</td>
                          <td>{product.name}</td>
                        </tr>
                        <tr>
                          <td>Thương hiệu</td>
                          <td>{product.alias}</td>
                        </tr>
                        <tr>
                          <td>Giá</td>
                          <td>${product.price}</td>
                        </tr>
                        <tr>
                          <td>Mô tả</td>
                          <td>{product.description}</td>
                        </tr>
                        <tr>
                          <td>số lượng</td>
                          <td>{product.quantity}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && <div className="modal-backdrop fade show"></div>}
    </>
  );
};

export default ProductDetails;
