using AuthenticationService.Models;

namespace AuthenticationService.Services
{
    public interface ITokenGeneratorService
    {
        string GenerateToken(UserLoginInfo user);
    }
}
