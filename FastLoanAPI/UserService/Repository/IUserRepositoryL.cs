using UserService.Models;

namespace UserService.Repository
{
    public interface IUserRepositoryL
    {
        MLRegistration RegisterUser(MLRegistration user);
        MLRegistration UpdateUser(string userEmail, MLRegistration user);
        MLRegistration GetUserByEmail(string userEmail);
    }
}
