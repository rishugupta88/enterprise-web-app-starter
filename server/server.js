const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
const {featureRoutes} = require("./mocks-routes.config");

featureRoutes.GET.forEach(request => {
  const mockData = require(request.responseKey);
  router.get(request.route, (req, res) => res.status(200).send(mockData));
});

featureRoutes.POST.forEach(request => {
  const mockData = require(request.responseKey);
  router.post(request.route, (req, res) => res.status(200).send(mockData));
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(router).listen(4300, () => console.log('Mock server is available at http://localhost:%s', 4300));
