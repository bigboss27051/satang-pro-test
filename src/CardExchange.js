import React from "react";
import { Card, Button, Typography } from "antd";
import numeral from 'numeral'
import { connect } from "react-redux";
import { getExchange } from "./redux/exchange/action";

const CardExchange = ({ dispatch, status, value, currentSymbol }) => {
  const handleOnClick = (symbol) => {
    dispatch(getExchange(symbol));
  };

  return (
    <Card
      title="Exchange Market"
      style={{
        width: 400,
      }}
    >
      <div className="card-content">
        <div className="wrapper-button">
          <Button type="primary" onClick={() => handleOnClick("btc_thb")}>
            BTC/THB
          </Button>
          <Button type="primary" onClick={() => handleOnClick("busd_thb")}>
            BUSD/THB
          </Button>
          <Button type="primary" onClick={() => handleOnClick("usdt_thb")}>
            USDT/THB
          </Button>
        </div>
        <div className="wrapper-display">
          <Typography level={5}>
            {value
              ? value[0].symbol.split("_")[0] +
                "/" +
                value[0].symbol.split("_")[1]
              : ""}
          </Typography>
          <Typography level={1}>{value ? numeral(value[0].lastPrice).format(0,0.00) : 0}</Typography>
          <p className="volumn">Volumn: {value ? numeral(value[0].quoteVolume).format(0,0.00): 0}</p>
        </div>
      </div>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    status: state.exchange.status,
    value: state.exchange.value,
    currentSymbol: state.exchange.currentSymbol,
  };
};

export default connect(
  mapStateToProps,
  null // Generaly its the place of mapStateToDispatch
)(CardExchange);
