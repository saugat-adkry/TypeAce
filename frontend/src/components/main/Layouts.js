import Header from "./Headers";

function Layout({ children }) {

  return (
    <div className='d-flex flex-column vh-100'>
      <Header />
      <main className='flex-shrink-0 main'>
        <div className='container'>{children}</div>
      </main>
    </div>
  );
}

export default Layout;
