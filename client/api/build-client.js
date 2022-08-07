import axios from 'axios';

export default  ({ req }) => {
  if (typeof window === 'undefined') {
    // We are on the server.window is availble in client
    //preconfiguring axios
    return axios.create({
      baseURL:
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
        //req.headers has cookie present and also host tickiting.dev which our ingress server is expecting
      headers: req.headers,
    });
  } else {
    // We must be on the browser
    return axios.create({
      baseUrl: '/',
    });
  }
};
