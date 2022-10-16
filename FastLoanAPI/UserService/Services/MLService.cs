using System;
using UserService.Exceptions;
using UserService.Models;
using UserService.Repository;

namespace UserService.Service
{
    public class MLService : IMLService
    {
        readonly IUserRepositoryL _userRepositoryL;
        public MLService(IUserRepositoryL userRepository)
        {
            _userRepositoryL = userRepository;
        }

        //login user
        public MLRegistration GetUserByEmail(string userEmail)
        {
            MLRegistration getByUserEmail = _userRepositoryL.GetUserByEmail(userEmail);
            if (getByUserEmail != null)
            {
                return _userRepositoryL.GetUserByEmail(userEmail);
            }
            else
            {
                throw new UserNotFoundException("This user id does not exist");
            }
        }

        //register user
        public MLRegistration RegisterUser(MLRegistration user)
        {

            MLRegistration userExists = _userRepositoryL.GetUserByEmail(user.Email);
            if (userExists == null)
            {
                return _userRepositoryL.RegisterUser(user);
            }
            else
            {
                throw new UserNotCreatedException("This user id already exists");
            }
        }

        //update user
        public MLRegistration UpdateUser(string userEmail, MLRegistration user)
        {
            MLRegistration userUpdate = _userRepositoryL.UpdateUser(userEmail, user);
            if (userUpdate!=null)
            {
                return userUpdate;
            }
            else
            {
                throw new UserNotFoundException("This user id does not exist");
            }
        }
    }
}

