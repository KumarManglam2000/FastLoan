using UserService.Models;

namespace UserService.Repository
{
    public interface IUserRepository
    {
        MBRegistration RegisterUser(MBRegistration user);
        MBRegistration UpdateUser(string userEmail, MBRegistration user);
        MBRegistration GetUserByEmail(string userEmail);
    }
}
