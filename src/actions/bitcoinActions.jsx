import axios from "axios";
import moment from "moment";

export const getData = ({ time, number }) => async dispatch => {
    try {
    dispatch({
      type: "AWAITING_BITCOIN"
    })

    const response = await axios.get(`https://financialmodelingprep.com/api/v3/historical-chart/${time}/BTCUSD?apikey=${process.env.REACT_APP_FINANCIAL_TRACKER_API_KEY}`)

    const labels = [];
    const data = [];
    //reversing the response
    for (let i = 0; i < response.data.length; i++) {
      data.unshift(response.data[i].close)
      labels.unshift(moment(response.data[i].date).format("LT"))
      //moment().format("LT") to make the time look nice
      if (i === (number - 1)) {
        break;
      }
    }

    dispatch({
      type: "SUCCESS_BITCOIN",
      payload: {
        data,
        labels
      }
    })
  } catch (e) {
    dispatch({
      type: "REJECTED_BITCOIN",
    })
  }
}

