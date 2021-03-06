import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import { connect } from "react-redux";
import { closeProductModal as closeProductModalAction } from "../../actions/actions";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "70vw",
    height: "80vh",
  },
}));

const ProductsDoneModal = ({
  isProductModalOpen,
  closeProductModal,
  selectedOrder,
}) => {
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isProductModalOpen}
      onClose={closeProductModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isProductModalOpen}>
        <div className={classes.paper}>
          <h2 id="transition-modal-title">lista produktów</h2>
          {selectedOrder === null ? (
            ""
          ) : (
            <ul>
              {selectedOrder.products.map((product) => {
                const {
                  productId,
                  productName,
                  productType,
                  productQuantity,
                  productPrice,
                  productCurrency,
                } = product;
                return (
                  <li key={productId}>
                    <h4>nazwa: {productName}</h4>
                    <p>typ: {productType}</p>
                    <p>ilość: {productQuantity}</p>
                    <p>
                      cena: {productPrice} {productCurrency}
                    </p>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </Fade>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    isProductModalOpen: state.isProductModalOpen,
    selectedOrder: state.selectedOrder,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeProductModal: () => dispatch(closeProductModalAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsDoneModal);
