import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';
import Header from '../components/header';

//Nextjs doesnt directly show any component.It wraps that in component in this _app.js component.
//So here to add global files we are customizing _app behaviour.
//So basically Component argument here is our written component which is now rendering so it is called and wrapped inside this
//we are passing props to each component
const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div >
      <Header currentUser={currentUser} />
      <div className='container'>
        <Component currentUser={currentUser} {...pageProps}  />
      </div>
      
    </div>
  );
};
//here context argument also have component and request nested in it and not only request like other components.
//so retrieving request from it .ctx from contect contains request.
//But if app component have get initial props then other subcomponents initial props method does not get called.
//so we will have to invoke getinitial props method of other components on our own forcefully.and giving it default parameter 
//which it expects appContext.ctx
AppComponent.getInitialProps = async appContext => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx,client,data.currentUser);
  }
  //this will be availble to each component as prop we are passing that prop above in component
  return {
    pageProps,
    ...data
  };
};

export default AppComponent;
