//routes , metodo post y metodo get

import {Router} from "express";
import {methods as realTimeDataController} from "../controllers/data.controller"; 
const router = Router();
// metodos get()
router.get('/api/dataRealTime',realTimeDataController.getRealTimeData);
router.get('/api/getDataWeather',realTimeDataController.getDataWeatherStation);
router.get('/api/getDataRain',realTimeDataController.getRainData);
// metodos post()
router.post("/api/insert-data",realTimeDataController.insertDataWeatherStation);
router.post('/api/showData',realTimeDataController.showDataFromESP32);
router.post('/api/pluviometro',realTimeDataController.insertRanning);

export default router;

