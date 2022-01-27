

        {/* <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route
            path="/todo"
            element={
              <UnauthenticatedRoute>
                <LoginContainer />
              </UnauthenticatedRoute>
            }
            />
          <Route
            path="/home"
            element={user ? <HomeContainer /> : <Navigate to="/login" />}
          />
          <Route
            path="/feed"
            element={
              user ? <FeedContainer auth={auth} /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/profile"
            element={<ProfileContainer user={auth.currentUser} />}
          />
        </Routes> */}


            //   <AuthContextProvider>
    //     <Router>
    //       <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    //       <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    //       <Routes>
    //         <UnauthenticatedRoute path="/login" element={<LoginContainer />} />
    //         {/* <UnauthenticatedRoute path="/signup" component={<Signup />} />
    //         <AuthenticatedRoute path="/" component={<HomeContainer />} /> */}
    //         {/* <AuthenticatedRoute exact path="/feed" component={<FeedContainer />} />
    //         <AuthenticatedRoute exact path="/profile" component={<ProfileContainer />} /> */}

    //         {/* <Route path="/" element={<Navigate to="/login" />} /> */}
    //         {/* <Route path="/login" element={<LoginContainer />} /> */}
    //         {/* <Route
    //           path="/home"
    //           element={user ? <HomeContainer /> : <Navigate to="/login" />}
    //         /> */}
    //         {/* <Route
    //           path="/feed"
    //           element={
    //             user ? <FeedContainer auth={auth} /> : <Navigate to="/login" />
    //           }
    //         />
    //         <Route
    //           path="/profile"
    //           element={<ProfileContainer user={auth.currentUser} />}
    //         /> */}
    //       </Routes>
    //     </Router>
    //   </AuthContextProvider>
    //   {/* <button onClick={getLoggedIn}>click me</button> */}
    // </>

//     <AuthContextProvider>
//     <Router>
//       <div>
//         <Link to="/">Home</Link> | <Link to="/login">Login</Link> |{' '}
//         <Link to="/signup">SignUp</Link>
//       </div>
//       <AuthenticatedRoute exact path="/" component={HomeContainer} />
//       {/* <UnauthenticatedRoute exact path="/signup" component={S} /> */}
//       <UnauthenticatedRoute exact path="/login" component={LoginContainer} />
//     </Router>
//   </AuthContextProvider>


      //  <Routes>
      //     <UnauthenticatedRoute exact path="/login" component={<LoginContainer />} />
      //   </ Routes>