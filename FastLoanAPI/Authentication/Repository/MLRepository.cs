using AuthenticationService.Exceptions;
using AuthenticationService.Models;

namespace APIGateway.AuthenticationService.Repository
{
    public class MLRepository : IMLRepository
    {
        readonly AuthDbContext authDbContext;
        public MLRepository(AuthDbContext _authDbContext)
        {
            authDbContext = _authDbContext;
        }

        public bool CreateUser(UserLoginInfo user)
        {
            authDbContext?.Users?.Add(user);  
            authDbContext?.SaveChanges();
            return true;
        }

       

        public bool IsUserExists(string? userEmail,string? role)
        {
            UserLoginInfo? user = authDbContext.Users?.Where(u=>u.UserEmail == userEmail && u.Role == role).FirstOrDefault();
            if (user!=null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public bool LoginUser(UserLoginInfo user)
        {
            UserLoginInfo? userLogin = authDbContext.Users?.Where(u=>u.UserEmail==user.UserEmail&&u.Password==user.Password && u.Role==user.Role).FirstOrDefault();
            if (userLogin != null)
            {
                return true;
            }
            else
            {
               return false;
            }
            
        }
        
    }
}
