using AuthenticationService.Models;

namespace APIGateway.AuthenticationService.Repository
{
    public interface IMLRepository
    {
        bool CreateUser(UserLoginInfo user);
        bool LoginUser(UserLoginInfo user);
        bool IsUserExists(string? userEmail, string? role);
    }
}
