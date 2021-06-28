const featureRoutes = {
  GET: [{
    featureName: "getCompleteAndIncompleteCount",
    route: "/api/mock/v1/get",
    responseKey: "./mocks/feature-name/GET_api_call_response.json"
  }],
  POST: [
    {
      featureName: "postExportAllCompletedVvs",
      route: "/api/mock/v1/post",
      responseKey: "./mocks/feature-name/POST_api_call_response.json"
    }
  ]
};

module.exports = {featureRoutes};

