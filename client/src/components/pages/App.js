

const App = () => {
  return (
    <div className="App">
      React App Home Page Until Router Switch Points Elsewhere
      <br/><br/>
      Routes for add/update/delete product POST requests are now:<br/>
      localhost:3000/admin/add-products<br/>
      localhost:3000/admin/update-product/:productId<br/>
      (delete) localhost:3000/admin/product/:productId<br/>
      <br/><br/>
      To use them, you will need to be logged in as an admin, which you can do here:<br/>
      localhost:3000/auth/admin-login<br/><br/>
      It will redirect you to the home page if it worked and otherwise display an error. Your credentials are:<br/>
      yourfirstname@test.com<br/>
      test123
    </div>
  );
}

export default App;
