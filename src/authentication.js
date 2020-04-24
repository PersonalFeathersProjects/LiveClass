const { AuthenticationService, JWTStrategy } = require('@feathersjs/authentication');
const { LocalStrategy } = require('@feathersjs/authentication-local');
const { expressOauth, OAuthStrategy } = require('@feathersjs/authentication-oauth');


class GitHubStrategy extends OAuthStrategy {
  async getEntityData(profile) {
    const baseData = await super.getEntityData(profile);
    // console.log("profile data",profile)

    return {
      ...baseData,
      email: profile.email,
      name: profile.name,
      userName: profile.login,
      role: 'admin',
      active: true,
      avatar: profile.avatar_url,
    };
  }
}

class GoogleStrategy extends OAuthStrategy {
  async getEntityData(profile) {
    const baseData = await super.getEntityData(profile);
    // console.log("profile data", profile)
    // console.log("baseData", baseData)


    return {
      ...baseData,
      email: profile.email,
      avatar: profile.picture,
      name: profile.name,
      role: 'admin',
      active: true,
      userName: profile.given_name
    };
  }
}

module.exports = app => {
  const authentication = new AuthenticationService(app);

  authentication.register('jwt', new JWTStrategy());
  authentication.register('local', new LocalStrategy());
  authentication.register('google', new GoogleStrategy());
  authentication.register('github', new GitHubStrategy());


  app.use('/authentication', authentication);
  app.configure(expressOauth());
};
