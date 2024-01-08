import numpy as np
import pandas as pd
import warnings
from pmdarima import auto_arima
from statsmodels.tsa.arima.model import ARIMA

warnings.filterwarnings('ignore')
input_location = input("Enter file location\n")
num_predictions = int(input("Number of future predictions\n"))
output_location = input("Location for new file\n")

data = pd.read_csv(input_location, index_col='Date', parse_dates=True,
                   date_parser=lambda x: pd.to_datetime(x, format='%d-%m-%Y'))
stepwise_fit = auto_arima(
    data['Average of OEE VALUE'], trace=True, suppress_warnings=True)
best_order = stepwise_fit.get_params()['order']

model = ARIMA(data['Average of OEE VALUE'], order=best_order)
model = model.fit()
start = len(data)
end = start + num_predictions - 1

predicted_values = np.round(model.predict(
    start=start, end=end).rename('Average of OEE VALUE'), 2)
predictions_df = pd.concat(
    [data.tail(12), pd.DataFrame(predicted_values)], axis=0)
predictions_df.index.name = 'Date'
predictions_df.to_csv(output_location)
