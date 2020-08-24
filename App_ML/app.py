import flask
import pandas as pd
import pickle
import keras
import numpy as np

# Use pickle to load in the pre-trained model.
with open(f'model/_Crop_Train_.pkl', 'rb') as f:
	modelCrop = pickle.load(f)

with open(f'model/_Humidity_.pkl', 'rb') as f:
	modelHumidity = pickle.load(f)

with open(f'model/_NDVI_.pkl', 'rb') as f:
		modelNDVI = pickle.load(f)

with open(f'model/_Soil_Moisture_.pkl', 'rb') as f:
		modelMoisture = pickle.load(f)

with open(f'model/_Temp_.pkl', 'rb') as f:
		modelTemp = pickle.load(f)

dataset = pd.read_csv('content/data2015_2019.csv')
nparray = dataset.to_numpy()



arr = dataset.to_numpy()

def previous_year(year):
	index = year-2015
	predArray = arr[index, :]
	prediction = modelCrop.predict([predArray])[0]
	return prediction


def feature_pred(year):
	humidarray = nparray[-4:, 0]
	moistarray = nparray[-4:, 2]
	ndviarray = nparray[-4:, 1]
	temparray = nparray[-4:, 3]
	for i in range(year-2019):
		trial = humidarray[-4:]
		print(trial)
		trial = trial.reshape(1, 4, 1)
		predHumid = modelHumidity.predict(trial, verbose=0)
		print(predHumid[0])
		humidarray = np.append(humidarray, predHumid[0][0])


		trial = moistarray[-4:]
		print(trial)
		trial = trial.reshape(1, 4, 1)
		predMoist = modelMoisture.predict(trial, verbose=0)
		print(predMoist[0])
		moistarray = np.append(moistarray, predMoist[0][0])

		
		trial = ndviarray[-4:]
		print(trial)
		trial = trial.reshape(1, 4, 1)
		predNDVI = modelNDVI.predict(trial, verbose=0)
		print(predNDVI[0])
		ndviarray = np.append(ndviarray, predNDVI[0][0])

		trial = temparray[-4:]
		print(trial)
		trial = trial.reshape(1, 4, 1)
		predTemp = modelTemp.predict(trial, verbose=0)
		print(predTemp[0])
		temparray = np.append(temparray, predTemp[0][0])

	feat = [[predHumid[0][0], predNDVI[0][0], predMoist[0][0], predTemp[0][0]]]
	prediction = modelCrop.predict(feat)[0]
	return prediction

app = flask.Flask(__name__, template_folder='templates')

@app.route('/', methods=['GET', 'POST'])
def main():
	# testHumid = humid.reshape(1, 4, 1)
	# humid2020 = modelHumidity.predict(testHumid)[0]
	# print(humid2020)
	# feature_2020()
	if flask.request.method == 'GET':
		return(flask.render_template('main.html'))
	if flask.request.method == 'POST':
		year = flask.request.form['year']
		year = int(year)



		if year < 2020 and year >2014:
			prediction = previous_year(year)
			return flask.render_template('main.html', result=prediction)
		
		if year > 2019 and year < 2025:
			prediction = feature_pred(year)
			return flask.render_template('main.html', result=prediction)

		# if year == '2020':
		# 	prediction = modelCrop.predict([feat2020])[0]  
		# 	return flask.render_template('main.html', result=prediction)   
		# if year == '2021':
		# 	prediction = modelCrop.predict([feat2021])[0]
		# 	return flask.render_template('main.html', result=prediction)

		# if year == '2019':
		# 	prediction = modelCrop.predict([feat2019])[0]
		# 	return flask.render_template('main.html', result=prediction)

			

		return flask.render_template('main.html', error=1)


if __name__ == '__main__':
	app.run()







		# if year == '2019':
		#     prediction = modelCrop.predict([feat2019])[0]
		
