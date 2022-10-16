using APIGateway.AuthenticationService.Repository;
using AuthenticationService.Exceptions;
using AuthenticationService.Models;

namespace AuthenticationService.Services
{
    public class AuthService : IAuthService
    {
        readonly IMLRepository mlRepository;
        public AuthService(IMLRepository _mlRepository)
        {
            mlRepository = _mlRepository;
        }

        public bool LoginUser(UserLoginInfo user)
        {
            bool isUserLoggedIn = mlRepository.LoginUser(user);
            if (isUserLoggedIn)
            {
                return true;
            }
            else
            {
                throw new UserNotFoundException($"This userEmail {user.UserEmail} is not exist");
            }
        }

        public bool RegisterUser(UserLoginInfo user)
        {
            bool isUserExists = mlRepository.IsUserExists(user.UserEmail,user.Role);
            if (isUserExists)
            {
                throw new UserAlreadyExistException($"This userEmail {user.UserEmail} already in use");
            }
            else
            {
                return mlRepository.CreateUser(user);

            }

        }

    }
}
