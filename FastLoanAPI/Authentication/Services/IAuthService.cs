using AuthenticationService.Models;

namespace AuthenticationService.Services
{
    public interface IAuthService
    {
        bool RegisterUser(UserLoginInfo user);
        bool LoginUser(UserLoginInfo user);
    }
}
