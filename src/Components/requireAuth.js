
const requireAuth = (nextState, replace, next) => {
    if (!authenticated) {
        replace({
          pathname: "/login",
          state: {nextPathname: nextState.location.pathname}
        });
      }
      next();
}

export default requireAuth